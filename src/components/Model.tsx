import React, { useEffect, useRef } from "react";

interface ModelProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode; // Corrected children type
  setIsOpen: (isOpen: boolean) => void;
  onClose?: () => void;
  handleSubmit?: (e: React.FormEvent) => void;
  loading?: boolean;
  buttonText?: string;
  danger?: boolean;
}

const Modal: React.FC<ModelProps> = ({
  isOpen,
  setIsOpen,
  title,
  children,
  onClose,
  handleSubmit,
  loading = false,
  buttonText = "Save",
  danger,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close the modal
  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  // Handle click outside the modal to close it
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  // Add event listener on mount and remove on unmount
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ease-out">
          <div
            ref={modalRef}
            className="w-full sm:max-w-lg bg-white border shadow-sm rounded-md transition-transform transform duration-300 max-h-full overflow-scroll no-scrollbar"
          >
            <div className="flex justify-between items-center py-2.5 px-4 border-b ">
              <h3 className="font-medium text-gray-800 text-lg">
                {title} {/* Using the title prop */}
              </h3>
              <button
                className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8"
                type="button"
                onClick={handleClose}
              >
                <span className="material-symbols-rounded">
                  <i className="mgc_close_line text-2xl"></i>
                </span>
              </button>
            </div>
            <div className="px-4 py-8 overflow-y-auto">
              {/* Render children */}
              {children}
            </div>
            <div className="flex justify-end items-center gap-4 p-4 border-t">
              <button
                className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded border border-slate-700 font-medium hover:bg-slate-100 transition-all"
                type="button"
                onClick={handleClose}
              >
                Close
              </button>
              {handleSubmit && (
                <a
                  className={`bg-primary hover:bg-primary-600 py-2.5 px-4 inline-flex justify-center items-center gap-2 cursor-pointer rounded text-white ${
                    loading && "bg-gray-400 cursor-not-allowed"
                  } ${danger && "bg-red-500 text-white"}`}
                  onClick={!loading ? handleSubmit : undefined}
                >
                  {buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;