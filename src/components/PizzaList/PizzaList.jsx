import axios from "axios"
import { useEffect, useState } from "react"
import PizzaListItem from "../PizzaListItem/PizzaListItem"
import { useHistory } from 'react-router-dom'
import { Button } from "@mui/material";


export default function PizzaList(){

    const history = useHistory();
    useEffect(() => getPizzas(), [])

    const [pizzaList, setPizzaList] = useState([])

    const getPizzas =() => {
    axios.get(`/api/pizza`)
    .then(res => setPizzaList(res.data))
    .catch(err => console.log(`Err in GET/api/pizza`, err))
    }

    const navToPageTwo = () => {
        history.push(`/customer-info`);
    }


    return(
        <>
        {pizzaList.map((pizza) => {return <PizzaListItem key={pizza.id} pizza={pizza}/>})}
        <Button onClick={navToPageTwo}>NEXT</Button>
        </>
    )
}