import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Abhishek",
    "Web Developer",
    
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 5) {
        setIsForward(false);
      }

      if (endValue < 0) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setEndValue(0);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return (
    <div className="transition ease-in-out duration-300">
      {currentText}
    </div>
  );
};

export default TextChange;