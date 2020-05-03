const grid = document.querySelector('.forecast__grid')

const styles = `
  display: grid;
  grid-template-columns: repeat(${grid.childElementCount}, 1fr);
  column-gap: 1rem;
`

grid.setAttribute('style', styles)
