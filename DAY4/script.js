const searchButton = document.querySelector('.btn')
const searchContainer = document.querySelector('.search')
const input = document.querySelector('.input')

searchButton.addEventListener(('click'), () => {
    searchContainer.classList.toggle('active')
    input.focus()
}
)