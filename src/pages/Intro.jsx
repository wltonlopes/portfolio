import React from 'react';

export default function Intro() {
  return (
    <div className='Container_pag '>
      <div className='Div_Block'>
        <h1>
          Oi meu nome é Welton Lopes e eu sou um desenvolvedor Front End!
        </h1>
        <a 
        href='https://www.linkedin.com/in/welton-santo-lopes/' 
        alt='Link para o linkerdin' 
        target="_blank" 
        rel="noopener noreferrer"
        >
          <button> Meu Linkerdin </button>
        </a>
      </div>
      <div className='Div_Block'>
        <h2>Foto</h2>
      </div>
    </div>
  )
}
