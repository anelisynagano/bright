import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "bright_flash", e.target, "user_tiJzqT1DSJDfcaGluuKTG")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function Clicked() {
    function confirmEmail(e) {
      e.preventDefault();
    }
    alert(
      "Yay! Your email was sent! We will get back to you as soon as possible!"
    );
  }

  return (
    <div>
      <div className="contact-container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dg5lakmem/image/upload/v1619095195/Bright%20Flash/Contact-cropped_eg41xz.jpg"
            alt=""
            className="contact-image"
          />
        </div>
        <div className="form-page">
          <img
            src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618995903/Bright%20Flash/Contact-us_wazpuz.png"
            alt=""
            className="contact-caption"
          />
          <h2 className="contact-text">
            Share your thoughts, tell us about inspiring women you know, or just
            say hi!
          </h2>
          <br></br>
          <form onSubmit={Contact} onSubmit={Clicked}>
            <div className="row pt-5 mx-auto">
              <div className="input-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's your name beautiful?"
                  name="name"
                />
              </div>
              <div className="input-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="What's your email superstar??"
                  name="email"
                />
              </div>
              <div className="input-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's up?"
                  name="subject"
                />
              </div>
              <div className="input-form">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Tell me everything..."
                  name="message"
                />
              </div>
              <div className="input-form">
                <button className="button-contact">
                  <span>Send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
