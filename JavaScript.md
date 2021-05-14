

# JavaScript学习笔记🧡💛💚💙💜🤎🖤🤍                                  

## 1.初识JavaScript

​     https://baike.baidu.com/item/javascript/321142?fr=aladdin

### 1.1 定义

```markdown
1. JavaScript简称 -- JS,是一种具有函数优先的轻量级，解释性的高级编程语言
2. JavaScript基于原型编程、多范式、直译式、弱类型的动态脚本语言，并且支持面向对象、命令式和声明式
        直译式：解释器中执行识别一行执行一行，错误则停止执行
        弱类型：变量不需要规定类型，根据赋值决定变量的数据类型，数据类型之间可以互相转换，还可以拼接
        基于原型：是面向对象的一种形式，通过复制已经存在的原型对象。万物皆是对象，对象上有原型，原型上有仓库，基于原型创建的对象同样也可使用这个仓库
```

### 1.2 引入js原因

```markdown
1. 提交数据到服务器验证信息时，服务器压力过大，会消耗大量时间，用户需要等待
2. JS可以处理一些服务器负责的输入验证操作
```

### 1.3 js发展史

```markdown
1. 最初是Netscape公司的布兰登·艾奇创建，并命名为LiveScript
2. 后来Netspace和Sun合作将其改名为JavaScript
3. 之后微软推出JSscript与JavaScript竞争
4. 最后为了竞争和平，在ECMA(欧洲计算机制造商协会)的协调下，创建了ECMAScript(ECMA-262)
```

### 1.4 js组成

```markdown
1. ECMAscript
2. DOM -- document object model 文档对象模型
3. BOM -- browser object model  浏览器对象模型
```

### 1.5 js用法

```markdown
 1. HTML 中的脚本必须位于 <script> 与 </script> 标签之间。
     <script>
     	alert("我的第一个 JavaScript");
     </script>
 2. 脚本可被放置在 HTML 页面的 <body> 和 <head> 部分中。
 3. 外部文件<script>标签引入，引入双标签中不能含有任何内容
 	<script src=""></script>
```

### 1.6 js特点

```markdown
1. 脚本语言
        解释型脚本语言，逐行解释
2. 基于对象
        不仅可以创建对象，还能使用现有对象
3. 简单/弱类型
        对使用的数据类型未作出严格要求
4. 动态性
        不需要经过Web服务器就可以对用户的输入做出响应。在访问一个网页时,鼠标在网页中进行鼠标点击或上下移、窗口移动等操作JavaScript都可直接对这些事件给出相应的响应。
5. 跨平台性
        不依赖于操作系统,仅需要浏览器的支持
```

### 1.7 js操作html页面

```markdown
1. 获取标签
	    根节点 -- document -- 提供操作其他节点方法  
	    document.getElementById( )    get -- 得到  Element -- 元素  By -- 通过  Id -- 名字
2. 操作内容
		document.getElementById( ).innerHTML = ""； -- 会解析标签
		document.getElementById( ).innerText = ""； -- 不会解析标签
```

### 1.8 js系统弹窗

```markdown
1. alert() 警告框
2. confirm() 确认框
3. prompt() 输入框
```

## 2.基础DOM知识

### 2.1 声明变量

```markdown
# 关键字 var
        不用var就直接使用变量 -- 报错
        不用var声明的变量有赋值 -- 自动变成全局变量，挂在window上
        重复声明同一变量，后来居上，无意义
        可以一次声明多个变量 -- 逗号隔开，分号结尾
        可以先声明后赋值
# 命名规则
   1. 严格区分大小写
   2. 见名知意
   3. 不能以数字开头，只能由字母、下划线、数字、$组成
   4. 不能使用中文
   5. 不能使用关键字和保留字
        关键字：有特殊功能的
        保留字：在未来可能要使用
   6. 驼峰命名（大驼峰：每个单词首字母大写、小驼峰：第一个单词首字母小写后面的单词首字母大写）
```

### 2.2 获取标签方法🔴

```markdown
1. 通过id获取
	    document.getElementById()
2. 通过class获取
        document.getElementsByClassName()
        通过class获取标签，元素Element+s
3. 通过标签名
		document.getElementByTagName()
4. 通过Name获取
		document.getElementsByName()
5. 通过路径获取后代
        document.querySelector("路径")
            获取唯一，ul下第一个li
        document.querySelectorAll("路径")
            获取一堆，ul下所有li
6. 特殊元素获取
        document.documentElement--返回html
        document.body -- 返回body元素
        document.head-- 返回head元素
        document.title -- 获取标题标签内容，也可以通过title(" 修改的标题内容")修改标题内容
```



## 3.数据类型

### 3.1 检测数据类型

```
	typeof(变量名)
```

### 3.2基础数据类型

```markdown
1. number -- 数值型
		NaN -- not a number,不是一个数字
2. string -- 字符串
		引号或者单引号包裹起来的内容都是字符串
3. boolean -- 布尔值
        true
        false
        通常用语判断语句
4. null -- 空
		为了保证类型统一，定义好的变量将来用于保存对象，初始值设置为null
5. undefined -- 未定义

# ES6新增Symbol数据类型
```

### 3.3复杂数据类型

```markdown
# object 对象
 1. 内置对象
 		String、Math、Date、function、Array
 2. 宿主对象
 		js运行环境提供的对象(浏览器提供)
 		BOM DOM
 3. 自定义对象
 		开发人员自己定义的对象 -- {                                 
            属性1：属性值1，   // 对象的属性名只能是字符串，可以省略引号 
            属性2：属性值2，                                      
            属性3：属性值3,                                       
            .....                                                                       }
   操作属性和属性值 --》
        a. 获取属性值，通过var的对象调用属性 -- 对象.属性
        b. 修改属性值，通过对象.属性 = “ 修改属性值的内容 ” 
        c. 添加属性，对象.新属性 = “ 属性值 ”;
        d. 删除属性，delete 对象.属性
```

### 3.4数据类型转换🔴

#### 3.4.1数值类型转换 -- Number()函数

```javascript
//语法：Number(变量)
#布尔值转换成数字
    var num_a = false;
    console.log( Number(num_a) ); // 0
	// 布尔值转换成数字 : true --- 1, false --- 0

#null转数字
    var num_b = null;
    console.log(Number(num_b));// 0
	// null --- 0

#Undefined转数字
    var num_c = undefined;
	console.log(Number(num_c)); // NaN
	// undefined --- NaN

#字符串转数字
        var num_d = "12";
        console.log( Number(num_d) );// 12

        var num_e = "12你好";
        console.log(Number(num_e)); // NaN

        var num_f = "-13";
        console.log( Number(num_f));// -13

        var num_g = "000001";
        console.log( Number(num_g));// 1

        var num_h = "";
        console.log( Number(num_h));// 0

        var num_j = [];
        console.log( Number(num_j));// 0

        var num_k = {};
        console.log( Number(num_k));// NaN

        var num_l = {x:1,y:2};
        console.log( Number(num_l));// NaN
#进制转换
        *10 进制 --( 0_9   满9进1 )
        *8 进制 -- 以0打头 ( 0_7   满7进1 )
        *16 进制 --以0x开头( 0_9,a-f   满f进1 )

		var aa = 070;
        var bb = 0xaf;
        console.log( Number(bb)); // 转换成 相同大小的 十进制整数
```

#### 3.4.2数值类型转换 -- parseInt()函数、parseFloat()函数

```javascript
//语法：parseInt(变量)
#parseInt() 整数
	/*
		1. 里边是小数,或者引号里边是小数---只取小数点之前的部分, 没有四舍五入
		2. 忽略字符串之前的空格,找到第一个非空字符,
			如果第一个字符是数字字符,会继续解析下一个,
			直到遇到所有字符 或者 遇到一个非数字字符就会停止
	*/
        var bb = "  52.03478";
        console.log(parseInt(bb)); //52


# parseFloat() 转换成小数 -- 保留小数部分
	/*	
		忽略字符串之前的空格,找到第一个非空字符,
		如果第一个字符是数字字符,会继续解析下一个,
 		直到遇到所有字符 或者 遇到一个非数字字符就会停止
	*/
		var cc = "   13.1421323131你好";
        console.log(parseFloat(cc)); //13.1421323131
```

#### 3.4.3字符类型转换 -- String()  toString()

```javascript
//语法: 变量.toString();   String()

#对象转字符串
	var data = { }
    console.log(data.toString()); //[object Object]
#布尔值转字符串
    var str_1 = true;
    console.log(  str_1.toString()  ); //返回相对应的字符串true
#null 和 undefined 转字符串
	//null和undefined没有toString方法，通过String()
	//null --> null
	//undefined --> undefined
#数组转字符串
	 var arr = [1,2,[33,44],3,"你好"];
	 console.log( arr.toString() ); //1,2,33,44,3,你好
 //不管是几维数组,都是去掉中括号,然后数组里边的每一项用逗号隔开
```

#### 3.4.4布尔值类型转换 -- Boolean()

```javascript
//语法：Boolean(变量)
#数值(number)转布尔
	//1.任何非零数值都转为true
	//2. 0转为false
    var a = 12;
    console.log(Boolean(a)); //true
    var b = 0;
	console.log(Boolean(b)); //false
#字符串转布尔
	//1.任何非空字符串转为true
    //2.""  /  '' 转为false
    var aa = "12";
    console.log(Boolean(aa)); //true
	var bb = '';
	console.log(Boolean(bb)); //false
#对象(object)转布尔
	//任何对象都转为true
	var cc = {};
	console.log(Boolean(cc)); //true
#NULL转布尔 -- false
#undefined转布尔 -- false
//总结
//转布尔值为假的有：false、0、null、undefined、NaN、""
```

## 4.标签操作

### 4.1 标签的属性操作

```javascript
/*
	操作标签属性：(合法属性 -- id class href)
		1.先获取标签赋值给变量
		2.通过变量.操作该标签的属性
*/
 	var box = document.querySelector("#box"); //获取标签
	console.log( box.className); //查询该标签的类名

/*
	三种方法操作标签属性：一般操作不合法属性(自定义属性)
		1.getAttribute(); 获取
		2.setAttribute(); 设置
		3.removeAttribute(); 移除
*/

	var box = document.querySelector("#box");

    //设置自定义属性、属性名
    box.setAttribute("libo","李波");

    //获取属性名
    console.log(box.getAttribute("libo")); //李波

    //移除class类名
    box.removeAttribute("class");
    console.log(box.className); // 
```

### 4.2 标签的样式操作🔴

> #### 提前写好css样式，优先级自由控制，只操作类名

#### 4.2.1 添加类名.add

```javascript
//classList.add(" 类名 ");
	var box = document.getElementById("box");
    box.classList.add("show");
  //box.className = "show"; // -这种设置不方便-- 会覆盖之前的class属性的值
```

#### 4.2.2 删除类名.remove

```javascript
//classList.remove(" 类名 ");
	box.classList.remove("show");
```

#### 4.2.3 切换类名.toggle

```javascript
//classList.toggle(" 类名 ");有则删除，无则添加
	box.classList.toggle("show");
```

#### 4.2.4 判断类名.contains

```javascript
//classList.contains(" 类名 ");判断类名是否存在，存在返回true
	var arr = box.classList.contains("show");
	console.log(arr); //有则返回true，无则返回false
```

#### 4.2.5 替换类名.replace

```javascript
//classList.replace(" 类名1 "," 类名2 ");将类名1替换为类名2
	box.classList.replace("show","low");
	console.log(box.className); // low
```

### 4.3 鼠标事件

#### 4.3.1 鼠标点击事件

```javascript
//onclick
	var box = document.getElementById("box");
	box.onclick = function () {
        box.innerText = "你还是别吃饭了,吃多了学不进"
    };
```

#### 4.3.2 鼠标移入事件

```javascript
//1.onmouseover
//2.onmouseenter
	box.onmouseenter = function () {
        box.innerText = "你还是别吃饭了,吃多了学不进"
    };

mouseenter：鼠标进入一个节点时触发，进入子节点不会触发这个事件
mouseover：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件
```

#### 4.3.3 鼠标移出事件

```javascript
//1.onmouseleave
//2.onmouseout
	box.onmouseout = function () {
        box.innerText = "吃饱了撑着"
    };

mouseout：鼠标离开一个节点时触发，离开父节点也会触发这个事件
mouseleave：鼠标离开一个节点时触发，离开父节点不会触发这个事件
```

## 5.运算符

> 运算符左右最好有空格(清晰)

### 5.1 一元运算符

```
一元运算符只对一个表达式执行操作，该表达式可以是数值数据类型类别中的任何一种数据类型。
```

#### 5.1.1 ' + ' 

```javascript
//放在数值前,不会产生任何影响,表示正号

//放在 非数值 前,会调用 Number() -- 转成数值
  + "123" --> 将字符串123转变为数字123

//也可以转换二进制、16进制数值、自然底数的字符串
  + "0x11" --> 17
```

#### 5.1.2 ' - '

```javascript
//放在数值前,表示负数
//放在 非数值 之前, 会调用 Number()--转成数值,并将其转换成负数
```

#### 5.1.3 ' ++ '

```javascript
//一种自增运算符，
    var  a=2;   
    a++;   
    console.log(a); //结果为：3
//a++相当于a=a+1;
```

#### 5.1.4 ' -- '

```javascript
//一种自减运算符，
    var a=2;   
    a--;   
    console.log(a);//结果为：1
//a++相当于a=a-1;
```

#### 5.1.5 运算符后置

- 出现赋值时，先赋值，后运算

```javascript
//当不出现赋值时，执行自增(自减)运算；但是出现赋值时，先赋值，后运算；
	var a=5;
    var b=a++;//先赋值，后运算
    console.log(a);// a=6
    console.log(b);//b=5
//b=a++;其实他执行两部操作，一是b=a；二是a=a++;
```

#### 5.1.6 运算符前置

```javascript
//当不出现赋值时，执行自增(自减)顺序，但出现赋值时，先赋值，后运算。
	var  a=5;
    var  b=++a;//先运算，后赋值；
    console.log(a);//a=6
    console.log(b);//b=6
//b=++a;其实他执行两部操作，一是a=++a；二是b=a; 
```

### 5.2 二元运算符🔴

```markdown
 1. 二元运算符应写在执行运算的子表达式对之间。
 2. 二元运算符比一元运算符的优先级低。 
```

#### 5.2.1 与(&&)

- 遇到 false 就会停下来,并且返回这个值
- 全部满足true,返回最后一个true

```javascript
//如果左边表达式判断是false，则返回左边表达式的值，否则返回右边表达式的值
	var result=true&&3; //3
    var result=1&&3;    //3
    var result=[]&&'';  //''  ''布尔值为假
    var result=''&&3;   //''
    var result=false&&3;//false
    var result=null&&true;//null
```

#### 5.2.2 或(||)

- 遇到 true 就会停下来,并且返回这个值
- 全部满足 false,返回最后一个的false

```javascript
//如果左边表达式判断为true，则返回左边表达式的值，否则返回右边表达式的值
    var result=true||3;//true
    var result=1||3;//1
    var result=[]||'';//[]
    var result=''||3;//3 ''的布尔值为假
    var result=false||3;//3
    var result=null||true;//true

    var num=0;
    var result=true||num++;
    console.log(num);//0
```

#### 5.2.3 非(!)

- 结果的对立面

```javascript
//如果表达式判断为true，则返回false，否则返回true。
    console.log(!0);//true 0的布尔值为假
    console.log(!!0);//false
    console.log(![]);//false
    console.log(!"");//true
```

### 5.3 三元运算符(三目运算)

> 语法： 表达式1?表达式2:表达式3  ==> 条件？执行为真语句：执行为假语句

```markdown
三元运算符其实是很方便很好用的一种条件判断方法，这个方法可以使调用或渲染数据时逐级筛选
```

```javascript
//判断一个整数是奇数还是偶数   
	var a,b;
    a=window.prompt("请输入数据："); //输入框
    b=parseInt(a)%2==0?'偶数':'奇数';
    document.write(a,'是',b);

//判断成绩是否及格
    var grade=80;
    var str=grade>=60?'及格':'不及格';

//判断性别是男还是女。如果sex变量等于M或m，那么表示男，否则表示女
    var a=window.prompt('请输入性别M m F f');
    var sex= a=='M'||a=='m'?'男':'女';
```

### 5.4 算术运算符

#### 5.4.1 加法(+)

```javascript
// + 拼接
//两边任意一边有字符串,那就是拼接
	var aa = 22 + true;
    console.log(aa); //23  调用Boolear()将true转换成1

	var bb = 22 + [1,2,3];
    console.log(bb); //221,2,3  调用toString转化成字符串然后拼接

	var dd = 22 + undefined;
    console.log(dd); //NaN  调用Number()将undefined转成NaN

	var h = 22 + null;
    console.log(h);  //22
	console.log(Number(null)); //0
```

#### 5.4.2 减法(-)

```markdown
1. 都是数值 -- 正常计算
2. 有一个是 字符串,布尔值,null,undefined,对象 --- 调用Number()
3. 调用 Number()值为NaN -- 则结果就是NaN
4. 若一个操作数是对象，则调用valueOf()取的该对象数值          
5. 若无valueOf()方法，则调用toString()方法，得到字符串转为数值
```

```javascript
    var qq = 33 - {x:1};
    console.log(qq); //NaN 因为console.log(Number({x:1}));值为NaN
```

#### 5.4.3 乘法(*)

```javascript
//若一个操作数不是数值，则调用Number()函数转换成数值再计算
//其中一个操作数是NaN，则值为NaN
    var as = 2 * "33哈哈";
    console.log(as); //NaN 因为console.log(Number("33哈哈"));值为NaN
	var aa = 12;
    var nn = 20;
    console.log(aa*nn); //240
```

#### 5.4.4 除法(/)

```javascript
//若一个操作数不是数值，则调用Number()函数转换成数值再计算
//其中一个操作数是NaN，则值为NaN
//被零除-- Infinity / -Infinity {正负取决于 前边的符号}
 var tt = 33 / -0;
 console.log(tt); // -Infinity
```

#### 5.4.5 取模(%)

```javascript
//若一个操作数不是数值，则调用Number()函数转换成数值再计算
//其中一个操作数是NaN，则值为NaN
    var num = -44%3;
    console.log(num); // -2
```

### 5.5 赋值运算符

```markdown
# JavaScript中的赋值运算可以分为简单赋值运算和复合赋值运算。
	1、简单赋值运算是将赋值运算符（=）右边表达式的值保存到左边的变量中
	2、复合赋值运算混合了其他操作（例如算术运算操作）和赋值操作
```

```javascript
/*
    1. =  右边表达式的值赋给左边的变量
    2. += 将运算符左边的变量加上右边表达式的值赋给左边的变量
    3. -= 将运算符左边的变量减去右边表达式的值赋给左边的变量
    4. *= 将运算符左边的变量乘以右边表达式的值赋给左边的变量
    5. /= 将运算符左边的变量除以右边表达式的值赋给左边的变量
    6. %= 将运算符左边的变量用右边表达式的值求模，并将结果赋给左边的变量
*/
	var a = 10;//这里就是值赋

	var a = 1;
	console.log( a+=2 ); //a=a+2
	console.log( a-=2 ); //a=a-2
	console.log( a*=2 ); //a=a*2
	console.log( a/=2 ); //a=a/2
	console.log( a%=2 ); //a=a%2
```

#### 赋值案例

```javascript
//某员工的月薪为5000元，扣除各项保险费用共500元，个人所得税起征点是3500元，税率为3%，计算该员工的实际收入是多少。
	<script type="text/javascript">
        var salary = 5000;
        var insurance = 500;
        var threshold = 3500;
        var tax = 0.03;
        salary-=insurance;
        var salary1=salary;
        salary1-=threshold;
        salary1*=tax;
        salary-=salary1;
        document.write("该员工的实际收入为"+salary+"元"); //该员工的实际收入为4470元
    </script>
```

### 5.6 关系运算符

#### 5.6.1 简单数据类型比较

```javascript
//关系运算是返回布尔值的一种运算表达式
	<、 >、 <=、 >=、==、===、!=、!==
// == 判断值是否相等， === 判断值和类型是否相等,尽量在所有代码中使用===，这样较为精确。
// ==和!=  在比较不同类型的数据的时候,先将数据类型转换,然后进行比较
// ===和!==  在比较过程中没有任何数据类型的相互转换
        console.log( 3 <= 2);//false
        console.log( "2" != 2);//false
        console.log( "2" === "2");//true

		var a ,b ;
        console.log( a === b); //true

		console.log( "abc" === "acb"); //false
        console.log( "a" === "A"); //false
// 注意: 不管是什么进制的数,在进行比较关系的时候,最终都会转换成十进制的数
		console.log( 10 === 0xa); //true
```

#### 5.6.2 复杂(引用)数据类型比较

```javascript
//引用数据类型:不是比较他们的值是否相等,而是比较的是他们指向同一个地址
		console.log( {} === {} ); // false
        console.log( [] === [] ); // false
// 如果两个变量 引用同一个对象,他们就相等
        var vv = {};
        var cc = vv;
        console.log( cc === vv ); //true
// 比较特殊的存在
        console.log( undefined == null ); // true
		var o = {x: 1,y:"1"};
        console.log( o.x == o.y); //true
// NaN 与任何值都不相等 ( 包括自己 ) ！！！！！！！！！！！！！
		console.log( NaN === NaN ); // false
```

## 6.流程控制语句

### 6.1 if语句

> JavaScript中的语句是从上到下一层一层执行的
>
> 通过流程控制语句可以控制程序执行的流程，使程序可以根据一定的条件来选择执行。

```js
//使用条件判断语句可以在执行某个语句之前进行判断，如果条件成立才会执行语句，如果条件不成立则语句不执行。

//语法一
if(条件表达式){
	条件成立时,执行;
}else{
	不成立执行,这里;
}

//语法二
if(条件表达式1){
	条件表达式1,执行;
}else if(条件表达式2){
	条件表达式2,执行;
}else if(条件表达式3){
	条件表达式3,执行;
}else{
	表达式都不成立执行,这里;
}

//案例
var age=40;
if(age>17) {
    alert("成年了")
} else if(age>30){
    alert("人到中年")
}else if(age<18){
    alert("未成年")
}else{
    alert("年纪不小了")
}
```

### 6.3 switch语句

> switch 语句用于基于不同条件执行不同动作。

