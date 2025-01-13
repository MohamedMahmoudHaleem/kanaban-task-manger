import { useForm } from "react-hook-form";
import Modal from "../../../../components/modal.jsx";
function AddNewBoard({ isOpen, handleClose }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset();
  };
  return (
    <Modal isOpen={isOpen} closeModal={handleClose}>
      <div className='p-4' >
        <h1>Add New Board</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            {...register("name", { required: "Title is required" })}
          />
          <label htmlFor="columns">Columns</label>
          <input
            type="text"
            {...register("columns", { required: "Columns is required" })}
          />
          <button type="submit">Create New Board</button>
        </form>
      </div>
    </Modal>
  );
}

export default AddNewBoard;
