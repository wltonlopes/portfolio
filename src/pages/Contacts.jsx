import React from 'react'

export default function Contacts() {
  return (
    <div id="contato" className='Container_pag'>
      <div className='Div_Proj'>
        <section class="jumbotron text-center sec">
          <div class="container page-container text-box">
              <h1 id="contato" class="jumbotron-heading">Entre em contato comigo</h1>
              <a 
                href="mailto:weltonlopesmetal@gmail.com" 
                target="_blank"
                class="btn btn-primary my-2" 
                rel="noreferrer"
              >
                <h3>Meu email</h3>
              </a>
          </div>
        </section>
      </div>
    </div>
  )
}
