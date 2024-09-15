// @/utils/TimeCountdown.js
import { useEffect, useState } from "react";

// Helper function to calculate the remaining time
function getCurrentDateTime(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: "0", hours: "0", minutes: "0", seconds: "0" };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function useTimeCountdown(targetDate) {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateCountdown = () => {
      setCountdown(getCurrentDateTime(targetDate));
    };

    calculateCountdown(); 

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval); 
  }, []); 

  return countdown;
}

export default useTimeCountdown;
