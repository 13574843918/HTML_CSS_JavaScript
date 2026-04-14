# 第4章 运用盒子模型划分网页模块 - 案例与知识点整理

## 目录

- [案例7：音乐盒](#案例7音乐盒)
  - [例4-1：div标签基础用法](#例4-1div标签基础用法)
  - [例4-2：边框样式](#例4-2边框样式)
  - [例4-4：综合边框设置](#例4-4综合边框设置)
  - [例4-5：音乐盒完整代码](#例4-5音乐盒完整代码)
- [案例8：用户中心](#案例8用户中心)
  - [例4-6：内边距设置](#例4-6内边距设置)
  - [例4-7：外边距设置](#例4-7外边距设置)
  - [例4-8：盒子宽高控制](#例4-8盒子宽高控制)
  - [例4-9：用户中心完整代码](#例4-9用户中心完整代码)
- [案例9：咖啡店banner](#案例9咖啡店banner)
  - [例4-10：背景颜色设置](#例4-10背景颜色设置)
  - [例4-11：背景位置设置](#例4-11背景位置设置)
  - [例4-12：咖啡店banner完整代码](#例4-12咖啡店banner完整代码)
- [案例10：图标导航栏](#案例10图标导航栏)
  - [例4-13：块元素和行内元素](#例4-13块元素和行内元素)
  - [例4-14：span标签用法](#例4-14span标签用法)
  - [例4-15：display属性转换](#例4-15display属性转换)
  - [例4-16：图标导航栏完整代码](#例4-16图标导航栏完整代码)
- [案例11：创意画框](#案例11创意画框)
  - [例4-17：图片边框设置](#例4-17图片边框设置)
  - [例4-18：box-shadow阴影](#例4-18box-shadow阴影)
  - [例4-19：线性渐变](#例4-19线性渐变)
  - [例4-20：径向渐变](#例4-20径向渐变)
  - [例4-21：重复线性渐变](#例4-21重复线性渐变)
  - [例4-22：重复径向渐变](#例4-22重复径向渐变)
  - [例4-23：创意画框完整代码](#例4-23创意画框完整代码)
- [案例12：拼图效果](#案例12拼图效果)
  - [例4-24：圆角属性](#例4-24圆角属性)
  - [例4-25：多背景图像](#例4-25多背景图像)
  - [例4-26：拼图效果完整代码](#例4-26拼图效果完整代码)

---

## 案例7：音乐盒

### 例4-1：div标签基础用法

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>div标签</title>
    <style type="text/css">
        .one {
            width: 600px;
            height: 50px;
            background: aqua;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
        }
        .two {
            width: 600px;
            height: 100px;
            background: lime;
            font-size: 14px;
            text-indent: 2em;
        }
    </style>
</head>
<body>
    <div class="one">
        用div标签设置标题文本
    </div>
    <div class="two">
        <p>div标签中嵌套p标签的文本内容</p>
    </div>
</body>
</html>
```

**核心知识点**

1. `<div>`标签是块级元素，用于网页规划和布局
2. 可以为`<div>`设置宽(width)、高(height)、背景(background)等样式
3. `<div>`可以嵌套`<p>`等标签，实现内容组合
4. class属性用于为元素指定样式类名
5. `<div>`与`<h2>`的区别：`<h2>`有语义（代表标题），`<div>`是通用块级容器

---

### 例4-2：边框样式

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>边框样式</title>
    <style type="text/css">
        h2 {
            border-style: double;
            border-width: 5px;
            border-color: pink;
        }
        .one {
            border: 3px solid green;
        }
        .two {
            border-top: 1px solid red;
            border-right: 2px dashed blue;
            border-bottom: 3px dotted orange;
            border-left: 4px double purple;
        }
    </style>
</head>
<body>
    <h2>二级标题</h2>
    <p class="one">第一个段落（单边框属性）</p>
    <p class="two">第二个段落（综合边框属性）</p>
</body>
</html>
```

**核心知识点**

1. **border-style属性**：设置边框样式
   - `none`: 无边框（默认值）
   - `solid`: 单实线
   - `dashed`: 虚线
   - `dotted`: 点线
   - `double`: 双实线

2. **border-width属性**：设置边框宽度，单位为像素(px)

3. **border-color属性**：设置边框颜色
   - 英文单词（如red、blue）
   - 十六进制（如#FF0000或#F00）
   - RGB模式（如rgb(255,0,0)）

4. **值复制原则**：设置1-4个属性值时，按顺时针顺序应用
   - 1个值：四边相同
   - 2个值：上下、左右
   - 3个值：上、左右、下
   - 4个值：上、右、下、左

---

### 例4-4：综合边框设置

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>综合边框</title>
    <style type="text/css">
        h2 {
            border-bottom: 2px solid #333;
        }
        p {
            border-top: 1px dashed red;
            border-right: 2px dotted blue;
            border-bottom: 3px double green;
            border-left: 4px solid orange;
        }
        img {
            border: 10px solid gold;
        }
    </style>
</head>
<body>
    <h2>二级标题（下边框）</h2>
    <p>段落文本（四边不同边框）</p>
    <img src="images/pic.jpg" alt="图片"/>
</body>
</html>
```

**核心知识点**

1. **单侧边框属性**：border-top、border-right、border-bottom、border-left

2. **综合边框属性border**：语法 `border: 宽度 样式 颜色`
   ```css
   border: 10px solid gold;
   ```

3. **border-image**：可使用图片作为边框
   ```css
   border-image: url(images/border.png) 33% / 40px stretch;
   ```

4. 边框颜色默认值是元素本身的文本颜色

---

### 例4-5：音乐盒完整代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>音乐盒</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        .all {
            width: 210px;
            height: 265px;
            border: 1px solid #4E4E4E;
            margin: 50px auto;
        }
        .text {
            font-size: 18px;
            font-family: "微软雅黑";
            height: 40px;
            line-height: 40px;
            border-bottom: 1px dashed #E1E1E1;
        }
        .text p {
            font-size: 14px;
            color: #CCC;
            height: 24px;
            line-height: 24px;
        }
    </style>
</head>
<body>
    <div class="all">
        <div class="text">
            <h2>毕业季|再见青春</h2>
            <p>36557人收听</p>
        </div>
        <img src="images/music.png" alt="音乐图标"/>
    </div>
</body>
</html>
```

**核心知识点**

1. **CSS盒子模型**：内容+内边距+边框+外边距组成
2. **margin: auto**：使元素水平居中
3. **line-height**：设置行高，控制文本垂直居中
4. **border-bottom: dashed**：下边框使用虚线样式
5. **div嵌套结构**：外层容器包裹内层文本和图片

---

## 案例8：用户中心

### 例4-6：内边距设置

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>内边距</title>
    <style type="text/css">
        img {
            padding: 20px;
        }
        p {
            padding: 5%;
            background: aqua;
        }
    </style>
</head>
<body>
    <img src="images/longmao.png" alt="龙猫"/>
    <p>段落文本内容，内边距使用百分比数值</p>
</body>
</html>
```

**核心知识点**

1. **padding属性**：设置元素内容与边框之间的距离
2. **padding取值**：
   - auto：自动适应（默认值）
   - 像素值：如`padding: 20px`
   - 百分比：相对于父元素宽度的百分比
3. **百分比特性**：不论上下还是左右内边距，都是相对于元素宽度计算
4. **padding不允许使用负值**

---

### 例4-7：外边距设置

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>外边距</title>
    <style type="text/css">
        img {
            border: 5px solid green;
            float: left;
            margin-right: 50px;
            margin-left: 30px;
        }
        p {
            text-indent: 2em;
        }
    </style>
</head>
<body>
    <img src="images/longmao.png" alt="龙猫"/>
    <p>龙猫剧情简介：小月的母亲生病住院了，父亲带着她和妹妹到乡下居住。她们在乡下遇到了很多小精灵，更与一只大大胖胖的龙猫成为了朋友...</p>
</body>
</html>
```

**核心知识点**

1. **margin属性**：设置元素边框与相邻元素之间的距离
2. **margin与padding的区别**：
   - padding：元素内部，内容与边框的距离
   - margin：元素外部，当前边框与相邻元素的距离
3. **margin可以使用负值**：使相邻元素发生重叠
4. **块级元素水平居中**：`margin: 0 auto;` 或 `margin-left: auto; margin-right: auto;`
5. **默认样式**：body、h1~h6、p等标签有默认内外边距

---

### 例4-8：盒子宽高控制

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>盒子宽高</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        p {
            width: 200px;
            height: 100px;
            padding: 20px;
            border: 5px solid red;
            margin: 10px;
            background: pink;
        }
    </style>
</head>
<body>
    <p>段落文本内容</p>
</body>
</html>
```

**核心知识点**

1. **width属性**：设置元素内容区域的宽度
2. **height属性**：设置元素内容区域的高度
3. **盒子总尺寸计算公式**：
   ```
   总宽度 = width + 左右padding + 左右border + 左右margin
   总高度 = height + 上下padding + 上下border + 上下margin
   ```
4. **width和height仅适用于块级元素**，对行内元素无效（img和input除外）

---

### 例4-9：用户中心完整代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>用户中心</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        .box {
            width: 200px;
            height: 300px;
            margin: 50px auto;
            background: #2E3138;
            border-radius: 10px;
        }
        .info img {
            width: 200px;
            height: 150px;
        }
        .info p {
            width: 138px;
            line-height: 33px;
            border: 1px solid #2E3138;
            margin: 0;
            margin-top: 2px;
            padding-left: 10px;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="info">
            <img src="images/photo.png" alt="用户头像"/>
        </div>
        <div class="info">
            <p>用户资料</p>
            <p>姓名：张三</p>
            <p>年龄：25岁</p>
            <p>职业：设计师</p>
        </div>
    </div>
</body>
</html>
```

**核心知识点**

1. **嵌套div结构**：外层大盒子包裹用户头像和资料
2. **margin-top应用**：使"用户资料"与"用户头像"拉开距离
3. **padding-left应用**：使每个段落前有一定留白
4. **border: 1px solid**：为资料项添加边框分隔线
5. **margin: 0**：清除段落的默认外边距

---

## 案例9：咖啡店banner

### 例4-10：背景颜色设置

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>背景颜色</title>
    <style type="text/css">
        body {
            background-color: #CCC;
        }
        h2 {
            background-color: red;
        }
        p {
            /* 未设置背景颜色，默认transparent，显示父元素背景 */
        }
    </style>
</head>
<body>
    <h2>标题文本</h2>
    <p>段落文本显示父元素body的背景颜色</p>
</body>
</html>
```

**核心知识点**

1. **background-color属性**：设置元素背景颜色
2. **颜色取值方式**：
   - 预定义颜色值：如red、blue、green
   - 十六进制：#FF0000或#F00（简写）
   - RGB模式：rgb(255,0,0)
   - rgba模式：rgba(255,0,0,0.5) 带透明度
3. **默认值transparent**：背景透明时显示父元素背景

---

### 例4-11：背景位置设置

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>背景位置</title>
    <style type="text/css">
        body {
            height: 400px;
            background-image: url(images/he.png);
            background-repeat: no-repeat;
            background-position: right bottom;
        }
    </style>
</head>
<body>
    <h2>短歌行</h2>
    <p>对酒当歌，人生几何...</p>
</body>
</html>
```

**核心知识点**

1. **background-image属性**：`url("图像路径")` 设置背景图像
2. **background-repeat属性**：
   - `repeat`：水平和竖直都平铺（默认）
   - `no-repeat`：不平铺
   - `repeat-x`：仅水平平铺
   - `repeat-y`：仅竖直平铺
3. **background-position属性**：设置背景图像位置
   - 关键字：`left`/`center`/`right` + `top`/`center`/`bottom`
   - 像素值：如`50px 80px`
   - 百分比：如`50% 50%`
4. **默认值**：`0 0` 或 `top left`，即左上角

---

### 例4-12：咖啡店banner完整代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>咖啡店banner</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        .outer {
            width: 900px;
            height: 344px;
            margin: 50px auto;
            background: url(images/bg.png) repeat-x;
        }
        .inner {
            width: 580px;
            height: 344px;
            margin: 0 auto;
            background: url(images/coffee.png) no-repeat center 30px;
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="inner"></div>
    </div>
</body>
</html>
```

**核心知识点**

1. **background综合属性**：`background: 颜色 url("图像") 平铺 定位`
2. **repeat-x应用**：外层背景图沿水平方向平铺
3. **no-repeat + center应用**：内层咖啡图片居中且不平铺
4. **内外层嵌套**：实现多层背景叠加效果

---

## 案例10：图标导航栏

### 例4-13：块元素和行内元素

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>块元素和行内元素</title>
    <style type="text/css">
        h2, p {
            background: aqua;
        }
        strong, em, del {
            background: yellow;
        }
    </style>
</head>
<body>
    <h2>二级标题（块元素）</h2>
    <p>段落文本（块元素）</p>
    <strong>加粗文本（行内元素）</strong>
    <em>倾斜文本（行内元素）</em>
    <del>删除线文本（行内元素）</del>
</body>
</html>
```

**核心知识点**

1. **块元素特点**：
   - 独占一行
   - 可设置宽度、高度、对齐属性
   - 常用于网页布局
   - 常见：`<h1>`~`<h6>`、`<p>`、`<div>`、`<ul>`、`<ol>`、`<li>`

2. **行内元素特点**：
   - 不独占一行
   - 仅靠内容支撑结构
   - 不可设置宽高和对齐属性
   - 常用于文本样式控制
   - 常见：`<strong>`、`<em>`、`<del>`、`<span>`

3. **行内块元素特殊说明**：`<img>`和`<input>`可设置宽高，属于行内块

---

### 例4-14：span标签用法

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>span标签</title>
    <style type="text/css">
        span.red {
            color: red;
        }
        span.blue {
            color: blue;
        }
    </style>
</head>
<body>
    <h2>京剧</h2>
    <p>
        <span class="red">京剧</span>是中国五大戏曲剧种之一，
        被视为中国国粹，是<span class="blue">中国乡土艺术</span>的瑰宝。
    </p>
</body>
</html>
```

**核心知识点**

1. **`<span>`标签**：行内元素，作为文本容器
2. **与`<div>`的区别**：
   - `<div>`是块级元素
   - `<span>`是行内元素
3. **用途**：配合class属性定义特殊显示的文本样式
4. **嵌套规则**：`<div>`可嵌套`<span>`，但`<span>`不可嵌套`<div>`

---

### 例4-15：display属性转换

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>display属性</title>
    <style type="text/css">
        div {
            width: 100px;
            height: 50px;
            margin: 10px;
            background: aqua;
        }
        span {
            width: 100px;
            height: 50px;
            margin: 10px;
            background: pink;
        }
        .inline {
            display: inline;
        }
        .inline-block {
            display: inline-block;
        }
        .block {
            display: block;
        }
        .none {
            display: none;
        }
    </style>
</head>
<body>
    <div>第一个div</div>
    <div class="inline">第二个div转行内</div>
    <span>第一个span</span>
    <span class="inline-block">第二个span转行内块</span>
    <span class="block">第三个span转块元素</span>
</body>
</html>
```

**核心知识点**

1. **display属性**：转换元素类型
   - `inline`：转行内元素
   - `block`：转块元素
   - `inline-block`：转行内块元素（可设宽高但不独占一行）
   - `none`：隐藏元素，不占用页面空间

2. **行内元素margin特性**：只能定义左右外边距，上下无效

---

### 例4-16：图标导航栏完整代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>图标导航栏</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        .nav {
            width: 900px;
            height: 60px;
            margin: 50px auto;
            background: #EEE;
            padding-left: 20px;
            border-bottom: 3px solid #000;
        }
        .nav span {
            display: inline-block;
            width: 100px;
            height: 50px;
            margin-right: 10px;
            border: 1px solid #CCC;
        }
        .nav span:nth-child(1) { background: url(images/nav1.png) no-repeat; }
        .nav span:nth-child(2) { background: url(images/nav2.png) no-repeat; }
        .nav span:nth-child(3) { background: url(images/nav3.png) no-repeat; }
        .nav span:nth-child(4) { background: url(images/nav4.png) no-repeat; }
        .nav span:nth-child(5) { background: url(images/nav5.png) no-repeat; }
        .nav span:nth-child(6) { background: url(images/nav6.png) no-repeat; }
        .nav span:nth-child(7) { background: url(images/nav7.png) no-repeat; }
    </style>
</head>
<body>
    <div class="nav">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</body>
</html>
```

**核心知识点**

1. **display: inline-block**：使span可设置宽高又不独占一行
2. **nth-child选择器**：为不同导航项设置不同背景图
3. **border-bottom**：为导航栏添加底部边框线
4. **padding-left**：使导航图标从左侧留白开始排列

---

## 案例11：创意画框

### 例4-17：图片边框设置

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>图片边框</title>
    <style type="text/css">
        div {
            width: 200px;
            height: 100px;
            border: 33px solid;
            border-image: url(images/border.png) 33% / 40px / 0px round;
        }
    </style>
</head>
<body>
    <div>使用图片作为边框</div>
</body>
</html>
```

**核心知识点**

1. **border-image属性**：使用图片作为边框
   ```
   border-image: source slice / width / outset repeat;
   ```
2. **各参数说明**：
   - source：图片路径
   - slice：边框内偏移（33%表示分割9个区域）
   - width：边框宽度
   - outset：边框外部延伸距离
   - repeat：填充方式（round平铺/stretch拉伸）

3. **注意事项**：必须先设置`border-style`，否则图片边框不显示

---

### 例4-18：box-shadow阴影

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>box-shadow阴影</title>
    <style type="text/css">
        img {
            width: 300px;
            height: 200px;
            padding: 20px;
            box-shadow: 10px 10px 5px #888 inset;
        }
    </style>
</head>
<body>
    <img src="images/pic.jpg" alt="图片"/>
</body>
</html>
```

**核心知识点**

1. **box-shadow属性**：`box-shadow: h-shadow v-shadow blur spread color inset;`
2. **参数说明**：
   - h-shadow：水平阴影位置（必选）
   - v-shadow：垂直阴影位置（必选）
   - blur：模糊距离
   - spread：阴影扩展
   - color：阴影颜色
   - inset：内阴影（可选，外阴影是默认值）

3. **多重阴影**：可添加多个box-shadow值实现多重阴影效果

---

### 例4-19：线性渐变

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>线性渐变</title>
    <style type="text/css">
        p {
            width: 400px;
            height: 100px;
            background-image: linear-gradient(30deg, #0f0, #00f);
        }
    </style>
</head>
<body>
    <p>绿色到蓝色的线性渐变</p>
</body>
</html>
```

**核心知识点**

1. **linear-gradient函数**：`background-image: linear-gradient(角度, 颜色1, 颜色2);`
2. **渐变角度**：
   - deg单位：如30deg、90deg
   - 关键词：`to top`、`to bottom`、`to left`、`to right`
   - 默认180deg等同于to bottom
3. **颜色值**：可设置多个颜色，用逗号分隔
4. **颜色位置**：可用百分比标示渐变位置
   ```css
   background-image: linear-gradient(#0f0 50%, #00f 80%);
   ```

---

### 例4-20：径向渐变

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>径向渐变</title>
    <style type="text/css">
        p {
            width: 200px;
            height: 150px;
            border-radius: 50%;
            background-image: radial-gradient(ellipse at center, #0f0, #030);
        }
    </style>
</head>
<body>
    <p>椭圆形径向渐变球体</p>
</body>
</html>
```

**核心知识点**

1. **radial-gradient函数**：`background-image: radial-gradient(形状 圆心位置, 颜色1, 颜色2);`
2. **渐变形状**：
   - `circle`：圆形
   - `ellipse`：椭圆形
   - 像素/百分比：定义水平和垂直半径
3. **圆心位置**：
   - 关键字：`at left`、`at center`、`at right`、`at top`、`at bottom`
   - 像素/百分比：具体坐标位置
4. **border-radius: 50%**：配合渐变实现球体效果

---

### 例4-21：重复线性渐变

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>重复线性渐变</title>
    <style type="text/css">
        p {
            width: 400px;
            height: 100px;
            background-image: repeating-linear-gradient(90deg, red, yellow 20%, green 40%);
        }
    </style>
</head>
<body>
    <p>红黄绿三色重复线性渐变</p>
</body>
</html>
```

**核心知识点**

1. **repeating-linear-gradient函数**：`background-image: repeating-linear-gradient(角度, 颜色1 位置, 颜色2 位置);`
2. **颜色位置**：百分比定义一个渐变周期的结束位置
3. **重复原理**：从0%到指定百分比为一个渐变周期，不断重复

---

### 例4-22：重复径向渐变

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>重复径向渐变</title>
    <style type="text/css">
        p {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background-image: repeating-radial-gradient(circle, yellow, green 20%, yellow 40%);
        }
    </style>
</head>
<body>
    <p>黄绿交替的重复径向渐变</p>
</body>
</html>
```

**核心知识点**

1. **repeating-radial-gradient函数**：`background-image: repeating-radial-gradient(形状, 颜色1 位置, 颜色2 位置);`
2. **适用场景**：创建条纹、圆环等重复图案效果

---

### 例4-23：创意画框完整代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>创意画框</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        .outer {
            width: 700px;
            height: 500px;
            margin: 50px auto;
            background: linear-gradient(to right, #333, #666, #333);
            border-image: url(images/border.png) 33% / 40px round;
            padding: 40px;
        }
        .inner {
            width: 620px;
            height: 420px;
            margin: 0 auto;
            background: url(images/painting.jpg) center/cover;
            opacity: 0.4;
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="inner"></div>
    </div>
</body>
</html>
```

**核心知识点**

1. **linear-gradient应用**：外层画框背景使用渐变色
2. **border-image应用**：图片边框装饰画框
3. **opacity属性**：`0`（完全透明）到`1`（完全不透明）之间取值
4. **rgba vs opacity**：
   - rgba仅影响背景颜色
   - opacity影响元素整体（包括内容）

---

## 案例12：拼图效果

### 例4-24：圆角属性

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>圆角属性</title>
    <style type="text/css">
        img {
            width: 300px;
            height: 300px;
            border-radius: 150px;
        }
        .oval {
            width: 300px;
            height: 150px;
            background: pink;
            border-radius: 150px / 75px;
        }
    </style>
</head>
<body>
    <img src="images/photo.jpg" alt="照片"/>
    <div class="oval"></div>
</body>
</html>
```

**核心知识点**

1. **border-radius属性**：`border-radius: 水平半径 / 垂直半径;`
2. **值复制原则**（每个方向可设1-4个值）：
   - 1个值：四角相同
   - 2个值：左上和右下、右上和左下
   - 3个值：左上、右上和左下、右下
   - 4个值：左上、右上、右下、左下
3. **圆形效果**：`border-radius: 50%;` 或 `border-radius: 50% / 50%;`
4. **椭圆效果**：水平半径和垂直半径不同时用`/`分隔

---

### 例4-25：多背景图像

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>多背景图像</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        .container {
            width: 800px;
            height: 400px;
            margin: 50px auto;
            border: 1px solid #333;
        }
        .box {
            width: 100%;
            height: 100%;
            background-image:
                url(images/flower.png),
                url(images/butterfly.png),
                url(images/bg.jpg);
            background-repeat: no-repeat;
            background-position: center center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
    </div>
</body>
</html>
```

**核心知识点**

1. **多背景图像**：background-image属性可设置多个url，用逗号分隔
2. **图层顺序**：排列在前面的图像在上层
3. **其他属性也可逗号分隔**：background-repeat、background-position等
4. **单元素多背景**：CSS3增强功能，之前的版本只能单背景

---

### 例4-26：拼图效果完整代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>拼图效果</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        .puzzle {
            width: 612px;
            height: 408px;
            margin: 50px auto;
            border-radius: 10px;
        }
        .one, .two {
            width: 604px;
            height: 200px;
            margin: 0 auto;
        }
        .one {
            background:
                url(images/p1.jpg) no-repeat left top,
                url(images/p2.jpg) no-repeat center top,
                url(images/p3.jpg) no-repeat right top;
        }
        .two {
            background:
                url(images/p4.jpg) no-repeat left bottom,
                url(images/p5.jpg) no-repeat center bottom,
                url(images/p6.jpg) no-repeat right bottom;
        }
    </style>
</head>
<body>
    <div class="puzzle">
        <div class="one"></div>
        <div class="two"></div>
    </div>
</body>
</html>
```

**核心知识点**

1. **拼图原理**：多背景图像 + div宽度控制间隙
2. **多背景位置**：
   - `left top`：左对齐上对齐
   - `center top`：居中上对齐
   - `right top`：右对齐上对齐
   - 同理可设置bottom
3. **间隙效果**：div宽度大于图片总宽度时产生白色间隙
4. **border-radius应用**：为拼图容器添加圆角

---

## 动手实践

### 播放器图标

运用CSS盒子模型的相关属性、背景属性和渐变属性制作一个播放器图标。

**参考结构**：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>播放器图标</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
        .player {
            width: 200px;
            height: 200px;
            margin: 50px auto;
            border-radius: 50%;
            background: linear-gradient(135deg, #ff6b6b, #c92a2a);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .play-btn {
            width: 0;
            height: 0;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
            border-left: 50px solid white;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="player">
        <div class="play-btn"></div>
    </div>
</body>
</html>
```

**知识点综合应用**：
1. **盒子模型**：设置宽高、圆角、阴影
2. **渐变背景**：linear-gradient创建彩色渐变
3. **box-shadow**：添加投影效果
4. **border-radius: 50%**：创建圆形按钮
5. **Flexbox布局**：使播放图标居中
