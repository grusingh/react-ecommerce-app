import React, {useEffect, useState} from 'react';
import {Badge, Box, Button, Heading, Image} from "@chakra-ui/react";
import {useNavigate, useParams} from "react-router-dom";
import CatalogueApi from "../api/CatalogueApi";
import {addItem} from "../store/cartSlice";
import {useDispatch} from "react-redux";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const handleClick = () => {
        dispatch(addItem(product));
        navigate("/cart");
    };

    useEffect(() => {
        const load = async () => {
            const result = await CatalogueApi.getById(id);
            setProduct(result);
        };

        load();
    }, [id]);

    if (!product) {
        return 'Loading...';
    }

    return (
        <Box>
            <Heading as={"h3"} size={"md"} marginBottom={4}>{product.product_name}</Heading>
            <Badge>{product.price}</Badge> | <Badge>{product.category}</Badge>
            <Image src={product.image_url} alt={product.product_name} paddingY={4}/>
            <Box>
                <Button colorScheme='teal' onClick={handleClick}>Add to Cart</Button>
            </Box>
        </Box>
    );
};

export default ProductDetail;
