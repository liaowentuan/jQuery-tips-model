�ļ�����jqPlug.js jqPlugs.css jQuery.js   
�������еĻ����Ǵ����ˣ�css�Ͳ���д��

��ʾ����÷�����
$.LstTips('��ˢ����ҳ��')
ģ̬����÷�����
html��
<button class="dialog_btn">click me</button>
<div class="Dialog" dialog="false"><!--��д��dialog="false"-->
	<div>
		<div class="dialogTitle"><!--header ��Ҫ��class='dialogTitle'-->
			����
		</div>
		<div class="dialogBody yourStyle"><!--body ��Ҫ��class='dialogBody'-->
			����	
			<button dialog-toggle>��</button><!--����Ԫ�أ�����div���ر�ֻҪ�����Ծͺ���-->
		</div>
    	</div>
</div>

js��
	$.LstDialog(".Dialog1",[width;type=number])//��Ȳ��Ĭ��800px