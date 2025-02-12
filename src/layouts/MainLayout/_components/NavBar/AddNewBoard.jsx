import { useForm } from "react-hook-form";

import TextInput from './_components/TextInput.jsx';
import CustomModal from './_components/Modal.jsx';
import { useKanban } from "../../../../Context/kanbanContext.jsx";

function AddNewBoard({ isOpen, handleClose }) {
  const { register, handleSubmit, reset } = useForm();
  const { boards, setBoards } = useKanban([]);

  const onSubmit = (data) => {
    data.id = boards.length + 1;
    localStorage.setItem("newBoard", JSON.stringify([...boards, data]));
    setBoards((prev) => [...prev, data]);
    reset();
    handleClose();
  };

  return (
    <CustomModal isOpen={isOpen} closeModal={handleClose}>
      <div className="">
        <h1
          className="text-neutral-light-mainText text-xl font-bold mb-7 dark:text-neutral-light-veryLightSideNavCards
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
            className="mb-4 "
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
    </CustomModal>
  );
}

export default AddNewBoard;
