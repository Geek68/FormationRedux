import { useEffect, useState } from "react"
import { useStore } from "react-redux"
import { SuperCremeux,PouletCroquant,DoubleCantal} from "../../common/models"

export const Cart = ()=>    
{
    const store = useStore()
    const [list,setList] = useState(store.getState().list)
    var totalOrder= list.reduce((prev,cur)=>cur.price+prev,0)

    useEffect(()=>{
        store.subscribe(()=>{setList(store.getState().list)})
    },[store])

    return (<div className="Selection">
        <h1>Liste des produits séléctionnée</h1>
        <>
        {
            list.map((item,index)=>
           (<>
                <span key={index} className="SelectedProduct">
                    {item.title} : {item.price.toFixed(2)}
                   
                </span>
           </>)
            )
        }
        </>
        <div  className="CartNavBar">
        <button onClick={()=>{store.dispatch({type:"ADD_PRODUCT",payload:SuperCremeux})}}>Ajouter un super crumeux</button>
        <button onClick={()=>{store.dispatch({type:"ADD_PRODUCT",payload:PouletCroquant})}}>Ajouter un Poulet Croquant</button>
        <button onClick={()=>{store.dispatch({type:"ADD_PRODUCT",payload:DoubleCantal})}}>Ajouter un Double Cantal</button>
        </div>
    </div>)
}