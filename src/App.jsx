import './App.css';
import ConOne from './components/ConOne';
import Counter from './components/Counter';
import Input from './components/Input';
import ConEffect from './components/Effect/ConEffect';

function App() {
  return (
    <div>
      <Counter/>
      <br />
      <Input/>
      <br />
      <ConOne/>
      <br />
      <ConEffect/>
    </div>
  );
}

export default App;
