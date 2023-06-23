import React, { useState } from "react";
import styles from "./Form.module.css";
import { categories } from "../Category";

export default function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  //Validacão da Url
  function validarUrl(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.lenght < 43) {
      setErrors("ERRO: URL invalida");
      return false;
    } else {
      return url.substring(32, 43);
    }
  }

  function onSave(e) {
      e.preventDefault();
      console.log(url, category);  
      //validar os campos
      if (!category || category === "-") {
        setErrors("ERRo:ESCOLHA UMA CATEGORIA!!!!");
        return;
      } else {
        setErrors("");
      }

      const urlVideos = validarUrl(url);
      if (urlVideos && category) {
        // guarda a url e a category
        const newVideo = { url, category };
        setVideos([...videos, newVideo]);
        localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));
        //limpar form
        setUrl("");
        setCategory("");
    }else{
      setErrors('ERRO: URL invalida')

    }
  }


  return (
    <section className={styles.container}>
      <h2>Cadrasto de videos</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do video</label>
          <input
            type="text"
            placeholder="Digite a URL do video"
            required="required"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            minLength="43"
            maxLength="43"
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="-">Selecione uma categoria</option>
            {categories.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div>
          <button>Cadrastar</button>
        </div>
        <div>{errors}</div>
      </form>
    </section>
  );
}
