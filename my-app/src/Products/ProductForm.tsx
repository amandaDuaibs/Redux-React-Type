import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {addProduct, Product} from '../Products/Product.slice'



const ProductForms: React.FC = () => {

    const dispatch = useAppDispatch()

    const [product, setProduct] = useState<Product>({
        titulo: '',
        preco: '',
        id: '',
        autor: '',
        idioma:'',
    })

    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => setProduct(prev => {
        (prev as any)[name]=  value;
        const newValue = {...prev}
        return newValue
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addProduct(product))
    }
    const {titulo, preco, id, autor, idioma} = product
    
    return(
    <>
        <h2> Adicionar Livros</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Título do Livro' name='Título' value={titulo} onChange={handleChange}/>
            <input type='text' placeholder='Preço' name='Preço' value={preco}  onChange={handleChange}/>
            <input type='text' placeholder='Id' name='Id' value={id}  onChange={handleChange}/>
            <input type='text' placeholder='Autor' name='Autor' value={autor}  onChange={handleChange}/>
            <input type='text' placeholder='Idioma' name='Idioma' value={idioma}  onChange={handleChange}/>
            <button type='submit'>Adicionar</button>
        </form> 
    </>
    );
}

export default ProductForms;