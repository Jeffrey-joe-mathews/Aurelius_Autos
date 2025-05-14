import './aboutPage.scss';

function AboutPage() {
  return (
    <div className='aboutPage'>
      <div className="txtContainer">
        <div className="wrapper">
          <h1 className='title'>About Aurelius Autos</h1>
          <p>
            Aurelius Autos was founded with a simple idea: to make car rentals accessible, flexible, and stress-free. We empower both car owners and renters by providing a seamless platform to list and rent vehicles.
          </p>
          <p>
            Whether you're planning a weekend getaway or need a ride while your car's in the shop, Speedy Rentals is here to get you moving.
          </p>
          <div className="boxes">
            <div className="box">
              <h1>4.9★</h1>
              <h2>Average User Rating</h2>
            </div>
            <div className="box">
              <h1>10K+</h1>
              <h2>Happy Customers</h2>
            </div>
            <div className="box">
              <h1>500+</h1>
              <h2>Partner Vehicles</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.svg" alt="About us" />
      </div>
    </div>
  );
}

export default AboutPage;
