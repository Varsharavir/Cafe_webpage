import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Initialize cart state from location or default to empty array
    const [cart, setCart] = useState(location.state?.cart || []);

    // Update quantity of a product in the cart
    const updateQuantity = (productId, increment) => {
        const updatedCart = cart.map(product => {
            if (product.id === productId) {
                const newQuantity = Math.max(1, (product.quantity || 1) + increment); // Ensure quantity is at least 1
                return {
                    ...product,
                    quantity: newQuantity
                };
            }
            return product;
        });
        setCart(updatedCart);
        // Optionally, save updated cart to localStorage if needed
    };

    const clearCart = () => {
        setCart([]); 
        navigate('/Cart', { state: { cart: [] } }); 
    };

    const confirmOrder = () => {
        alert("Your order is confirmed");
    };

    // Calculate total price based on quantity and price
    const cartTotal = cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);

    return (
        <div className="cart-container">
            <h1 className="cart-product">Cart Products</h1>
            {cart.length === 0 ? (
                <p>No Products in Cart</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map((product, index) => (
                            <li key={index} className="cart-item">
                                <img src={product.img} alt={product.Name} className="cart-img" />
                                <div className="product-move">
                                    <h3>{product.Name}</h3>
                                    <h4>Rs. {product.price}</h4>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(product.id, -1)} className="add-btn">-</button>
                                        <span>{product.quantity || 1}</span>
                                        <button onClick={() => updateQuantity(product.id, 1)} className="add-btn">+</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="total-container">
                        <h3>Total Order</h3>
                        <h3>Rs {cartTotal}</h3>
                    </div>
                    <button onClick={confirmOrder} className="order-btn">Place Order</button>
                    <button onClick={clearCart} className="order-btn">Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default Cart;
