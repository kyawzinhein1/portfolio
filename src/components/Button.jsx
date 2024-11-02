import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        {text}
      </button>
    </div>
  );
};

export default Button;
