import { useRef } from "react";
import { TPopupProps } from "@/libs/types";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";

export default function SingleNotification({
  isOpen,
  onClose,
  data,
}: TPopupProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useModal(isOpen, onClose);

  if (!isOpen || !data) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-lg z-30"
    >
      <div
        ref={modalRef}
        className="bg-white p-12 rounded-[3rem] max-w-md w-full mx-4"
      >
        <button
          onClick={onClose}
          className="text-red bg-red/10 p-2 rounded-xl hover:bg-red hover:text-white float-right"
        >
          Close
        </button>
        <h2 className="text-2xl font-semibold mb-2 leading-7">{data.title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          {data.category} - {data.time}
        </p>
        {data.description && (
          <p className="text-gray-700">{data.description}</p>
        )}
        {data?.url && (
          <Link
            href={data.url}
            className="text-blue underline mt-4 inline-block"
          >
            View
          </Link>
        )}
      </div>
    </div>
  );
}
