import React from "react";
import PropTypes from "prop-types";
import { BsWhatsapp } from "react-icons/bs";

const Message = ({ text, sender, timestamp }) => {
  console.log("Timestamp:", timestamp);

  // WhatsApp number
  const whatsappNumber = "+880193456789"; 
  const whatsappMessage = encodeURIComponent(text); // Encode the message text for URL

  // Function to check if the user is on a mobile device
  const isMobile = () => {
    if (typeof navigator === "undefined") return false; // Ensure the code only runs in a browser
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  // Determine the appropriate link based on the device
  const whatsappLink = isMobile()
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  console.log("Generated WhatsApp Link:", whatsappLink);

  return (
    <div className="message">
      <div className="message-header">
        <span className="message-sender">{sender}</span>
      </div>
      <div className="message-body">{text}</div>
      <div className="message-footer">
        <a
          href={whatsappLink}
          className="rounded-md ease-in-out"
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
        >
          <div className="hover:text-green-600 hover:transition-colors duration-200">
            <BsWhatsapp size={24} />
          </div>
        </a>
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Message;
