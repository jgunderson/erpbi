//
//<a id="KPILineC" target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=orderByPeriodByDim.xcdf&template=mantle" ></a>
//weekly - <a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action=orderKPIDashWeek.xcdf&template=mantle" >
//  Common include for content html


var htmlcontent = 
'<div id="dashTitle" class="titles" align="center">' +
'</div>' +
'<table id="board">' + '\n' + 
	'<tr>' + '\n' + 
		'<td>' + '\n' + 
			'<table align="Center">' + '\n' + 
			
				'<tr>' + '\n' + 
					'<td valign="top"><a id="KPILineC"></a></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><div align="center"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action='+ hyperlinkWkDash +'&template=mantle" >Weekly</a><div align="center"></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><a id="KPIBarC"></a></td>' + '\n' + 
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
		'<td>' + '\n' + 
			'<table>' + '\n' + 
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + title00 + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td  style="height:185px;width:375px;" valign="top"><div style="border:1px solid blue;background-color: #EEE9E9" class="toplist" id="top00"></div></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + title10 + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td style="height:185px;width:375px;" valign="top"><div style="border:1px solid blue;background-color: #EEE9E9" class="toplist" id="top10"></div></td>' + '\n' + 
				'</tr>' + '\n' +
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + title20 + '</td>' + '\n' + 
				'</tr>' + '\n' +  
				'<tr>' + '\n' + 
					'<td style="height:185px;width:375px;" valign="top"><div style="border:1px solid blue;background-color: #EEE9E9" class="toplist" id="top20"></div></td>' + '\n' + 
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
		'<td>' + '\n' + 
			'<table>' + '\n' + 
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + title01 + '</td>' + '\n' + 
				'</tr>' + '\n' +				
				'<tr>' + '\n' + 
					'<td style="height:185px;width:375px;" valign="top"><div style="border:1px solid blue;background-color: #EEE9E9" class="toplist" id="top01"></div></td>' + '\n' + 
				'</tr>' + '\n' +
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + title11 + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td style="height:185px;width:375px;" valign="top"><div style="border:1px solid blue;background-color: #EEE9E9" class="toplist" id="top11"></div></td>' + '\n' + 
				'</tr>' + '\n' +
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + title21 + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td style="height:185px;width:375px;" valign="top"><div style="border:1px solid blue;background-color: #EEE9E9" class="toplist" id="top21"></div></td>' + '\n' +  
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
	'</tr>' + '\n' + 
'</table>' + '\n';
document.write(htmlcontent);