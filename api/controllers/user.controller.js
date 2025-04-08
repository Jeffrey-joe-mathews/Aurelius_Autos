export const getUsers = async (req, res) => {
    try {
        console.log("Hello Warudo *w*")
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error, unable to GET users"
            }
        )
    }
}
export const getUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error, unable to GET user"
            }
        )
    }
}
export const updateUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error, unable to SET user"
            }
        )
    }
}
export const deleteUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Internal Server Error, unable to DELETE user"
            }
        )
    }
}