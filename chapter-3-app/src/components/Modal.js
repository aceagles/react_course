import './Modal.css'

export default function Modal({children,closeModal}) {
    return (
        <div className="modal-backdrop">
            <div className="modal" onClick={closeModal}>
                {children}
            </div>
        </div>
    )
}
