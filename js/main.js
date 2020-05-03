let windowObjRef = null

const setStyleGrid = () => {
  const grid = document.querySelector('.forecast__grid')
  const styles = `
    display: grid;
    grid-template-columns: repeat(${grid.childElementCount}, 1fr);
    column-gap: 1rem;
  `
  grid.setAttribute('style', styles)
}

const cloneWarningTmpl = () => {
  const warningTmpl = document.getElementById('warning')
  const warning = document.importNode(warningTmpl.content, true)
  warning.querySelector('button').addEventListener('click', () => {
    openMobileWindow('https://angelmendozacap.github.io/Weather-App/')
  })

  return warning
}

const openMobileWindow = url => {
  if (windowObjRef == null || windowObjRef.closed) {
    windowObjRef = window.open(
      url,
      'Weather-App',
      'width=411,height=823,scrollbars,status'
    )
  } else {
    windowObjRef.focus()
  }

}

if (!matchMedia('(max-width: 411px)').matches) {
  const warning = cloneWarningTmpl()
  document.body.innerHTML = ''
  document.body.appendChild(warning)
} else {
  setStyleGrid()
}
