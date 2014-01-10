//
//  Common include for category content charts
//

function openWindow(seriesCategory){
	window.open("RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=incomDashboard.scdf" + hyperlinkDash + "&template=mantle&seriesCategory=" + seriesCategory);
};

function calcPrevYear() {
	var theYear = Dashboards.storage.yearPeriod.slice(0,4);
	if ( theYear > Dashboards.storage.lastYear)
		{theYear = theYear - 1;}
	return theYear + ", " + Dashboards.storage.yearPeriod.substr(6);
};

var dashTitle = 
{
	name: "dashTitle",
	type: "textComponent",
  	listeners:[	"Dashboards.storage.yearPeriod", 
  				"Dashboards.storage.company", 
  				"Dashboards.storage.profitCenter"], 
	expression: function(){return "<b>Financial KPIs</b><br>" +
								"Company: <i>" + Dashboards.storage.company + "</i>,  Profit Center: <i>" + Dashboards.storage.profitCenter + "</i>";
						  },
	htmlObject: "dashTitle",
	executeAtStart: true
};

function loadDash()	{
	Dashboards.init(components);
}

var chartMetaDialTemplate =  { 
	chart : {
		width:  150,
		height: 150,
		chartType: "DialChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		catalog: cdfCatalog,
		colors: ["#F16C3A","#FFFF00","#B0D837"],
		backgroundColor: cdfBackgroundWhite,
		is3d: "true",
		urlTemplate: "javascript:openWindow('{seriesCategory}')",
	}
};

var chartDialTemplate = 
	{
		type: "dialComponent",
  		listeners:[	"Dashboards.storage.yearPeriod", 
  					"Dashboards.storage.company", 
  					"Dashboards.storage.profitCenter"], 
		executeAtStart: true,
	};
	
var chartMetaLineTemplate =  {
	chart : {
		width: 300,
		height: 150,
		chartType: "LineChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function(){
			return "Period ending " + Dashboards.storage.yearPeriod;
		},
		catalog: cdfCatalog,
		colors: ["#F16C3A","#FFFF00","#B0D837"],
		backgroundColor:cdfBackgroundWhite,
		plotbgcolor: "#FFFFFF",
		is3d: "false",
		markersVisible: "true",
		urlTemplate: "javascript:openWindow('{seriesCategory}')",
		lineWidth:"1"
	}
};

var chartLineTemplate = 
{
  type: "jFreeChartComponent",
  solution: "erpbi-reports",
  path: "GLDashboards",
  listeners:[	"Dashboards.storage.yearPeriod", 
  				"Dashboards.storage.company", 
  				"Dashboards.storage.profitCenter"], 
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){}
};

///////////// Gross Margin

var KPIdesc10 =  "<b>" + KPIConstants.detail.PercentageGrossMargin.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.PercentageGrossMargin.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.PercentageGrossMargin.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.PercentageGrossMargin.calc;

var chart11Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart11Meta.chart.intervals = KPIConstants.target.PercentageGrossMargin.interval;
chart11Meta.chart.title = "Period";
chart11Meta.chart.colors = KPIConstants.detail.PercentageGrossMargin.colors;
chart11Meta.chart.query = function(){return query1(KPIConstants.detail.PercentageGrossMargin.title);}; 

var chart11 = jQuery.extend(true, {}, chartDialTemplate);
chart11.name = "chart11";
chart11.chartDefinition = chart11Meta.chart;
chart11.htmlObject = "chart11";

var chart12Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart12Meta.chart.intervals = KPIConstants.target.PercentageGrossMargin.interval; 
chart12Meta.chart.title = "Year";
chart12Meta.chart.colors = KPIConstants.detail.PercentageGrossMargin.colors;
chart12Meta.chart.query = function(){return query2(KPIConstants.detail.PercentageGrossMargin.title);};  

var chart12 = jQuery.extend(true, {}, chartDialTemplate);
chart12.name = "chart12";
chart12.chartDefinition = chart12Meta.chart;
chart12.htmlObject = "chart12";

var chart13Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart13Meta.chart.query = function(){return query3(KPIConstants.detail.PercentageGrossMargin.title, KPIConstants.target.PercentageGrossMargin.midpoint);};  

var chart13 = jQuery.extend(true, {}, chartLineTemplate);
chart13.name = "chart13";
chart13.chartDefinition = chart13Meta.chart;
chart13.htmlObject = "chart13";

///////////// Net Margin

var KPIdesc20 =  "<b>" + KPIConstants.detail.PercentageNetMargin.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.PercentageNetMargin.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.PercentageNetMargin.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.PercentageNetMargin.calc;

