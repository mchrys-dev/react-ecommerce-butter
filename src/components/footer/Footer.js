import { Text, Divider } from "@chakra-ui/react";
import React from "react";

function Footer() {
    return(
        <React.Fragment>
            <Divider />
            <Text
                // as="a"
                // href="/"
                fontSize="1.5rem"
                color="gray.900"
                fontFamily="Robo"
                my="5px"
            >
                © 2022 Marios Chrysikopoulos
            </Text>
        </React.Fragment>
    );
}

export default Footer;