import {
    Box,
    SimpleGrid,
} from "@chakra-ui/react";
 
import { useState, useEffect } from "react";
import Butter from "buttercms";

import Book from "../book/Book";

const butter = Butter('3d160123076f791611fdc7b55e32e5f9f4ea9f8a');

function Booklist() {
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

    return(
        <Box mt={4} mb={4}>
            <SimpleGrid
                minChildWidth="300px"
                align="center"
                justify="center"
                spacing="40px"
                mb={32}
            >

            {products.map((product) => (
                <Book 
                    key={product.id}
                    product={product} 
                />
            ))}
            
            </SimpleGrid>
        </Box>
    );
}

export default Booklist;