import axios from "axios";

const pokemonList = [];

export const loadPokemons = async(url) => {
  const pokemonResponse = await axios.get(url);
  pokemonResponse.data.results.map((res) =>
    pokemonList.push(axios.get(res?.url))
  );
  const allPokemons = await Promise.all(pokemonList);
  console.log(allPokemons);
  return allPokemons;
}

export const fetchDescription = async (url, id) => {
    const descriptionURL = url + id;
    const description = await axios.get(descriptionURL);
    return description;
}

export const pokemonModalDetails = () => {
  
}

export const firstLetterUppercase = (data) => {
  let name = data && data.charAt(0).toUpperCase() + data.slice(1);
  return name;
}

export const nameUpperCase = () => {

}
export const threeDigitNumber = (data) => {
  let idLength = data.toString().length;
  let id = '';
  switch(idLength) {
      case 1:
          id = '00' + data;
          break;
      case 2:
          id = '0' + data;
          break;
      default:
          id = data;
          break;
  }
  return id;
}
