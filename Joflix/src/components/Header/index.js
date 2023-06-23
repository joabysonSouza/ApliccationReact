import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className={style.header}>

            <Link to="/"> 
            <span>Jòflix</span>
             </Link> 
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Search"> Pesquisar </Link>
                <Link to="/favorites">Favoritos</Link>
                   
               
            </nav>
        </header>

    );

    
}
export default Header