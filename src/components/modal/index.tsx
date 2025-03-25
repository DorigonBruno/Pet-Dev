type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-end "
      onClick={handleOverlayClick}
    >
      <div className="h-screen w-72 bg-slate-400 p-4 rounded-md">
        <div className="flex justify-between items-center">
          <span>Conteúdo do Modal</span>
          <button onClick={onClose} className="cursor-pointer">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