```js
//语法
	switch(n){
        case 1:
          执行代码块 1
          break;
        case 2:
          执行代码块 2
          break;
        default:
          n 与 case 1 和 case 2 不同时执行的代码 
	}
//设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。如果存在匹配，则与该 case 关联的代码块会被执行。请使用 break 来阻止代码自动地向下一个 case 运行。
```

> break关键词

```markdown
1. JavaScript 遇到 break 关键词，它会跳出 switch 代码块。
2. break 能够节省大量执行时间，因为它会“忽略” switch 代码块中的其他代码的执行。
```

> default关键词

```markdown
default关键词规定不存在 case 匹配时所运行的代码
```

## 7.循环

### 7.1 for循环🔴

```
程序中进行有规律的重复性操作
```

```js
//语法
   for( 1初始值 ; 2条件 ; 3增量表达式){
       4 循环需要做的事情
   }

	for(var i=0;i<10;i++){
    	console.log(i);//0123456789
	}
//执行循序: 1初始值 --> 2判断-真假--如果为真---执行4里边的内容--如果为假--- 循环终止
```

##### 嵌套循环

```js
//语法
for(var i=0;i<=9;i++) {
    for(var j=0;i<j;j++){
       循环体;
    }
    循环体;
}
// 经典案例 -- 九九乘法表

//方法一：
for(var i=1;i<=9;i++) {
    for(var j=1;j<=i;j++) {
        document.write(i + '*' + j + '=' + i*j + ' ');
    }
    document.write("<br/>");
}
//方法二
var html = "";
var i , j;
for (i = 1;i<=9 ; i++){
    for (j = 1;j<=i ; j++){
        html += `<p>${i}*${j} = ${i*j}</p>`; // es6模板字符串
    }
    html += "<br>";
}
html += "<hr><hr>";
----------------------------------------------------------------
1*1=1
2*1=2 2*2=4
3*1=3 3*2=6 3*3=9
4*1=4 4*2=8 4*3=12 4*4=16
5*1=5 5*2=10 5*3=15 5*4=20 5*5=25
6*1=6 6*2=12 6*3=18 6*4=24 6*5=30 6*6=36
7*1=7 7*2=14 7*3=21 7*4=28 7*5=35 7*6=42 7*7=49
8*1=8 8*2=16 8*3=24 8*4=32 8*5=40 8*6=48 8*7=56 8*8=64
9*1=9 9*2=18 9*3=27 9*4=36 9*5=45 9*6=54 9*7=63 9*8=72 9*9=81
----------------------------------------------------------------
//打印等腰三角形
var box = document.getElementById("box");
        var html = "";
        for (var i = 0; i < 10 ; i++) {
            for (var j = 0; j < 2*i-1 ; j++) {
                html += "o";
            }
            html += "<br>";
        }
        box.innerHTML = html;
----------------------------------
			     o
				ooo
			   ooooo
              ooooooo
             ooooooooo
            ooooooooooo
           ooooooooooooo
          ooooooooooooooo
         ooooooooooooooooo
---------------------------------
```

##### break和continue区别？

```markdown
1. break : 强制退出循环体,后边的循环不在执行
2. continue : 跳出当前的循环体,进入下一次循环
```

##### for循环注意

```js
//如果循环体中有循环添加内容，则渲染页面就会增多，导致效率低，出现卡死情况
解决办法： 在for循环外部var一个变量，赋值为“”，则在循环体中的内容赋值给这个变量，最后在for循环外部打印出此变量，这样页面就只渲染一次，大大提高页面效率

//案例
//在页面中添加10个p盒子
		var btn = document.getElementById("btn");
        btn.onclick = function (){
            for (var i = 1; i <=10; i++) {
                document.body.innerHTML += "<p></p>";
            }
             // 这样的写法,渲染页面就会增多,次数非常多,卡主
        };
		// 此方法存在循环添加内容，页面渲染增多导致效率低，出现卡死

//解决方案
		var btn = document.getElementById("btn");
        btn.onclick = function (){
            var html = "";
            for (var i = 1; i <=10; i++) {
                html += "<p></p>";
            }
            document.body.innerHTML = html;
            // 只需要渲染一次
        };
```

### 7.2 while和do...while循环

> while循环

```js
//语法
while(表达式) {  //表达式为真则执行代码块
 
      //代码块
 
}
//例
		var j = 1;
        while(j<10){
            console.log(j);
            j++;
        }; //123456789
```

> do...while循环

```js
//语法
do{   //先执行一遍循环体,然后在判断，总会执行一次
 
       //代码块
 
}while (表达式);

//例
		var a = 5;
        do{
            console.log("我是do while" + a ); //不做判断，先执行这个代码块
            a++;
        }while(a<4); //判断表达式，为真，重复这个循环
//输出 -- 我是do while5
```

##### while和do...while区别

```markdown
1. while循环语句：
	先判断表达式是否为true, 如果为true,则执行循环体，否则不执行，属于先判断再执行。
2. do while语句： 
	先执行do代码块，然后再对while表达式做判断，do代码块总会被执行一次，属于先执行再判断。
```

### 7.3 innerHTML谨慎使用！

```markdown
例：在一个大盒子中包含一个小盒子，并为小盒子添加事件处理，而后在大盒子的基础上添加子节点，则原来存在大盒子中的小盒子会失去事件

# 原因：
	大盒子赋值增加子节点，会把原来的小盒子的值覆盖，不再是之前的内容，所以也没有了相应的事件
# 解决：
	可以在大盒子添加子节点后重新获取之前的小盒子元素
```

### 7.4 ES6-模板字符串

> 在模板字符串中，空格、缩进、换行都会被保留

```markdown
# 模板字符串用`（反引号）标识，用${}将变量括起来
<div id="string"></div>
<script type="text/javascript">
    let name = 'Mr Libo';
    let age = 28;
    document.getElementById('string').innerHTML = `My name is <b>${name}</b> and 	 my age is <p color="green">${age}</p>`;
</script>

# ${}中还可以存放任意表达式或者方法
```

> 模板字符串还可以嵌套使用

```js
let arr = [{value: 1}, {value: 2}];
let message = `
	<ul>
		${arr.map((item) => {
			return `
				<li>${item.value}</li>
			`
		})}
	</ul>
`;
console.log(message);
```

## 8.函数

### 8.1 函数定义

> 将一系列的代码或者操作行为打包到一起形成东西 --就叫函数
>
> 函数具有一块特定功能的代码，这个功能代码可以重复使用，哪里要用你就可以调用去使用。

### 8.2 函数的声明和调用

> 声明函数关键词： function

```js
//function命令声明的代码区块，就是一个函数。function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。

//函数名也要符合命名规范
function 函数名( 参数 ) { 
    执行的代码 
}
```

> 函数的调用 -- 函数名()

```js
//定义一个函数
function lb(s) {
  console.log(s);
}
lb();//调用
```

### 8.3 函数的参数

```markdown
# 形参：
	在声明一个函数的时候，为了函数的功能更加灵活，有些值是固定不了的，对于这些固定不了的值。我们可以给函数设置参数。这个参数没有具体的值，仅仅起到一个占位置的作用，我们通常称之为形式参数，也叫形参。
# 实参：
	如果函数在声明时，设置了形参，那么在函数调用的时候就需要传入对应的参数，我们把传入的参数叫做实际参数，也叫实参。
	
# 参数个数
1. 函数的实参等于形参，一一对应；
2. 函数的实参大于形参，一一对应，剩余舍弃
3. 函数的实参小于形参，一一对应，其余默认值为undefined

# 注意
1. 函数最终的运算结果由实参所决定；
2. 不论形参还是实参，都不需要关键字“var”的显示声明，函数的参数只能在函数内部访问。
```

### 8.4 函数基本分类

#### 8.4.1 有名函数

> 可以通过函数名()直接调用

```js
function lb(s) {
  console.log(s);
}
```

#### 8.4.2 匿名函数

> 匿名函数是不能单独写
>
> 原因：js引擎会把它当作函数声明来解析，而函数声明就必须要有个函数名，所以会报错

```js
function (){}
```

#### 8.4.3 函数表达式

> 函数声明的函数后边可以不用加分号分割也能正常执行，但函数表达式后边必须加分号不然会报错

函数表达式的根本所在，就是阻止了js引擎把用`function`创建的函数当作函数声明来解析

```js
var a = function (){};//将函数赋值给一个变量成为函数表达式
```

#### 8.4.4 立即执行函数(IIFE)🔴

> 用`function`定义函数之后，立即调用该函数。这种函数就叫做立即执行函数
>
> 这类函数是没有声明的,在一次执行过后就立即释放

```js
//有名函数定义后直接加括号执行会报错
function fn(){
    console.log("1111");
}(); //报错
----------------------------------
原因：
	因为函数声明的提升，导致函数声明不能立即执行；函数声明时，js只会解析到大括号就结束了，如果后面有()，只是一个圆括号运算符
----------------------------------

//函数表达式可以直接在后边加括号立即执行！
 var a =function(){
     console.log("立即执行函数")
 }(); //立即执行函数
//注意:立即执行的函数表达式，函数名不能再次调用！！
```

> **注：javascript引擎规定，如果function关键字出现在行首，一律解释成函数声明语句。**
>
> **因此，只有函数表达式存在立即执行函数**✅

```js
//解决方法就是不要让function出现在行首，让引擎将其理解成一个表达式

//声明函数降级处理变成函数表达式 ---  在function前边 添加 + - ! ~
!function(){console.log("666")}()
+function(){console.log("666")}()
-function(){console.log("666")}()
~function(){console.log("666")}()

//使用圆括号运算符
(function(){console.log("666")})()
(function(){console.log("666")}())
```

### 8.5 函数声明的提升

> 声明提升：就是JavaScript会把var变量声明和函数声明都会被提升到各自作用域的顶部，而赋值操作并不会被提升。

```js
//例1  var变量声明提升
console.log(a);//undefined
var a=2;
------------------------------------------
原因：对于var a=2;JavaScript会将其视为两个声明：
		1.定义声明var a，会在编译阶段进行；
		2.赋值声明a=2，会留在原地等待执行阶段进行。
                 var a;
                 console.log(a);
                 a=2;
------------------------------------------

//例2  function函数声明提升
    foo();
    function foo(){
        console.log(a); //undefined
        var a=2;
    }
//这段代码实际上会被理解为下面的形式：
    function foo(){
        var a;
        console.log(a);
        a=2;
    }
    foo();
```

###### 声明提升常见问题!

> 1.函数表达式

```js
console.log(foo); //undefined
var foo=function(){}
//变量标识符foo被提升了，但它的赋值操作并没有被提升

var foo;
console.log(foo);
foo=function(){}

//总结： 函数声明会被提升，但函数表达式不会被提升!!
```

> 2.声明的优先级

```markdown
1. 如果在同一个作用域内，存在同名的函数声明和var变量声明，则函数声明的优先级更高！！
2. 如果同一个作用域内，存在多个同名的函数声明。这种情况下，后面声明的会覆盖前面声明的。
```

```js
//函数优先级高于变量
function a(){}
var a;
console.log(a); //a(){}
--------------------------
var a;
function a(){}
console.log(a); //a(){}

//同名函数后来居上
function a(){
    console.log("11");
}
function a(){
    console.log("22");
}
a();//22
```

### 8.6 函数this指向🔴

> function函数this指向由`调用方式`确定，跟定义环境无关。

##### 1.直接调用

```js
//非严格模式下，全局作用域下的this指向window
function a(){
    console.log(this)
}
a(); //Window
```

```js
//严格模式下，全局作用域下的this指向undefined
'use strict'; //在全局作用域中（函数外部）使用这个编译指示，则整个脚本都将使用严格模式
function test() {
   console.log(this);
}
test(); //undefined(严格模式)
```

##### 2.对象调用

```js
var n = 1;
var a = {
  n: 2,
  b: function() {
  	console.log(this.n);
  }
};

a.b(); // 输出2
var b = a.b; //把a.b赋值给变量b，b就是一个函数;这里只是赋值，没有调用,this指向不确定
b(); // 输出1--普通调用，this指向全局作用域

//注：非严格模式下，输出2和1，严格模式下输出2和一个报错(this指向undefined，访问undefined的n属性肯定报错)

//总结： 对象调用方式下this指向调用对象。
```

> ##### 嵌套对象调用

```js
var n = 1;
var a = {
  n: 2,
  b: {
    n: 3,
    c: function() {
      console.log(this.n)
    }
  }
}; //未确定调用环境的情况下，this的指向不确定


a.b.c(); // 输出3
//对象调用方式下指向调用对象，a.b.c()中c()是通过a.b对象调用，指向对象a.b

a.c = a.b.c;
a.c(); // 输出2
//a.c = a.b.c 给a对象定义一个函数c，注意，此时没有调用！this指向不确定
//a.c() 通过a对象来调用c()，所以this指向对象a

var c = a.b.c; 
c(); // 输出1
//var c = a.b.c 函数赋值给普通变量，注意，此时没有调用!
//c(); 普通方式调用，指向window


//总结：嵌套对象调用方式下，this指向最终调用函数的对象。
//a.b.c.d.e.f.g.h() ,h函数中的this指向a.b.c.d.e.f.g 
```

##### 3.构造函数方式调用

```js
var name = 1;
function Person() {
  this.name = 2;
}

var p1= Person(); // p1为undefined
console.log(p1.name); // 报错
//跟调用方式和this指向无关，因为Person函数没有返回值，js中，默认会返回undefined


var p2 = new Person();
console.log(p2.name); // 输出2
//使用new操作符时，构造函数的返回值默认指向对象实例，所以p2.name就是Person()中的this.name
```

##### 4.改变this指向的三种方法

```js
function a(x,y) {
    console.log(x,y); //undefined undefined
    console.log(this) //window
}
a();
```

###### 4.1 call()

```js
function a(x,y) {
    console.log(x,y); //18 20
    console.log(this); //{name: "乖乖", age: 21}
}
var obj = {
    name : "乖乖",
    age : 21
};
a.call(obj,18,20);
```

###### 4.2 applay()

```js
/*
call()和applay() 只是传参不一样
apply 传参数需要放到一个数组中,数组中的项和形参一一对应
*/

function a(x,y,z) {
            console.log( x,y,z );//10 20 30
            console.log(this) //document
        }
		var b = [10,20,30];
        a.apply(document,b);
```

###### 4.3 bind()

```js
/*
	bind 不会帮你执行函数,只会返回一个新的函数
*/

function a(x,y,z) {
            console.log( x,y,z );//40 50 60
            console.log(this) //document
        }
var b = a.bind(document,40,50,60); // 这里的传参数 数据可以放到b()
b();
```

### 8.7 函数return返回值

```markdown
# 作用
1. 返回特定的值。这个值可以返回之后继续使用，用来展示或者继续进行其他计算。
2. 控制中断函数执行。不管返回的值是什么，都会中断return后面语句的执行
```

> 只在当前函数有效，不会影响其他外部函数的执行。

```js
//return 后边可以接多个值,只会返回最后一个值
var a = function () {
    return 1,2,3;
};
console.log( a() ); //3

//return 后边可以接运算符,运算结果再将结果返回出去
var a = function (c,d) {
    return c + d;
};
console.log( a(1,6) );//7

//return 函数可以通过接受的变量再执行
var  fn = function () {
            console.log( "我是爸爸");
            return function(){ console.log("我是崽崽")}
        }();

        fn(); //我是爸爸
              //我是崽崽
```

```markdown
# 返回值
1. 返回的值可以是具体的值，也可以什么都不写。
2. 函数默认的返回值是undefined，所以当你不写return，或者只写return而不返回具体的值时，会返回undefined
```



### 8.8 函数作用域🔴

> 编程领域中作用域分为静态作用域，和动态作用域，js中使用的是静态作用域
> ，也叫词法作用域，代码写完后，变量的作用域就已经确定不变了
> 作用域是可访问变量的集合。

```markdown
# 变量在一定范围内起作用，这个范围就是作用域，出了这个范围可能被限制
```

#### 8.8.1 全局作用域

```js
//浏览器中全局对象--window
//声明的变量相当于全局对象window下添加的属性和方法
//
function fn(){
            console.log(this);
        }
        
        console.log( fn )//window

var a = 2;
        console.log( a === window.a); //true
```

#### 8.8.2 局部作用域

```js
//每一个函数体内是一个新的局部作用域，里边定义的变量称为局部变量
//全局作用域不能访问局部作用域里边的属性和方法
function fo(){
    var b = 10;
};
console.log(window.b); //undefined
//局部作用域能访问全局作用域里边的属性和方法
var b = 10       ; 
function fo(){
    console.log(b);
};
fo();//10
```

#### 8.8.3 作用域链

> **由内向外** -- 在当前作用域查找使用的东西，没有继续往父级查找，直到全局作用域也没有则会报错

```js
var a = 1;
function b() {
    a++;
    console.log(a); // 2
    function c(){
        console.log(++a); // 3
    }
    c();
}
b();
```

#### 8.8.4 js解析顺序

```markdown
1. 预解析
	    先找var、function定义的变量，检查语法是否符合规范 ，var具有变量提升
2. 执行
		代码从上到下执行赋值等操作
```

> 例

```js
//全局--GO
//局部--AO
var x = 10;
a();
function a() {
    alert(x); //undefined
    var x = 30;
}
alert(x);//10
---------------------分析
/*
	GO:
		1.预解析：找var  function
			(1)var x = 10;
			(2)function a() {
                alert(x); 
                var x = 30;
        	}
        2.执行：
        	(1) x = 10;
        	(2)a(); ==>产生局部作用域AO:
        					1.预解析：
        						var x
        					2.执行： 
        						alert(x) //undefinde
        						x = 30
            (3)alert(x);//10
*/

//同理--
a();
function a(){
    alert(x); //undefined
    var x = 30; 
}
alert(x);//报错
```

> <font style="color:red">预解析重名问题！！！！！</font>

```markdown
1. var 和 var 重名
          只看最后一个
2. var 和 function 重名
          function 优先
3. function 和 function 重名
          后边覆盖前边的
```

> 案例

```js
alert(a);
var a = 10;
alert(a);
function a(){alert(20)};
alert(a);
var a = 30;
alert(a);
function a(){alert(40)};//优先
alert(a);
/*
            GO：
                1. 预解析
                     function a(){alert(40)};
                2. 执行
                     alert(a) // 40的函数体
                     a = 10;
                     alert(a) // 10
                     alert(a) // 10
                     a = 30
                     alert(a) // 30
                     alert(a) // 30
*/
```

```js
var a = 10;
alert(a);
a();
function a(){
    alert(20);
};
/*
          GO：　
                １．预解析
                    function a(){...}
                 2.执行
                    a = 10;
                    alert(a); // 10
                    a() // 报错

            // 报错分析:
                 a = 10
                 a()
                 10();
*/
```

```js
var a = 5;
function fn(){
    var a = 10;
    alert(a);
    function b() {
        a++;
        alert(a);
    }
    return b;
}
var c = fn();
c();
fn()();
c();
/*
            GO:
                1. 预解析
                    var a
                    function fn(){...}
                    var c;
                2.执行
                    c = fn()---fn执行 ---AO:
                                        var a
                                        function b(){...}
                                        执行:
                                            a = 10;
                                             alert(a); // 10
                    c()---  alert(a); // 11

                    fn()() ---
                        第一个()执行 --- alert(a) // 10
                        第二个()执行 --- alert(a) // 11
                    c()--- a ++ alert()---> 12
 */
```

### 8.9 函数arguments🔴

> 每一个函数都有一个arguments对象，它包括了函数所要调的参数，通常我们把它当作数组使用
>
> arguments是一个对应于传递给函数的参数的<font style="color:red">类数组对象</font>
>
> 使用arguments.length来确定传递给函数参数的个数，然后再处理每个参数

```js
//例1
function showargs() {
     console.log( arguments ); //Arguments[5]
}
showargs(1,2,3,4,5);//长度5

//例2
function a(){       
  console.log(arguments[2] + arguments[4]);               
}                                                                                            
aa(1,2,3,4,5,6); //输出结果则为8

//例3

function sum(){
    console.log(arguments);  //Arguments(2)  Arguments(9)
    var s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    alert(s); //30   450
}
sum(10,20);
sum(10,20,30,40,50,60,70,80,90);
```

### 8.10 闭包🔴

> 为什么使用闭包？闭包意味着内部函数始终可以访问外部函数的变量和参数，即使外部函数已经返回。

<font style="color:red">全局变量(GO)声明周期太长，常驻内存，会污染环境，内存有限</font>

```js
//函数嵌套函数

//父作用域 嵌套 子作用域

//内部的函数使用外部函数的参数或者变量,构成闭包

//内部函数使用外部函数的参数或变量，构成闭包。并且使用的参数或变量不会被回收

(function () {
    var a = 10;
    console.log(a)
})();//这里的a使用完回收

(function () {
    var a = 10;
    document.onclick = function () {
        console.log(++a);
    }
})(); //这里的a不会被回收


//闭包始终影响的是变量或者参数，只要内部函数被持续引用触发就不会被回收处理
(function () {
    var a = 10;
    document.onclick = function () {
        var a = 10;
        console.log(++a);
    }
})();
//这里的点击事件里边的a会被回收，只被调用一次，会一直打印11
```

> 案例

```js
<body>
    <p>0000001</p>
    <p>0000002</p>
    <p>0000003</p>
    <p>0000004</p>
    <script>
        var ap = document.getElementsByTagName("p");

        // 循环点击得到不同的序号
        for (var i = 0; i < ap.length; i++) {
            ap[i].onclick = function () {
                console.log(i);
            }
        }
        //没有使用闭包点击会一直打印4
	
//使用闭包
	for (var i = 0; i < ap.length; i++) {
        ap[i].onclick = function (index) {
            return function () {
                console.log(index);
            }
        }(i);
    }
		
	</script>
