import { Button, Card, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
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
            <h1>Step 3: Checkout</h1>
        <Card sx={{ display : 'flex', justifyContent: 'space-between', px: 20}}>
            <div>
                <h2>Customer Information</h2>
                <h6>{customer.customer_name}</h6> 
                <h6>{customer.street_address}</h6> 
                <h6>{customer.city}, MN</h6> 
            </div>
            <h2>For {customer.type}</h2>
        </Card>
        <Card sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', px: 50}}>
            <h2>Order Details</h2>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>Pizza Type</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>Cost</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map(item => {
                        return(
                            <TableRow>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.price}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Card>
        <h2>Total: ${total}</h2>
        <Button variant="outlined" onClick={addOrder}>CHECKOUT</Button>
        </div>
    )
}

export default CheckoutPage;