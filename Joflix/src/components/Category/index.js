import Styles from "./Category.module.css";
import Videos from "../../Json/Videos.json"



 export const categories=[
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
  
  ]
  
   export function filterCategory(id){
    return Videos.filter(video => video.category === categories[id])
  }
  


function Category({category, children}){
    return(
        <section className={Styles.category}>
            <h2>{category}</h2>
    <div>
        {children}
    </div>
        </section>
    );
}
    export default Category;
