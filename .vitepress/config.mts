import { defineConfig,type DefaultTheme} from 'vitepress'
const getNav = () =>(
  [
    { text: 'Home',link: '/index' },
    { text: '博客',link:'/blog/gaius-utils/scrollTo' },
    {
      text: '项目',link:'/project/scaling-dollop/effect'
    }
  ]
)
const getBlog = ():DefaultTheme.SidebarItem[] =>([
  {
    text: 'gaius-utils',
    base:'/blog/gaius-utils',
    items: [
      { text: '前端滚动条滚动到指定位置', link: '/scrollTo' },
      { text: '实现一个简单的虚拟列表', link: '/virtualList' },
      { text: '虚拟列表进阶', link: '/virtualListPlus' },
      { text: '发布-订阅模式', link: '/pubSub' },
    ]
  },{
    text:'vue源码解析',
    base:'/blog/vue',
    items:[
  
    ]
  }
])
const getProject = ():DefaultTheme.SidebarItem[] =>([{
  text: 'scaling-dollop',
  base:'/project/scaling-dollop',
  items: [
    { text: '目标', link: '/effect' },
  ]
}])

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gaius's note",
  description: "A VitePress Site",
  base:'/',
  srcDir:'./src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav:getNav(),
    sidebar:{
      '/blog':{
        items:getBlog()
      },
      '/project':{
        items:getProject()
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gaius-98/gaius-blog' }
    ]
  }
})
