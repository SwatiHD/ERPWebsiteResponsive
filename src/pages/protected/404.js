import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import FaceFrownIcon from "@heroicons/react/24/solid/FaceFrownIcon";
import FormComponent from "./FormComponent";
import { useNavigate } from "react-router-dom";
function InternalPage() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    dispatch(setPageTitle({ title: "" }));
  }, []);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="hero h-4/5 bg-base-200">
      {showForm ? (
        <div className="w-full h-full">
          <form>
            <FormComponent />
          </form>
        </div>
      ) : (
        <div id="section" className="w-full h-full">
          <button
            className="btn sm:btn-sm md:btn-md btn-outline btn-info"
            onClick={handleButtonClick}
          >
            + Create Task
          </button>
        </div>
      )}
      {/* 
      // // ) : (
      // //   <div className="hero-content text-accent text-center">
      // //     <div className="max-w-md">
      // //       <FaceFrownIcon className="h-48 w-48 inline-block" />
      // //       <h1 className="text-5xl  font-bold">404 - Not Found</h1>
      // //     </div>
      // //   </div>
      // // )} */}
    </div>
  );
}

export default InternalPage;
