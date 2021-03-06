import React from 'react';

class Header extends React.Component{
  render () {
    return (
        <header className='header'>
          <div className='container'>
            <div className='header_content'>
              <div className='header_name'>Web-Developer KiruhaS</div>
              <div className='header_links'>
                <a href='#aboutMe' className='header_link'>Обо мне</a>
                <a href='#aboutMe' className='header_link'>Достижения</a>
                <a href='#aboutMe' className='header_link'>Работы</a>
              </div>
            </div>
          </div>
        </header>    
    );
  }
}

export default Header;