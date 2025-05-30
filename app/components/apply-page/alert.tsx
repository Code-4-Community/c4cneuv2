import React from "react";

interface AlertProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const colorClasses = {
  success: {
    text: "text-green-800",
    bg: "bg-green-50",
    darkText: "dark:text-green-400",
    darkBg: "dark:bg-gray-800",
    buttonText: "text-green-500",
    buttonHoverBg: "hover:bg-green-200",
    focusRing: "focus:ring-green-400",
  },
  error: {
    text: "text-red-800",
    bg: "bg-red-50",
    darkText: "dark:text-red-400",
    darkBg: "dark:bg-gray-800",
    buttonText: "text-red-500",
    buttonHoverBg: "hover:bg-red-200",
    focusRing: "focus:ring-red-400",
  },
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const colors = colorClasses[type];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
      <div
        className={`flex items-center p-4 mb-4 ${colors.text} rounded-lg ${colors.bg} ${colors.darkText} ${colors.darkBg}`}
        role="alert"
      >
        <div className="ms-3 text-sm font-medium">{message}</div>
        <button
          type="button"
          onClick={onClose}
          className={`ms-auto -mx-1.5 -my-1.5 ${colors.bg} ${colors.buttonText} rounded-lg ${colors.focusRing} p-1.5 ${colors.buttonHoverBg} inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:${colors.buttonText} dark:hover:bg-gray-700`}
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
