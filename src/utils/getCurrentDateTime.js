import React from 'react';

function getCurrentDateTime(targetDate) {
    const now = new Date();
    const remainingTime = targetDate - now;
    
    if (remainingTime < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const secondsInMinute = 60;
  
    const totalSeconds = Math.floor(remainingTime / 1000);
    
    const days = Math.floor(totalSeconds / secondsInDay);
    const hours = Math.floor((totalSeconds % secondsInDay) / secondsInHour);
    const minutes = Math.floor((totalSeconds % secondsInHour) / secondsInMinute);
    const seconds = totalSeconds % secondsInMinute;
  
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
export default getCurrentDateTime;