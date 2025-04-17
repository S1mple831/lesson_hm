# tailwindcss 原理是？

原子类的css，是postcss 的一个插件

- 通过扫描HTML Vue react 等文件（配置），提取类名并按需申城对应的css 样式 （JIT Just in Time）
- 基于postcss 进行插件的编译
- 更好的适配 以及主题定制等