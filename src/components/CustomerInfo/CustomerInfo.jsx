import { Box, Button, Card, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";
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
    <Box
      conponent="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <h2>Customer Information</h2>
        <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Required"
          helperText="Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          helperText="Street Address"
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          helperText="City"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          type="number"
          helperText="Zip Code"
          value={zipInput}
          onChange={(e) => setZipInput(e.target.value)}
        />
          <FormLabel id="distribution-method-radio-group"> Distribution Options</FormLabel>
          <RadioGroup
            row
            aria-labelledby="distribution-method-radio-group"
            name="distribution-options-radio-buttons-group"
            value={orderTypeInput}
            onChange={(e) => setOrderTypeInput(e.target.value)}
          >
          <FormControlLabel
            value="Pickup"
            control={<Radio />}
            label="Pickup"
          />
          <FormControlLabel
            value="Delivery"
            control={<Radio />}
            label="Delivery"
          />
          </RadioGroup>
        <Button onClick={handleCustomerSubmit}>Next</Button>
      </FormControl>
    </Box>
  );
}
