import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ReturnLandingPage from "./componentes/LandingPage/LandingPage";
import ReturnHome from './componentes/Home/Home';

//BrowserRouter: hace que funcionen las rutas


function App() {
  return (
    <BrowserRouter> 
    <div className="App">
    <Switch>
    <Route exact path ="/"component={ReturnLandingPage}/>
    <Route exact path ="/home"component={ReturnHome}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;


//introduccion al pryecto landing page
//entra al home(todas las recetas, filtros, barras de navegacion, busqueda)
//detaill (detalle de cada receta)