import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
        {text}
      </button>
    </div>
  );
};

// Define prop types for validation
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
