export type TNotification = {
  title: string;
  category: string;
  time: string;
  url?: string;
  description?: string;
};

export type TPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  data: TNotification | null;
};

export type CroppedArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};
