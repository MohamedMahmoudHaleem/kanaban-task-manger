

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <div
    // className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg w-[510px] h-[365px] p-9"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
