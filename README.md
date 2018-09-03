## iView 修改版

[**iView 官方文档**][official-document]

[**iView 官网**][official-website]

### 该UI库为 iView 2.14.3的修改版，增加了一些新特性

### 安装 iview-modified

使用 npm:
```
npm install iview-modified --save
```

***
### 1. 新增组件

#### a. Datepicker2

> API与原生DatePicker一致，但时间快捷方式的样式不同；<br>
[optionsForDatepicker][file-optionsForDatepicker]中的 optionsForRange，optionsForSingle存放了预设的时间快捷方式；可通过mixins混入页面实例

##### 示例
```
// 时间范围：
<DatePicker2 split-panels type="datetimerange" size="large" :options="optionsForRange"></DatePicker2>

// 单个时间：
<DatePicker2 split-panels type="datetime" size="large" :options="optionsForSingle"></DatePicker2>
```

![][pic-datepicker2]


#### b. Datepicker3

> API与原生DatePicker一致，但时间快捷方式的样式不同；<br>
[optionsForDatepicker][file-optionsForDatepicker]中的 optionsForRange，optionsForSingle存放了预设的时间快捷方式；可通过mixins混入页面实例

**event:**
时间快捷方式选中时，会发出事件：on-shortcut-selected

##### 示例
```
// 时间范围：
<DatePicker3 split-panels type="datetimerange" size="large" :options="optionsForRange"></DatePicker3>

// 单个时间：
<DatePicker3 split-panels type="datetime" size="large" :options="optionsForSingle"></DatePicker3>
```
![][pic-datepicker3]


#### c. TableLazy

> 表格内容延迟加载；<br>
首次加载时，只显示一部分数据，当表格内容滚动至底部时，继续载入部分数据

**prop:** 
@lazyShow: [Boolean, Number]  延迟加载时，每次加载的条数；若为true，则默认每次载入100条；<br>
使用延迟加载时，需设置表格高度height，否则组件将使用默认高度100px；

##### 示例
```
<TableLazy border :columns="columns1" :data="data1" height='500' :lazyShow="50"></TableLazy>
```

![][pic-tableLazy]


***
### 2. 组件新增特性

|prop|用途|type|组件名|示例|默认|
|:-:|:-:|:-:|:-:|:-:|:-:|
|injectedStyle|通过传入样式对象，修改input框样式|Object|Input<br>DatePicker3|{color: 'red', background: 'blue'}|-|
|autoShow|关闭加载动画，使数据加载过程更流畅|Boolean|Scroll|true|false|





[official-document]: https://github.com/trevorHsu/iview-modified/blob/master/official-document.md
[official-website]: https://www.iviewui.com/

[file-optionsForDatepicker]: https://github.com/trevorHsu/iview-modified/tree/master/document_assets/additional-file/optionsForDatepicker

[pic-datepicker2]: https://raw.githubusercontent.com/trevorHsu/iview-modified/master/document_assets/pic/datepicker2.gif
[pic-datepicker3]: https://raw.githubusercontent.com/trevorHsu/iview-modified/master/document_assets/pic/datepicker3.gif
[pic-tableLazy]: https://raw.githubusercontent.com/trevorHsu/iview-modified/master/document_assets/pic/tableLazy.gif