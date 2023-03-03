import './App.css';
import { Footer, GameGallery, NavBar } from './components/index'
import Search from './components/Search';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Search/>
      <div className="container ">
        <GameGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
