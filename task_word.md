第  章
运用盒子模型划分网页模块
★掌握盒子的相关属性，能够制作常见的盒子模型效果。
★掌握背景属性的设置方法，能够设置背景颜色和图像。
★理解渐变属性的原理，能够设置渐变背景。
★掌握元素类型的分类，能够进行元素类型的转换。
盒子模型是网页布局的基础，只有掌握了盒子模型的各种规律和特征，才可以更好地控
网页中各个元素所呈现的效果。本章将对盒子模型的概念、 盒子相关属性进行详细讲解。
毕业季|再见青春
4.1  【案例7】音乐盒                       36557人收听
案例描述
音乐可以陶冶情操，为人们带来听觉上的享受，随着 互联网的普及，在网络上听音乐变得越来越方便。本节将 通过盒子模型及其边框属性制作一个“音乐盒”,其效果 如图4- 1所示。
知识引入
图4-1 “音乐盒”效果展示
1. 认识盒子模型
在浏览网站时，会发现页面的内容都是按照区域划分的。在页面中，每一块区域分别承载 不同的内容，使得网页的内容虽然零散，但是在版式排列上依然清晰有条理。例如图4-2所示 的设计类网站。
在图4-2所示的网站页面中，这些承载内容的区域被称为盒子模型。盒子模型就是把HTMI 页面中的元素看作是一个方形的盒子，也就是一个盛装内容的容器。每个方形都由元素的内容 内边距 (padding) 、 边框 (border)    和外边距(margin)    组成。
扫描全能王创建
猫Ka     20QrS 里猫Ka     20QrS 里uE
猫
Ka     20
Qr
S 里
ADOBE
EXPERIENCE DESIGN
(   地    1(   地    1白卫抽人        A1                                                                                @ir 四涯
(   地    1
熙A6 附熙A6 附免费下载
熙A6 附
影媒话 该语动腿影媒话 该语动腿7 6 0 史 开  前 个 1 6 1  遵 压 芦 昆 时I      工 真 播   即         /
影媒话 该语动腿
只PEM
有 了B 开力出这30快速 搭建界面原型的设计工具有 了B 开力出这30快速 搭建界面原型的设计工具F 用声(01m!Da
有 了B 开力出这30快速 搭建界面原型的设计工具
AtomfromerAtomfromerPaeDSNeo
Atomfromer
PD 导人门指  7  结PD 导人门指  7  结畅M 明 记
PD 导人门
指  7  结
甜的立机
面正-B 庄马俊计彻，怕录恶正9级丘，  S 一个招9化部描速片国5w   工L 一  rnu,出 母 开 爱 7 遵 过 以面正-B 庄马俊计彻，怕录恶正9级丘，  S 一个招9化部描速片国5w   工L 一  rnu,出 母 开 爱 7 遵 过 以小脚师
面正-B 庄马俊计彻，怕录恶正9级丘，  S 一个招9化部描速片国5w   工L 一  rnu,
出 母 开 爱 7 遵 过 以
fratot
商乐人门商乐人门四力7的比
商乐人门
台 ， 热 聘 品 毫 6
图4-2 设计类网站
为了更形象地认识CSS 盒子模型，首先从生活中常见的手机盒子的构成说起。一个完整的 手机盒子通常包含手机、填充泡沫和盛装手机的纸盒。如果把手机想象成HTML 元素，那么手
机盒子就是一个 CSS 盒子模型，其中手机为 CSS 盒子模型的内容，填充泡沫的厚度为CSS 盒子模型的内边距，纸盒的厚度为 CSS 盒子 模型的边框，如图4-3所示。当多个手机盒 子放在一起时，它们之间的距离就是 CSS 盒 子模型的外边距。
外 边 距(margin)=   盒 子 之 间 的 距 离图4-3 手机盒子的构成外 边 距(margin)=   盒 子 之 间 的 距 离图4-3 手机盒子的构成网页中所有的元素和对象都是由图4-3 所示的基本结构组成，并呈现出矩形的盒子 效果。在浏览器中，网页就是由多个盒子嵌 套排列组成的。其中，内边距出现在内容区 域的周围，当给元素添加背景色或背景图像 时，该元素的背景色或背景图像也将出现在
外 边 距(margin)=   盒 子 之 间 的 距 离
图4-3 手机盒子的构成
内边距中，外边距是该元素与相邻元素之间的距离，如果给元素定义边框属性，边框将出现在 内边距和外边距之间。
需要注意的是，虽然盒子模型拥有内边距、边框、外边距、宽和高这些基本属性，但是并 不要求每个元素都必须定义这些属性。
2.<div>     标签
div 英文全拼为 “division”,   译为中文是“分割、区域”。<div>标签就是一个块标签，可以 实现网页的规划和布局。在 HTML 文档中，页面会被划分为很多区域，不同区域显示不同的内 容，例如导航栏、banner 、内容区等，这些区块一般都通过<div>标签进行分隔。
可 以 在<div> 标签中设置外边距、内边距、宽和高，同时内部可以容纳段落、标题、表格、 图像等各种网页元素，也就是说大多数 HTML 标签都可以嵌套在<div>标签中，<div>中还可以 嵌套多层<div> 。<div>标签非常强大，通过与id 、class 等属性结合设置CSS 样式，可以替代大
74     HTML+CSS+JavaScript  网页制作案例教程(第2版
多数的块级文本标签。
下面通过一个案例来演示<div>标签用法，如例4-1所示。
例 4 - 1 example01.html
】   <!doctype      html>
2  <html>
4   <meta   charset="utf-8">
5 <title>div标签</title>
65style      type="text/css">
7     .onel
8                width:600px;                     /*盒子模型的宽度*/
9                height:50px;                      /*盒子模型的高度*/
10             background:aqua;                             /*盒子模型的背景*1
11             font-size:20px;                    /*设置字体大小*/
12             font-weight:bold;                              /*设置字体加粗*/
13             text-align:center;                 /*文本内容水平居中对齐*1 14
15      .two{
16              width:600px;                       /*设置宽度*/
17              height:100px;                 /*设置高度*/
18              background:lime;                               /*设置背景颜色*1
19              font-size:14px;                     /*设置字体大小*/
20             text-indent:2em;                   /*设置首行文本缩进2字符*1 21
22  </style>
23    </head>
24     <body>
25  <div  class="one">
2 6 用div   标签设置标题文本 27</div>
28 <div class="two">
29<p>div      标签中嵌套P 标签的文本内容</p>
30  </div>  31</body>
32 </html>
在例4- 1中，第25~27行和第28~30行代码  分别定义了两对<div>, 其中第2对<div>中嵌套段 落标签<p>。第25行和第28行代码分别对两对  <div>添加class 属性，然后通过CSS 控制其宽、高、 背景颜色和文字样式等。
运行例4- 1,效果如图4-4所示。
从图4-4中可以看出，通过为<div>标签设置 相应的CSS 样式实现了预期的效果。
图 4 - 4 <div> 标签用法
注 意 ：注 意 ：
注 意 ：
①<div>  标签最大的意义在于与浮动属性float 配合，实现网页的布局，即常说的DIV+CSS 网页布局。对于浮动和布局这里了解即可，后面的章节将会详细介绍。
②<div>   可以替代块级元素(如<h> 、<p> 等),但是它们在语义上有一定的区别。例如， <div>和<h2> 的不同在于<h2> 具有特殊的含义，语义较重，代表着标题，而<div>是一个通用的 块级元素，主要用于布局。
3. 边框属性
为了分割页面中不同的盒子，常常需要给元素设置边框效果。在CSS中边框属性包括边框 样式属性(border-style) 、 边框宽度属性(border-width) 、 边框颜色属性(border-color) 、 单侧
第4章 运用盒子模型划分网页模块    75
边框的属性、边框的综合属性，如表4- 1所示。
表4-1 CSS边框属性
设置内容
样式属性
常用属性值
上边框
border-top-style:样式；
border-top-width:宽度；
border-top-color:颜色；
border-top:宽度样式颜色；
下边框
border-bottom-style:样式；
border-bottom-width:宽度；
border-bottom-color:颜色；
border-bottom:宽度样式颜色；
左边框
border-left-style:样式；
border-left-width:宽度；
border-left-color:颜色；
border-left:宽度样式颜色；
右边框
border-right-style:样式；
border-right-width:宽度；
border-right-color:颜色；
border-right:宽度样式颜色；
样式综合设置
border-style:上边[右边下边左边];
none(默认)、solid、dashed、dotted、double
宽度综合设置
border-width:上边[右边下边左边];
像素值
颜色综合设置
border-color:上边[右边下边左边];
颜色英文单词、#十六进制颜色值、rgb(r,g,b)、 rgb(r%,g%,b%)
边框综合设置
border:四边宽度四边样式四边颜色；
仅通过表4- 1的简单解释，初学者可能很难理解边框属性的应用技巧，下面将详细讲解边 框属性。
(1)边框样式
边框样式用于定义页面中边框的风格，在CSS 属 性 中 ，border-style属性用于设置边框样式， 其常用属性值如下。
●none:    没有边框，即忽略所有边框的宽度(默认值)。
●   solid: 边框为单实线。
●dashed:     边框为虚线。
●   dotted: 边框为点线。
●   double: 边框为双实线。
例如，想要定义边框显示为双实线，可以书写以下代码样式：
border-style:double;border-style:double;
border-style:double;
在设置边框样式时，可以对盒子的单边进行设置，具体格式如下。border-top-style:上边框样式；border-right-style:         右边框样式；border-bottom-style: 下边框样式；border-left-style:左边框样式； 在设置边框样式时，可以对盒子的单边进行设置，具体格式如下。border-top-style:上边框样式；border-right-style:         右边框样式；border-bottom-style: 下边框样式；border-left-style:左边框样式； 
在设置边框样式时，可以对盒子的单边进行设置，具体格式如下。
border-top-style:上边框样式；
border-right-style:         右边框样式；
border-bottom-style: 下边框样式；
border-left-style:左边框样式； 
76           HTML+CSS+JavaScrlpt       网页制作案例教程(第2版)
同时，为了避免代码过于冗余，也可以综合设置四条边的样式，具体格式如下。
border-style: 上边框样式 右边框样式下边框样式 左边框样式；border-style: 上边框样式左右边框样式下边框样式；border-style: 上下边框样式左右边框样式；border-style:  上下左右边框样式；border-style: 上边框样式 右边框样式下边框样式 左边框样式；border-style: 上边框样式左右边框样式下边框样式；border-style: 上下边框样式左右边框样式；border-style:  上下左右边框样式；
border-style: 上边框样式 右边框样式下边框样式 左边框样式；
border-style: 上边框样式左右边框样式下边框样式；
border-style: 上下边框样式左右边框样式；
border-style:  上下左右边框样式；
观察上面的代码格式会发现，在综合设置边框样式时.其属性值可以设置1-4个。当设 4个属性值时，边框样式的写法会按照上、右、下、左的顺时针顺序排列。当省略某个属性自 时，边框样式会采用值复制的原则，将省略的属性值默认为某一边的样式。设置3个属性值时 为上、左右、下；设置2个属性值时，为上下和左右，设置1个属性值，为四条边的公用样式
了解了边框样式的相关属性后，下面通过一个案例来演示其用法和效果。新建HTML页面 并在页面中添加标题和段落文本，然后通过边框样式属性控制标题和段落的边框效果，如例4 所 示 。
例 4 - 2 example02.html
1    <!doctype       html>2    <html>3  <head>4    <meta             charset="utf-8">5     <title>     设置边框样式</title>6         <style         type="Lext/css">h2(border-style:double;)                          /*4条边框相同——双实线*/border-top-style:dotted;             /*上边框——点线+/10                    border-bottom-style:dotted;                            /*下边框——点线*/12                    border-right-style:solid;                  /*右边框——单实线*/13                /*上面4行代码等价于：border-style:dotted     solid;*/16                    border-style:solid              dotted               dashed;/*上实线、左右点线、下虚线*/ 17)18</style>19   </head>21      <h2>边框样式 — — 双实线</h2>22    <p    class="one">边框样式 — 上下为点线、左右为单实线</p>23    <p    class=two">边框样式 — 上边框单实线、左右点线、下边框虚线</p>24       </body>25</html>11.             border-left-style:solid;                    /  左边框——单实线*/20  <body>1    <!doctype       html>2    <html>3  <head>4    <meta             charset="utf-8">5     <title>     设置边框样式</title>6         <style         type="Lext/css">h2(border-style:double;)                          /*4条边框相同——双实线*/border-top-style:dotted;             /*上边框——点线+/10                    border-bottom-style:dotted;                            /*下边框——点线*/12                    border-right-style:solid;                  /*右边框——单实线*/13                /*上面4行代码等价于：border-style:dotted     solid;*/16                    border-style:solid              dotted               dashed;/*上实线、左右点线、下虚线*/ 17)18</style>19   </head>21      <h2>边框样式 — — 双实线</h2>22    <p    class="one">边框样式 — 上下为点线、左右为单实线</p>23    <p    class=two">边框样式 — 上边框单实线、左右点线、下边框虚线</p>24       </body>25</html>11.             border-left-style:solid;                    /  左边框——单实线*/20  <body>
1    <!doctype       html>
2    <html>
3  <head>
4    <meta             charset="utf-8">
5     <title>     设置边框样式</title>
6         <style         type="Lext/css">
h2(border-style:double;)                          /*4条边框相同——双实线*/
border-top-style:dotted;             /*上边框——点线+/
10                    border-bottom-style:dotted;                            /*下边框——点线*/
12                    border-right-style:solid;                  /*右边框——单实线*/
13                /*上面4行代码等价于：border-style:dotted     solid;*/
16                    border-style:solid              dotted               dashed;/*上实线、左右点线、下虚线*/ 17)
18</style>
19   </head>
21      <h2>边框样式 — — 双实线</h2>
22    <p    class="one">边框样式 — 上下为点线、左右为单实线</p>
23    <p    class=two">边框样式 — 上边框单实线、左右点线、下边框虚线</p>
24       </body>
25</html>
11.             border-left-style:solid;                    /  左边框——单实线*/
20  <body>
在例4-2中，使用边框样式border-style属性，设置标题和段落文本的边框样式。其中标题 设置了一个边框属性值，类名为 “one”  的文本用单边框属性设置样式，类名为 “two”  的文本 用综合边框属性设置样式 。
运行例4-2,效果如图4-5所示。
需要注意的是，由于兼容性的问题，在不同的浏览器中点线(dotted)   和虚线(dashed)     的 显示样式可能会略有差异。图4-6为例4-2在火狐浏览器中的预览效果，其中虚线(dashed)  显示效果要比谷歌浏览器稀疏 。
②说边日三
T       回 M   +
(   →  C    ①文件
D:军阴源码/chapter04/exn… ☆
边框样式——双实线
式上下为点三、石为单线
柜摆式上边枢单东、左石点、下边框成版
图4-5 谷歌浏览器中的边框效果
设置边忆竹式             X
+           -回×
( →C
Dr11://D;/案例流码/chaptar…
》  三
□B助设☆上的
边 框 样 式 — — 双 实 线
上 下 为 点  石 5 单 实    ……
…
……
边框样式上边框单托、左石点恁、下边虚结_
图4-6  火狐浏览器中的边框效用
7777第 4 章  运用盒子模型划分网页模块
77
(2)边框宽度
bonder-width 属性用于设置边框的宽度，其常用取值单位为像素(px)。 与边框样式一样， 边框宽度也可以针对四条边分别设置，或综合设置四条边的宽度，具体如下。
border-top-vidth:          上边框宽度；border-right-width:           右边框宽度；border-bottom-width;          下边框宽度；border-left-width:            左边框宽度；border-width:       上边框宽度[右边框宽度下边框宽度左边框宽度];综合设置四边宽度必须按上右下左的顺时针顺序采用值复制，即一个值为四边，两个值为上下和左右，三个值为上、左右、下。了解了边框宽度属性后，下面通过一个案例来演示其用法。新建HTML页面，并在页面中 添加段落文本，然后通过边框宽度属性对段落进行控制，如例4-3所示。例4 - 3 example03.html1    <Idoctype     html>2    <html> <head>5   <title>设置边框宽度</title>6         <style         type="text/css">pl8                    border-width:lpx;                  /*综合设置4边宽度*/border-top-width:3px;            /*设置上边框宽度覆盖*/10                  /*.上面2行代码等价于border-width:3px   1px   lpx;*/ 11}12     </style>13     </head>14  <body>15<p>   边框宽度——上3px、下左右1px,   边框样式——单实线。</p>16</body>17     </html>在例4-3中，先综合设置四边的边框宽度，然后单独设置上边框宽度进行覆盖，使上边框 的宽度不同 。运行例4-3,效果如图4-7所示。在图4-7中，段落文本并没有像预期的一样添加边框效果。这是因为在设置边框宽度时， 必须同时设置边框样式，如果未设置样式或设置为none, 则不论宽度设置为多少都无效。在例4-3的CSS 代码中，为<p>标签添加边框样式，代码如下。border-style:solid;       /*综合设置边框样式*/                                               保存HTML文件，刷新网页，效果如图4-8所示。在图4-8中，段落文本添加了预期的边border-top-vidth:          上边框宽度；border-right-width:           右边框宽度；border-bottom-width;          下边框宽度；border-left-width:            左边框宽度；border-width:       上边框宽度[右边框宽度下边框宽度左边框宽度];综合设置四边宽度必须按上右下左的顺时针顺序采用值复制，即一个值为四边，两个值为上下和左右，三个值为上、左右、下。了解了边框宽度属性后，下面通过一个案例来演示其用法。新建HTML页面，并在页面中 添加段落文本，然后通过边框宽度属性对段落进行控制，如例4-3所示。例4 - 3 example03.html1    <Idoctype     html>2    <html> <head>5   <title>设置边框宽度</title>6         <style         type="text/css">pl8                    border-width:lpx;                  /*综合设置4边宽度*/border-top-width:3px;            /*设置上边框宽度覆盖*/10                  /*.上面2行代码等价于border-width:3px   1px   lpx;*/ 11}12     </style>13     </head>14  <body>15<p>   边框宽度——上3px、下左右1px,   边框样式——单实线。</p>16</body>17     </html>在例4-3中，先综合设置四边的边框宽度，然后单独设置上边框宽度进行覆盖，使上边框 的宽度不同 。运行例4-3,效果如图4-7所示。在图4-7中，段落文本并没有像预期的一样添加边框效果。这是因为在设置边框宽度时， 必须同时设置边框样式，如果未设置样式或设置为none, 则不论宽度设置为多少都无效。在例4-3的CSS 代码中，为<p>标签添加边框样式，代码如下。border-style:solid;       /*综合设置边框样式*/                                               保存HTML文件，刷新网页，效果如图4-8所示。在图4-8中，段落文本添加了预期的边
border-top-vidth:          上边框宽度；
border-right-width:           右边框宽度；
border-bottom-width;          下边框宽度；
border-left-width:            左边框宽度；
border-width:       上边框宽度[右边框宽度下边框宽度左边框宽度];
综合设置四边宽度必须按上右下左的顺时针顺序采用值复制，即一个值为四边，两个值为
上下和左右，三个值为上、左右、下。
了解了边框宽度属性后，下面通过一个案例来演示其用法。新建HTML页面，并在页面中 添加段落文本，然后通过边框宽度属性对段落进行控制，如例4-3所示。
例4 - 3 example03.html
1    <Idoctype     html>
2    <html> <head>
5   <title>设置边框宽度</title>
6         <style         type="text/css">
pl
8                    border-width:lpx;                  /*综合设置4边宽度*/
border-top-width:3px;            /*设置上边框宽度覆盖*/
10                  /*.上面2行代码等价于border-width:3px   1px   lpx;*/ 11}
12     </style>
13     </head>
14  <body>
15<p>   边框宽度——上3px、下左右1px,   边框样式——单实线。</p>
16</body>
17     </html>
在例4-3中，先综合设置四边的边框宽度，然后单独设置上边框宽度进行覆盖，使上边框 的宽度不同 。
运行例4-3,效果如图4-7所示。
在图4-7中，段落文本并没有像预期的一样添加边框效果。这是因为在设置边框宽度时， 必须同时设置边框样式，如果未设置样式或设置为none, 则不论宽度设置为多少都无效。
在例4-3的CSS 代码中，为<p>标签添加边框样式，代码如下。
border-style:solid;       /*综合设置边框样式*/                                               保存HTML文件，刷新网页，效果如图4-8所示。在图4-8中，段落文本添加了预期的边
框效果 。
⑤设置边量斑           ×  +
← →  C   ①文件|D:/案例源码/chazto±04ex
边框究度—上3px、下左右1px,边框样式——单实线。
固
☆
2
图4-7 仅设置边框宽度
 四  它
③说置边红吨滨        × +
→ C   ①文件
D:/宾所酒码/chapter0L/ez-☆
边框宽度——上3px,下左石1px.边框样式——单实线
图4-8  同时设置边框宽度和样式
(3)设置边框颜色
border-color属性用于设置边框的颜色，其取值可为预定义的颜色英文单词(如red、blue)、 十六进制颜色值#RRGGBB  ( 如 #FFO000 或#F00)或 RGB 模式rgb(r,g,b)( 如rgb(0,255,0)括号里是  颜色色值或百分比),实际工作中最常用的是十六进制颜色值。
边框的默认颜色为元素本身的文本颜色，对于没有文本的元素，例如只包含图像的表格，
7 8     HTML+CSS+JavaScript     网页制作案例教程(第2版)
具体如下。
border-top-color: 上迈框颐色/border-right-color: 右边框颜色；bordor-bottom-color: 下边框筋色；border-laft-color: 左边框颜色；border-color;      上边框颜色(右边框颜色下边框濒色左边框颜色);border-top-color: 上迈框颐色/border-right-color: 右边框颜色；bordor-bottom-color: 下边框筋色；border-laft-color: 左边框颜色；border-color;      上边框颜色(右边框颜色下边框濒色左边框颜色);
border-top-color: 上迈框颐色/
border-right-color: 右边框颜色；
bordor-bottom-color: 下边框筋色；
border-laft-color: 左边框颜色；
border-color;      上边框颜色(右边框颜色下边框濒色左边框颜色);
综合设置四边颜色必须按顺时针顺序采用值复制原则，即一个值为四边，两个值为上 左右，三个值为上、左右、下。
例如设置段落的边框样式为实线，上下边为灰色，左右边为红色，代码如下。
Pborder-style:solid;                      /*综合设置边框样式*/border-color:#CCC       #FE0000;        /+设置边框颜色：两个值分别为上下、左右边框颜色 ·/Pborder-style:solid;                      /*综合设置边框样式*/border-color:#CCC       #FE0000;        /+设置边框颜色：两个值分别为上下、左右边框颜色 ·/
P
border-style:solid;                      /*综合设置边框样式*/
border-color:#CCC       #FE0000;        /+设置边框颜色：两个值分别为上下、左右边框颜色 ·/
再如设置二级标题的边框样式为实线，且下边框为红色，其余边框采用默认文本的颜色 代码如下。
h2(
/*综合设置边框样式*//4单独设置下边框颜色+//*综合设置边框样式*//4单独设置下边框颜色+/border-style:solid;
/*综合设置边框样式*/
/4单独设置下边框颜色+/
border-bottom-color:red;
注意 ：注意 ：
注意 ：
①设置边框颜色时同样必须设置边框样式，如果未设置样式或设置为 none,  则其他的 框属性无效。
② 使 用RGB  模式设置颜色时，如果括号里面的数值为百分比，必须把“0”也加上百分号 写作“0%”。
多学一招：巧用边框透明色(transparent)多学一招：巧用边框透明色(transparent)
多学一招：巧用边框透明色(transparent)
CSS2.1  将元素背景延伸到了边框，同时增加了transparent   透明色。如果需要将已有的边框 置为暂时不可见，可使用"border-color:transparent;",      这时如同没有边框，看到的是背景色，需 边框可见时再设置相应的颜色，这样可以保证元素的区域不发生变化。这种方式与取消边框样 不同，取消边框样式时，虽然边框也不可见，但是这时边框的宽度为0,即元素的区域发生了变化
( 4 ) 综 合 设 置 边 框
使 用border-style 、border-width 、border-color      虽然可以实现丰富的边框效果，但是采用这种 式编写的代码烦琐，且不便于阅读。其实CSS 提供了更简单的边框设置方式，具体设置方式如下
border-top:    上边框宽度样式颜色；border-right:右边框宽度样式颜色；border-bottom:    下边框宽度样式颜色；border-left:      左边框宽度样式颜色；border:  四边宽度样式颜色；上面的设置方式中，边框的宽度、样式、颜色顺序任意，不分先后，可以只指定需要设置 的属性，省略的部分将格式取默认值(样式不能省略)。当每一侧的边框样式都不同，或者只需单独定义某一侧的边框样式时，可以使用单侧边 的综合设置样式属性border-top 、border-bottom 、border-left        或 border-right 。 例如单独定义段 的上边框，代码如下。p(border-top:2px  solid  #CCC;)    /*定义上边框，各个值顺序任意*1该样式将段落的上边框设置为2像素、单实线、灰色，其他各边的边框按默认值不可见， 这段代码等价于：Plborder-top-style:solid;border-top:    上边框宽度样式颜色；border-right:右边框宽度样式颜色；border-bottom:    下边框宽度样式颜色；border-left:      左边框宽度样式颜色；border:  四边宽度样式颜色；上面的设置方式中，边框的宽度、样式、颜色顺序任意，不分先后，可以只指定需要设置 的属性，省略的部分将格式取默认值(样式不能省略)。当每一侧的边框样式都不同，或者只需单独定义某一侧的边框样式时，可以使用单侧边 的综合设置样式属性border-top 、border-bottom 、border-left        或 border-right 。 例如单独定义段 的上边框，代码如下。p(border-top:2px  solid  #CCC;)    /*定义上边框，各个值顺序任意*1该样式将段落的上边框设置为2像素、单实线、灰色，其他各边的边框按默认值不可见， 这段代码等价于：Plborder-top-style:solid;
border-top:    上边框宽度样式颜色；
border-right:右边框宽度样式颜色；
border-bottom:    下边框宽度样式颜色；
border-left:      左边框宽度样式颜色；
border:  四边宽度样式颜色；
上面的设置方式中，边框的宽度、样式、颜色顺序任意，不分先后，可以只指定需要设置 的属性，省略的部分将格式取默认值(样式不能省略)。
当每一侧的边框样式都不同，或者只需单独定义某一侧的边框样式时，可以使用单侧边 的综合设置样式属性border-top 、border-bottom 、border-left        或 border-right 。 例如单独定义段 的上边框，代码如下。
p(border-top:2px  solid  #CCC;)    /*定义上边框，各个值顺序任意*1
该样式将段落的上边框设置为2像素、单实线、灰色，其他各边的边框按默认值不可见， 这段代码等价于：
Pl
border-top-style:solid;
第 4 章 运用盒子模型划分网页模块     79
border-top-width:2px:border-top-colorriCCC!当四条边的边框样式都相同时，可以使用border属性进行综合设置。例如，将二级标题的 边框设置为双实线、红色、3像素宽，代码如下。border-top-width:2px:border-top-colorriCCC!当四条边的边框样式都相同时，可以使用border属性进行综合设置。例如，将二级标题的 边框设置为双实线、红色、3像素宽，代码如下。
border-top-width:2px:
border-top-colorriCCC!
当四条边的边框样式都相同时，可以使用border属性进行综合设置。例如，将二级标题的 边框设置为双实线、红色、3像素宽，代码如下。
h2(border!3px  double  rod/)   h2(border!3px  double  rod/)   
h2(border!3px  double  rod/)   
像 border、border-top 等这样，能够一个属性定义元素的多种样式，在CSS 中称之为复合属 性。常用的复合属性有font 、border 、margin 、padding    和 background  等。实际工作中常使用复合 属性，它可以简化代码，提高页面的运行速度，但是如果只设置一个属性值，最好不要应用复 合属性，以免样式不被兼容。
为了使初学者更好地理解复合属性，下面对标题、段落和图像分别应用border  相关的复合 属性设置边框，如例4-4所示。
例4-4 example04.html
4 <meta charset="utf-8"><title>综合设置边框</titlo>border-bottom:5px double blue; text-align:center;12                    border-top:3px dashed IE00;13                    border-right:10px double l900;16)17     .pingmian(18                    border:15px solid iCCC;21</head>2324/*border-bottom     复合属性设置下边框*/ /+单侧复合属性设置各边框*/1415           boorrdeerr--blottefot:m10:3ppxx ooltitd gCCeenC;;<h2>设置边框属性</h2><p class="text">该段落使用单侧边框的综合属性，分别给上、右、下、左四个边设置不同的样式。</p><img      class="pingmian"src="images/pingmian.jpg"alt="图片"1><style      type="text/css">/*border   复合属性设置各边框相同*/22 <body></body>252627</html>h2(4 <meta charset="utf-8"><title>综合设置边框</titlo>border-bottom:5px double blue; text-align:center;12                    border-top:3px dashed IE00;13                    border-right:10px double l900;16)17     .pingmian(18                    border:15px solid iCCC;21</head>2324/*border-bottom     复合属性设置下边框*/ /+单侧复合属性设置各边框*/14151415           boooorrdeerr--blottefotottefot:m1m10:3ppxx3ppxx ooltitd gCCeenCCeenC;;<h2>设置边框属性</h2><p class="text">该段落使用单侧边框的综合属性，分别给上、右、下、左四个边设置不同的样式。</p><img      class="pingmian"src="images/pingmian.jpg"alt="图片"1><style      type="text/css">/*border   复合属性设置各边框相同*/22 <body></body>252627</html>h2(
4 <meta charset="utf-8">
<title>综合设置边框</titlo>
border-bottom:5px double blue; text-align:center;
12                    border-top:3px dashed IE00;
13                    border-right:10px double l900;
16)
17     .pingmian(
18                    border:15px solid iCCC;
21</head>
23
24
/*border-bottom     复合属性设置下边框*/ /+单侧复合属性设置各边框*/
14151415           boooorrdeerr--blottefotottefot:m1m10:3ppxx3ppxx ooltitd gCCeenCCeenC;;
<h2>设置边框属性</h2>
<p class="text">该段落使用单侧边框的综合属性，分别给上、右、下、左四个边设置不同的样式。</p>
<img      class="pingmian"src="images/pingmian.jpg"alt="图片"1>
<style      type="text/css">
/*border   复合属性设置各边框相同*/
22 <body>
</body>
25
26
27</html>
h2(
在例4-4中，使用边框的单侧复合属性设置二级标题和段落文本，其中二级标题添加下边  框，段落文本的各侧边框样式都不同，然后使用复合属性border,   为图像设置四条相同的边框。
运行例4-4,效果如图4-9所示。
图4-9 综合设置边框
80          HTML+CSS+JavaScript    网页制作案例教程(第2版)
案例实现
1. 结构分析
图4- 1所示的“音乐盒”可以看作一个大盒子，用 <div>标签进行定义。大盒子的上面为文本内容，可以 通过在<div>标签中嵌套<h2> 和<p> 标签来实现；大盒子 的下面为图像，通过在<div> 标签中嵌套<img   />标签来 实现。图4- 1 对应的结构如图4- 10所示。
2. 样式分析
实现图4- 1所示样式的思路如下。
①通过最外层的大盒子对音乐盒进行整体控制， 需要对其设置宽度、高度、边框和文本居中等样式。
②设置文本模块中“毕业季 |再见青春”的样式，
主要控制其文本大小、字体、高、行高、边框。                  图4-10  “音乐盒”结构
③设置文本模块中“36557人收听”的样式，主要控制其文本大小、颜色、高和行高、
3. 制作页面结构
根据上面的分析，使用相应的HTML 标签来搭建网页结构，如例4-5所示。
例4-5 example05.html
1    <!doctype    hemI>4   <meta       charset="utf-B">5  <title>音乐盒</title> <body>8  <div class="all">9                     <div       class="text">10 <h2 class="header">毕业季|再见青春</h2>11 <p>36557 人收听</p>12   </div>13 <div class="image">14       <img        src="images/music.jpg"alt="毕业季，再见青睿"/>15   </div> 16</div>17 </body> 18</html>1    <!doctype    hemI>4   <meta       charset="utf-B">5  <title>音乐盒</title> <body>8  <div class="all">9                     <div       class="text">10 <h2 class="header">毕业季|再见青春</h2>11 <p>36557 人收听</p>12   </div>13 <div class="image">14       <img        src="images/music.jpg"alt="毕业季，再见青睿"/>15   </div> 16</div>17 </body> 18</html>
1    <!doctype    hemI>
4   <meta       charset="utf-B">
5  <title>音乐盒</title> <body>
8  <div class="all">
9                     <div       class="text">
10 <h2 class="header">毕业季|再见青春</h2>
11 <p>36557 人收听</p>
12   </div>
13 <div class="image">
14       <img        src="images/music.jpg"alt="毕业季，再见青睿"/>
15   </div> 16</div>
17 </body> 18</html>
4. 定义CSS  样式搭建完页面的结构后，下面使用CSS 对页面的 样式进行修饰。本节采用从整体到局部的方式实现 图4- 1所示的效果，具体如下。(1)定义基础样式7*将页面中所有元素的内外边距设置为0*/*(padding:0;margin:0;)                                                                上面的代码用于将页面中所有元素的内边距 和外边距设置为0,以统 一 页面样式。关于内边距 padding 和外边距margin 的内容将会在4.2节详细讲4. 定义CSS  样式搭建完页面的结构后，下面使用CSS 对页面的 样式进行修饰。本节采用从整体到局部的方式实现 图4- 1所示的效果，具体如下。(1)定义基础样式7*将页面中所有元素的内外边距设置为0*/*(padding:0;margin:0;)                                                                上面的代码用于将页面中所有元素的内边距 和外边距设置为0,以统 一 页面样式。关于内边距 padding 和外边距margin 的内容将会在4.2节详细讲运行例4-5,效果如图4-11所示。
4. 定义CSS  样式
搭建完页面的结构后，下面使用CSS 对页面的 样式进行修饰。本节采用从整体到局部的方式实现 图4- 1所示的效果，具体如下。
(1)定义基础样式
7*将页面中所有元素的内外边距设置为0*/
*(padding:0;margin:0;)                                                                
上面的代码用于将页面中所有元素的内边距 和外边距设置为0,以统 一 页面样式。关于内边距 padding 和外边距margin 的内容将会在4.2节详细讲
毕业季|再见青春
36557人收听
解，这里了解即可。                                            图4-11 HTML结构页面效果
第4章 运用盒子模型划分网页榄块    81
(2)整体控制最外层大盒子
.all
width:210px) he1ght1265px
5text-a1lgn:centor;5text-a1lgn:centor;border:lpx         aol1d         4E1E1E1: margin:50px            auto!
5
text-a1lgn:centor;
上面的代码用于控制最外层的大盒子，其中第5行代码“margin:50px auto;”用于使大盒子  在浏览器窗口中水平居中、其上下边与浏览器窗口有一定的距离，以方便查看。
(3)控制文本模块
.headfoorlnlnt-oize:18px;
font-Eamdly:"        微软雅黑";
5   g5   gheiqht:40px;
5   g
line-helqht:40px;
border-bottom:1px          dashed          BE1E1E1; .text   pl
9                font-size:14px;
10              color:#CCC;
11              helght:24px;
1lne-height:24px;
上面的代码用于控制文本模块的样式，其中第 6行代码“border-bottom:1px    dashed#E1E1E1;”用 于 为“毕业季I再见青春”这一部分文本添加下边框。
至此，完成图4-1所示“音乐盒”的CSS样式部 分。刷新例4-5所在的页面，效果如图4-12所示。
4.2  【案例8】用户中心
案例描述
图4- 12   “音乐盒”最终效果图4- 12   “音乐盒”最终效果注册和登录一些网站时，经常需要填写用户信 息。“用户中心”模块用于对用户个人信息进行管 理和存储。本节将通过盒子模型内边距和外边距属
图4- 12   “音乐盒”最终效果
用户姓名：学习进度：兴旭爱好：参与的群：用户姓名：学习进度：兴旭爱好：参与的群：性制作一个“用户中心”界面，其效果如图4-13所示。
用户姓名：
学习进度：
兴旭爱好：
参与的群：
知识引入
1. 内边距属性
为了调整内容在盒子中的显示位置，常常需要为元素设 置内边距。内边距也被称为内填充，是指元素内容与边框之 间的距离。下面将对内边距相关属性进行详细讲解。
图4- 13   “用户中心”界面效果展示图4- 13   “用户中心”界面效果展示在 CSS 中 ，padding  属性用于设置内边距，同边框属性 border 一样，padding 也是复合属性，其相关设置方式如下。
图4- 13   “用户中心”界面效果展示
padding-top:  上内边距；padding-right:  右内边距；padding-bottom:  下内边距；padding-left:  左内边距；padding:    上内边距【右内边距下内边距左内边距];padding-top:  上内边距；padding-right:  右内边距；padding-bottom:  下内边距；padding-left:  左内边距；padding:    上内边距【右内边距下内边距左内边距];
padding-top:  上内边距；
padding-right:  右内边距；
padding-bottom:  下内边距；
padding-left:  左内边距；
padding:    上内边距【右内边距下内边距左内边距];
在上面的设置中，padding 相关属性的取值可为 auto (默认值表示自动适应)、不同单位的
HTML+CSS+JavaScript      网页制作案例教程(第2版)
数值、相对于父元素(或浏览器)宽度的百分比(%)。在实际工作中， padding 属性值地 的单位是像素值(px),    并且不允许使用负值。
与边框相关属性一样，使用复合属性 padding 定义内边距时，必须按顺时针顺序采用 制的原则，一个值为四边，两个值为上下和左右，三个值为上、左右、下。
了解了内边距的相关属性后，下面通过一个案例来演示其效果。新建 HTML  页面， 面中添加一个图像和一段文本，然后使用padding 相关属性，控制它们的显示位置，如贪 所示 。
例4 - 6 example06.html
1    <!doctype    html>2    <html>3  <head>4  <meta   charset="utf-8">5  <title> 设置内边距</title>6       <style       type"text/css">7   .border(border:5px     solid      iccc;)         / ·为图像和段落设置边框*/8   1mg(padding:80px;                                                /*图像4个方向内边距相同*/10                  padding-bottom:0;                                    /*单独设置下边距*/11                  /^上面两行代码等价于padding:80px       80px       0;*/ 12  )13   pl    padding:5%;)                                            /+段落内边距为父元素宽度的5&*/ 14</style>15  </head>16 <body>17    <img    class="border"src="images/padding_in.png"alt="内边距"/>18  <p  class="border">段落内边距为父元素宽度的5%。</p> 19</body>20    </html>1    <!doctype    html>2    <html>3  <head>4  <meta   charset="utf-8">5  <title> 设置内边距</title>6       <style       type"text/css">7   .border(border:5px     solid      iccc;)         / ·为图像和段落设置边框*/8   1mg(padding:80px;                                                /*图像4个方向内边距相同*/10                  padding-bottom:0;                                    /*单独设置下边距*/11                  /^上面两行代码等价于padding:80px       80px       0;*/ 12  )13   pl    padding:5%;)                                            /+段落内边距为父元素宽度的5&*/ 14</style>15  </head>16 <body>17    <img    class="border"src="images/padding_in.png"alt="内边距"/>18  <p  class="border">段落内边距为父元素宽度的5%。</p> 19</body>20    </html>
1    <!doctype    html>
2    <html>
3  <head>
4  <meta   charset="utf-8">
5  <title> 设置内边距</title>
6       <style       type"text/css">
7   .border(border:5px     solid      iccc;)         / ·为图像和段落设置边框*/
8   1mg(
padding:80px;                                                /*图像4个方向内边距相同*/
10                  padding-bottom:0;                                    /*单独设置下边距*/
11                  /^上面两行代码等价于padding:80px       80px       0;*/ 12  )
13   pl    padding:5%;)                                            /+段落内边距为父元素宽度的5&*/ 14</style>
15  </head>
16 <body>
17    <img    class="border"src="images/padding_in.png"alt="内边距"/>
18  <p  class="border">段落内边距为父元素宽度的5%。</p> 19</body>
20    </html>
在例4-6中，使用padding相关属性设置图像和段落的内边距，其中段落内边距使用 比数值 。
运行例4-6,效果如图4-14所示。
由于段落的内边距设置为百分比数值，当拖动浏览器窗口改变其宽度时，段落的内边
随之发生变化 。
图4-14  设置内边距
注 意 ：注 意 ：
注 意 ：
如果设置内外边距属性值为百分比，则不论上下内外边距或左右内外边距. 如旦相对干 元素宽度 width 的百分比，随父元素 width 的变化而变化  后亠 ·
第4章 运用盒子模型划分网页模块     83
2. 外边距属性
网页是由多个盒子排列而成的，要想拉开盒子与盒子之间的距离，合理地布局网页，就需要 为盒子设置外边距。所谓外边距，是指标签边框与相邻标签之问的距离。在CSS 中 ，margin  属 性
用于设置外边距，它是 一 个复合属性，与内边距padding 的用法类似，设置外边距的方法如下。
margin-top: 上外边距；
margin-right:        右外边距；
margin-bottom:       下外边距；
margin-left:         左外边距；
margin: 上外边距【右外边距下外边距左外边距];
margin 取值遵循值复制的原则，其取1~4个值的情况与 padding 相同，但是外边距可以使
用负值 ， 使相邻标签发生重叠 。
当对块级元素(4.4小节中将详细介绍)应用宽度属性width,  并将左右的外边距都设置为 auto,     可使块级元素水平居中，实际工作中常用这种方式进行网页布局，示例代码如下。
.num(m    argin:0         auto;1.num(m    argin:0         auto;1
.num(m    argin:0         auto;1
下面通过一个案例来演示外边距属性的用法和效果。新建HTML页面，在页面中添加一个 图像和一个段落，然后使用margin相关属性对图像和段落进行排版，如例4-7所示。
例4-7 example07.html
<!doctype     html>
<html>
<head>
4  <meta   charset="utf-8">
<title>外边距</title>
<style             type="text/css">
border:5px  solid  green;
float:left;                                                             /*设置图像左浮动*1
10                   margin-right:50px;                           /*设置图像的右外边距*/
11                   margin-left:30px;                             /*设置图像的左外边距*/
12                /*上面两行代码等价于margin:050px    030px;*/ 13
14    p{text-indent:2em;}                  /*段落文本首行缩进2字符/
16   </head>
18   <img   src="images/longmao.png"alt="龙猫和小月姐妹"/>
19<p>   龙猫剧情简介：小月的母亲生病住院了，父亲带着她和妹妹到乡下居住。她们在乡下遇到了很多小精灵，更与一只 大大胖胖的龙猫成为了朋友。龙猫与小精灵们利用它们的神奇力量，为小月和妹妹带来了很多神奇的景观 … /p>
20         </body> 21</html>
外边拒龙蓝剧情簿介：小月的 母亲生病任院了，父亲带地和妹妹到乡下居住。地们右外 在乡下遇到了很多小辆灵， 边距 更与一只大大屏胖的龙猫成 50px 为了朋友，龙描与小聘灵们 和用它们的神哥力量，为小月和妹蛛带来了很多神奇的 最观...外边拒龙蓝剧情簿介：小月的 母亲生病任院了，父亲带地和妹妹到乡下居住。地们右外 在乡下遇到了很多小辆灵， 边距 更与一只大大屏胖的龙猫成 50px 为了朋友，龙描与小聘灵们 和用它们的神哥力量，为小月和妹蛛带来了很多神奇的 最观...在例4-7中，第9行代码使用浮动属性foat 将图像居左，而第10行和第11行代码设置图像 的右、左外边距分别为50px和30px, 使图像和文 本之间拉开一定的距离，实现常见的排版效果 (浮动属性将在第7章详细讲解)。
外边拒
龙蓝剧情簿介：小月的 母亲生病任院了，父亲带
地和妹妹到乡下居住。地们
右外 在乡下遇到了很多小辆灵， 边距 更与一只大大屏胖的龙猫成 50px 为了朋友，龙描与小聘灵们 和用它们的神哥力量，为小
月和妹蛛带来了很多神奇的 最观...
运行例4-7,效果如图4-15所示。
图4-15 外边距的使用图4-15 外边距的使用在图4-15中图像和段落文本之间拉开了一 定的距离，实现了图文混排的效果。但是仔细观 察效果图会发现，浏览器边界与网页内容之间也 存在一定的距离，然而例4-7 中并没有对<p>标 签或<body>标签应用内边距或外边距，可见这些 标签默认就存在内边距和外边距样式。网页中默
图4-15 外边距的使用
认 存 在 内 外 边 距 的 标 签 有<body> 、<h1>~<h6> 、<p>        等 。
84             HTML+CSS+JavaScript 网页制作案例教程(第2版)
为了更方便地控制网页中的标签，制作网页时添加如下代码，即可清除标签默认的内外
padding:0; margin:0padding:0; margin:0/*清除内边距 ·/ /‘清除外边距+/
padding:0; margin:0
注意：注意：
注意：
如果没有明确定义标签的宽和高，内边距相比外边距的容错率高。
3. 盒子的宽与高
网页是由多个盒子排列而成的，每个盒子都有固定的大小，在 CSS 中使用宽度属性  和高度属性height 可以对盒子的大小进行控制。 width 和 height 的属性值可以为不同单位的 或相对于父元素的百分比%,实际工作中最常用的是像素值。
了解了盒子的width 和 height 属性后，下面通过它们来控制网页中的段落，如例4-8
例4-8 example08.html
<!doctype        html>2   <html>4  <meta     charset="utf-8">5    <title>盒子模型的宽度与高度</title> <style               type="text/css">.box(width:200px;height180px;10              background:#CCC;11              border:8px   solid   #F00;12              padding:15px;13              margin:20px;14    }/*设置段落的宽度+//*设置段落的高度*//*设置段落的背景颜色*/ /*设置段落的边框*//*设置段落的内边距*//*设置段落的外边距*/15</style>16 </head>17   <body>18       <p       class="box">这是一个盒子</p> 19</body>20 </html>在例4-8中，通过width 和 height 属性分别控制段落的宽度和高度，同时对段落应用了<!doctype        html>2   <html>4  <meta     charset="utf-8">5    <title>盒子模型的宽度与高度</title> <style               type="text/css">.box(width:200px;height180px;10              background:#CCC;11              border:8px   solid   #F00;12              padding:15px;13              margin:20px;14    }/*设置段落的宽度+//*设置段落的高度*//*设置段落的背景颜色*/ /*设置段落的边框*//*设置段落的内边距*//*设置段落的外边距*/15</style>16 </head>17   <body>18       <p       class="box">这是一个盒子</p> 19</body>20 </html>在例4-8中，通过width 和 height 属性分别控制段落的宽度和高度，同时对段落应用了
<!doctype        html>
2   <html>
4  <meta     charset="utf-8">
5    <title>盒子模型的宽度与高度</title> <style               type="text/css">
.box(
width:200px;
height180px;
10              background:#CCC;
11              border:8px   solid   #F00;
12              padding:15px;
13              margin:20px;
14    }
/*设置段落的宽度+/
/*设置段落的高度*/
/*设置段落的背景颜色*/ /*设置段落的边框*/
/*设置段落的内边距*/
/*设置段落的外边距*/
15</style>
16 </head>
17   <body>
18       <p       class="box">这是一个盒子</p> 19</body>
20 </html>
在例4-8中，通过width 和 height 属性分别控制段落的宽度和高度，同时对段落应用了
模型的其他相关属性，例如边框、内边距、 外 边 距 等 。
运行例4-8,效果如图4-16所示。
在例4-8所示的盒子中，如果问盒子的宽 度是多少，初学者可能会不假思索地说是 200px。实际上这是不正确的。因为 CSS 规范 中，元素的width 和 height 属性仅指元素内容 的宽度和高度，其周围的内边距、边框和外边 距是单独计算的。大多数浏览器(如火狐、谷
⑤盒子模母的宽展与高度
这是一个盒子这是一个盒子
这是一个盒子
图4- 16 控制盒子的宽度与高度
歌)都采用了W3C规范，符合CSS规范的盒子模型的总宽度和总高度的计算原则如下。
●盒子的总宽度=width+左右内边距之和+左右边框宽度之和+左右外边距之和
●盒子的总高度=height+上下内边距之和+上下边框宽度之和+上下外边距之和
注意：注意：
注意：
宽度属性width 和高度属性height 仅适用于块级元素，对行内元素无效(<img>   标签和<邮
> 标 签 除 外 ) 。
案例实现
1. 结构分析
图4-13所示的“用户中心”界面可以看作一个大 盒子，用<div>标签进行定义。大盒子的上面为“用户 头像”,可以通过在<div>标签中嵌套<img I>标签来实 现；大盒子的下面为"用户资料",可通过在<div>标 签中嵌套<p>标签来实现。图4-13 对应的结构如图
4- 17所示。
2. 样式分析
第 4 章 运用盒子模型划分网页模块
dlv div用户姓名：div火地爱好：p参与的群：学习进度：dlv div用户姓名：div火地爱好：p参与的群：学习进度：
dlv div
用户姓名：
div
火地爱好：
p
参与的群：
学习进度：
图4-17 “用户中心”结构
实现图4 - 13所示样式的思路如下。
①通过最外层的大盒子对“用户中心”界面进行整体控制，需要对其设置宽度、高度、字 体、字号等样式。
②控制“用户资料”模块的样式，需要设置段落的宽度、高度、行高、边框，以及内边距、 外边距样式 。
3. 制作页面结构
根据上面的分析，可以使用相应的HTML标签来搭建网页结构，如例4-9所示。
例4-9 example09.html
<IdocfyDe                                                                bfml>1                       Iu               C<head>5    <title>    用户中心</title><body><div         class="all"><div>10                                  <img    src="mages/user.jpg"alt="用户图像"/>12      <div      class="info">13                                 <p>用户姓名：</p>14                                 <p>学习进度：</p><p>兴趣爱好：</p>16                                 <p>参与的群：</p> 17</div>19  </body>20    </html><IdocfyDe                                                                bfml>1                       Iu               C<head>5    <title>    用户中心</title><body><div         class="all"><div>10                                  <img    src="mages/user.jpg"alt="用户图像"/>12      <div      class="info">13                                 <p>用户姓名：</p>14                                 <p>学习进度：</p><p>兴趣爱好：</p>16                                 <p>参与的群：</p> 17</div>19  </body>20    </html>
<IdocfyDe                                                                bfml>
1                       Iu               C
<head>
5    <title>    用户中心</title>
<body>
<div         class="all">
<div>
10                                  <img    src="mages/user.jpg"alt="用户图像"/>
12      <div      class="info">
13                                 <p>用户姓名：</p>
14                                 <p>学习进度：</p>
<p>兴趣爱好：</p>
16                                 <p>参与的群：</p> 17</div>
19  </body>
20    </html>
运行例4-9,效果如图4-18所示。
4. 定义CSS  样式
搭建完页面的结构后，下面使用CSS 对页面的样式进行修饰。本节采用从整体到局部的方 式实现图4 - 13所示的效果，具体如下。
(1)定义基础样式
/“重置浏览器的默认样式+/body,p,imgl     padding:0;marqin:0;border:0;)                                 /“重置浏览器的默认样式+/body,p,imgl     padding:0;marqin:0;border:0;)                                 
/“重置浏览器的默认样式+/
body,p,imgl     padding:0;marqin:0;border:0;)                                 
(2)整体控制最外层大盒子
7*整体控制最外层大盒子7.all(width:150px;height:278px;marqin:50px     auto;7*整体控制最外层大盒子7.all(width:150px;height:278px;marqin:50px     auto;
7*整体控制最外层大盒子7
.all(
width:150px;
height:278px;
marqin:50px     auto;
86     HTML+CSS+JavaScript    网页制作案例教程(第2版)
font-family:"    微软雅黑"; font-size:16px;font-family:"    微软雅黑"; font-size:16px;
font-family:"    微软雅黑"; font-size:16px;
(3)控制“用户资料”模块
.Info  pl
width:138px;
height:33px;height:33px;line-height:33px;
height:33px;
border:lpx  solid  #2E3138; margin-top:2px;
padding-left:10px;
上面的代码用于控制“用户资料”模块中的段落文本。其中，第6行代码 “margin-lop:      用于使“用户资料”与“用户图像”,以及“用户资料”中的各个段落拉开一定的距离。 行代码 “padding-left:10px;”     用于使每个段落前都有一定的留白。
◎用户中心            ×  X(  今 C   ①文件|D:/案例源弱/chaptor01/rLr-☆θ用户姓名 ：学习进度：       兴趣爱好：       参与的群：       ◎用户中心            ×  X(  今 C   ①文件|D:/案例源弱/chaptor01/rLr-☆θ用户姓名 ：学习进度：       兴趣爱好：       参与的群：       至此，完成图4- 13所示“用户中心”界面的 CSS 样式部分。刷新例4-9所在的页面， 果如图4- 19所示。
◎用户中心            ×  X
(  今 C   ①文件|D:/案例源弱/chaptor01/rLr-☆θ
用户姓名 ：
学习进度：       
兴趣爱好：       
参与的群：       
⑤用户中心             ×+
D  回 2
←→C ①文件|0:/案例源码/chapter04/exa… ·☆e:
用户姓名：
学习进度：
兴趣爱好：
参与的群：
图4-18 HTML结构页面效果                图4-19 “用户中心”页面最终效果
4.3     【案例9】咖啡店banner
案例描述
随着人们生活水平的提高以及生活节奏的加快，咖啡走进了人们的日常生活，优雅的喷 店也逐渐成为人们商务、休闲的首选场所。本节将使用图4-20、图4-21所示的素材，结合 子模型的背景属性，制作一款“咖啡店banner”,其效果如图4- 22所示。
图4-20 背景图像素材
WITAMY  WAS
WSWIECIEKAWY
antatttm                        ettt
tetaott                                                        tatu                                   wtst
ttsstetaravtvuta
图4-21 图像素材
第4章 运用盒子模塑划分网页模块     87
图4-22 “咖啡店banner”效果展示
知识引入
1. 设置背景颜色
在 CSS 中，网页元素的背景颜色使用background-color 属性来设置，其属性值与文本颜色 的取值一样，可使用预定义的颜色值、十六进制颜色值#RRCGBB 或 RCB 代码 rgb(r,g.b)。 background-color       的 默 认 值 为transparent,      即背景透明，这时子元素会显示其父元素的背景。
了 解 了 背 景 颜 色 属 性background-color,      下面通过 一 个案例来演示其用法。新建HTML  页 面 、 在页面中添加标题和段落文本，然后通过 background-color  属性控制标题标签<h2>和主休标签 <body> 的背景颜色，如例4-10所示。
例4 - 10 example10.html
1     <!doctype     html>2     <html>3    <head>4     <meta           charset="utf-8">5  <title> 背景颜色</title>6    <style           type="text/css">7    body(background-color:#CCC;)                /*设置网页的背景颜色*/ font-family:"      微软雅黑";10                    color;#EFE;1l                     background-color:#36C;                           /*设置标题的背景颜色*/12    }13        </style>14     </head>15   <body>16  <h2>短歌行</h2>17  <p>对酒当歌，人生几何!譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧?唯有杜康。青青子衿，悠悠我心。 但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，歧瑟吹笙。明明如月，何时可餍?忧从中来，不可断绝。越陌度阡， 枉用相存。契阔谈越，心念旧恩。月明星稀，岛鹊南飞。绕树三匝，何枝可依?山不厌高，海不厌深。周公吐哺，天下归心。 </p>18    </body> 19</html>1     <!doctype     html>2     <html>3    <head>4     <meta           charset="utf-8">5  <title> 背景颜色</title>6    <style           type="text/css">7    body(background-color:#CCC;)                /*设置网页的背景颜色*/ font-family:"      微软雅黑";10                    color;#EFE;1l                     background-color:#36C;                           /*设置标题的背景颜色*/12    }13        </style>14     </head>15   <body>16  <h2>短歌行</h2>17  <p>对酒当歌，人生几何!譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧?唯有杜康。青青子衿，悠悠我心。 但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，歧瑟吹笙。明明如月，何时可餍?忧从中来，不可断绝。越陌度阡， 枉用相存。契阔谈越，心念旧恩。月明星稀，岛鹊南飞。绕树三匝，何枝可依?山不厌高，海不厌深。周公吐哺，天下归心。 </p>18    </body> 19</html>
1     <!doctype     html>
2     <html>
3    <head>
4     <meta           charset="utf-8">
5  <title> 背景颜色</title>
6    <style           type="text/css">
7    body(background-color:#CCC;)                /*设置网页的背景颜色*/ font-family:"      微软雅黑";
10                    color;#EFE;
1l                     background-color:#36C;                           /*设置标题的背景颜色*/
12    }
13        </style>
14     </head>
15   <body>
16  <h2>短歌行</h2>
17  <p>对酒当歌，人生几何!譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧?唯有杜康。青青子衿，悠悠我心。 但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，歧瑟吹笙。明明如月，何时可餍?忧从中来，不可断绝。越陌度阡， 枉用相存。契阔谈越，心念旧恩。月明星稀，岛鹊南飞。绕树三匝，何枝可依?山不厌高，海不厌深。周公吐哺，天下归心。 </p>
18    </body> 19</html>
在 例 4 - 1 0 中 ， 通 过background-color     属性分别控制标题和网页主体的背景颜色。
运行例4-10,效果如图4-23所示。
在图4-23中，标题文本的背景颜色为红 色，段落文本显示父元素 body  的背景颜色。 这是由于未对段落标签<p> 设置背景颜色，其 默认属性值为 transparent(显示透明色),所 以段落将显示其父元素的背景颜色。
2. 设置背景图像
背景不仅可以设置为某种颜色，还可以
◎H昌段色 -→    C
短  歌  行
回
x   +
①文件|0:/案例事码/chapterOL′esE**  ☆       
对酒当歌，人生几何!譬如朝露，去日苦多、慨当以悼.忧思难息， 何以解忧7唯有杜康，冑臂子衿，悠感段心，但为君故，冗吟至今。 呦助兜鸣，食野之苹，伐有嘉实，鼓吹笙，明明如月，何助可摄7   优从中染，不可断绝，越随度阡，用相白，契词谈施.心念旧恩，
月朗里隔，乌鹃南飞。崂树三匝，何枝可依7山不厌高，海不厌深 周公吐咖.天下归心，
图4-23 设置背景颜色
88     HTML+CSS+JavaScript   网页制作案例数程(第2版)
将图像作为标签的背景。在CSS 中通过background-image 属性设置背景图像。
以例4- 10为基础，准备一张背景图像，如图4-24所示，将图像放在example10hte 所在的文件夹中，然后更改body 元素的CSS 样式代码：
bodylbackground-color:#CCC;                        /设置网页的背景颜色 ·/background-imageiurl(Lmages/bg.pg);                  /*设置网页的背景图像*/bodylbackground-color:#CCC;                        /设置网页的背景颜色 ·/background-imageiurl(Lmages/bg.pg);                  /*设置网页的背景图像*/
bodyl
background-color:#CCC;                        /设置网页的背景颜色 ·/
background-imageiurl(Lmages/bg.pg);                  /*设置网页的背景图像*/
保存HTML页面，刷新网页，效果如图4-25所示。
图4-24 准备的背景图像
①文件 | D:/聚例源码/cbapter04/ezns…短歌行对酒当歌，人生几何!譬如朝冠，去日苦多，低当以炉，忧思遵启， 何以解忧7唯有杜康.胃胄子矜，悠能我心。但为雹故，沉吟至今， 呦呦鹿鸣，食野之平，我有鼎宾，鼓吹笙。明明如月，何时可接? 忧从中来，不可断绝，越陌度阡，枉用相存。契调谈臧，心念旧恩， 月明里稀，乌鸱南飞，绕树三匝，何枝可依7山不厌高，海不厌深， 周公吐咖，天下归心.①文件 | D:/聚例源码/cbapter04/ezns…短歌行对酒当歌，人生几何!譬如朝冠，去日苦多，低当以炉，忧思遵启， 何以解忧7唯有杜康.胃胄子矜，悠能我心。但为雹故，沉吟至今， 呦呦鹿鸣，食野之平，我有鼎宾，鼓吹笙。明明如月，何时可接? 忧从中来，不可断绝，越陌度阡，枉用相存。契调谈臧，心念旧恩， 月明里稀，乌鸱南飞，绕树三匝，何枝可依7山不厌高，海不厌深， 周公吐咖，天下归心.
①文件 | D:/聚例源码/cbapter04/ezns…
短歌行
对酒当歌，人生几何!譬如朝冠，去日苦多，低当以炉，忧思遵启， 何以解忧7唯有杜康.胃胄子矜，悠能我心。但为雹故，沉吟至今， 呦呦鹿鸣，食野之平，我有鼎宾，鼓吹笙。明明如月，何时可接? 忧从中来，不可断绝，越陌度阡，枉用相存。契调谈臧，心念旧恩， 月明里稀，乌鸱南飞，绕树三匝，何枝可依7山不厌高，海不厌深， 周公吐咖，天下归心.
图4-25 设置网页的背景图像
在图4 - 25 中，背景图像自动沿着水平和竖直两个方向平铺，充满整个网页，并且覆 <body> 的背景颜色。
3. 设置背景图像平铺
默认情况下，背景图像会自动向水平和竖直两个方向平铺。如果不希望图像平铺，或 沿着一个方向平铺，可以通过background-repeat属性来控制，该属性的取值如下。
●   repeat: 沿水平和竖直两个方向平铺(默认值)。
●no-repeat:     不平铺(图像位于元素的左上角，只显示一次)。
●repeat-x:     只沿水平方向平铺。
●   repeat-y: 只沿竖直方向平铺。
例如，希望 上面例子中的图像只沿着水平方向平铺，可以将body 元素的CSS 代码更改妇
bodylbackground-color:#CCC;                          /*设置网页的背景颜色*/background-image:url(images/bg.jpg);                   /*设置网页的背景图像*/background-repeat:repeat-x;              /*设置背景图像的平铺*/bodylbackground-color:#CCC;                          /*设置网页的背景颜色*/background-image:url(images/bg.jpg);                   /*设置网页的背景图像*/background-repeat:repeat-x;              /*设置背景图像的平铺*/
bodyl
background-color:#CCC;                          /*设置网页的背景颜色*/
background-image:url(images/bg.jpg);                   /*设置网页的背景图像*/
background-repeat:repeat-x;              /*设置背景图像的平铺*/
保 存HTML 页面，刷新页面，效果如图4-26 所示。
在图4- 26中，图像只沿着水平方向平铺， 背景图像覆盖的区域就显示背景图像，背景图像 没有覆盖的区域按照设置的背景颜色显示。可见 当背景图像和背景颜色同时存在时，背景图像优 先显示。
4. 设置背景图像的位置
如果将背景图像的平铺属性background-repeat   定义为no-repeat,     图像将显示在元素的左上角， 如例4- 11所示。
三
背晁颜色              X     +
← →  C    ①文件|D:/案例源码/chapter04/eran一☆  θ
短歌行
对酒当歌，人生几何1磐如朝露，去日苦多，慨当以慷，忧思彭
何以解忧7唯有杜康，青青子拎，悠悠我心。但为君故，沉吟 呦呦鹿鸣.食野之平，我有嘉官，鼓逛吹笙。明明如月，何时可 优从中来，不可断绝、越陌度旰，枉用相存，契酒谈蹈，心王 月明星稀，乌鹊南飞，绕树三匝，何枝可依?山不厌高，海下把 周公吐哺，天下归心.
图4-26 设置背景图像水平平铺
8989第4章 运用盒子模型划分网页模块
89
例 4 - 1 1  example11.html
1   <IdGatYpu            hml2    <html> <head>4  <meta   charBC≈"utr-B"25  <title  投置背景图像的位置</title>6    <style       type="LBxL/ca6">backqround-1mage:ur1(he.pna))backaround-cepeat!no-repeat)1011        </style>12     </head>13     <body14  <h2>三国奇闻趣事</h2>15<p>   有一次刘备下令蜀中禁止酿酒，结果抓了一户家里有煎酒器材的居民，这户居民被泊了郸。恰好有一天颁骊和刘备 乘车出巡。路上见了一男一女，简弧对刘备说：这两个人准备做非法勾当，为什么不抓起来?刘备问：你怎么知道的呢7简 驱说：你看啊，它们有作案的工具，不是和有酿酒器材那家人一样吗?刘备听了后笑了笑，赶絮把抓的人放了，</p>16   </body>17</html>/*设置背景图像不平 ·//设置网页的背景图像 ·/1   <IdGatYpu            hml2    <html> <head>4  <meta   charBC≈"utr-B"25  <title  投置背景图像的位置</title>6    <style       type="LBxL/ca6">backqround-1mage:ur1(he.pna))backaround-cepeat!no-repeat)1011        </style>12     </head>13     <body14  <h2>三国奇闻趣事</h2>15<p>   有一次刘备下令蜀中禁止酿酒，结果抓了一户家里有煎酒器材的居民，这户居民被泊了郸。恰好有一天颁骊和刘备 乘车出巡。路上见了一男一女，简弧对刘备说：这两个人准备做非法勾当，为什么不抓起来?刘备问：你怎么知道的呢7简 驱说：你看啊，它们有作案的工具，不是和有酿酒器材那家人一样吗?刘备听了后笑了笑，赶絮把抓的人放了，</p>16   </body>17</html>/*设置背景图像不平 ·//设置网页的背景图像 ·/
1   <IdGatYpu            hml
2    <html> <head>
4  <meta   charBC≈"utr-B"2
5  <title  投置背景图像的位置</title>
6    <style       type="LBxL/ca6">
backqround-1mage:ur1(he.pna))
backaround-cepeat!no-repeat)
10
11        </style>
12     </head>
13     <body
14  <h2>三国奇闻趣事</h2>
15<p>   有一次刘备下令蜀中禁止酿酒，结果抓了一户家里有煎酒器材的居民，这户居民被泊了郸。恰好有一天颁骊和刘备 乘车出巡。路上见了一男一女，简弧对刘备说：这两个人准备做非法勾当，为什么不抓起来?刘备问：你怎么知道的呢7简 驱说：你看啊，它们有作案的工具，不是和有酿酒器材那家人一样吗?刘备听了后笑了笑，赶絮把抓的人放了，</p>
16   </body>
17</html>
/*设置背景图像不平 ·/
/设置网页的背景图像 ·/
在例4-11中，将主体元素<body>的背景图像定义为no-repeat 不平铺。
运行例4-11.效果如图4-27所示，背景图像位于HTML 页面的左上角，即<body>元素的 左 上 角 。
如果希望背景图像出现在其他位置，就需要使用另一个 CSS 属性 background-position 设置
背景图像的位置 。
例如，将例4-11中的背景图像定义在页面的右下角，可以更改body元素的CSS 样式代码：
bodylbackground-⊥mage!url(images/he.png);                         /#设置网页的背景图像 ·/background-repeat:no-repeat;                              /+设置背景图像不平铺/background-posltion:right                       bottom;/*设置背景图像的位置*/bodylbackground-⊥mage!url(images/he.png);                         /#设置网页的背景图像 ·/background-repeat:no-repeat;                              /+设置背景图像不平铺/background-posltion:right                       bottom;/*设置背景图像的位置*/
bodyl
background-⊥mage!url(images/he.png);                         /#设置网页的背景图像 ·/
background-repeat:no-repeat;                              /+设置背景图像不平铺/
background-posltion:right                       bottom;/*设置背景图像的位置*/
保存HTML 文件，刷新网页，效果如图4-28所示，背景图像出现在页面的右下角。
◎设盟背第图图mO盘              +
C    ①文件|DI/靠例源码/chaptar0L/ein:.  ☆   θ
2
i
三 国 奇 闻 趣 事
有一次下令而中禁止酿酒，结果爪了一户家里有酸酒器材的黑
民.这台烟民被治了罪。恰好有一天简雍和刘备乘车出巡，路上见了 一月一女，简隋对刘备说：这两个人准备做非法勾当，为什么不肌起 来7刘备问：你怎么知道的呢7简班说：你看啊，它们有作案的工  具，不是和有酸酒酬材那家人一样吗7刘备听了后笑了笑，赶景把抓 的人放了。
图4-27 背景图像位于HTML 页面的左上角
回    三回    三识置自条图部的E+ ×
回    三
→  C   ①)文件   D:/案例原码/chapter04/ei-☆I e  1
三国奇闻趣事
有一次刘备下令剪中擎止确酒，结果抓了一户家里有酿酒隔柯的脑 民，这户层民披治了罪。恰好有一天简瘢和刘备乘车出巡路上见了 一男一女，简晰对刘备说：这两个人准备做非法勾当为什么不抓起 来?刘备问：你怎么知道的呢7鸽殡说：你看响扫有作察的
具，不星和有酸酒器材那人一样吗7刘备听了后了笑，赶素把抓 的人放了，
图4-28 背景图像定义在页面的右下角
在 CSS  中 ，background-position        属性的值通常设置为两个，中间用空格隔开，用于定义背景 图像在元素的水平和垂直方向的坐标，例如上面的 “right            bottom” 。background-position 属 性 的 默 认 值 为 “ 0 0 ” 或 “top       left”, 即背景图像位于元素的左上角。 background-position       属 性 的 取 值 有多种 ， 具体如下 。
(1)使用不同单位(最常用的是像素)的数值：直接设置图像左上角在元素中的坐标，例 如  "background-position:20px            20px;"。
(2)使用预定义的关键字：指定背景图像在元素中的对齐方式。
● 水 平 方 向 值 ：left、center、right。
● 垂 直 方 向 值 ：top、center、bottom。
两个关键字的顺序任意，若只有 一 个值则另 一 个默认为center 。 例 如 ：
90    HTML+CSS+JavaScript  网页制作案例教程(第2版)
center   相当于 center    center(居中显示)top     相当于 top  center 或 center   top(水平居中、上对齐)center   相当于 center    center(居中显示)top     相当于 top  center 或 center   top(水平居中、上对齐)
center   相当于 center    center(居中显示)
top     相当于 top  center 或 center   top(水平居中、上对齐)
(3)使用百分比：按背景图像和元素的指定点对齐。
●0%0%表示图像左上角与元素的左上角对齐。
●50%50%表示图像50%50%的中心点与元素50%50%的中心点对齐。
●20%30%表示图像20%30%的点与元素20%30%的点对齐。
●100%100%表示图像的右下角与元素的右下角对齐。
如果取值只有一个百分数，将作为水平值，垂直值则默认为50%。
下面将 background-position的值定义为像素值，来控制例4-11中背景图像的位置， b 素的CSS 样式代码如下。
background-image:url(images/he.png);                           /+ 设置网页的背景图像*/background-repeat:no-repeat;                                      /+设置背景图像不平铺*1background-position:50px             80px;background-image:url(images/he.png);                           /+ 设置网页的背景图像*/background-repeat:no-repeat;                                      /+设置背景图像不平铺*1background-position:50px             80px;
background-image:url(images/he.png);                           /+ 设置网页的背景图像*/
background-repeat:no-repeat;                                      /+设置背景图像不平铺*1
background-position:50px             80px;
保存 HTML 页面，再次刷新网页，效 果如图4-29所示。
在图4-29中，图像距离body 元素的左 边缘为50px,  距离上边缘为80px。
5. 设置背景图像固定
当网页中的内容较多时，如果希望图像 会随着页面滚动条的移动而移动，就需要设 置background-attachment属性。background-  attachment属性有两个属性值，分别代表不 同的含义，具体解释如下。
⑤设营臂多图像的位盟
三国奇闻趣事
有一次刘备下令蜀中舞止酒，结果抓了一户家里有甜运感
民，这户居兵坡治了罪。恰好有一天面雍和刘备乘车出巡。
一男一女，滴刘备说：这两个人准备做非法勾当，为什么 来?刘备问：么知道的呢?简雍说：你看啊，它们有作题 具，不是和有疆材那家人一样吗?如备听了后笑了笑，远耐 的人放了。
图4-29 控制背景图像的位置
● scroll:图 像 随 页 面 一 起 滚 动 ( 默 认 值 ) 。
●fixed: 图像固定在屏幕上，不随页面滚动。
例如下面的示例代码，就表示背景图像在距离 body元素左边缘50px、上边缘80px 的位 固 定 。
body(
background-image:url(images/he.png);/* background-repeat:no-repeat;
background-position:50px                   80px;
background-attachment:fixed;
设置网页的背景图像*/ /*设置背景图像不平铺*/
/*用像素值控制背景图像的位置*/ /*设置背景图像的位置固定*/
6. 综合设置元素的背景
与边框属性一样，在CSS 中背景属性也是一个复合属性，可以将背景相关的样式都综合 义在一个复合属性background中。使用background属性综合设置背景样式的语法格式如下： background:背景色url("图像")平铺定位固定；       
在上面的语法格式中，各样式顺序任意，中间用空格隔开，不需要的样式可以省略。但 际工作中通常按照背景色、url("图像")、平铺、定位、固定的顺序来书写。
例如，下面的示例代码。
background:url(he,png)no-repeat    50px    80px    fixed;                                 background:url(he,png)no-repeat    50px    80px    fixed;                                 
background:url(he,png)no-repeat    50px    80px    fixed;                                 
上 述 代 码 省 略 了 背 景 颜 色 样 式 ，
body{
background-position:50px    80px; background-attachment:fixed;background-position:50px    80px; background-attachment:fixed;background-image:url(images/he.png);/* background-repeat:no-repeat;
background-position:50px    80px; background-attachment:fixed;
等 价 于 ：
设置网页的背景图像*/ /*设置背景图像不平铺*/
/*用像素值控制背景图像的位置*/ /*设置背景图像的位置固定*/
9191第4章 运用盒子模型划分网页模块
91
案例实现
1. 结构分析
图4-22所示的“咖啡店 banner”可以使用内外嵌套的两个盒子(div) 来定义，结构如图 4-30所示。
外层盒子(div)     
→内层盒子(div)
图4-30  "咖啡店banner" 结构
2. 样式分析
实现图4-22所示样式的思路如下。
①给外层盒子设置宽度、高度、背景图像等样式。需要注意的是，背景图像需要设置为沿 着水平方向平铺 。
②给内层盒子设置宽度、高度、背景图像样式。需要注意的是，背景图像需要设置为不平 铺，且距离外层盒子的左边缘和上边缘都有 一 定的距离。
3. 制作页面结构
根据上面的分析，使用相应的HTML标签来搭建网页结构，如例4-12所示。
例4-12 example12.html
1     <!doctype     html>2    <html>3  <head>4   <meta             charset="utf-8">5 <title>咖啡店banner</title> 6  </head>7    <body>10</div>11   </body>12     </html>1     <!doctype     html>2    <html>3  <head>4   <meta             charset="utf-8">5 <title>咖啡店banner</title> 6  </head>7    <body>10</div>11   </body>12     </html>
1     <!doctype     html>
2    <html>
3  <head>
4   <meta             charset="utf-8">
5 <title>咖啡店banner</title> 6  </head>
7    <body>
10</div>
11   </body>
12     </html>
运行例4-12,此时页面中不显示任何元素。
4. 定义 CSS  样式
搭建完页面的结构后，下面使用CSS对页面的样式进行修饰。本节采用从整体到局部的方 式实现图4-22所示的效果，具体如下。
(1)定义基础样式
/*将页面中所有元素的内外边距设置为0*/(padding:0;margin:0;)                                                                                                                                      /*将页面中所有元素的内外边距设置为0*/(padding:0;margin:0;)                                                                                                                                      
/*将页面中所有元素的内外边距设置为0*/
(padding:0;margin:0;)                                                                                                                                      
(2)控制外层盒子样式
1        .outer(           /*  设置外层盒子的样式*7 width:900px;
height:344px;
margin:50px        auto;
5                     background:url(images/bg.png)repeat-x;
92     HTML+CSS+JavaScript   网页制作案例教程(第2版)
在上面的代码中，第5行代码 “background:url(images/bg.png)repent-x;”     用 于 给 外Z 加水平平铺的背景图像。
(3)控制内层盒子样式
1        .inner(            / 设置内层盒子的样式*7width:900px;height:344px;background:url(images/coffee.png)no-repeat        center        30px;1        .inner(            / 设置内层盒子的样式*7width:900px;height:344px;background:url(images/coffee.png)no-repeat        center        30px;
1        .inner(            / 设置内层盒子的样式*7
width:900px;
height:344px;
background:url(images/coffee.png)no-repeat        center        30px;
在上面的代码中，第4行代码“background:url(images/coffee.png)no-repeat center 30p 于给内层盒子添加不平铺的背景图像，该背景图像位于外层盒子垂直居中且距离外层盒子 边缘30px的位置。
至此，完成图4-22所示“咖啡店banner”   的 CSS 样式部分。刷新例4- 12所在的页面
果如图4-31所示。
图4-31 “咖啡店banner” 最终效果
4.4  【案例10】图标导航栏
案例描述
导航菜单是网站的重要组成部分，关系着网站的可用性和用户体验。 一个有吸引力的困 导航栏不仅可以给用户带来良好的体验，而且使网站看上去更加生动、有趣。本节将通过  元素”与“行内元素”间的转换来制作一款图标导航栏，其效果如图4-32所示。
图4-32 图标导航栏
知识引入
1. 元素类型
HTML 标签语言提供了丰富的标签，用于组织页面结构。为了使页面结构的组织更加轻 合 理 ，HTML  标签被定义成了不同的类型， 一般分为块元素和行内元素，也称为块标签和行! 标签，了解它们的特性可以为使用CSS 设置样式和布局打下基础。
( 1 ) 块 元 素
块元素在页面中以区域块的形式出现，其特点是每个块元素通党邦入 … ·
第 4 章 运用盘子横甲圳分网页模块
可以对其设置宽度、高度、对齐等属性、常用于网页布局和网页结构的搭建。
常见的块元素有<hl>～<h6> 、<p> 、<div> 、<ul> 、<ol> 、<li>     等，其中<div>标签是最典型 的块元素。
(2)行内元素
行内元素也称内联元素或内顾元素，其特点是不会占据一行，也不强迫其他的标签在新的 一行显示。 一个行内标签通常会和其他行内标签显示在同一行中，它们不占有独立的区域，仅 仅靠自身的文本内容大小和图像尺寸来支撑结构， 一般不可以设置宽度、高度、对齐等属性， 常用于控制页面中文本的样式。
常见的行内元素有<strong> 、<h> 、<em> 、<i> 、<del> 、<9> 、<ins> 、<l> 、<> 、<span>        等 . 其 中<span> 标签是最典型的行内元素。
下面通过一个案例来进一步认识块元素和行内元素，如例4-13所示。
例4-13 oxample13.html
1      <Idoctypo      html>2    <html>4  <meta charset一"utf-8"><title>  块元素和行内元素</t1tlo><atyle                       type-"toxt/caz">日         background:#39F;wIdth:350px;10                 helaht:50px;11                 text-allgn:center; 1213        p(backuround:060:)14   strenal15                 backoround:#66F;16                 width:360px;17                 helght:50px18                 text-allgn:center; 1920                  em(background:#FF0:)21     del(background:#CCC;)22            </style>23 </head>24     <body>26  <p>p 标签定义的文本</p>28<strong>strong       标签定义的文本</strong>29 <em>em 标签定义的文本</em>30     <del>del标签定义的文本</del>31   </P>32 </body> 33</html>/*定义p 的背景颜色为绿色 ·//*定义strong  标签的背景颜色为紫色*/ /*定义strong      标签的宽度为360px+//*定义strong  标签的高度为50px*//*定义strong  标签的文本水平对齐方式为居中+//*定义em 的背景颜色为黄色*/  /*定义del 的背景颜色为灰色*/标签的宽度为350px*/标签的高度为5Opx*/标签的文本水平对齐方式为居中 ·//*定义h2 八定义h2/*定义h2/*定义h2 标签的背景颜色为青色 ·/h2(1      <Idoctypo      html>2    <html>4  <meta charset一"utf-8"><title>  块元素和行内元素</t1tlo><atyle                       type-"toxt/caz">日         background:#39F;wIdth:350px;10                 helaht:50px;11                 text-allgn:center; 1213        p(backuround:060:)14   strenal15                 backoround:#66F;16                 width:360px;17                 helght:50px18                 text-allgn:center; 1920                  em(background:#FF0:)21     del(background:#CCC;)22            </style>23 </head>24     <body>26  <p>p 标签定义的文本</p>28<strong>strong       标签定义的文本</strong>29 <em>em 标签定义的文本</em>30     <del>del标签定义的文本</del>31   </P>32 </body> 33</html>/*定义p 的背景颜色为绿色 ·//*定义strong  标签的背景颜色为紫色*/ /*定义strong      标签的宽度为360px+//*定义strong  标签的高度为50px*//*定义strong  标签的文本水平对齐方式为居中+//*定义em 的背景颜色为黄色*/  /*定义del 的背景颜色为灰色*/标签的宽度为350px*/标签的高度为5Opx*/标签的文本水平对齐方式为居中 ·//*定义h2 八定义h2/*定义h2/*定义h2 标签的背景颜色为青色 ·/h2(
1      <Idoctypo      html>
2    <html>
4  <meta charset一"utf-8">
<title>  块元素和行内元素</t1tlo>
<atyle                       type-"toxt/caz">
日         background:#39F;
wIdth:350px;
10                 helaht:50px;
11                 text-allgn:center; 12
13        p(backuround:060:)
14   strenal
15                 backoround:#66F;
16                 width:360px;
17                 helght:50px
18                 text-allgn:center; 19
20                  em(background:#FF0:)
21     del(background:#CCC;)
22            </style>
23 </head>
24     <body>
26  <p>p 标签定义的文本</p>
28<strong>strong       标签定义的文本</strong>
29 <em>em 标签定义的文本</em>
30     <del>del标签定义的文本</del>
31   </P>
32 </body> 33</html>
/*定义p 的背景颜色为绿色 ·/
/*定义strong  标签的背景颜色为紫色*/ /*定义strong      标签的宽度为360px+/
/*定义strong  标签的高度为50px*/
/*定义strong  标签的文本水平对齐方式为居中+/
/*定义em 的背景颜色为黄色*/  /*定义del 的背景颜色为灰色*/
标签的宽度为350px*/
标签的高度为5Opx*/
标签的文本水平对齐方式为居中 ·/
/*定义h2 八定义h2
/*定义h2
/*定义h2 标签的背景颜色为青色 ·/
h2(
在例4- 13中，第25~31行代码中使用 了不同类型的标签，例如使用块标签<h2>、
<p> 和行内标签<strong>、<em>、<del> 分别 定义文本，然后对不同的标签应用不同的背 景颜色，同时，对<h2>和<strong>应用相同 的宽度、高度和对齐属性。
运行例4- 13,效果如图4- 33所示。
从图4-33可以看出，不同类型的元素在
h2标签定义的文本h2标签定义的文本
h2标签定义的文本
trona 储盖义的文 em 正走义的文de  级定义的文□
图4 - 33  块元素和行内元素的显示效果
94          HTML+CSS+JavaScript 网页制作案例教程(第2版)
页面中所占的区域不同。块元素<h2> 和<p> 各自占据一个矩形区域，依次竖直排列。然面   素<strong> 、<em>和<del>排列在同一行。可见块元素通常独占一行，可以设置宽度、高度  属性，而行内元素通常不独占一行，不可以设置宽度、高度和对齐属性。行内元素可以嵌会， 元素中，而块元素不可以嵌套在行内元素中。
注意；注意；
注意；
在行内元素中有几个特殊的标签，例如<img/>   和<input/>,    可以设置其宽度、高度初 属性，有些资料会称它们为行内块元素。
2.<span>        标签
span 中文译为“范围”,作为容器标签被广泛应用在HTML  语言中。与<div>标签不同的 <span>是行内元素，仅作为只能包含文本和各种行内标签的容器，例如加粗标签<strong.
标 签<em>等 。<span> 标签中还可以嵌套多层<span>。
<span> 标签常用于定义网页中某些特殊显示的文本，可配合class属性使用。<span> 桥 身没有结构特征，只有在应用样式时，才会产生视觉上的变化。当其他行内标签都不合過 就可以使用<span>标签。
下面通过一个案例来演示<span> 标签的使用，如例4-14所示。
例4-14 example14.html
1    <!doctype    html>2   <html>3  <head>4   <meta      charset="utf-8">5  <title>span标签的使用</title>6    <style    type="text/css">/*设置当前div  中文本的通用样式*/font-family:"    微软雅黑";font-size:16px;10                  color:099; 1112   #header    .main(                             /*控制第1个span  中的特殊文本*/13                  color:#63E;14                 font-size:20px;15                 padding-right:20px; 1617    fheader    .art{                            /*控制第2个span 中的特殊文本*118                  color:#F33;19                 font-size:18px; 2021</style> 22</head>23 <body>24 <div id="header">25<span   class="main">木偶戏</span> 是中国一种古老的民间艺术，<span  class="art">是中国乡土艺术制 宝。</span>26   </div> 27</body>28  </html>⑤pu标益的使用       ×+□国←→C ①文件|D:/素防源码/chapter04/erar-☆θ木偶戏 是中国一种古者的民间艺术，是中国乡土艺术的璃 宝 ，在图4-34中，特殊显示的文本“木偶戏”            图4-34 <span>标签的使用在例4-14中，第24~26行代码使用<div>标签定义文本的通用样式。然后在<div>中嵌套 两 对<span> 标签，用<span> 标签控制特殊显示 的文本，并通过CSS 设置样式。运行例4- 14,效果如图4- 34所示。1    <!doctype    html>2   <html>3  <head>4   <meta      charset="utf-8">5  <title>span标签的使用</title>6    <style    type="text/css">/*设置当前div  中文本的通用样式*/font-family:"    微软雅黑";font-size:16px;10                  color:099; 1112   #header    .main(                             /*控制第1个span  中的特殊文本*/13                  color:#63E;14                 font-size:20px;15                 padding-right:20px; 1617    fheader    .art{                            /*控制第2个span 中的特殊文本*118                  color:#F33;19                 font-size:18px; 2021</style> 22</head>23 <body>24 <div id="header">25<span   class="main">木偶戏</span> 是中国一种古老的民间艺术，<span  class="art">是中国乡土艺术制 宝。</span>26   </div> 27</body>28  </html>⑤pu标益的使用       ×+□国←→C ①文件|D:/素防源码/chapter04/erar-☆θ木偶戏 是中国一种古者的民间艺术，是中国乡土艺术的璃 宝 ，在图4-34中，特殊显示的文本“木偶戏”            图4-34 <span>标签的使用在例4-14中，第24~26行代码使用<div>标签定义文本的通用样式。然后在<div>中嵌套 两 对<span> 标签，用<span> 标签控制特殊显示 的文本，并通过CSS 设置样式。运行例4- 14,效果如图4- 34所示。
1    <!doctype    html>
2   <html>
3  <head>
4   <meta      charset="utf-8">
5  <title>span标签的使用</title>
6    <style    type="text/css">
/*设置当前div  中文本的通用样式*/
font-family:"    微软雅黑";
font-size:16px;
10                  color:099; 11
12   #header    .main(                             /*控制第1个span  中的特殊文本*/
13                  color:#63E;
14                 font-size:20px;
15                 padding-right:20px; 16
17    fheader    .art{                            /*控制第2个span 中的特殊文本*1
18                  color:#F33;
19                 font-size:18px; 20
21</style> 22</head>
23 <body>
24 <div id="header">
25<span   class="main">木偶戏</span> 是中国一种古老的民间艺术，<span  class="art">是中国乡土艺术制 宝。</span>
26   </div> 27</body>
28  </html>
⑤pu标益的使用       ×+
□国
←→C ①文件|D:/素防源码/chapter04/erar-☆θ
木偶戏 是中国一种古者的民间艺术，是中国乡土艺术的璃 宝 ，
在图4-34中，特殊显示的文本“木偶戏”            图4-34 <span>标签的使用
在例4-14中，第24~26行代码使用<div>
标签定义文本的通用样式。然后在<div>中嵌套 两 对<span> 标签，用<span> 标签控制特殊显示 的文本，并通过CSS 设置样式。
运行例4- 14,效果如图4- 34所示。
第 4 章 运用盒子模型划分网页模块
和“是中国乡土艺术的瑰宝。”,都是通过CSS 控制<span>标签设置的。
需 要 注 意 的 是 ，<div> 标 签 可 以 内 嵌<span>  标 签 ， 但 是<span>  标 签 中 却 不 能 嵌 套<div> 标 签 。 可以将<div>和<span>分别看作一个大容器和小容器，大容器内可以放下小容器，但是小容器内 却放不下大容器。
3. 元素类型的转换
网页是由多个块元素和行内元素构成的盒子排列而成的。如果希望行内元素具有块元素的 某些特性，例如可以设置宽度和高度，或者需要块元素具有行内元素的某些特性，例如不独占 一 行 排 列 ， 可 以 使 用display   属性对元素的类型进行转换。
display 属性常用的属性值及含义如下。
●inlinc:       此 元 素 将 显 示 为 行 内 元 素 ( 行 内 元 素 默 认 的 display    属性值)。
●block:   此元素将显示为块元素(块元素默认的display 属性值)。
●      inlinc-block: 此元素将显示为行内块元素，可以为其设置宽度、高度和对齐等属性，但是 该元素不会独占 一 行。
●nonc:   此元素将被隐藏，不显示也不占用页面空间，相当于该元素不存在。
使用display 属性可以对元素的类型进行转换，使元素以不同的方式显示。下面通过一个案 例来演示display 属性的用法和效果，如例4-15所示。
例4 - 15 example15.html
1      <!doctype      html>4      <meta                            charset="utf-8">5  <title> 元素的转换</title><style           type="text/css">div,spanl                                   /*同时设置div 和 span 的样式*/8                    width:200px;                 /‘宽度/ height:50px;                          /+高度 ·/10                  background:#ECC;                /+背景颜色*/11                  margin:10px;                         /*外边距*/ 12113               .d_one,.d_two{display:inline;)         /*将前两个div   转换为行内元素*/14                     .s_one(display:inline-block;)            /*将第一个span  转换为行内块元素*/15                  .s_three(display:block;}                      /*将第三个 span 转换为块元素*/ 16</style>17   </head>18  <body>19   <div   class="d_one">第 一个div 中的文本</div>20   <div   class="d_two">第二个div 中的文本</div>21    <div    class="d_three">第三个div 中的文本</div>22   <span   class="s_one">第一个 span 中的文本</span>23    <span    class="s_two">第二个span 中的文本</span>24<25nody>      class="s_three">第三个 span 中的文本</span>26</html>1      <!doctype      html>4      <meta                            charset="utf-8">5  <title> 元素的转换</title><style           type="text/css">div,spanl                                   /*同时设置div 和 span 的样式*/8                    width:200px;                 /‘宽度/ height:50px;                          /+高度 ·/10                  background:#ECC;                /+背景颜色*/11                  margin:10px;                         /*外边距*/ 12113               .d_one,.d_two{display:inline;)         /*将前两个div   转换为行内元素*/14                     .s_one(display:inline-block;)            /*将第一个span  转换为行内块元素*/15                  .s_three(display:block;}                      /*将第三个 span 转换为块元素*/ 16</style>17   </head>18  <body>19   <div   class="d_one">第 一个div 中的文本</div>20   <div   class="d_two">第二个div 中的文本</div>21    <div    class="d_three">第三个div 中的文本</div>22   <span   class="s_one">第一个 span 中的文本</span>23    <span    class="s_two">第二个span 中的文本</span>24<2524<25nonody>      class="s_three">第三个 span 中的文本</span>26</html>
1      <!doctype      html>
4      <meta                            charset="utf-8">
5  <title> 元素的转换</title>
<style           type="text/css">
div,spanl                                   /*同时设置div 和 span 的样式*/
8                    width:200px;                 /‘宽度/ height:50px;                          /+高度 ·/
10                  background:#ECC;                /+背景颜色*/
11                  margin:10px;                         /*外边距*/ 121
13               .d_one,.d_two{display:inline;)         /*将前两个div   转换为行内元素*/
14                     .s_one(display:inline-block;)            /*将第一个span  转换为行内块元素*/
15                  .s_three(display:block;}                      /*将第三个 span 转换为块元素*/ 16</style>
17   </head>
18  <body>
19   <div   class="d_one">第 一个div 中的文本</div>
20   <div   class="d_two">第二个div 中的文本</div>
21    <div    class="d_three">第三个div 中的文本</div>
22   <span   class="s_one">第一个 span 中的文本</span>
23    <span    class="s_two">第二个span 中的文本</span>
24<2524<25nonody>      class="s_three">第三个 span 中的文本</span>
26</html>
在例4-15中，定义了3对<div>和 3 对<span>标签，为它们设置相同的宽度、高度、背景 颜 色 和 外 边 距 。 同 时 ， 对 前 两 个<div> 应 用“display:inline;”样 式 ， 使 它 们 从 块 元 素 转 换 为 行 内 元 素 ， 对 第 一 个 和 第 三 个<span> 分 别 应 用“display:inline-block;”和 “display:block;”样 式 ， 使 它们分别转换为行内块元素和行内元素。
运行例4-15,效果如图4-35所示。
从图4-35可以看出，前两个<div>排列在了同一行，靠自身的文本内容支撑其宽高，这是 因为它们被转换成了行内元素。而第一个和第三个<span>则按固定的宽度和高度显示，不同的 是前者不会独占 一 行，而后者独占 一 行，这是因为它们分别被转换成了行内块元素和块元素。
HTML+CSS+JavaScript    网页制作案例教程(第2版)
在上面的例子中，使用display  的相关属性值，可以实现块元素、行内元素和行内坎， 间的转换。如果希望某个元素不被显示，还可以使用“display:none;”进 行 控 制 。 例 如 ， 面例子中的第三个<div> 不被显示，可以在CSS代码中增加如下样式：
.d thzee(display:none;)       7*隐阈第三个div*/.d thzee(display:none;)       7*隐阈第三个div*/
.d thzee(display:none;)       7*隐阈第三个div*/
保存HTML 页面，刷新网页，效果如图4-36所示。
⑤元定的换第一个div中的文本  的二个diy中的文术第三个div中的文本第一个span 中的文本        第二个span 中的文本第三个span中的文本⑤元定的换第一个div中的文本  的二个diy中的文术第三个div中的文本第一个span 中的文本        第二个span 中的文本第三个span中的文本
⑤元定的换
第一个div中的文本  的二个diy中的文术
第三个div中的文本
第一个span 中的文本        第二个span 中的文本
第三个span中的文本
图4-35 元素的转换
⑧元见的陆填
(→C               ① 文庄 | D:/案例酒码/ehapterC4/ez-       女       8
第一个div中的文☆   第二个dlv中的文本
第一个span 中的文本         第二个span 中的文本
第三个span 中的文本第三个span 中的文本
第三个span 中的文本
图4-36 定义某元素display为none后的效果
从图4- 36可以看出，当定义元素的display属 性 为none 时，该元素将从页面消失，不 用页面空间。
注 意 ：注 意 ：
注 意 ：
行内元素只可以定义左右外边距，当定义上下外边距时无效。
案例实现
1. 结构分析
图4-32所示的“图标导航栏”页面由7个导航图标组成，可以通过在大盒子(div)c 套7个小盒子(span)   来实现。图4-32对应的结构如图4-37所示。
span                           spanspan                           spanspan                           span
span                           span
div
图4-37 “图标导航栏”结构
2. 样式分析
实现图4- 32所示样式的思路如下。
① 控 制 大 盒 子(div)     的宽度、高度、背景色、内边距、边框等。
②整体控制小盒子，需要将<span> 转换为行内块元素，然后对其应用宽度、高度和边框样 ③对7个小盒子设置不同的背景图像。
3. 制作页面结构
根据上面的分析，使用相应的HTML  标签来搭建网页结构，如例4- 16所示。
例4-16 example16.html
1     <!doctype     html>2    <html>1     <!doctype     html>2    <html>
1     <!doctype     html>
2    <html>
第 4 章  运用盒子模里划分网页模块     97
3      <head>4    <meta              charset"utf-8">5  <tltle> 图标导航栏</title>6  </head>7    <body>8   <dlv           class="all>9 <span class="one"></span>10 <span class=two"></span>11 <span class="three"></span> 12 <span class="four"></span>   13  <span  class="flve></span>   14 <span clans="slx"></span>15<span  class="seven"></span>16     </div>17   </body>18     </html>3      <head>4    <meta              charset"utf-8">5  <tltle> 图标导航栏</title>6  </head>7    <body>8   <dlv           class="all>9 <span class="one"></span>10 <span class=two"></span>11 <span class="three"></span> 12 <span class="four"></span>   13  <span  class="flve></span>   14 <span clans="slx"></span>15<span  class="seven"></span>16     </div>17   </body>18     </html>
3      <head>
4    <meta              charset"utf-8">
5  <tltle> 图标导航栏</title>
6  </head>
7    <body>
8   <dlv           class="all>
9 <span class="one"></span>
10 <span class=two"></span>
11 <span class="three"></span> 12 <span class="four"></span>   13  <span  class="flve></span>   14 <span clans="slx"></span>
15<span  class="seven"></span>
16     </div>
17   </body>
18     </html>
运行例4-16,此时页面中不显示任何元素。
4. 定义 CSS  样式
搭建完页面的结构后，下面使用CSS 对页面的样式进行修饰。本节采用从整体到局部的方 式实现图4-32所示的效果，具体如下。
(1)定义基础样式
/+将页面中所有元素的内外边距设置为0*/*I               padding:0;margin:0;1/+将页面中所有元素的内外边距设置为0*/*I               padding:0;margin:0;1
/+将页面中所有元素的内外边距设置为0*/
*I               padding:0;margin:0;1
(2)控制外面的大盒子
/*控制外面的大盒子 ·/ width:630px;height:45px;margin:50px         auto;background-color:#192132;padding-left:20px;border-bottom:3px  solid  #000;/*控制外面的大盒子 ·/ width:630px;height:45px;margin:50px         auto;background-color:#192132;padding-left:20px;border-bottom:3px  solid  #000;
/*控制外面的大盒子 ·/ width:630px;
height:45px;
margin:50px         auto;
background-color:#192132;
padding-left:20px;
border-bottom:3px  solid  #000;
上面的代码用于控制外面的大盒子(div),    其中第6行代码 “padding-left:20px;”  用于使 大盒子左侧有一定的留白，第7行代码 “border-bottom:3px  solid#000;” 用于为大盒子设置下 边 框 。
(3)整体控制小盒子
span{               /*整体控制小盒子*/ display:inline-block;width:80px;height:45px;border-bottom:3px  solid #1ba2c7;span{               /*整体控制小盒子*/ display:inline-block;width:80px;height:45px;border-bottom:3px  solid #1ba2c7;
span{               /*整体控制小盒子*/ display:inline-block;
width:80px;
height:45px;
border-bottom:3px  solid #1ba2c7;
上 面 的 代 码 用 于 整 体 控 制 小 盒 子(span),   其 中 第 2 行 代 码“display:inline-block;”用 于 将  <span> 标 签 转 换 为 行 内 块 元 素 。
(4)给小盒子设置不同的背景图像
/*给小盒子设置不同的背景图像/.one{background:url(images/1.png)no-repeat;}.two(background:url(images/2.png)no-repeat;.three(background:url(images/3.png)no-repeat;) .four(background:url(images/4.png)no-repeat;}.five(background:url(images/5.png)no-repeat;).six(background:url(images/6.png)no-repeat;}.seven                (background:url(images/7.png)no-repeat;)/*给小盒子设置不同的背景图像/.one{background:url(images/1.png)no-repeat;}.two(background:url(images/2.png)no-repeat;.three(background:url(images/3.png)no-repeat;) .four(background:url(images/4.png)no-repeat;}.five(background:url(images/5.png)no-repeat;).six(background:url(images/6.png)no-repeat;}.seven                (background:url(images/7.png)no-repeat;)
/*给小盒子设置不同的背景图像/
.one{background:url(images/1.png)no-repeat;}
.two(background:url(images/2.png)no-repeat;
.three(background:url(images/3.png)no-repeat;) .four(background:url(images/4.png)no-repeat;}
.five(background:url(images/5.png)no-repeat;)
.six(background:url(images/6.png)no-repeat;}
.seven                (background:url(images/7.png)no-repeat;)
至此，完成图4-32所示“图标导航栏”的CSS样式部分。刷新例4-16所在的页面，效果
如图4-38所示。
98     HTML+CSS+JavaScript   网页制作案例教程(第2版)
图4-38 CSS 控制“图标导航栏”最终效果
4.5  【案例11】创意画框
案例描述
在现实生活中，通过画框的装裱能够使书画作  品更为美观，且易于保存。在网页设计中，电子图 片也可以通过画框的“装裱”,凸显艺术感和美感。 本节将结合素材运用CSS3 新增的“颜色透明度”“图  片边框”“渐变”“阴影”属性来制作一款创意画框， 其效果如图4-39所示。
知识引入
图4-39 创意画框
1. 颜色透明度
在 CSS3 之前，设置颜色的方式包括十六进制颜色(如#F00) 、r 、g 、b模式颜色或指定 的英文名称(如 red),    但这些方法无法改变颜色的不透明度。在 CSS3 中新增了两种设置丽 不透明度的方法， 一种是使用rgba 模式设置，另一种是使用opacity 属性设置。下面将详细讲 这两种设置方法。
(1)rgba 模式
rgba是 CSS3 新增的颜色模式，它是rgb颜色模式的延伸。 rgba模式是在红、绿、蓝三原
的基础上添加了不透明度参数，其语法格式如下。
rgba(r,g,b,alpha);          
上述语法格式中，前三个参数与 RGB中的参数含义相同，括号里的rgb 是 RGB 颜色色
或者百分比，a 代 表alpha参数是一个介于0.0(完全透明)和1.0(完全不透明)之间的数字 例如，使用rgba 模式为p 标签指定透明度为0.5,颜色为红色的背景，代码如下。
p(backqround-color:rgba(255,0,0,0.5);)                p(backqround-color:rgba(255,0,0,0.5);)                
p(backqround-color:rgba(255,0,0,0.5);)                
或
P(background-color:rgba(100号，0%,0%,0.5);)
(2)opacity 属 性
opacity  属性是 CSS3 的新增属性，该属性能够使任何元素呈现出透明效果，作用范围要：
rgba 模式大得多。 opacity 属性的语法格式如下。
opacity:   参数；
第 4 章 运用盒子模型划分网页模块
上述语法中， opacity  属性用于定义标签的不透明度，参数表示不透明度的值，它是一个介 于0-1之间的浮点数值。其中，0表示完全透明，1表示完全不透明，而0.5则表示半透明。
2. 图片边框
在网页设计中，还可以使用图片作为元素的边框。运用CSS3中的border-image属性可以轻 松实现这个效果。 border-image 属性是一个复合属性，内部包含border-image-source、border-image- slice 、border-image-width 、border-image-outset            和 border-image-repeat     等属性，其基本语法格式
如 下 。
border-image:border-image-source/border-image-slice/border-image-width/border-Image-outset/ border-image-repeat;                          
对上述代码中名词的解释如表4- 2所示。
表4-2 border-image的属性描述
属性
描述
border-image-source
指定图片的路径
border-image-slice
指定边框图像顶部、右侧、底部、左侧向内偏移量(可以简单理解为图片的裁切位置)
border-image-width
指定边框宽度
border-Image-outsel
指定边框背景向盒子外部延伸的距离
border-image-repeat
指定背景图片的平铺方式
下面通过一个案例来演示图片边框的设置方法，如例4- 17所示。 例4- 17 example17.html
<head><title>  图片边框</title><style       type="text/css">7     plwidth:362px;height:362px;10                   border-style:solid;11                   border-image-source:url(images/shuzi,png);/*                  设置边框图片路径*!12                     border-image-slice:33%;                 /*边框图像顶部、右侧、底部、左侧向内偏移量*/13                    border-image-width:40px;             /*设置边框宽度*/14                    border-image-outset:0;             /*设置边框图像区域超出边框量*/15                    border-image-repeat:repeat;          /*设置图片平铺方式*/ 1621   </body>22    </html>17    </style>  </head><head><title>  图片边框</title><style       type="text/css">7     plwidth:362px;height:362px;10                   border-style:solid;11                   border-image-source:url(images/shuzi,png);/*                  设置边框图片路径*!12                     border-image-slice:33%;                 /*边框图像顶部、右侧、底部、左侧向内偏移量*/13                    border-image-width:40px;             /*设置边框宽度*/14                    border-image-outset:0;             /*设置边框图像区域超出边框量*/15                    border-image-repeat:repeat;          /*设置图片平铺方式*/ 1621   </body>22    </html>17    </style>  </head>
<head>
<title>  图片边框</title>
<style       type="text/css">
7     pl
width:362px;
height:362px;
10                   border-style:solid;
11                   border-image-source:url(images/shuzi,png);/*                  设置边框图片路径*!
12                     border-image-slice:33%;                 /*边框图像顶部、右侧、底部、左侧向内偏移量*/
13                    border-image-width:40px;             /*设置边框宽度*/
14                    border-image-outset:0;             /*设置边框图像区域超出边框量*/
15                    border-image-repeat:repeat;          /*设置图片平铺方式*/ 16
21   </body>
22    </html>
17    </style>  </head>
在例4-17中，第10行代码用于设置边框样式，如果想要正常显示图片边框，前提是先设 置好边框样式，否则不会显示边框。第11~15行代码，通过设置图片路径、内偏移、边框宽度、 外部延伸距离和平铺方式定义了一个图片边框，边框图片素材如图4-40所示。
运行例4-17,效果如图4-41所示。
对比图4-40和图4-41发现，边框图片素材的四角位置(即数字1、3、7、9标示位置)和 盒子边框四角位置的数字是吻合的，也就是说在使用 border-image    属性设置边框图片时，会将 素材分割成9个区域，即图4-40中所示的1~9数字。在显示时，将“1”“3”“7”“9”作为四 角位置的图片，将“2”“4”“6”“8”作为四边的图片进行平铺，如果尺寸不够，则按照自定义 的方式填充。而中间的“5”在切割时则被当作透明区域处理。
100    HTML+CSS+JavaScript     网页制作案例教程(第2版)
图4-40 边框图片素材                          图4-41 图片边框的使用
例如，将例4-17中第15行代码中图片的填充方式改为“拉伸填充”,具体代码如下
border-1maqe-repeat¹stretch;                               /*设置图片填充方式*/border-1maqe-repeat¹stretch;                               /*设置图片填充方式*/
border-1maqe-repeat¹stretch;                               /*设置图片填充方式*/
保存HTML文件，刷新页面，效果如图4-42所示。
通过图4-42可以看出，“2”“4”“6”“8”区域 中的图片被拉伸填充边框区域。与边框样式和宽度 相同，图案边框也可以使用综合属性设置样式。如 例4-17中设置图案边框的第11~15行代码也可以简 写为 ：
border-image:url(images/shuzl.png)338/40px   repeat;border-image:url(images/shuzl.png)338/40px   repeat;
border-image:url(images/shuzl.png)338/40px   repeat;
在上面的示例代码中，“33%”表示边框的内偏移， “40px”   表示边框的宽度，二者需要用“/”隔开。
3. 阴影
在网页制作中，经常需要对盒子添加阴影效果。 使用CSS3 中 的 box-shadow 属性可以轻松实现阴影的
图4-42 拉伸显示效果
添 加 ， 其 基 本 语 法 格 式 如 下 。
box-shadow:h-shadow   v-shadow   blur   spread   color   outset;
在上面的语法格式中，box-shadow   属性共包含6个参数值，如表4 - 3所示。
表4-3 box-shadow属性的参数值
参数值
描述
h-shadow
表示水平阴影的位置，可以为负值(必选属性)
V-shadow
表示垂直阴影的位置，可以为负值(必选属性)
blur
阴影模糊半径(可选属性)
spread
阴影扩展半径，不能为负值(可选属性)
color
阴影颜色(可选属性)
outset/inset
默认为外阴影/内阴影(可选属性)
表 4 - 3 列 举 了box-shadow   属性参数值，其中 “h-shadow”     和 “v-shadow”     为必选参数值 不可以省略，其余为可选参数值。其中，“阴影类型”默认值“outset”更 改 为“inset”后， 影类型则变为内阴影。
下面通过一个为图片添加阴影的案例来演示 box-shadow 属性的用法和效果，如例4 所示。
第4章 运用金子模塑划分网页模块   101
例4- 18 example18.html
1   <Idoctype   html>2  <html>3  <head>4    <meta          charset="utf-825  <tltle>box-shadow 属性</t1tle>6   <styla       type="text/cas"> Lmg{8                 width:200px₁9       padding:20px;                         / · 内边距20px*/10               border-radlus:50                  / · 将图像设置为圆形效果 · /11               border:lpx     aolid     PE66112               box-shadow15px   Spz   10px   2px   θ999   Inaety 1314</style> 15</head>16  <body>17        <img         src="Imageo/chengzi.pg"alt="桠子"/> 18</body>19</html>1   <Idoctype   html>2  <html>3  <head>4    <meta          charset="utf-825  <tltle>box-shadow 属性</t1tle>6   <styla       type="text/cas"> Lmg{8                 width:200px₁9       padding:20px;                         / · 内边距20px*/10               border-radlus:50                  / · 将图像设置为圆形效果 · /11               border:lpx     aolid     PE66112               box-shadow15px   Spz   10px   2px   θ999   Inaety 1314</style> 15</head>16  <body>17        <img         src="Imageo/chengzi.pg"alt="桠子"/> 18</body>19</html>
1   <Idoctype   html>
2  <html>
3  <head>
4    <meta          charset="utf-82
5  <tltle>box-shadow 属性</t1tle>
6   <styla       type="text/cas"> Lmg{
8                 width:200px₁
9       padding:20px;                         / · 内边距20px*/
10               border-radlus:50                  / · 将图像设置为圆形效果 · /
11               border:lpx     aolid     PE661
12               box-shadow15px   Spz   10px   2px   θ999   Inaety 13
14</style> 15</head>
16  <body>
17        <img         src="Imageo/chengzi.pg"alt="桠子"/> 18</body>
19</html>
在例4- 18中，第12行代码给图像添加了内阴影样式。需要注意的是，使用内阴影时必须 配合内边距属性padding,    让图像和阴影之间拉开一定的距离，不然图片会将内阴影遮挡。
运行例4 - 18,效果如图4 - 43所示。
在图4-43中，图片出现了内阴影效果。需要说明的是，同text-shadow 属性(文字阴影 属性) 一 样，box-shadow  属性也可以改变阴影的投射方向并添加多重阴影效果，示例代码 如 下 。
box-shadow:5px  5px  10px  2px  #999   inset,-5px  -5px   10px  2pz  73AEEC  Inaet;        box-shadow:5px  5px  10px  2px  #999   inset,-5px  -5px   10px  2pz  73AEEC  Inaet;        
box-shadow:5px  5px  10px  2px  #999   inset,-5px  -5px   10px  2pz  73AEEC  Inaet;        
示例代码对应效果如图4-44所示。
图4-43  内阴影效果
⑤hsrcaAc   蛋性
图4-44  多重内阴影的使用
4. 渐变
在 CSS3 之前的版本中，如果需要添加渐变效果，通常通过设置背景图像的方式来实现。而 CSS3 中增加了渐变属性，通过渐变属性可以轻松实现渐变效果。 CSS3 的渐变属性主要包括线 性渐变、径向渐变和重复渐变，具体介绍如下。
(1)线性渐变
在线性渐变过程中，起始颜色会沿着 一 条直线按顺序过渡到结束颜色。运用 CSS3  中 的  “background-image:linear-gradient(参数值);”样式可以实现线性渐变效果，其基本语法格式如下。
backqround-image:li      near-qradient(渐变角度，颜色值1,颜色值2....,颜色值n);backqround-image:li      near-qradient(渐变角度，颜色值1,颜色值2....,颜色值n);
backqround-image:li      near-qradient(渐变角度，颜色值1,颜色值2....,颜色值n);
在上面的语法格式中， linear-gradienl    用于定义渐变方式为线性渐变，括号内用于设定渐变 角度和颜色值，具体解释如下。
102    HTML+CSS+JavaScript    网页制作案例教程(第2版)
①渐变角度
渐变角度是指水平线和渐变线之间的夹角，可 以是以deg 为单位的角度数值或“to” 加“Ieft”"righi"    “top”  和 “boltom”   等关键词。在使用角度设定渐 变起点的时候， Odeg 对 应 “to      top",90deg对 应 “to  right”,180deg    对 应 “Io       bottom”,270deg 对 应 “to   left”,   整个过程就是以bottom 为起点顺时针旋转， 如图4-45所示。
当未设置渐变角度时，默认为“180deg” ( 等 同 于“to bottom”)。
②颜色值
颜色值用于设置渐变颜色，其中“颜色值1”
图4-45 渐变角度图
表示起始颜色，“颜色值n”表示结束颜色，起始颜色和结束颜色之间可以添加多个颜色 颜色值之间用“,”隔开。
下面通过一个案例对线性渐变的用法和效果进行演示，如例4- 19所示。
例4-19 example19.html
16</body>16</body>1    <!doctype    html>2   <html>3 <head>4     <meta     charset="utf-8">5  <title>线性渐变</title>  <style     type="text/css">width:200px;9                  height:200px;10                background-image:linear-gradient(30deg,#0f0,400E);13</head>15    <p>/p>17    </htmi>1    <!doctype    html>2   <html>3 <head>4     <meta     charset="utf-8">5  <title>线性渐变</title>  <style     type="text/css">width:200px;9                  height:200px;10                background-image:linear-gradient(30deg,#0f0,400E);13</head>15    <p>/p>17    </htmi>
16</body>
1    <!doctype    html>
2   <html>
3 <head>
4     <meta     charset="utf-8">
5  <title>线性渐变</title>  <style     type="text/css">
width:200px;
9                  height:200px;
10                background-image:linear-gradient(30deg,#0f0,400E);
13</head>
15    <p>/p>
17    </htmi>
在例4- 19中，为<p>标签定义了一个渐变角度为30deg 、绿色(#0f0)  到 蓝 色 ( #O0f)  性渐变。
运行例4- 19,效果如图4-46所示。
能性新交                    ×  +                    □   回
← →  C ①文件|D:/乘例源码/chepter01/exa…☆    :
图4-46 线性渐变
在图4-46中，实现了绿色到蓝色的线性渐变。需要说明的是，在每一个颜色值后面还 书写一个百分比数值，用于标示颜色渐变的位置，例如下面的示例代码：
第4愿 运用金子惯壁地分网页模块   103
在上面的示例代码中，可以看作绿色(#00)由50%的位置开始出现谐交至蓝色(400f)  位
于80%的位置结束渐变。可以用Phocoshop中的渐变色块进行类比，如图4-47所示。
50%位置    80%位置[50%位置    80%位置[
50%位置    80%位置[
图4-47 定义渐变面色位置
示例代码对应效果如图4-48所示。
图4-48 标示颜色渐变位置的线性渐变
(2)径向渐变
径向渐变同样是网页中一种常用的渐变，在径向渐变过程中，起始颜色会从一个中心点开 始，按照椭圆或圆形形状进行扩张渐变。运用CSS3中 的 "background-image:radial-gradient   ( 参 数值);”样式可以实现径向渐变效果，其基本语法格式如下。
backoround-imaae:radsal-qradient(渐变形状圆心位置，颜色值1,颜色值2,...,颜色值口);
在上面的语法格式中， radial-gradient   用于定义渐变的方式为径向渐变，括号内的参数值用 于设定渐变形状、圆心位置和颜色值，对各参数的具体介绍如下。
①渐变形状
渐变形状用来定义径向渐变的形状，其取值既可以是定义水平和垂直半径的像素值或百分 比数值，也可以是相应的关键词。其中关键词主要包括两个值“circle”和“ellipse”,具体解释 如下。
●像素值/百分比：用于定义形状的水平和垂直半径，例如“80px 50px”即表示一个水平半 径为80px,   垂直半径为50px 的椭圆形。
●circle: 指定圆形的径向渐变。
●ellipse: 指定椭圆形的径向渐变。
②圆心位置
圆心位置用于确定元素渐变的中心位置，使用 “at”  加上关键词或参数值来定义径向渐变 的中心位置。该属性值类似于CSS 中 background-position 属性值，如果省略则默认为 “center”。 该属性值主要有以下几种。
●像素值/百分比：用于定义圆心的水平坐标和垂直坐标，可以为负值。
●left: 设置左边为径向渐变圆心的横坐标值。
●center: 设置中间为径向渐变圆心的横坐标值或纵坐标值。
●right: 设置右边为径向渐变圆心的横坐标值。
104    HTML+CSS+JavaScrlpt    网页制作案例教程(第2版)
●top:    设置顶部为径向渐变圆心的纵坐标值。
●  bottom:  设置底部为径向渐变圆心的纵坐标值。
③颜色值
“颜色值1”表示起始颜色，“颜色值n”  表示结束颜色，起始颜色和结束颜色之间可 多个颜色值，各颜色值之间用“,”隔开。
下面运用径向渐变来制作一个球体，如例4-20所示。
例4-20 example20.html
1  <ldoctype btml>2   <html>3   <head>4  <meta charset="utf-8">5       <tltle>径向浙变</title><style      type="text/css"> plwidth:200px;9         height:200px;10                   border-radius:50%;/+      设置圆角边框+/11                   background-image:radial-gradient(ellipse             at              center,#Of0,#030);/*设置径向渐变 1213</style>14   </head>16  <p></p>17 </body>18</html>15 <body>1  <ldoctype btml>2   <html>3   <head>4  <meta charset="utf-8">5       <tltle>径向浙变</title><style      type="text/css"> plwidth:200px;9         height:200px;10                   border-radius:50%;/+      设置圆角边框+/11                   background-image:radial-gradient(ellipse             at              center,#Of0,#030);/*设置径向渐变 1213</style>14   </head>16  <p></p>17 </body>18</html>15 <body>
1  <ldoctype btml>
2   <html>
3   <head>
4  <meta charset="utf-8">
5       <tltle>径向浙变</title>
<style      type="text/css"> pl
width:200px;
9         height:200px;
10                   border-radius:50%;/+      设置圆角边框+/
11                   background-image:radial-gradient(ellipse             at              center,#Of0,#030);/*设置径向渐变 12
13</style>
14   </head>
16  <p></p>
17 </body>
18</html>
15 <body>
在例4-20中，为<p>标签定义了一个渐变形状为椭圆形、径向渐变圆心位于容器中 绿色(#0r0)  到深绿色(#030)的径向渐变；
同 时 使 用“border-radius”属性将容器的边框 设置为圆角。
运行例4-20,效果如图4-49所示。
在图4-49中，球体实现了绿色到深绿色的 径向渐变。
需要说明的是，与“线性渐变”类似，在 “径向渐变”的颜色值后面也可以用百分比数值 设置渐变的位置。
(3)重复渐变
在网页设计中，经常会遇到在一个背景上 重复应用渐变模式的情况，这时就需要使用重
图4-49 径向渐变
复渐变。重复渐变包括重复线性渐变和重复径向渐变，具体介绍如下。
① 重 复 线 性 渐 变
在 CSS3  中，通过 “background-image:repeating-linear-gradient       (参数值);”样式可以实 复线性渐变的效果，其基本语法格式如下。
backqround-imaae:repeating-linear-aradient(渐变角度，颜色值1,颜色值2,...,颜色值n);backqround-imaae:repeating-linear-aradient(渐变角度，颜色值1,颜色值2,...,颜色值n);
backqround-imaae:repeating-linear-aradient(渐变角度，颜色值1,颜色值2,...,颜色值n);
在上面的语法格式中， “repeating-linear-gradient      (参数值)”用于定义渐变方式为重复 渐变，括号内的参数取值与线性渐变相同，分别用于定义渐变角度和颜色值。颜色值同样 使用百分比定义位置。
下面通过一个案例对重复线性渐变进行演示，如例4-21所示。
第 4 章 运用盒子便型划分网资粝块   10 5
例4-21 example21.html
1   <Idoctypa   btm>2    <hrml>3  <heaa>4    <mota   char6eL一"ucr-6">5  <t1tle>  重复段性渐变</citle>6   <st.ylo      typo~"text/cos>θ        w1d:h1200pxIheighE1200pxI10                backqround-1mage     rrepeating-1lnear-qradient.(90deg,AE50743,rEaED30106,A3EA62E     104}1 1 112   </aLyle> 13</head>14  <body>19        <p></p> 16</body>  17</html>1   <Idoctypa   btm>2    <hrml>3  <heaa>4    <mota   char6eL一"ucr-6">5  <t1tle>  重复段性渐变</citle>6   <st.ylo      typo~"text/cos>θ        w1d:h1200pxIheighE1200pxI10                backqround-1mage     rrepeating-1lnear-qradient.(90deg,AE50743,rEaED30106,A3EA62E     104}1 1 112   </aLyle> 13</head>14  <body>19        <p></p> 16</body>  17</html>
1   <Idoctypa   btm>
2    <hrml>
3  <heaa>
4    <mota   char6eL一"ucr-6">
5  <t1tle>  重复段性渐变</citle>
6   <st.ylo      typo~"text/cos>
θ        w1d:h1200pxI
heighE1200pxI
10                backqround-1mage     rrepeating-1lnear-qradient.(90deg,AE50743,rEaED30106,A3EA62E     104}1 1 1
12   </aLyle> 13</head>
14  <body>
19        <p></p> 16</body>  17</html>
在例4-21中，为<p>标签定义了一个渐变角度为90deg的红黄绿三色重复线性渐变。 运行例4-21,效果如图4- 50所示。
图4-50 重复线性渐变
②重复径向渐变
在 CSS3  中，通过 “background-image:repeating-radial-gradient         (参数值);”样式可以实现
重复线性渐变的效果，其基本语法格式如下。
backqround-image:repeating-radial-qradient                                    (渐变形状圆心位置，颜色值1,颐色值2,...,颜色值n);backqround-image:repeating-radial-qradient                                    (渐变形状圆心位置，颜色值1,颐色值2,...,颜色值n);
backqround-image:repeating-radial-qradient                                    (渐变形状圆心位置，颜色值1,颐色值2,...,颜色值n);
在上面的语法格式中，“repenting-radial-gradient     (参数值)”用于定义渐变方式为重复径向 渐变，括号内的参数取值与径向渐变相同，分别用于定义渐变形状、圆心位置和颜色值。下面通过一个案例对重复径向渐变进行演示，如例4-22所示。例4-22 example22.html2    <html><tltle>        重复径向渐变</title>6     <atyle     type="text/css"> pl8                 width:200px₇9                 height:200px;10                border-radius:508;11                background-image:repeating-radial-gradient(círcle            at            50850%,#E50743,#EBED30108, 13F 入62E        158);在上面的语法格式中，“repenting-radial-gradient     (参数值)”用于定义渐变方式为重复径向 渐变，括号内的参数取值与径向渐变相同，分别用于定义渐变形状、圆心位置和颜色值。下面通过一个案例对重复径向渐变进行演示，如例4-22所示。例4-22 example22.html2    <html><tltle>        重复径向渐变</title>6     <atyle     type="text/css"> pl8                 width:200px₇9                 height:200px;10                border-radius:508;11                background-image:repeating-radial-gradient(círcle            at            50850%,#E50743,#EBED30108, 13F 入62E        158);
在上面的语法格式中，“repenting-radial-gradient     (参数值)”用于定义渐变方式为重复径向 渐变，括号内的参数取值与径向渐变相同，分别用于定义渐变形状、圆心位置和颜色值。
下面通过一个案例对重复径向渐变进行演示，如例4-22所示。
例4-22 example22.html
2    <html>
<tltle>        重复径向渐变</title>
6     <atyle     type="text/css"> pl
8                 width:200px₇
9                 height:200px;
10                border-radius:508;
11                background-image:repeating-radial-gradient(círcle            at            50850%,#E50743,#EBED30108, 13F 入62E        158);
12     ) 13</style>14</head>15  <body>   16    <p></p> 17</body>    18</html>12     ) 13</style>14</head>15  <body>   16    <p></p> 17</body>    18</html>
12     ) 13</style>
14</head>
15  <body>   16    <p></p> 17</body>    18</html>
在例4 - 22中，为<p> 标签定义了一个渐变形状为圆形、径向渐变圆心位于容器中心 黄绿三色重复径向渐变。
运行例4-22,效果如图4-51所示。
回回ππ
回
π
③重复臣向叛安          × +
→C    ①文件|D:/案例源码/chaptor01/nxan…☆e:
图4-51 重复径向渐变
案例实现
1. 结构分析
图4- 39所示的“创意画框”可以使用内外嵌套的两个盒子(div)    来定义，结构如图 所示。
图4-52 “创意画框”结构
2. 样式分析
实现图4- 39所示样式的思路如下。
① 控 制 外 层 盒 子(div)    的宽度、高度，并为其添加渐变背景色、内边距、图片边框等
② 整 体 控 制 内 层 盒 子(div) 左右居中对齐，并为其盒子添加宽度、高度、背景图片、 时设置不透明度。
3. 制作页面结构
根据上面的分析，使用相应的HTML 标签来搭建网页结构，如例4-22 所一
第 4 章  运用盒予模望列分网页恒旋   107
例4-23 example23.h1ml
1     (!doctypb     litml>2      <hml>3    <head>4    <meta      charoet-"UTF-8n>9    <tItle>    艺术相彬</title> G    </head>79      cdlv                    claga-"wal">cdlv           class-"nol"></dlv>11           </div12  </body> 13</html>1     (!doctypb     litml>2      <hml>3    <head>4    <meta      charoet-"UTF-8n>9    <tItle>    艺术相彬</title> G    </head>79      cdlv                    claga-"wal">cdlv           class-"nol"></dlv>11           </div12  </body> 13</html>
1     (!doctypb     litml>
2      <hml>
3    <head>
4    <meta      charoet-"UTF-8n>
9    <tItle>    艺术相彬</title> G    </head>
7
9      cdlv                    claga-"wal">
cdlv           class-"nol"></dlv>
11           </div
12  </body> 13</html>
运行例4 - 23,此时页面中不显示任何元索。
4. 定义CSS  样式
搭建完页面的结构后，接下来使用CSS 对页面的样式进行修饰。本节采用从整体到局部的 方式实现图4 - 39所示的效果，具体如下：
(1)定义基础样式
/将页面中所有元素的内外边距设置为D·/(paddinq:0;margin:0;)                                              /将页面中所有元素的内外边距设置为D·/(paddinq:0;margin:0;)                                              
/将页面中所有元素的内外边距设置为D·/
(paddinq:0;margin:0;)                                              
(2)控制外层盒子样式
.walwidth:700px;height:347px;background-image:1lnear-gradient(90deg,#3d7ea5503,lce4b4%50%); border-atyle:solid;border-image:url(images/1.jpg)223/40px     repeat;padding:39px   0;box-chadow:3px   3px    8px   2px   #999;.walwidth:700px;height:347px;background-image:1lnear-gradient(90deg,#3d7ea5503,lce4b4%50%); border-atyle:solid;border-image:url(images/1.jpg)223/40px     repeat;padding:39px   0;box-chadow:3px   3px    8px   2px   #999;
.wal
width:700px;
height:347px;
background-image:1lnear-gradient(90deg,#3d7ea5503,lce4b4%50%); border-atyle:solid;
border-image:url(images/1.jpg)223/40px     repeat;
padding:39px   0;
box-chadow:3px   3px    8px   2px   #999;
上面的代码用于控制外层盒子的样式，其中第4行代码用于为外层盒子设置渐变背景。第 6行代码用于为外层盒子设置图片边框。
(3)控制内层盒子样式
.nel(width:1008;height:1008;background:url(images/zuqlu.png)center              center              no-repeat;opacity:0.4;.nel(width:1008;height:1008;background:url(images/zuqlu.png)center              center              no-repeat;opacity:0.4;
.nel(
width:1008;
height:1008;
background:url(images/zuqlu.png)center              center              no-repeat;
opacity:0.4;
在 上 面 的 样 式 代 码 中 ，“opacity:0.4:”     用于设置内层盒子整体的不透明度为0 .4。
至此，完成图4-39所示“创意画框”的CSS样式部分。刷新例4-23所在的页面，效果如 图 4 - 5 3 所 示 。
图4-53 “创意画框”最终效果
108    HTML+CSS+JavaScript    网页制作案例教程(第2版)
4.6  【案例12】拼图效果
案例描述
拼图游戏是广受欢迎的一种智力游戏，它的变化多端，难度不一 ，让人百玩不厌， 物的拼图卡片外，在网页中也可以制作拼图游戏。本节将运用
“圆角”和“多背景图像”制作一个简单的网页拼图效果，具 体样式如图4- 54所示。
知识引入
1. 圆 角
在网页设计中，经常会看到一些圆角的图形，例如按钮、 头像图片等，运用CSS3  中 的border-radius    属性可以将矩形边
图4-54 拼图效奥
框四角圆角化，实现圆角效果。 border-radius    属性基本语法格 式如下。
border-radius:     水平半径参数1水平半径参数2水平半径参数3水平半径参数4/垂直半径参数1垂直半径粤 直半径参数3 垂直半径参数4;border-radius:     水平半径参数1水平半径参数2水平半径参数3水平半径参数4/垂直半径参数1垂直半径粤 直半径参数3 垂直半径参数4;
border-radius:     水平半径参数1水平半径参数2水平半径参数3水平半径参数4/垂直半径参数1垂直半径粤 直半径参数3 垂直半径参数4;
在上面的语法格式中，水平和垂直半径参数均有4个参数值，分别对应着矩形的4个 (每个角都有水平和垂直半径参数),如图4- 55所示。border-radius    的属性值主要包含2个 即水平半径参数和垂直半径参数，参数之间用“/”隔开，参数的取值单位可以为px ( 像 或%(百分比)。
垂 直 半 径 参 数 2      垂 直 半 径 参 数 3垂 直 半 径 参 数 1      垂 直 半 径 参 数 4水平半径参数2水平半径参数3水平半径参数1水平半径参数4垂 直 半 径 参 数 2      垂 直 半 径 参 数 3垂 直 半 径 参 数 1      垂 直 半 径 参 数 4水平半径参数2水平半径参数3水平半径参数1水平半径参数4
垂 直 半 径 参 数 2      垂 直 半 径 参 数 3
垂 直 半 径 参 数 1      垂 直 半 径 参 数 4
水平半径参数2
水平半径参数3
水平半径参数1
水平半径参数4
图4-55 参数所对应的圆角
下面通过一个案例来演示border-radius属性的用法，如例4- 24所示。 例4-24 example24.html
1   <!doctype   html>2    <html>3   <head>4 <meta charset="utf-8">56   tisttlyel>e   圆角ty边pe/teitxts">1   <!doctype   html>2    <html>3   <head>4 <meta charset="utf-8">5656   tisttlytisttlyel>e>e   圆角ty边pe边pe/teitxt/teitxts">
1   <!doctype   html>
2    <html>
3   <head>
4 <meta charset="utf-8">
5656   tisttlytisttlyel>e>e   圆角ty边pe边pe/teitxt/teitxts">
第 4 章  运用盒子模型划分网页惯塘    10 9
barder:8px  so1id  bla□k1border-radiua:50ps     20px      10pa     10px/J0px      40pa     Gbpa      Bupa7     /r分别段置四个角水平半经稻勇育 半径+/10)11        </style>12     </head>13    <body>14    <1mg    class="c1rcle"src="2.png"alt="图片"/> 15</body>16       </htmlbarder:8px  so1id  bla□k1border-radiua:50ps     20px      10pa     10px/J0px      40pa     Gbpa      Bupa7     /r分别段置四个角水平半经稻勇育 半径+/10)11        </style>12     </head>13    <body>14    <1mg    class="c1rcle"src="2.png"alt="图片"/> 15</body>16       </html
barder:8px  so1id  bla□k1
border-radiua:50ps     20px      10pa     10px/J0px      40pa     Gbpa      Bupa7     /r分别段置四个角水平半经稻勇育 半径+/
10)
11        </style>
12     </head>
13    <body>
14    <1mg    class="c1rcle"src="2.png"alt="图片"/> 15</body>
16       </html
水平半径50px 垂直半径30px水平半径70px 垂直半径80px水平半径50px 垂直半径30px水平半径70px 垂直半径80px在例4-24中，第9行代码分别为图片4个角设置了不同的水平半径和垂直半径。 运行例4-24,效果如图4-56所示。
水平半径50px 垂直半径30px
水平半径70px 垂直半径80px
图确边眶                +
回   E
个  →    ①文件|DI/累例源码/choptarO4/ezaa-☆② 1
水平半径20px 垂直半径40px
水平半径10px 重直半径60px
图4-56 圆角边框的使用
需要注意的是，border-radius   属性同样遵循值复制的原则，其水平半径参数和垂直半径参 数均可以设置1~4个参数值，用来表示4个角的圆角半径的大小，具体解释如下。
●水平半径参数和垂直半径参数设置1个参数值时，表示4个角的圆角半径均相同；
●水平半径参数和垂直半径参数设置2个参数值时，第1个参数值代表左上圆角半径和右 下圆角半径，第2个参数值代表右上圆角半径和左下圆角半径，具体示例代码如下。      
img(border-radius:50px    20px/30px    60px;)         
水平半径50px 垂直半径30px水平半径20px 垂直半径60px水平半径50px 垂直半径30px水平半径20px 垂直半径60px在 上 面 的 示 例 代 码 中 设 置 图 像 左 上 和 右 下 圆 角 水 平 半 径 为 5 0px,   垂 直 半 径 为 3 0px;    右 上 和 左下圆角水平半径为20px,  垂直半径为60px。示例代码对应效果如图4-57所示。
水平半径50px 垂直半径30px
水平半径20px 垂直半径60px
回
图角边冠           × +
(  → C  ①文件 D:/案例源码/chapter04/oxaE一☆e:
水平半径20px
垂直半径60px
水平半径50px
垂直半径30px
图4-572个参数值的圆角边框
●水平半径参数和垂直半径参数设置3个参数值时，第1个参数值代表左上圆角半径，
第2个参数值代表右上和左下圆角半径；第3个参数值代表右下圆角半径，具体示例代码 如 下 。
110      HTML+CSS+JavaScript 网页制作案例教程(第2版)
img(border-radius:50px 20px  10px730pz 40px 60px;)
在上面的示例代码中设置图像左上圆角水平半径为50px, 垂直半径为30px;  右上和， 角水平半径为20px, 垂直半径为40px; 右下圆角水平半径为10px, 垂直半径为60pz.   码对应效果如图4-58所示。
水平半径50px 垂直半径30px
水平半径20px 垂直半径40px
水平半径20px 直半径40px水平半径10px 垂直半径60px水平半径20px 直半径40px水平半径10px 垂直半径60px
水平半径20px 直半径40px
水平半径10px 垂直半径60px
图4 - 583个参数值的圆角边框
●水平半径参数和垂直半径参数设置4个参数值时，第1个参数值代表左上圆角半召 2个参数值代表右上圆角半径，第3个参数值代表右下圆角半径，第4个参数值代表左下 半径，具体示例代码如下。
img(border-radius:50px 30px 20px  10pz/50px  30px 20pz  10px;)img(border-radius:50px 30px 20px  10pz/50px  30px 20pz  10px;)
img(border-radius:50px 30px 20px  10pz/50px  30px 20pz  10px;)
在上面的示例代码中设置图像左上圆角的水平和垂直半径均为50px, 右上圆角的水平 直半径均为30px, 右下圆角的水平和垂直半径均为20px, 左下圆角的水平和垂直半径均为Ⅱ 示例代码对应效果如图4-59所示。
需要注意的是，当应用值复制原则设置圆角边框时，如果“垂直半径参数”省略，
认等于“水平半径参数”的参数值。此时圆角的水平半径和垂直半径相等。例如，要实现图L 所示的圆角边框，仅设置4个参数值即可，简化后的示例代码为：
img(border-radius:50px  30px  20px   10px;)img(border-radius:50px  30px  20px   10px;)
img(border-radius:50px  30px  20px   10px;)
需要说明的是，如果想要将例4-24中图片的圆角边框显示效果设置为圆形，只需将 行代码更改为：
img(border-radius:150px;)     7*设置显示效果为圆形*1                   
或
img(border-radius:50%;)                       /*利用8设置显示效果为圆形*/
由于案例中图片的宽高均为300像素，所以图片4个角的圆角半径应为150px, 使服 比会比换算图片的半径更加方便。运行案例对应的效果如图4-60所示。
图角边轻              × +
←→C ①文件|D:/案例源码/chapter04/exar ·☆
□回2
8  :
图4 - 594个参数值的圆角边框
⑤图角边              ×  +
e  
←→C ①文件|D:/聚例源码/chaptero4/ezm-☆
θ
图4 - 60  圆角边框的圆形效果
第 4 章  送用盒子模型划分网面履决    111
2. 多背景图像
在 CSS3 之前的版本中， 一个容器只能填充一张背泉图片，如果重复设置，最后设置的背量  图片将覆盖之前的背景。 CSS3 中增强了背景图像的功能，允许一个容器里显示多个背景图像， 使背景图像效果更容易控制。但是CSS3 中并没有为实现多背景图片现供对应的属性，而是通过  background-image 、background-repeat,background-ponitian          等属性的值来实现多重背景四像效黑， 各属性值之间用逗号隔开。
下面通过一个案例来演示多重背景图像的设置方法，如例4-25所示。
例 4 - 2 5  exaITiple25himl
2    <html>3  <head>4    <meta       charaet~"utf-8“>5    <title>    设置多重背景图像</cit14><style      type="text/can">plwidth:300px;height:300px;10                   border:lpz    solid    black;11                   backgroond-1maga:uz1(1mages/dog.pn),ur1(Lmagen/bq1.png),u=1(mage/bg2.pag):13      </style> 14</head>16   <p></p>17</body>18</html>15 <body>2    <html>3  <head>4    <meta       charaet~"utf-8“>5    <title>    设置多重背景图像</cit14><style      type="text/can">plwidth:300px;height:300px;10                   border:lpz    solid    black;11                   backgroond-1maga:uz1(1mages/dog.pn),ur1(Lmagen/bq1.png),u=1(mage/bg2.pag):13      </style> 14</head>16   <p></p>17</body>18</html>15 <body>
2    <html>
3  <head>
4    <meta       charaet~"utf-8“>
5    <title>    设置多重背景图像</cit14>
<style      type="text/can">
pl
width:300px;
height:300px;
10                   border:lpz    solid    black;
11                   backgroond-1maga:uz1(1mages/dog.pn),ur1(Lmagen/bq1.png),u=1(mage/bg2.pag):
13      </style> 14</head>
16   <p></p>
17</body>
18</html>
15 <body>
在例4-25中，第11行代码通过hackground-image 属性定义了3张背景图，需要注意的是， 排列在最上方的图像应该先链接，其次是中回的装饰、最后才是背景图。
运行例4-25,效果如图4-61所示。
图4-61 设置多重背景图像
案例实现
1. 结构分析
图4- 54所示的“拼图效果”可以使用3个div 来定义，其中最外层用一个大的div 定 义 ，
内层可以嵌套两个上下结构的div, 具体结构如图4- 62所示。
112    HTML+CSS+JavaScript   网页制作案例收程(果∠nX,
图4-62“拼图效果”结构
2. 样式分析
①定义最外层大div的宽度、高度、外边框等样式。
②设置两个小div 的宽度和高度样式，并应用背景复合属性添加图片。为上面和下i
div 分别添加3个横向排列的图片。
③背景图之间的白色间隙与小div的宽度有关，只需要把小div的宽度设置大于3, 图片的总宽度，就会留下白色间隙。
3. 制作页面结构
根据上面的分析，使用相应的HTML 标签来搭建网页结构，如例4-26所示。
例4-26 example26.html
1   <!doctype html>2   <html>3   <head>4   <meta  charset="UTF-8">5       <title>拼图效果</title>6    </head>7 <body>8   <div    class="box">9                    <div     class="one"></div>10                  <div     class="two"></div> 11</div>12  </html>1   <!doctype html>2   <html>3   <head>4   <meta  charset="UTF-8">5       <title>拼图效果</title>6    </head>7 <body>8   <div    class="box">9                    <div     class="one"></div>10                  <div     class="two"></div> 11</div>12  </html>
1   <!doctype html>
2   <html>
3   <head>
4   <meta  charset="UTF-8">
5       <title>拼图效果</title>
6    </head>
7 <body>
8   <div    class="box">
9                    <div     class="one"></div>
10                  <div     class="two"></div> 11</div>
12  </html>
运行例4-26,此时页面中不显示任何元素。
4. 定义 CSS  样 式
搭建完页面的结构后，下面使用CSS对页面的样式进行修饰。本节采用从整体到局部 式实现图4-54所示的效果，具体如下。
(1)定义基础样式
/*将页面中所有元素的内外边距设置为0*/ *(padding:0;margin:0;}/*将页面中所有元素的内外边距设置为0*/ *(padding:0;margin:0;}
/*将页面中所有元素的内外边距设置为0*/ *(padding:0;margin:0;}
(2)定义最外层大div的样式
.box(width:604px;height:454px;margin:0    auto;border:5px    solid    #aaa; border-radius:30px;.box(width:604px;height:454px;margin:0    auto;border:5px    solid    #aaa; border-radius:30px;
.box(
width:604px;
height:454px;
margin:0    auto;
border:5px    solid    #aaa; border-radius:30px;
在上面的样例代码中，border-radius属性用于为大div 设置圆角效果。
(3)定义内部小div 的样式
1    .one(
第4章 远用盒子腮坚划分网英模块    112
kdth3604p2r heignts227p2;background-iEageiuri(1eages/63,3BC)/az1(iesgea/02-SDg),ari(ineses/33-yB       JbaczgIoond-EepeaL:DG-rapeac                                                 了bacxgzoand-poBiion:leIt,cenEar,IcncJ border-rodioo:30pz  30pz  00J,LWol10                    yidth:004px111                    heighc:227pz₁12                   backqround-1magesT1(Images/04.SP9),ac1(teges/05,jpQ),ax1(cmegez/06.peT;13                    backqround-repeaCno-repeaE;14                    background-poBLtlon:leC/center,rtgntJ15                    border-radins16030pz               30pzJ 16   )6kdth3604p2r heignts227p2;background-iEageiuri(1eages/63,3BC)/az1(iesgea/02-SDg),ari(ineses/33-yB       JbaczgIoond-EepeaL:DG-rapeac                                                 了bacxgzoand-poBiion:leIt,cenEar,IcncJ border-rodioo:30pz  30pz  00J,LWol10                    yidth:004px111                    heighc:227pz₁12                   backqround-1magesT1(Images/04.SP9),ac1(teges/05,jpQ),ax1(cmegez/06.peT;13                    backqround-repeaCno-repeaE;14                    background-poBLtlon:leC/center,rtgntJ15                    border-radins16030pz               30pzJ 16   )6
kdth3604p2r heignts227p2;
background-iEageiuri(1eages/63,3BC)/az1(iesgea/02-SDg),ari(ineses/33-yB       J
baczgIoond-EepeaL:DG-rapeac                                                 了
bacxgzoand-poBiion:leIt,cenEar,IcncJ border-rodioo:30pz  30pz  00J
,LWol
10                    yidth:004px1
11                    heighc:227pz₁
12                   backqround-1magesT1(Images/04.SP9),ac1(teges/05,jpQ),ax1(cmegez/06.peT;
13                    backqround-repeaCno-repeaE;
14                    background-poBLtlon:leC/center,rtgntJ
15                    border-radins16030pz               30pzJ 16   )
6
在上而的样例代码中，第4行代码用于为上方的div 设置多个背景图，第12行代码用于 为下方的div 设置多个背景图，为两个div 设置宽度为604像素，此时背景图之间会存在一定 的 问 隙 。
至此，完成图4-54所示“拼图效果”的CSS 样式部分。刷新例4-26所在的页面，效果如 图4-63所示。
图4-63 拼图最终效果
4.7  动手实践
学习完前面的内容，下面来动手实践 一 下吧。
请结合所学知识，运用 CSS 盒子模型的相关属性、背景属 性和渐变属性制作 一 个播放器图标，效果如图4 - 64所示。
图4-64 播放器图标