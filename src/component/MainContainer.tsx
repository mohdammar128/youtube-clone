import { useAppSelector } from "../utils/sotreHooks";
import ButtonList from "./ButtonList";
import VedioContainer from "./VedioContainer";

const MainContainer = () => {
  const { isMenu } = useAppSelector((state) => state.app);
  return (
    <div className={` bg-orange-200 flex flex-col items-center ${isMenu?"col-span-10":"col-span-12"} gap-5 `}>
      <ButtonList />
      <VedioContainer />
    </div>
  );
};

export default MainContainer;
