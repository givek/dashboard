import "./styles.css";
import hero from "../../icons/hero-image.png";
import customers from "../../icons/customers.png";
import testimonials from "../../icons/testimonials.png";

export function Main() {
  return (
    <div className="main">
      <div className="hero">
        <img src={hero} alt="hero" />
      </div>
      <div className="customers">
        <img src={customers} alt="customers" />
      </div>
      <div className="testimonials">
        <img src={testimonials} alt="testimonials" />
      </div>
    </div>
  );
}
