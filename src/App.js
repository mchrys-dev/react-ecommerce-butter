import {
  Container,
  Text,
  Divider,
  Box,
  Image,
  Button,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { useState, useEffect } from "react";
import Butter from "buttercms";

const butter = Butter('3d160123076f791611fdc7b55e32e5f9f4ea9f8a');

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await butter.content.retrieve(["books"], {
        order: "id",
      });
      const { data } = await res.data;
      const allProducts = data.books;
      setProducts(allProducts);
    }
    fetchData();
  }, []);

  return (
    <Container maxW="container.xl" h="100vh" >
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
      <Box mt={4}>
        <SimpleGrid
          minChildWidth="300px"
          align="center"
          justify="center"
          spacing="40px"
          mb={32}
        >
          {products.map((product) => (
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
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default App;
