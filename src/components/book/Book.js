import {
    Text,
    Box,
    Image,
    Button,
    Flex,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

function Book(props) {
    return(
        <Box
            bg="white"
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            _hover={{ shadow: "dark-lg" }}
            key={props.product.id}
        >
                <Image
                    h="350px"
                    fit="cover"
                    src={props.product.image}
                    alt={`Picture of ${props.product.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Flex
                        mt="1"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <Text
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            textTransform="uppercase"
                            lineHeight="tight"
                            fontFamily="Roboto"
                        >
                            {props.product.title}
                        </Text>
                        <Text
                            as="h4"
                            fontSize="2xl"
                            fontWeight="bold"
                            color="teal.600"
                        >
                            {props.product.price} €
                        </Text>
                    </Flex>

                    {/* <Text
                    mt={2}
                    color="gray.500"
                    display={{ base: "none", md: "flex" }}
                    >
                    {product.description}
                    </Text> */}

                    <Button
                        leftIcon={<FiShoppingCart size="24px" />}
                        size="lg"
                        mt={4}
                        isFullWidth
                        colorScheme="blue"
                        variant="outline"
                        alignSelf={"center"}
                        className="snipcart-add-item"
                        data-item-id={props.product.id}
                        data-item-image={props.product.image}
                        data-item-name={props.product.title}
                        data-item-url="/"
                        data-item-description={props.product.description}
                        data-item-price={props.product.price}
                    >
                    Ajouter au panier
                    </Button>
                </Box>
        </Box>
    );
}

export default Book;