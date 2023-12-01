---
title: 流程数据
---


你需要了解一下**ItemSystem**中的**流程数据**

### 什么是 流程数据[ProcessData]?

**ItemSystem** 中，**物品**构建时的环境,上下文(变量存储的地方)
每次物品构建都会有一个**唯一的 UUID**, 你可以通过 `&unique` 调用

### 为什么要给用户讲?

因为用户需要调用**流程数据**中的**变量**来实现功能

### 怎么调用？

你需要了解:

- [**内联函数**](https://blog.skillw.com/#sort=pouvoir&doc=%E5%8A%9F%E8%83%BD/InlineFunction.md)
- [**函数列表**](https://blog.skillw.com/#sort=pouvoir&doc=%E5%8A%9F%E8%83%BD/Functions.md)
- [**动作列表**](https://blog.skillw.com/#sort=pouvoir&doc=%E5%8A%9F%E8%83%BD/Actions.md)

通过内联函数中的`&变量名`来调用变量

### 传递数据

通过 **JSON** 来进行快速传参

#### 例子

`/item get ExampleItem -data {quality:传说}`
