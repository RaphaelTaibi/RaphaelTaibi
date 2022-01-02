import { useState } from "react";
import "./contact.scss";
import saveFile from "../file-saver/saveFile";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Merci, je vous reponderais sous peu. </span>}
        </form>
        <button className="cv" onClick={saveFile}>
                Download CV
            </button>
      </div>
    </div>
  );
}