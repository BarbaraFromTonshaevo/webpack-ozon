import { state } from "./state";

const pluralRules = new Intl.PluralRules('ru')
const forms = { one: 'товар', few: 'товара', many: 'товаров', other: 'товара' }

// Заголовок всегда показывает, где ищем, даже если ничего не нашлось
export const changeInfo = (number) => {
    const catalogHeading = document.querySelector('.category-name')
    const catalogCount = document.querySelector('.category-count')

    catalogHeading.textContent = state.category !== '' ? state.category : 'Все товары'
    catalogCount.textContent = `${number} ${forms[pluralRules.select(number)]}`
}
