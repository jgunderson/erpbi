
 function queryKPILine(){
			var query = "WITH MEMBER [Measures].[KPI: " + Dashboards.storage.kpi + "] as 'IIf(IsEmpty([Measures].[" + Dashboards.storage.kpi + "]), 0.000, [Measures].[" + Dashboards.storage.kpi +"])'"
						+ " MEMBER Measures.[prevKPI] AS ([Measures].[" + Dashboards.storage.kpi + "] , ParallelPeriod([" + timedim + "].[" + Dashboards.storage.yearPeriod.slice(0,4) + "]))" 
						+ " MEMBER [Measures].[Previous Year KPI] AS iif(Measures.[prevKPI] = 0 or Measures.[prevKPI] = NULL or IsEmpty(Measures.[prevKPI]), 0.000, Measures.[prevKPI] )" 
						+ " select NON EMPTY {[Measures].[KPI: " + Dashboards.storage.kpi + "], [Measures].[Previous Year KPI]} ON COLUMNS,"
						+ " LastPeriods(12, [" + timedim + "].[" + Dashboards.storage.yearPeriod.slice(0,4) + "].[" + Dashboards.storage.yearPeriod.substr(6) + "]) ON ROWS"
						+ " from [" + cube + "]"
						+ " where"
						+ " ([Customer.Customer Code].[" + Dashboards.storage.customer + "],"
						+ " [Product.Product by Class].[" + Dashboards.storage.productClass + "],"
						+ " [Product.Product by Category].[" + Dashboards.storage.productCategory + "],"
						+ " [Account Rep.Account Reps by Code].[" + Dashboards.storage.accountRep + "],"
						+ " [Ship City.Ship Region].[" + Dashboards.storage.shipRegion + "],"
						+ " [Product.Product Code].[" + Dashboards.storage.productCode + "])";
			return query;
		}

function queryKPIBar(){
			var query = 'WITH MEMBER [Measures].[KPI: ' + Dashboards.storage.kpi + '] as IIf(IsEmpty([Measures].[' + Dashboards.storage.kpi + ']), 0.000, [Measures].[' + Dashboards.storage.kpi +'])'
						+ ' MEMBER Measures.[prevKPI] AS ([Measures].[' + Dashboards.storage.kpi + '] , ParallelPeriod([' + timedim + '].[' + Dashboards.storage.yearPeriod.slice(0,4) + ']))' 
						+ ' MEMBER [Measures].[Previous Year KPI] AS iif(Measures.[prevKPI] = 0 or Measures.[prevKPI] = NULL or IsEmpty(Measures.[prevKPI]), [Measures].[' + Dashboards.storage.kpi +'], Measures.[prevKPI] )' 
						+ ' MEMBER [Measures].[Percent Increase] AS (([Measures].[KPI: ' + Dashboards.storage.kpi + '] / [Measures].[Previous Year KPI])*100 - 100), FORMAT_STRING = "#,###.00"' 
						+ ' select NON EMPTY {[Measures].[Percent Increase]} ON COLUMNS,'
						+ ' LastPeriods(12, [' + timedim + '].[' + Dashboards.storage.yearPeriod.slice(0,4) + '].[' + Dashboards.storage.yearPeriod.substr(6) + ']) ON ROWS'
						+ ' from [' + cube + ']'
						+ ' where'
						+ ' ([Customer.Customer Code].[' + Dashboards.storage.customer + '],'
						+ ' [Product.Product by Class].[' + Dashboards.storage.productClass + '],'
						+ " [Product.Product by Category].[" + Dashboards.storage.productCategory + "],"
						+ " [Account Rep.Account Reps by Code].[" + Dashboards.storage.accountRep + "],"
						+ " [Ship City.Ship Region].[" + Dashboards.storage.shipRegion + "],"
						+ ' [Product.Product Code].[' + Dashboards.storage.productCode + '])';
			return query;
		}		
	

function loadDash()	{
	Dashboards.init(components);
}
	
var dashTitle = 
{
	name: "dashTitle",
	type: "textComponent",
  	listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass", 
  			"Dashboards.storage.productCode",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion", 
  			"Dashboards.storage.kpi"
  			],
	expression: function(){return "<i><b>" + Dashboards.storage.kpi + kpiTitle + Dashboards.storage.yearPeriod + "</i></b><br>" +
								"Customer: <i>" + Dashboards.storage.customer + "</i>, Account Rep: <i>" + Dashboards.storage.accountRep + "</i>, Ship Region: <i>" + Dashboards.storage.shipRegion + "</i><br>" +  
								"</i>Product Category: <i>" + Dashboards.storage.productCategory + "</i>,  Product Class: <i>" + Dashboards.storage.productClass + "</i>,  Product Code: <i>" + Dashboards.storage.productCode + "</i>";
						  },
	htmlObject: "dashTitle",
	executeAtStart: true
};

var KPILineCMeta =  {
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
		colors: ["#F16C3A","#FFFF00","#B0D837"],
		backgroundColor:cdfBackgroundWhite,
		plotbgcolor: "#FFFFFF",
		is3d: "false",
		markersVisible: "true",
		urlTemplate: "javascript:openByDimWindow('{seriesCategory}')",
		lineWidth:"1",
		query: function(){
			return queryKPILine();
		},
	}
};