</body>
```

##### 闭包特性1：

```js
function OuterFunction() {

   var outerVariable = 100;

   function InnerFunction() {
       alert(outerVariable);
   }

   return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100
//在上面的例子, 当调用 OuterFunction() 时，从 OuterFunction 返回InnerFunction 函数。变量 innerFunc 只引用InnerFunction()，而不是OuterFunction()。现在，当你调用 innerFunc() 时，它仍然可以访问在 OuterFunction() 中声明的 outerVariable。这就是闭包。
```

##### 闭包特性2：

```js
//闭包的一个重要特征是外部变量可以在多次调用之间保持其状态。请记住，内部函数不保留外部变量的单独副本，但它引用外部变量，这意味着如果您使用内部函数改变它，外部变量的值将被改变。
function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counte r();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4

//在上面的例子中，外部函数 Counter 返回内部函数 IncreaseCounter。增加 IncreaseCounter 将外部变量 counter 加1。因此多次调用 IncreaseCounter 函数将使 counter 多次加1。
```

##### 闭包特性3：

```js
function Counter() {
    
    var counter = 0;

    setTimeout( function () {
        var innerCounter = 0;
        counter += 1;
        console.log("counter = " + counter);

        setTimeout( function () {
            counter += 1;
            innerCounter += 1;
            console.log("counter = ", counter)
            console.log("innerCounter = ", innerCounter)
        }, 500);

    }, 1000);
};

Counter();
//闭包在多层内部函数中是有效的。
```

##### 何时使用闭包？

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

alert(counter.value()); // 0
counter.increment();
counter.increment();
alert(counter.value()); // 2
counter.decrement();
alert(counter.value()); // 1
//在上面的示例中，increment()、decrement() 和 value()成为公共函数，因为它们包含在返回对象中，而changeBy() 函数成为私有函数，因为它没有返回，只被 increment() 和 decrement() 内部使用。
```



##### 垃圾回收机制

```markdown
1. 全局变量不会被回收，除非页面被关闭
2. 局部变量使用完后被回收
3. 闭包持续使用变量，不被回收
```



## 9.严格模式

> 严格模式，可以在函数内部选择较为严格的全局或局部的错误条件检测，可以提早地发现函数内部存在的错误以及编译中产生的错误。

> 严格模式关键词 -- 'use strict'

```js
//"use strict"如果在全局作用域中（函数外部）使用这个编译指示，则整个脚本都将使用严格模式

//如果把带有严格模式的脚本放在其他文件中，那么这个文件下的JS代码也会处于严格模式下。 也可以在函数中打开严格模式，

function fn() {
    "use strict";
    // more codes
}
```

### 9.1 变量

> 在严格模式下，什么时候创建变量以及怎么创建变量都是有限制的。

```markdown
# 不允许意外创建全局变量，必须要有一个声明。
	var msg = "Hello!";
	
# 不能对变量调用delete操作符 -- 报错

# 严格模式下，不能使用implements、interface、let、package、private、protected、public、static、yield等保留字作为变量名。
```

### 9.2 对象

> 在非严格模式下，操作对象时有些错误会静默失败，而在严格模式下就会报错

```markdown
1. 为只读属性赋值会报错
2. 对不可配置的属性使用delete操作符会报错
3. 为不可扩展的对象添加属性会报错

# 在通过对象字面量形式来声明对象时，属性名必须唯一，否则会报错
var person = {
    name: 'Knight',
    name: 'Bill'
} // Error
```



### 9.3 函数

> 参数必须唯一

```js
function add(a, a) { 
     // dosomething 
}
//这段函数声明在非严格模式下是不会报错的。
//严格模式下，通过参数名只能访问第二个参数，第一个参数必须通过arguments对象（形参列表）进行访问。
```

## 10. 字符串方法

> 字符串不区分单引号' '和双引号" "所有的字符串拼接都会识别，如果你的字符串比较长，可分行使用“+”来拼接。

```js
let longString = "This is a very long string which needs " +
                        "to wrap across multiple lines because " +
                        "otherwise my code is unreadable.";
  
    console.log(longString);

  //  "This is a very long string which needs to wrap across multiple lines because otherwise my code is unreadable."
```

> 字符串比较">" , "<"  ,"==="  ,">=" ,"<=" ,"!=="

```js
//(1).字母字符串比较，会先转成ascii码，再进行比较

var str1=`aa`;
var str2=`bb`;
console.log(str1<str2)  //  true

//(2).数字字符串比较（会比较两个数字的大小）

var str1=`10`;
var str2=`15`;
var str3=`10`;
console.log(str1<str2,str1===str3)  //  true,true
```

> 字符串长度length。字符串长度、内容只能读取不能修改

```js
var str="我爱你中国";
console.log(str.length)   // 5

//只能读取
var str=`This is an apple`;
console.log(str.length)   //  16
str.length=5;
console.log(str.length)  //  16
```

### 10.1 charAt()

> charAt() 根据下标查询访问字符串的某个字符

```js
//字符串中可以通过索引值来获取当前字符
var str1=`age`;
console.log(str1.charAt(2))  //  e

// 还可以使用  [ ] 的形式来访问,中括号填写的是字符串的下标

var str1=`age`;
console.log(str1[2])       //  e
```

### 10.2 charCodeAt(index)

> charCodeAt(index) 返回表示给定索引的字符的Unicode的值。

```js
//charCodeAt(index) 方法返回0到65535之间的 UTF-16 编码单元匹配 Unicode 编码单元整数
//当charCodeAt()括号中没有值时，默认为查询字符串首位的位置
//当有参数时，查询的是字符串的索引值
//index的值为一个大于等于 0，小于字符串长度的整数。
var  str="abc";
console.log(str.charCodeAt())        //  97

var  str="abc";
console.log(str.charCodeAt(0))       //  97
```

### 10.3 fromCharCode(num1,num2...)

- **String.fromCharCode**(num1,num2,、、numN)`用于返回**当前`Unicode`数字所对应的字符**
- 但是这个方法不能识别码点**大于0xFFFF**的字符。
- 该方法返回一个字符串，而不是一个 String 对象。
- ES6 提供了**String.fromCodePoint()**方法，可以识别大于`0xFFFF`的字符，弥补了String.fromCharCode()方法的不足

```js
 //由于 fromCharCode 是String的静态方法，所以应该像这样使用：String.fromCharCode()，而不是作为创建的 String 对象的方法。
String.fromCharCode(65,66,67);  
//"ABC"
String.fromCharCode(0x20BB7)
// "ஷ"
String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true
```

### 10.4 concat()

> 字符串拼接

```js
//在字符串拼接中，最常用的还是“+”
var str = "d";
var str1 = "e";
var str2 = "f";
var str3 = str+str1+str2;
console.log(str3)//  "def"

//concat()拼接
var str1 = "a";
var str2 = "b";
var str3 = "c";
console.log(str1.concat(str2,str3))  // "abc"

//还有一种是ES6模板字符串拼接
var str=`xiaoming`;
console.log(`wo shi ${str}`)   // wo shi xiaoming
```

### 10.5 indexOf()

- **str.indexOf()**方法返回str查找的结果，如果是有返回指定索引（查找到结果的第一个字符的位置），如果没有返回“-1”，区别大小写
-  如果查询连续字符，返回连续字符的首位位置

```js
"ABC".indexOf("A")    // 0   查询到“A”,返回位置为索引“0”

"ABC".indexOf("e")    // -1  并没有查询到“e”,返回-1

"ABC".indexOf("AB")   // 0   如果查询连续字符，返回连续字符的首位位置!!

//检测是否存在某字符串:
"Blue Whale".indexOf("Blue") !== -1; // true
"Blue Whale".indexOf("Bloe") !== -1; // false

案例：
//使用 indexOf 统计一个字符串中某个字母出现的次数
var str = 'To be, or not to be, that is the question.';
var count = 0; //定义辅助变量记录个数
var pos = str.indexOf('e');
    while (pos !== -1) {
        count++;
        pos = str.indexOf('e', pos + 1);
//重新给pos赋值，从上个查询到str的位置+1的位置继续查找，如果能查到就会再进循环，count+1
    }
console.log(count);   // 4
```

### 10.6 lastIndexOf()

> `lastIndexOf()`方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回-1

```markdown
# 语法：
	str.lastIndexOf(searchValue, fromIndex])
# 参数：
    searchValue:一个字符串，表示被查找的值
    fromIndex：开始查找的下标位置,可以是任意整数。默认值为 str.length。如果为负值，则被看作 0。*** 如果 fromIndex > str.length，则 fromIndex 被看作 str.length。***
```

```js
//只有一个参数时，fromIndex默认为str.length，查询整个字符串，最终查到str在整个字符串中最后出现的位置
"AVBDHIUOKL".lastIndexOf("O");     //7
"AFGHJKLL:JJHKAJALKA".lastIndexOf("A");   //18

//两个参数，第二个参数则为查询结束位置
"AFGHJKLL:JJHKAJALKA".lastIndexOf("A",10);  // 0
"AFGHJKLL:JJHKAJALKA".lastIndexOf("A",15);  // 15
```

### 10.7 substring()

> `str.substring()`截取开始位置和结束位置之间的字符串，前包后不包

```js
console.log(str.substring(1,2));str.substring(start,stop)
//start:开始截取的位置，不为负数；
//stop：结束的截取位置，不为负数

//参数问题
var str= "abcdefghij

//4.当结束位置超过字符串的长度，会默认忽略第二个参数；
";
//1.当开始和结束都为正值，并都在范围内，从索引为1的位置截取到索引为2的位置；
console.log(str.substring(1,2)); //b

//2.当只有一个开始位置的值时，会从开始位置直接截取到结束位置；
console.log(str.substring(1));//bcdefghij

//3.当开始位置为负数时,会直接转为0来截取
console.log(str.substring(-1)); //abcdefghij

//4.当结束位置超过字符串的长度，会默认忽略第二个参数；
console.log(str.substring(1,20));//bcdefghij

//5.当结束位置为负数，会直接转为0，并交换开始和结束的位置；
console.log(str.substring(1,-5));//a
console.log(str.substring(2,-5));//ab
console.log(str.substring(3,-5));//abc

//6.当开始位置和结束位置的值为同一值时，返回空字符串
console.log(str.substring(2,2)); //''
```

### 10.8 slice()🔴

> str.slice(beginSlice,endSlice)截取字符串，第一个参数为开始位置，第二个参数为结束位置，前包后不包

```js
//slice()方法不会改变原数组，返回原字符串中部分字符的新字符串
var str = "avxdsdfasd";
var str2 = str.slice(1, 4); 
console.log(str,str2)  //  "avxdsdfasd","vxd"

//如果参数为负数则倒数(-1为倒数第二个字符)
var str3 = str.slice(1, -1); //vxdsdfas

//如果两个参数都为负数，则结果会从后向前数，从-3到-1之间的值（前包后不包）
var str4 = str.slice(-3,-2);//a
```

### 10.9 split()

> `str.split()`方法，使用指定的分隔符字符串将一个`string`对象分割成字符串数组

> split() 方法不改变原始字符串。

```js
var s = string.split("");//1.当括号中为空值时，直接将它转为字符串数组
var string = 'abc';
var s = string.split();
console.log(s);//[abc]

//2.当括号中为空引号时，它将每个字符串都分割了出来
var string = '强大自己是解决一切问题的根本';
var s = string.split("");
console.log(s);//["强", "大", "自", "己", "是", "解", "决", "一", "切", "问", "题", "的", "根", "本"]

//空引号中加一个空格，则按照字符串数组输出
console.log(string.split(" "));//["强大自己是解决一切问题的根本"]

//3.当括号中为字符串中的字母，它将以当前字母分割字符串
console.log("abcdefg".split("a"));    // ["", "bcdefg"]

console.log("abcdefg".split("b"));    // ["a", "cdefg"]

//4.当括号中字符串并不是当前字符串中包含的，它只接转成数组字符串，不做其他操作
console.log("abcdefg".split("bbbb"));   // ["abcdefg"]
```

### 10.10 toLowerCase()

> str.toLowerCase()将字符串转为小写的形式（并不会影响字符串本身的值）

```js
console.log("ABC".toLowerCase());    // "abc" 
```

### 10.11 toUpperCase()

> str.UpperCase()将字符串转为大写的形式（并不会影响字符串本身的值）

```js
console.log( "alphabet".toUpperCase() ); // "ALPHABET"
```

### 10.12 toString()

> obj.toString()方法用于将现有的对象转为字符串；

```js
console.log( [1,2,3,4,5].toString());   //"1,2,3,4,5"
var a={a:1,b:2};
console.log( a.toString());         // [object Object]
```

### 10.13 trim()

- **str.trim()**方法会从一个字符串的两端删除空白字符，在这个上下文中的空白字符是**所有的空白字符**（`space`（空格键)，`tab`,`no-break``space`等）以及所有行终止字符（如`LF`，`CR`）

- trim()方法并**不会影响原字符串**，会返回一个新字符串。
- **trimStart()**消除字符串头部的空格，**trimEnd()**消除尾部的空格

```js
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'
const s = '  abc  ';
s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"
```

### 10.14 includes(str)

> includes（str）检测一个**字符串是否在另一个字符串里包含**，区分大小写

```js
var str="abcdef";
console.log(str.includes("def"));     //  true
console.log(str.includes("df"));     // false
```

### 10.15 repeat()

- **str.repeat(count)**构造并返回一个**新字符串**，该字符串是循环完成后的新字符串

- 值不能为**负数**和汉字和**Infinity**
- 若值为小数，则**取整**省略小数点后边
- 若值为数字字符串，则自动转成number
- 值为0返回空字符串(参数`NaN`等同于 0)

```js
//值不能为负数和汉字和Infinity
"abc".repeat(-1) // RangeError: repeat count must be positive and less than inifinity

//值为0返回空字符串
"abc".repeat(0)   // ""

//值为1，则str*1;值为2，则str*2...值为x，则str*x
"abc".repeat(1)  // "abc"
"abc".repeat(2)  // "abcabc"
"abc".repeat(3)  // "abcabcabc"

//若值为小数，则取整省略小数点后边
"abc".repeat(3.5)  // "abcabcabc" 参数count将会被自动转换成整数.

//若值为数字字符串，则自动转成number
"abcd".repeat("2")   // "abcabc" 


```

### 10.16 replace()

- 字符串的替换

- 不改变原字符串
- [ES2021](https://github.com/tc39/proposal-string-replaceall) 引入了`replaceAll()`方法，可以一次性替换所有匹配。

```js
//语法
str.replace('a','b') //a为要被替换的内容，b为要替换的内容


let str ="abcdefg";
let str1 = str.replace('abc','def');
console.log(str1)  // defdefg
console.log(str);//abcdefg 

//一次性替换
'aabbcc'.replaceAll('b', '_')
// 'aa__cc'
```

### 10.17 endsWith(str)

> endsWith(str) 检测字符串是不是以“str”结尾的

```js
/*
语法:
	str.endsWith(searchString , position);
参数:
	searchString -- 要搜索的字符串
	position -- 搜索结束位置
		position 当不填写值时，默认值为str.length
*/ 
```

```js
var str = "To be, or not to be, that is the question.";
console.log(str.endsWith("question."))    // true
console.log(str.endsWith("b",4))  // true;
```

### 10.18 substr()

> str.substr()方法返回一个字符串中从指定位置开始到指定字符数的字符。

```js
/*
语法：
	str.substr(start,length)
参数：
	start:开始截取的位置，开始索引为0，最大为str.length-1，也可为负数；
	length:要截取的长度，如果不填写，默认为str.length-1;
		最小为1，最大为str.length-1.负数无效，如果为0或者负值，返回一个空字符串。
*/

var str = "abcdefghij";
console.log(str.substr(1,2));   //bc
//当截取位置为负数时，会从后向前数，倒数第一个索引为-1，截取的长度会从当前位置向后数
console.log(str.substr(-3,2)); //hi
console.log(str.substr(-3)); //hij

//当只有开始的位置，为正值，第二个值默认是str.length-1,也就是截取到字符串的末尾
console.log(str.substr(1));//bcdefghij

//当开始的索引是超过字符串长度的负数时，就相当于字符串一直是向后数的
console.log(str.substr(-20,2)); //ab

//当开始的索引是超过字符串的长度的正值时，无法截取到内容，返回空字符串
console.log(str.substr(20,2)); //''
```

### 10.19padStart(),padEnd()

- ES2017 引入了字符串补长度的功能
- **padStart()**用于头部补全，**padEnd()**用于尾部补全。
- **padStart()**和**padEnd()**一共接受两个参数，第一个参数是字符串补全生效的**最大长度**，第二个参数是用来补全的字符串。
- 如果原字符串的长度，等于或大于最大长度，则字符串**补全不生效**，返回原字符串。
- 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会**截去超出位数**的补全字符串。
- 省略第二个参数，默认使用**空格**补全长度。

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

//如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。
'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'

//如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
'abc'.padStart(10, '0123456789')// '0123456abc'

//省略第二个参数，默认使用**空格**补全长度
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '

```



## 11. 数组方法

### --不改变原数组---

#### 1.join()

> 将数组按照规则拼接成字符串，不改变原来数组

```js
var a = ["1","2","3"];                                
var b = a.join("@");  
console.log(b); //1@2@3
```

#### 2.concat()

> 合并两个或者多个数组为一个新数组

```js
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var arr2 = ["蜘蛛精","蛤蟆精"];
var c_arr = arr.concat(arr2);
console.log(c_arr); // "孙悟空", "猪八戒", "沙和尚","蜘蛛精","蛤蟆精"
```

#### 3.slice()🔴

> slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分

```js
var arr = ["孙悟空", "猪八戒", "沙和尚"];
//不传参数返回原数组
var arrs = arr.slice();
console.log(arrs); // ["孙悟空", "猪八戒", "沙和尚"]

//一个参数返回该参数到数组末尾项
var arrs2 = arr.slice(2);
console.log(arrs2); //["沙和尚"]

//两个参数  一个起始位置，一个结束位置
//返回起止位置到结束位置之间的项，左闭右开
var arr3 = arr.slice(0,2);
console.log(arr3); // ["孙悟空", "猪八戒"]
```

#### 4.map()

>  map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```js
/*
map()方法参数为函数

函数参数：
	参数1：数组项
	参数2：数组索引
	参数3：数组本身
	
map() 方法按照原始数组元素顺序依次处理元素。
！！map() 不会对空数组进行检测。
！！map() 不会改变原始数组。
*/
 		var num = [1,2,3,4,5];
        var l_num = num.map(function(item,index){
            return item*10;
        })
        console.log(l_num);// [10, 20, 30, 40, 50]
```

#### 5.every()

> 检测数组所有元素是否都符合指定条件

```js
/*
如果数组中检测到有一个元素不满足，则整个表达式返回 false，且剩余的元素不会再进行检测；
如果所有元素都满足条件，则返回 true；
函数参数：
	参数1：数组项
	参数2：数组索引
	参数3：数组本身
*/	
	var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

        var a = arr.every(function (item, index, array) {
            return (item >= 3);
        });
        console.log(a); // false
```

#### 6.some()

> 用于检测数组中的元素是否满足指定条件

```js
/*
如果有一个元素满足条件，则表达式返回 true, 剩余的元素不会再执行检测;
如果没有满足条件的元素，则返回 false;
函数参数：
	参数1：数组项
	参数2：数组索引
	参数3：数组本身
*/

		var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

        var a = arr.some(function (item, index, array) {
            return (item >= 3);
        });
        console.log(a); // true
```

#### 7.filter()

> filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

```js
/*
filter()相当于过滤器 -- 参数为函数
注意： filter() 不会对空数组进行检测。
注意： filter() 不会改变原始数组。
函数参数：
	参数1：数组项
	参数2：数组索引
	参数3：数组本身
*/
		var num = [1, 12, 3, 4, 5,20];
        var l_num = num.filter(function (item, index) {
            return (item>3);
        })
        console.log(l_num); //12  4   5  20
        console.log(num); //1, 12, 3, 4, 5,20  不改变原数组

```

#### 8.forEach()🔴

> forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。

```js
/*
注意: forEach() 对于空数组是不会执行回调函数的
函数参数：
	参数1：数组项
	参数2：数组索引
	参数3：数组本身
*/

		var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
		var cc = arr.forEach(function (item, index, array) {
            return (array[index] += 10);
        });
        console.log(arr); //11, 12, 13, 14, 15, 14, 13, 12, 11
```

#### 9.reduce()

> reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

```js
/*
reduce() 可以作为一个高阶函数，用于函数的 compose。
注意: reduce() 对于空数组是不会执行回调函数的。
函数参数：
	参数1：数组项
	参数2：数组索引
	参数3：数组本身
*/
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    console.log(numbers.reduce(getSum)); 
}
myFunction();//125
```



### ---改变原数组---

#### 1.pop()

> pop() 方法用于删除数组的最后一个元素并返回删除的元素。
>

```js
/*
注意：此方法改变数组的长度！
提示： 移除数组第一个元素，请使用 shift() 方法。
*/

		var arr = ["孙悟空", "猪八戒", "沙和尚"];
        var c_arr = arr.pop();
        console.log(arr); // ["孙悟空", "猪八戒"]
        console.log(c_arr); // 沙和尚
```

#### 2.push()

> push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
>

```js
/*
注意： 新元素将添加在数组的末尾。

注意： 此方法改变数组的长度。

提示： 在数组起始位置添加元素请使用 unshift() 方法。

*/

		var arr = ["孙悟空", "猪八戒", "沙和尚"];
        var c_arr = arr.push("蜘蛛精", "白骨精");
        console.log(arr);   //["孙悟空", "猪八戒", "沙和尚", "蜘蛛精", "白骨精"]
        console.log(c_arr); // 5
```

#### 3.shift()

> ​	shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
>

```js
/*
注意： 此方法改变数组的长度！
提示: 移除数组末尾的元素可以使用 pop() 方法
*/

		var arr = ["孙悟空", "猪八戒", "沙和尚"];
        var c_arr = arr.shift();
        console.log(arr); // ["猪八戒", "沙和尚"]
        console.log(c_arr); // 孙悟空
```

#### 4.unshift()

> unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
>

```js
/*
注意： 该方法将改变数组的数目。
提示: 将新项添加到数组末尾，请使用 push() 方法。
*/

		var arr = ["孙悟空", "猪八戒", "沙和尚"];
        var c_arr = arr.unshift("蜘蛛精", "白骨精");
        console.log(arr);   //["蜘蛛精", "白骨精", "孙悟空", "猪八戒", "沙和尚"]
        console.log(c_arr); // 5
```

#### 5.reverse()

> 颠倒数组中元素的位置(倒序)

```js
/*

*/

		var a = [1, 2, 3, 4, 5];
        var b = a.reverse();
        console.log(b); // 54321
```

#### 6.sort()🔴

> sort() 方法用于对数组的元素进行排序。
>

