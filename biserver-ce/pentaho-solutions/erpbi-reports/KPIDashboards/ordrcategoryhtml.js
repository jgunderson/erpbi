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
					'<td valign="top"><a id="OKPILineC"></a></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><div align="center"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action='+ hyperlinkOrdrWkDash +'&template=mantle" >Weekly</a><div align="center"></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><a id="OKPIBarC"></a></td>' + '\n' + 
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
		'<td>' + '\n' + 
			'<table>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><div style="height:185px;width:345px;" id="topCustomersL"><a id="topCustomersL"></a></div></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><div style="height:185px;width:345px;" id="topProdCodeL"><a id="topProdCodeL"></a></div></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
						'<td valign="top"><div style="height:185px;width:345px;" id="topProdClassL"><a id="topProdClassL"></a></div></td>' + '\n' + 
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
		'<td>' + '\n' + 
			'<table>' + '\n' + 
				
				'<tr>' + '\n' + 
					'<td valign="top"><div style="height:185px;width:345px;" id="topCustYearL"><a id="topCustYearL"></a></div></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><div style="height:185px;width:345px;" id="topProdCodeYearL"><a id="topProdCodeYearL"></a></div></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><div style="height:185px;width:345px;" id="topProdClassYearL"><a id="topProdClassYearL"></a></div></td>' + '\n' +  
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
	'</tr>' + '\n' + 
'</table>' + '\n';
document.write(htmlcontent);