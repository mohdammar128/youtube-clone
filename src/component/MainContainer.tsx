import { useAppSelector } from "../utils/sotreHooks";
import ButtonList from "./ButtonList";
import VedioContainer from "./VedioContainer";

const MainContainer = () => {
  const { isMenu } = useAppSelector((state) => state.app);
  return (
    <div className={`${isMenu?"ml-48":"ml-5"} mt-24 mr-5` }>
      <ButtonList />
      <VedioContainer />
    </div>
  );
};

export default MainContainer;
