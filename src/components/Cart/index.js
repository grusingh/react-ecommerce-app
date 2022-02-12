import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import CartWithItems from "./CartWithItems";

const Cart = () => {
    const {items} = useSelector(state => state.cart);

    return (
        <Box>
            <Heading as={"h3"} size={"md"} marginBottom={4}>Shopping Cart</Heading>
            {
                items.length ?
                    <CartWithItems items={items}/>
                    : <Text>Cart is empty</Text>
            }
        </Box>
    );
};

export default Cart;
