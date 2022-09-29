import Card from "./ui/Card";
import classes from './PictureCard.module.css';

function PictureCard(props) {
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`;

    return (
        <Card className={classes.card}>
            <img className={classes.pokemonImage} src={src} alt={props.name} />
        </Card>
    )
}

export default PictureCard;