import { ref, type Ref, onMounted, onBeforeUnmount } from 'vue'
import { defineStore } from 'pinia'

// useEnvStore 自定义 Hook
export const useEnvStore = defineStore('env', () => {
  const debug = ref(true)
  function toggle() {
    debug.value = !debug.value
  }

  return { debug, toggle }
})

export type UseTimeParams = {
  silent?: boolean
}

export type UseTimeReturn = {
  time: Ref<string>
}

export type UseTimeReturnTemp = {
  time: Ref<string>
  name: string
  age: number
}

type C = Partial<UseTimeReturnTemp>

type CC = Required<C>

export const useTime = (params: UseTimeParams): UseTimeReturn => {
  let timer: number | null = null
  const { silent = true } = params
  // 定义初始时间
  const time = ref(new Date().toLocaleString())
  // 每个一秒，更新一次时间
  onMounted(() => {
    if (!silent) {
      timer = window.setInterval(() => {
        time.value = new Date().toLocaleString()
      }, 1000)
    }
  })

  onBeforeUnmount(() => {
    if (!silent && timer) {
      window.clearInterval(timer)
    }
  })

  return { time }
}
