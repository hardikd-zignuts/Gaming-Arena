import './App.css';
import { Footer, GameGallery, NavBar } from './components/index'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container mt-3">
        <GameGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
