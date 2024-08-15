import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function CheckoutPage () {

        const history = useHistory();
        const dispatch = useDispatch();

    //customer  is an object with keys: customer_name, street_address, 
    //city, zip, and type
    const customer = useSelector (store => store.customer);
    console.log('customer info: ', customer);
    //cart is an array of objects with keys: id, name, description, price, 
    //image_path for pizzas
    const cart = useSelector (store => store.cart);
    // total is a number that is equal to the total cost of the customer's 
    //cart items
    const total = useSelector (store => store.total);

    const addOrder = (event) => {
        event.preventDefault();

        let orderToAdd = {
            "customer_name": customer.customer_name,
            "street_address": customer.street_address,
            "city": customer.city,
            "zip": customer.zip,
            "total": total,
            "type": customer.type,
            "pizzas": cart.map (item =>{
                return (
                    {
                        "id": item.id,
                        "quantity": '1'
                    }
                )
            })
        }
        axios({
            method: 'POST',
            url: '/api/order',
            data: orderToAdd
        })
        .then ((response) => {
            history.push('/')
            dispatch({
                type: 'CLEAR_EVERYTHING',
            })
        })
        .catch ((error) => {
            console.log('Error in POST route: ', error)
        })
    }


    return (
        <div>
            <h2>Step 3: Checkout</h2>
        <section>
            <div>
                <h6>{customer.customer_name}</h6> 
                <h6>{customer.street_address}</h6> 
                <h6>{customer.city}, MN</h6> 
            </div>
            <h2>For {customer.type}</h2>
        </section>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item => {
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <h1>Total: {total}</h1>
        <button onClick={addOrder}>CHECKOUT</button>
        </div>
    )
}

export default CheckoutPage;