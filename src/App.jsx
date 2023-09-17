import Header from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import avatarMouse from "./assets/mouse-razer.jpeg";
import avatarTeclado from "./assets/teclado-razer.webp";
import avatarMonitor from "./assets/monitor-razer.jpg";
import './App.css';


const App = () => {

  return (
    <>
      <Header/>
      <div className="userSection">
        <ItemListContainer
          name="Razer Cobra Pro"
          description="Alto rendimiento en un ratón compacto y simétrico"
          imagen={avatarMouse}
        />
        <ItemListContainer
          name="Razer Huntsman V2"
          description="Con interruptores ópticos analógicos"
          imagen={avatarTeclado}
        />
        <ItemListContainer
          name="Razer Raptor 27"
          description="IPS-Grade display for incredible detail and picture clarity"
          imagen={avatarMonitor}
        />
      </div>
    </>
  );
};

export default App;
