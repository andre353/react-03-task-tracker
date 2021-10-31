import PropTypes from "prop-types";

const Button = ({ color, text, onClickProperty }) => {

  return (
    <button onClick={onClickProperty} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClickProperty: PropTypes.func,
};

export default Button;
