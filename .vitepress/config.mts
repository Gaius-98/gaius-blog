import { defineConfig,type DefaultTheme} from 'vitepress'
const NavList = [
  { text: '首页',link: '/index' },
  { text: '学习记录',link:'/record/index' },
  {
    text: '项目',link:'/project/index'
  }
]
const RecordList:DefaultTheme.SidebarItem[] = [
  {
    text: 'js基础',
    base:'/record/js',
    items:[
      {
        text:'手写函数',
        link:'/handwriting'
      }
    ]   
  },{
    text:'vue源码解析',
    base:'/record/vue',
    items:[
  
    ]
  }
]
const ProjectList:DefaultTheme.SidebarItem[] = [{
  text: '项目',
  base:'/project',
  link:'/index',
  items: [
    { text: 'gaius-admin', base:'/project/gaius-admin', link:'/index', 
      items:[
        {text:'简介',link:'/'},
        {text:'安装手册',link:'/setup'},
        { 
          text:'开发指南',
          items:[
            {text:'权限控制详解',link:'/role'},
            {text:'操作日志详解',link:'/optlog'}
          ]
        }

      ]  
    },
    {
      text:'组件库(gaius-utils)',
      base:'/project/gaius-utils',
      link:'/index',
      items: [
      { text: '前端滚动条滚动到指定位置', link: '/scrollTo' },
      { text: '实现一个简单的虚拟列表', link: '/virtualList' },
      { text: '虚拟列表进阶', link: '/virtualListPlus' },
      { text: '发布-订阅模式', link: '/pubSub' },
    ],
    
    },
    {
      text:'部署',base:'/project/opex',link:'/index',items:[
        {text:'云服务器简单部署',link:'/'},
        {text:'CI/CD',link:'/cicd'}
      ]
    }
  ]
}]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gaius blog",
  description: "我在学习和实践前端开发过程中的所有笔记、经验分享和技术探索",
  base:'./',
  srcDir:'./src',
  lang:'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav:NavList,
    logo:'/icon.png',
    sidebar:{
      '/record/':RecordList,
      '/project/':ProjectList
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航',
      level:'deep'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gaius-98'}
    ],
  }
})
