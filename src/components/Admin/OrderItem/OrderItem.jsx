import moment from "moment";

export default function OrderItem({order}) {
   const momentObj = moment.utc(order.time); 
   const userOffset = moment().utcOffset();
   const localMomentObj = momentObj.utcOffset(userOffset);
   const formattedDateTime = localMomentObj.format(' h:mm a'); 
  return (
    <tr>
      <td>{order.customer_name}</td>
      <td>{formattedDateTime}</td>
      <td>{order.type}</td>
      <td>{order.total}</td>
    </tr>
  );
}
