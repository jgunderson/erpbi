
var dashTitle = 
{
	name: "dashTitle",
	type: "textComponent",
  	listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.dimOne", 
  			"Dashboards.storage.kpi"
  			],
	expression: function(){return "<i><b>" + Dashboards.storage.kpi + kpiTitle + Dashboards.storage.yearPeriod + "</i></b><br>" +
								"For Top 12: <i>" + Dashboards.storage.dimOne;
						  },
	htmlObject: "dashTitle",
	executeAtStart: true
};

var topListRS = new Array();

var topListQueryMeta =  { 
	toplist : {
		queryType: 'mdx',
		jndi: cdfJNDI,
		catalog: cdfCatalog,
		query: function(){
			var agg = "";
			if (timedimaggregate == "[period]")
				{agg = '[' + Dashboards.storage.yearPeriod.slice(0,4) + '].[' 
					+ Dashboards.storage.yearPeriod.substr(6) + ']';}
			else
				{agg = timedimaggregate}
			return 'WITH MEMBER [Measures].[thekpi]  AS [Measures].[' + Dashboards.storage.kpi + '] '
					+ 'MEMBER [' + timedim + '].[last12]  AS Aggregate(LastPeriods(12, [' + timedim + '].[' + Dashboards.storage.yearPeriod.slice(0,4) + '].[' + Dashboards.storage.yearPeriod.substr(6) + '])) '
					+ 'MEMBER [Measures].[name] AS ' + getDimInfo(Dashboards.storage.dimOne).CodeHier + '.CurrentMember.Properties("' + getDimInfo(Dashboards.storage.dimOne).NameProp + '") '
					+ 'MEMBER [Measures].[key] AS ' + getDimInfo(Dashboards.storage.dimOne).CodeHier + '.CurrentMember.Properties("' + dimOneKeyProp + '") '
					+ 'SELECT NON EMPTY {[Measures].[thekpi], [Measures].[name], [Measures].[key]} ON COLUMNS, '
					+ 'NON EMPTY{filter(TopCount(' + getDimInfo(Dashboards.storage.dimOne).CodeHier + '.Members, 12, [Measures].[thekpi]), [Measures].[thekpi] > 0) '
					+ '} ON ROWS '
					+ 'FROM [' + cube + '] '
					+ 'WHERE '
					+ '([' + timedim + '].' + agg + ')';     			
 			}
	}
};

var topListQuery = 
	{
		name: "topListQuery",
		type: "queryComponent",
		queryDefinition: topListQueryMeta.toplist,
		resultvar: "result",
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.dimOne", 
  			"Dashboards.storage.kpi"
  			],
  		htmlObject: "dimhtml",
  		postExecution: function(){
			// copy the result set array
			topListRS = result.slice(); 
		},
		executeAtStart: true
	};

//
//  Define the hyperlinks for categories (parameterName) in the Pie Chart.  We must 
//  look up the code based on the category name.
//
function openForPieWindow(parm){
	var code = "";
	for(i = 0; i < topListRS.length; i++) {
		var decoded = decodeURIComponent((parm + '').replace(/\+/g, '%20'));
		if ( decodeURIComponent((parm + '').replace(/\+/g, '%20')) == topListRS[i][2]) {
			code = topListRS[i][0];
			break;
		}
	}
	window.open("RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=" + hyperlinkByDim + "&template=mantle&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + code);
};

var KPIPieMeta =  { 
	chart : {
		width: 925,
		height: 465,
		chartType: "PieChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function() {
			return "Dimension Comparison";
		},
		catalog: cdfCatalog,
		backgroundColor: cdfBackgroundWhite,
		is3d: "true",
		seriesName: "thePieSeries",
		parameterName : "thePieCategory",
		urlTemplate : "javascript:openForPieWindow('{thePieCategory}')",
		query: function(){
			var agg = "";
			if (timedimaggregate == "[period]")
				{agg = '[' + Dashboards.storage.yearPeriod.slice(0,4) + '].[' 
					+ Dashboards.storage.yearPeriod.substr(6) + ']';}
			else
				{agg = timedimaggregate}			
			return 'WITH MEMBER [Measures].[thekpi]  AS [Measures].[' + Dashboards.storage.kpi + '] '
					+ 'MEMBER [' + timedim + '].[last12]  AS Aggregate(LastPeriods(12, [' + timedim + '].[' + Dashboards.storage.yearPeriod.slice(0,4) + '].[' + Dashboards.storage.yearPeriod.substr(6) + '])) '
					+ 'SELECT NON EMPTY {[Measures].[thekpi], [Measures].[name]} ON COLUMNS, '
					+ 'NON EMPTY{filter(TopCount(' + getDimInfo(Dashboards.storage.dimOne).NameHier + '.Members, 12, [Measures].[thekpi]), [Measures].[thekpi] > 0) '
					+ '} ON ROWS '
					+ 'FROM [' + cube + '] '
					+ 'WHERE '
					+ '([' + timedim + '].' + agg + ')';     			
 			}
	}
};

