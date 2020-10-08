import { ComponentOptions } from "vue"

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

declare module '*.md' {
  const str: string
  export default str
}
