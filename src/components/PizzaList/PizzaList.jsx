import axios from "axios"
import { useEffect, useState } from "react"
import PizzaListItem from "../PizzaListItem/PizzaListItem"

export default function PizzaList(){
    useEffect(() => getPizzas(), [])

    const [pizzaList, setPizzaList] = useState([])

    const getPizzas =() => {
    axios.get(`/api/pizza`)
    .then(res => setPizzaList(res.data))
    .catch(err => console.log(`Err in GET/api/pizza`, err))
    }


    return(
        <>
        {pizzaList.map((pizza) => {return <PizzaListItem key={pizza.id} pizza={pizza}/>})}
        </>
    )
}