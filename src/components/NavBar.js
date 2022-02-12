import {Flex, Heading, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import logo from "../logo.png";
import {useSelector} from "react-redux";

const NavBar = () => {
    const {items} = useSelector(state => state.cart);
    const {isAuthenticated} = useSelector(state => state.user);

    return (
        <Flex alignItems={"center"} justifyContent={"space-between"} borderBottom={"2px solid"} borderColor={"blue.500"}
              marginBottom={8}>
            <Flex alignItems={"center"}>
                <Image src={logo} maxHeight={14} maxWidth={14}/>
                <Link to={"/"}>
                    <Heading marginLeft={2} color={"blue.500"}>React Ecommerce App</Heading>
                </Link>
            </Flex>
            <Flex gap={4} paddingEnd={2}>
                <Link to={"/products"}>Products</Link>
                <Link to={"/cart"}>Cart {items.length ? `(${items.length})` : ''}</Link>
                {
                    isAuthenticated ?
                        <>
                            <Link to={"/account"}>My Account</Link>
                            <Link to={"/logout"}>Logout</Link>
                        </>
                        : <Link to={"login"}>Login</Link>
                }
            </Flex>
        </Flex>);
}

export default NavBar;
