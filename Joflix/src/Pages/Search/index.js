import styles from "./Search.module.css"
import Header from "../../components/Header"
import Container  from "../../components/Container"
import Footer from "../../components/Footer"
import VideoList from "../../components/VideoList";
import videos from "../../Json/Videos.json"
import SearchVideoList from "../../components/SearchVideoList";
import  ScrollButton  from "../../components/ScrollButton" 

function Search(){
    return(
       <>
        <ScrollButton />
       <Header/>
       <Container>
        <section className={styles.search}>
            <SearchVideoList videos={videos}/>



            
        </section>
        </Container>
        <Footer/>
        </>

    );
}

 export default Search;