import { TableCell, TableRow } from "@mui/material";
import moment from "moment";

export default function OrderItem({order}) {
   const momentObj = moment.utc(order.time); 
   const userOffset = moment().utcOffset();
   const localMomentObj = momentObj.utcOffset(userOffset);
   const formattedDateTime = localMomentObj.format(' h:mm a'); 
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{order.customer_name}</TableCell>
      <TableCell>{formattedDateTime}</TableCell>
      <TableCell>{order.type}</TableCell>
      <TableCell>{order.total}</TableCell>
    </TableRow>
  );
}
