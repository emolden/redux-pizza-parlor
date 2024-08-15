import { useDispatch } from "react-redux"
import REACT, { useState } from 'react';



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
        return <button onClick={addPizza}>Add</button>
        } 
        else {
        return <button onClick={removePizza}>Remove</button>
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