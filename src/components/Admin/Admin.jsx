// NOTE : THIS DOES NOT APPEAR IN NAV. THAT IS INTENTIONAL.

import axios from "axios"
import { useEffect, useState } from "react"
import OrderItem from "./OrderItem/OrderItem"

export default function Admin() {

    useEffect(() => {getOrders()}, [])

    const [orders, setOrders] = useState([])

    const getOrders = () => {axios.get(`/api/order`)
    .then(res => setOrders(res.data))
    .catch(err => console.log(`Error getting orders:`, err))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => <OrderItem key={order.id} order={order}/>)}
            </tbody>
        </table>
    )
}