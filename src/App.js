import './App.css';
import { Footer, GameGallery, NavBar } from './components/index'


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container ">
        <GameGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
