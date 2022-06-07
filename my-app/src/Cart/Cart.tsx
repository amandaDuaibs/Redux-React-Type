import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {getCartProduct, getTotalPrice, removeFromCart } from './Cart.slice'

const Cart: React.FC =()=>{

    const cartProducts = useAppSelector(getCartProduct)
    const totalPrice = useAppSelector (getTotalPrice) 
    const dispatch = useAppDispatch()

    const handleRemoveFromCart = (productId: string) => dispatch(removeFromCart(productId))
    return(
        <>
            <h2>Cart</h2>
            <h5>{totalPrice}</h5>
            {cartProducts.map(product=>(
                <div key={product.id}>
                    <span>{product.title}</span>
                    <span>{product.amount}</span>
                    <button onClick={()=> handleRemoveFromCart(product.id)}>Remover Livro</button>
                </div>
            ))}
        </>)
}


export default Cart;


