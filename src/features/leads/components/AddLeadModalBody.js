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
      {/* <InputText
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
      /> */}
      <InputText
        type="text"
        defaultValue={"Project ID"}
        updateType="first_name"
        containerStyle="mt-3"
        labelTitle="Project ID"
        // updateFormValue={updateFormValue}
      />
      <InputText
        type="text"
        defaultValue={"Task Number"}
        updateType="first_name"
        containerStyle="mt-3"
        labelTitle="Task Number"
        // updateFormValue={updateFormValue}
      />
      <div className="pt-5 flex-1">
        <div className="pl-2">Module</div>
        <div className="flex-1 pt-1 sm:w-3/100 md:w-48">
          <SelectBox
            options={periodOptions}
            labelTitle="Module"
            placeholder="Select priority"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="module"
            //  updateFormValue={updateSelectBoxValue}
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">Priority</div>

        <div className="flex-1 pt-1">
          <SelectBox
            options={periodOptions}
            labelTitle="Priority"
            placeholder="Select priority"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="priority"
            //  updateFormValue={updateSelectBoxValue}
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">Parent Task ID</div>

        <div className="flex-1 pt-1">
          <SelectBox
            options={periodOptions}
            labelTitle="Parent Task ID"
            placeholder="Select priority"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="parent task id"
            // updateFormValue={updateSelectBoxValue}
          />
        </div>
      </div>
      <InputText
        type="text"
        defaultValue={"Status"}
        updateType="first_name"
        containerStyle="mt-3"
        labelTitle="Status"
        // updateFormValue={updateFormValue}
      />
      <InputText
        type="text"
        defaultValue={"Customer ID"}
        updateType="first_name"
        containerStyle="mt-3"
        labelTitle="Customer ID"
        // updateFormValue={updateFormValue}
      />
      <div className="pt-5 flex-1">
        <div className="pl-2">Task Date</div>

        <div className="flex-1 pt-1">
          <SelectBox
            options={periodOptions}
            labelTitle="Task Date"
            placeholder="Select Task Date"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="taskDate"
            // updateFormValue={updateSelectBoxValue}
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">End Date</div>

        <div className="flex-1 pt-1">
          <SelectBox
            options={periodOptions}
            labelTitle="End Date"
            placeholder="Select End Date"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="endDate"
            // updateFormValue={updateSelectBoxValue}
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">Activity</div>

        <div className="flex-1 pt-1">
          <SelectBox
            options={periodOptions}
            labelTitle="Activity"
            placeholder="Select activity"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="activity"
            // updateFormValue={updateSelectBoxValue}
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">Assign To</div>
        <div className="flex-1 pt-1">
          <SelectBox
            options={periodOptions}
            labelTitle="Assign To"
            placeholder="select assignto"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="assignTo"
            // updateFormValue={updateSelectBoxValue}
          />
        </div>
      </div>
      <InputText
        type="textarea"
        defaultValue={"Comments"}
        updateType="first_name"
        containerStyle="mt-3"
        labelTitle="Comments"
        // updateFormValue={updateFormValue}
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