```js
/*

排序顺序可以是字母或数字，并按升序或降序。

默认排序顺序为按字母升序。

注意：当数字是按字母顺序排列时"40"将排在"5"前面。

使用数字排序，你必须通过一个函数作为参数来调用。

函数指定数字是按照升序还是降序排列。

注意： 这种方法会改变原始数组！。

*/

//sort()无参
		var arr = [1, 2, 3, 5, 9, 6, 4, 10];
        var arr2 = ['a','c','ac','g','cd']; //Unicode编码排序
        var s = arr.sort();
        var ss = arr2.sort();
        console.log(s);//[1, 10, 2, 3, 4, 5, 6, 9]
        console.log(ss); //["a", "ac", "c", "cd", "g"]

/*
sort()有参
函数参数：
	参数1：数组项
	参数2：数组索引
	参数3：数组本身
*/
		var sss = arr.sort(function(a,b){
            return a-b;
        })
        console.log(sss); //[1, 2, 3, 4, 5, 6, 9, 10] -- 升序
        console.log(arr.reverse());//[10, 9, 6, 5, 4, 3, 2, 1] -- 倒序

//对象排序
		var arr3 = [
            {name:"aa",age:16},
            {name:"bb",age:26},
            {name:"cc",age:21},
            {name:"dd",age:19},
        ]
        var ssss = arr3.sort(function(a,b){
            return a.age - b.age;
        })
        console.log(ssss);  //16 19 21 26
```

#### 7.splice()

> 向数组中添加/删除项目，然后返回被删除项目。

```js
/*
	splice()最强大数组方法
                缺点：影响原始数组
            1.删除
                可以删除任意数量的项，指定两个参数
                    参数1：起始位置
                    参数2：删除的个数
            2.插入
                可以向指定位置插入任意数量的项  三参
                    参数1：起始位置
                    参数2：要删除的数量
                    参数3: 插入的值
            3.替换
*/


// 1.删除
        var arr = ["孙悟空", "猪八戒", "沙和尚"];

        var b = arr.splice(0, 2); // 重零开始删除两个

        console.log(arr);//["沙和尚"]
        console.log(b);//["孙悟空", "猪八戒"]

// 2.插入   
        var arr2 = ["孙悟空", "猪八戒", "沙和尚"];
        var b2 = arr2.splice(1, 0, "白骨精", "蜘蛛精");
        console.log(arr2);//["孙悟空", "白骨精", "蜘蛛精", "猪八戒", "沙和尚"]
        console.log(b2);''

// 3. 替换
        var arr3 = ["孙悟空", "猪八戒", "沙和尚"];
        var b3 = arr3.splice(1, 2, "白骨精", "蜘蛛精");
        console.log(arr3);//["孙悟空", "白骨精", "蜘蛛精"]
        console.log(b3);// ["猪八戒", "沙和尚"]
```

## 12.定时器

> 定时器是一个异步操作

### 12.1 setTimeOut()

> setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。

```js
/*
提示： 如果你只想重复执行可以使用 setInterval() 方法。
提示： 使用 clearTimeout() 方法来阻止函数的执行。
    参数1：函数
    参数2：毫秒
    参数3：函数参数
*/

//方式一：
setTimeout(function(a,b) {
    alert(a+b); //30
},2000,10,20)

//方式二：
function fn(a,b){
    console.log(a+b); 
}

setTimeout(fn,2000,10,50); //60

//清除定时器clearTimeout()
var aa = setTimeout(function () {
            console.log("大家好 ")
        }, 2000);
        //清除定时器
        clearTimeout(aa);
```

### 12.2 setInterval()

> setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
>

> setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
>

```js
/*
 由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
            提示： 1000 毫秒= 1 秒。
            提示： 如果你只想执行一次可以使用 setTimeout() 方法
*/
var timer = setInterval(function() {
            console.log("李波");
        },1000)
        //清除循环定时器
        clearInterval(timer);

//setTimeout模拟setInterval
        function a(){
            setTimeout(function() {
                console.log("挣钱、干饭");
                a();
            },2000)
        }
        a();
```

> 动画帧案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Libo</title>
    <link rel="stylesheet" href="">
    <style>
        body,
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        ul,
        ol,
        li,
        dl,
        dt,
        dd {
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
        }

        ul,
        ol {
            list-style: none;
        }

        #wrap {
            position: relative;
            width: 500px;
            height: 500px;
            border: 2px solid red;
            border-radius: 50%;
            margin: 100px auto;
        }

        #wrap p {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 0;
            left: 250px;
            margin-left: -15px;
            margin-top: -15px;
            background-color: green;
            border-radius: 50%;
        }
    </style>
    <script src=""></script>
</head>

<body>
    <div id="wrap">
        <p id="ball"></p>
    </div>

    <script>
        var ball = document.getElementById("ball");
        //弧度值
        var d = 0;  
        var timer;
        // 动画帧定时器 requestAnimationFrame()
        requestAnimationFrame(liear);
        function liear() {
            d += 0.01;
            var left = Math.sin(d) * 250 + 250;
            var top = 250 - Math.cos(d) * 250;

            ball.style.left = left + "px";
            ball.style.top = top + "px";
            timer = requestAnimationFrame(liear);
        }
        //点击清除动画帧
        document.onclick = function(){
            cancelAnimationFrame(timer);
        }
    </script>
</body>

</html>
```

> 计数器

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Libo</title>
    <link rel="stylesheet" href="">
    <style>
        body,
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        ul,
        ol,
        li,
        dl,
        dt,
        dd {
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
        }

        ul,
        ol {
            list-style: none;
        }
    </style>
    <script src=""></script>
</head>

<body>
    <h1 id="info">0</h1>
    <button id="start">开始</button>
    <button id="end">暂停</button>
    <script>
        var a = 0;
        var timer ;
        start.onclick = function () {
            timer = setInterval(function () {
                info.innerHTML = ++a;
            }, 1000)
        };
        end.onclick = function(){
            clearInterval(timer);
        }
    </script>
</body>

</html>
```

## 13Math对象

> Math 对象用于执行数学任务。
>
> Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()。
>
> typeof Math => "object"

```js
//语法
var x = Math.PI; // 返回PI
var y = Math.sqrt(16); // 返回16的平方根
```

### 13.1 Math.max()

> 用于确定一组数值中的最大值 可以接收任意多个参数
>

```js
var max = Math.max(3,35,23,17,35);
console.log(max); //35
```

### 13.2 Math.min()

> 用于确定一组数值中的最小值 可以接收任意多个参数
>

```js
var min = Math.min(3,35,23,17,35);
console.log(min); //3
```

### 13.3 Math取整方法🔴

#### 1.ceil()

> 向上舍入, 它总是将数值向上舍入为最接近的整数

```js
console.log( Math.ceil(25.9) ); //26
console.log( Math.ceil(25.00000000000001) ); //26
```

#### 2.floor()

> 向下舍入,它总是将数值向下舍入为最接近的整数

```js
console.log( Math.floor(25.999999) ); //25
console.log( Math.floor(25.000000001) ); //25
```

#### 3.round()

> 执行标准舍入, 它总是将数值四舍五入为最接近的整数

```js
console.log( Math.round(26.44) );  //26
console.log( Math.round(26.001) );  //26
console.log( Math.round(26.55) );  //27
```

### 13.4 Math.random()🔴

> Math.random() 方法 : 返回大于等于0小于1的一个随机数

```js
console.log( Math.random() );  //每次刷新取得随机0-1数

//如果想要实现返回任意两个数 min ~ max 之间的随机数,  改造一下
function random(min,max) {
    return Math.random()*(max-min) + min;
}
console.log(random(25,30));  //返回25-30的随机数
```

### 13.5 Math.abs()

> abs() 方法可返回一个数的绝对值。

```js
console.log( Math.abs(-22)); //22
```

### 13.6 Math.pow(x,y)

> pow() 方法返回 x 的 y 次幂。

```js
 console.log(  Math.pow(3,10) ); //3的10次方  =  59049
```

### 13.7 Math.toFixed()

> toFixed()方法保留x位小数

```js
console.log( Math.random().toFixed(4) ) //保留4位小数
```

### 13.8 Math.PI()

> PI -- 常数π

```js
console.log( Math.PI ); //3.141592653589793
```

### 13.9 三角函数🔴

> 参数x为弧度值 -- 弧度值 = (π*角度)/180°

> sin(x)返回数的正弦。

```js
console.log(Math.sin(Math.PI / 180 * 30));  //0.49999999999999994
```

> cos(x)返回数的正弦。

```js
console.log(Math.cos(Math.PI / 180 * 30));  //0.8660254037844387
```

> tan(x)返回角的正切。

```js
 console.log(Math.tan(Math.PI / 180 * 30)); //0.5773502691896257
```

## 14.Date对象

> Date 对象用于处理日期与时间。
>
> Date()是从1970.1.1.00:00:00 开始经过的  毫秒数 来保存日期

```js
//创建Date()对象的方法

var  now = new Date();
console.log(now);//Sun Jan 31 2021 21:51:16 GMT+0800 (中国标准时间) 
console.log( typeof now ); //object
			     //在调用Date 构造函数不传参数的情况下,新创建的对象自动获得当前日期和时间

//也可以指定时间，通过传参
	let date1 = new Date(2021,12,14,16,38,0); //Fri Jan 14 2022 16:38:00 GMT+0800 
	//此处打印2020是因为月份是0-11,12月代表下一年的1月

//传毫秒值
	let date2 = new Date(1264223165468); // 毫秒值
    console.log(date2);// 从1970.1.10:0:0开始加上这一个毫秒值
	//Sat Jan 23 2010 13:06:05 GMT+0800 (中国标准时间)
	//1264223165468/1000/60/60/24/365~~40年 ==> 1970+40 = 2010

//传日期字符串
	let date3 = new Date("Jan 23,2021");
    console.log(date3); //Sat Jan 23 2021 00:00:00 GMT+0800 (中国标准时间)
```

### Date()对象方法🔴

#### 14.1getFullYear()

> getFullYear() 方法可返回一个表示年份的 4 位数字。

```js
var  now = new Date();
var year = now.getFullYear();
console.log(year); //2021
```

#### 14.2getMonth()

> 从 Date 对象返回月份 (0 ~ 11)。

```js
//注意： 获取的月份是0-11，使用时尽量+1
var  now = new Date();
var month = now.getMonth();
console.log(month +1); //1
```

#### 14.3getDate()

> getDate() 方法可返回月份的某一天。

```js
var  now = new Date();
var day = now.getDate();
console.log(day);//31
```

#### 14.4getDay()

> getDay() 方法可返回一周（0~6）的某一天的数字

```js
//注意： 星期天为 0, 星期一为 1, 以此类推。

var  now = new Date();
var week = now.getDay();
console.log(week); //0
```

#### 14.5getHours()

> getHours() 方法可返回时间的小时字段。

```js
var  now = new Date();
var hours = now.getHours();
console.log(hours); //22
```

#### 14.6getMinutes()

> getMinutes() 方法可返回时间的分钟字段。

```js
var  now = new Date();
var min = now.getMinutes();
console.log(min); //2
```

#### 14.7getSeconds()

> getSeconds() 方法可返回时间的秒。返回值是 0 ~ 59 之间的一个整数。

```js
var  now = new Date();
var sec = now.getSeconds();
console.log(sec);//47
```

#### 14.8getMilliseconds()

> getMilliseconds() 方法可返回时间的毫秒。

```js
var  now = new Date();
var mill = now.getMilliseconds();
console.log(mill);// 可以用来计算时间差
```

### --不常用--

#### toLocaleString()

> toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。

```js
var date = new Date();
console.log( date.toLocaleString() ); // 2021/1/31 下午10:09:00 年月日时分秒 
```

#### toLocaleDateString()

> toLocaleDateString() 方法可根据本地时间把 Date 对象的日期部分转换为字符串，并返回结果。

```js
var date = new Date();
console.log( date.toLocaleDateString());//2021/1/31 年月日
```

#### toLocaleTimeString()

> toLocaleTimeString() 方法可根据本地时间把 Date 对象的时间部分转换为字符串，并返回结果。

```js
console.log( date.toLocaleTimeString() );//下午10:14:57
```

#### toTimeString()

> toTimeString() 方法可把 Date 对象的时间部分转换为字符串，并返回结果。

```js
var date = new Date();
console.log( date.toTimeString() );//22:12:45 GMT+0800 (中国标准时间) 时分秒
```

#### getTimezoneOffset()

> getTimezoneOffset() 方法可返回格林威治时间和本地时间之间的时差，以分钟为单位。

```js
/*
例如，如果时区为 GMT+2, 将返回-120 。

注意： 由于使用夏令时的惯例，该方法的返回值不是一个常量。

提示： 协调世界时，又称世界统一时间，世界标准时间，国际协调时间，简称UTC（Universal Coordinated Time）。

注意： UTC 时间即是 GMT（格林尼治） 时间。
*/
var date = new Date();
console.log( date.getTimezoneOffset() ); //-480
```

#### getUTCHours()

> getUTCHours() 方法可根据世界时 (UTC) 返回时间的小时。

```js
console.log( date.getUTCHours() );// 世界时  14
```

#### getUTCMinutes()

> getUTCMinutes() 方法可根据世界时 (UTC) 返回时间的分钟字段（0~59）

```js
console.log( date.getUTCMinutes() ); // 世界分钟 24
```

### 时间戳

```js
var now1 = Date.now();
console.log(now1); // .now 返回当前时间距离1970.1.1.0.0.0  之间的时间差
var now2 = Date.parse(2021,1,4); // 月份从 1
console.log(now2);// 1970.1.1.0.0.0 到该日期的一个毫秒数
var now3 = Date.UTC(2021,1,4);
console.log(now3); // 月份从 0

//计算some函数执行时间
		var start = Date.now();

        function some() {
            alert("强大自己是解决一切问题的根源");
        }
        some();

        var stop = Date.now();

        result = stop - start;

        console.log(result);

        // 节流
        var  time = 0;
        function f(){
            if ( new Date - time < 2000)return;
        }
        time - new Date();
```

### 练习

```js
//计算2021年2月1距离过年还有多少天？
		timeCount();
        setInterval(timeCount,1000);

        function timeCount() {
            //当前时间
            var nowTime = new Date();
            //过年时间
            var newYear = new Date(2021,1,12,00,00,00);

            var totalMs = newYear - nowTime;
            // console.log(totalMs);
            // 计算 天 时 分 秒
            var day =Math.floor(totalMs/1000/60/60/24);
            var hours =Math.floor(totalMs/1000/60/60)%24;
            var min =Math.floor(totalMs/1000/60)%60;
            var sec =Math.floor(totalMs/1000)%60;
            // 补零
            function addZero(num){
                return (num<10?"0":"") + num;
            }
            document.body.innerHTML = `
                距离过年还有<span>${addZero(day)}</span>天,
                <span>${addZero(hours)}</span>时,
                <span>${addZero(min)}</span>分,
                <span>${addZero(sec)}</span>秒
            `;
			//距离过年还有10天13时29分19秒
        }
```



## 15. ES6

> ECMAScript 6.0(ES6)在2015年6月正式发布
>
> 弥补es5的不足，更加体现面向对象的语言
>
> 方便后续学习vue、尤其是react框架做准备

<img src = "D:\A-study\notes\es6.jpg">



### 15.1变量let和const🔴

> let和const声明的变量在未初始化之前不可以被使用。（暂时性死区TDZ）

```markdown
# var 
  1. 可以重复声明变量
  2. 可以进行变量提升
  
# let
  1. 不可以重复声明变量
  2. 块级作用域
  3. 不可以提升变量
  4. 必须先定义变量再使用
  5. let不会污染全局变量
# const
  1. 不可以重复声明变量
  2. 块级作用域
  3. 声明后不可以进行修改
  4. 一经声明必须初始化赋值
  5. const声明的数组内容可以被修改，所以常规使用const进行数组变量的声明、
  
# 块级作用域
	变量的定义方式决定 作用域的产生
    {} 只要在这个里边使用 let 的定义,let 的变量就会在这个{}产生作用域
```

```js
`变量在初始化之前不可引用，否则会报错。（let，const）`
//let产生块级作用域
if (true){
    console.log(++b);//报错 Uncaught ReferenceError: b is not defined 
    let b = 5;
} 

//let 不允许重复声明
        let v = 2;
        let v = 3;
        console.log(v); //报错

 for (var i = 0; i < 10; i++) {
     console.log(i); //0123456789
 }
console.log(i); //10 如果为let i，则报错


`for循环经典案例`
let arr = [];
for(var i = 0;i<10;i++){
    arr[i] = function(){
        return i;
    }
}
console.log(arr[5]()); //10
//打印结果为10原因是var具有变量提升，for循环结束i=9，出来变成了10，所以不管打印arr[x]都是10
//解决：将var变为let，let不具备变量提升
let arr = [];
for(let i = 0;i<10;i++){
    arr[i] = function(){
        return i;
    }
}
console.log(arr[5]()); //5
console.log(arr[6]()); //6

`let不会污染全局变量`
let RegExp = 10;
console.log(RegExp); //10
console.log(window.RegExp); //RegExp函数
```

```js
/*
    const 声明常量   --- 常量: c π E
    const 保存的是变量的地址不变,而不是地址里边的属性的值不变
*/
// const 声明常量 只读属性,一旦声明,常量的值不能修改
	    const a = 10;
        console.log(a);//10
        a = 20;
        console.log(a); // 报错
        

// 在一开始声明的时候就要赋值,不赋值就会报错
		const a;
        a = 10;
        console.log(a)
       
// const产生块级作用域
		const b = 10;
        {
            const b = 20;
            const c = 30;
            console.log(b); //20
            console.log(c); //30
        }
        console.log(c); //报错

//obj 这个对象 - 存的是一个地址,这个地址指向的是一个对象
		const obj = {
            age :10
        };
        console.log(obj); //{age: 10}
        console.log(obj.age); //10
        
        obj.age = 20;
        console.log(obj); //{age: 20}

// const声明的数组内容可以被修改
		const arr = [1,2,3];
        arr.push(99);
        console.log(arr); //[1, 2, 3, 99]

//使用Object.freeze(数组) 方法可以冻结该数组，让其内容不被修改
		const qaz = Object.freeze([1,2,3,4]);
        qaz.push(88);
        console.log(qaz); //报错
```

### 15.2顶层对象属性与全局变量

> 顶层对象在浏览器环境指的是window对象，在Node中指的是global对象。在ES5中，顶层对象属性与全局变量是等价的

```js
window.a = 1;
console.log(a); //1
a = 2;
window.log(a); //2

/*
由于顶层对象属性与全局变量挂钩，被认为是JavaScript最大败笔之一。
	解决：
		在ES6引入let const和class声明的全局变量不在属于顶层对象的属性
		var和function声明的变量依然属于全局对象的属性
*/
var a = 1;
console.log(window.a);//1

let b = 1;
console.log(window.b); //undefined
```

### 15.3解构赋值🔴

- es6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，这被称为解构(Destructuring)
- **解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。**

#### 1.数组的解构赋值

> 本质上这种写法属于"模式匹配"，等号两边模式相同，右边的值就会一一对应赋值给左边的变量

```js
//语法

    let [a,b,c] = [1,2,3];
            console.log(a,b,c); //1 2 3

    let [, , x] = ["孙悟空","猪八戒","沙悟净"];
            console.log(x); //沙悟净

    let [xx,yy,zz] = ["孙悟空","猪八戒"];
            console.log(xx,yy,zz); // 孙悟空 猪八戒 undefined

    let [w,e,r] = "二郎神";
            console.log(w,e,r); //二 郎 神
```

> 解构赋值允许指定默认值
>
> **只有当一个数组成员严格等于 undefined ,默认值才会生效**

```js
let [a = false] = [true]; //默认值为false
console.log(a); //true
if (a){
    console.log("正确")
}else{
    console.log("错误")
}
//由于a解构赋值为true进入if语句打印输出--正确

    let [x,y = "小明"] = ["小红"];
    console.log(x,y); //小红 小明

    let [t,tt = "大家好"] = ["你好",undefined];
    console.log(t,tt); //你好 大家好

    let [u,uu = "world"] = ["hello",null];
    console.log(u,uu); //hello null

    let [cc = 44,gg = cc] = [];
    console.log(cc,gg);// 44  44
    console.log( cc === gg ); //true

    let [k = 3, kk = k] = [1];
    console.log(k,kk); //1 1
```

> 默认值可以引用解构赋值的其他变量,但是该变量必须已经申明

```js
    let [n = nn, nn = 1] = [];
    console.log(n,nn);
// n用nn做默认值时,nn还没有申明

---------------------------------------
    let [n = 1, nn = n,mm = nn] = [22];
    console.log(n,nn,mm); //22 22 22
/*
   n = 22; 
   		nn = n(22);
   			mm = nn(22);
*/
---------------------------------------
    let [zz = 111,xx = ll] = [99,77];
    console.log(ll,jj); //99 77
```

#### 2.对象的解构赋值

- ##### 数据解构按照对应位置关系，但是对象解构变量没有顺序，变量必须与属性同名，才能解构成功。**  

- 默认值生效的条件是，对象的属性值严格等于`undefined`。

```js
//语法
    let{a,b} = {
            a:'aa',
            b:'bb'
    };
    console.log(a,b); // aa bb

// 变量没有对应的同名属性,导致去不到值,最后等于 undefined
    let {baz} = {foo:"aaa",bar:"bbb"};
    console.log(baz);

//foo 是匹配的模式,baz才是变量.  正真被赋值的是变量baz,而不是模式foo
    let {foo:baz} = {foo:"aaa",bar:"bbb"};
    console.log(baz); //aaa

    let obj = { f:"hello",la:"world"};
    let {f:g,la:e} = obj;
    console.log(g,e); // hello world

//默认值生效的条件是，对象的属性值严格等于undefined。
var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // null
```

> 练习

```js
    let obj = {
        p : [
            "hello",
            { y : "world"}
        ]
    };
// p也要作为变量赋值

    let  {p,  p : [  x , {y}  ]  }  = obj;

    console.log(x, y, p); // hello  world  hello",{y: "world"}]
```

#### 3.字符串的解构赋值

- 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个**类似数组的对象**。
- 类似数组的对象都有一个`length`属性

```js
let[a,b,c,d] = 'hello';
console.log(a,b,c,d);//h e l l

let {length : len} = 'hello';
len // 5
```



