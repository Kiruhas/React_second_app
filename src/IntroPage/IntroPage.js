import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

class IntroPage extends React.Component{
    render(){
        return (
            <div className='intro'>
                <div><Header/></div>
                <div><MainContent/></div>
            </div>
        )
    }
}

export default IntroPage;