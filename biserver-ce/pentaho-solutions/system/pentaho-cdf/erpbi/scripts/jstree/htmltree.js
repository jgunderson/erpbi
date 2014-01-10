//
//  Common include for explorer html
//

var treehtml = 
		'<ul >' + '\n' + 
		'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=&action=erpbiHome.xcdf&template=mantle" >Home</a></li>' + '\n' +
		'</li>' + '\n' +		
		'<li id="phtml_1" class="open"><a href="#" >Sales</a>' + '\n' +  
			'<ul>' + '\n' + 
				'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSODashboards&action=Dashboard.xcdf&template=mantle" >Dashboard</a></li>' + '\n' +
				'<li id="phtml_1" class="open"><a href="#" >Order</a>' + '\n' +
					'<ul>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action=orderKPIDash.xcdf&template=mantle" >KPI by Period</a></li>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FMaps&action=orderMap.xcdf&template=mantle" >KPI City Map</a></li>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSODimensions&action=orderDimDash.xcdf&template=mantle" >Compare Dimensions</a></li>' + '\n' + 
					'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=orderByDim.xcdf&template=mantle" >Detail by Dimension</a></li>' + '\n' + 
					'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=orderForDim.xcdf&template=mantle" >Detail for Dimension Value</a></li>' + '\n' + 
					'</ul>' + '\n' + 
				'</li>' + '\n' + 	
				'<li id="phtml_1" class="open"><a href="#" >Delivery</a>' + '\n' +
					'<ul>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action=deliveryKPIDash.xcdf&template=mantle" >KPI by Period</a></li>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FMaps&action=deliveryMap.xcdf&template=mantle" >KPI City Map</a></li>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSODimensions&action=deliveryDimDash.xcdf&template=mantle" >Compare Dimensions</a></li>' + '\n' + 
					'<li id="phtml_5" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=deliveryByDim.xcdf&template=mantle" >Detail By Dimension</a></li>' + '\n' + 
					'<li id="phtml_6" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=deliveryForDim.xcdf&template=mantle" >Detail for Dimension Value</a></li>' + '\n' + 
					'</ul>' + '\n' + 
				'</li>' + '\n' + 
				'<li id="phtml_1" class="open"><a href="#" >Order Fulfillment</a>' + '\n' +
					'<ul>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action=outOrdersKPIDash.xcdf&template=mantle" >KPI by Period</a></li>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FMaps&action=outOrdersMap.xcdf&template=mantle" >KPI City Map</a></li>' + '\n' + 
					'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSODimensions&action=outOrdersDimDash.xcdf&template=mantle" >Compare Dimensions</a></li>' + '\n' + 
					'<li id="phtml_7" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=outOrdersByDim.xcdf&template=mantle" >Detail by Dimension</a></li>' + '\n' + 
					'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=outOrdersForDim.xcdf&template=mantle" >Detail for Dimension Value</a></li>' + '\n' + 
					'</ul>' + '\n' + 
				'</li>' + '\n' + 
			'</ul>' + '\n' + 
		'</li>' + '\n' +  
		'<li id="phtml_1" class="open"><a href="#">Financial</a>' + '\n' +
			'<ul>' + '\n' + 
			'<li id="phtml_2" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLDashboards&action=top.xcdf&template=mantle" >Dashboard</a></li>' + '\n' +
				'<li id="phtml_1" class="open"><a href="#" >Profitability</a>' + '\n' +
					'<ul>' + '\n' + 
					'<li id="phtml_1" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLDashboards&action=incomeDashboard.xcdf&template=mantle" >Dashboard</a></li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Revenue and Expenses</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Revenue+(IS)" >Revenue</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Cost+of+Goods+Sold+(IS)" >Cost of Goods Sold</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Operating+Expenses+(IS)" >Operating Expenses</a></li>' + '\n' + 
						'</ul>' + '\n' +
					'</li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Income</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Gross+Income+(IS)" >Gross Income</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Operating+Income+(IS)" >Operating Income</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Net+Income+(IS)" >Net Income</a></li>' + '\n' + 
						'</ul>' + '\n' +
					'</li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Margins</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Percentage,+Gross+Margin" >Gross Margin</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Percentage,+Operating+Margin" >Operating Margin</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Percentage,+Net+Margin" >Net Margin</a></li>' + '\n' + 
						'</ul>' + '\n' +
					'</li>' + '\n' + 
					'</ul>' + '\n' +
				'</li>' + '\n' + 
				'<li id="phtml_1" class="open"><a href="#" >Cash Flow</a>' + '\n' +
					'<ul>' + '\n' + 
					'<li id="phtml_1" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLDashboards&action=cashDashboard.xcdf&template=mantle" >Dashboard</a></li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Cash Flow Activities</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Net+Income+(IS)" >Net Income</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Operating+Activities+(CF)" >Operating Activities</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Financing+Activities+(CF)" >Financing Activities</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Investing+Activities+(CF)" >Investing Activities</a></li>' + '\n' + 
						'</ul>' + '\n' +
					'</li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Cash</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Net+Cash+Flow+(CF)" >Net Cash Flow</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Amount,+Free+Cash+Flow" >Free Cash Flow</a></li>' + '\n' + 
						'</ul>' + '\n' + 
					'</li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Efficiency</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Days,+Sales+Outstanding" >Days Sales Outstanding</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Days,+Payable+Outstanding" >Days Payable Outstanding</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Days,+In+Inventory" >Days In Inventory</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Days,+Cash+Conversion+Cycle" >Cash Conversion Cycle</a></li>' + '\n' + 
						'</ul>' + '\n' +
					'</li>' + '\n' + 
					'</ul>' + '\n' +
				'</li>' + '\n' + 
				'<li id="phtml_1" class="open"><a href="#" >Assets & Liabilities</a>' + '\n' +
					'<ul>' + '\n' + 
					'<li id="phtml_1" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLDashboards&action=liabilityAssetDashboard.xcdf&template=mantle" >Dashboard</a></li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Debt</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Ratio,+Debt+to+Equity" >Debt to Equity Ratio</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Ratio,+Total+Debt" >Total Debt Ratio</a></li>' + '\n' + 
						'</ul>' + '\n' + 
					'</li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Assets, Liabilities</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Ratio,+Current" >Current Ratio</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Ratio,+Quick" >Quick Ratio</a></li>' + '\n' + 
						'</ul>' + '\n' + 
					'</li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Returns</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Ratio,+Return+on+Assets" >Return on Assets Ratio</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=KPIPivot.xcdf&template=mantle&seriesCategory=Ratio,+Return+on+Equity" >Return on Equity Ratio</a></li>' + '\n' + 
						'</ul>' + '\n' + 
					'</li>' + '\n' + 
					'</ul>' + '\n' +
				'</li>' + '\n' + 
				'<li id="phtml_1" class="open"><a href="#" >Budget Comparison</a>' + '\n' +
					'<ul>' + '\n' + 
					'<li id="phtml_1" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLDashboards&action=budgetDashboard.xcdf&template=mantle" >Dashboard</a></li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Revenue</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=budgetPivot.xcdf&template=mantle&seriesCategory=Amount,+Sales+Income" >Sales Income</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=budgetPivot.xcdf&template=mantle&seriesCategory=Amount,+Other+Income" >Other Income</a></li>' + '\n' + 
						'</ul>' + '\n' + 
					'</li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Expense</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=budgetPivot.xcdf&template=mantle&seriesCategory=Amount,+Cost+of+Goods+Sold+(IS)" >Cost of Goods Sold</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=budgetPivot.xcdf&template=mantle&seriesCategory=Amount,+Operating+Expenses" >Operating Expenses</a></li>' + '\n' + 
						'</ul>' + '\n' + 
					'</li>' + '\n' + 
					'<li id="phtml_1" class="closed"><a href="#" >Cash</a>' + '\n' +
						'<ul>' + '\n' + 
						'<li id="phtml_3" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=budgetPivot.xcdf&template=mantle&seriesCategory=Amount,+Net+Cash+Flow+(CF)" >Net Cash Flow</a></li>' + '\n' + 
						'<li id="phtml_4" class="treeitem"><a target="_blank" href="RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=budgetPivot.xcdf&template=mantle&seriesCategory=Days,+Cash+Conversion+Cycle" >Cash Conversion Cycle</a></li>' + '\n' + 
						'</ul>' + '\n' + 
					'</li>' + '\n' + 
					'</ul>' + '\n' +
				'</li>' + '\n' + 
			'</ul>' + '\n' + 
		'</li>' + '\n' + 
	'</ul>';
	document.write(treehtml);