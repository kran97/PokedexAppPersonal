export const COLOR_TYPE = {
    normal: '#DDCBD0',
    fighting: '#FCC1B0',
    flying: '#B2D2E8',
    poison: '#CFB7ED',
    ground: '#F4D1A6',
    rock: '#C5AEA8',
    bug: '#C1E0C8',
    ghost: '#D7C2D7',
    steel: '#C2D4CE',
    fire: '#EDC2C4',
    water: '#CBD5ED',
    grass: '#C0D4C8',
    electric: '#E2E2A0',
    psychic: '#DDC0CF',
    ice: '#C7D7DF',
    dragon: '#CADCDF',
    dark: '#C6C5E3',
    fairy: '#E4C0CF',
    unknown: '#C0DFDD',
    shadow: '#CACACA'
};

export const COLOR = {
    TYPE: function (type) {
        return COLOR_TYPE[type]
    },
    LINEAR_GRID: function (types = ['normal']) {
        return `linear-gradient(${getTYpes(types).join(',')})`;
    }
};

const getTYpes = (types) => {
    const rgba = types.map(type => hexToRGBA(COLOR_TYPE[type.type.name], 0.6));
    return types.length > 1 ? rgba : [...rgba, ...rgba];
}

export const hexToRGBA = (hex, a = 0.2) => {
    if (!hex) return hex;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r},${g},${b},${a})`;
};