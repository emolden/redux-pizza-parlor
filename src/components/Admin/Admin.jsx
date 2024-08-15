// NOTE : THIS DOES NOT APPEAR IN NAV. THAT IS INTENTIONAL.

import axios from "axios"
import { useEffect, useState } from "react"

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
                {orders.map((order) => {
                    return (
                        <tr>
                            <td>{order.customer_name}</td>
                            <td>TIME PLACED GOES HERE</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}