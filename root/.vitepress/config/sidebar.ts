import type { DefaultTheme } from "vitepress/theme";
import { type SiteConfig } from "vitepress";
import { localesOf, parseLang } from "./locales";
import { completeData } from "../config/markdown";
import fg from "fast-glob";
import matter from "gray-matter";

const sync = fg.sync;

export const locales = () => {
  return localesOf<DefaultTheme.Sidebar>({
    "zh-CN": {
      "/docs/asahi/": [
        {
          text: "Asahi",
          link: "/docs/asahi/intro",
        },
        {
          text: "开始使用",
          collapsed: false,
          items: [
            { text: "第一个脚本", link: "/docs/asahi/start/first-step" },
          ],
        },
        {
          text: "基础内容",
          collapsed: false,
          items: [
            { text: "结构总论", link: "/docs/asahi/basic/intro" },
            { text: "调度模块", link: "/docs/asahi/basic/dispatcher" },
            { text: "处理模块", link: "/docs/asahi/basic/handler" },
            { text: "解释器", link: "/docs/asahi/basic/parser" },
            { text: "选择器", link: "/docs/asahi/basic/selector" },
          ],
        },
        {
          text: "解释器列表",
          collapsed: false,
          items: [
            {
              text: "命名空间: 语言",
              link: "/docs/asahi/parsers/namespace-lang",
            },
            {
              text: "命名空间: 通用",
              link: "/docs/asahi/parsers/namespace-common",
            },
            {
              text: "命名空间: Bukkit",
              link: "/docs/asahi/parsers/namespace-bukkit",
            },
            {
              text: "命名空间: 正则",
              link: "/docs/asahi/parsers/namespace-regex",
            },
            { text: "选择器列表", link: "/docs/asahi/parsers/selectors" },
          ],
        },
      ],
      "/docs/pouvoir/": [
        {
          text: "Pouvoir",
          link: "/docs/pouvoir/intro",
        },
        {
          text: "脚本基础",
          collapsed: false,
          items: [
            { text: "变量", link: "/docs/pouvoir/start/variable" },
            { text: "函数", link: "/docs/pouvoir/start/function" },
            {
              text: "控制流",
              link: "/docs/pouvoir/start/control-flow",
            },
            { text: "Nashorn", link: "/docs/pouvoir/start/nashorn" },
          ],
        },
        {
          text: "脚本进阶",
          collapsed: false,
          items: [
            { text: "Javadoc", link: "/docs/pouvoir/basic/javadoc" },
            { text: "导入", link: "/docs/pouvoir/basic/import" },
            { text: "何时醒来?", link: "/docs/pouvoir/basic/awake" },
            { text: "命令", link: "/docs/pouvoir/basic/command" },
            { text: "监听器", link: "/docs/pouvoir/basic/listener" },
            {
              text: "顶层对象",
              link: "/docs/pouvoir/basic/top-level",
            },
          ],
        },
        {
          text: "内置功能",
          collapsed: false,
          items: [
            {
              text: "容器",
              link: "/docs/pouvoir/features/container",
            },
            {
              text: "全息图",
              link: "/docs/pouvoir/features/hologram",
            },
            {
              text: "监视器",
              link: "/docs/pouvoir/features/monitor",
            },
          ],
        },
        {
          text: "开发者",
          collapsed: false,
          items: [
            {
              text: "脚本源",
              link: "/docs/pouvoir/extension/script-source",
            },
            {
              text: "脚本顶层对象",
              link: "/docs/pouvoir/extension/script-top-level",
            },
            {
              text: "脚本引擎",
              link: "/docs/pouvoir/extension/script-engine",
            },
            {
              text: "脚本注解",
              link: "/docs/pouvoir/extension/script-annotation",
            },
          ],
        },
        {
          text: "其它",
          collapsed: false,
          items: [
            {
              text: "占位符",
              link: "/docs/pouvoir/other/placeholder",
            },
            { text: "Asahi", link: "/docs/pouvoir/other/asahi" },
            { text: "功能", link: "/docs/pouvoir/other/functions" },
            { text: "动作", link: "/docs/pouvoir/other/actions" },
          ],
        },
        {
          text: "Javadoc",
          collapsed: false,
          items: [{ text: "Javadoc", link: "https://doc.skillw.com/pouvoir" }],
        },
        {
          text: "更新日志",
          link: "/docs/pouvoir/updates",
        },
      ],
      "/docs/attsystem/": [
        {
          text: "AttributeSystem",
          link: "/docs/attsystem/intro",
        },
        {
          text: "属性引擎",
          items: [
            {
              text: "属性引擎介绍",
              link: "/docs/attsystem/attribute/intro",
            },
            {
              text: "读取组",
              collapsed: false,
              items: [
                {
                  text: "读取组介绍",
                  link: "/docs/attsystem/attribute/read-group/intro",
                },
                {
                  text: "匹配器",
                  link: "/docs/attsystem/attribute/read-group/matcher",
                },
                {
                  text: "操作",
                  link: "/docs/attsystem/attribute/read-group/operation",
                },
              ],
            },
            {
              text: "属性数据",
              collapsed: false,
              items: [
                {
                  text: "属性数据介绍",
                  link: "/docs/attsystem/attribute/data/intro",
                },
                {
                  text: "NBT",
                  link: "/docs/attsystem/attribute/data/nbt",
                },
                {
                  text: "字符串",
                  link: "/docs/attsystem/attribute/data/string",
                },
              ],
            },
            {
              text: "属性功能",
              collapsed: false,
              items: [
                {
                  text: "实现",
                  link: "/docs/attsystem/attribute/function/realise",
                },
              ],
            },
          ],
        },
        {
          text: "装备栏系统",
          collapsed: false,
          items: [
            {
              text: "装备槽",
              link: "/docs/attsystem/equipment/slot",
            },
            {
              text: "条件",
              collapsed: false,
              items: [
                {
                  text: "条件介绍",
                  link: "/docs/attsystem/equipment/condition/intro",
                },
                {
                  text: "使用方法",
                  link: "/docs/attsystem/equipment/condition/usage",
                },
                {
                  text: "条件列表",
                  link: "/docs/attsystem/equipment/condition/list",
                },
              ],
            },
          ],
        },
        {
          text: "战斗系统",
          collapsed: false,
          items: [
            { text: "战斗数据", link: "/docs/attsystem/fight/data" },
            {
              text: "伤害类型",
              link: "/docs/attsystem/fight/damage-type",
            },
            { text: "机制", link: "/docs/attsystem/fight/mechanic" },
            {
              text: "机制集",
              link: "/docs/attsystem/fight/mechanics",
            },
            {
              text: "机制组",
              link: "/docs/attsystem/fight/mechanic-group",
            },
          ],
        },
        {
          text: "其它",
          collapsed: false,
          items: [
            { text: "配置", link: "/docs/attsystem/other/config" },
            { text: "公式", link: "/docs/attsystem/other/formula" },
            {
              text: "占位符",
              link: "/docs/attsystem/other/placeholder",
            },
            {
              text: "Mythic Mobs",
              link: "/docs/attsystem/other/mythic-mobs",
            },
          ],
        },
        {
          text: "开发者",
          collapsed: false,
          items: [
            {
              text: "开发者介绍",
              link: "/docs/attsystem/extension/intro",
            },
            {
              text: "读取模式",
              link: "/docs/attsystem/extension/read-pattern",
            },
            { text: "战斗", link: "/docs/attsystem/extension/fight" },
            {
              text: "消息",
              link: "/docs/attsystem/extension/message",
            },
          ],
        },
        {
          text: "Javadoc",
          link: "https://doc.skillw.com/attsystem",
        },
        {
          text: "FAQ",
          link: "/docs/attsystem/faq",
        },
        {
          text: "更新日志",
          link: "/docs/attsystem/updates",
        },
      ],
      "/docs/buffsystem/": [
        { text: "BuffSystem", link: "/docs/buffsystem/intro" },
        {
          text: "效果",
          collapsed: false,
          items: [
            {
              text: "效果介绍",
              link: "/docs/buffsystem/effect/intro",
            },
            {
              text: "效果类型",
              collapsed: false,
              items: [
                {
                  text: "属性效果",
                  link: "/docs/buffsystem/effect/type/attribute",
                },
                {
                  text: "药水效果",
                  link: "/docs/buffsystem/effect/type/potion",
                },
                {
                  text: "权限效果",
                  link: "/docs/buffsystem/effect/type/permission",
                },
              ],
            },
          ],
        },
        {
          text: "条件",
          collapsed: false,
          items: [
            {
              text: "条件介绍",
              link: "/docs/buffsystem/condition/intro",
            },
            {
              text: "类型",
              collapsed: false,
              items: [
                {
                  text: "时间条件",
                  link: "/docs/buffsystem/condition/type/time",
                },
                {
                  text: "权限条件",
                  link: "/docs/buffsystem/condition/type/permission",
                },
              ],
            },
            {
              text: "自定义条件",
              link: "/docs/buffsystem/condition/custom",
            },
          ],
        },
        {
          text: "Buff",
          collapsed: false,
          items: [
            {
              text: "Buff 介绍",
              link: "/docs/buffsystem/buff/intro",
            },
            { text: "Buff 数据", link: "/docs/buffsystem/buff/data" },
          ],
        },
        {
          text: "其它",
          collapsed: false,
          items: [
            {
              text: "占位符",
              link: "/docs/buffsystem/other/placeholder",
            },
            {
              text: "Mythic Mobs",
              link: "/docs/buffsystem/other/mythic-mobs",
            },
          ],
        },
        {
          text: "开发者",
          collapsed: false,
          items: [
            {
              text: "开发者介绍",
              link: "/docs/buffsystem/extension/intro",
            },
            {
              text: "示例",
              link: "/docs/buffsystem/extension/example",
            },
          ],
        },
        {
          text: "Javadoc",
          link: "https://doc.skillw.com/buffsystem",
        },
        {
          text: "FAQ",
          link: "/docs/buffsystem/faq",
        },
        {
          text: "更新日志",
          link: "/docs/buffsystem/updates",
        },
      ],
      "/docs/itemsystem/": [
        { text: "ItemSystem", link: "/docs/itemsystem/intro" },

        {
          text: "开始",
          collapsed: false,
          items: [
            { text: "命令", link: "/docs/itemsystem/start/command" },
            { text: "配置", link: "/docs/itemsystem/start/config" },
          ],
        },
        {
          text: "物品",
          collapsed: false,
          items: [
            { text: "物品介绍", link: "/docs/itemsystem/item/intro" },
            { text: "选项", link: "/docs/itemsystem/item/option" },
            { text: "处理", link: "/docs/itemsystem/item/process" },
            {
              text: "处理数据",
              link: "/docs/itemsystem/item/process-data",
            },
          ],
        },
        {
          text: "物品元",
          collapsed: false,
          items: [
            {
              text: "物品元介绍",
              link: "/docs/itemsystem/meta/intro",
            },
            { text: "列表", link: "/docs/itemsystem/meta/list" },
            {
              text: "全局元数据",
              link: "/docs/itemsystem/meta/global-meta-data",
            },
          ],
        },
        {
          text: "变量",
          collapsed: false,
          items: [
            {
              text: "变量介绍",
              link: "/docs/itemsystem/variable/intro",
            },
            { text: "类型", link: "/docs/itemsystem/variable/type" },
            {
              text: "类型列表",
              link: "/docs/itemsystem/variable/types",
            },
          ],
        },
        {
          text: "深造",
          collapsed: false,
          items: [
            { text: "动作", link: "/docs/itemsystem/further/action" },
            {
              text: "动作列表",
              link: "/docs/itemsystem/further/actions",
            },
            {
              text: "扩展",
              link: "/docs/itemsystem/further/extends",
            },
          ],
        },
        {
          text: "其它",
          collapsed: false,
          items: [
            {
              text: "Mythic Mobs",
              link: "/docs/itemsystem/other/mythic-mobs",
            },
          ],
        },
        {
          text: "Javadoc",
          link: "https://doc.skillw.com/itemsystem",
        },
        {
          text: "FAQ",
          link: "/docs/itemsystem/faq",
        },
        {
          text: "更新日志",
          link: "/docs/itemsystem/updates",
        },
      ],
    },
  });
};

type SidebarOptions = {
  path: string;
  sortBy?: "date" | "link" | "title";
};
function genSidebar(options: SidebarOptions): DefaultTheme.SidebarItem[] {
  const articles: any[] = [];
  sync(`root/${options.path}/*.md`).forEach((file) => {
    const link = file.replace("root/", "");
    const md = matter.read(file);
    const lang = parseLang(link);
    completeData(lang, md.data, md.content);
    const date = md.data.date;
    if (date) {
      md.data.date = new Date(date);
    }
    articles.push({
      ...md.data,
      link,
    });
  });
  articles.sort((a, b) => {
    switch (options.sortBy) {
      case "date":
        return b?.date.localeCompare(a.date) ?? true;
      case "link":
        return a.link.localeCompare(b.link);
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
  return articles.map((article) => {
    return {
      text: article.title,
      link: article.link,
    };
  });
}

export interface UserConfig {
  vitepress: SiteConfig;
}
