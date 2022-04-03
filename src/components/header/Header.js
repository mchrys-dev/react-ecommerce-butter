import {
    Text,
    Divider,
    Button,
    Flex,
} from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

function Header() {
    return(
        <div>
            <Flex justifyContent="space-between" alignContent="center">
                <Text
                as="a"
                href="/"
                fontSize="2rem"
                color="gray.900"
                fontFamily="Robo"
                my="5px"
                >
                Librairie en ligne
                </Text>
                <Button
                my="5px"
                colorScheme="green"
                variant="ghost"
                leftIcon={<FiShoppingBag size="24px" />}
                size="lg"
                p={2}
                className="snipcart-checkout"
                >
                Voir le panier
                </Button>
            </Flex>
            <Divider />
        </div>
    );
}

export default Header;