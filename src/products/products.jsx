import { useEffect, useState } from "react";
import Product from "./product";
import Cardinfo from "./cardinfo";
import {addToLocalStore,getDataFormLS,removeDataFls } from "../utilitiy/localStore";


const Products = () => {
      const [products,setProducts] = useState([]);
      const [cardAdd,setCardAdd] = useState([]);

    useEffect(()=>{
       fetch('./shope.json')
       .then(res => res.json())
       .then(data => setProducts(data))
    },[])

const addToCardInfo = (product) =>{
     if (!cardAdd.includes(product)) {
      const newCard = [...cardAdd,product];
      setCardAdd(newCard);
      addToLocalStore(product)
     
     }
}
useEffect(()=>{
      const setValuTocard = getDataFormLS();
      setCardAdd(setValuTocard)
},[])

const removeItem = (itemToRemove) => {
      const updatedCardAdd = cardAdd.filter(item => item.id !== itemToRemove.id);
      setCardAdd(updatedCardAdd);
      removeDataFls(itemToRemove)
};
    return (
         <>
         <div className="flex gap-5">
            <div className=""> 
                  <div><h1 className="text-2xl text-black font-bold">All Collection</h1></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                              products.slice(0,6).map(product => <Product key={product.id} product={product} addToCardInfo={addToCardInfo}></Product>)
                        }
                  </div>
            </div>
            <div className="w-[200px] sticky top-0 h-screen ">
                  <Cardinfo cardAdd={cardAdd} removeItem={removeItem}></Cardinfo>
            </div>
         </div>
        </>
    );
};

export default Products;