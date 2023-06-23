import Header from '../../components/Header';
import erro404 from './erro404.png';
import styles from "./PageNotFound.module.css";
import Footer  from '../../components/Footer';

function PageNotFound(){
    return(
    <>
        <Header/>   
            <section className={styles.container}>
                <h2> ops!!! Pagina não encontrada</h2>
                <img src={erro404} alt="Pagina não encontarda logo" />

            </section>
        <Footer/>
    </>

    );
}
 export default PageNotFound;