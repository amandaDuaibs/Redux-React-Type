import React from "react";
import { bindActionCreators, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


export interface Product{
    titulo: string;
    preco: string;
    id: string; 
    autor: string;
    idioma:string;
}

const initialState: Product[] =[
    {   
        titulo: 'Origem', 
        preco: 'R$40,00',
        id: 'acb', 
        autor:'Dan Brown',
        idioma:'Português'
    },
    {   
        titulo: 'Código daVince', 
        preco: 'R$30,00',
        id: 'acb', 
        autor:'Dan Brown',
        idioma:'Português'
    },
    {   
        titulo: 'Anjos e Demônios', 
        preco: 'R$32,00',
        id: 'acb', 
        autor:'Dan Brown',
        idioma:'Português'
    },
]

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct: (state, action: PayloadAction<Product>)=>{
           // return [action.payload, ...state]
           state.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<string>) => state.filter(product=> product.id !== action.payload )}
        
    
})

export const{ addProduct, removeProduct} = productSlice.actions;
export const getProductsSelector =(state:RootState) => state.products
export default productSlice.reducer;