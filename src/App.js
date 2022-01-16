import Navbar from './components/Navbar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/Search/Search';
import './App.css';
import { AppBar } from 'material-ui';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar/>
        <Search/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
