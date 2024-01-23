import {checkAll, getLength, getPage, getSearch, sortData} from './vsTable'

export default (Vue: any) => {
  Vue.prototype.$vs = {
    getPage,
    getLength,
    checkAll,
    getSearch,
    sortData
  }
}
