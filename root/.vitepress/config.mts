import { defineConfig } from 'vitepress'
import{ defaultLang,langs } from './config/locales';
import { markdown } from './config/markdown';
import { getNav } from './config/nav'
import {outlines,level} from './config/outline'
import { locales as sidebarLocales } from './config/sidebar'
import { repoURL, locales as siteLocales } from './config/site'
import {provider,search} from './config/components/search'

export const locales = (()=>{
  const config:any = {}
    config['zh-CN'] = {
      ...langs['zh-CN'],
      ...siteLocales['zh-CN'],
      themeConfig: {
        nav: getNav('zh-CN'),
        sidebar:  sidebarLocales()['zh-CN'],
        outline: {
          label: outlines['zh-CN']?.outlineTitle ?? outlines['zh-CN']?.outlineTitle,
          level
        }
      }
    }
  return config
})()

const defaultLocale = locales[defaultLang.lang]

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  title: "Skillw",
  description: "Skillw 官网",
  locales,
  //默认语言
  lang: defaultLang.lang,
  //更简洁的url，去掉.html
  cleanUrls: true,
  //页面元数据可缓存，减少服务器带宽
  metaChunk:true,
  //导入markdown配置
  markdown,
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

  vite:{
  },

  themeConfig: {
    nav: getNav('zh-CN'),
    sidebar: sidebarLocales()['zh-CN'],
    socialLinks: [
      { icon: 'github', link: repoURL }
    ],
    search:search[provider]
  }
})

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
  
];