import logo from './gimbap-logo.svg';
import './App.css';
import './items.css';
import Item1 from './components/Item1';
import OrderUp from './components/OrderUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>GIMBAP</h1>
      </header>

      <div className='App-body'>
        <div>
          <h3>
            We sell only one kind of Gimbap
          </h3>
          <p>Mom's Recipe, No Changes, No exception</p>

          <Item1 className="items" />
          <OrderUp className='orderUp'/>
        </div>
      </div>
    </div>
  );
}

export default App;
