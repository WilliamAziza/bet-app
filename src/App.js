import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router';
import styles from './styles.css'
import ValentineCard from './components/ValentineCard';
import val from './val.css'

function App() {
  return (
    <div className="App">
      {/* <Router/> */}
      <ValentineCard/>
    </div>
  );
}

export default App;
