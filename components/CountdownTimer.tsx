
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to end of Q1 (arbitrary for urgency)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15); // 15 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-center">
      {[
        { label: 'Dias', value: timeLeft.days },
        { label: 'Hrs', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Seg', value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 w-16 md:w-24">
          <div className="text-xl md:text-3xl font-bold text-[#fa3a40]">{item.value.toString().padStart(2, '0')}</div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/70">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
