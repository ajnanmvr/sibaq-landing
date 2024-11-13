export type TNotification = {
    title: string;
    category: string;
    time: string;
    url: string;
    description?: string;
  };

  export type TPopupProps = {
    isOpen: boolean;
    onClose: () => void;
    data: TNotification | null;
  };
  