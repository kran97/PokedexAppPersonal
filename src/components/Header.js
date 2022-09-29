import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Pokédex</h1>
      <h3 className={classes.subTitle}>
        Search for any pokemon that exists on the planet
      </h3>
    </header>
  );
}

export default Header;
