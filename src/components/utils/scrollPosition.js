function scrollPosition() {
    const winPositionY = window.scrollY
    const fold = document.getElementById('fold').getBoundingClientRect().y
    const sobre = document.getElementById('sobre').getBoundingClientRect().y
    const oQueFaco = document.getElementById('oQueFaco').getBoundingClientRect().y
    const experiencia = document.getElementById('experiencia').getBoundingClientRect().y
    const projetos = document.getElementById('projetos').getBoundingClientRect().y
    const contact = document.getElementById('contact').getBoundingClientRect().y
    console.log(window.scrollY)
    console.log(fold)

}

export default scrollPosition