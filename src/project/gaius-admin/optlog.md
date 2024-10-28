### 背景
在应用程序中，操作日志不仅是对用户行为的记录，更是系统安全、性能监控和故障排查的重要工具。本文将探讨如何在NestJS中实现操作日志记录的功能。
### 前提
在NestJS中，拦截器（Interceptor）是一种强大的机制，主要用于处理请求和响应的过程。它们能够在方法执行前后执行额外的逻辑，比如添加通用的功能、修改请求或响应数据、处理异常等。如果你对拦截器的概念不太了解，请参考[官方文档](https://docs.nestjs.com/faq/request-lifecycle#interceptors)。
### 实现
#### 1.创建一个拦截器(operation.interceptor)
```typescript
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class OperationInterceptor implements NestInterceptor {
  constructor(
    private reflector: Reflector,
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //暂存下响应的开始时间
    const startTime = Date.now();
    return next.handle()
  }
}
```
#### 2.将拦截器引入到全局中去
```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { OperationInterceptor } from 'xxxxx';

@Module({
  imports: [
    xxxxx
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: OperationInterceptor,
    },
  ],
})
export class AppModule {}
```
引入完成后，启动项目你会发现再请求数据时，会执行`OperationInterceptor.intercept`方法。
#### 3.明确需要记录的日志内容
在`intercept`方法中，我们可以通过`context`获取对应的信息
 1. `context.switchToHttp().getRequest()` 获取`request`的所有信息
 2. `context.getHandler()`获取接口执行时的函数信息
```typescript
// 记录请求的方法和地址
const { method, originalUrl } = request;
// 记录controller名称和实际的方法名称
const moduleName = context.getClass().name;
const funcName = context.getHandler().name;
```
 3.记录接口的响应时间和响应结果
  `intercept`中返回的是`Observable` 我们可以使用`tap`,`tap`作用是在`Observable`的流中插入副作用，而不改变流中的数据，常常用来做日志的记录。
```typescript
intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    
    const startTime = Date.now();
    return next.handle().pipe(tap(data) => {
        const endTime = Date.now();
        const duration = endTime - startTime; // 响应时间
        //data 就是响应结果
    })
}
```
#### 4.明确记录范围
大部分场景下，我们不需要对所有的接口请求进行日志记录。此时，我们可以使用`Nestjs`提供的自定义装饰器([Decorators](https://docs.nestjs.com/microservices/basics#decorators))的功能。
自定义一个装饰器
```typescript
import { SetMetadata } from '@nestjs/common';
//OperationType 是你提供给日志额外的参数，比如模块的中文名，操作的中文名等。
export const Operation = (arg: OperationType) => SetMetadata('operation', arg);
```
使用方法如下：
```typescript
@Operation({
module: '资源管理',
action: '新增',
})
create() {
    return this.Service.create();
}
```
此时我们需要再完善下拦截器，只记录包含此装饰器(`Operation`)的接口请求,实现选择性的日志记录。
#### 5.对收集的信息进行记录
创建一张`opt_log`表，在`tap`的副作用中进行日志的插入，这样在每次请求接口时，我们都会在`opt_log`表中插入一条数据。
### 总结
以上我们就简单实现了`Nestjs`系统内如何进行操作日志记录的功能。
如果你现在需要使用`Nestjs`创建后端服务，不妨试试[gaius-admin](./index.md),它是一个`all in js`后台管理系统，旨在为开发者和企业提供高效、灵活的管理解决方案。该系统基于(`Vue3`+`Ant Design`+`Nest`)技术栈构建。