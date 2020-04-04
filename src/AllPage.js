import React from 'react';
import './style.css';
import IntroPage from './IntroPage/IntroPage';
import SecondPage from './SecondPage';


class AllPage extends React.Component{
    render(){
        return(
            <div>
                <div><IntroPage/></div>
                <div><SecondPage/></div>       
            </div>
        )
    }
  }

export default AllPage;