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
      <div className="sm:col-span-2 fixed">
        <h1>Subscriptions</h1>
        <ul>
          {subcriptions.map((obj: SubscriptionsButton, index: number) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <img src={obj.imageUrl} alt="" className="h-10" />
              <li>{obj.subsName}</li>
            </div>
          ))}
        </ul>

        <h1>Settiing</h1>
        <ul>
          {settings.map((obj: SettingButton, index: number) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <img src={obj.imageUrl} alt="" className="h-8" />
              <li>{obj.settingName}</li>
            </div>
          ))}
        </ul>
      </div>
    )
  );
};

export default Sidebar;
