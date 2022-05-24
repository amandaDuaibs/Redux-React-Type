import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "./Product.slice";

interface ProductsListProps{

}


const ProductsList: React.FC<ProductsListProps>=({})=>{
    const products = useSelector(getProductsSelector)

    return(
        <div>
            <h2>Lista de Livros</h2>
            {products.map((product: { id: React.Key | null | undefined; titulo: any; preco: any; }) => 
                <div key={product.id}>
                    <span>{`${product.titulo}: ${product.preco}`}</span>
                </div>
            )}
           
        </div>
    );
}
        
        
export default ProductsList;