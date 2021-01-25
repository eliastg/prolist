import './App.css';
import ProductList from './components/ProductList/ProductList';
import Configuration from './config/Configuration';

function App() {
  return (
    <div className="App">
      <div><h2>Products of <a rel="noreferrer" target="_blank" href={Configuration.STORE_URL}>etgtest Store</a></h2></div>
      <ProductList/>
    </div>
  );
}

export default App;
