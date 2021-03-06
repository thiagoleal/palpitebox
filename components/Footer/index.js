import React from 'react';

const Footer = () => (
  <div id="footer" className="bg-gray-700 p-4 w-full">
    <div className="container mx-auto text-center font-bold text-white">
      Projeto desenvolvido por Thiago Leal
      <br className="sm:hidden" />
      <span className="hidden sm:inline">{' / '}</span>
      <a className="hover:underline" href="https://www.linkedin.com/in/thfleal/">Linkedin</a>
      {' / '}
      <a className="hover:underline" href="https://github.com/thiagoleal">GitHub</a>
    </div>
    <div className="text-center mt-2">
      <img className="inline p-4 w-40 sm:w-auto" src="/logo-semana-fsm.png" alt="Semana FullStack Master" />
      <img className="inline p-4 w-40 sm:w-auto" src="/logo-devpleno.png" alt="DevPleno" />
    </div>
  </div>
);

export default Footer;
