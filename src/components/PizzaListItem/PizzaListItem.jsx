import { useDispatch } from "react-redux"
import REACT, { useState } from 'react';
import { Button } from "@mui/material";



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
        sx={{bgcolor: 'primary.main'}}
        variant="outlined" 
        onClick={addPizza}>Add</Button>
        } 
        else {
        return <Button onClick={removePizza}>Remove</Button>
        }
    }

    return (
        <div>
            <img src={pizza.image_path} />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <h6>{pizza.price}</h6>
            <div>
                {handleAddRemoveButton()}
            </div>
        </div>

    )
}

export default PizzaListItem;