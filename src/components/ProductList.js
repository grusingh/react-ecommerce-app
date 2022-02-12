import {useEffect, useState} from "react";
import CatalogueApi from "../api/CatalogueApi";
import {Badge, Box, Flex, Heading, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

function ProductList() {
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const handleClick = (id) => {
        navigate(`/products/${id}`);
    }

    useEffect(() => {
        const load = async () => {
            const results = await CatalogueApi.get();
            setProducts(results);
            setIsLoading(false);
        }
        load();
    }, []);

    if (isLoading) {
        return 'Loading...';
    }

    return (<Box>
        <Heading as={"h3"} size={"md"} marginBottom={4}>Our Products</Heading>
        {
            products.map(product => {
                return <Flex key={product.id} padding={4} boxShadow='md' rounded='md' bg='white' marginY={2}
                             justifyContent={"space-between"} onClick={() => handleClick(product.id)}
                             sx={{
                                 cursor: 'pointer'
                             }}>
                    <Text fontSize='lg'>{product.product_name}</Text>
                    <Badge>{product.price}</Badge>
                </Flex>
            })
        }
    </Box>);
}

export default ProductList;