#### 4.函数解构赋值🔴

> 函数参数的解构赋值

> ##### 注意：
>
> ##### 1. 函数的length属性是函数的形参个数！
>
> ##### 2. 一般带有默认值得参数要放在最后！（潜规则）

```js
//语法
     function fun([x,y]){
     console.log(x+y); //3
     }
     fun([1,2]);//实参

//函数参数为对象的解构赋值
    function gg( {x = 0, y = 0} = {}) {
        return [x,y];
    }

    console.log( gg() ); // [0,0]
    console.log( gg( {} ) ); //  [0,0]
    console.log( gg( { x : 6} ) ); //[6, 0]
    console.log( gg( { x : 6 , y : 88 } ) ); //[6, 88]


//函数返回值作为解构赋值
    function a() {
        return ["孙悟空",,"猪八戒"];
    }
    let [x,y,z] = a();
    console.log(x,y,z); //孙悟空 undefined 猪八戒

	
	function b() {
        return {
            name: "沙悟净",
            age: 9.9,
            job:"唐僧"
        }
    }
    let { name:na, age:ag, job:jb } = b();
    console.log( na,ag,jb ); //沙悟净 9.9 唐僧
```

> 解构赋值应用场景(解构的用途)

```js
//场景一：变量值得交换
	let x = 1;
    let y = 2;
    [x,y] = [y,x];
    console.log(x,y); //2 1

//场景二：函数返回多个值
	function ex() {
        return [4,5,6,7,8,9]
    };
    let [a,b,c] = ex(); //4 5 6

//场景三：函数参数的定义之数组
	function d([q,w,r]) {
        console.log(q,w,r);//路飞 山治 索隆
    }
	d( ["路飞","山治","索隆"] ); 
	
//场景四：函数参数的定义之对象
    function f({q,w,r}) {
        console.log(q,w,r);//5 2 0 
    }
    f( {q:5,w:2,r:0} );

//场景五：提取json数据
    let jsonDate = {
        id: 1001,
        num: 1000,
        name:"JavaScript高级教程"
    };
    let {id,num,name} = jsonDate;
    console.log(id,num,name); //1001 1000 JavaScript高级教程

    console.log(`<p>${id}</p>`) //<p>1001</p>
```





### 15.4扩展运算符🔴

> 扩展运算符 ( ...变量名 ) ---- rest参数 : 用于获取多余的参数

> 扩展运算符（spread运算符）用三个点号（...）表示
>
> 功能是把数组或类数组对象展开成一系列用逗号隔开的值

```js
//语法
let foo = function(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let arr = [1, 2, 3];
//传统写法
foo(arr[0], arr[1], arr[2]);
//使用扩展运算符
foo(...arr);// 1 2 3

let a = [1,2,3];
let b = [...a];
b.push(99);
console.log(a); //[1,2,3]
console.log(b);//[1,2,3,99]
```

> 扩展运算符应用场景🔴

```js
//1.数组深拷贝--数组中的元素为基本类型，若为object，依然会拷贝引用地址
    var arr = [1, 2, 3];
    var arr2 = arr;
    var arr3 = [...arr];
    console.log(arr===arr2); //true, 说明arr和arr2指向同一个数组的引用地址
    console.log(arr===arr3); //false, 说明arr3和arr指向不同数组引用，在堆内存中为arr3另外分配了内存空间

//2.把一个数组插入另一个数组字面量
    var arr4 = [...arr, 4, 5, 6];
    console.log(arr4);//[1, 2, 3, 4, 5, 6]

//3.字符串转数组
    var str = 'love';
    var arr5 = [...str];
    console.log(arr5);//[ 'l', 'o', 'v', 'e' ]

//4.函数调用
    function push(array, ...items) {
        array.push(...items)
    }

    function add(x, y) {
        return x + y
    }
    const numbers = [4, 38]
    add(...numbers) // 42

//5.数组合并
    let vv = [3,4,5];
    let ww = [90,80,70];
    // let  aa = vv.concat(ww);
    let  aa = [...ww,...vv];
    console.log(aa) // [90, 80, 70, 3, 4, 5]

//6.替代apply方法
    // ES5 的写法
    function f(x, y, z) {
    	console.log(x,y,z)// 0 1 2
    }
    var args = [0, 1, 2];
    f.apply(null, args);
	
    // ES6 的写法
    function f(x, y, z) {
    	console.log(x,y,z)//0 1 2
    }
    var args = [0, 1, 2];
    f(...args);

//7.将一个数组添加到另一个数组的尾部。
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    arr1.push(...arr2);
```

### 15.5rest运算符

> rest运算符也是三个点号，不过其功能与扩展运算符恰好相反，把逗号隔开的值序列组合成一个数组。

```js
//主要用于不定参数，所以ES6开始可以不再使用arguments对象
    var bar = function(...args) {
        var arr = args;
        console.log(arr);// [1, 2, 3, 4]
    }
    bar(1, 2, 3, 4); 


    bar = function(a, ...args) {
        console.log(a); //1
        console.log(args);//[2,3,4]
    }

    bar(1, 2, 3, 4);
```

> rest运算符配合解构使用

```js
// 数组--接收剩下来的所有东西 | 用于获取多余的数据
    let [a, ...rest] = [1, 2, 3, 4];
    console.log(a);//1
    console.log(rest);//[2, 3, 4]

`注意：`
	let [a,...c,b] = [1,2,3,4,5,6,7,8];
    console.log(a);
    console.log(b);
    console.log(c);
    // 报错 --- 必须为最后一个
    // Uncaught SyntaxError: Rest element must be last element

	let [x,y,...z] = [1,2];
    console.log(x);
    console.log(y);
    console.log(z); // 空数组

// 对象
    let {age, ...rest} = {name: 'qxj', age: 24, hobby: 'write code'};
    console.log(age); //24
    console.log(rest);//{ name: 'qxj', hobby: 'write code' }
```

### 15.6扩展运算符(spread)和rest运算符的区别

```markdown
1. spread运算符：放在赋值一方，即放在实参或者等号右边
2. rest运算符：放在被赋值一方，即放在形参或者等号左边
```



### 15.7箭头函数🔴

```markdown
# 作用
	函数目的指向性更强，可读性更好，简化代码，提升开发效率
	
# 特点
   1. 不用写function关键字；
   2. 只能作为函数使用不能new，没有原型；
   3. 参数不能重复命名；
   4. 返回值可以不写return，但有时需要配合{}；
   5. 内部arguments this由定义时外围最接近一层的非箭头函数的arguments和this决定其值；
   
# 注意
	箭头函数的参数不可以是相同的变量
	this是静态的，this始终指向函数声明时所在作用域下的this的值
```

```js
//语法
    var sum = (a, b) => {
        return a + b; 
    }
    console.log(sum(10, 20)) // 输出 30
	
//不加return
	var sum = (a, b) => a + b;
	console.log(sum(10, 20)) // 输出 30

//有且仅有一个形参,可以省略圆括号;
//返回值是一条语句,就可以省略大括号和return
    let a = (c) => {                  
        console.log(c);
    };
    a("123");
等价于==>
    let a = c => console.log(c);
     a("123");

//返回值是一个对象,那就要在外边加上圆括号
//不加圆括号对象的{}被识别为function() {}中的大括号，报错
    let sum = (a, b) => ({
        a: a,
        b: b
    })
    console.log(sum(10, 20)); // 输出 {a: 10, b: 20}
```

##### arguments问题!!

```js
let sum = (a, b) => {
    console.log(arguments, a, b);  //报错
};
sum(1, 2);
/*
报错原因：
	如果箭头函数直接在全局定义，传入的参数也会没有，因为在这个箭头函数外围，并没有非箭头函数，所以arguments就没有。
*/
function other() {
    let sum = (a, b) => {
        console.log(arguments, a, b);
    };
    sum(1, 2);
};
other(9, 10, 11); //Arguments(3) [9, 10, 11, callee: ƒ, Symbol(Symbol.iterator): ƒ] 1 2
```

##### this指向问题!!

> this与arguments很相似，都是由定义时外围最接近一层的非箭头函数的值决定其值，只是在全局时有一点不同

```js
let sum = () => {
    console.log(this); //window
};
sum(); 

//此时的this是window，就是说箭头函数在定义时外界没还有一个非箭头函数包裹着他，他内部的this就是window。

箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值。
这就意味着如果箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this🔴
```



### 15.8Symbol()数据类型🔴

> 存在意义：解决对象属性名冲突问题！！

##### 简介

```markdown
1. ES5除类数组对象外，对象属性名都是字符串，这容易造成属性名的冲突。而且JavaScript是弱类型语言，属性名冲突不会报错，处于代码执行顺序后面的属性值会覆盖前面的属性值（`属性值容易被篡改`）

2. ES6引入了`Symbol`数据类型很好的解决了对象属性名冲突的问题!!

3. Symbol表示独一无二的值,不会造成属性名重复和覆盖，它是原始数据类型，不是构造函数，不能用New

4. ES6之后JavaScript就有了7种数据类型，分别是：Number(数字)、String(字符型)、Boolean(布尔值)、null、undefined、Object(对象)、Symbol(独一无二的值)
```

##### 基本用法🔴

```js
//Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象也不是构造函数。可以接受一个字符串作为参数，为新创建的 Symbol 提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分。
let name = S   
let name2 = Symbol("bb");
console.log(name);  // Symbol()
console.log(typeof name);  // "symbol"
console.log(name,name2); //Symbol() Symbol(bb)
console.log( name === name2); // false
```

##### Symbol特点

```js
`1. Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象；`

`2. Symbol 表示独一无二的值，因此带有相同参数的两个Symbol 值也不相等；`
    // 没有参数的情况
    let name1 = Symbol();
    let name2 = Symbol();
    name1 === name2  // false
    // 有参数的情况
    let name1 = Symbol('foo');
    let name2 = Symbol('foo');
    name1 === name2  // false

`3. Symbol 不能进行隐式类型转换`
	let name = Symbol('foo');
    console.log("你好，"+ name);
    // 浏览器报错

`4. Symbol 值可以显式转为字符串`
	let name = Symbol('foo');
    console.log(String(name));  //字符串 Symbol(foo)
    console.log(name.toString()); // 字符串 Symbol(foo)

`5. Symbol 值可以转换为布尔值`
	let name = Symbol('foo');
    Boolean(name ) // true
    !name // false

`6. Symbol 变量不能作为webStorage的键使用`
	let name = Symbol('foo');
    Boolean(name ) // true
    !name // false

`7.Symbol 值不能转化为数字`🔴
    let name = Symbol('foo');
	console.log(Number(name)); //报错
```

##### Symbol应用场景

```markdown
# Symbol作为对象属性名

1. 获取对象属性名不能使用.运算符，需要使用[]
原因：
    -ES5中对象.运算符获取的属性名是字符串，.运算符会将属性名识别为字符串，新建一个属性名给对象，无法和Symbol属性区别
	-中括号中带双引号的属性名表示字符串属性，不带双引号的属性名表示Symbol属性，以此区别二者
```

```js
let sy = Symbol();
 
// 写法1
let syObject = {};
syObject[sy] = "symbol";
console.log(syObject);    // {Symbol(): "symbol"}
 
// 写法2
let syObject = {
  [sy]: "symbol"
};
console.log(syObject);    // {Symbol(): "symbol"}
 
// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "symbol"});
console.log(syObject);   // {Symbol(): "symbol"}

// 不能用点操作符
syObject[sy];  // "symbol"
syObject.sy;   // undefined 自定义属性
// syObject.sy ==> syObject["sy"]
```

```markdown
2. Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。
    但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。
    如果要读取到一个对象的 Symbol 属性，可以通过Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。
```

```js
let sy = Symbol();
let syObject = {};
syObject[sy] = "symbol";
console.log(syObject);
// {Symbol(): "symbol"}
 
for (let i in syObject) {
  console.log(i);
}    // 无输出
 
Object.keys(syObject);                     // []
Object.getOwnPropertyNames(syObject)  // []
Object.getOwnPropertySymbols(syObject);    // [Symbol()]
Reflect.ownKeys(syObject);                 // [Symbol()]
```

##### Symbol方法🔴

> ##### Symbol.for()
>
> 用于将描述相同的Symbol变量指向同一个Symbol值；

```js
let a1 = Symbol.for('a');
let a2 = Symbol.for('a');
a1 === a2  // true
typeof a1  // "symbol"
typeof a2  // "symbol"

let a3= Symbol("a");
a1 === a3      // false
```

```markdown
# Symbol()和Symbol.for()的相同点：
	定义的值类型都为"symbol"；
# Symbol()和Symbol.for()的不同点：
   1. Symbol()定义的值每次都是新建，即使描述相同值也不相等； 
   2. Symbol.for()定义的值会先检查给定的描述是否已经存在，如果不存在才会新建一个值，并把这个值登记在全局环境中供搜索，Symbol.for()定义相同描述的值时会被搜索到，描述相同则他们就是同一个值。
```

> ##### Symbol.keyfor()
>
> 用来检测该字符串参数作为名称的 Symbol 值是否已被登记，返回一个已登记的 Symbol 类型值的 key
>
> Symbol.keyFor()函数可以查找到Symbol.for()函数生成的Symbol值

```js
let a1 = Symbol.for("a");
Symbol.keyFor(a1);    // "a"

let a2 = Symbol("a");
Symbol.keyFor(a2);    // undefined --Symbol()写法没有登记机制

//代码中a1已经用Symbol.for()登记过，因此返回的key为"a"，而a2没有被登记，因此返回undefined
```

##### Symbol属性

> ##### Symbol.prototype.description

```js
//description用于返回Symbol数据的描述
    // Symbol()定义的数据
    let a = Symbol("acc");
    a.description  // "acc"
    Symbol.keyFor(a);  // undefined --Symbol()写法没有登记机制

    // Symbol.for()定义的数据
    let a1 = Symbol.for("acc");
    a1.description  // "acc"
    Symbol.keyFor(a1);  // "acc"

    // 未指定描述的数据
    let a2 = Symbol();
    a2.description  // undefined
```

##### 数组方法🔴

> ##### keys()
>
> ##### 获取数组下标--键

```js
let arr = ["孙悟空","猪八戒","沙悟净","唐僧"];
console.log([...arr.keys()]); //[0, 1, 2, 3]
```

> ##### values()
>
> ##### 获取数组的项

```js
let arr = ["孙悟空","猪八戒","沙悟净","唐僧"];
console.log([...arr.values()]); //["孙悟空", "猪八戒", "沙悟净", "唐僧"]
```

> ##### entries()
>
> ##### 获取数组键值对(下标和数组)

```js
let arr = ["孙悟空","猪八戒","沙悟净","唐僧"];
console.log([...arr.entries()]);
/*
	0: (2) [0, "孙悟空"]
    1: (2) [1, "猪八戒"]
    2: (2) [2, "沙悟净"]
    3: (2) [3, "唐僧"]
*/
```

##### 遍历数组🔴

> ##### for...of
>
> ##### 一般用于遍历对象

```js
let arr = ["孙悟空","猪八戒","沙悟净","唐僧"];
for (let key of arr.entries()) {
    console.log(key);
}
/*
	(2) [0, "孙悟空"]
    (2) [1, "猪八戒"]
    (2) [2, "沙悟净"]
    (2) [3, "唐僧"]
*/

for (let key of arr.keys()) {
    console.log(key);
}
//0 1 2 3

for (let key of arr.values()) {
    console.log(key);
}
//孙悟空 猪八戒 沙悟净 唐僧

// 解构赋值
        for(let [item,index] of arr.entries()){
            console.log(item);
            console.log(index);
        }
		//0 孙悟空 1 猪八戒 2 沙悟净 3 唐僧
-------------------------------------------------------------------

//for...of遍历对象
    
	var obj = {
        name:"Mr Li",
        age:12,
        sex:2
    };
/*
	for (let key of obj){
        console.log(key); // 报错
        console.log(obj[key]);
    }
*/

// Object 是所有对象的父类
    for (let [key,value] of Object.entries(obj)){
        console.log(key,value);
        //name Mr Li
        //age 12
        //sex 2
    }


//Symbol 值作为属性名的遍历
    let s5 = Symbol("s5");
    let s6 = Symbol("s6");
    let a = {
        [s5]:"s5",
        [s6]:"s6"
    };
/*
    for...in  和 for...of 都没有办法遍历到Symbol值的属性
    Symbol值的属性不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。
    通过 Object.getOwnPropertySymbols(对象)方法获取一个对象上的Symbol属性名
     Reflect.ownKeys(对象名): 返回所有类型的属性名,包括常规的属性名和Symbol属性名
*/
	
    a.hello = "hello";
	console.log(Object.keys(a));//["hello"]
    console.log(Object.getOwnPropertySymbols(a)); //[Symbol(s5), Symbol(s6)]
	console.log( Reflect.ownKeys(a));// ["hello", Symbol(s5), Symbol(s6)]
```

> ##### for...in
>
> ##### 遍历对象

```js
//定义对象
    var obj = {
        name:"Mr Li",
        age:12,
        sex:2
    };
    console.log(obj);//{name: "Mr Li", age: 12, sex: 2}

	for (var key in obj){
        console.log(key); //name age sex
        console.log(obj[key]);//Mr Li  12  2
    }
```

##### 总结

```markdown
1. Symbol是原始数据类型，独一无二，需要通过传参区分每个Symbol,即便传参相同，返回值却不同
2. 参数只能是字符串，如果是对象，通过toString转化
3. Symbol不能进行运算，也不能和其他类型值进行运算
4. Symbol值可以显示转化为字符串和布尔值，不能转成数值(Number)
5. 因为Symbol是特殊字符串，不能使用.操作，需要使用[]操作
6. Symbol值不会出现在for...in和for...of中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。
```

### 15.9 字符串扩展

```markdown
es6 新增字符串方法有:
	includes()
	startsWith()
	endsWith()
	repeat()
	padStart()
	padEnd()
	模板字符串
# 详情见 -- 十.字符串相关方法
```

### 15.9数值的扩展

> ##### ES6 在Number对象上，新提供了Number.isFinite()和 Number.isNaN()两个方法。

- **Number.isFinite()**用来检查一个数值是否为**有限**的（finite）

- 如果参数类型不是数值，**Number.isFinite**一律返回`false`。***

```js
//Number.isFinite()用来检查一个数值是否为有限的（ﬁnite）。
    Number.isFinite(15); // true 
    Number.isFinite(0.8); // true 
    Number.isFinite(NaN); // false 
    Number.isFinite(Infinity); // false 
    Number.isFinite(-Infinity); // false 
    Number.isFinite('foo'); // false 
    Number.isFinite('15'); // false 
    Number.isFinite(true); // false
```



- **Number.isNaN()**用来检查一个值是否为**NaN**，该方法**不会强制将参数转换成数字**，只有在参数是真正的数字类型，且值为 NaN 的时候才会返回 true
- 如果参数类型不是**NaN**，**Number.isNaN**一律返回`false`。***

```js
Number.isNaN(NaN);        // true 
Number.isNaN(Number.NaN); // true 

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。 
    Number.isNaN("NaN");      // false，字符串 "NaN" 不会 被隐式转换成数字NaN
    Number.isNaN(undefined);  // false 
    Number.isNaN({});         // false 
    Number.isNaN("blabla");   // false

// 下面的都返回 false 
    Number.isNaN(true); 
    Number.isNaN(null); 
    Number.isNaN(37);
    Number.isNaN("37"); 
    Number.isNaN("37.37");
    Number.isNaN(""); 
    Number.isNaN(" ");
```



> ##### ES6 将全局方法parseInt()和parseFloat()，移植到Number对 象上面，行为完全保持不变。

```js
// ES5的写法 
    parseInt('12.34') // 12 
    parseFloat('123.45#') // 123.45
// ES6的写法 
    Number.parseInt('12.34') // 12 
    Number.parseFloat('123.45#') // 123.45


//目的：逐步减少全局性方法，使得语言逐步模块化
	Number.parseInt === parseInt // true 
    Number.parseFloat === parseFloat // true
```



> ##### Number.isInteger()用来判断一个值是否为整数

- 如果参数不是数值，Number.isInteger返回**false**

```js
//在 JavaScript 内部，整数和浮点数是同样的储存方法，所以 3 和 3.0 被视为同一个值
    Number.isInteger(25) // true 
    Number.isInteger(25.0) // true 
    Number.isInteger(25.1) // false 
    Number.isInteger("15") // false 
	Number.isInteger(null) // false
	Number.isInteger(true) // false
	Number.isInteger() // false
```

### 15.10Math对象的扩展

> ##### ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方 法都是静态方法!!! 只能在 Math 对象上调用。

#### Math.trunc() 

- Math.trunc方法用于去除一个数的小数部分，返回整数部分。	
- 对于非数值，Math.trunc内部使用**Number方法**将其先转为数值
- 对于空值和无法截取整数的值，返回NaN。

```js

    Math.trunc(4.1) // 4 
    Math.trunc(4.9) // 4 
    Math.trunc(-4.1) // -4 
    Math.trunc(-4.9) // -4 
    Math.trunc(-0.1234) // -0
    console.log(Math.trunc("15.3")); //15
    Math.trunc('123.456') // 123
    Math.trunc(true) //1
    Math.trunc(false) // 0
    Math.trunc(null) // 0
    Math.trunc(NaN);      // NaN
    Math.trunc('foo');    // NaN
    Math.trunc();         // NaN
    Math.trunc(undefined) // NaN
```

#### Math.sign()

- Math.sign方法用来判断一个数到底是正数、负数、还是零。**对于 非数值，会先将其转换为数值**
- 对于那些无法转为数值的值，会返回`NaN`

```markdown
    参数为正数，返回+1； 
    参数为负数，返回-1； 
    参数为 0，返回0； 
    参数为-0，返回-0; 
    其他值，返回NaN
```

```js
Math.sign(-5) // -1 
Math.sign(5) // +1 
Math.sign(0) // +0 
Math.sign(-0) // -0 
Math.sign(NaN) // NaN
Math.sign()  // NaN
Math.sign(undefined)  // NaN
Math.sign('')  // 0 
Math.sign(true)  // +1
Math.sign(false)  // 0 
Math.sign(null)  // 0 
Math.sign('9')  // +1 
Math.sign('foo')  // NaN 
Math.sign()  // NaN 
Math.sign(undefined)  // Na
```

#### Math.cbrt()

