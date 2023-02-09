import { BiRectangle, BiMinus, BiX } from 'react-icons/bi';
import './global.css'

function Topbar(){
    return (
        <div className='topBar'>
            <div className='topBar-logo-div'>
                ApiPal
            </div>
            <div className='topBar-control-div'>
                <div className='topBar-control-button'><BiMinus id='react-icons'/></div>
                <div className='topBar-control-button'><BiRectangle id='react-icons'/></div>
                <div className='topBar-control-button-close'onClick={()=>test('shupe')}><BiX id='react-icons-close'/></div>
            </div>
        </div>
    );
}

export default Topbar;