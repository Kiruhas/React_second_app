import React from 'react';

const DigitalClock = function (props){
    return(
    <div>{props.time}</div>
    )
}

class Clock extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            currentTime: (new Date()).toLocaleString()
        }
        this.clockLauncher()
    }

    clockLauncher() {
        setInterval(() => {
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }

    render () {
        return (
            <div className='intro_clock'>
                <div className='intro_clock_sup'>Точное Московское время</div>
                <DigitalClock time={this.state.currentTime} />
            </div>
        )
    }
}

export default Clock;