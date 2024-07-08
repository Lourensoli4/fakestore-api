import { useEffect } from "react";
import "./Toast.scss";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onClose?: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  const closeToast = () => {
    if (onClose) onClose();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 3000);

    return () => clearTimeout(timer);
  }, [closeToast]);

  return (
    <div className={`toast toast--${type}`} onClick={closeToast}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
