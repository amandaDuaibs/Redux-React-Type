import React from "react";
import { useState } from "react";

interface ProductsListProps{

}

interface Product{
    titulo: string;
    preco: number;
    id: string; 
    autor: string;
    idioma:string;
}

const initialProduts =[
    {   
        titulo: 'Origem', 
        preco: '$40,00',
        id: 'acb', 
        autor:'Dan Brown',
        idioma:'Português'
    },
    {   
        titulo: 'Código daVince', 
        preco: '$30,00',
        id: 'acb', 
        autor:'Dan Brown',
        idioma:'Português'
    },
    {   
        titulo: 'Anjos e Demônios', 
        preco: '$42,00',
        id: 'acb', 
        autor:'Dan Brown',
        idioma:'Português'
    },
]

const ProductsList: React.FC<ProductsListProps>=({})=>{
    const [products, setProducts]= useState(initialProduts)
    return(
        <div>
            <h2>Lista de Livros</h2>
            {products.map(product => 
                <div key={product.id}>
                    <span>{`${product.titulo}: ${product.preco}`}</span>
                </div>
            )}
            <button onClick={()=> setProducts(prevProductd => [{
                 titulo: 'inferno', 
                 preco: '$50,00',
                 id: 'acb', 
                 autor:'Dan Brown',
                 idioma:'Português'
                }, ...prevProductd])}>Novo Produto</button>
        </div>
    );
}
        
        
export default ProductsList;