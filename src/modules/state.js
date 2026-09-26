import { priceFilter, hotSaleFilter, categoryFilter, searchFilter } from "./filters"

// Общее состояние фильтров: каждый модуль меняет своё поле, а applyFilters применяет все условия сразу
export const state = { query: '', category: '', min: '', max: '', sale: false }

export const applyFilters = (goods) =>
  priceFilter(
    hotSaleFilter(categoryFilter(searchFilter(goods, state.query), state.category), state.sale),
    state.min, state.max)
