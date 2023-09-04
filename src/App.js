import Router from './components/Router';
import NavBar from './pages/NavBar';

// stylesheets
import '../src/styles/general.css';
import '../src/styles/navBar.css';
import '../src/styles/schedulerStyle.css';
import '../src/styles/home.css';
import '../src/styles/groceries.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
