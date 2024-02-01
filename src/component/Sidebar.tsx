import { useAppSelector } from "../utils/sotreHooks";
import { useState } from "react";
import {
  subcriptionsButton,
  SubscriptionsButton,
  settingButton,
  SettingButton,
} from "../data/config";

const Sidebar = () => {
  const [subcriptions, setsSubcription] =
    useState<SubscriptionsButton[]>(subcriptionsButton);
  const [settings, setSettings] = useState<SettingButton[]>(settingButton);
  const { isMenu} = useAppSelector((state) => state.app);
  return (
    isMenu && (
      <div className="fixed top-16 bg-slate-500 h-screen w-[10%]">
        <h1 className="font-bold text-[18px] text-white ">Subscriptions</h1>
        <ul className="flex flex-col gap-2 mt-3">
          {subcriptions.map((obj: SubscriptionsButton, index: number) => (
            <div key={index} className="flex flex-row items-center gap-2 font text-white">
              <img src={obj.imageUrl} alt="" className="h-10 rounded-full" />
              <li>{obj.subsName}</li>
            </div>
          ))}
        </ul>
        <hr className="my-3"/>

        <h1 className="font-bold text-[18px] text-white ">Settiing</h1>
        <ul className="flex flex-col gap-3 mt-3">
          {settings.map((obj: SettingButton, index: number) => (
            <div key={index} className="flex flex-row items-center gap-2 ">
              <img src={obj.imageUrl} alt="" className="h-7 rounded-full" />
              <li>{obj.settingName}</li>
            </div>
          ))}
        </ul>
      </div>
    )
  );
};

export default Sidebar;
