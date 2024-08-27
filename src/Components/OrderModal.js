import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OrderModal = ({ show, handleClose,cartItems }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <div closeButton className='modalHeader'>
        <div >Order Confirmed</div>
      </div>
      <p className='paragraph'>we hope you enjoy your food!</p>
      
      
      <Modal.Body>
        <div className="order-items">
          {cartItems.map((product, index) => (
            <div className="order-item" key={index}>
              <h6>{product.name}</h6>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity || 1}</p> 
            </div>
          ))}
        </div>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <button className='newOrder' onClick={handleClose}>
          Start your new order
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderModal;
