import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { StyledMain, StyledP, StyledContainer } from "./StyledPokedex"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { PopUp } from "../../Components/PopUp/PopUp"
import { StyledGotcha } from "../../Components/PopUp/StyledPopUp"




export const PokedexIndex = () => {

    const {pokemons, capturados, setCapturados,myPokedex, capturar, gotcha, setGotcha, colorToPass} = useContext(GlobalContext)

    useEffect(()=>{ if(myPokedex.lenght !== 0) {
        setCapturados(myPokedex)
    }}, [])
    
    return (
        <StyledMain>

            <StyledP>Pokémons</StyledP>
            {gotcha && colorToPass === "white" && <PopUp texto={"Gotcha!"} descricao={"O Pokémon foi adicionado a sua Pokédex"}/>}
            {/* <PopUp/> */}
            <StyledContainer>
                {pokemons ? (
                    pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} name={pokemon.name} id={pokemon.id} sprite={pokemon.sprites.other["official-artwork"].front_default} types={pokemon.types} capturar={capturar} bgColor = {"white"} textoBotao={"Capturar!"}/>
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </StyledContainer>
            {/* <PokemonCard /> */}
        </StyledMain>

    )
}