import { useForm } from "react-hook-form";
import Modal from "../../../../components/modal.jsx";
import TextInput from "../../../../components/TextInput.jsx";
import { useContext } from "react";
import { kanbanContext } from "../../../../Context/kanbanContext.jsx";
function AddNewBoard({ isOpen, handleClose }) {
  const { register, handleSubmit, reset } = useForm();
  const { boards, setBoards } = useContext(kanbanContext);

  const onSubmit = (data) => {    
    localStorage.setItem("newBoard", JSON.stringify([...boards, data]));
    setBoards((prev) => [...prev, data]);
    reset();
  };
  return (
    <Modal isOpen={isOpen} closeModal={handleClose}>
      <div className="">
        <h1
          className="text-neutral-light-mainText text-xl font-bold mb-7
        "
        >
          Add New Board
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* <label htmlFor="name">Name</label>
          <input
            type="text"
            {...register("name", { required: "Title is required" })}
          /> */}
          <TextInput
            className="mb-4"
            label="Name"
            {...register("name", { required: "Title is required" })}
          />
          <TextInput
            className="mb-4"
            label="columns"
            {...register("columns", { required: "columns is required" })}
          />

          <button
            type="submit"
            className="mx-auto w-full mt-4 bg-neutral-dark-backgroundSideNav rounded-3xl text-white font-semibold
           h-10 hover:bg-primary-btnHover"
          >
            Create New Board
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddNewBoard;
