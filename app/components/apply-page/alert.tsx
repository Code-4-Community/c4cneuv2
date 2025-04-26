import React from "react";

interface AlertProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const baseColor = type === "success" ? "green" : "red";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
      <div
        className={`flex items-center p-4 mb-4 text-${baseColor}-800 rounded-lg bg-${baseColor}-50 dark:bg-gray-800 dark:text-${baseColor}-400`}
        role="alert"
      >
        <div className="ms-3 text-sm font-medium">{message}</div>
        <button
          type="button"
          onClick={onClose}
          className={`ms-auto -mx-1.5 -my-1.5 bg-${baseColor}-50 text-${baseColor}-500 rounded-lg focus:ring-2 focus:ring-${baseColor}-400 p-1.5 hover:bg-${baseColor}-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-${baseColor}-400 dark:hover:bg-gray-700`}
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
