import Heading from "./component/Heading";
import Body from "./component/Body";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div className=" flex flex-col gap-5 ">
        <Heading />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
};

/**
 * Heading
 * side bar
 * body
 */
export default App;