var KPILineC = 
{
  name: "KPILineC",
  type: "jFreeChartComponent",
  solution: "erpbi-reports",
  path: "KPIDashboards",
  chartDefinition: KPILineCMeta.chart,
  listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass", 
  			"Dashboards.storage.productCode",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion", 
  			"Dashboards.storage.kpi"
  			],
  htmlObject: "KPILineC",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){}
};

var KPIBarCMeta =  {
	chart : {
		width: cdfWidthMedium,
		height: cdfHeightMedium,
		chartType: "BarChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: function(){
			return "Period ending " + Dashboards.storage.yearPeriod;
		},
		catalog: cdfCatalog,
		is3d: "true",
		urlTemplate: "javascript:openByDimWindow('{seriesCategory}')",
		query: function(){
			return queryKPIBar()
			},
	}
};

var KPIBarC = 
{
  name: "KPIBarC",
  type: "jFreeChartComponent",
  solution: "erpbi-reports",
  path: "KPIDashboards",
  chartDefinition: KPIBarCMeta.chart,
  listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass", 
  			"Dashboards.storage.productCode",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion", 
  			"Dashboards.storage.kpi"
  			],
  htmlObject: "KPIBarC",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){}
};

var title00 = "<b>Top Cutomers for Period</b>";
var topCustomersL = new topListPeriod(cube,
								null, 
								"Customer",
								timedim,
								[	"Product", 
									"Product.Product by Category", 
									"Product.Product by Class", 
									"Account Rep", 
									"Ship City.Ship Region",
									"Year, Period"],
								[	"product", 
									"productCategory", 
									"productClass", 
									"accountRep", 
									"shipRegion",
									"yearPeriod",
									"kpi"],
								hyperlinkPivot,  
								"top00",
								7);

var title10 = "<b>Top Account Reps for Period</b>";
var  topAccountRepL = new topListPeriod(cube,
								null, 
								"Account Rep",
								timedim,
								[	"Product", 
									"Product.Product by Category", 
									"Product.Product by Class", 
									"Customer", 
									"Ship City.Ship Region",
									"Year, Period"],
								[	"product", 
									"productCategory", 
									"productClass", 
									"customer", 
									"shipRegion",
									"yearPeriod",
									"kpi"],
								hyperlinkPivot,  
								"top10",
								7);

var title20 = "<b>Top Ship Regions for Period</b>";
var  topShipRegionL = new topListPeriod(cube,
								null, 
								"Ship City.Ship Region",
								timedim,
								[	"Product", 
									"Product.Product by Category", 
									"Product.Product by Class", 
									"Customer", 
									"Account Rep",
									"Year, Period"],
								[	"product", 
									"productCategory", 
									"productClass", 
									"accountRep", 
									"customer",
									"yearPeriod",
									"kpi"],
								hyperlinkPivot,  
								"top20",
								7);

var title01 = "<b>Top Customers for 12 Trailing Periods</b>";								
var topCustomers12L = new topList12Periods(cube,
								null, 
								"Customer",
								timedim,
								timedimagg,
								[	"Product", 
									"Product.Product by Category", 
									"Product.Product by Class", 
									"Account Rep", 
									"Ship City.Ship Region",
									"Year, Period"],
								[	"product", 
									"productCategory", 
									"productClass", 
									"accountRep", 
									"shipRegion",
									"yearPeriod",
									"kpi"],
								hyperlinkPivot,  
								"top01",
								7);

var title11 = "<b>Top Account Reps for 12 Trailing Periods</b>";
var  topAccountRep12L = new topList12Periods(cube,
								null, 
								"Account Rep",
								timedim,
								timedimagg,
								[	"Product", 
									"Product.Product by Category", 
									"Product.Product by Class", 
									"Customer", 
									"Ship City.Ship Region",
									"Year, Period"],
								[	"product", 
									"productCategory", 
									"productClass", 
									"customer", 
									"shipRegion",
									"yearPeriod",
									"kpi"],
								hyperlinkPivot,  
								"top11",
								7);
								
var title21 = "<b>Top Ship Regions for 12 Trailing Periods</b>";
var  topShipRegion12L = new topList12Periods(cube,
								null, 
								"Ship City.Ship Region",
								timedim,
								timedimagg,
								[	"Product", 
									"Product.Product by Category", 
									"Product.Product by Class", 
									"Customer", 
									"Account Rep",
									"Year, Period"],
								[	"product", 
									"productCategory", 
									"productClass", 
									"accountRep", 
									"customer",
									"yearPeriod",
									"kpi"],
								hyperlinkPivot,  
								"top21",
								7);

var components = 
[
	yearPeriodSelector,
	custSelector,
	prodClassSelector,
	prodCodeSelector,
	prodCategorySelector,
	accountRepSelector,
	shipRegionSelector,
	KPISelector,
	KPILineC,
	KPIBarC,
	topCustomersL.widget,
	topAccountRepL.widget,
	topShipRegionL.widget,
	topCustomers12L.widget,
	topAccountRep12L.widget,
	topShipRegion12L.widget,
	extractDateXAction,
	dashTitle
];

loadTree();
loadDash();
document.close();


