
import { VueConstructor } from 'vue'

declare module 'vue/types/vue' {
    export interface Vue {
        $vs: any
        $router: any
    }
}

declare global {
    interface Window {
        Vue: VueConstructor,
        consolee: any
    }
}

declare module '*.svg' {
    const content: string;
    export default content;
}
