import { useAppDispatch, useAppSelector } from "../utils/sotreHooks";
import { toggleMenu } from "../slices/appSlice";
const Heading = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="inline-flex w-screen h-16 justify-between sm:max-w-11/12 p-4items-center fixed shadow-lg z-10 bg-slate-500">
      <div className="flex ml-5">
        {/* hamburger button */}
        <img
          className="h-8 rounded-sm mt-1"
          src="https://blog.hubspot.com/hs-fs/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
          alt="menu"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        />
        {/* logo */}
        <img
          className="h-10 rounded-sm mx-10 "
          src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg"
          alt="youtube"
        />
      </div>
      {/* search bar */}

      <div className=" base-3/4 px-5 py-2 flex ">
        <input
          type="text"
          className=" border border-gray-400 p-2 rounded-l-full sm:w-[600px]"
        />
        <button className=" border border-b-gray-500 p-2 rounded-r-full">
          search
        </button>
      </div>

      <div className="mr-20">
        <img
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZA0sA3wqHcrEqEgMLu0R9kG-xdAnT0vlL2cOe6Sw9g&s"
          alt="user-icon"
        />
      </div>
      {/* user profile */}
    </div>
  );
};

export default Heading;
