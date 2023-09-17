import Header from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import avatarMichelle from "./assets/perfil-avatar-mujer-icono-redondo_24640-14042.avif";
import avatarOswaldo from "./assets/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpeg";
import avatarCarolin from "./assets/png-transparent-avatar-face-girl-female-woman-profile-happy-avatar-icon.png";
import './App.css';


const App = () => {

  return (
    <>
      <Header/>
      <div className="userSection">
        <ItemListContainer
          name="Michelle Aragon"
          date="14 September"
          description="Frontend Developer"
          imagen={avatarMichelle}
        />
        <ItemListContainer
          name="Oswaldo Rick"
          date="14 October"
          description="Fullstack Developer"
          imagen={avatarOswaldo}
        />
        <ItemListContainer
          name="Carolin Trigger"
          date="14 November"
          description="Design"
          imagen={avatarCarolin}
        />
      </div>
    </>
  );
};

export default App;
