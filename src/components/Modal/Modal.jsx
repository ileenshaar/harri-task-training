import { useState } from "react";
import "./Modal.css";

function Modal() {
  let [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal((prev) => !prev)}>open modal</button>
      {openModal && (
        <div
          className="modalBackground"
          onMouseDown={() => setOpenModal((prev) => !prev)}
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="titleAndClose">
              <h1>This is Modal</h1>
              <button onClick={() => setOpenModal((prev) => !prev)}>x</button>
            </div>
            <p>
              This Modal is so perfectttt,This Modal is so perfectttt,This Modal
              is so perfectttt,This Modal is so perfectttt,This Modal is so
              perfectttt,This Modal is so perfectttt,This Modal is so
              perfectttt,This Modal is so perfectttt,This Modal is so perfectttt
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

//stopPropagation
// نوقف انتشار الحدث لأعلى (باتجاه الخلفية) عند الضغط على المودال نفسه
