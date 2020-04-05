import React from 'react';

class ProgressActivate extends React.Component {
    render (){
        return(
            null
        )
    }
}

window.addEventListener('scroll', function ProgressActivate(){
    let pos = window.pageYOffset;
    if (pos > 0){
        for (let i=1; i<5; i++){
            let wel = this.document.querySelector('#welldone' + i);
            wel.classList.add('welldone'+i);
        }  
    }
})

export default ProgressActivate;




