const listSelectPokemons = document.querySelectorAll('.pokemon')
const pokemonCards = document.querySelector('.card-pokemon')

listSelectPokemons.forEach(pokemon =>{
    pokemon.addEventListener('click', () =>{

        //acionar card pokemon
        const openCard = document.querySelector('.open')
        openCard.classList.remove('open')
        const selectedPokemonId = pokemon.attributes.id.value
        const cardToOpenId = 'card'+selectedPokemonId
        const cardToActive = document.getElementById(cardToOpenId)
        console.log(cardToActive);
        cardToActive.classList.add('open')

        //acionar listagem
        const activeList = document.querySelector('.active')
        activeList.classList.remove('active')
        const selectedPokemonInList = document.getElementById(selectedPokemonId)
        selectedPokemonInList.classList.add('active')

    })
})