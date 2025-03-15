import React, { useState, useEffect } from "react";
import "./Popup.css";
import gift from "./gift.png";

const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offerEndDate, setOfferEndDate] = useState(null);
  const startDateTime = new Date('2025-03-16T00:00:00Z'); // Today's date

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
      
      // Close the popup after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }, 5000);

    setOfferEndDate(new Date(startDateTime.getTime() + 60 * 24 * 60 * 60 * 1000));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsOpen(false);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
        const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");

        const daysEl = document.querySelector(".days");
        const hoursEl = document.querySelector(".hours");
        const minutesEl = document.querySelector(".minutes");
        const secondsEl = document.querySelector(".seconds");

        if (daysEl && hoursEl && minutesEl && secondsEl) {
          daysEl.innerHTML = days;
          hoursEl.innerHTML = hours;
          minutesEl.innerHTML = minutes;
          secondsEl.innerHTML = seconds;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [offerEndDate]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popup-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <img className="gift-icon" src={gift} alt="Gift Icon" />
            <h2>GrapplerFest Sale</h2>
            <p>
              Unlock a limited-time offer: Enjoy a staggering 80%+ off on our exclusive training program. Don't miss out on this incredible opportunity to enhance your skills and accelerate your career. Take a step towards success with GrapplTech's discounted training today!
            </p>
            <div className="timer-container">
              <p>Offer ends in:</p>
              <div className="timer">
                <div className="days">00</div>
                <div className="hours">00</div>
                <div className="minutes">00</div>
                <div className="seconds">00</div>
              </div>
            </div>
            {/* <button className="close-button" onClick={togglePopup}>
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
