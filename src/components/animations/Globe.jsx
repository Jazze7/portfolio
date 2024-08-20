import React, { useState, useEffect } from "react";

function Meteor({ theme }) {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: -10,
  });
  
  const [color, setColor] = useState("#FFF"); // Default color

  useEffect(() => {
    const animateMeteor = () => {
      setPosition((prev) => ({
        x: prev.x - 2,
        y: prev.y + 2,
      }));
    };

    const intervalId = setInterval(animateMeteor, 20);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Generate a random color
    const getRandomColor = () => {
      const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    setColor(getRandomColor());
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: "2px",
        height: "20px",
        background: color,
        transform: "rotate(45deg)",
        opacity: 0.7, // Slightly higher opacity for better visibility
      }}
    />
  );
}

export default Meteor;