var chart21Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart21Meta.chart.intervals = KPIConstants.target.PercentageNetMargin.interval;
chart21Meta.chart.title = "Period";
chart21Meta.chart.colors = KPIConstants.detail.PercentageNetMargin.colors;
chart21Meta.chart.query = function(){return query1(KPIConstants.detail.PercentageNetMargin.title);}; 

var chart21 = jQuery.extend(true, {}, chartDialTemplate);
chart21.name = "chart21";
chart21.chartDefinition = chart21Meta.chart;
chart21.htmlObject = "chart21";

var chart22Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart22Meta.chart.intervals = KPIConstants.target.PercentageNetMargin.interval; 
chart22Meta.chart.title = "Year";
chart22Meta.chart.colors = KPIConstants.detail.PercentageNetMargin.colors;
chart22Meta.chart.query = function(){return query2(KPIConstants.detail.PercentageNetMargin.title);};  

var chart22 = jQuery.extend(true, {}, chartDialTemplate);
chart22.name = "chart22";
chart22.chartDefinition = chart22Meta.chart;
chart22.htmlObject = "chart22";

var chart23Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart23Meta.chart.query = function(){return query3(KPIConstants.detail.PercentageNetMargin.title, KPIConstants.target.PercentageGrossMargin.midpoint);};  

var chart23 = jQuery.extend(true, {}, chartLineTemplate);
chart23.name = "chart23";
chart23.chartDefinition = chart23Meta.chart;
chart23.htmlObject = "chart23";

///////////// DSO

var KPIdesc30 =  "<b>" + KPIConstants.detail.DaysSalesOutstanding.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.DaysSalesOutstanding.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.DaysSalesOutstanding.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.DaysSalesOutstanding.calc;

var chart31Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart31Meta.chart.intervals = KPIConstants.target.DaysSalesOutstanding.interval;
chart31Meta.chart.title = "Period";
chart31Meta.chart.colors = KPIConstants.detail.DaysSalesOutstanding.colors;
chart31Meta.chart.query = function(){return query1(KPIConstants.detail.DaysSalesOutstanding.title);}; 

var chart31 = jQuery.extend(true, {}, chartDialTemplate);
chart31.name = "chart31";
chart31.chartDefinition = chart31Meta.chart;
chart31.htmlObject = "chart31";

var chart32Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart32Meta.chart.intervals = KPIConstants.target.DaysSalesOutstanding.interval; 
chart32Meta.chart.title = "Year";
chart32Meta.chart.colors = KPIConstants.detail.DaysSalesOutstanding.colors;
chart32Meta.chart.query = function(){return query2(KPIConstants.detail.DaysSalesOutstanding.title);};  

var chart32 = jQuery.extend(true, {}, chartDialTemplate);
chart32.name = "chart32";
chart32.chartDefinition = chart32Meta.chart;
chart32.htmlObject = "chart32";

var chart33Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart33Meta.chart.query = function(){return query3(KPIConstants.detail.DaysSalesOutstanding.title, KPIConstants.target.DaysSalesOutstanding.midpoint);};  

var chart33 = jQuery.extend(true, {}, chartLineTemplate);
chart33.name = "chart33";
chart33.chartDefinition = chart33Meta.chart;
chart33.htmlObject = "chart33";

///////////// DPO

var KPIdesc40 =  "<b>" + KPIConstants.detail.DaysPayableOutstanding.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.DaysPayableOutstanding.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.DaysPayableOutstanding.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.DaysPayableOutstanding.calc;
				
var chart41Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart41Meta.chart.intervals = KPIConstants.target.DaysPayableOutstanding.interval;
chart41Meta.chart.title = "Period";
chart41Meta.chart.colors = KPIConstants.detail.DaysPayableOutstanding.colors;
chart41Meta.chart.query = function(){return query1(KPIConstants.detail.DaysPayableOutstanding.title);}; 

var chart41 = jQuery.extend(true, {}, chartDialTemplate);
chart41.name = "chart41";
chart41.chartDefinition = chart41Meta.chart;
chart41.htmlObject = "chart41";

var chart42Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart42Meta.chart.intervals = KPIConstants.target.DaysPayableOutstanding.interval; 
chart42Meta.chart.title = "Year";
chart42Meta.chart.colors = KPIConstants.detail.DaysPayableOutstanding.colors;
chart42Meta.chart.query = function(){return query2(KPIConstants.detail.DaysPayableOutstanding.title);};  

var chart42 = jQuery.extend(true, {}, chartDialTemplate);
chart42.name = "chart42";
chart42.chartDefinition = chart42Meta.chart;
chart42.htmlObject = "chart42";

var chart43Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart43Meta.chart.query = function(){return query3(KPIConstants.detail.DaysPayableOutstanding.title, KPIConstants.target.DaysPayableOutstanding.midpoint);};  

