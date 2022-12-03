import "./index.css";

const Modal = ({children, toggleModal}) => {
    const closeModalHandler = () => {
        toggleModal(false);
    }
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModalHandler}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modal