import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import FaceFrownIcon from "@heroicons/react/24/solid/FaceFrownIcon";
import { useNavigate } from "react-router-dom";
import Leads from "../protected/Leads";
function InternalPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle({ title: "" }));
  }, []);

  return (
    <div className="bg-base-100 h-full">
      {setPageTitle ? (
        <div>
          <h1>
            <Leads />
          </h1>
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
