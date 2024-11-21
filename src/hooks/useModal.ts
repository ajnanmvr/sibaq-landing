import { useEffect } from "react";

export function useModal(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen, onClose]);
}
