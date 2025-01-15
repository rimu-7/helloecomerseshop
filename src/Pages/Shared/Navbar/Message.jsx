// Message.jsx
import React from "react";
import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";

const Message = ({ text, sender, timestamp }) => {
  console.log("Timestamp:", timestamp); // Debugging line

  // WhatsApp number
  const whatsappNumber = "+880193456789";
  const whatsappMessage = encodeURIComponent(text); // Encode the message text for URL

  // Function to check if the user is on a mobile device
  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  // Determine the appropriate link based on the device
  const whatsappLink = isMobile()
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  return (
    <div className="message">
      <div className="message-header">
        <span className="message-sender">{sender}</span>
        {/* <span className="message-timestamp">{formattedTime}</span> */}
      </div>
      <div className="message-body">{text}</div>
      <div className="message-footer">
        <a
          href={whatsappLink}
          className="text-gray-700 rounded-md p-2 ease-in-out"
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
        >
          <FaWhatsapp className="text-lg hover:transition hover:duration-300 hover:text-green-500 " />
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