var chart43 = jQuery.extend(true, {}, chartLineTemplate);
chart43.name = "chart43";
chart43.chartDefinition = chart43Meta.chart;
chart43.htmlObject = "chart43";

///////////// DII

var KPIdesc50 =  "<b>" + KPIConstants.detail.DaysInInventory.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.DaysInInventory.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.DaysInInventory.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.DaysInInventory.calc;

var chart51Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart51Meta.chart.intervals = KPIConstants.target.DaysInInventory.interval;
chart51Meta.chart.title = "Period";
chart51Meta.chart.colors = KPIConstants.detail.DaysInInventory.colors;
chart51Meta.chart.query = function(){return query1(KPIConstants.detail.DaysInInventory.title);}; 

var chart51 = jQuery.extend(true, {}, chartDialTemplate);
chart51.name = "chart51";
chart51.chartDefinition = chart51Meta.chart;
chart51.htmlObject = "chart51";

var chart52Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart52Meta.chart.intervals = KPIConstants.target.DaysInInventory.interval; 
chart52Meta.chart.title = "Year";
chart52Meta.chart.colors = KPIConstants.detail.DaysInInventory.colors;
chart52Meta.chart.query = function(){return query2(KPIConstants.detail.DaysInInventory.title);};  

var chart52 = jQuery.extend(true, {}, chartDialTemplate);
chart52.name = "chart52";
chart52.chartDefinition = chart52Meta.chart;
chart52.htmlObject = "chart52";

var chart53Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart53Meta.chart.query = function(){return query3(KPIConstants.detail.DaysInInventory.title, KPIConstants.target.DaysInInventory.midpoint);};  

var chart53 = jQuery.extend(true, {}, chartLineTemplate);
chart53.name = "chart53";
chart53.chartDefinition = chart53Meta.chart;
chart53.htmlObject = "chart53";

///////////// CCC

var KPIdesc60 =  "<b>" + KPIConstants.detail.DaysCashConversionCycle.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.DaysCashConversionCycle.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.DaysCashConversionCycle.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.DaysCashConversionCycle.calc;

var chart61Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart61Meta.chart.intervals = KPIConstants.target.DaysCashConversionCycle.interval;
chart61Meta.chart.title = "Period";
chart61Meta.chart.colors = KPIConstants.detail.DaysCashConversionCycle.colors;
chart61Meta.chart.query = function(){return query1(KPIConstants.detail.DaysCashConversionCycle.title);}; 

var chart61 = jQuery.extend(true, {}, chartDialTemplate);
chart61.name = "chart61";
chart61.chartDefinition = chart61Meta.chart;
chart61.htmlObject = "chart61";

var chart62Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart62Meta.chart.intervals = KPIConstants.target.DaysCashConversionCycle.interval; 
chart62Meta.chart.title = "Year";
chart62Meta.chart.colors = KPIConstants.detail.DaysCashConversionCycle.colors;
chart62Meta.chart.query = function(){return query2(KPIConstants.detail.DaysCashConversionCycle.title);};  

var chart62 = jQuery.extend(true, {}, chartDialTemplate);
chart62.name = "chart62";
chart62.chartDefinition = chart62Meta.chart;
chart62.htmlObject = "chart62";

var chart63Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart63Meta.chart.query = function(){return query3(KPIConstants.detail.DaysCashConversionCycle.title, KPIConstants.target.DaysCashConversionCycle.midpoint);};  

var chart63 = jQuery.extend(true, {}, chartLineTemplate);
chart63.name = "chart63";
chart63.chartDefinition = chart63Meta.chart;
chart63.htmlObject = "chart63";

///////////// Debt to Equity

var KPIdesc70 =  "<b>" + KPIConstants.detail.RatioDebtToEquity.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.RatioDebtToEquity.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.RatioDebtToEquity.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.RatioDebtToEquity.calc;

var chart71Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart71Meta.chart.intervals = KPIConstants.target.RatioDebtToEquity.interval;
chart71Meta.chart.title = "Period";
chart71Meta.chart.colors = KPIConstants.detail.RatioDebtToEquity.colors;
chart71Meta.chart.query = function(){return query1(KPIConstants.detail.RatioDebtToEquity.title);}; 

var chart71 = jQuery.extend(true, {}, chartDialTemplate);
chart71.name = "chart71";
chart71.chartDefinition = chart71Meta.chart;
chart71.htmlObject = "chart71";

var chart72Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart72Meta.chart.intervals = KPIConstants.target.RatioDebtToEquity.interval; 
chart72Meta.chart.title = "Year";
chart72Meta.chart.colors = KPIConstants.detail.RatioDebtToEquity.colors;
chart72Meta.chart.query = function(){return query2(KPIConstants.detail.RatioDebtToEquity.title);};  

