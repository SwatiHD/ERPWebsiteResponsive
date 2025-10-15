import { useEffect} from "react";
import { MODAL_BODY_TYPES } from "../utils/globalConstantUtil";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/common/modalSlice";
import AddLeadModalBody from "../features/leads/components/AddLeadModalBody";
import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";

function ModalLayout() {
  const { isOpen, bodyType, size, extraObject, title } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();
 


  const close = (e) => {
    dispatch(closeModal(e));
  };

  return (
    <>
{/* The button to open modal */}

      {/* Put this part before </body> tag */}
     {/* <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>

      <dialog id="my_modal_4" className="modal"> */}


      <div className={`modal  ${isOpen ? "modal-open" : ""}`}>
         
        
          
        <div className={`modal-box md:max-w-none md:pt-16 md:w-full sm:w-3/4 md:w-11/12 lg:w-1/2 md:grid md:grid-cols-2 md:gap-4 ${size === "lg" ? "md:w-full" : ""}`}>
      
        <button
            className="btn btn-sm btn-circle absolute right-2 top-2 "
            onClick={() => close()}
          >
            ✕
          </button>
          <div className="md:flex md:justify md:absolute md:pl-96 md:pt-5 md:pb-10">
          <h3 className="font-semibold text-2xl">{title}</h3> 
         </div>
         
           {
            {
              [MODAL_BODY_TYPES.LEAD_ADD_NEW]: (
                <AddLeadModalBody
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),
              [MODAL_BODY_TYPES.CONFIRMATION]: (
                <ConfirmationModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType]
          }
          </div> 
          </div>  
    </>
  )
}

export default ModalLayout;
 