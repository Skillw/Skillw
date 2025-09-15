---
title: ItemSystem 配置
tags:
 - ItemSystem
category: 'docs'
---
# 配置

### config.yml

```yaml
options:
  thread-pool-size: 4
  debug: false
list:
  pre-page-size: 10
  up: '&d&l&m======================================='
  format: '&a{order} &b -> &6{key} &5- &b{name}'
  left: '  &b<-'
  page-info: '      &e{current}&5/&e{total}      '
  right: '&b->  '
  down: '&d&l&m======================================='
```

### global/global.yml

```yaml
default-prefixes:
  key: "default-prefixes"
  type: map
  粗糙: "{randomObj [ '粗糙的'  '破损的'  '破碎的'  '破残的'  '破坏的' ]}"
  精良: "{randomObj [ '精良的'  '精贵的'  '精美的'  '精明的'  '精密的' ]}"
  稀有: "{randomObj [ '稀有的'  '珍贵的'  '珍稀的'  '珍奇的'  '珍藏的' ]}"
  优秀: "{randomObj [ '优秀的'  '优质的'  '优雅的'  '优良的'  '优明的' ]}"
  史诗: "{randomObj [ '史诗的'  '伟大的'  '完美的'  '燃烧的'  '冰冻的' ]}"
  传说: "{randomObj [ '传说的'  '神话的'  '战争的'  '狂野的'  '辐射的' ]}"
default-suffixes:
  key: "default-suffixes"
  type: weight
  values:
    - 100: "快速"
    - 100: "平衡"
    - 100: "正义"
    - 50: "保护"
    - 50: "健康"
    - 50: "强力"
    - 25: "恐怖"
    - 25: "地狱"
    - 12: "灾厄"
suffix-effects:
  key: "suffix-effects"
  type: map
  快速:
    - "&f>> &b攻击速度: &c+0.5"
    - "&f>> &b轻羽: &c+50(%)"
  平衡:
    - "&f>> &b速度: &c+200"
  正义:
    - "&f>> &6攻击: &c+10&7(%)"
  保护:
    - "&f>> &f防御力: &c+10&7(%)"
    - "&f>> &6攻击: &c+5&7(%)"
  健康:
    - "&f>> &2生命值: &c+10&7(%)"
    - "&f>> &2生命恢复值: &c+20&7(%)"
  强力:
    - "&f>> &6攻击: &c+20&7(%)"
    - "&f>> &d暴击几率: &c+10&7(%)"
  恐怖:
    - "&f>> &6攻击: &c+22.5&7(%)"
    - "&f>> &d暴击几率: &c+15&7(%)"
    - "&f>> &d暴击伤害: &c+30&7(%)"
  地狱:
    - "&f>> &6攻击: &c+25&7(%)"
    - "&f>> &d暴击几率: &c+20&7(%)"
    - "&f>> &d暴击伤害: &c+40&7(%)"
  灾厄:
    - "&f>> &4攻击: &c+30&7(%)"
    - "&f>> &d暴击几率: &c+25&7(%)"
    - "&f>> &d暴击伤害: &c+50&7(%)"
    - "&f>> &b速度: &c+250"
```

### items/example.yml

