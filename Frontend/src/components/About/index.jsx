import './About.css';
import aboutImageTop from '../../assets/About1.avif';
import aboutImageBottom from '../../assets/About2.webp';

const AboutComponent = () => {
  return (
    <>
      {/* Top Section */}
      <section className="about-section">
        <div className="about-left">
          <h2>Our Story</h2>
          <p>
            We offer skin, hair and body care formulations created with meticulous attention to detail,
            and with efficacy and sensory pleasure in mind.
          </p>
        </div>
        <div className="about-right">
          <img src={aboutImageTop} alt="About Aesop" />
        </div>
      </section>

      {/* Bottom Section */}
      <section className="about-bottom-section">
        <div className="about-bottom-left">
          <img src={aboutImageBottom} alt="Aesop Established" />
        </div>
        <div className="about-bottom-right">
          <h2>Aesop was established in 1987. We are headquartered in Melbourne, and have offices and stores in many parts of the world.</h2>
          <p>
            Our objective has always been to formulate skin, hair and body care products of the finest quality;
            we investigate widely to source plant-based and laboratory-made ingredients, and use only those with
            a proven record of safety and efficacy. In each of our unique stores, informed consultants are pleased
            to introduce the Aesop range and to guide your selections.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
