import {Badge, Box, Heading} from "@chakra-ui/react";
import React from "react";

const CartWithItems = ({items}) => {
    const total = items.reduce((acc, val) => {
        return (parseFloat(acc) + parseFloat(val.price.replace('$', ''))).toFixed(2);
    }, 0);

    return <>
        {
            items.map(item => <Box key={item.id}>
                    {item.product_name}
                    <Badge>{item.price}</Badge>
                </Box>
            )}
        <Heading as='h4' size='md' marginY={4}>Total: ${total}</Heading>
    </>
}

export default CartWithItems;
