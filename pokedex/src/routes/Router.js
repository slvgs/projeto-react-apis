import { GotchaPokedex } from '../Pages/pokedexPageGotcha/gotchaPokedex';
import { Header } from '../Components/Header/Header';
import {BrowserRouter } from "react-router-dom"
import { Route, Routes} from "react-router";
import { PokedexIndex } from '../Pages/pokedexPage/pokedexIndex';
import { PokemonDetailPage } from '../Pages/DetailPagePokemon/detailPage';
import { ErrorPage } from '../Pages/ErrorPage/error';

export const Router = () => {


    return( 
        <BrowserRouter>
        <Header/>
        <Routes> 
          <Route index element={<PokedexIndex />}/>
          <Route path="detailsPage/:name" element={<PokemonDetailPage />}/>
          <Route path="myPokedex" element={<GotchaPokedex />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    )
} 

export default Router;