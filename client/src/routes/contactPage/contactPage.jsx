import './contactPage.scss';

function ContactPage() {
  return (
    <div className='contactPage'>
      <div className="txtContainer">
        <div className="wrapper">
          <h1 className="title">Get in Touch</h1>
          <p>
            Need help, have a question, or want to give feedback? Our support team is just a message away.
          </p>
          <p>
            Reach out to us through the following channels. We typically respond within 24 hours.
          </p>
          <div className="boxes">
            <div className="box">
              <h1>Email</h1>
              <h2>support@aureliusAutos.com</h2>
            </div>
            <div className="box">
              <h1>Phone</h1>
              <h2>+1 (800) 123-4567</h2>
            </div>
            <div className="box">
              <h1>Hours</h1>
              <h2>Mon–Fri: 9 AM to 6 PM</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.svg" alt="Contact us" />
      </div>
    </div>
  );
}

export default ContactPage;
