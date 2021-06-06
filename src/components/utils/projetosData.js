import PrintMusicaEmSi from "../../img/musicaemsiprint.png";
import PrintWashome from "../../img/washome screenshot.png";
import PrintPortfolio from "../../img/Portfolioprint.jpg";
import React from "react";

const projetosData = [
  {
    img: PrintWashome,
    title: "Washome",
    content: [
      'Totalidade do design e código para a empresa de limpeza têxtil "Washome", com layout responsivo, compatibilidade entre browsers e tamanhos de tela.',
      <br />,
      <br />,
      "Inclui página de Detalhes, Formulário e Testemunhos em Carousel.",
    ],
    techUsed: "HTML  SASS  JAVASCRIPT  ADOBE XD  ADOBE DIMENSION",
    github: "https://github.com/Juan-calero/Washome",
    site: "http://www.washome.pt/",
  },
  {
    img: PrintMusicaEmSi,
    title: "Música em Si",
    content: [
      'Desenvolvimento e manutenção da plataforma web da empresa de ensino "Música em Si".',
      <br />,
      <br />,
      " Inclui landing pages, página de preçário e formulário multi-step.",
    ],
    techUsed: "Wix Corvid",
    site: "https://www.musicaemsi.com/",
  },
  {
    img: PrintPortfolio,
    title: "Portfolio Pessoal",
    content: [
      "Design e desenvolvimento web do site em que se encontra, desenvolvido inteiramente através do ReactJS e Sass.",
      <br />,
      <br />,
      "Layout Responsivo e Suporte Web Mobile",
    ],
    techUsed: "React.JS  SASS",
    github: "https://github.com/Juan-calero/juan-calero.github.io",
  },
];

export default projetosData;
