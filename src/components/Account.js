import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";

const Account = () => {
    const {fullName} = useAuth();

    return (
        <Box>
            <Heading as={"h3"} size={"md"} marginBottom={4}>My Account</Heading>
            <Text>
                Welcome {fullName}
            </Text>
        </Box>
    );
};

export default Account;
