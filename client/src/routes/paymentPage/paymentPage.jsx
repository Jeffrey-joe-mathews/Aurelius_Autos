import { useLocation, useNavigate } from 'react-router-dom';
import './paymentPage.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { postId, selectedDates, total } = location.state || {};
  const [paid, setPaid] = useState(false);

  const handleFakePayment = async () => {
    console.log(postId)
    console.log(selectedDates)
    try {
      setPaid(true);
  
      await apiRequest.post('/booking', {
        postId: postId,
        selectedDates: selectedDates.map(date => new Date(date).toISOString())
      });

      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Something went wrong with booking.");
      setPaid(false);
    }
  };
  

  return (
    <div className="paymentPage">
      <div className="card">
        <h2>Booking Summary</h2>
        <p><strong>Booked by:</strong> {currentUser?.username || 'Guest'}</p>
        <p><strong>Selected Days:</strong> {selectedDates?.length || 0}</p>
        <p><strong>Total Amount:</strong> ₹{total}</p>

        {!paid ? (
          <button onClick={handleFakePayment}>Pay Now with UPI</button>
        ) : (
          <p className="success">Processing Payment... 🚀</p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
