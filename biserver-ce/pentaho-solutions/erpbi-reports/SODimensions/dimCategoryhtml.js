//
//<a id="KPILineC" target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=orderByPeriodByDim.xcdf&template=mantle" ></a>
//weekly - <a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action=orderKPIDashWeek.xcdf&template=mantle" >
//  Common include for content html

var index = 0;
var barHTML = "";
for (index=0; index < 4; index++)
{
	barHTML = 	barHTML 			
				+ '<tr>' + '\n'
					+ '<td id="barChart' + (index * 3) + '" valign="top"></td>' + '\n'
					+ '<td id="barChart' + (index * 3 + 1) + '" valign="top"></td>' + '\n'
					+ '<td id="barChart' + (index * 3 + 2) + '" valign="top"></td>' + '\n'
				+ '</tr>' + '\n'; 
}

var htmlcontent = 
'<div id="dashTitle" class="titles" align="center">' +
'</div>' +
'<table id="board">' + '\n' + 
	'<tr>' + '\n' + 
		'<td>' + '\n' + 
			'<table align="Center">' + '\n' + 
				'<tr>' + '\n' + 
					'<td id="dimhtml"></td>' + '\n' +
					'<td valign="top" id="kpipie"></td>' + '\n' +
					'<td id="hidden" style="visibility:hidden"></td>' + '\n' +
				'</tr>' + '\n' + 
			'</table>' + '\n' + 
			'<table align="Center">' + '\n' + 				
				barHTML +
			'</table>' + '\n' + 
		'</td>' + '\n' +
	'</tr>' + '\n' + 
'</table>' + '\n';
document.write(htmlcontent);