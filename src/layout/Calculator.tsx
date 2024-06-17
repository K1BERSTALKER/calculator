import { Delete, Divide } from "lucide-react";
import ThemeChanger from "./theme-changer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  appendValue,
  backspace,
  calculate,
  clear,
} from "@/store/calculator/calculatorSlice";

export default function Calculator() {
  const value = useSelector((state: RootState) => state.calculator.value);
  const oldValue = useSelector((state: RootState) => state.calculator.oldValue);
  const dispatch = useDispatch();

  return (
    <div className="border-[2px] h-[70vh] flex justify-end flex-col w-[30%] rounded-xl p-2 relative">
      <span className="absolute top-2 left-2 w-6 h-6">
        <ThemeChanger />
      </span>
      <div className="flex justify-end flex-col text-right value gap-4">
        <p className="text-md font-medium">{oldValue}</p>
        <input
          type="text"
          className="bg-transparent border mb-9 text-3xl font-bold w-full text-right p-2 rounded-lg"
          value={value}
          onChange={(e) => dispatch(appendValue(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 calculator gap-4">
        <span className="clear dark:text-black">%</span>
        <span
          onClick={() => dispatch(appendValue("*"))}
          className="clear dark:text-black"
        >
          X
        </span>
        <span
          onClick={() => dispatch(appendValue("/"))}
          className="clear dark:text-black"
        >
          <Divide className="w-6 h-6" />
        </span>
        <span className="bg-orange-500" onClick={() => dispatch(backspace())}>
          <Delete className="w-6 h-6" />
        </span>
        <span onClick={() => dispatch(appendValue(7))} className="plus">
          7
        </span>
        <span onClick={() => dispatch(appendValue(8))} className="plus">
          8
        </span>
        <span onClick={() => dispatch(appendValue(9))} className="plus">
          9
        </span>
        <span
          className="bg-orange-500"
          onClick={() => dispatch(appendValue("-"))}
        >
          -
        </span>
        <span onClick={() => dispatch(appendValue(4))} className="plus">
          4
        </span>
        <span onClick={() => dispatch(appendValue(5))} className="plus">
          5
        </span>
        <span onClick={() => dispatch(appendValue(6))} className="plus">
          6
        </span>
        <span
          className="bg-orange-500"
          onClick={() => dispatch(appendValue("+"))}
        >
          +
        </span>
        <span onClick={() => dispatch(appendValue(1))} className="plus">
          1
        </span>
        <span onClick={() => dispatch(appendValue(2))} className="plus">
          2
        </span>
        <span onClick={() => dispatch(appendValue(3))} className="plus">
          3
        </span>
        <button
          className="bg-orange-500 row-span-2 rounded-full text-white"
          onClick={() => dispatch(calculate())}
        >
          =
        </button>
        <span onClick={() => dispatch(clear())} className="plus">
          AC
        </span>
        <span onClick={() => dispatch(appendValue(0))} className="plus">
          0
        </span>
        <span onClick={() => dispatch(appendValue("."))} className="plus">
          .
        </span>
      </div>
    </div>
  );
}
