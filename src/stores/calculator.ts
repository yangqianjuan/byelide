// 这个定义方法非常死板
export class Calculator {
  add(a: number, b: number) {
    return a + b
  }

  subtract(a: number, b: number) {
    return a - b
  }

  multiply(a: number, b: number) {
    return a * b
  }

  divide(a: number, b: number) {
    return a / b
  }
}

// 我能不能将计算器的功能定义，暴露给外部，让外部给我增加功能
export class CalculatorPlugins {
  // 用来存放所有的插件
  private plugins: any[] = []

  // 定义一个方法，用来注册插件
  use(plugin: any) {
    this.plugins.push(plugin)
  }

  // 定义一个方法，用来执行插件
  run(a: string) {
    // 1. 先获取到所有的插件
    const plugins = this.plugins

    // 2. 遍历所有的插件，执行插件
    return !!plugins.reduce((result, plugin) => {
      return plugin(result) ? result : false
    }, a)
  }
}

// 表单校验
// 自定义 rules，babel、eslint，plugin
// 1. 定义一个插件
// 长度不小于 10
const plugin1 = (result: string) => {
  console.log('🚀 ~ file: Calculator.ts:47 ~ plugin1 ~ result:', result)
  return result.length >= 10
}

// 2. 定义一个插件
// 长度不大于 20
const plugin2 = (result: string) => {
  console.log('🚀 ~ file: Calculator.ts:54 ~ plugin2 ~ result:', result)
  return result.length <= 20
}

const plugins = new CalculatorPlugins()
plugins.use(plugin1)
plugins.use(plugin2)

console.log(plugins.run('123456789012345678901234567890'))
