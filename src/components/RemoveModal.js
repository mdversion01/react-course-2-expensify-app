import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
    <Modal
        className="modal"
        isOpen={props.showModal}
        contentLabel="Minimal Modal Example"
        onRequestClose={props.handleCloseModal}
        >
        <h3>Remove Expense</h3>
        <p>Do you want to remove this expense?</p>
        <div>
            <button
                className="button modal--button"
                onClick={props.onRemove}
            >
                Remove Expense
            </button>
            <button 
                className="button button--secondary" 
                onClick={props.handleCloseModal}
            >
                Cancel
            </button>
        </div>
    </Modal>
);

export default RemoveModal;