- Math.cbrt方法用于计算一个**数的立方根**。
- 对于**非数值**，Math.cbrt方法内部也是先使用Number方法将其**转 为数值**

```js
Math.cbrt(-1) // -1 
Math.cbrt(0)  // 0 
Math.cbrt(1)  // 1 
console.log(Math.cbrt("8")); //2
```

#### Math.hypot()

- Math.hypot方法返回所有参数的平方和的平方根。
- 如果参数不是数值，`Math.hypot`方法会将其转为数值。**只要有一个参数无法转为数值，就会返回 NaN**。

```js
console.log(Math.hypot(3, 4);) // 5 
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN
```

```markdown
# 指数运算符 
	指数运算符（**）
```

```js
2 ** 2 // 4 
2 ** 3 // 8

let a = 1.5; a **= 2; // 等同于 a = a * a;
let b = 4; b **= 3; // 等同于 b = b * b * b;
```



## 16.DOM

### 16.1概述

> 什么是DOM？

```markdown
1. 基本上网页由 HTML 和 CSS 文档组成。
2. 浏览器用于创建文档的描述被称为文档对象模型（DOM）。
3. 它使 Javascript 能够访问和操作页面的元素和样式。
4. 该模型构建在基于对象的树结构中，并定义：
        HTML 元素作为对象
        HTML 元素的属性和事件
        访问HTML元素的方法
```

<img src="D:\A-study\notes\DOM树.jpg"/>

> DOM最小组成单位叫做节点  [node]
>

### 16.2节点类型🔴

```markdown
 1. document  顶层节点
 2. documentType  DOCTYPE标签
 3. Element  元素节点(div、p)
 4. Attribute  网页元素的属性节点(class、id、value)
 5. text  文本节点(空格、换行)
 6. comment  注释节点
```

### 16.3获取节点🔴

> 节点类型描述

<img src = "D:\A-study\notes\节点类型描述.jpg">

```markdown
# 获取子代节点（动态获取）。
	ele.childNodes： 文本节点(空格、换行)、元素节点。
	ele.children： 只获取元素节点!!
	
# 获取父节点
	ele.parentNode：获取父亲节点。
	ele.offsetParent：找到定位父级。
		
# 节点属性
	nodeType -- 返回节点类型对应的常数值
	nodeName -- 返回节点类型
	nodeValue -- 返回节点内容
```

```html
<body>
    
    <div id="wrap" class="box">
        <p id = "p1">大家好</p>
        我好
        <!--哈哈哈-->
    </div>
    
</body>
    <script>
		let box = document.getElementById("wrap");
        console.log( box.childNodes );//NodeList(5) [text, p, text, comment, text]
        console.log(box.children);//HTMLCollection [p]
        console.log(box.parentNode); //<body>...</body>
        
  //定位父级！！
        let p = document.getElementById("p1");
         console.log( p.offsetParent ); // body标签
  //offsetParent定位父级参照物是相对定位，默认body标签，如果给div.box标签添加相对定位，则p的定位父级就是div。若p标签设置固定定位，则固定定位没有参照相对定位显示，返回null。特殊！！
    </script>
```

#### --不常用的API--

```markdown
# firstChild
	获取第一个子节点
# lastChild 
	获取最后一个子节点
# firstElementChild
	获取第一个元素节点
# lastElementChild
	获取最后一个元素节点
# previousSibling
	获取上一个紧挨着的兄弟节点 -- 兄弟节点：同属一个父亲的节点
# previousElementSibling
    获取上一个紧挨着的兄弟元素节点
# nextSibling 
	获取下一个紧挨着的兄弟节点
# nextElementSibling
	获取下一个紧挨着的兄弟元素节点
```

```html
<div id="box">
        <p>孙悟空</p>
        <p>猪八戒</p>
        <p class="sha">沙和尚</p>
        <p>唐僧</p>
        <p>白马</p>
</div>
 <script>
        const box = document.getElementById("box");
        // 第一个子节点
        console.log( box.firstChild ); //#text
        // 第一个子元素节点
        console.log( box.firstElementChild ); //<p>孙悟空</p>

        const sha = document.querySelector(".sha");

        // 上一个紧挨着的兄弟节点
        console.log(sha.previousSibling); //#text
        console.log(sha.previousElementSibling); //<p>猪八戒</p>

        //
        console.log(sha.nextSibling); //#text
        console.log(sha.nextElementSibling); // <p>唐僧</p>

    </script>
```

### 16.4删除节点🔴

> 原生js 不能自己删除自己 , 只能通过父节点删除

> 语法：parentNode.removeChild(node)

```html
<div id="box">
        <p>001</p>
        <p>002</p>
        <p>003</p>
</div>
<script>
        const box = document.getElementById("box");
        let  child = box.children;
        let p1 = child[0];
        let p2 = child[1];
        let p3 = child[2];
        // 原生js  不能自己删除自己 , 只能通过父节点删除
        //  removeChild() 删除子节点
        box.removeChild(p2);
        //  p1,p3 还是原来的自己,只要是一个变量存储某个节点
        // children 获取子元素节点是动态的

        console.log( p2 ); // 存在内存里边
    </script>
```

### 16.5添加节点🔴

```markdown
1. 创建节点 -- createElement、createTextNode
2. 添加节点 -- appendChild
3. 添加节点功能
```

```html
<div id="box">
    <p>001</p>
    <p>002</p>
    <p>003</p>
</div>
<script>
        const box = document.getElementById("box");
        //  创建节点
        let p2 = document.createElement("p");
    	p2.classList.add("add");
        p2.innerHTML = "孙悟空大战猪八戒";
        // 父级追加子节点
        box.appendChild(p2);
        //给p添加功能
        let pp = document.querySelector(".add");
        pp.onclick = function () {
            console.log("完胜)
        };
        // 添加文本节点
        let text = document.createTextNode("唐僧念咒");
        pp.appendChild(text);
    </script>
```

> insertBefore(新节点，旧节点)用于在任意位置添加节点

```js
     let p1 = document.querySelector("#box p:nth-child(1)");
     let p3 = document.querySelector("#box p:nth-child(3)");
	 let div = document.createElement("div"); //创建div节点
     div.innerHTML = "强大自己是解决一切问题的根源";
     div.style.color = "red";
	 box.insertBefore(div,p3); //div为创建的节点，在p3之前添加
```

> replaceChild(新节点，旧节点)用于将新的节点替换某个旧节点

```js
	 box.replaceChild(div,p1); //将p1节点替换为div新创建的节点
```

> ##### 一次创建多个节点--createDocumentFragment()

```html
<ul id="box">
    
</ul>
<script>
	const ul = document.getElementById("box");
    // 文档碎片 / 片段 :
    let fra = document.createDocumentFragment(); //创建多个节点
    for (let i = 0; i <100 ; i++) { //循环创建100个
        let li = document.createElement("li"); //创建li节点
        li.innerHTML = i + "孙悟空"; //li内容
        fra.appendChild(li); //在fra里面追加子节点li
    };
    ul.appendChild(fra); //最后在ul追加fra
</script>
```

## 17. BOM

### 17.1概述

> 什么事BOM?

```markdown

1. BOM（Browser Object Model）即浏览器对象模型,它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window
   BOM核心对象有两个身份：
            ES中的全局作用域(global)
            浏览器窗口的JavaScript接口
2. BOM 比 DOM 更大，它包含 DOM。

3. BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。
```

<img src = "D:\A-study\notes\BOM.jpg">



> BOM主要包含五个基础对象：

```markdown
1. window：表示浏览器实例
2. location：加载文档的信息和常用导航功能实例
3. navigator：客户端标识和信息的对象实例
4. screen：客户端显示器信息
5. history：当前窗口建立以来的导航历史记录
```

<img src = "D:\A-study\notes\BOM2.jpg">

### 17.2window对象

> 充当ES中的全局作用域和浏览器窗口的JavaScript接口

#### 1.global全局作用域

```markdown
在全局作用域下，所有使用var生命的变量和函数都会成为window对象的属性和方法。
并且浏览器API 和 多数构造函数 都会以 window 对象的属性
 	不同的浏览器window对象的属性可能不同！
```

#### 2.窗口关系

> 浏览器窗口大小设置

```markdown
1. window.innerWidth  window.innerHeight(浏览器可视区域大小)

2. window.outerWidth  window.outerHeight(浏览器软件界面整体大小)
```

> 浏览器窗口位置获取

```markdown
1. window.screenTop  window.screenLeft 
		窗口相对于屏幕左(右)侧的距离, number (单位 px)

2. window.screenX  window.screenY
```

> 浏览器打开窗口

```js
document.onclick = function () {
    window.open(
        "https://www.baidu.com",
        "_blank",
        "height=500,width=500,top=300,left=300,resizable =yes"
    );
};
```

> 浏览器关闭窗口

```js
document.onclick = function () {
    window.close();
}
```

#### 3.window常用事件

> 页面加载事件

```markdown
1. window.onload 是窗口 (页面）加载事件,当文档内容完全加载完成会触发该事件
2. 如果页面的图片很多的话, 从用户访问到onload触发可能需要较长的时间, 交互效果就不能实现，必然影响用户的体验，此时用 DOMContentLoaded 事件比较合适。
3. DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等
```

```js
window.onload = function () {
    console.log(11111);
    // 当前页面加载完毕之后在执行
}
```

> 滚动事件

```js
window.onscroll = function () {
    console.log("滚动事件");
};
```

> 调整窗口大小事件

```js
//window.onresize 是调整窗口大小加载事件, 当触发时就调用的处理函数。
window.onresize = function () {
    console.log("窗口大小改变了");
    console.log( window.innerWidth );
    console.log( window.innerHeight );
}
```

#### 4.location对象🔴

> Location对象包含有关当前URL的信息.它是一个比较特别的对象,因为它既是Window对象的一部分,可通过`window.location`属性来访问.也是document对象的属性,通过`document.location`来用.window.location === document.location

```markdown
**百度例：**
# hash
	返回URL中的hash，#后跟零个或多个字符，#后没有则返回空字符串
		# -- 位置标志符：当前页面的一个位置信息，用途：记录在历史记录中在history中使用
		
# host
	返回服务器名称和端口号   www.baidu.com
	
# hostname
	返回不带端口号的服务器名称  www.baidu.com
	
# href
    返回当前加载页面的完整URL  https://www.baidu.com/
	
# pathname
	返回URL中的目录或文件名	/

# port
	返回URL中指定的端口号，如果URL中不包含端口号,则这个属性返回空字符串	
	
# protocol 
	返回页面使用的协议  https:
	
# search
	返回URL的查询字符串。若？后没有字符，则返回空字符串
```

> location对象方法

``` markdown
1. reload()	重新加载当前页面
		window.location.reload()  // 执行后会重新加载当前页面
		
2. assign() 加载新页面
		window.location.assign('https://www.baidu.com')
		
3. replace() 用一个新页面代替当前页面(跳转页面)
		window.location.replace('https://www.baidu.com')
		
# assign()和replace()区别：🔴
	assign会在历史记录中留下之前的老页面地址，可以在新页面中点击回退回到前一个页面
	replace使用新地址替换老地址，不会回到前一个页面
```

#### 5.history对象

> window.history属性指向 History 对象，它表示当前窗口的浏览历史。
>

> history主要属性

```markdown
1. length  
		当前窗口访问过的网址数量（包括当前网页）
		window.history.length // 1

2. state  
		history堆栈最上层的状态值(当前状态)
		window.history.state // undefined
```

> history方法

```markdown

1. back()
		history.back() --移动到上一个网址，等同于点击浏览器的后退键。对于第一个访问的网址，该方法无效果。
		
2. forward()
		history.forward --移动到下一个网址，等同于点击浏览器的前进键。对于最后一个访问的网址，该方法无效果
		
3. go()
		history.go(参数) --接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址
			例：go(1)相当于forward()，go(-1)相当于back()，如果不指定参数，默认参数为0，相当于刷新当前页面。
			
# 移动到以前访问过的页面时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页。
```

#### 6.各种距离的获取 -- 总结🔴

<img src = "D:\A-study\notes\distance1.jpg">

<img src = "D:\A-study\notes\distance2.jpg">

<img src = "D:\A-study\notes\distance3.jpg">

```markdown
1. 获取真正内容可视区宽高，不包含控制台
		console.log( document.documentElement.clientWidth );
        console.log( document.documentElement.clientHeight);

2. 获取元素宽高
		// 元素内部的空间大小,有滚动条占用的空间不计算在内
        console.log( div.clientWidth ); // width + padding 左右
        console.log( div.clientHeight );// height + padding 上下
        
        // 元素本身宽高
        console.log( div.offsetWidth ); // width+padding+border
        console.log( div.offsetHeight );
        
3. 获取元素定位父级的距离,不包含父级border
		//p 元素的上外边框到包含元素的上内边框之间的像素
		console.log( p.offsetTop );
        console.log( p.offsetLeft );
        
4. 获取元素中内容所占实际高度
	     console.log(  div.scrollWidth   ); // 不包含滚动条的宽
         console.log(  div.scrollHeight  ); // 有内容超出 -- 内容的高度 + padding
        
5. 获取元素自己所有信息数据🔴
		ele.getBoundingClientRect()  --位置相对视口左上角
		(width,height,x,y....)
6. 获取滚动距离🔴
		页面滚动高的获取：document.documentElement.scrollTop
		页面滚动宽的获取：document.documentElement.scrollLeft
		元素滚动高的获取：元素节点.scrollTop
		元素滚动宽的获取：元素节点.scrollLeft
		页面的滚动高(宽)可以赋值，能让页面滚动到指定的位置；
		设置滚动距离：window.scrollTo(x,y);
					window.scrollTo(100,200); -- 滚动到高100宽200位置
		####			
         动画滚动？
         	document.onclick = function () {
            let top = document.documentElement.scrollTop;
            (function sll() {
                if( top > 0){
                    top -= 20;
                    requestAnimationFrame(sll);
                }else{
                    top = 0;
                }
                document.documentElement.scrollTop = top;
            })();
          }
          
```

#### 7.event事件🔴

> event事件对象是伴随着事件出发而产生的一个内置对象，它存储了关于该事件的各种信息，比如鼠标位置、按键信息等，同时也可以提供很多控制事件传递的方法！

**兼容**

```js
//IE8下使用全局event对象，其他浏览器使用事件函数的第一个参数
ele.onclick = function(e){
	e = e || window.event
};
```

##### 鼠标位置🔴

```js
//事件触发时鼠标距离可视区位置(窗口可视区)
ele.onclick = function(e){
	console.log(e.clientX);
    console.log(e.clientY);
};

//事件触发，鼠标距离文档的位置(html左顶上角)
	console.log(e.pageX);
    console.log(e.pageY);

//事件触发，鼠标距离本身元素距离(div盒子点击，鼠标位置距离div盒子左顶上角距离)
	console.log(e.offsetX);
    console.log(e.offsetY);

//事件触发，鼠标距离用户电脑左顶上角位置距离
	console.log(e.screenX);
    console.log(e.screenY);
```

##### 事件冒泡   🔴

- 事件开始是由最为**具体的元素**(文档中嵌套最深的节点)接收，然后**逐级向上传播**到**较为不具体**的节点(文档)


- **div-body-html-document**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title> </title>
    <style>
        #box{
            width: 200px;
            height: 200px;
            margin: 50px;
            background-color: green;
            overflow: hidden;
        }
        #pp{
            width: 50px;
            height: 50px;
            background-color: red;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div id="box">
        <p id="pp"></p>
    </div>
    <script>
        //点击p标签一依次触发：p被电击了、div被电击了、body被电击了
        pp.onclick = function () {
            console.log("p被电击了");  //p被电击了
        };
        box.onclick = function () {
            console.log("div被电击了") //div被电击了
        };
        document.body.onclick = function () {
            console.log("body被电击了"); //body被电击了
        }
        //由pp向上传播
    </script>
</body>
</html>
```

##### 阻止事件冒泡产生-stopPropagation()

```js
pp.onclick = function (e) {
    console.log("p被电击了");  //p被电击了
    e.stopPropagation();// 阻止冒泡,事件到此为止,不会向上传递
};
box.onclick = function () {
    console.log("div被电击了") // ""
};
document.body.onclick = function () {
    console.log("body被电击了"); // ""
}
```

##### **阻止默认事件-preventDefault()**

> 默认事件：浏览器中很多操作都具有默认行为(鼠标右键出现菜单选项、a标签href链接、提交按钮...)

```markdown
1. 在IE中，阻止默认事件是e.returnValue = false

2. W3C中，阻止默认事件是e.preventDefault()
```

```js
document.oncontextmenu = function(e){
    console.log(鼠标右击了);
    
    //阻止默认事件触发(右键)
    e.preventDefault();
}
```

自定义鼠标右键菜单

```js
/*
	1. 首先阻止浏览器默认右键菜单
	
	2. 创建新的menu
	
	3. menu出现位置，距离可视区位置
*/
document.oncontextmenu = function(e){
    //阻止默认事件触发(右键)
    e.preventDefault();
    
    //创建新menu
    let div = document.createElement("div");
    div.id = "menu"; //添加id属性
    
    //距离可视区距离
    div.style.cssText = `
		left:${e.clientX}px;
		top :${e.clientY}px;
	`;
    document.body.appendChild(div);
}
```



##### **DOM0级事件**

```markdown
ele.on事件名称 = function(){}
事件绑定带有on方式称为DOM0级事件

1. 同一个对象只能给同一个事件绑定唯一事件处理函数，若绑定第二个，则第一个被清楚(后来居上)

2. 事件绑定函数的this指向当前调用事件的主体对象

3. 在绑定事件之前，事件属性的处理函数是null

4. 如果要清除事件，可将此事件的触发函数改为null

# 缺点：一个对象只能绑定一个事件
```

```js
ele.onclick = function(){
    alert(1);
};
ele.onclick = function(){
    alert(2);
};
//此时弹出2

ele.onclick = null; //无任何内容弹出

```

##### **DOM2级事件(事件监听)**🔴

```markdown
DOM1级？？
	DOM1级于1998年10月1日成为W3C推荐标准，但是1级dom标准中没有定义事件相关内容，所以没有所谓的1级dom事件模型
	
DOM2级事件模型规定事件流包含是三个阶段：🔴
	1. 事件捕获
	2. 处于当前目标阶段
	3. 事件冒泡阶段
	
事件监听语法：
	ele.addEventListener("事件名称",function(){},布尔值)
	  参数1：监听的事件类型
	  参数2：触发函数
	  参数3：布尔值
	  		false -- 事件冒泡阶段执行函数
	  		true  -- 事件捕获阶段执行函数
 事件类型不需要加"on"
  1. 一次性可以绑定多个事件，互不影响，触发顺序即为绑定事件顺序
  2. 事件监听的触发函数的this指向当前触发事件的主体对象
  3. 取消事件监听：removeEventListener().传入的参数和要添加的参数完全一致
```

```js
document.addEventListener("click",function(){
	console.log("点击1");    
});
document.addEventListener("click",function(){
	console.log("点击22");    
});
//输出： 点击1   点击22
document.removeEventListener("click",function(){
	console.log("点击333");    
}); //取消事件监听无效？？
//原因在于取消事件监听(必须指向同一地址，不然无法取消)
//此时需要将触发函数单独写出
document.addEventListener("click",fn1);
document.addEventListener("click",fn2);
function fn1(){
    console.log("点击1");
};
function fn2(){
    console.log("点击22");
};
document.removeEventListener("click",fn1);
//此时清楚了fn1的事件监听，只会打印：点击22
```

##### **事件捕获 **  

> 事件捕获用意在于事件达到预定目标之前捕获它-document-html-body-div

```js
father.addEventListener("click",function(){
   console.log("爸爸被点击了"); 
});
son.addEventListener("click",function(){
   console.log("儿子被点击了"); 
});
grandSon.addEventListener("click",function(){
   console.log("孙子被点击了"); 
});
//此时三个事件监听的第三个参数默认false，点击孙子三个都打印成功(事件冒泡：从里到外)
//若为儿子事件监听参数3改为true，则产生事件捕获(从外到里)，此时点击孙子打印顺序为：儿子->孙子->爸爸
son.addEventListener("click",function(){
   console.log("儿子被点击了"); 
},true);
```

##### **事件委托**🔴

> 事件委托是指利用事件冒泡原理，只指定一个事件处理程序，使用这一个事件处理程序管理一系列的同类型事件

```markdown
1. 为什么使用事件委托
	    操作DOM需要事件处理程序，可以直接写出对应事件处理程序即可，但如果需要操作很多同类型DOM，添加相同的事件处理程序，我们通过for循环实现相当于操作N次DOM，严重影响了网页性能。而事件委托则是性能优化的产物，利用js计算，最后一次性修改DOM，从而大大减少DOM交互，提升网页性能，还能减少内存的占用
	    
