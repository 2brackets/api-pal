import * as ReactDOM from 'react-dom';
import './App.css'
import Topbar from './global/TopBar';

function render() {
  ReactDOM.render(
  <Topbar/>, 
  document.getElementById('root'));
}

render();