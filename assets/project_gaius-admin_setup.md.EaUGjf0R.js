import{_ as a,c as n,a0 as p,o as i}from"./chunks/framework.CRwaVH_G.js";const e=""+new URL("directory.EZDVDzKE.png",import.meta.url).href,u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"project/gaius-admin/setup.md","filePath":"project/gaius-admin/setup.md"}'),l={name:"project/gaius-admin/setup.md"};function t(c,s,o,d,r,h){return i(),n("div",null,s[0]||(s[0]=[p(`<h4 id="详细目录结构" tabindex="-1">详细目录结构 <a class="header-anchor" href="#详细目录结构" aria-label="Permalink to &quot;详细目录结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gaius-admin/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── sql/                #数据库sql</span></span>
<span class="line"><span>├── web/                #前端代码</span></span>
<span class="line"><span>│   ├── src/            #源代码</span></span>
<span class="line"><span>│       ├── api/        #公共请求，如：字典、菜单</span></span>
<span class="line"><span>│       ├── assets/     #静态资源</span></span>
<span class="line"><span>│       ├── components/ #封装的组件</span></span>
<span class="line"><span>│       ├── directives/ # 封装的指令</span></span>
<span class="line"><span>│       ├── layout/     #布局组件</span></span>
<span class="line"><span>│       ├── model/      #类型定义</span></span>
<span class="line"><span>│       ├── router/     #路由</span></span>
<span class="line"><span>│       ├── stores/     #系统全局配置</span></span>
<span class="line"><span>│       ├── utils/      #封装的工具函数</span></span>
<span class="line"><span>│       └── views/      #页面   </span></span>
<span class="line"><span>│   ├── public/</span></span>
<span class="line"><span>│   └── package.json</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── server/                         #后端代码</span></span>
<span class="line"><span>│   ├── src/                        #源代码</span></span>
<span class="line"><span>│       ├── common/                 #公共服务、函数等 </span></span>
<span class="line"><span>│           ├── decorator/          #装饰器</span></span>
<span class="line"><span>│           ├── dto/                #公共dto</span></span>
<span class="line"><span>│           ├── enum/               #枚举类型方便使用</span></span>
<span class="line"><span>│           ├── filter/             #全局过滤器</span></span>
<span class="line"><span>│           ├── guards/             #守卫 </span></span>
<span class="line"><span>│           ├── interceptor/        #全局错误拦截</span></span>
<span class="line"><span>│           └── utils/              #公共方法</span></span>
<span class="line"><span>│       ├── config/                 #项目配置文件</span></span>
<span class="line"><span>│       └── modules/                #开发模块</span></span>
<span class="line"><span>│   ├── static/         #静态资源目录，可以通过服务器ip访问</span></span>
<span class="line"><span>│   └── package.json</span></span>
<span class="line"><span>└── package.json</span></span></code></pre></div><h4 id="拉取项目" tabindex="-1">拉取项目 <a class="header-anchor" href="#拉取项目" aria-label="Permalink to &quot;拉取项目&quot;">​</a></h4><p>本地拉取gaius-admin项目(<code>node v20</code>)</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Gaius-98/gaius-admin.git</span></span></code></pre></div><p>打包前端文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> web</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>打包完成后复制<code>dist</code>文件夹中的内容,如图： <img src="`+e+'" alt="dist"></p><h4 id="上传" tabindex="-1">上传 <a class="header-anchor" href="#上传" aria-label="Permalink to &quot;上传&quot;">​</a></h4><p>将<code>dist</code>文件夹内容和<code>server</code>文件夹上传至云服务器</p><h4 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h4><p>详细请参考<a href="./../opex/">运维-部署</a></p>',12)]))}const g=a(l,[["render",t]]);export{u as __pageData,g as default};
