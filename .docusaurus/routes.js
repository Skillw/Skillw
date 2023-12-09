import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2b3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '562'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '352'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '5e6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ee6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ba7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b62'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a01'),
    exact: true
  },
  {
    path: '/blog/2022/7/16/codemind/codemind',
    component: ComponentCreator('/blog/2022/7/16/codemind/codemind', '6c1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '33d'),
    exact: true
  },
  {
    path: '/blog/prolog/basic',
    component: ComponentCreator('/blog/prolog/basic', '930'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '5b7'),
    exact: true
  },
  {
    path: '/blog/tags/codemind',
    component: ComponentCreator('/blog/tags/codemind', '85c'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '837'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '405'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd1c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'cf6'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'fa4'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bf8'),
    routes: [
      {
        path: '/docs/attsystem/about',
        component: ComponentCreator('/docs/attsystem/about', '037'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/attribute/data/intro',
        component: ComponentCreator('/docs/attsystem/attribute/data/intro', 'f8d'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/attribute/data/nbt',
        component: ComponentCreator('/docs/attsystem/attribute/data/nbt', '473'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/attribute/data/string',
        component: ComponentCreator('/docs/attsystem/attribute/data/string', 'dff'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/attribute/function/realise',
        component: ComponentCreator('/docs/attsystem/attribute/function/realise', '139'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/attribute/intro',
        component: ComponentCreator('/docs/attsystem/attribute/intro', '5ac'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/attribute/read-group/intro',
        component: ComponentCreator('/docs/attsystem/attribute/read-group/intro', 'f73'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/attribute/read-group/matcher',
        component: ComponentCreator('/docs/attsystem/attribute/read-group/matcher', 'aad'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/attribute/read-group/operation',
        component: ComponentCreator('/docs/attsystem/attribute/read-group/operation', '52d'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/equipment/condition/intro',
        component: ComponentCreator('/docs/attsystem/equipment/condition/intro', '87e'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/equipment/condition/list',
        component: ComponentCreator('/docs/attsystem/equipment/condition/list', '9dd'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/equipment/condition/usage',
        component: ComponentCreator('/docs/attsystem/equipment/condition/usage', '999'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/equipment/slot',
        component: ComponentCreator('/docs/attsystem/equipment/slot', 'ba3'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/extension/fight',
        component: ComponentCreator('/docs/attsystem/extension/fight', '22f'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/extension/intro',
        component: ComponentCreator('/docs/attsystem/extension/intro', '1b1'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/extension/message',
        component: ComponentCreator('/docs/attsystem/extension/message', 'e43'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/extension/read-pattern',
        component: ComponentCreator('/docs/attsystem/extension/read-pattern', '0e3'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/faq',
        component: ComponentCreator('/docs/attsystem/faq', 'e4e'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/fight/damage-type',
        component: ComponentCreator('/docs/attsystem/fight/damage-type', '2a4'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/fight/data',
        component: ComponentCreator('/docs/attsystem/fight/data', '0e6'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/fight/mechanic',
        component: ComponentCreator('/docs/attsystem/fight/mechanic', '5c3'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/fight/mechanic-group',
        component: ComponentCreator('/docs/attsystem/fight/mechanic-group', 'e53'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/fight/mechanics',
        component: ComponentCreator('/docs/attsystem/fight/mechanics', '25e'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/intro',
        component: ComponentCreator('/docs/attsystem/intro', '23b'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/other/config',
        component: ComponentCreator('/docs/attsystem/other/config', '074'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/other/formula',
        component: ComponentCreator('/docs/attsystem/other/formula', 'cd2'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/other/mythic-mobs',
        component: ComponentCreator('/docs/attsystem/other/mythic-mobs', '007'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/other/placeholder',
        component: ComponentCreator('/docs/attsystem/other/placeholder', 'b11'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/attsystem/updates',
        component: ComponentCreator('/docs/attsystem/updates', 'b9a'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/buff/data',
        component: ComponentCreator('/docs/buffsystem/buff/data', 'e1c'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/buff/intro',
        component: ComponentCreator('/docs/buffsystem/buff/intro', '600'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/condition/custom',
        component: ComponentCreator('/docs/buffsystem/condition/custom', 'bb6'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/condition/intro',
        component: ComponentCreator('/docs/buffsystem/condition/intro', 'ba7'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/condition/type/permission',
        component: ComponentCreator('/docs/buffsystem/condition/type/permission', '72f'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/condition/type/time',
        component: ComponentCreator('/docs/buffsystem/condition/type/time', 'bc9'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/effect/intro',
        component: ComponentCreator('/docs/buffsystem/effect/intro', '575'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/effect/type',
        component: ComponentCreator('/docs/buffsystem/effect/type', 'fc5'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/effect/type/attribute',
        component: ComponentCreator('/docs/buffsystem/effect/type/attribute', '546'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/effect/type/permission',
        component: ComponentCreator('/docs/buffsystem/effect/type/permission', '02e'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/effect/type/potion',
        component: ComponentCreator('/docs/buffsystem/effect/type/potion', '73a'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/extension/example',
        component: ComponentCreator('/docs/buffsystem/extension/example', '04c'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/extension/intro',
        component: ComponentCreator('/docs/buffsystem/extension/intro', '8f2'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/faq',
        component: ComponentCreator('/docs/buffsystem/faq', '8fd'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/intro',
        component: ComponentCreator('/docs/buffsystem/intro', '4de'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/other/mythic-mobs',
        component: ComponentCreator('/docs/buffsystem/other/mythic-mobs', '1f5'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/other/placeholder',
        component: ComponentCreator('/docs/buffsystem/other/placeholder', '314'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/buffsystem/updates',
        component: ComponentCreator('/docs/buffsystem/updates', '132'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/变量',
        component: ComponentCreator('/docs/category/变量', '54a'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/变量-1',
        component: ComponentCreator('/docs/category/变量-1', '010'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/读取组',
        component: ComponentCreator('/docs/category/读取组', '4d2'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/脚本基础',
        component: ComponentCreator('/docs/category/脚本基础', 'f03'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/脚本进阶',
        component: ComponentCreator('/docs/category/脚本进阶', '9b0'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/开发者',
        component: ComponentCreator('/docs/category/开发者', '6e7'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/开发者-1',
        component: ComponentCreator('/docs/category/开发者-1', 'fdb'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/开发者-2',
        component: ComponentCreator('/docs/category/开发者-2', 'ae2'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/开始',
        component: ComponentCreator('/docs/category/开始', 'ab3'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/类型',
        component: ComponentCreator('/docs/category/类型', '291'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/内置功能',
        component: ComponentCreator('/docs/category/内置功能', '9b2'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/其它',
        component: ComponentCreator('/docs/category/其它', 'acb'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/其它-1',
        component: ComponentCreator('/docs/category/其它-1', '049'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/其它-2',
        component: ComponentCreator('/docs/category/其它-2', 'aed'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/其它-3',
        component: ComponentCreator('/docs/category/其它-3', 'cfe'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/深造',
        component: ComponentCreator('/docs/category/深造', 'd6b'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/属性功能',
        component: ComponentCreator('/docs/category/属性功能', '227'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/属性数据',
        component: ComponentCreator('/docs/category/属性数据', 'b18'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/属性引擎',
        component: ComponentCreator('/docs/category/属性引擎', 'd63'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/条件',
        component: ComponentCreator('/docs/category/条件', 'ec5'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/物品',
        component: ComponentCreator('/docs/category/物品', '162'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/物品元',
        component: ComponentCreator('/docs/category/物品元', '755'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/战斗系统',
        component: ComponentCreator('/docs/category/战斗系统', '0fb'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/装备栏系统',
        component: ComponentCreator('/docs/category/装备栏系统', '8c0'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/category/buff',
        component: ComponentCreator('/docs/category/buff', 'e62'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '766'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/faq',
        component: ComponentCreator('/docs/itemsystem/faq', '3ce'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/further/action',
        component: ComponentCreator('/docs/itemsystem/further/action', '599'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/further/actions',
        component: ComponentCreator('/docs/itemsystem/further/actions', '001'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/further/extends',
        component: ComponentCreator('/docs/itemsystem/further/extends', '4e4'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/intro',
        component: ComponentCreator('/docs/itemsystem/intro', '877'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/item/intro',
        component: ComponentCreator('/docs/itemsystem/item/intro', 'f1a'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/item/option',
        component: ComponentCreator('/docs/itemsystem/item/option', '12b'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/item/process',
        component: ComponentCreator('/docs/itemsystem/item/process', 'a67'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/item/process-data',
        component: ComponentCreator('/docs/itemsystem/item/process-data', 'a49'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/meta/global-meta-data',
        component: ComponentCreator('/docs/itemsystem/meta/global-meta-data', '81d'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/meta/intro',
        component: ComponentCreator('/docs/itemsystem/meta/intro', 'd93'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/meta/list',
        component: ComponentCreator('/docs/itemsystem/meta/list', '8e1'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/other/mythic-mobs',
        component: ComponentCreator('/docs/itemsystem/other/mythic-mobs', '0fe'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/start/command',
        component: ComponentCreator('/docs/itemsystem/start/command', 'ab1'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/start/config',
        component: ComponentCreator('/docs/itemsystem/start/config', '9b7'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/updates',
        component: ComponentCreator('/docs/itemsystem/updates', '6e0'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/variable/intro',
        component: ComponentCreator('/docs/itemsystem/variable/intro', 'c1a'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/variable/type',
        component: ComponentCreator('/docs/itemsystem/variable/type', 'e5c'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/itemsystem/variable/types',
        component: ComponentCreator('/docs/itemsystem/variable/types', '5a6'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/basic/awake',
        component: ComponentCreator('/docs/pouvoir/basic/awake', 'c85'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/basic/command',
        component: ComponentCreator('/docs/pouvoir/basic/command', 'c8e'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/basic/import',
        component: ComponentCreator('/docs/pouvoir/basic/import', 'c56'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/basic/javadoc',
        component: ComponentCreator('/docs/pouvoir/basic/javadoc', '54e'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/basic/listener',
        component: ComponentCreator('/docs/pouvoir/basic/listener', 'c90'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/basic/top-level',
        component: ComponentCreator('/docs/pouvoir/basic/top-level', 'b72'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/extension/script-annotation',
        component: ComponentCreator('/docs/pouvoir/extension/script-annotation', 'e9c'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/extension/script-engine',
        component: ComponentCreator('/docs/pouvoir/extension/script-engine', 'ab9'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/extension/script-source',
        component: ComponentCreator('/docs/pouvoir/extension/script-source', 'f35'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/extension/script-top-level',
        component: ComponentCreator('/docs/pouvoir/extension/script-top-level', '713'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/features/container',
        component: ComponentCreator('/docs/pouvoir/features/container', '41a'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/features/hologram',
        component: ComponentCreator('/docs/pouvoir/features/hologram', 'd58'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/features/monitor',
        component: ComponentCreator('/docs/pouvoir/features/monitor', '8e0'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/intro',
        component: ComponentCreator('/docs/pouvoir/intro', '96d'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/other/actions',
        component: ComponentCreator('/docs/pouvoir/other/actions', '003'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/other/asahi',
        component: ComponentCreator('/docs/pouvoir/other/asahi', 'f5d'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/other/functions',
        component: ComponentCreator('/docs/pouvoir/other/functions', '563'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/other/placeholder',
        component: ComponentCreator('/docs/pouvoir/other/placeholder', '78f'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/start/control-flow',
        component: ComponentCreator('/docs/pouvoir/start/control-flow', '44b'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/start/function',
        component: ComponentCreator('/docs/pouvoir/start/function', '725'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/start/nashorn',
        component: ComponentCreator('/docs/pouvoir/start/nashorn', '26e'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/start/variable',
        component: ComponentCreator('/docs/pouvoir/start/variable', 'd26'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/pouvoir/updates',
        component: ComponentCreator('/docs/pouvoir/updates', 'af6'),
        exact: true,
        sidebar: "main"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f8e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
