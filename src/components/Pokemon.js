import Card from "./ui/Card";
import classes from "./Pokemon.module.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { firstLetterUppercase, threeDigitNumber } from '../service/service-helper';
import { COLOR } from "../service/Utility";

function Pokemon(props) {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonData.data.id}.svg`;

  const [modalIsOpen, setModalIsOpen] = useState(false);
//   let name = '';
//   let id = '';

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function onSelectPokemon() {
    setModalIsOpen(true);
  }

  return (
    <Card style={{ background: COLOR.LINEAR_GRID(props.pokemonData.data.types) }}
    >
      <div onClick={onSelectPokemon} className={classes.cardMainContent}>
        <img className={classes.pokemonImage} src={src} alt={props.pokemonData.data.name} />
        <div className={classes.cardDescription}>
          <h3 className={classes.pokemonName}>{firstLetterUppercase(props.pokemonData.data.name)}</h3>
          <p className={classes.pokemonId}>{threeDigitNumber(props.pokemonData.data.id)}</p>
        </div>
      </div>
      {
      modalIsOpen ? (
        <Modal data={props.pokemonData.data} />
      ) : null
      }
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </Card>
  );
}

export default Pokemon;
