import React from 'react';
import Clock from './Clock';

class MainContent extends React.Component {
    render(){
        return (
            <div className='container'>  
                <div className='intro_content'>Это мое первое приложение на React!</div>
                <div><Clock/></div>
            </div>
        )
    }
}

export default MainContent;