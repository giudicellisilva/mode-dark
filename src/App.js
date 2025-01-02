import { useState } from "react";
import ButtonModeDark from "./components/ButtonModeDark";
import logo from "./assets/logo.png";
import logoReact from "./assets/logoReact.svg";


function App() {
  const [isModedark, setModedark] = useState(false);

  return (
    <div className="App" data-theme={ isModedark ? "dark" : ""}>
      <header className="header">
        <div className="header-body">
        <img className="logo" src={logo} />
        <a className="link">Home</a>
        <a className="link">Projetos</a>
        <div className="divisoria"></div>
        <button className="logout">
          <span className="logout_text">Logout</span>
          <img className="logout__img"></img>
        </button>
        <ButtonModeDark isModeDark={isModedark} setModeDark={setModedark}/>
        </div>
       
        
      </header>
      <div className="div-text">
        <h1 className="text-primary">O Laboratório de Códigos</h1>
        <h2 className="text-secundary">@OLaboratórioDeCódigos</h2>

      </div>

      <div className="div-content">
        <div className="card">
            {isModedark ? <h2>Modo Dark</h2> : <h2>Modo Light</h2> }
        </div>
        <img className="logoReact" src={logoReact}></img>
      </div>

    </div>
  );
}

export default App;
