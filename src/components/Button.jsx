import React from "react";

const Button = () => {
  return (
    <div className="text-center mt-14 sm:mt-16">
      <button className="bg-yellow-400 p-2 rounded-md hover:bg-yellow-300 transition-all">
        <a href="/my_file.pdf" download="kzh_file.pdf">
          Download
        </a>
      </button>
    </div>
  );
};

export default Button;
