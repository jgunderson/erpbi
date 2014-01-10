//
//  Common include for content html 
//

var htmlcontent = 
'<div id="dashTitle" class="titles" align="center">' +
'</div>' +
'<table id="board">' + '\n' + 
	'<tr>' + '\n' + 
		'<td>' + '\n' + 
			'<table>' + '\n' + 
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + col1_Title + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><a id="ordersC"></a></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><div align="center"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action='+ hyperlinkOrdWkDash +'&template=mantle" >Weekly</a></div></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' +
					'<td valign="top">' + '\n' +
					'<table>' + '\n' +
						'<tr>' + '\n' +	
							'<td valign="top">' + orderChangeDesc + '</td>' + '\n' + 
							'<td valign="top"><a id="orderChangeDialC" target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action='+ hyperlinkOrdrDash +'&template=mantle"></a></td>' + '\n' + 
						'</tr>' + '\n' +				
					'</table>' + '\n' + 
					'</td>' + '\n' + 
				'</tr>' + '\n' +
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + top1_Title + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td style="height:185px; width:375px" valign="top"><div id="topCustomersL" style="background-color: #EEE9E9"></div></td>' + '\n' + 
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
		'<td>' + '\n' + 
			'<table>' + '\n' + 
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + col2_Title + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><a id="deliveriesC"></a></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top" align="center"><div align="center"><a target="_blank" href= "RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action='+ hyperlinkDelWkDash +'&template=mantle"  >Weekly</a></div></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top">' + '\n' +
					'<table>' + '\n' +
						'<tr>' + '\n' +	
							'<td valign="top">' + profitDesc + '</td>' + '\n' + 
							'<td valign="top"><a id="profitDialC" target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action='+ hyperlinkDeliDash +'&template=mantle"></a></td>' + '\n' + 						
						'</tr>' + '\n' +				
					'</table>' + '\n' + 
					'</td>' + '\n' +
				'</tr>' + '\n' +
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + top2_Title + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td style="height:185px; width:375px" valign="top"><div id="topProfitL" style="background-color: #EEE9E9" ></div></td>' + '\n' + 
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
		'<td>' + '\n' + 
			'<table>' + '\n' + 
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + col3_Title + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top"><a id="unfulfilledC"></a></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td valign="top" align="center"><a  ></a></td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' +
					'<td valign="top">' + '\n' +
					'<table>' + '\n' +
						'<tr>' + '\n' +	
							'<td valign="top">' + o2dDesc + '</td>' + '\n' + 
							'<td valign="top"><a id="o2dDialC" target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action='+ hyperlinkOOrdDash +'&template=mantle" ></a></td>' + '\n' +
						'</tr>' + '\n' +				
					'</table>' + '\n' + 
					'</td>' + '\n' +
				'</tr>' + '\n' +
				'<tr>' + '\n' + 
					'<td class="titles" valign="top">' + top3_Title + '</td>' + '\n' + 
				'</tr>' + '\n' + 
				'<tr>' + '\n' + 
					'<td style="height:185px; width:375px" valign="top"><div id="topUnfulfilledL" style="background-color: #EEE9E9" ></div></td>' + '\n' + 
				'</tr>' + '\n' +
			'</table>' + '\n' + 
		'</td>' + '\n' +
	'</tr>' + '\n' + 
'</table>' + '\n';
document.write(htmlcontent);