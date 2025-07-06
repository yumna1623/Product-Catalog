import './Contact.css';

const ContactComponent = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Customer Service</h2>

      <div className="contact-boxes">
        <div className="contact-box">
          <h3>WhatsApp</h3>
          <p>+92 300 1234567</p>
        </div>

        <div className="contact-box">
          <h3>Email</h3>
          <p>support@aesopcare.com</p>
        </div>

        <div className="contact-box">
          <h3>Address</h3>
          <p>1st Floor, SkinCare Plaza, Zamzama Blvd, Karachi, Pakistan</p>
        </div>

        <div className="contact-box">
          <h3>Submit an Enquiry</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
