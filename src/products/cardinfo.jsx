import { useEffect, useState } from "react";
import Product from "./product";
import Swal from "sweetalert2";


const Cardinfo = ({cardAdd,removeItem}) => {
   const [totalAmonunt,setTotoalAmount] = useState(0);
   const [alertShow, setAlertShow] = useState(false)

   useEffect(()=>{
     const calculationTotal = cardAdd.reduce((accumulator,item)=>accumulator + item.price , 0)
     setTotoalAmount(parseFloat(calculationTotal));
   },[cardAdd])
 useEffect(()=>{
  if (totalAmonunt >= 100 && !alertShow) {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    setAlertShow(true)
   }
 },[totalAmonunt,alertShow])

    return (
        <div className="w-[300px]">
            <h1 className="text-2xl bg-slate-500 p-4 rounded-full text-white text-center">Card Info</h1>
           {
                cardAdd.map((item)=>(
                       <div key={item.id} className="flex gap-3 items-center bg-slate-300 rounded-lg p-4 m-5 relative">
                           <span onClick={()=>removeItem(item)} className="absolute top-0 right-0  text-red-700 text-xl  bg-slate-900 p-1 rounded-full w-9 h-9 flex justify-center items-center"><i className="bi bi-trash3"></i></span>
                            <img className="w-16 rounded-full" src={item.img} alt="" />
                            <h1 className="text-base font-bold">{item.title}</h1>
                            <p className="text-base font-bold">${parseFloat(item.price)}</p>
                            
                       </div>
                ))
           }
          
         <div className="text-center" key={Product.id}>
         <h1 className="text-2xl font-bold">TotalAmonunt = {parseFloat(totalAmonunt)}</h1>
         <button className={`btn bg-slate-400 font-semibold text-2xl capitalize text-white mt-4 ${totalAmonunt > 100 ? '' : 'hidden'}`}>Purchase</button>

         </div>
        </div>
    );
};

export default Cardinfo;