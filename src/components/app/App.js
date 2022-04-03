import { Container } from "@chakra-ui/react";
import Header from "../header/Header";
import Booklist from "../booklist/Booklist";

function App() {
  return (
    <Container maxW="container.xl" h="100vh" >
      <Header />
      <Booklist />
    </Container>
  );
}

export default App;