2. 事件委托原理：
		事件委托是依赖事件冒泡原理产生的，事件冒泡从最深的节点处开始逐步往上传播事件可以只给最外面的元素添加事件，当内层的标签触发了某个事件，该事件会通过事件冒泡传播到最外层标签，从而触发真正的事件处理函数。
		这也就是事件委托的过程，子元素委托父级元素代为执行事件。
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>六星的乖乖</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        ul, ol {
            list-style: none;
        }

        a {
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div id="box">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
    </div>
    <script>
        // 事件委托:
        let pp = document.querySelectorAll("p");源头
        box.onclick = function (e) {
            // e.target--事件源头，也就是发生事件的节点,event对象属性
            console.log(e.target  ); //p标签
            // 事件源的内容
            console.log(e.target.innerText);//对应p标签的内容
        
        }
        
        
       
       //使用事件监听实现事件委托
        function fn(e){
            //如果当前事件源的标签小写等于"p"则打印该事件源内容
            if(e.target.tagName.toLowerCase() === "p"){
                console.log(e.target.innerHTML);  
            };
        };
        document.addEventListener("click",fn);
    </script>

</body>
</html>
```

##### 鼠标拖拽🔴

```js
//鼠标拖拽之鼠标事件
1. 鼠标按下：onmousedown
	box.onmousedown = function () {
        console.log("down");
    };

2. 鼠标抬起：onmouseup
    box.onmouseup = function () {
        console.log("up")
    };

3. 鼠标移动：onmousemove
    box.onmousemove = function () {
        console.log("move");
    };
```

> 拖拽案例

```js
        function () {
            // 拖动这个盒子
            let bool = false;
            let startX,startY,boxX,boxY,nowX,nowY;
            box.onmousedown = function (ev) {
                bool = true;
                // 鼠标按下位置
                startX = ev.pageX;
                startY = ev.pageY;
                // 盒子按下时刻的位置
                boxX = box.offsetLeft;
                boxY = box.offsetTop;
            };
            document.onmousemove = function (ev) {
                if ( !bool)return;
                nowX = ev.pageX;
                nowY = ev.pageY;
                //鼠标未知的位移量
                let x_ = nowX - startX;
                let y_ = nowY - startY;
                //盒子当前的位置 = 盒子按下的位置 + 盒子位移量
                box.style.left = boxX + x_ + "px";
                box.style.top = boxY + y_ + "px";
            };
            document.onmouseup = function () {
                bool = false;
            }
        }
```

#### 键盘事件🔴

> 键盘事件主要有keydown、keypress、keyup三个事件，都继承KeyboardEvent接口

```markdown
1. keydown 按下键盘时触发

2. keypress 按下有值的键触发
		Ctrl、Alt、Shift、Meta类无值，不会触发
		回车键除外
3. keyup 松开键盘时触发

# 如果一直按键不松开，就会连续触发键盘事件
	keydown
	keypress
	keydpwn
	keypress
	.....
	keyup
```

**键码**

```markdown
# keyCode属性
	在发生keydown和keyup事件时，event对象的keyCode属性会包含一个代码与键盘上特定的键对应
	keyCode属性的值与ASCII码中对应小写字母或数字编码相同 a-97 A-65
	
# code属性
	按键的英文名称
	
# key属性
	按下的键名
```

```js
document.onkeydown = function (ev) {
    console.log(ev.key);
    console.log(ev.code);
    console.log(ev.keycode);
}
//按下a键打印：a  KeyA  65

//能键入内容的键才能触发，回车键也可以
document.onkeypress = function (ev) {
    console.log(ev.key);
    console.log(ev.keyCode);
}

//按键抬起
 document.onkeyup = function (ev) {
     console.log("抬起来");
     console.log(ev.keyCode)
 } //按住a键抬起时打印：抬起来  65
```

#### 表单事件🔴

- **onfocus -- 获取焦点事件**

  ```js
  input.onfocus = function () {
      console.log("获取焦点事件");
  };
  ```

- **onblur -- 失去焦点事件**

  ```js
  input.onblur = function () {
      console.log("失去焦点事件");
  };
  ```

- **输入监听事件**

  ```js
  // 输入监听事件 : 只要按键输入内容就会触发 !!!
  input.oninput = function () {
      if (this.value.length >= 8 ){
          //失去焦点
          input.blur();
      }
  };
  input.oninput = function () {
      //获取焦点
      input.focus();
  }
  ```

- **onchange -- 内容改变事件**

  ```js
  //当input输入框内容发生改变时触发
  input.onchange = function () {
      console.log("触发了change事件");
  }
  
  //radio单选和checkbox多选以及select下拉框也能触发该事件
  radio.onchange = function () {
      console.log("触发了change事件的radio")
  };
  checkbox.onchange = function () {
      console.log("触发了change事件的checkbox")
  }
  select.onchange = function () {
      console.log("触发了change事件的select")
  }
  ```

  

- **onsubmit -- 提交事件**

  ```js
  //提交事件和重置事件均为form表单，执行也由form表单执行
  
  form.onsubmit = function () {
      console.log("触发了提交按钮");//相应任务栏会出现提交信息
  };
  
  //普通按钮点击也能触发
  btn.onclick = function () {
      form.submit();
  }
  ```

- **onreset -- 重置事件**

  ```js
  form.onreset = function () {
      console.log("触发了重置按钮");//相应输入内容框清空
  };
  
  //普通按钮点击也能触发
  btn.onclick = function () {;
      form.reset();
  }
  ```






## 18.Ajax

### 18.1 JSON格式对象

> JSON -- JavaScript Object Notation，是一种轻量级(xml比较)的数据交换格式，采用完全独立语言的文本格式
>
> 数据交换指的是客户端和服务器之间业务数据的传递格式

- #### json的定义

  > json是由键值对组成，与对象的书写方式类似，但每个键要由引号引起来，键值之间冒号分割，多组键值逗号分割

  ```json
  var jsonObj = {
  				"key1" : 12,
  				"key2" : "abc",
  				"key3" : true,
  				"key4" : [11,"arr",false],
  				"key5" : {
  					"key5_1" : 551,
  					"key5_2" : "key5_2_value"
  				},
  				"key6" : [{
  					"key6_1_1" : 6611,
  					"key6_1_2" : "key6_1_2_value"
  				},{
  					"key6_2_1" : 6621,
  					"key6_2_2" : "key6_2_2_value"
  				}]
  			}
  ```

  

- #### json的访问

  ```markdown
  1. JSON本身是一个对象
  
  2. JSON中的键是对象中的一个属性
  
  3. JSON中的键访问跟访问对象属性一样：json对象.key
  ```

  ```json
  alert(jsonObj.key1);
  alert(jsonObj.key2);
  alert(jsonObj.key3);
  alert(jsonObj.key4);//得到数组[11，arr,false]
  
  //JSON中数组的遍历
  for (var i = 0;i < jsonObj.key4.length;i++){
      alert(jsonObj.key4[i])//11，arr，false
  }
  
  alert(jsonObj.key5.key5_1)//551
  alert(jsonObj.key5.key5_2)//key5_2_value
  
  alert(jsonObj.key6[1].key6_2_1);//6621
  alert(jsonObj.key6[1].key6_2_2);//key6_2_2_value
  ```

- #### json的方法

  > JSON.stringify()把json对象转成json字符串
  >
  > JSON.parse()把json字符串转成json对象

  ```markdown
  # json的存在有两种形式：
  
  1. 一种是对象的形式存在，json对象
  
  2. 一种是字符串的形式存在，json字符串
  ```

  ```json
  /*
  	一般操作json中的数据需要json对象格式
  	当客户端与服务器端进行数据交换时使用json字符串格式
  	所以二者之间进行转换引入stringify()、parse()方法
  */
  
      //alert(jsonObj);
      var jsonObjString = JSON.stringify(jsonObj)//转换结果特别像java中对象的toString
      alert(jsonObjString);
  		//{"key1":12,"key2":"abc","key3":true,"key4":[11,"arr",false],"key5":{"key5_1":551,"key5_2":"key5_2_value"},"key6":[{"key6_1_1":6611,"key6_1_2":"key6_1_2_value"},{"key6_2_1":6621,"key6_2_2":"key6_2_2_value"}]}
  
      // json字符串转json对象
      var jsonObj2 = JSON.parse(jsonObjString);
      alert(jsonObj2);//[object Object]
      alert(jsonObj2.key1)//12
  ```


### 18.2 Ajax基础

> Ajax -- Asynchronous JavaScript and XML(异步的JavaScript和XML)，是一种用于创建动态网页技术。
>
> Ajax技术指脚本独立向服务器请求数据，拿到数据后进行处理并更新网页；
>
> 整个过程后端只提供数据，前端负责获取数据-处理数据-展示数据

- #### XML简介

  ```markdown
  # HTML和XML区别和联系
  HTML （Hyper Text Markup Language）超文本标记语言
  XML（Extentsible Markup Language）可扩展标记语言
  
  1.html不区分大小写，xml严格区分大小写
  2.html标签都是预定义，xml标签都是自定义、可扩展，具有良好人机可读性
  3.html用于数据展示，xml用于数据存储与传递(后端)
  
  # XML用途
  1、Java程序的配置描述文件
  2、用于保存程序产生的数据
  3、网络间的数据传输(前后端交互)
  ```

  

- #### 同步和异步

  ```markdown
  1. 同步
  		所有的操作都做完，才返回给用户，让用户在线等待的时间太长，界面不动但程序还在执行(卡死)。这种情况用户不能你关闭界面，关闭即迁移程序中断
  		
  2. 异步
  		将用户请求放入消息队列并反馈给用户，系统迁移程序已经启动，此时可以关闭浏览器，程序会慢慢写入数据库
  ```

- #### 工作原理

  ```markdown
  在客户端和服务器之间增加一个中间层：Ajax引擎。由Ajax 引擎独立向服务器请求数据，前端获取到 Ajax 返回的数据后，可以使用新数据来更新页面、或进行其它操作，使用户请求和服务器响应异步化，从而保证了在不刷新页面的前提下可以局部更新网页内容。
  ```

  <img src = "D:\A-study\6x\JavaScript\js笔记\ajax工作原理.jpg">

  

### 18.3 创建原生Ajax实例

> XMLHttpRequest    !!!
>
> Ajax技术的核心是XMLHTTPRequest类，简称XHR，它允许脚本异步调用HTTP API。浏览器在XMLHttpRequest类上定义了 HTTP API，这个类的每个实例都表示一个 独立 的 请求/响应 对象，并且这个实例对象上的属性和方法允许 指定细节 和 提取响应数据。

- **XMLHttpRequest对象方法**🔴

  - open() -- 创建请求头的各种信息

    ```markdown
    # 语法	
      xhr.open(method, url, async);
    		method：用于指定HTTP请求的方法，不区分大小写(get/post/head/put/options/delete)
    		url: 用于指定HTTP请求的url地址
    		async：可选，用布尔值指定脚本是否异步调用此次Ajax请求，默认为true
    ```

  - setRequestHeader() -- 请求头设置

    ```markdown
    # 语法
    open方法之后设置：
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    								请求头名称			请求头值
    ```

  - send() -- 发送请求

    

- **获取响应**🔴

  > 一个完整的 HTTP 响应由 状态码、响应头和 响应主体 组成，这三者都可以通过XMLHttpRequest对象提供的属性和方法获取。通过监听XMLHttpRequest对象上的 readystatechange 事件来确定http响应内容

  - readyState属性🔴

    ```markdown
    # readyState属性是一个整数，它的值代表了不同的 HTTP 请求状态。
      0：初始值，表示请求未初始化，open方法尚未调用；
      1：启动请求，open 方法已经调用，但尚未调用 send 方法；
      2：请求发送，已经调用 send 方法，但尚未接收到响应；
      3：接收响应，已经接受到部分响应数据，主要是响应头；
      4：HTTP 响应完成，已经接收到全部响应数据，而且可以在客户端使用。
      
      	 每次readyState属性值的改变都会触发readystatechange事件，但只有readyState属性值为4才表示 HTTP 的响应准备就绪
      	 
    # 注意：readyState属性值只代表此时的 HTTP 请求处于哪个阶段：是发送了请求还是未发送请求，是只接收到了响应头还是响应完成；
    ```

  - status属性🔴

    ```markdown
    # HTTP 状态码
    
    status属性会以数字的形式保存服务器响应的 HTTP 状态码，"200" 表示请求成功，"404" 表示 URL 不能匹配服务器上的任何资源。
    HTTP 状态码是用来表示网页服务器响应状态的 3 位数字代码，所有状态码的第一个数字代表了响应的五种状态之一：
    	1xx：临时响应
        2xx：成功
        3xx：重定向
        4xx：请求错误
        5xx：服务器错误
        
     其中，2开头的状态码都表示请求成功，而 304 是对客户端可读取缓存的一种响应，同样能获取到 HTTP 的响应数据。
    ```

  - responseText 属性

    ```markdown
    # responseText属性以字符串的形式存储了响应主体，即：服务器的响应数据。
    ```

```js
//1.创建实例
let xhr = new XMLHttpRequest();

//2.创建请求的各种信息,发起请求
xhr.open("get","url",true);

//3.请求头设置(固定写法)
xhr.setRequestHeader("Content-Type","application/x-www-from-urlencoded");

//4.发送请求
xhr.send();

//5.获取响应
xhr.onreadystatechange = function () {
    if(xhr.readyState !== 4)return;
    // 后端返回的数据
    // 负责接收数据
    if (xhr.status >=200  && xhr.status < 300 || xhr.status === 304 ){
        console.log( JSON.parse( this.responseText ));
        return JSON.parse(this.responseText );
    }
}
```

- #### get请求方式

  ```js
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "url");
  
  // 由于GET请求,没有请求主体，所以在调用 send 方法时可以传递 null或省略这个参数；
  xhr.send(null);
  ```

- #### post请求方式

  ```js
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/statics/demosource/demo_post_json.php");
  
  // 把 msg 作为请求主体发送
  xhr.send(msg);
  
  
  POST 请求通常都拥有请求主体，可在 send 方法中指定它；
  POST 请求的请求主体，应该匹配 setRequestHeader方法所指定的 "Content-Type" 头
  ```

### 18.4 Jquery中的Ajax

> jQuery 是一个 JavaScript 工具库，它封装了 JavaScript 常用的功能代码，包括 Ajax。

```markdown
# jQuery 中，Ajax 常见的请求方式有以下几种：

$.ajax(url, options)
$.get(url, data, callback, dataType)
$.post(url, data, callback, dataType)
$.getJSON(url, data, callback)
$.getScript(url, callback)
jQuery元素.load(url, data, callback)
```

```js
// 使用jQuery发起ajax请求

$.ajax("url路径", {
    //请求类型
    type: "GET",
    //要发送的数据
    data: {
        user: "Mr Li",
        pwd : "123456",
    },
    //数据格式预处理
    dataType: "json",
    //请求成功后执行
    success: function (res) {    // res为响应成功返回的数据
        console.log(res);
    },
    //请求失败后执行
    error: function (res) {    // 这里的res为响应失败返回的数据
        alert("请求失败：" + res.status);
    }
});
```

### 18.5 jsonp格式🔴

- #### 同源策略

  - 同源策略，它是由**Netscape**提出的一个著名的**安全策略**。 现在所有支持JavaScript 的浏览器都会使用这个策略。所谓**同源是指，域名，协议，端口相同**。 当一个浏览器的两个tab页中分别打开百度和谷歌的页面 当一个百度浏览器执行一个脚本的时候会检查这个脚本是属于哪个页面的 即检查是否同源，只有和百度同源的脚本才会被执行。
  - 总结的来说，由于浏览器安全限制,**数据是不可以直接跨域请求的**，包括不同的根域名、二级域名、或不同的端口,除非目标域名**授权**你可以访问。想要解决同源策略实现传输，就需要**跨域**。而跨域的方式有很多种，JSONP就是其中的一种。

- #### jsonp概念

  - 通过动态创建script标签，其src指向**非同源的url**，并传递一个callback参数给服务端，服务器返回一个以callback参数作为函数名的函数的调用和一系列参数，页面接收到响应后执行回调并对数据进行处理。简单说就是**可以让网页从别的网域获取资料**
  - 函数名( json数据 ) -- jsonp

- #### jsonp案例

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <style>
          * {
              margin: 0;
              padding: 0;
          }
  
          ul, ol {
              list-style: none;
          }
  
          a {
              text-decoration: none;
          }
          #box{
              width: 300px;
              margin:100px auto;
          }
          input{
              width: 100%;
              height: 45px;
              font-size:18px;
              text-indent: 15px;
              border-radius: 10px;
              outline: none;
          }
          li{
              width: 300px;
              font-size:16px;
              border-bottom:2px solid red;
          }
          li>a{
              display: block;
              line-height: 35px;
              color: #00ccff;
          }
          li>a:hover{
              color:pink;
          }
  
      </style>
  </head>
  <body>
      <div id="box">
          <input type="text" name="txt" id="ipt" value="">
          <ul id="list">
              <!-- <li><a href="">哈哈哈哈</a></li>-->
          </ul>
      </div>
      <script>
          //https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=%E8%BF%8E%E5%A4%B4&csor=1&cb=guai
          (function () {
              let ipt = document.getElementById("ipt");
              let list = document.getElementById("list");
              ipt.oninput = function () {
                  // value 的 替换成连接中wd后边的转码内容
                  let val = this.value;
                  let url = "https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd="+val+"&cb=guai";
                  let script = document.createElement("script");
                  script.src = url;
                  document.body.appendChild(script);
              };
              function guai(data) {
                  let html = "";
                  // console.log(data);
                  data.g && data.g.forEach(item=>{
                      html += `<li><a href="">${item.q}</a></li>`;
                  });
                  list.innerHTML = html;
              }
              window.guai = guai;
  
          })();
      </script>
  </body>
  </html>
  ```

### 18.6get、post请求

**get**

- get用于获取数据

- 把数据放在url地址中进行传输
  - 提交的数据会在url中的“？”后边
  - 多个参数用“&” 连接
- 数据量小，有长度限制(受限于url长度，具体的数值取决于浏览器和服务器的限制，最长2048字节)
- 明文传输(泄露数据)
- get请求会保存在浏览器历史记录中，也可能保存在web服务器的日志中

**post**

- post用于提交数据
- 对长度没有限制
- post请求会把请求数据放在http请求体中
- 安全性高

## 19.面向对象

### 概念

- ECMAScript 有两种开发模式：1.函数式(过程化)，2.面向对象(OOP)。面向对象的语言有一个标志，那就是**类**的概念，而**通过类可以创建任意多个具有相同属性和方法的对象**。但是，ECMAScript 没有类的概念，因此它的对象也与基于类的语言中的对象有所不同。
- js（如果没有作特殊说明，本文中的js仅包含ES5以内的内容）本身是没有class类型的，但是每个函数都有一个prototype属性。prototype指向一个对象，当函数作为构造函数时，prototype则起到类似class的作用。

### 创建对象的两种方式：

#### 1.工厂模式

- 这种方法就是为了解决实例化对象产生大量重复的问题

- 创建不同对象也存在属性和方法重复问题，消耗内存

  ```js
  let xx = {
      name: "嘻嘻",
      age : 24,
      school :"六星教育",
      say : function () {
          console.log(this.name);
      }
  };
  let hh = {
      name: "哈哈",
      age : 30,
      school :"六星教育",
      say : function () {
          console.log(this.name);
      }
  };
  
  //这种最基本创建对象方法缺点是不利于创建对个类似对象
  
  //工厂模式解决实例化对象产生大量重复问题
  function createPerson(n,a) {
      var obj = {};
      obj.name = n;
      obj.age = a;
      obj.school = "六星教育";
      obj.say = function () {
          console.log(this.name);
      };
      return obj;
  };
  
  var xx = createPerson("嘻嘻",24);
  var hh = createPerson("哈哈",30);
  
  console.log(xx);
  console.log(hh);
  ```

#### 2.构造函数🔴

- 函数名和实例化构造名相同且大写(有助于区分构造函数和普通函数)

- **构造函数创建对象，必须使用new运算符**

- **一个构造函数创造的对象称为该构造函数的实例**

- 构造函数和普通函数的唯一区别，就是他们调用的方式不同

- this就是代表当前作用域对象的引用，如果在全局范围this 就代表window 对象，如果在构造函数体内，就代表当前的构造函数所声明的对象。

- 常见构造函数：Object、Array、RegExp、Function、Date、XMLHTTPRequest

  ```js
  //new关键字后边跟 -- 函数()
    function Fn(){
        console.log(this); //函数内部的this指向f对象
    }
    let f = new Fn();
  
  -------------------------------
      
  function Per(name,age){
      this.name = name;
      this.age = age;
      this.say = function(){
          console.log(this.name);
      }
  };
  
  //实例化对象
  let xx = new Per("嘻嘻",20);
  let hh = new Per("哈哈",25);
  
  console.log( xx.say === hh.say ) // false--原因：引用地址不一样
  ```

  

- 变量instanceof：构造函数可以辨别该变量的数据是否由构造函数所创造(**只能用来判断对象**)

  ```js
  function Per(name,age){
      this.name = name;
      this.age = age;
      this.say = function(){
          console.log(this.name);
      }
  };
  
  //实例化对象
  let xx = new Per("嘻嘻",20);
  let hh = new Per("哈哈",25);
  
  let aa = {};
  let bb = [];
  //判断一个对象是否由构造函数所创造
  console.log(xx instanceof Per);//true
  console.log(aa instanceof Object);//true
  console.log(bb instanceof Array);//true
  ```

  

### 原型

> 原型是对象创建最初的模型，拥有同一类对象的公有属性和方法

#### 概念

- 每个 **实例对象** 都有一个 **constructor** 属性，指向它的构造函数

  ```js
  function Person(name) {
  	this.name = name
  }
  var person = new Person('xx')
  console.log(person.constructor === Person)//true
  ```

- 每个 **函数对象（包括构造函数）** 都有一个 **prototype** 属性，指向函数的原型对象,这个 **原型对象** 的 **constructor**属性，指向函数本身

  ```js
  console.log(Person.prototype.constructor === Person) //true
  ```

- 每个对象都有一个`__proto__`属性，用来访问原型**prototype**

  ```js
  console.log(person.__proto__ === Person.prototype) //true
  ```

- 当访问一个实例对象中的属性时，如果该实例对象没有这个属性就会去该**实例对象的原型对象中寻找

- 除 **Object**外，其它构造函数的 **prototype** 属性的 `__proto__` 属性都是指向 **Object.prototype**。而 **Object** 的 **prototype**属性的 `__proto__` 属性指向 **null**

  ```js
  console.log(Person.prototype.__proto__ === Object.prototype)
  console.log(Function.prototype.__proto__ === Object.prototype)
  console.log(Object.prototype.__proto__ === null)
  ```

#### 方法：

- ``isPrototypeOf(待检测对象)``

  用来检测之间是否存在某种关系

  ```js
  function Per(name,age){
      this.name = name;
      this.age = age;
  };
  
  Per.prototype.say = function(){
      console.log(this.name);
  }
  
  //实例化对象
  let xx = new Per("嘻嘻",20);
  let hh = new Per("哈哈",25);
  
  Per.prototype.isPrototypeOf(xx); //true
  Per.prototype.isPrototypeOf(hh); //true
  Per.prototype.isPrototypeOf(aa); //false
  ```

- ``getPrototypeOf()``

  用于访问prototype的值

  ```js
  Object.getPrototypeOf(xx);
  ```

### 原型对象和对象原型

#### 1.构造函数原型`prototype`

- 构造函数通过**原型**分配的函数是**所有对象所共享的**

