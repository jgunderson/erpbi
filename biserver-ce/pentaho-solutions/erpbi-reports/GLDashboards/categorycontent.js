//
//  Common include for category content charts
//

function openWindow(seriesCategory){
	window.open("RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=" + hyperlinkDash + "&template=mantle&seriesCategory=" + seriesCategory);
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
	expression: function(){return "<b>" + finTitle + Dashboards.storage.yearPeriod + "</i></b><br>" +
								"Company: <i>" + Dashboards.storage.company + "</i>,  Profit Center: <i>" + Dashboards.storage.profitCenter + "</i>";
						  },
	htmlObject: "dashTitle",
	executeAtStart: true
};

function loadDash()	{
	Dashboards.init(components);
}

var chart11Meta =  { 
	chart : {
		width: cdfWidthMedium,
		height: cdfHeightMedium,
		chartType: "LineChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function(){
			return "Period ending " + Dashboards.storage.yearPeriod;
		},
		catalog: cdfCatalog,
		backgroundColor: cdfBackgroundWhite,
		is3d: "false",
		markersVisible: "true",
		lineWidth:"1",
		lineStyle:"solid",
		seriesName: "seriesCategory",
		urlTemplate: "javascript:openWindow('{seriesCategory}')",
		query: function(){
			return query11();
		}
	}
};

var chart11 = 
	{
		name: "chart11",
		type: "jFreeChartComponent",
		chartDefinition: chart11Meta.chart,
  		listeners:[	"Dashboards.storage.yearPeriod", 
  					"Dashboards.storage.company", 
  					"Dashboards.storage.profitCenter"], 
  		htmlObject: "chart11",
		executeAtStart: true,
	};
	
var chart21Meta =  { 
	chart : {
		width: cdfWidthMedium,
		height: cdfHeightMedium,
		chartType: "LineChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function(){
			return "Period ending " + calcPrevYear();
		},
		catalog: cdfCatalog,
		backgroundColor: cdfBackgroundWhite,
		is3d: "false",
		markersVisible: "true",
		lineWidth:"1",
		lineStyle:"solid",
		seriesName: "seriesCategory",
		urlTemplate: "javascript:openWindow('{seriesCategory}')",
		query: function(){
			return query21();
		}
	}
};

var chart21 = 
	{
		name: "chart21",
		type: "jFreeChartComponent",
		chartDefinition: chart21Meta.chart,
  		listeners:[	"Dashboards.storage.yearPeriod", 
  					"Dashboards.storage.company", 
  					"Dashboards.storage.profitCenter"], 
  		htmlObject: "chart21",
		executeAtStart: true,
	};
	
	
var chart12Meta =  { 
	chart : {
		width: cdfWidthMedium,
		height: cdfHeightMedium,
		chartType: "LineChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function(){
			return "Period ending " + Dashboards.storage.yearPeriod;
		},
		catalog: cdfCatalog,
		backgroundColor: cdfBackgroundWhite,
		is3d: "false",
		markersVisible: "true",
		lineWidth:"1",
		lineStyle:"solid",
		seriesName: "seriesCategory",
		urlTemplate: "javascript:openWindow('{seriesCategory}')",
		query: function(){
			return query12();
		}
	}
};

var chart12 = 
	{
		name: "chart12",
		type: "jFreeChartComponent",
		chartDefinition: chart12Meta.chart,
  		listeners:[	"Dashboards.storage.yearPeriod", 
  					"Dashboards.storage.company", 
  					"Dashboards.storage.profitCenter"], 
  		htmlObject: "chart12",
		executeAtStart: true,
	};
	
var chart22Meta =  { 
	chart : {
		width: cdfWidthMedium,
		height: cdfHeightMedium,
		chartType: "LineChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function(){
			return "Period ending " + calcPrevYear();
		},
		catalog: cdfCatalog,
		backgroundColor: cdfBackgroundWhite,
		is3d: "false",
		markersVisible: "true",
		lineWidth:"1",
		lineStyle:"solid",
		seriesName: "seriesCategory",
		urlTemplate: "javascript:openWindow('{seriesCategory}')",
		query: function(){
			return query22();
		}
	}
};

var chart22 = 
	{
		name: "chart22",
		type: "jFreeChartComponent",
		chartDefinition: chart22Meta.chart,
  		listeners:[	"Dashboards.storage.yearPeriod", 
  					"Dashboards.storage.company", 
  					"Dashboards.storage.profitCenter"], 
  		htmlObject: "chart22",
		executeAtStart: true,
	};
	
var chart13Meta =  { 
	chart : {
		width: cdfWidthMedium,
		height: cdfHeightMedium,
		chartType: "LineChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function(){
			return "Period ending " + Dashboards.storage.yearPeriod;
		},
		catalog: cdfCatalog,
		backgroundColor: cdfBackgroundWhite,
		is3d: "false",
		markersVisible: "true",
		lineWidth:"1",
		lineStyle:"solid",
		seriesName: "seriesCategory",
		urlTemplate: "javascript:openWindow('{seriesCategory}')",
		query: function(){
			return query13();
		}
	}
};

var chart13 = 
	{
		name: "chart13",
		type: "jFreeChartComponent",
		chartDefinition: chart13Meta.chart,
  		listeners:[	"Dashboards.storage.yearPeriod", 
  					"Dashboards.storage.company", 
  					"Dashboards.storage.profitCenter"], 
  		htmlObject: "chart13",
		executeAtStart: true,
	};
	
var chart23Meta =  { 
	chart : {
		width: cdfWidthMedium,
		height: cdfHeightMedium,
		chartType: "LineChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function(){
			return "Period ending " + calcPrevYear();
		},
		catalog: cdfCatalog,
		backgroundColor: cdfBackgroundWhite,
		is3d: "false",
		markersVisible: "true",
		lineWidth:"1",
		lineStyle:"solid",
		seriesName: "seriesCategory",
		urlTemplate: "javascript:openWindow('{seriesCategory}')",
		query: function(){
			return query23();
		}
	}
};

var chart23 = 
	{
		name: "chart23",
		type: "jFreeChartComponent",
		chartDefinition: chart23Meta.chart,
  		listeners:[	"Dashboards.storage.yearPeriod", 
  					"Dashboards.storage.company", 
  					"Dashboards.storage.profitCenter"], 
  		htmlObject: "chart23",
		executeAtStart: true,
	};
	

var components = 
[
	yearPeriodSelector,
	companySelector,
	profitCenterSelector,
	lastYearXAction, 
	chart11,
	chart21,
	chart12,
	chart22,
	chart13,
	chart23,
	extractDateXAction,
	dashTitle
];

loadTree();
loadDash();
document.close();

