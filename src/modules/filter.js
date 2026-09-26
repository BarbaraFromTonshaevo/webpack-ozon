import getData from "./getData"
import renderGoods from "./renderGoods"
import { state, applyFilters } from "./state"

const filter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')
    const checkboxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    const update = () => {
        state.min = minInput.value
        state.max = maxInput.value
        state.sale = checkboxInput.checked
        getData().then((data) => {
            renderGoods(applyFilters(data))
        })
    }

    minInput.addEventListener('input', update)

    maxInput.addEventListener('input', update)

    checkboxInput.addEventListener('change', () => {
        if(checkboxInput.checked){
            checkboxSpan.classList.add('checked')
        }else{
            checkboxSpan.classList.remove('checked')
        }
        update()
    })
}

export default filter