import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import FaceFrownIcon from "@heroicons/react/24/solid/FaceFrownIcon";
import FormComponent from "./FormComponent";
function InternalPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "" }));
  }, []);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="hero h-4/5 bg-base-200">
      {setPageTitle ? (
        <div className="">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md btn-soft btn-info align-top"
            onClick={handleOpenPopup}
          >
            + Create
          </button>
          <FormComponent show={showPopup} onClose={handleClosePopup}>
            <h2>Login Form</h2>
            <form>
              <label>
                Username:
                <input type="text" name="username" />
              </label>
              <br />
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <br />
              <button type="submit">Login</button>
            </form>
          </FormComponent>
        </div>
      ) : (
        <div className="hero-content text-accent text-center">
          <div className="max-w-md">
            <FaceFrownIcon className="h-48 w-48 inline-block" />
            <h1 className="text-5xl  font-bold">404 - Not Found</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default InternalPage;
