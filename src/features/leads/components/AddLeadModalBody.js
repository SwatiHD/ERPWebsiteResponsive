import { useState } from "react";
import { useDispatch } from "react-redux";
import InputText from "../../../components/Input/InputText";
import SelectBox from "../../../components/Input/SelectBox";
import DateInput from "../../../components/Input/DateInput";
import FileInput from "../../../components/Input/FileInput";
import TextAreaInput from "../../../components/Input/TextAreaInput"
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
import { addNewLead } from "../leadSlice";
import { useEffect } from "react";
import axios from "axios";
import VoiceInput from "../../../components/Input/VoiceInput";
import GreyInput from "../../../components/Input/GreyInput";
import formReducer from "./reducer";
import { submitFormData } from "./action";
// import { moduleOptions, priorityOptions,statusOptions,tasknoOptions, assignToOptions, activityOptions} from './optionsValue';
const INITIAL_LEAD_OBJ = {
      TaskId: "",
      TaskDate: "",
      EndDate: "",
      Module: "",
      Activity: "",
      AssignTo: "",
      Status: "",
      File:"",
      Comments:"",
};

function AddLeadModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ);
  const [formData, setFormData] = useState(INITIAL_LEAD_OBJ);

  
  // handleFormValueChange updates the state with the new form data
  const handleFormValueChange = ({ updateType, value }) => {
    // For example, if updateType is 'dateField', update the corresponding value
    setFormData((prevData) => ({
      ...prevData,
      [updateType]: value,
      
    }));
   
  };

  // const handleSubmit = (e) => {
  //   console.log(formData);  
  //   dispatch(submitFormData(formData));  
  // };
  // handleSubmit();

  const saveNewLead = () => {
    // if (leadObj.first_name.trim() === "")
    //   return setErrorMessage("First Name is required!");
    // else if (leadObj.email.trim() === "")
    //   return setErrorMessage("Email id is required!");
    // else {



    // let newLeadObj = {
    //   taskId: leadObj.taskId,
    //   taskName: leadObj.taskName,
    //   startDate: leadObj.startDate,
    //   endDate: leadObj.endDate,

    // }
    const newLeadObj = {
      TaskId: formData.TaskId,
      TaskDate: formData.TaskDate,
      EndDate: formData.EndDate,
      Module: formData.Module,
      Activity: formData.Activity,
      AssignTo: formData.AssignTo,
      Priority: formData.Priority,
      Status: formData.Status,
      File:formData.File,
    };
    
    dispatch(addNewLead({ newLeadObj }));
    console.log("newleaddd:", newLeadObj)
   printToConsole();
    dispatch(showNotification({ message: "New Lead Added!", status: 1 }));
    closeModal();
    // }
    
  };

  const printToConsole =()=>{
    console.log( JSON.stringify(formData, null, 2))
  }
  // const updateFormValue = ({ updateType,value }) => {
  //   setErrorMessage("");
  //   setLeadObj({ ...leadObj, [updateType]: value });
  // };

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
  const priorityOptions = [
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
  const statusOptions = [
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

  const tasknoOptions = [
    {
      id: 1,
      name: "T123",
      value: "t123",
    },
    {
      id: 2,
      name: "T678",
      value: "t678",
    },
    {
      id: 3,
      name: "T999",
      value: "t999",
    },
    {
      id: 4,
      name: "T000",
      value: "t000",
    },
  ];
  const assignToOptions = [
    {
      id: 1,
      name: "Employee 1",
      value: "employee1",
    }, {
      id: 7,
      name: "Employee 2",
      value: "emplloyee2",
    }, {
      id: 7,
      name: "Employee 3",
      value: "employee3",
    },
  ]
  const activityOptions = [
    {
      id: 1,
      name: "General",
      value: "generalAct",
    }, {
      id: 2,
      name: "New Sales Order",
      value: "newSalesOrder",
    }, {
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
    }, {
      id: 8,
      name: "Pick List",
      value: "pickList",
    },
  ]
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <GreyInput
            options={tasknoOptions}
            updateType="TaskNumber"
            containerStyle="mt-3"
            labelTitle="Task Number"
            value={formData.TaskId}
            updateFormValue={handleFormValueChange}
            defaultValue="TaskId"
          />
        </div>
        {/* <div className="flex flex-col">
          <InputText
            type="text"
            defaultValue={"Project ID"}
            updateType="first_name"
            containerStyle="mt-3"
            labelTitle="Project ID"
            // updateFormValue={handleFormValueChange} 
          />
        </div> */}
      </div>
      <div className="grid md:grid-cols-2 gap-6 sm:-pt-10">
        <div className="flex flex-col">
          <DateInput
            labelTitle="Task Date"
            containerStyle="mt-3" 
            updateType="taskDate"
            value={formData.TaskDate}
            updateFormValue={handleFormValueChange}
            
          />
        </div>
        <div className="flex flex-col">
          <DateInput
            labelTitle="End Date"
            containerStyle="mt-3"
            updateFormValue={handleFormValueChange}
            updateType="endDate"
            value={formData.EndDate}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <SelectBox
            options={moduleOptions}
            labelTitle="Module"
            containerStyle="mt-3"
            updateFormValue={handleFormValueChange}
            updateType="module"
             value={formData.Module}
             defaultValue="module"
          />
        </div>
        <div className="flex flex-col">
          <SelectBox
            options={activityOptions}
            labelTitle="Activity"
            containerStyle="mt-3"
            updateFormValue={handleFormValueChange}
            updateType="activity"
             value={formData.Activity}
            defaultValue="activity"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">

          <SelectBox
            options={assignToOptions}
            labelTitle="Assign To"
            placeholder="Select AssignTo"
            containerStyle="mt-3"
            updateFormValue={handleFormValueChange}
            updateType="AssignTo"
             value={formData.AssignTo}
            defaultValue="assignTo"
          />
        </div>
        <div className="flex flex-col">
          <SelectBox
            name="priorityy"
            options={priorityOptions}
            labelTitle="Priority"
            containerStyle="mt-3"
            updateFormValue={handleFormValueChange}
            updateType="priority"
            value={formData.Priority}
            defaultValue="priority"
          />

        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">

          <SelectBox
            options={statusOptions}
            containerStyle="mt-3"
            labelTitle="Status"
            updateFormValue={handleFormValueChange}
            updateType="status"
            value={formData.Status}
            defaultValue="status"
          />
        </div>
        <div className="flex flex-row">
          <FileInput
            labelTitle="Attach File"
            containerStyle="mt-3"
            defaultValue="fileinput"
            updateType="file"
            value={formData.File}
            
          />
          <div className="pt-12 size-2xl">
            <VoiceInput />
          </div>
        </div>


      </div>

      <div className="h-24">
        <TextAreaInput
          type="textarea"
          containerStyle="mt-3"
          labelTitle="Comments"
          updateFormValue={handleFormValueChange}
          updateType="comment"
          value={formData.Comment}
          defaultValue="comment"
        />
      </div>
        
  <div onClick={printToConsole} >{JSON.stringify(formData, null, 2)}
      </div>
      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action md:flex md:justify-end">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary px-6 md:ml-4" onClick={() => saveNewLead()} >
          Savennnn
        </button>
      </div>
    </>
  );

}


export default AddLeadModalBody;