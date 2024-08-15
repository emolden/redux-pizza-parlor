import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CustomerInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [nameInput, setNameInput] = useState(``);
  const [addressInput, setAddressInput] = useState(``);
  const [cityInput, setCityInput] = useState(``);
  const [zipInput, setZipInput] = useState(``);
  const [orderTypeInput, setOrderTypeInput] = useState(``);

  const handleCustomerSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CUSTOMER_INFO",
      payload: {
        customer_name: nameInput,
        street_address: addressInput,
        city: cityInput,
        zip: zipInput,
        type: orderTypeInput,
      },
    });
    history.push(`/checkout`);
  };

  return (
    <>
      <h2>Customer Information</h2>
      <form onSubmit={handleCustomerSubmit}>
        <input
          required
          type="text"
          placeholder="Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Street Address"
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="City"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <input
          required
          type="number"
          placeholder="Zip"
          value={zipInput}
          onChange={(e) => setZipInput(e.target.value)}
        />
        <div>
          <label htmlFor="Pickup">Pickup</label>
          <input
            id="Pickup"
            type="radio"
            value="Pickup"
            checked={orderTypeInput === "Pickup"}
            onChange={() => setOrderTypeInput("Pickup")}
          />
          <label htmlFor="Delivery">Delivery</label>
          <input
            id="Delivery"
            type="radio"
            value="Delivery"
            checked={orderTypeInput === "Delivery"}
            onChange={() => setOrderTypeInput("Delivery")}
          />
        </div>
        <button>Next</button>
      </form>
    </>
  );
}
