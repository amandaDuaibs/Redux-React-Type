import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../Cart/Cart.slice";
import { getProductsSelector, Product, removeProduct } from "./Product.slice";




const ProductsList: React.FC=()=>{
    const products = useSelector(getProductsSelector)
    const dispatch = useAppDispatch ()

    const removeFromStore = (id:string) =>{
        dispatch(removeProduct(id))
    }

    const addToCartHandler = (product: Product)=> dispatch(addToCart(product))
    return(
        <div>
            <h2>Lista de Livros</h2>
            {products.map((product => 
                <div key={product.id}>
                    <span>{`${product.titulo}: ${product.preco}`}</span>
                    <button onClick={()=>addToCartHandler}> Adicionar Livro</button>
                    <button onClick={()=> removeFromStore(product.id)}> Remover livro</button>
                </div>
            ))}
           
        </div>
    );
}
        
        
export default ProductsList;