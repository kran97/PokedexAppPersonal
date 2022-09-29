import { fetchDescription } from "../service/service-helper";
import { useState, useEffect } from "react";
import classes from "./Modal.module.css";
import PictureCard from "./PictureCard";
import PokemonTitle from "./PokemonTitle";

const descriptionURL = "https://pokeapi.co/api/v2/pokemon-species/";

function Modal(props) {
  const [description, setDescription] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState('');

  useEffect(() => {
    fetchDescription(descriptionURL, props.data.id).then((res) => {
        setPokemonDescription(processDescription(res));
        setDescription(res);
    });
  }, [props.data.id]);

//   console.log(description.data);
  function processDescription(description) {
    let descriptionArray = [];
    let descriptionText = '';
    for (let i = 0; i <= 15; i++) {
      if (descriptionArray.includes(description.data.flavor_text_entries[i].flavor_text)) {
        continue;
      } else {
        descriptionArray.push(description.data.flavor_text_entries[i].flavor_text);
      }
    }
    descriptionText = descriptionArray.join('');
    return descriptionText;
  }
//   console.log(props.data);
  return (
    <main className={classes.modal}>
      <section>
        <PictureCard id={props.data.id} name={props.data.name} />
        <PokemonTitle info={description.data} description={pokemonDescription} />
      </section>
    </main>
  );
}

export default Modal;
