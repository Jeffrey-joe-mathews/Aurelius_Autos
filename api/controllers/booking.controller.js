import prisma from "../lib/prisma.js";

export const createBooking = async (req, res) => {
  try {
    const { postId, selectedDates } = req.body;
    const userId = req.userId;

    if (!postId || !selectedDates || !selectedDates.length) {
      return res.status(400).json({ success: false, message: "Invalid booking data" });
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: { availableDates: true },
    });

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    const selected = selectedDates.map(date => new Date(date));
    const updatedDates = post.availableDates.filter(date =>
      !selected.find(sel => new Date(sel).toISOString() === new Date(date).toISOString())
    );

    // Create booking
    await prisma.booking.create({
      data: {
        userId,
        postId,
        bookedDates: selected,
      },
    });

    // Update the post's available dates
    await prisma.post.update({
      where: { id: postId },
      data: {
        availableDates: updatedDates,
      },
    });

    res.status(200).json({ success: true, message: "Booking confirmed" });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ success: false, message: "Booking failed" });
  }
};

export const getBooking  = async(req, res) => {

  try{
    const postId = req.params.id
    const currentUserId = req.userId

    console.log(postId)
    const post = await prisma.post.findUnique({
      where:{
        id:postId
      }
    });
    console.log(post.userID)
    console.log(currentUserId)
    if(!post || post.userID!==currentUserId) {
      return res.status(403).json(
        {
          success: false,
          message: "Not authorized to view bookings"
        }
      )
    }

    const bookings = await prisma.booking.findMany({
      where: {
        postId: postId
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            avatar: true,
            email: true
          },
        },
      },
    });
    return res.status(200).json(
      {
        success: true,
        data: bookings
      }
    )
  }
  catch(err) {
    return res.status(500).json(
      {
        success: false,
        message: "Failed to fetch Bookings"
      }
    )
  }
}