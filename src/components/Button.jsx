import React from "react";

const Button = () => {
  return (
    <div className="text-center mt-14 sm:mt-16">
      <button className="bg-orange-600 text-white px-1 py-2 rounded-md hover:bg-orange-700 transition-all">
        <a href="/my_file.pdf" download="kzh_file.pdf">
          Download
        </a>
      </button>
    </div>
  );
};

export default Button;
