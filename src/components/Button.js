const Button = ({ text, onShow }) => {
  return (
    <a class="btn" href="#" onClick={onShow}>
      {text}
    </a>
  );
};

export default Button;