var chart72 = jQuery.extend(true, {}, chartDialTemplate);
chart72.name = "chart72";
chart72.chartDefinition = chart72Meta.chart;
chart72.htmlObject = "chart72";

var chart73Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart73Meta.chart.query = function(){return query3(KPIConstants.detail.RatioDebtToEquity.title, KPIConstants.target.RatioDebtToEquity.midpoint);};  

var chart73 = jQuery.extend(true, {}, chartLineTemplate);
chart73.name = "chart73";
chart73.chartDefinition = chart73Meta.chart;
chart73.htmlObject = "chart73";

///////////// Quick

var KPIdesc80 =  "<b>" + KPIConstants.detail.RatioQuick.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.RatioQuick.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.RatioQuick.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.RatioQuick.calc;

var chart81Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart81Meta.chart.intervals = KPIConstants.target.RatioQuick.interval;
chart81Meta.chart.title = "Period";
chart81Meta.chart.colors = KPIConstants.detail.RatioQuick.colors;
chart81Meta.chart.query = function(){return query1(KPIConstants.detail.RatioQuick.title);}; 

var chart81 = jQuery.extend(true, {}, chartDialTemplate);
chart81.name = "chart81";
chart81.chartDefinition = chart81Meta.chart;
chart81.htmlObject = "chart81";

var chart82Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart82Meta.chart.intervals = KPIConstants.target.RatioQuick.interval; 
chart82Meta.chart.title = "Year";
chart82Meta.chart.colors = KPIConstants.detail.RatioQuick.colors;
chart82Meta.chart.query = function(){return query2(KPIConstants.detail.RatioQuick.title);};  

var chart82 = jQuery.extend(true, {}, chartDialTemplate);
chart82.name = "chart82";
chart82.chartDefinition = chart82Meta.chart;
chart82.htmlObject = "chart82";

var chart83Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart83Meta.chart.query = function(){return query3(KPIConstants.detail.RatioQuick.title, KPIConstants.target.RatioQuick.midpoint);};  

var chart83 = jQuery.extend(true, {}, chartLineTemplate);
chart83.name = "chart83";
chart83.chartDefinition = chart83Meta.chart;
chart83.htmlObject = "chart83";

///////////// Return on Assets

var KPIdesc90 =  "<b>" + KPIConstants.detail.RatioReturnOnAssets.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.RatioReturnOnAssets.midpoint + "<br>" +
				"Industry Avg:  " + KPIConstants.industry.RatioReturnOnAssets.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.RatioReturnOnAssets.calc;

var chart91Meta = jQuery.extend(true, {}, chartMetaDialTemplate); 
chart91Meta.chart.intervals = KPIConstants.target.RatioReturnOnAssets.interval;
chart91Meta.chart.title = "Period";
chart91Meta.chart.colors = KPIConstants.detail.RatioReturnOnAssets.colors;
chart91Meta.chart.query = function(){return query1(KPIConstants.detail.RatioReturnOnAssets.title);}; 

var chart91 = jQuery.extend(true, {}, chartDialTemplate);
chart91.name = "chart91";
chart91.chartDefinition = chart91Meta.chart;
chart91.htmlObject = "chart91";

var chart92Meta = jQuery.extend(true, {}, chartMetaDialTemplate);
chart92Meta.chart.intervals = KPIConstants.target.RatioReturnOnAssets.interval; 
chart92Meta.chart.title = "Year";
chart92Meta.chart.colors = KPIConstants.detail.RatioReturnOnAssets.colors;
chart92Meta.chart.query = function(){return query2(KPIConstants.detail.RatioReturnOnAssets.title);};  

var chart92 = jQuery.extend(true, {}, chartDialTemplate);
chart92.name = "chart92";
chart92.chartDefinition = chart92Meta.chart;
chart92.htmlObject = "chart92";

var chart93Meta = jQuery.extend(true, {}, chartMetaLineTemplate);
chart93Meta.chart.query = function(){return query3(KPIConstants.detail.RatioReturnOnAssets.title, KPIConstants.target.RatioReturnOnAssets.midpoint);};  

var chart93 = jQuery.extend(true, {}, chartLineTemplate);
chart93.name = "chart93";
chart93.chartDefinition = chart93Meta.chart;
chart93.htmlObject = "chart93";

var components = 
[
	yearPeriodSelector,
	companySelector,
	profitCenterSelector,
	lastYearXAction, 
	chart11, chart12, chart13,
	chart21, chart22, chart23,
	chart31, chart32, chart33,
	chart41, chart42, chart43,
	chart51, chart52, chart53,
	chart61, chart62, chart63,
	chart71, chart72, chart73,
	chart81, chart82, chart83,
	chart91, chart92, chart93,
	extractDateXAction,
	dashTitle
];

loadTree();
loadDash();
document.close();

