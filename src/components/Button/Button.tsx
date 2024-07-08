import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  type: "beige" | "blue" | "red" | "red-close";
  onClick?: () => void;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button className={`button button--${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
