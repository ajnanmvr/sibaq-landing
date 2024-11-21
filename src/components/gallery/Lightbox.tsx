import Image from "next/image";
import CloseIcon from "@/assets/vector/close.svg";
import { useModal } from "@/hooks/useModal";

interface LightboxProps {
  images: string[];
  currentImage: number;
  isOpen: boolean; // Add isOpen prop
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentImage,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useModal(isOpen, onClose); // Use the hook

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative min-h-[80vh] min-w-[60vw] max-w-[80vw] flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentImage] || ""}
          alt={`Enlarged gallery image ${currentImage + 1}`}
          className="rounded-[3rem] object-contain bg-gradient-to-bl from-yellow/20 via-red/20 to-green/20 backdrop-blur-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          fill
        />
        <div
          onClick={onClose}
          className="bg-red hover:bg-ruby-red transition-colors absolute top-10 right-10 h-9 w-9 rounded-full flex justify-center items-center"
        >
          <Image src={CloseIcon} alt="Close Icon" className="w-4 h-4" />
        </div>
        <button
          onClick={onPrev}
          className="absolute left-10 bg-gradient-to-tr text-white text-3xl p-2"
          aria-label="Previous image"
        >
          &#10094;
        </button>
        <button
          onClick={onNext}
          className="absolute right-10 text-white text-3xl p-2"
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