```yaml
ExampleItem:
  process:
    #声明一个无参数函数，用于随机颜色
    #你也可以这么写:
    ##                        这个block是一段函数块，可以当成一个无参数有返回值的函数来使用
    #- run: "set randomColor to block { randomObj [ '&a'  '&b'  '&c'  '&d'  '&e'  '&f'  '&1' '&2' '&3' '&4' '&5' '&6' '&7' '&8' '&9'] }"
    #之后这么调用: invoke &randomColor
    ## 这个`randomColor`是变量名，可以随意取名，但是不能重复
    - key: randomColor
      #元: define (定义)，理解为定义一个变量
      #如果不填meta，则会被默认为元 define
      meta: define
      #类型: 随机
      type: random
      #不缓存，每次都重新生成一个随机颜色
      cache: false
      #不保存到NBT，供自动更新时使用（你存这玩意干啥）
      save: false
      values:
        [
          "&a",
          "&b",
          "&c",
          "&d",
          "&e",
          "&f",
          "&1",
          "&2",
          "&3",
          "&4",
          "&5",
          "&6",
          "&7",
          "&8",
          "&9",
        ]
    #处理品质相关
    ## 这个`quality`是变量名，可以随意取名，但是不能重复
    - key: quality
      #类型: 权重
      type: weight
      #一个权重变量，用于随机品质
      values:
        - 200: "粗糙"
        - 100: "精良"
        - 50: "稀有"
        - 25: "优秀"
        - 12: "史诗"
        - 6: "传说"
    ##                         Map模板，用于快速构建map
    - run: "set 品质数据模板 = mapTemplate [ '颜色' '评分' '材质' ]"
    - key: 品质数据Map
      meta: define
      type: map
      #这里的值是品质对应的数据，之后会用模板 [ '颜色' '评分' '材质' ]  来构造出品质数据
      #如果你不会用Map模板，也可以像正常map写法一样写出来
      #例如:
      #粗糙:
      ##  颜色: &8
      ##  评分: 10
      ##  材质: WOOD_SWORD
      粗糙: ["&8", "10", "WOOD_SWORD"]
      精良: ["&e", "20", "STONE_SWORD"]
      稀有: ["&b", "30", "IRON_SWORD"]
      优秀: ["&a", "40", "GOLD_SWORD"]
      史诗: ["&5", "50", "DIAMOND_SWORD"]
      传说: ["&6", "60", "DIAMOND_SWORD"]
    #下面这段是声明品质相关的变量
    - run: |-
        def list = &品质数据Map get &quality
        def 品质数据 = mapOf with &品质数据模板 &list
        def 品质颜色 = &品质数据 get '颜色'
        def 品质评分 = &品质数据 get '评分'
        def 材质 = &品质数据 get '材质'
        def 品质 = join [ &品质颜色 , &quality ]

    #处理前缀相关
    ##  导入全局前缀元数据
    - global: default-prefixes
    #下面这段是声明前缀相关的变量
    - run: |-
        def 前缀颜色 = &randomColor
        def prefix = &default-prefixes get &quality 
        def 前缀 = join [ &前缀颜色 &prefix ]

    #处理后缀相关
    #导入全局后缀元数据
    - global: default-suffixes
    #导入全局后缀效果元数据
    - global: suffix-effects
    #下面这段是声明后缀相关的变量
    - run: |-
        def suffix to &default-suffixes 
        def 后缀颜色 = &randomColor  

        def 后缀 to join [ &后缀颜色 &suffix ] 
        def 后缀效果 to join &suffix-effects get &suffix by '\n'
    #处理强度相关
    #声明强度相关的变量
    - run: |-
        def 强度 = random 0 to 1
        def 强度展示 = format calculate '{&强度} * 100' '#.##'
        def 强度条 = createBar [ empty to '&8|' , fill to '&a|' , length to 20 , percent to &强度 ]

    #计算总评分            转为整数
    - run: "def 总评分 to type int calculate ' { &品质评分 } * {&强度} '"
    #材质
    - material: "{&材质}"
    - can-craft: "false"
    #发光
    - glow-color: "{&品质颜色}"
    ## 展示名
    - display: "{&前缀} &9青钢剑 {&后缀}"
    ## 描述, 你可以像下面一样分段写:
    #- lore:
    ##  - "第一段"
    #- run: 'def a = 1'
    #- lore:
    ## - "第二段"
    ## - "{&a}"
    - lore:
        - "&f&m─&7&m─────────&f&m─&f介绍&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &7品质: {&品质}             &7评分: &c{&总评分}"
        - "&e由青钢锻造而成，是一把强大的武器。"
        - ""
        - "&f&m─&7&m─────────&f&m─&f属性统计&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &7攻击 &c+{ calculate '10 * {&总评分}' }"
        - "&f>> &7攻击速度 &c+{ calculate '0.03 * {&总评分}' }"
        - "&f>> &7暴击几率 &c+{ calculate '0.01 * {&总评分}' }&7(%)"
        - "&f>> &7暴击伤害 &c+{ calculate '0.05 * {&总评分}' }&7(%)"
        - ""
        - "&f&m─&7&m─────────&f&m─&f后缀加成&f&m─&7&m─────────&f&m─"
        - ""
        - "{&后缀}&5:"
        - "{&后缀效果}"
        - ""
        - "&f&m─&7&m─────────&f&m─&f其它&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &7<&8{syncNBT 'gem.0.name'}&7>"
        - "&f>> &7<&8{syncNBT 'gem.1.name'}&7>"
        - "&f>> &7<&8{syncNBT 'gem.2.name'}&7>"
        - ""
        - "&f&m─&7&m─────────&f&m─&f锻造信息&f&m─&7&m─────────&f&m─"
        - "&f>> &e强度: {&强度条} &8[{&强度展示}&8]"
        - "&f>> &e创建时间: &7{ papi '%pou_run_time.js::getTime%' }"
        - ""
        - "&f&m─&7&m─────────&f&m─&f其它&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &e耐久: &7[&8{syncNBT '耐久.当前耐久'}&f/&8{syncNBT '耐久.总耐久'}&7]"
        - ""
        - ""
    #NBT
    - nbt:
        gem:
          0:
            name: 空槽位
          1:
            name: 空槽位
          2:
            name: 空槽位
        耐久:
          总耐久: "{calculate '{&总评分} * 20'}"
          当前耐久: "{calculate '{&总评分} * 20'}"
    - flags:
        - "HIDE_ATTRIBUTES"
  #是否自动更新
  auto-update: true
  #自动更新时，不需要更新的NBT路径
  #如: diaplay.lore
  locked-nbt-keys:
    #防止宝石数据被刷掉
    - "gem"
```