- 每个构造函数都有一个`prototype`属性，指向另一个对象。

  <font style = "color :red">注意：</font>**prototype**就是一个对象，并且**所有属性和方法**都被构造函数拥有

  ```js
  function Per(name,age){
      this.name = name;
      this.age = age;
  };
  
  //say方法定义在prototype上，这样所有对象的实例都可以访问这些方法
  Per.prototype.say = function(){
      console.log(this.name);
  }
  
  //实例化对象
  let xx = new Per("嘻嘻",20);
  let hh = new Per("哈哈",25);
  
  xx.sy();
  hh.say();
  ```

#### 2.对象原型

- 每个对象都有一个属性`__proto__`指向构造函数**prototype**原型对象

- `__proto__`对象原型和原型对象prototype是等价的

  ```js
  console.log(xx.__proto__ === Per.prototype);
  ```

- `__proto__`对象原型存在的意义在于**为对象的查找机制提供一个方向**

### 原型链

> 在原型上面再加一个原型对象的方法叫做原型链，原型链使用`__proto__`来连接各个原型

```js
		function Grand() {
            this.word = "我是爷";
        };

        var grand = new Grand();
        Father.prototype = grand;
        //grand是用Grand()创建的一个对象实例，它是个对象
        function Father() {
            this.name = "我是爹";
        }
        var father = new Father();
        Son.prototype = father;
        // 同上，直接给原型赋值一个对象
        function Son() {
            this.hobbit = "smoke";
        }
        var son = new Son();
```

### 继承

- 在父类的基础上继承子类，子类可以拥有父类的一切
- 子类可以扩展新的属性，但扩展的属性不影响父类

#### **私有属性继承：**

```js
function Person(name,age){
    this.name = name;
    this.age = age;
};

//say方法定义在prototype上，这样所有对象的实例都可以访问这些方法
Per.prototype.say = function(){
    console.log(this.name);
}

//实例化对象
let xx = new Person("嘻嘻",20);
let hh = new Person("哈哈",25);

function Man(name,age,sex){
    //私有属性的继承方法
    Person.call(this,name,age);
    //新增的私有属性
    this.sex = sex;
};

let bb = new Man("李波",20,"男");
//Man {name:"李波",age:20,sex:"男"}
```

#### 原型属性继承🔴

```js
//原型的继承，通过赋值父类
Man.prototype = Person.prototype;
Man.prototype.constructor = Man;
//子类新增原型属性
Man.prototype.school = function(){
    console.log("六星教育");
};
`注意`
//在这里新增的属性会影响父类，原因是子类引用了父类的原型，导致父类Person也具有子类新增的school属性(不符合常理)

`解决方案`
//新建一个"局外人",它与Person父类和Man子类毫无关系
function lb(){};
//此时将父类prototype覆盖lb函数的prototype
lb.prototype = Person.prototype;
//然后将lb实例赋值给子类Man的原型(lb实例拥有Person.prototype)
//此时Person原型中就没有了子类Man的新增原型!!
```

## 20.ES6扩展对象类

- 对象的传统写法：

  ```js
  var name = "Zhangsan";
  var age = 12;
  
  //传统的属性写法
  var person = {
      "name":name,
      "age":age,
      "say":function(){
          alert("你好吗？");
      }
  };
  console.log(person);
  ```

- ES6写法：

  ```js
  var name = "Zhangsan";
  var sex = "男"
  var age = 12;
  
  //ES6的属性写法
  var person = {
      name,
      age,
      say(){
          alert('这是ES6的表示法');
      }，
      //属性名还可以是表达式
      [name + sex](){
          console.log("表达式属性名");
      }
  };
  console.log(person);
  ```

### 类-class

- class类名采用大驼峰命名法(首字母大写)
- 构造方法constructor(必须有也是唯一)里边写私有属性
- 构造方法constructor外边class里边写原型(只允许写原型方法)
- 类class本质上是基于原型prototype的实现方式进一步封装而来

```js
//语法
class person{
    //构造方法constructor -- 必有、唯一
    constructor(name,age){
        //里面写私有属性和方法
        //this指向constructor实例化后的对象
        this.name = name;
        this.age = age
    }
    //自定义方法
    sayName(){
        console.log(this.name);
    }
    
    
}
let  lb = new person("李波",20);
console.log(lb); //{ "name": "李波","age": 20}
console.log(lb.sayName()) //李波
```

### 类的静态方法

> 直接使用类名就可以访问的方法 -- 静态方法

- 静态方法的定义需要使用static关键字来标识
- 静态方法通过类名来的调用

```js
class person{
    constructor(name){
        this.name = name;
    }
    //自定义静态方法
    static friends(l1,l2){
        console.log(`${l1.name} 和 ${l2.name}是朋友`);
    }
}

let xh = new person("小红");
let xm = new person("小明");

//调用静态方法
console.log(person.friends(xh,xm)); //小红和小明是朋友
```

### 类的继承

- ES6使用extends关键字来实现子类继承父类
- 关键字super相当于是父类中的this来引用父类的属性和方法
- 子类必须在constructor方法中调用super方法
- 必须先调用super( )，才可以使用this，否则报错

```js
//父类
class person{
    constructor(name,age){
        //里面写私有属性和方法
        //this指向constructor实例化后的对象
        this.name = name;
        this.age = age
    }
    //自定义方法
    sayName(){
        console.log(this.name);
    }
    sayAge(){
        console.log(this.age);
    }
}
//子类
class per extends person{
    constructor(name,age,sex){
        super(name,age); //存放继承属性(必须)
        this.sex = sex;
    }
    //原型默认继承
    //新增原型方法直接书写，也可以更改原来的原型方法
    sayName(){
        super.sayName();//执行原来的原型方法
    }
    saySex(){
        console.log(this.sex); //新增原型方法
    }
}

let lb = new per("李波",20,"男");
console.log(lb); //{"name": "李波","age": 20,"sex": "男"}
lb.sayName(); //李波
lb.saySex();//男
```

## 21. Set、Map数据结构

> Set 和 Map 是 ES6 新增的数据结构。但是成员的值都是唯一的，没有重复的值。

### Set集合

- Set 类似于数组，本质是对象，但是成员值唯一，没有重复的值(去重)
- Set底层去重采用es6新的算法 same-value.equality 计算而来，这个算法还能使NaN === NaN
- Set只能通过构造函数生成
- Set遍历数组不能使用下标
- 传参要求：必须是可迭代的接口对象，有iterator接口或是Iterable类型
- Iterable能统一集合类型，可以通过for..of遍历，也可以内置的forEach方法遍历
- 拥有iterator接口常见：数组、字符串、HTMLCollection、NODEList、arguments....

```js
let set = new Set([1,2,3,4,4]);
console.log(set);
		/*
            Set(4) {1, 2, 3, 4}
                [[Entries]]
                0: 1
                1: 2
                2: 3
                3: 4
                size: (...)
                __proto__: Set
        */


let set = new Set(11);
console.log(set) //报错，显示不是一个Iterable类型
let set = new Set("11",1,2,4,4);
console.log(set) //"1" ,1,2,4

`注意`：数组不能去重，是引用类型，地址不一样
      let  set = new Set([1],[1],[1])
      console.log(set) //Array(1),Array(1),Array(1)

//总结：可传参数必须是可迭代的接口对象，必须要有iterator接口
```

#### 方法

##### 操作方法：

- `Set` 的方法都是继承于原型

- `add(value)`：添加某个值，返回 Set 结构本身。(如果存在则不能添加)

- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。

- `has(value)`：返回一个布尔值，表示该值是否为Set的成员。

- `clear()`：清除所有成员，没有返回值。

  ```js
  let arr = [1,2,3,[1]];
  let set = new Set();
  
  set.add("字符串");
  set.delete(1); //里边的数组不能删 
  console.log(set); //Set(4) {2,3,Array(1),"字符串"}
  console.log(set.has(3)); //true
  console.log(set.clear()); // Set(0){}
  console.log(arr);// [1,2,3] -- 不影响原数组
  ```

##### 遍历方法

- `keys()`：返回键名的遍历器

- `values()`：返回键值的遍历器

- `entries()`：返回键值对的遍历器（键名、键值相同）

- `forEach()`：使用回调函数遍历每个成员，但没有返回值

  ```js
  let arr = [1,2,3,[1]];
  let set = new Set();
  console.log(set.values());//SetIterator {1,2,3,Array(1)}
  
  for (const key of set.keys()) {
      console.log(key//1 2 3 [1]
  }
  for(let val of set.values()){
      console.log(val); //1 2 3 [1]
  }
  for (const entri of set.entries()) {
      console.log(entri); //[1,1]  [2,2]  [3,3]  [Array(1),Array(1)]
  }
  for (const [key,value] of set.entries()) {
      console.log(key,value); // 1 1   2 2    3 3   [1] [1]
  }
  set.forEach((ele) =>{
      console.log(ele); // 1 2 3 [1]
  })
  ```

  

#### 属性

- `Set.prototype.constructor`：构造函数，默认就是Set函数。

- `Set.prototype.size`：返回Set实例的成员总数。

  ```js
  let arr = [1,2,3,4,5]
  let set = new Set(arr);
  console.log(set.size); //5
  console.log(set.constructor); //ƒ Set() { [native code] }
  ```

  

### Map映射

- Map数据结构与对象类似，采用键值对集合，键可以是各种类型

- Map也具有去重效果

- Map同样也是通过构造函数生成

- 传参要求：必须是可迭代的接口对象(二维数组)

  ```js
  let map = new Map([[1,2],[2,3],[4],[1,2]]); //去重
  console.log(map);
  /*
          Map(2){1 => 2 , 2 => 3 , 4 => undefined}
          typeof map;                          // "object"
  	    map instanceof Object;               // true
  	    Object.prototype.toString.call(map); // "[object Ma
  */
  ```

#### 方法

- `Map` 的方法都是继承于原型

##### 操作方法

- `set(key, value)` ：设置键值名，返回整个 Map 结构

- `get(key)`: 读取key对应的键值，如果找不到key，返回undefined`

- `has(key)`: 表示某个键是否在当前 Map 对象之中

- `delete(key)`: 成功删除某个键，返回true，否则返回 false`

- `clear()`: 清除所有成员，没有返回值

  ```js
  let map = new Map([[1,2],[2,3]]);
  //设置属性和属性值
  map.set("one",1)
  console.log(map);//Map(3){1 => 2 , 2 => 3 , "one"=>1}
  //获取属性值
  console.log(map.get("one")); //1
  //删除属性
  console.log(map.delete("one")); //true
  //判断有无属性名
  console.log(map.has(2)); //true
  console.log(map.has(3)); //false
  //清空属性
  map.clear();
  console.log(map); //Map(0) {}
  ```

  

##### 遍历方法

- `keys()`：返回键名的遍历器。

- `values()`：返回键值的遍历器。

- `entries()`：返回所有成员的遍历器。

- `forEach()`：遍历 Map 的所有成员。

  ```js
  let map = new Map([[1,3],[5,8]]);
   for (const key of map.keys()) {
       console.log(key); //1  5   拿到键
   }
  for (const value of map.values()) {
       console.log(value); //3  8   拿到键值
   }
  for (const entries of map.entries()) {
       console.log(entries); //[1,3]  [5,8] 
   }
  for (const [key,val] of map.entries()) {
       console.log(key,val); //1 3    5 8  
   }
   map.forEach((val)=>{
       console.log(val); //3 8
   })
  map.forEach((key,val)=>{
      console.log(key,val); // 3 1     8 5
  })
  ```

#### 属性

- `Map.prototype.size`: Map 结构的成员总数

  ```js
  let map = new Map([[1,2],[2,3],[4]]);
          console.log(map.size);//3
  ```




## 22.正则表达式

- 正则全称：Regular Expression
- 简称：regex   regexp   RE

### 作用：

- 高效匹配字符串
- 用来检索、替换那些符合某种模式、规则的文本 

### 修饰符

1、`g`:global

​	全局匹配，搜索到第一个匹配为止

​	JavaScript 正则默认： **正则匹配成功就会结束**，不会继续匹配。如果想查找全部，就要加标识 `g`（全局匹配）

```js
let str = '12a34b56h';
let r = /\d\d/g;
console.log(r.exec(str));//["12", index: 0, input: "12a34b56h", groups: undefined]
```

2、`i`:ignore

​	不区分大小写

3、`m`:multiline

​	多行搜索，换行匹配

### 方法

1.`test()`：

- 用于测试字符串参数中**是否存在**匹配正则表达式模式的字符串

- 匹配成功返回true，失败返回false

- 用法：正则.test(字符串)

  ```js
  let str = '12abc';
  let reg = /\d\d/;
  console.log(reg.test(str))  //true
  ```

2.`exec()`：

- 使用正则表达式模式对字符串执行搜索，并将更新全局RegExp对象的属性以反映匹配**结果**。

- 用法：正则.exec(字符串)

  - 若**没有**匹配的文本则返回`null`
  - **有**则返回一个数组：`index`属性是匹配文本的第一个字符的位置，`input`用于存放被检索的字符串

  ```js
  let str = '12abc';
  let reg = /\d\d/;
  console.log(reg.test(str))  //["12", index: 0, input: "12abc", groups: undefined]
  ```

3.`search()`

- 正则去匹配字符串，如果匹配成功，就返回匹配成功的位置，如果匹配失败就返回 `-1`

- 用法：字符串.search(正则)

  ```js
  var str = "abcdef";
  var re1 = /d/i; // 3
  var re2 = /h/i; // -1
  console.log(str.search(re1));
  console.log(str.search(re2));
  ```

4.`match()`    

- 正则去匹配字符串，如果匹配成功，就返回匹配成功的数组，如果匹配不成，就返回 `null`
- 用法：字符串.(正则)

```js
var str = "123fadf321dfadf4fadf1"; 
var re = /\d+/g;
console.log(str.match(re));//(4) ["123", "321", "4", "1"]

let str = 'aAaaA';
let reg = /a/gi; //全局匹配不区分大小写
console.log(str.match(reg));//["a", "A", "a", "a", "A"]
```

5.`replace()`

- 正则去匹配字符串，匹配成功的字符串去替换成新的字符串
- 函数的第一个参数，是匹配成功的字符；第二个参数：可以是字符串，也可以是一个回调函数
- 用法：字符串.replace(正则，新的字符串)

```js
var str = 'aaa';
var re = /a+/g;
str = str.replace(re, "b");
console.log(str); // b
```

### 正则对象

- JavaScript通过**内置对象RegExp**支持正则表达式 有两种方法**实例化**RegExp对象：

  1. 字面量：var reg = /\bis\b/g;
  2. new RegExp() -- 构造函数

  ```js
  //1.字面量
  let str = 'abkkabc';
  let str2 = 'abvkc';
  let reg = /abc/;
  console.log(reg.test(str))  // true
  console.log(reg.test(str2)) //false
  console.log(reg.exec(str)) //["abc", index: 4, input: "abkkabc", groups: undefined]
  //2.构造函数
  let s = 'abc';
  let str = 'abdc';
  let str2 = 'abcde'
  let reg = new RegExp(s);
  
  console.log(reg.test(str)) //false
  console.log(reg.test(str2)) //true
  console.log(reg.exec(str)); //null
  console.log(reg.exec(str2));//["abc", index: 0, input: "abcde", groups: undefined]
  ```

### 匹配规则🔴

#### 1.`\n`

​	换行符

#### 2.`\r`

​	回车符

#### 3.`\t`

​	水平制表符(空格、tab)

#### 4.`\v`

​	垂直制表符

#### 5.`\d`=`[0-9]`

​	数字字符

```js
let str = '123lb89' ;
let reg = /\d\d/;
console.log(reg.test(str));//true
console.log(reg.exec(str)); //["12", index: 0, input: "123lb89", groups: undefined]
```

#### 6.`\D`=`[^0-9]`

​	非数字字符

```js
let str = '12a'
let reg = /\d\D/;
console.log(reg.exec(str));//["2a", index: 1, input: "12a", groups: undefined]
```

#### 7.`\s`

​	空白符

#### 8.`\S`

​	非空白符

```js
let str = 'ab cde pl';
let r = /\S\S/; //匹配非空白字符
let r2 = /\s/g; //匹配空白字符
console.log(r2.exec(str)); //[" ", index: 2, input: "ab cde pl", groups: undefined]
console.log(r.exec(str));//["ab", index: 0, input: "ab cde pl", groups: undefined]
```

#### 9.`\w`=`[a-zA-Z_0-9]`

​	单词字符(字母、数字、下划线_)

#### 10.`\W`=`[^a-zA-Z_0-9]`

​	非单词字符

```js
let str = '+23_!56';
let r = /\w\w\w/; //连续三个单词字符
let r2 = /\w\w\w\w/; //连续四个，没有返回null
console.log(r.exec(str));//["23_", index: 1, input: "+23_!56", groups: undefined]
console.log(r2.exec(str));//null
```

#### 11.`\b`

​	单词**边界**

```js
let str = 'hello';
let r = /\bhe/;  //匹配单词前边界
let r2 = /lo\b/;  //匹配单词后边界
console.log(r.exec(str)); //["he", index: 0, input: "hello", groups: undefined]
console.log(r2.exec(str)); //["lo", index: 3, input: "hello", groups: undefined]
```

#### 12.`\B`

​	匹配非单词边界

```js
let str = 'hello';
let r = /el\B/; //匹配单词中间部分，并非边界
console.log(r.exec(str)); //["el", index: 1, input: "hello", groups: undefined]
```

#### 13.`^`

​	匹配输入字符串的**开始**位置

```js
//^abc 表示匹配有 abc 开头的字符串
let  str  = 'abcdefg';
let r = /^abc/;
console.log(r.exec(str)); //["abc", index: 0, input: "abcdefg", groups: undefined]
```

#### 14.`$`

​	匹配输入字符串的**结束**位置

```js
//^\d$ 表示匹配一个 [0-9] 的数字
let str = '1';
let r = /^\d$/;
console.log(r.exec(str));
```

#### 15.`[]`

- 使用`[a-z]`来表示从`a-z`的任意字符，包括`a`和`z`
- 使用`[0-9]`来表示从`0-9`的任意数字
- 在`[]`中可以着写：`[a-zA-Z]`，表示大写和小写字母
- `[]`获取中文区间，`[\u4e00-\u9fa5]`
- `[gG]`:标识g或者G字符都可以

```js
let str = '123996a,121996k,122996m,123996l我爱你';
let reg = /12[1-3]996[k-m]/g;
let reg2 = /[\u4e00-\u9fa5][\u4e00-\u9fa5][\u4e00-\u9fa5]/g;
console.log(str.match(reg)); //["121996k", "122996m", "123996l"]
console.log(reg2.exec(str));////["我爱你", index: 31, input: "123996a,121996k,122996m,123996l我爱你", groups: undefined]
```

#### 16.`.`

​	匹配所有的字符,

```js
let str = '1296a';
let reg = /./g;
console.log(str.match(reg)); // ["1", "2", "9", "6", "a"]
```

#### 17.`()`、`|`、`?:`

​	`()`:分组匹配

​	`|`：或者

​	`?:`：分组匹配不捕获

​		捕获方法：RegExp.$1

```js
let str = 'http://www.baidu.com,https://www.suclib.top';
let r = /(?:http|https):\/{2}w{3}\.(baidu|suclib)\.(com|top)/g;
console.log(r.exec(str));
```

#### 18.`?=`、`?!=`、`?<=`、`?!=`

`?=哈`：正向肯定预查，表示肯定是哈，但不匹配

`?!=哈`：正向否定预查，表示肯定不是哈，不匹配

`?<=￥`：反向肯定预查，表示肯定是￥，不匹配

`?<!￥`：反向否定预查，表示肯定不是￥，不匹配

### 量词

#### 1.`{n}`

​	{n}-匹配n个字符

```js
let str = '123456789libo369';
let reg = /\d{3}/g;
let reg2 = /\d{9}/g;
console.log(reg.exec(str))//["123", index: 0, input: "123456789libo369", groups: undefined]
console.log(reg2.exec(str))//["123456789", index: 0, input: "123456789libo369", groups: undefined]
```

#### 2.`{n,m}`

​	匹配n-m个(包含n和m)字符，默认是往多的匹配，直到不足m个(**贪婪匹配**)

```js
let str = 'abcd123456789';
let reg = /\d{1,4}/g; //匹配1-4个字符
console.log(str.match(reg)); //["1234", "5678", "9"]
```

​	正则表达式**尽可能少的匹配**，也就是说一旦成功匹配不再继续尝试，以最少的单位匹配(**非贪婪模式**)

​	在量词后面加`？`变成非贪婪模式，以最少的匹配

```js
let str = 'abcd1234';
let reg = /\d{1,4}?/g; // 非贪婪匹配
console.log(str.match(reg)); //["1", "2", "3", "4"]
```

#### 3.`{n,}`

​	匹配n~ 无穷个字符

```js
let str = '2abcd1234';
let reg = /\d{1,}/g;  //匹配1到无穷个
console.log(str.match(reg)); //["2", "1234"]
```

#### 4.`+`

​	匹配重复一个或者**多个字符**

#### 5.`*`

​	匹配重复0个或者多个字符

#### 6.`?`

​	匹配重复一次或者0次

```js
let str = `lbbb`;
console.log(/lb+/g.exec(str)); //["lbbb", index: 0, input: "lbbb", groups: undefined]
```

## promise

- 解决异步函数回调问题
  - 异步函数不能直接拿结果，需要传回调函数给异步函数，使它完成时调用。
  - 同时，调佣的使用把异步任务的结果作为回调的参数，容易出现回调地狱
- **同步在异步之前执行！！**
- promise**返回值**是promise对象

### 方法

`.then()` :继续、然后

`.catch()` :捕获错误

`.all(a,b)`: 二者都完成

### 用法：

```js
//封装Promise
let fn=(num)=>{
    //返回promise实例
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if (num>20){
                res();
            }else {
                rej();
            }
        },1000)
    })
}
//注意，成功和失败的回调函数都只能接收一个参数
fn().then(
    ()=>{
        console.log('成功')
    }
).catch(
	()=>{
        console.log('失败')
    }
)
//bool为false，则执行失败的回调，回调的参数error的值为"失败"
```

```js
//页面中有两个div标签
let div = document.querySelectorAll('div');
let box1 = new Promise((res,rej)=>{
    div[0].onclick = function() {
        res();
    }
});

let box2 = new Promise((res.rej)=>{
    div[1].onclick = function () {
        res();
    }
})
//当二者都点击完成
Promise.all([box1,box2]).then(()=>{
    console.log('二者都被点击了')
}).catch(()=>{
    console.log('失败')
})
```































































































