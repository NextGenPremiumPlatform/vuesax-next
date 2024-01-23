import {setColor} from '../util'
import loading from './vsLoading/Base/index'
import notification from './vsNotification/Base/index'
import {checkAll, getLength, getPage, getSearch, sortData} from './vsTable'

export default (Vue: any) => {
  Vue.prototype.$vs = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body)
    },
    loading,
    notification,
    getPage,
    getLength,
    checkAll,
    getSearch,
    sortData
  }
}
