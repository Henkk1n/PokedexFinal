const Pokecontainer = document.querySelector("#Pokecontainer");
const pokemonCount = 600


const colors = {
    fire: '#ff857a',
    grass: '#99ffb1',
    electric: '#FCF7DE',
    water: '#79c3ed',
    ground: '#a1583d',
    rock: '#7a4f40',
    fairy: '#b8f5cd',
    poison: '#98d7a5',
    bug: '#d2ff3d',
    dragon: '#ff3d4d',
    psychic: '#eaeda1',
    flying: '#96d4e3',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonCount; i++) {
    await getPokemons(i)
    }
}


const getPokemons = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    createPokemonCard(data)
}

const createPokemonCard = (poke) => {
const card = document.createElement('div')
card.classList.add('pokemon')

const name = poke.name[0].toUpperCase() + poke.name.slice(1)
const id = poke.id.toString().padStart(3, '0')
const pokeTypes = poke.types.map(type => type.type.name)
const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
const color = colors[type]

card.style.backgroundColor = color

const pokemonInnerHTML =`
     <div class="IMGContainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
     </div>
     <div class="informacoes">
        <span class="numero">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="tipo">Tipo: <span>${type}</span></small>
     </div>
`

card.innerHTML = pokemonInnerHTML

Pokecontainer.appendChild(card)
}

fetchPokemons()