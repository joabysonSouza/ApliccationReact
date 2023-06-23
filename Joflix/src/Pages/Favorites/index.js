
import Styles from "./Favorites.module.css";
import VideoList from "../../components/VideoList";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useFavoritesContext } from "../../contexts/Favorites";

function Favorites() {
  const {favorite}= useFavoritesContext()
  return (
    <>
      <Header />
      <Container>
        <section className={Styles.favorites}>
        <h2>Meus favoritos</h2>
           {<VideoList videos={favorite} empyHeading="você ainda não tem nenhum video favorito😥"/>}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
