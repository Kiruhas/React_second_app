import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header'

  function PrintMainPage () {
    return (
      Header() // Шапка
    );
  }
  
  // ========================================
  
  ReactDOM.render(
    PrintMainPage(),
    document.getElementById('root')
  );
  