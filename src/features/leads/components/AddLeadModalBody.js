import { useState } from "react";
import { useDispatch } from "react-redux";
import InputText from "../../../components/Input/InputText";
import SelectBox from "../../../components/Input/SelectBox";
import DateInput from "../../../components/Input/DateInput";
import FileInput from "../../../components/Input/FileInput";
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
import { addNewLead } from "../leadSlice";
import { useEffect } from "react";
import axios from "axios";
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
  const moduleOptions = [
    {
      id: 1,
      name: "General",
      value: "generalMod",
    },
    {
      id: 2,
      name: "Sales",
      value: "sales",
    },
    {
      id: 3,
      name: "Purchase",
      value: "purchase",
    },
    {
      id: 4,
      name: "Inventory",
      value: "inventory",
    },
    {
      id: 5,
      name: "Payable",
      value: "payable",
    },
    {
      id: 6,
      name: "Recievable",
      value: "Receivable",
    },
    {
      id: 7,
      name: "Quality",
      value: "Quality",
    },
  ];
  const priorityOptions= [
    {
      id: 1,
      name: "High",
      value: "high",
    },
    {
      id: 2,
      name: "Medium",
      value: "medium",
    },
    {
      id: 3,
      name: "Low",
      value: "low",
    }
  ];
  const statusOptions=[
    {
      id: 1,
      name: "Open",
      value: "open",
    },
    {
      id: 2,
      name: "InProgress",
      value: "inprogress",
    },
    {
      id: 3,
      name: "Close",
      value: "close",
    },
    {
      id: 4,
      name: "Hold",
      value: "hold",
    },
  ];
  const assignToOptions=[
    {
      id: 1,
      name: "Employee 1",
      value: "employee1",
    },{
      id: 7,
      name: "Employee 2",
      value: "emplloyee2",
    },{
      id: 7,
      name: "Employee 3",
      value: "employee3",
    },
  ]
  const activityOptions=[
    {
      id: 1,
      name: "General",
      value: "generalAct",
    },{
      id: 2,
      name: "New Sales Order",
      value: "newSalesOrder",
    },{
      id: 3,
      name: "New Sales Quotation",
      value: "newSalesQuotation",
    },
    {
      id: 4,
      name: "New Sales Invoice",
      value: "newSalesInvoice",
    },
    {
      id: 5,
      name: "Packing List",
      value: "packingList",
    },
    {
      id: 6,
      name: "Performa Invoice",
      value: "performaInvoice",
    },
    {
      id: 7,
      name: "New Delivery Challan",
      value: "newDeliveryChallan",
    },{
      id: 8,
      name: "Pick List",
      value: "pickList",
    },
  ]
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
       updateFormValue={updateFormValue}
      />
      <InputText
        type="text"
        defaultValue={"Task Number"}
        updateType="first_name"
        containerStyle="mt-3"
        labelTitle="Task Number"
        updateFormValue={updateFormValue}
      />
      <div className="pt-5 flex-1">
        <div className="pl-2">Module</div>
        <div className="flex-1 pt-1 sm:w-full md:w-full">
          <SelectBox
            options={moduleOptions}
            labelTitle="Module"
            placeholder={loading ? "Loading..." : "Select module"}
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="module"
            updateFormValue={updateFormValue}
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">Priority</div>

        <div className="flex-1 pt-1">
          <SelectBox
            options={priorityOptions}
            labelTitle="Priority"
            placeholder="Select priority"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="priority"
             updateFormValue={updateFormValue}
          />
        </div>
      </div>
      {/* <div className="pt-5 flex-1">
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
      </div> */}
      <InputText
        type="text"
        defaultValue={"Status"}
        updateType="first_name"
        containerStyle="mt-3"
        labelTitle="Status"
        updateFormValue={updateFormValue}
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
          <DateInput
            // options={periodOptions}
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
          <DateInput
            // options={periodOptions}
            labelTitle="End Date"
            placeholder="Select End Date"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="endDate"
            updateFormValue={updateFormValue}
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">Attach Files</div>
        <div className="flex-1 pt-1">
          <FileInput
            placeholder="Choose a file"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="fileinput"
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">Activity</div>

        <div className="flex-1 pt-1">
          <SelectBox
            options={activityOptions}
            labelTitle="Activity"
            placeholder="Select activity"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="activity"
            updateFormValue={updateFormValue}
          />
        </div>
      </div>
      <div className="pt-5 flex-1">
        <div className="pl-2">Assign To</div>
        <div className="flex-1 pt-1">
          <SelectBox
            options={assignToOptions}
            labelTitle="Assign To"
            placeholder="select assignto"
            containerStyle="w-72"
            labelStyle="hidden"
            defaultValue="assignTo"
            updateFormValue={updateFormValue}
          />
        </div>
      </div>
      <InputText
        type="textarea"
        defaultValue={"Comments"}
        updateType="first_name"
        containerStyle="mt-3"
        labelTitle="Comments"
       updateFormValue={updateFormValue}
      />
      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action md:flex md:justify-end">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary px-6 md:ml-4" onClick={() => saveNewLead()}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddLeadModalBody;
