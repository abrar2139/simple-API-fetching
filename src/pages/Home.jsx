import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Home = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const URL = "https://fakestoreapi.com/products"
        fetch(URL).then((get)=>{
         return get.json().then((data)=>{
               setProducts(data)
         })
        }).catch((error)=>{
           console.log(error)
        })
    },[])
  return (
    <div className='max-h-fit flex flex-wrap justify-center my-5'>
    {products.map(product => (
        <Card key={product.id} imge={product.image} title={product.title} price={product.price}/>
    ))}
</div>
  )
}

export default Home