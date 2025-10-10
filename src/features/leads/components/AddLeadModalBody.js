import { useState } from "react";
import { useDispatch } from "react-redux";
import InputText from "../../../components/Input/InputText";
import SelectBox from "../../../components/Input/SelectBox";
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
import { addNewLead } from "../leadSlice";

const INITIAL_LEAD_OBJ = {
  first_name: "",
  last_name: "",
  email: "",
};

function AddLeadModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ);

  const saveNewLead = () => {
    if (leadObj.first_name.trim() === "")
      return setErrorMessage("First Name is required!");
    else if (leadObj.email.trim() === "")
      return setErrorMessage("Email id is required!");
    else {
      let newLeadObj = {
        id: 7,
        email: leadObj.email,
        first_name: leadObj.first_name,
        last_name: leadObj.last_name,
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      };
      dispatch(addNewLead({ newLeadObj }));
      dispatch(showNotification({ message: "New Lead Added!", status: 1 }));
      closeModal();
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLeadObj({ ...leadObj, [updateType]: value });
  };

  const periodOptions = [
    { name: "Today", value: "TODAY" },
    { name: "Yesterday", value: "YESTERDAY" },
    { name: "This Week", value: "THIS_WEEK" },
    { name: "Last Week", value: "LAST_WEEK" },
    { name: "This Month", value: "THIS_MONTH" },
    { name: "Last Month", value: "LAST_MONTH" },
  ];

  return (
    <>
      <InputText
        type="text"
        defaultValue={leadObj.first_name}
        updateType="first_name"
        containerStyle="mt-4"
        labelTitle="Name"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={leadObj.last_name}
        updateType="last_name"
        containerStyle="mt-4"
        labelTitle="Last Name"
        updateFormValue={updateFormValue}
      />

      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />
      <SelectBox
        options={periodOptions}
        labelTitle="Period"
        placeholder="Select date range"
        containerStyle="w-72"
        labelStyle="hidden"
        defaultValue="TODAY"
        //  updateFormValue={updateSelectBoxValue}
      />

      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddLeadModalBody;
