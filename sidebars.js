/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  main: [
    'intro',
    {
      type: 'category',
      label: 'Pouvoir',
      link: {
        type: 'doc',
        id: 'pouvoir/intro',
      },
      items: [
        {
          type: 'doc',
          label: '介绍',
          id: 'pouvoir/intro',
        },
        {
          type: 'category',
          label: '脚本基础',
          link: {
            description: 'Javascript 基础',
            type: 'generated-index',
          },
          items: [
            'pouvoir/start/variable',
            'pouvoir/start/function',
            'pouvoir/start/control-flow',
            'pouvoir/start/nashorn',
          ],
        },
        {
          type: 'category',
          label: '脚本进阶',
          link: {
            description: 'JS结合Pouvoir, 发挥出真正实力',
            type: 'generated-index',
          },
          items: [
            'pouvoir/basic/javadoc',
            'pouvoir/basic/import',
            'pouvoir/basic/awake',
            'pouvoir/basic/command',
            'pouvoir/basic/listener',
            'pouvoir/basic/top-level',
          ],
        },
        {
          type: 'category',
          label: '内置功能',
          link: {
            description: 'Pouvoir中的一些工具类',
            type: 'generated-index',
          },
          items: [
            'pouvoir/features/container',
            'pouvoir/features/hologram',
            'pouvoir/features/monitor',
          ],
        },
        {
          type: 'category',
          label: '开发者',
          link: {
            description: '给开发者用的',
            type: 'generated-index',
          },
          items: [
            'pouvoir/extension/script-source',
            'pouvoir/extension/script-top-level',
            'pouvoir/extension/script-engine',
            'pouvoir/extension/script-annotation',
          ],
        },
        {
          type: 'category',
          label: '其它',
          link: {
            type: 'generated-index',
          },
          items: [
            'pouvoir/other/placeholder',
            'pouvoir/other/asahi',
            'pouvoir/other/functions',
            'pouvoir/other/actions',
          ],
        },
        {
          type: 'link',
          label: 'Javadoc',
          href: 'https://doc.skillw.com/pouvoir',
        },
        {
          type: 'doc',
          label: '更新日志',
          id: 'pouvoir/updates',
        },
      ],
    },
    {
      type: 'category',
      label: 'AttributeSystem',
      link: {
        type: 'doc',
        id: 'attsystem/intro',
      },
      items: [
        {
          type: 'doc',
          label: '前言',
          id: 'attsystem/about',
        },
        {
          type: 'doc',
          label: '介绍',
          id: 'attsystem/intro',
        },
        {
          type: 'category',
          label: '属性引擎',
          link: {
            description: '有关属性的部分',
            type: 'generated-index',
          },
          items: [
            'attsystem/attribute/intro',
            {
              type: 'category',
              label: '读取组',
              link: {
                description: '配置中的读取组',
                type: 'generated-index',
              },
              items: [
                'attsystem/attribute/read-group/intro',
                'attsystem/attribute/read-group/matcher',
                'attsystem/attribute/read-group/operation',
              ],
            },
            {
              type: 'category',
              label: '属性数据',
              link: {
                description: '了解属性数据',
                type: 'generated-index',
              },
              items: [
                'attsystem/attribute/data/intro',
                'attsystem/attribute/data/nbt',
                'attsystem/attribute/data/string',
              ],
            },
            {
              type: 'category',
              label: '属性功能',
              link: {
                description: '属性功能',
                type: 'generated-index',
              },
              items: [
                'attsystem/attribute/function/realise',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '装备栏系统',
          link: {
            type: 'generated-index',
          },
          items: [
            'attsystem/equipment/slot',
            {
              type: 'category',
              label: '条件',
              link: {
                type: 'generated-index',
              },
              items: [
                'attsystem/equipment/condition/intro',
                'attsystem/equipment/condition/usage',
                'attsystem/equipment/condition/list',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '战斗系统',
          link: {
            type: 'generated-index',
          },
          items: [
            'attsystem/fight/data',
            'attsystem/fight/damage-type',
            'attsystem/fight/mechanic',
            'attsystem/fight/mechanics',
            'attsystem/fight/mechanic-group',
          ],
        },
        {
          type: 'category',
          label: '其它',
          link: {
            type: 'generated-index',
          },
          items: [
            'attsystem/other/config',
            'attsystem/other/formula',
            'attsystem/other/placeholder',
            'attsystem/other/mythic-mobs',
          ],
        },
        {
          type: 'category',
          label: '开发者',
          link: {
            description: '给开发者用的',
            type: 'generated-index',
          },
          items: [
            'attsystem/extension/intro',
            'attsystem/extension/read-pattern',
            'attsystem/extension/fight',
            'attsystem/extension/message',
          ],
        },
        {
          type: 'link',
          label: 'Javadoc',
          href: 'https://doc.skillw.com/attsystem',
        },
        {
          type: 'doc',
          label: 'FAQ',
          id: 'attsystem/faq',
        },
        {
          type: 'doc',
          label: '更新日志',
          id: 'attsystem/updates',
        },
      ],
    },
    {
      type: 'category',
      label: 'Buffystem',
      link: {
        type: 'doc',
        id: 'buffsystem/intro',
      },
      items: [
        {
          type: 'doc',
          label: '介绍',
          id: 'buffsystem/intro',
        },
        {
          type: 'category',
          label: '效果',
          link: {
            type: 'doc',
            id: 'buffsystem/effect/intro'
          },
          items: [
            'buffsystem/effect/intro',
            {
              type: 'category',
              label: '效果类型',
              link: {
                type: 'doc',
                id: 'buffsystem/effect/type'
              },
              items: [
                'buffsystem/effect/type/attribute',
                'buffsystem/effect/type/potion',
                'buffsystem/effect/type/permission',
              ],
            },
          ],
        },
        
        {
          type: 'category',
          label: '条件',
          link: {
            type: 'doc',
            id: 'buffsystem/condition/intro'
          },
          items: [
            'buffsystem/condition/intro',
            {
              type: 'category',
              label: '类型',
              link: {
                type: 'generated-index',
              },
              items: [
                'buffsystem/condition/type/time',
                'buffsystem/condition/type/permission',
              ],
            },
            'buffsystem/condition/custom',
          ],
        },
        {
          type: 'category',
          label: 'Buff',
          link: {
            type: 'generated-index',
          },
          items: [
            'buffsystem/buff/intro',
            'buffsystem/buff/data',
          ],
        },
        {
          type: 'category',
          label: '其它',
          link: {
            type: 'generated-index',
          },
          items: [
            'buffsystem/other/placeholder',
            'buffsystem/other/mythic-mobs',
          ],
        },
        {
          type: 'category',
          label: '开发者',
          link: {
            description: '给开发者用的',
            type: 'generated-index',
          },
          items: [
            'buffsystem/extension/intro',
            'buffsystem/extension/example',
          ],
        },
        {
          type: 'link',
          label: 'Javadoc',
          href: 'https://doc.skillw.com/buffsystem',
        },
        {
          type: 'doc',
          label: 'FAQ',
          id: 'buffsystem/faq',
        },
        {
          type: 'doc',
          label: '更新日志',
          id: 'buffsystem/updates',
        },
      ],
    },
    {
      type: 'category',
      label: 'ItemSystem',
      link: {
        type: 'doc',
        id: 'itemsystem/intro',
      },
      items: [
        {
          type: 'doc',
          label: '介绍',
          id: 'itemsystem/intro',
        },
        {
          type: 'category',
          label: '开始',
          link: {
            type: 'generated-index',
          },
          items: [
            'itemsystem/start/command',
            'itemsystem/start/config',
          ],
        },
        {
          type: 'category',
          label: '物品',
          link: {
            type: 'generated-index',
          },
          items: [
            'itemsystem/item/intro',
            'itemsystem/item/option',
            'itemsystem/item/process',
            'itemsystem/item/process-data',
          ],
        },
        {
          type: 'category',
          label: '物品元',
          link: {
            type: 'generated-index',
          },
          items: [
            'itemsystem/meta/intro',
            'itemsystem/meta/list',
            'itemsystem/meta/global-meta-data',
          ],
        },
        {
          type: 'category',
          label: '变量',
          link: {
            type: 'generated-index',
          },
          items: [
            'itemsystem/variable/intro',
            'itemsystem/variable/type',
            'itemsystem/variable/types',
          ],
        },
        {
          type: 'category',
          label: '变量',
          link: {
            type: 'generated-index',
          },
          items: [
            'itemsystem/variable/intro',
            'itemsystem/variable/type',
            'itemsystem/variable/types',
          ],
        },
        {
          type: 'category',
          label: '深造',
          link: {
            type: 'generated-index',
          },
          items: [
            'itemsystem/further/action',
            'itemsystem/further/actions',
            'itemsystem/further/extends',
          ],
        },
        {
          type: 'category',
          label: '其它',
          link: {
            type: 'generated-index',
          },
          items: [
            'itemsystem/other/mythic-mobs',
          ],
        },
        {
          type: 'link',
          label: 'Javadoc',
          href: 'https://doc.skillw.com/itemsystem',
        },
        {
          type: 'doc',
          label: 'FAQ',
          id: 'itemsystem/faq',
        },
        {
          type: 'doc',
          label: '更新日志',
          id: 'itemsystem/updates',
        },
      ],
    }
  ]

};

export default sidebars;
