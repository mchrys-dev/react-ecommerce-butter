import {
    Text,
    Box,
    Image,
    Button,
    Flex,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

function Book({product}) {
    return(
        <Box
            bg="white"
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            _hover={{ shadow: "dark-lg" }}
            key={product.id}
        >
                <Image
                    h="350px"
                    fit="cover"
                    src={product.image}
                    alt={`Picture of ${product.name}`}
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
                            {product.title}
                        </Text>
                        <Text
                            as="h4"
                            fontSize="2xl"
                            fontWeight="bold"
                            color="teal.600"
                        >
                            {product.price} €
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
                        data-item-id={product.id}
                        data-item-image={product.image}
                        data-item-name={product.title}
                        data-item-url="/"
                        data-item-description={product.description}
                        data-item-price={product.price}
                    >
                    Ajouter au panier
                    </Button>
                </Box>
        </Box>
    );
}

export default Book;