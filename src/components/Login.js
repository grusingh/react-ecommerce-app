import {
    Alert, AlertIcon,
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {login} from "../store/userSlice";
import UserApi from "../api/UserApi";
import {useDispatch} from "react-redux";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null);

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                navigate("/account", {replace: true});
            }, 500);
        }
    }, [isSuccess]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsEmailInvalid(!email.length);
        setIsPasswordInvalid(!password.length);

        if (!email.length || !password.length) {
            return;
        }

        try {
            const result = await UserApi.login(email, password);
            dispatch(login(result));
            setIsSuccess(true);
        } catch (error) {
            setIsSuccess(false);
        }
    };

    return (<Container>
        <Box maxWidth={"400px"}>
            <Heading as={"h3"} size={"md"} marginBottom={4}>Login</Heading>
            {
                isSuccess === null ? null
                    : isSuccess
                        ? <Alert status='success'>
                            <AlertIcon/>
                            Login was successful!
                        </Alert> : <Alert status='error'>
                            <AlertIcon/>
                            Login failed!
                        </Alert>
            }
            <form noValidate onSubmit={handleSubmit}>
                <FormControl isInvalid={isEmailInvalid}>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <FormErrorMessage>Email is required</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={isPasswordInvalid}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input id='password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <FormErrorMessage>Password is required</FormErrorMessage>
                </FormControl>
                <Flex marginTop={4} justifyContent={"flex-end"}>
                    <Button type={"submit"}>Submit</Button>
                </Flex>
            </form>
        </Box>
    </Container>);
}

export default Login;
