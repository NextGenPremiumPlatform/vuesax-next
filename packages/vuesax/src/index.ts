import * as vsComponents from './components/index'
import defineVuesaxFunctions from './functions/defineVuesaxFunctions'
import { defineVuesaxOptions, VuesaxOptions } from './util/defineVuesaxOptions'

const install = (Vue: any, options?: VuesaxOptions) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    if (options.components.length && !options.components.includes(vsComponent.name)) {
      return;
    } else {
      Vue.use(vsComponent)
    }
  })

  if (options) {
    defineVuesaxOptions(options)
  }

  defineVuesaxFunctions(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export default install
export default install
