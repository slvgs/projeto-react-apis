import logo from './logo.svg';
import './App.css';
import { GlobalContext } from './Contexts/GlobalContext';

function App() {

  const pokemons = useRequestData([], "?limit=24")[0]

  const [capturados, setCapturados] = useState([])

  const [gotcha, setGotcha] = useState(false)

  const [colorToPass, setColorToPass] = useState("")

  const [idButton, setIdButton] = useState(0)

  const [render, setRender] = useState(false)

  const [myPokedex, setMyPokedex] = useState(JSON.parse(localStorage.getItem('myPokedex') || '[]'));
  

  useEffect(() => {
    if (capturados.length !== 0) {
      localStorage.setItem('myPokedex', JSON.stringify(capturados))
      setMyPokedex(JSON.parse(localStorage.getItem('myPokedex')));
      console.log(myPokedex)
    }
  }
    , [capturados]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('myPokedex')) !== null && JSON.parse(localStorage.getItem('myPokedex')).length !== 0) {
      setMyPokedex(JSON.parse(localStorage.getItem('myPokedex')));
      console.log(myPokedex)
      setCapturados(JSON.parse(localStorage.getItem('myPokedex')));
      console.log(capturados)
    }
    if (pokemons.length !== 0) {
      localStorage.setItem('listaPokemons', JSON.stringify(pokemons))
      console.log(localStorage.getItem("listaPokemons"))
    }
  }, []);

  useEffect(()=>{
    if(idButton != 0){
    localStorage.setItem("idButton", JSON.stringify(idButton))
    setIdButton(JSON.parse(localStorage.getItem("idButton")))
    }
  }, [idButton])





  const capturar = (id, color) => {
    setIdButton(id)
    const capturando = pokemons.find((pokemon) => { return (pokemon.id === id) })
    if (color === "white") {
      if (capturados.length !== 0) {
        if (capturados.find((pokemon) => { return (pokemon.id === id) }) === undefined) {
          setCapturados([...capturados, capturando])
          setMyPokedex([...myPokedex, capturando])
          setGotcha(true)
          console.log(gotcha)

          setTimeout(() => setGotcha(false), 3000)
          setColorToPass(color)
        }

        else {
          alert(`Este pokemon já foi capturado!`)

        }
      }
      else
        if (capturados.length === 0) {
          setColorToPass(color)
          setCapturados([...capturados, capturando])
          setMyPokedex([...myPokedex, capturando])
          setGotcha(true)
          setTimeout(() => setGotcha(false), 3000)
        }
    }
    if (color === "#FF6262") {
      setColorToPass(color)
      setCapturados(capturados.filter((pokemon) => { return (pokemon.id) != capturando.id }))
      setMyPokedex(capturados.filter((pokemon) => { return (pokemon.id) != capturando.id }))
      setGotcha(true)
      console.log(gotcha)

      setTimeout(() => setGotcha(false), 3000)
    }
  }


  const context = { pokemons, capturados, capturar, setCapturados, gotcha, setGotcha, colorToPass, idButton, setIdButton, render, setRender, myPokedex, setMyPokedex }

  

  return (
      <GlobalContext.Provider value={context}>
        <ChakraProvider theme={theme}>

              <Router />


        </ChakraProvider>


      </GlobalContext.Provider>
    
        
    
  );
}

export default App;
