import classes from './PokemonTitle.module.css';
function PokemonTitle(props) {
    return (
        <section className={classes.titleHeader}>
            <h2>{props?.info?.name}</h2>
            <h2>{props?.description}</h2>
        </section>
    );
}

export default PokemonTitle;