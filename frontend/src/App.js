import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Routers from './routes/Routers.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