var KPIPie = 
	{
		name: "KPIPie",
		type: "jFreeChartComponent",
		chartDefinition: KPIPieMeta.chart,
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.dimOne", 
  			"Dashboards.storage.kpi"
  			],
  		htmlObject: "kpipie",
		executeAtStart: true,
	};
	
var barMeta = new Array();
var barChart = new Array();

//
// Tried to create array of chart objects using jQuery.extend and clone methods but could bot get clone.
//

barMetaTemplate =  
	{ 
	chart : {
		width: 300,
		height: 200,
		chartType: "BarChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		catalog: cdfCatalog,
		backgroundColor: cdfBackgroundWhite,
		colors: ["#F16C3A","#FFFF00","#B0D837"],
		is3d: "true"
	}
}

barChartTemplate = 
	{
		type: "jFreeChartComponent",
		solution: "erpbi-reports",
		path: "SODashboards",
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.dimOne", 
  			"Dashboards.storage.kpi"
  			],
		executeAtStart: true
}

function barQuery(memberCode){
			var query = "WITH MEMBER Measures.[Previous Year] AS ([Measures].[" + Dashboards.storage.kpi + "] , ParallelPeriod([" + timedim + "].[" + Dashboards.storage.yearPeriod.slice(0,4) + "])) " 
			+ " select NON EMPTY {[Measures].[" + Dashboards.storage.kpi + "], [Measures].[Previous Year]} ON COLUMNS, "
			+ " LastPeriods(12, [" + timedim + "].[" + Dashboards.storage.yearPeriod.slice(0,4) + "].[" + Dashboards.storage.yearPeriod.substr(6) + "]) ON ROWS "
			+ " from [" + cube + "]"
			+ " where (" + getDimInfo(Dashboards.storage.dimOne).CodeHier + ".[" + memberCode + "])";
			return query;
};

//
// We test to see how many dimension members were returned.  There is no way to stop a component from
// executing so any charts that are need needed execuste with the first member resultSetCode[0].  There
// is alsways at least one member.  To stop


barMeta[0] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[0].chart.title = function(){ return topListRS[0][2]; };
barMeta[0].chart.query = function(){ return barQuery(topListRS[0][0])};
barMeta[0].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[0][0])';

barChart[0] = jQuery.extend(true, {}, barChartTemplate);
barChart[0].name = "barChart0";
barChart[0].chartDefinition = barMeta[0].chart;
barChart[0].htmlObject = "barChart0";

barMeta[1] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[1].chart.title = function(){ if(topListRS.length >1){return topListRS[1][2];}
										else {return "";}
									};
