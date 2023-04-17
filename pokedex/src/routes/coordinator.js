

   export const goToDetailsPage = (navigate, pokemon) => {
        navigate(`/detailsPage/${pokemon.name}`)
    }

    export const goToMyPokedexPage = (navigate, idButton) => {
        navigate("myPokedex")
    }

    export const goToPokedexPage = (navigate) => {
        navigate("/")
    }