import { FiTrash2 } from "react-icons/fi";
import useStore from "@/app/store";

const CardItem = ({ item }) => {
  const { deleteFromCard, increaseItemCount, decreaseItemCount } = useStore();

  return (
    <div className="border boder-solid border-stone-300 p-5 mb-6 rounded-lg flex items-center gap-x-10">
      <div className="w-[200px]">
        <img src={item.image} alt="notebook-image" className="w-full" />
      </div>

      <div className="flex-1">
        <h4 className="mb-4 font-semibold">{item.manufacturer}</h4>
        <div className="px-2 py-1 w-fit rounded bg-purple-500/20 mb-5">
          <p className="text-purple-600 font-semibold">Discount offer</p>
        </div>
        <div className="flex gap-x-5 items-center w-full">
          <div className="border border-solid border-stone-400 px-3 py-2 rounded flex items-center gap-x-10">
            <span
              onClick={() => decreaseItemCount(item.id)}
              className="font-semibold block text-xl cursor-pointer select-none"
            >
              -
            </span>
            <span className="text-xl font-semibold">{item.count}</span>
            <span
              onClick={() => increaseItemCount(item.id)}
              className="font-semibold block text-xl cursor-pointer select-none"
            >
              +
            </span>
          </div>
          <h4 className="text-xl font-bold flex-1">
            ${Math.round(item.count * item.price)}
          </h4>
        </div>
      </div>

      <div className="flex flex-col justify-between self-start h-full">
        <div
          onClick={() => {
            deleteFromCard(item.id);
          }}
          className="bg-red-500/10 text-red-700 cursor-pointer rounded p-3 mb-[86px]"
        >
          <FiTrash2 size={20} />
        </div>
        <h4 className="font-semibold text-lg">${Math.round(item.price)}</h4>
      </div>
    </div>
  );
};

export default CardItem;
