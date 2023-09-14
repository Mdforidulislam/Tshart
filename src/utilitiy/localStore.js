const addToLocalStore = (id) =>{
     const getCardValue = getDataFormLS()
     getCardValue.push(id)
     saveLocaStore(getCardValue)
}

const saveLocaStore = (id)=>{
         const setDataSringfy = JSON.stringify(id);
         localStorage.setItem('card',setDataSringfy)
}
const getDataFormLS = ()=>{
    const getDataCard = localStorage.getItem('card');
           if (getDataCard) {
              return JSON.parse(getDataCard)
           }
           return [];
}

const removeDataFls = (itemToRemove) =>{
   console.log(itemToRemove);
   const oldData = getDataFormLS();
   console.log(oldData);
   const newData = oldData.filter((item) => item.id !== itemToRemove.id);
   console.log(newData);
   saveLocaStore(newData)

}


export {saveLocaStore,getDataFormLS,addToLocalStore,removeDataFls}