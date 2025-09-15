---
title: 'AttributeSystem 公式系统'
tags:
 - AttributeSystem
category: 'docs'
---

# 公式系统

### 介绍

通过**公式系统**，你可以完成各种**复杂的计算**，以带入到各个地方

### 配置文件

> plugins/AttributeSystem/formula.yml

```yaml
#支持 PAPI/PPAPI 字符串内联函数
#会影响实体的原版属性
#若填-1，则表示不修改此原版属性
attribute-formulas:
  max-health: "%as_att:MaxHealth%"
  #这个数值可以实现 %as_att:MovementSpeed%/100 /s
  movement-speed: "%as_att:MovementSpeed% / 2250"
  #默认每10tick(0.5s)恢复一次生命值 (见config.yml  options.attribute.time.health-regain)
  #为了方便实现"每秒回血" %as_att:HealthRegain% /s 故将值除以二
  health-regain: "%as_att:HealthRegain% / 2"
  #击退抗性
  knockback-resistance: "%as_att:Resistance%"
  #下面这些只支持玩家
  #单位为 攻击次数/s
  attack-speed: "%as_att:AttackSpeed%"
  #攻击距离
  #单位为格
  attack-distance: "%as_att:AttackDistance%"
  #幸运值
  luck: "%as_att:Luck%"
skill-api:
  max-mana: "%as_att:MaxMana%"
  ## cooldown : 技能冷却
  skill-cooldown: "{cooldown} * (1- (%as_att:SkillSpeed%/(100-%as_att:SkillSpeed%)))"
  mana-regain: "%as_att:ManaRegain%"
```

### 调用

##### 用户

变量`%as_formula:公式id%`

##### 开发者

```kotlin
AttributeSystem.formulaManager.get(entity,"max-health")
```
