
import Card from '../../../layouts/MainLayout/_components/utilityComponents/Card';
function BoardData({ todo }) {
  return (
    <div className="min-h-[75vh] flex flex-row gap-11 self-start mx-11 items-center  overflow-hidden">
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-row gap-2 justify-start items-center mt-6">
          <span className="rounded-full w-3 h-3 bg-red-900"></span>
          <span className="text-[#a3acba] font-semibold tracking-wide">
            ONe
          </span>
        </div>
        <div
          className={`w-full h-[100%] 
            ${
              todo
                ? ""
                : "overflow-y-scroll border-[2px] border-opacity-60 border-neutral-light-darkGrayishBlue border-dashed rounded-md"
            }
            `}
        >
          {todo?.todos.map((item) => (
            <Card key={item.id} item={item} />
            // <div className="border-b-2 p-1 m-1 " key={index}S>
            //   {item.todo}
            // </div>
          ))}
        </div>
      </div>
      <div className="w-72 min-h-[75vh] self-stretch mt-9 from-[#cad5e5] to-slate-100 dark:from-[#2B2C37] dark:to-neutral-dark-layout ">
        <button className="w-full min-h-full rounded-md bg-gradient-to-b text-[#4e545e] font-bold text-2xl text-opacity-60 hover:text-primary-brightBlue   ">
          + New Column
        </button>
      </div>
    </div>
  );
}

export default BoardData;
