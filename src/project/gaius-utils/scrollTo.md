实现方式主要是通过设置dom的scrollTop属性或者使用scrollTo函数。

### 1.简易实现{#simple-realization}

当我们的需求比较简单时，知道确切要滚动的位置，那么只需要设置对应dom的scrollTop即可，
如滚动到表格(el-table)的底部
如果是element-ui中实现表格自动滚动最下方：

```javascript
//示例
this.$refs.table.bodyWrapper.scrollTop =  this.$refs.table.bodyWrapper.scrollHeight
```

### 2.封装函数

但是实际使用中我们不太清楚需要移动多少px，只知道我们要展示到对应的dom即可。那我们以视口为标准，获取容器及子元素，计算其相对位置然后滚动即可，下面是具体的函数实现：

```typescript
/**
 * 滚动container 定位容器
 * @param container -- Element dom的容器
 * @param to -- Element  需要定位到的dom
 */
const scrollToDom = (to: Element, container?:Element) => {
  if (container) {
    const { left: cLeft, top: cTop } = container?.getBoundingClientRect() as DOMRect
    const { left: tLeft, top: tTop } = to.getBoundingClientRect()
    const isScroll = (dom:Element) => ({
      y: dom.scrollHeight - dom.clientHeight > 0,
      x: dom.scrollWidth - dom.clientWidth > 0,
    })
    const { x, y } = isScroll(container)
    let top = tTop - cTop + container.scrollTop 
    let left = tLeft - cLeft + container.scrollLeft
    container.scrollTo({
      top: y ? top : container.scrollTop,
      left: x ? left : container.scrollLeft,
    })
  } else {
    const { left: tLeft, top: tTop } = to.getBoundingClientRect()
    window.scrollTo({
      left: tLeft,
      top: tTop,
    })
  }
}
```

通过`getBoundingClientRect()`获取当前dom及其父元素对应的dom相对于视口的位置
`isScroll`判断当前容器dom是否能滚动。使用`scrollTo`可以移动到指定的位置需要指定top或者left的值。

### npm组件
[gaius-utils](https://www.npmjs.com/package/gaius-utils)不仅封装了一些常用函数，同时还有可视化组件，拖拽组件，虚拟列表等组件供你使用。同时如果你有什么需要可以在[github](https://github.com/Gaius-98/utils)上提issue。
