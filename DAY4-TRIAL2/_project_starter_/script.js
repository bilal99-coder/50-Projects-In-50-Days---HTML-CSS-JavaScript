const searchContainer = document.querySelector('.search-container')
const input = document.querySelector('.input')
const searchButton = document.querySelector('.btn')

searchButton.addEventListener(('click'), () => {
    searchContainer.classList.toggle('active')
    input.focus()
})