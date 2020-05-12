const hamburguer = document.getElementById('hamburguer')
const x = document.getElementById('x')
const nav = document.getElementById('nav')
let screenWidth = screen.width

function open() {
  nav.style.display = 'grid'
  x.style.display = 'block'
  hamburguer.style.display = 'none'
  decision = true
}
function close() {
  nav.style.display = 'none'
  x.style.display = 'none'
  hamburguer.style.display = 'block'
}
hamburguer.onclick = () => {
  open()
}
x.onclick = () => {
  close()
}

if (screenWidth > 1000) {
  x.style.display = 'none'
  hamburguer.style.display = 'none'
}
