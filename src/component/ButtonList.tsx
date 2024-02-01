// ButtonList.js

import { useState } from "react";
import { buttonList } from "../data/config";

const ButtonList = () => {
  const [bodyButtonList, setBodyButtonList] = useState<string[]>(buttonList);
  return (
    <div className="bg-amber-400 whitespace-nowrap gap-x-10 overflow-x-auto w-11/12">
      {bodyButtonList.map((btn: string, idx: number) => (
        <button key={idx} className="bg-slate-200  rounded-md p-1   mx-10">
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
