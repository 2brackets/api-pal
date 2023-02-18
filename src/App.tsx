import * as ReactDOM from 'react-dom';
import './App.css'
import Topbar from './global/topBar/TopBar';

function render() {
  ReactDOM.render(
  <Topbar/>, 
  document.getElementById('root'));
}

render();