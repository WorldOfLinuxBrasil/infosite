import React from 'react';
import './Main.scss';
import MenuBar from './Components/MenuBar/MenuBar';
function Main(){
    return(
   <><div className='Menu'>
            <MenuBar />
        </div>
            <div className='Main'>
            </div></>
    );
}
export default Main;