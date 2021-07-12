import Gears from "../../icons/gears_icon.webp"
import Design from "../../icons/design_icon.webp"
import Hands from "../../icons/envolvimento_icon.webp"
import React from "react"

const oQueFacoData = [
  {
    title: "Desenvolvimento",
    content: (
      <p>
        Apaixonado pelo desenvolvimento front-end, produzo diariamente código
        simples, limpo e legível, que poderá ser usado por outros e potenciado
        para criar software excepcional.
      </p>
    ),
    src: Gears,
  },
  {
    title: "Design",
    content: (
      <p>
        Design é mais do que o look final de um produto.
        <br />
        Requer uma atenção enorme ao detalhe, à sua funcionalidade interna e à
        interação do usuário para criar uma experiência memorável.
      </p>
    ),
    src: Design,
  },
  {
    title: "Colaboração",
    content: (
      <p>
        Atendo às necessidades do cliente e colaboro com a equipa de forma a
        potenciar o trabalho e gerar resultados.
      </p>
    ),
    src: Hands,
  },
]
export default oQueFacoData
