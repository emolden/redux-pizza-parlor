import { useDispatch } from "react-redux"
import REACT, { useState } from 'react';
import { Button, Card } from "@mui/material";



function PizzaListItem ({pizza}) {

    let [addButton, setAddButton] = useState(true);

    const dispatch = useDispatch();

    const addPizza = () => {
        setAddButton(false);

        dispatch({
            type: 'ADD_TO_ORDER',
            payload: pizza
        })
    }

    const removePizza = () => {
        setAddButton(true);
        dispatch({
            type: 'REMOVE_FROM_ORDER',
            payload: pizza
        })
    }

    const handleAddRemoveButton = () => {
        if(addButton) {
        return <Button 
        variant="filled"
        onClick={addPizza}>Add</Button>
        } 
        else {
        return <Button variant="outlined" onClick={removePizza}>Remove</Button>
        }
    }

    return (
        <Card sx={{maxWidth: 150, display: 'flex', flexDirection: "column"}}>
            <img src={pizza.image_path} />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <h6>{pizza.price}</h6>
            <div>
                {handleAddRemoveButton()}
            </div>
        </Card>

    )
}

export default PizzaListItem;