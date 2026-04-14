# 第3章 使用CSS技术美化网页 - 教学案例与知识点整理

## 目录

- [案例6：搜索页面](#案例6搜索页面)
- [知识一：CSS复合选择器](#知识一css复合选择器)
- [知识二：CSS层叠性与继承性](#知识二css层叠性与继承性)
- [知识三：CSS优先级](#知识三css优先级)

---

## 案例6：搜索页面

### 案例描述

在日常工作和学习过程中，常常需要通过"百度"等搜索引擎查询一些名词、专业术语等。本节将通过CSS控制文本来模拟一个百度搜索页面。

### 案例效果

模拟百度搜索结果页面，显示"什么是CSS"等搜索关键词及相关链接信息。

---

### HTML结构（例3-22 example22.html）

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>搜索页面</title>
</head>
<body>
    <h2>
        什么是CSS<em>?—CSS教程</em>
    </h2>
    <p>
        猴子提示：可以通过简单更改<em>CSS</em>文件，改变网页的整体表现形式，
        从而减少我们的工作量，所以它是每一个网页设计人员的必修课。
        知道什么是<em>CSS</em>了，现在就开始学习<em>CSS</em>吧...
    </p>
    <p>
        <em>www.dreamdu.com/css/wh...</em>-<em>百度快照</em>-<em>85%好评</em>
    </p>
</body>
</html>
```

### 添加类名后的HTML

```html
<h2 class="header">
    什么是CSS<em>?—CSS教程</em>
</h2>
<p>
    猴子提示：可以通过简单更改<em class="red">CSS</em>文件，改变网页的整体表现形式，
    从而减少我们的工作量，所以它是每一个网页设计人员的必修课。
    知道什么是<em class="red">CSS</em>了，现在就开始学习<em class="red">CSS</em>吧...
</p>
```

### CSS样式代码

```css
@charset "utf-8";
/* CSS Document */

body {
    font-size: 16px;
    font-family: "微软雅黑";
    color: #333;
}

h2 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 15px;
}

p {
    font-size: 14px;
    line-height: 24px;
    color: #000;
}

em {
    font-style: normal;
}

/* 控制段落文本的字号 */
/* 控制段落文本的字体 */
/* 控制段落文本的行高 */

/* 特殊的红色文本 */
.red {
    color: #F00;
}

/* 特殊的灰色文本 */
.gray {
    color: #999;
}

/* 特殊的绿色文本 */
.green {
    color: #093;
}
```

---

## 知识一：CSS复合选择器

### 1. 标签指定式选择器（交集选择器）

**定义**：标签指定式选择器又称交集选择器，由两个选择器构成，其中第一个为标签选择器，第二个为class选择器或id选择器，两个选择器之间不能有空格。

**语法**：`h3.special` 或 `p#one`

**示例代码（例3-17 example17.html）**：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>标签指定式选择器</title>
    <style>
        p {
            color: blue;
        }
        .special {
            font-size: 20px;
        }
        p.special {
            color: red;
        }
    </style>
</head>
<body>
    <p>普通的段落文本</p>
    <p class="special">特殊的段落文本</p>
    <div class="special">使用了special类的div</div>
</body>
</html>
```

**效果说明**：标签选择器`p.special`定义的样式仅适用于`<p class="special">`标签，而不会影响使用了special类的其他标签（如div）。

---

### 2. 后代选择器

**定义**：后代选择器用来选择元素或元素组的后代，其写法就是把外层标签写在前面，内层标签写在后面，中间用空格分隔。当标签发生嵌套时，内层标签就成为外层标签的后代。

**示例代码（例3-18 example18.html）**：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>后代选择器</title>
    <style>
        strong {
            color: green;
        }
        p strong {
            color: red;
        }
    </style>
</head>
<body>
    <p>
        <strong>嵌套在p标签中的strong</strong>
    </p>
    <strong>独立的strong标签</strong>
</body>
</html>
```

**效果说明**：后代选择器`p strong`定义的样式仅仅适用于嵌套在`<p>`标签中的`<strong>`标签，其他的`<strong>`标签不受影响。

**进阶用法**：后代选择器不限于使用两个元素，如果需要加入更多的元素，只需在元素之间加上空格即可。例如`p strong em`可以选中`<p>`中`<strong>`里的`<em>`标签。

---

### 3. 并集选择器

**定义**：并集选择器是各个选择器通过逗号（英文状态）连接而成的，任何形式的选择器（包括标签选择器、类选择器和id选择器）都可以作为并集选择器的一部分。

**示例代码（例3-19 example19.html）**：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>并集选择器</title>
    <style>
        /* 控制所有标题和段落的字号和颜色 */
        h2, h3, p {
            font-size: 16px;
            color: blue;
        }
        /* 定义某些文本的下画线效果 */
        h3, .special, #one {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h2>二级标题</h2>
    <h3 class="special">三级标题</h3>
    <p>第一个段落</p>
    <p class="special">第二个段落</p>
    <p id="one">第三个段落</p>
</body>
</html>
```

---

## 知识二：CSS层叠性与继承性

### 1. 层叠性

**定义**：层叠性是指多种CSS样式的叠加。例如，如果使用内嵌式CSS样式表定义`<p>`标签字号大小为12像素，使用外链式定义`<p>`标签颜色为红色，那么段落文本显示样式为12像素和红色，即这两种样式产生了叠加。

**示例代码（例3-20 example20.html）**：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CSS层叠性</title>
    <style>
        p {
            font-size: 12px;
            font-family: "楷体";
        }
        .special {
            font-size: 16px;
        }
        #one {
            color: red;
        }
    </style>
</head>
<body>
    <p class="special" id="one">段落文本1</p>
    <p class="special">段落文本2</p>
    <p>段落文本3</p>
</body>
</html>
```

**效果说明**：段落文本1显示了标签选择器p定义的字体"楷体"、id选择器#one定义的颜色"红色"、类选择器.special定义的字号16px，即这3个选择器定义的样式产生了叠加。

---

### 2. 继承性

**定义**：继承性是指书写CSS样式表时，子标签会继承父标签的某些样式，例如文本颜色和字号。如果定义主体元素body的文本颜色为黑色，那么页面中所有的文本都将显示为黑色。

**示例代码**：

```css
body {
    color: black;
    font-family: "微软雅黑";
    font-size: 14px;
}
```

**可继承的属性**：
- 文本属性：color、font-family、font-size、font-style等
- 文本行高：line-height

**不可继承的属性**：
- 边框属性（border）
- 外边距属性（margin）
- 内边距属性（padding）
- 背景属性（background）
- 定位属性（position）
- 布局属性（display）
- 元素宽高属性（width、height）

**注意事项**：当为body元素设置字号属性时，标题文本不会采用这个样式。这是因为标题标签`<h1>`~`<h6>`有默认字号样式，默认字号覆盖了继承的字号。

---

## 知识三：CSS优先级

### 优先级规则

CSS为每一种基础选择器都分配了一个权重：
- 标签选择器：权重为1
- 类选择器：权重为10
- id选择器：权重为100

对于由多个基础选择器构成的复合选择器（并集选择器除外），其权重为这些基础选择器权重的叠加。

**优先级判断示例**：

```css
p { color: red; }           /* 权重: 1 */
.blue { color: green; }    /* 权重: 10 */
#header { color: blue; }   /* 权重: 100 */
```

```html
<p class="blue" id="header">文本的颜色</p>
```

**结果**：id选择器#header具有最大的优先级，因此文本显示为蓝色。

### 复合选择器权重叠加示例

```css
#header strong { color: pink; }  /* 权重: 100 + 1 = 101 */
```

```html
<p class="father" id="header">
    <strong class="blue">文本的颜色</strong>
</p>
```

**结果**：如果`<strong>`标签还定义了`strong { color: red; }`（权重1），由于101 > 1，文本将显示为粉色。

### 特殊情况

1. **继承样式的权重为0**：在嵌套结构中，不管父元素样式的权重多大，被子元素继承时它的权重都为0，子元素定义的样式会覆盖继承来的样式。

2. **行内样式优先**：应用style属性的元素，其行内样式的权重远大于100，比任何选择器都大。

3. **就近原则**：权重相同时，CSS遵循就近原则，靠近元素的样式具有最大的优先级。

4. **!important命令**：CSS定义了"!important"命令，该命令被赋予最大的优先级。例如：

```css
p { color: red !important; }
```

---

## 动手实践：宣传页面

### 实践要求

运用CSS选择器、CSS文本相关样式及高级特性实现宣传页面。

### 页面内容

**标题**：把握移动端字体设计的七大准则

**内容要点**：
- 行长度：一行文字的长度，一行能容纳多少字合适
- 行间距：行之之间的空间，行间距大方便用户从一行跳到下一行
- 所有字体至少都有一种粗体状态
- 大多数内容是两端对齐，GT效果数字T害，看起来整齐
- 增溢文卒与写重端射，门恐R下兵X文卒反担

### 实现提示

1. 使用后代选择器选择特定文本
2. 使用标签指定式选择器控制特定标签
3. 使用并集选择器统一设置样式
4. 运用层叠性和继承性简化代码
5. 注意CSS优先级的应用

---

## 源代码汇总

### 完整搜索页面代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>搜索页面</title>
    <style>
        body {
            font-size: 16px;
            font-family: "微软雅黑";
            color: #333;
        }
        h2 {
            font-size: 18px;
            font-weight: normal;
            margin-bottom: 15px;
        }
        p {
            font-size: 14px;
            line-height: 24px;
            color: #000;
        }
        em {
            font-style: normal;
        }
        .header {
            /* 标题特定样式 */
        }
        .red {
            color: #F00;
        }
        .gray {
            color: #999;
        }
        .green {
            color: #093;
        }
    </style>
</head>
<body>
    <h2 class="header">
        什么是CSS<em>?—CSS教程</em>
    </h2>
    <p>
        猴子提示：可以通过简单更改<em class="red">CSS</em>文件，改变网页的整体表现形式，
        从而减少我们的工作量，所以它是每一个网页设计人员的必修课。
        知道什么是<em class="red">CSS</em>了，现在就开始学习<em class="red">CSS</em>吧...
    </p>
    <p>
        <em class="gray">www.dreamdu.com/css/wh...</em>-<em class="green">百度快照</em>-<em class="gray">85%好评</em>
    </p>
</body>
</html>
```
