# jQuery-tips-model
jQuery提示框插件和模态框插件，然而没有样式，支持模态框嵌套，文件小，只有56行

文件引入jqPlug.js jqPlugs.css jQuery.js   
能做这行的基本是大神了，css就不想写了

提示框调用方法：
`$.LstTips('你刷新了页面')`
模态框调用方法：
html：
`<button class="dialog_btn">click me</button>
<div class="Dialog" dialog="false"><!--需写明dialog="false"-->
	<div>
		<div class="dialogTitle"><!--header 需要有class='dialogTitle'-->
			标题
		</div>
		<div class="dialogBody yourStyle"><!--body 需要有class='dialogBody'-->
			内容	
			<button dialog-toggle>×</button><!--任意元素（除了div）关闭只要加属性就好了-->
		</div>
    	</div>
</div>`

js：
	`$.LstDialog(".Dialog1",[width;type=number])//宽度不填，默认800px`