barMeta[1].chart.query = function(){ if(topListRS.length >1){return barQuery(topListRS[1][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[1].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[1][0])';

barChart[1] = jQuery.extend(true, {}, barChartTemplate);
barChart[1].htmlObject = "barChart1";
barChart[1].chartDefinition = barMeta[1].chart;
barChart[1].name = "barChart1";
barChart[1].postExecution = function()  {if(topListRS.length >1){$('#barChart1').attr( 'style', '');}
											else {$('#barChart1').attr( 'style', 'display:none');}
 										};

barMeta[2] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[2].chart.title = function(){ if(topListRS.length >2){return topListRS[2][2];}
										else {return "";}
									};
barMeta[2].chart.query = function(){ if(topListRS.length >2){return barQuery(topListRS[2][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[2].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[2] = jQuery.extend(true, {}, barChartTemplate);
barChart[2].htmlObject = "barChart2";
barChart[2].chartDefinition = barMeta[2].chart;
barChart[2].name = "barChart2";
barChart[2].postExecution = function()  {if(topListRS.length >2){$('#barChart2').attr( 'style', '');}
											else {$('#barChart2').attr( 'style', 'display:none');}
 										};
 										
barMeta[3] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[3].chart.title = function(){ if(topListRS.length >3){return topListRS[3][2];}
										else {return "";}
									};
barMeta[3].chart.query = function(){ if(topListRS.length >3){return barQuery(topListRS[3][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[3].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[3] = jQuery.extend(true, {}, barChartTemplate);
barChart[3].htmlObject = "barChart3";
barChart[3].chartDefinition = barMeta[3].chart;
barChart[3].name = "barChart3";
barChart[3].postExecution = function()  {if(topListRS.length >3){$('#barChart3').attr( 'style', '');}
											else {$('#barChart3').attr( 'style', 'display:none');}
 										};

barMeta[4] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[4].chart.title = function(){ if(topListRS.length >4){return topListRS[4][2];}
										else {return "";}
									};
barMeta[4].chart.query = function(){ if(topListRS.length >4){return barQuery(topListRS[4][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[4].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[4] = jQuery.extend(true, {}, barChartTemplate);
barChart[4].htmlObject = "barChart4";
barChart[4].chartDefinition = barMeta[4].chart;
barChart[4].name = "barChart4";
barChart[4].postExecution = function()  {if(topListRS.length >4){$('#barChart4').attr( 'style', '');}
											else {$('#barChart4').attr( 'style', 'display:none');}
 										};
barMeta[5] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[5].chart.title = function(){ if(topListRS.length >5){return topListRS[5][2];}
										else {return "";}
									};
barMeta[5].chart.query = function(){ if(topListRS.length >5){return barQuery(topListRS[5][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[5].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[5] = jQuery.extend(true, {}, barChartTemplate);
barChart[5].htmlObject = "barChart5";
barChart[5].chartDefinition = barMeta[5].chart;
barChart[5].name = "barChart5";
barChart[5].postExecution = function()  {if(topListRS.length >5){$('#barChart5').attr( 'style', '');}
											else {$('#barChart5').attr( 'style', 'display:none');}
 										}; 
 										
barMeta[6] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[6].chart.title = function(){ if(topListRS.length >6){return topListRS[6][2];}
										else {return "";}
									};
barMeta[6].chart.query = function(){ if(topListRS.length >6){return barQuery(topListRS[6][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[6].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[6] = jQuery.extend(true, {}, barChartTemplate);
barChart[6].htmlObject = "barChart6";
barChart[6].chartDefinition = barMeta[6].chart;
barChart[6].name = "barChart6";
barChart[6].postExecution = function()  {if(topListRS.length >6){$('#barChart6').attr( 'style', '');}
											else {$('#barChart6').attr( 'style', 'display:none');}
 										};										
barMeta[7] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[7].chart.title = function(){ if(topListRS.length >7){return topListRS[7][2];}
										else {return "";}
									};
barMeta[7].chart.query = function(){ if(topListRS.length >7){return barQuery(topListRS[7][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[7].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[7] = jQuery.extend(true, {}, barChartTemplate);
barChart[7].htmlObject = "barChart7";
barChart[7].chartDefinition = barMeta[7].chart;
barChart[7].name = "barChart7";
barChart[7].postExecution = function()  {if(topListRS.length >7){$('#barChart7').attr( 'style', '');}
											else {$('#barChart7').attr( 'style', 'display:none');}
 										};
 										
barMeta[8] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[8].chart.title = function(){ if(topListRS.length >8){return topListRS[8][2];}
										else {return "";}
									};
barMeta[8].chart.query = function(){ if(topListRS.length >8){return barQuery(topListRS[8][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[8].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[8] = jQuery.extend(true, {}, barChartTemplate);
barChart[8].htmlObject = "barChart8";
barChart[8].chartDefinition = barMeta[8].chart;
barChart[8].name = "barChart8";
barChart[8].postExecution = function()  {if(topListRS.length >8){$('#barChart8').attr( 'style', '');}
											else {$('#barChart8').attr( 'style', 'display:none');}
 										};
 										
barMeta[9] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[9].chart.title = function(){ if(topListRS.length >9){return topListRS[9][2];}
										else {return "";}
									};
barMeta[9].chart.query = function(){ if(topListRS.length >9){return barQuery(topListRS[9][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[9].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[9] = jQuery.extend(true, {}, barChartTemplate);
barChart[9].htmlObject = "barChart9";
barChart[9].chartDefinition = barMeta[9].chart;
barChart[9].name = "barChart9";
barChart[9].postExecution = function()  {if(topListRS.length >9){$('#barChart9').attr( 'style', '');}
											else {$('#barChart9').attr( 'style', 'display:none');}
 										};
 										
barMeta[10] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[10].chart.title = function(){ if(topListRS.length >10){return topListRS[10][2];}
										else {return "";}
									};
barMeta[10].chart.query = function(){ if(topListRS.length >10){return barQuery(topListRS[10][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[10].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[10] = jQuery.extend(true, {}, barChartTemplate);
barChart[10].htmlObject = "barChart10";
barChart[10].chartDefinition = barMeta[10].chart;
barChart[10].name = "barChart10";
barChart[10].postExecution = function()  {if(topListRS.length >10){$('#barChart10').attr( 'style', '');}
											else {$('#barChart10').attr( 'style', 'display:none');}
 										};
 										
barMeta[11] = jQuery.extend(true, {}, barMetaTemplate);
barMeta[11].chart.title = function(){ if(topListRS.length >11){return topListRS[11][2];}
										else {return "";}
									};
barMeta[11].chart.query = function(){ if(topListRS.length >11){return barQuery(topListRS[11][0]);}
										else {return barQuery(topListRS[0][0]);}
									};
barMeta[11].chart.urlTemplate = 'javascript:openForDimWindow("&" + getDimInfo(Dashboards.storage.dimOne).URLParm + "=" + topListRS[2][0])';

barChart[11] = jQuery.extend(true, {}, barChartTemplate);
barChart[11].htmlObject = "barChart11";
barChart[11].chartDefinition = barMeta[11].chart;
barChart[11].name = "barChart11";
barChart[11].postExecution = function()  {if(topListRS.length >11){$('#barChart11').attr( 'style', '');}
											else {$('#barChart11').attr( 'style', 'display:none');}
 										};

var components = 
[
	yearPeriodSelector,
	dimSelector,
	KPISelector,
	topListQuery,
	KPIPie,
 	barChart[0], barChart[1], barChart[2], barChart[3],
	barChart[4], barChart[5], barChart[6], barChart[7],
	barChart[8], barChart[9], barChart[10], barChart[11],
	extractDateXAction,
	dashTitle
];

loadTree();
Dashboards.init(components);
document.close();


