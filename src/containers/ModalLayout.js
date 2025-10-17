import { useEffect, useRef} from "react";
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
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);


  const close = (e) => {
    dispatch(closeModal(e));
  };


  return (
    <>
      <div className={`modal  ${isOpen ? "modal-open" : ""}`}>
         <div className={`modal-box md:m-12 md:pt-16 sm:w-3/4 md:max-w-full  ${size === "lg" ? "md:w-full" : ""}`}>
      
        <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => close()}
          >
            ✕
          </button>
          <div className="md:pl-10">
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
 