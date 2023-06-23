import styles from "./Search.module.css"
import Header from "../../components/Header"
import Container  from "../../components/Container"
import Footer from "../../components/Footer"
import VideoList from "../../components/VideoList";
import videos from "../../Json/Videos.json"
import SearchVideoList from "../../components/SearchVideoList";

function Search(){
    return(
       <>
       <Header/>
       <Container>
        <section className={styles.search}>
            <h2>Pesquisar</h2>
            <SearchVideoList videos={videos}/>



            
        </section>
        </Container>
        <Footer/>
        </>

    );
}

 export default Search;