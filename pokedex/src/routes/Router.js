import { PokemonDetailPage } from '../../pokedex/src/Pages/PokemonDetailPage/PokemonDetailPage';
import { MyPokedexPage } from '../../pokedex/src/Pages/MyPokedexPage/MyPokedexPage.js';
import { pokedexIndex } from '../Pages/pokedexPage/pokedexIndex.js';
import { Header } from '../Components/Header/Header';
import { ErrorPage } from '../../pokedex/src/Pages/ErrorPage/ErrorPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Router = () => {


    return( 
        <BrowserRouter>
        <Header/>
        <Routes> 
          <Route index element={<pokedexIndex />}/>
          <Route path="detailsPage/:name" element={<PokemonDetailPage />}/>
          <Route path="myPokedex" element={<MyPokedexPage />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    )
} 