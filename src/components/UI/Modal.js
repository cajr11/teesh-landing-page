import React, { useState, useEffect } from 'react';
import classes from "./Modal.module.css"
import ReactDOM from 'react-dom';
import ModalItem from './ModalItem';
import TeaDetails from './TeaDetails';

const Backdrop = ({ onClose }) => {
  // modal backdrop
    return <div className={classes.backdrop} onClick={onClose}></div>
}

const ModalOverlay = ({ onClose }) => {
  const [teaData, setTeaData] = useState(null);
  const [activeItem, setActiveItem] = useState(null)
  const [selectedItem, setSelectedItem] = useState(0)

  // This function sets the state of selected item and active item to highlight its body and display its data
  const itemChosenHandler = (index) => {
    setSelectedItem(index)
  } 
 
  // Fetch tea data from API
  useEffect(() => {
    (async () => {
      const res = await fetch("https://gist.githubusercontent.com/LuigiR0jas/debdf41add7704681d9f7c734f478ac2/raw/7e7e5ad88132640d659c3ec8e657d8e02af01aa7/crates.json");
      const data = await res.json();
      setTeaData(data);
      setActiveItem(data.data[selectedItem]);
    })()
  }, [selectedItem])


    return (
      // main content of modal
      <div className={classes.modal}>

        {/* Close Modal Button */}
        <button type='button' className={classes.closeModal} onClick={onClose}>X</button>

        {/* Tea pack types container */}
        <div className={classes.teaTypes}>
            <div className={classes.inner}>
              
              {teaData && teaData.data.map( (tea, index) => (
                <ModalItem key={tea["crate_id"]} name={tea.name} rating={tea.rating} image={tea.picture} position={index} selected={selectedItem} onChosen={itemChosenHandler} />
              ))}
            </div>
        </div>

        {/* Tea pack details */}
        <div className={classes.teaDetails}>
          {activeItem && <TeaDetails title={activeItem.name} image={activeItem.picture} description={activeItem.description} content={activeItem.content} />}
        </div>
      </div>
    )
}

const Modal = ({ onClose }) => {
  return (
   <>
    {/* Portal the modal overlay and backdrop for better accesibility */}
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<ModalOverlay onClose={onClose} />, document.getElementById("modal-root"))}
   </>
  )
}

export default Modal