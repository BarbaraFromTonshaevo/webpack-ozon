import getData from "./getData"
import renderGoods from "./renderGoods"
import { state, applyFilters } from './state'

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')
    const catalogButtons = document.querySelectorAll('.catalog button')

    let isOpen = false

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen

        if(isOpen) {
            catalogModal.style.display = 'block'
        }else{
            catalogModal.style.display = ''
        }
    })

    catalogButtons.forEach(button => {
        button.addEventListener('click', () => {
            state.category = button.dataset.category

            catalogButtons.forEach(btn => {
                const isActive = btn === button
                btn.classList.toggle('active', isActive)
                btn.setAttribute('aria-pressed', isActive)
            })

            isOpen = false
            catalogModal.style.display = ''

            getData().then((data) => {
                renderGoods(applyFilters(data))
            })
        })
    })
}

export default catalog