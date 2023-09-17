import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const CartWidget = () => {
  return (
    <>
      <Button color="secondary" className="cart-widget">
        <AddShoppingCartIcon />
        <span className="notifications">0</span>
      </Button>
    </>
  );
};

export default CartWidget;