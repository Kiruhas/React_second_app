import React from 'react';
import ProgressActivate from './ProgressBar';

class SecondPage extends React.Component{
    render(){
        return (
            <div className='about_page' id='aboutMe'>
                <div className='container'>
                    <div className='about_header'>
                        <ProgressActivate/>
                        Обо мне
                        </div>
                    <div className='about_skills_title'>Уровни моих умений</div>
                    <div className='skills'>
                        <div className='skills_item'>
                            <div className='skills_item_name'>HTML</div>
                            <div className='progress_bar'>
                                <div className='progress_bar_result' id='welldone1'>

                                </div>
                                <div className='progress_bar_percent'>85%</div>
                            </div>
                        </div>
                        <div className='skills_item'>
                            <div className='skills_item_name'>CSS</div>
                            <div className='progress_bar'>
                                <div className='progress_bar_result' id='welldone2'>

                                </div>
                                <div className='progress_bar_percent'>70%</div>
                            </div>
                        </div>
                        <div className='skills_item'>
                            <div className='skills_item_name'>JavaScript</div>
                            <div className='progress_bar'>
                                <div className='progress_bar_result' id='welldone3'>

                                </div>
                                <div className='progress_bar_percent'>40%</div>
                            </div>
                        </div>
                        <div className='skills_item'>
                            <div className='skills_item_name'>React</div>
                            <div className='progress_bar'>
                                <div className='progress_bar_result' id='welldone4'>

                                </div>
                                <div className='progress_bar_percent'>20%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondPage;