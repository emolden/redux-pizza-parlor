// NOTE : THIS DOES NOT APPEAR IN NAV. THAT IS INTENTIONAL.

import axios from "axios";
import { useEffect, useState } from "react";
import OrderItem from "./OrderItem/OrderItem";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Admin() {
  useEffect(() => {
    getOrders();
  }, []);

  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    axios
      .get(`/api/order`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(`Error getting orders:`, err));
  };

  return (
    <Box  sx={{ display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <TableContainer sx={{ width: "90%", mt:5 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Time Order Placed</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
