import axios from "axios";
import { useSelector } from 'react-redux';

function CheckoutPage () {
    //make sure this matches from page 2
    const customerInfo = useSelector (store => store.customerInfo);
    const cart = useSelector (store => store.cart);
    const total = useSelector (store => store.total);

    const addOrder = (event) => {
        event.preventDefault();

        let orderToAdd = {
            "customer_name": 'John Smith',
            "street_address": '555 Applewood Lane',
            "city": 'Minneapolis',
            "zip": '10001',
            "total": total,
            "type": "Delivery",
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
            //This function currently lives in PizzaList
            // getPizzas();
            //NAV to PizzaList
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
                <h6>John Smith</h6> {/*{customerInfo.customer_name} */}
                <h6>555 Applewood Lane</h6> {/*{customerInfo.street_address} */}
                <h6>Minneaplis, MN</h6> {/*{customerInfo.city}, MN */}
            </div>
            <h2>For Delivery</h2> {/* For {customerInfo.type} */}
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