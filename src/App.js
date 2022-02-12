import {ChakraProvider, Grid} from '@chakra-ui/react'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Footer from "./components/Footer";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Grid gridTemplateRows={"auto 1fr auto"} minHeight={"100vh"} padding={2}>
                    <NavBar/>
                    <Routes>
                        <Route path={"/"} element={<ProductList/>}/>
                        <Route path="/products" element={<ProductList/>}/>
                        <Route path="/products/:id" element={<ProductDetail/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                    </Routes>
                    <Footer/>
                </Grid>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
