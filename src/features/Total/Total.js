import { useEffect, useState } from "react";
import { useStore } from "react-redux";
export const TotalOrders = ()=>
{
    const store = useStore()
    const [list,setList] = useState(store.getState().list)

    var totalOrder = list.reduce((prev,cur)=>cur.price+prev,0)

    useEffect(()=>{
        store.subscribe(()=>{setList(store.getState().list)})
    },[store])
    return (
        <div className="TotalCommand">
           {
             list.length === 0 ? <div>Aucun produit séléctionnée</div> : <div>Total commande : {totalOrder}</div> 
           }
        </div>
    )
 
}