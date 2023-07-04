import style from "./Watch.module.css";
import Header from"../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import videos from "../../Json/Videos.json";
import PageNotFound from "../PageNotFound";
import  ScrollButton  from "../../components/ScrollButton" 

function Watch(){
    const params = useParams()
    const video = videos.find((video) => { return video.id=== params.id})
      if(!video){
        return(<PageNotFound/>);
      }
    return(
     <>
     <ScrollButton />
     <Header/>
     <Container>
        <section className={style.watch}>
           <iframe 
            width="864" height="480" 
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </section>
     </Container>
     <Footer/>
     </>
    );
}
export default Watch;