import "./Tooltip.scss";

type TooltipProps = {
  children: React.ReactNode;
  text: string;
};

const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltip__copy">{text}</div>
    </div>
  );
};

export default Tooltip;
