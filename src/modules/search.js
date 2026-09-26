import getData from "./getData"
import renderGoods from "./renderGoods"
import { applyFilters, state } from "./state"

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input',  (event) => {
        state.query = event.target.value
        getData().then((data) => {
            renderGoods(applyFilters(data))
        })
    })
}

export default search