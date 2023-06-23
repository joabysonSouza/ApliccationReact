import React, { useEffect, useState } from "react";
import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import Loader from "../Loader";

function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}

export default function SearchVideoList({ videos }) {
  const [searchText, setsearchText] = useState("");
  const foundVideos = filterVideos(videos, searchText);

  const[loading, setloading]= useState(true)
  useEffect(()=>{
    setTimeout(()=> setloading(false), 500)


  },[])






  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="pesquisar"
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      />

     { loading? <Loader/> :
       <VideoList
          videos={foundVideos}
          empyHeading={` total de videos sobre ${searchText}`}
       />
      }
    </section>
  );
}
