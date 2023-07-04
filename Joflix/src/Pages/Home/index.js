import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category";
import ScrollButton from "../../components/ScrollButton";

function Home() {
  return (
    <>
      <ScrollButton />
      <Header />
      <Banner image="assistir" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            <Carousel>
              {filterCategory(index).map((Videos) => (
                <Card id={Videos.id} key={Videos.id} />
              ))}
            </Carousel>
          </Category>
        ))}
      </Container>

      <Footer />
    </>
  );
}

export default Home;
