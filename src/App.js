import './App.css';

// Navbar
import Navbar from './components/Navbar';
import { ShoppingCartOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShoppingCartOutlined />
      <header className="App-header"> </header>
    </div>
  );
}

export default App;
