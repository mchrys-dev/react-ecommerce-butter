import { Container } from "@chakra-ui/react";
import Header from "../header/Header";
import Booklist from "../booklist/Booklist";
import Footer from "../footer/Footer";

function App() {
  return (
    <Container maxW="container.xl" h="100vh" >
      <Header />
      <Booklist />
      <Footer />
    </Container>
  );
}

export default App;
