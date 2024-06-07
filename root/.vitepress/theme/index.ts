import { type Plugin, h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'

/**
 * 阅读增强
 */
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu,
  Options as NolebaseEnhancedReadabilitiesOptions, 
  InjectionKey as NolebaseEnhancedReadabilitiesInjectionKey,
  LayoutMode as NolebaseEnhancedReadabilitiesLayoutMode
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import 'virtual:uno.css'

/**
 * 行内预览
 */
import { 
  NolebaseInlineLinkPreviewPlugin, 
} from '@nolebase/vitepress-plugin-inline-link-preview/client'

import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

/**
 * 高亮标题
 */
import {  
  NolebaseHighlightTargetedHeading,  
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

/**
 * 图片懒加载
 */
import {
  NolebaseUnlazyImg,
} from '@nolebase/vitepress-plugin-thumbnail-hash/client'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
/**
 * 页面属性
 */
import {
  NolebasePagePropertiesPlugin,
} from '@nolebase/vitepress-plugin-page-properties/client'

/**
 * Git提交日志
 */
import { 
  NolebaseGitChangelogPlugin,InjectionKey as NolebaseGitChangelogInjectionKey
} from '@nolebase/vitepress-plugin-git-changelog/client'

import { locales as gitchangelogLocales } from '../config/components/gitchangelog'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'



import {properties} from '../config/components/properties'
import Tag from './components/Tag.vue'
import Archive from './components/Archive.vue'
import ArticleMetadata from './components/ArticleMetadata.vue'
import WordCloud from './components/WordCloud.vue'
import HomeContent from './components/HomeContent.vue'
import IntegrationCard from './components/IntegrationCard.vue'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
    })
  },
  enhanceApp({app}) {
    app.provide(NolebaseEnhancedReadabilitiesInjectionKey, {
      layoutSwitch: {
        defaultMode: NolebaseEnhancedReadabilitiesLayoutMode.SidebarWidthAdjustableOnly,
      },
      spotlight: {
        defaultToggle: true,
        hoverBlockColor: 'rgb(240 197 52 / 7%)',
      },
    } as NolebaseEnhancedReadabilitiesOptions)
    app.use(NolebaseGitChangelogPlugin)  

    app.provide(NolebaseGitChangelogInjectionKey, {
      locales: gitchangelogLocales
    })

    app.use(NolebaseInlineLinkPreviewPlugin)
    app.component('NolebaseUnlazyImg', NolebaseUnlazyImg)
    app.component('WordCloud',WordCloud)
    app.component('ArticleMetadata',ArticleMetadata)
    app.component('Tag', Tag)
    app.component('Archive',Archive)
    app.component('HomeContent',HomeContent)
    app.component('IntegrationCard', IntegrationCard)
    app.use(NolebasePagePropertiesPlugin<{
      tags: string[]
      progress: number
    }>(), {  properties, })


  },
  setup(){

  }
}

export default Theme
