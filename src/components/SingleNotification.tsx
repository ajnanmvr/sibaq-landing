import { TPopupProps } from "@/libs/types";
import { useRef } from "react";

export default function SingleNotification({
  isOpen,
  onClose,
  data,
}: TPopupProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !data) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
    >
      <div
        ref={modalRef}
        className="bg-white p-12 rounded-[3rem] max-w-md w-full mx-4"
      >
        <button onClick={onClose} className="text-red bg-red/10 p-2 rounded-xl hover:bg-red hover:text-white float-right">
          Close
        </button>
        <h2 className="text-2xl font-semibold mb-2 leading-7">{data.title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          {data.category} - {data.time}
        </p>
        {data.description && (
          <p className="text-gray-700">{data.description}</p>
        )}
        <a href={data.url} className="text-blue underline mt-4 inline-block">
          Apply Now
        </a>
      </div>
    </div>
  );
}
