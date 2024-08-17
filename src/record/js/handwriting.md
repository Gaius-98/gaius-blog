#### 1. call、apply、bind的函数实现

call和apply实现方式基本一致，只是apply的传参为数组，其他暂时没发现有什么区别，bind最后返回的是函数而非最后的结果需要注意一下
```javascript
Function.prototype.myCall = function (context,...args) {
    if(typeof this !== 'function'){
        throw new Error('type error')
    }
    context = context instanceof Object ? context :  globalThis
    const fn = Symbol('fn')
    context[fn] = this
    let result = context[fn](...args)
    delete context[fn]
    return result
}
```
```javascript
Function.prototype.myApply = function (context,args) {
    if(typeof this !== 'function'){
        throw new Error('type error')
    }
    if(!Array.isArray(args)){
        throw new Error('args error')
    }
    context = context instanceof Object ? context :  globalThis
    const fn = Symbol('fn')
    context[fn] = this
    let result = context[fn](...args)
    delete context[fn]
    return result
}
```
```javascript
Function.prototype.myBind = function (context,...args) {
    if(typeof this !== 'function'){
        throw new Error('type error')
    }
    context = context instanceof Object ? context :  globalThis
    const fn = Symbol('fn')
    context[fn] = this
    return function (...args2) {
        let result = context[fn](...args,...args2)
        delete context[fn]
        return result
    }
}
```

#### 2. new的实现

new的基本实现过程：创建一个对象，将该对象的原型链执行constructor的原型对象上，这样就可以获取原型对象上的属性和方法，当构造函数没有显示返回对象时，应该返回这个obj，如果显示的返回了对象那就返回这个对象。
```javascript
const myNew = (constructor,...args) =>{
    const obj = {

    }
    Object.setPrototypeOf(obj,constructor.prototype)
    let result =  constructor.call(obj,...args)
    return  result instanceof Object ? result :  obj
}
```

####  3. instanceof的实现

**instanceof** **运算符**用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
```javascript
const myInstanceof = (obj,constructor) =>{
    if(obj === null || obj === undefined){
        return false
    }
    if(typeof constructor !='function'){
        throw new Error('constructor is not a function')
    }

    while(Object.getPrototypeOf(obj)){
        if(Object.getPrototypeOf(obj) === constructor.prototype){
            return true
        }
        obj = Object.getPrototypeOf(obj)
    }
    return false
}
```

#### 4. 实现数组的flat方法，数组扁平化
```javascript
Array.prototype.myFlat =function(deep=1){
    if(this instanceof Array){
       return  this.reduce((p,c)=>{
            if(c instanceof Array && deep){
               p =  p.concat(c.myFlat( deep ? deep-1 : 0))
            }else{
                p.push(c)
            }
            return p
        },[])
    }
}
```

#### 5. promise的实现
```javascript
export class MyPromise {
    PEDDING='PEDDING'
    FULFILLED='FULFILLED'
    REJECTED='REJECTED'
    fulfillCallback = []
    rejectCallback = []
    constructor(executor){
        this.status = this.PEDDING
        const resolve = (value) =>{
            if(this.status == this.PEDDING){
                this.status = this.FULFILLED
                this.value = value
                this.fulfillCallback.map(e=>(e()))
            }

        }
        const reject = (reason) =>{
            if(this.status == this.PEDDING){
                this.status = this.REJECTED
                this.reason = reason
                this.rejectCallback.map(e=>e())
            }
        }
        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfill,onReject){
        if(this.status == this.FULFILLED){
            this.fulfillCallback.push(()=>{
                onFulfill(this.value)
            })
        }
        if(this.status == this.REJECTED){
            this.rejectCallback.push(()=>{
                onReject(this.reason)
            })
        }
        if(this.status == this.PEDDING){
            this.fulfillCallback.push(()=>{
                onFulfill(this.value)
            })
            this.rejectCallback.push(()=>{
                onReject(this.reason)
            })
        }
    }
}
```
