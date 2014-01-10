//
//  Common include for category content charts 
//

//to move this query to template.html file
 


function openWindow(seriesCategory){
	window.open("RenderXCDF?solution=erpbi-reports&path=%2FGLPivots&action=" + hyperlinkDash + "&template=mantle&seriesCategory=" + seriesCategory);
};

function openOrdrWindow(seriesCategory){
//hyperlinkDash=orderKPIDash.xcdf
	window.open("RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action=" + hyperlinkOrdrDash + "&template=mantle&seriesCategory=" + seriesCategory);
};

function openDeliWindow(seriesCategory){
//hyperlinkDash=orderKPIDash.xcdf
	window.open("RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action=" + hyperlinkDeliDash + "&template=mantle&seriesCategory=" + seriesCategory);
};

function openOOrdWindow(seriesCategory){
//hyperlinkDash=orderKPIDash.xcdf
	window.open("RenderXCDF?solution=erpbi-reports&path=%2FKPIDashboards&action=" + hyperlinkOOrdDash + "&template=mantle&seriesCategory=" + seriesCategory);
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
  	listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion", 
  			"Dashboards.storage.productCode"], 
	expression: function(){return "<b>Order, Delivery and Order Fulfillment Summary for <i>" + Dashboards.storage.yearPeriod + "</i></b><br>" +
								"Customer: <i>" + Dashboards.storage.customer + "</i>, Account Rep: <i>" + Dashboards.storage.accountRep + "</i>, Ship Region: <i>" + Dashboards.storage.shipRegion + "</i><br>" +  
								"</i>Product Category: <i>" + Dashboards.storage.productCategory + "</i>,  Product Class: <i>" + Dashboards.storage.productClass + "</i>,  Product Code: <i>" + Dashboards.storage.productCode + "</i>";
						},
	htmlObject: "dashTitle",
	executeAtStart: true,
};

function loadDash()	{
	Dashboards.init(components);
}

var ordersCMeta =  { 
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
		colors: ["#F16C3A","#FFFF00","#B0D837"],
		is3d: "false",
		markersVisible: "true",
		lineWidth:"2",
		lineStyle:"solid",
		//seriesName: "seriesCategory",
		urlTemplate: "javascript:openOrdrWindow('{seriesCategory}')",
		query: function(){
			return queryOrderC();
		},
		//tooltipContent: "Click in queryOrderC"
	}
};

var ordersC = 
	{
		name: "ordersC",
		type: "jFreeChartComponent",
		chartDefinition: ordersCMeta.chart,
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion",
  			"Dashboards.storage.productCode"], 
  		htmlObject: "ordersC",
		executeAtStart: true,
		//tooltip: "Click to see Sales World!"
	};


	
var deliveriesCMeta =  { 
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
		colors: ["#F16C3A","#FFFF00","#B0D837"],
		markersVisible: "true",
		lineWidth:"2",
		lineStyle:"solid",
		is3d: "false",
		//seriesName: "seriesCategory",
		urlTemplate: "javascript:openDeliWindow('{seriesCategory}')",
		query: function(){
			return queryDeliveriesC();
		},
		//tooltipContent: "Click in deliveriesCMeta"
	}
};

var deliveriesC = 
	{
		name: "deliveriesC",
		type: "jFreeChartComponent",
		chartDefinition: deliveriesCMeta.chart,
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion", 
  			"Dashboards.storage.productCode"], 
  		htmlObject: "deliveriesC",
		executeAtStart: true,
		//tooltip: "Click to see Sales World!"
	};	

var unfulfilledCMeta =  { 
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
		colors: ["#F16C3A","#FFFF00","#B0D837"],
		markersVisible: "true",
		lineWidth:"2",
		lineStyle:"solid",
		is3d: "false",
		//seriesName: "seriesCategory",
		urlTemplate: "javascript:openOOrdWindow('{seriesCategory}')",
		query: function(){
			return queryUnfulfilledC();
		},
		//tooltipContent: "Click in deliveriesCMeta"
	}
};

var unfulfilledC = 
	{
		name: "unfulfilledC",
		type: "jFreeChartComponent",
		chartDefinition: unfulfilledCMeta.chart,
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass", 
  			"Dashboards.storage.productCode",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion"], 
  		htmlObject: "unfulfilledC",
		executeAtStart: true,
		//tooltip: "Click to see Sales World!"
	};
	
var orderChangeDesc =  "<b>" + KPIConstants.detail.PercentageOrderChange.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.PercentageOrderChange.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.PercentageOrderChange.calc;		

var orderChangeDialMeta =  {
	dialChartDefinition : {
		width: 175,
		height: 175,
		chartType: "DialChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: "Order Percent Change",
		catalog: cdfCatalog,
		colors: KPIConstants.detail.PercentageOrderChange.colors,
		backgroundColor: cdfBackgroundWhite,
		is3d: "true",
		intervals: KPIConstants.target.PercentageOrderChange.interval,
		urlTemplate: "javascript:openOrdrWindow('{seriesCategory}')",
		query: function(){
			return queryOrderChangeDial();
		},
	}
};

var orderChangeDialC = 
	{
		name: "orderChangeDialC",
		type: "dialComponent",
		chartDefinition: orderChangeDialMeta.dialChartDefinition,
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass", 
  			"Dashboards.storage.productCode",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion"], 
  		parameters: [],
		htmlObject: "orderChangeDialC",
		executeAtStart: true
	};

var profitDesc =  "<b>" + KPIConstants.detail.PercentageGrossMargin.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.PercentageGrossMargin.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.PercentageGrossMargin.calc;		
	
var profitDialMeta =  {
	dialChartDefinition : {
		width: 175,
		height: 175,
		chartType: "DialChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: "Gross Profit Margin",
		catalog: cdfCatalog,
		colors: KPIConstants.detail.PercentageGrossMargin.colors,
		backgroundColor: cdfBackgroundWhite,
		is3d: "true",
		intervals: KPIConstants.target.PercentageGrossMargin.interval,
		urlTemplate: "javascript:openOrdrWindow('{seriesCategory}')",
		query:function(){
			return queryProfitDial();
		},
	}
};

var profitDialC = 
	{
		name: "profitDialC",
		type: "dialComponent",
		chartDefinition: profitDialMeta.dialChartDefinition,
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion", 
  			"Dashboards.storage.productCode"], 
  		parameters: [],
		htmlObject: "profitDialC",
		executeAtStart: true
	};

var o2dDesc =  "<b>" + KPIConstants.detail.DaysOrdertoDelivery.title + "</b><br>" +
				"Current Target:  " + KPIConstants.target.DaysOrdertoDelivery.midpoint + "<br>" +
				"Industry:  " + KPIConstants.industry.title + "<br>" + 
				"Calculation:  " + KPIConstants.detail.DaysOrdertoDelivery.calc;		

var o2dDialMeta =  {
	dialChartDefinition : {
		width: 175,
		height: 175,
		chartType: "DialChart",
		queryType: 'mdx',
		jndi: cdfJNDI,
		title: "Order to Delivery Days",
		catalog: cdfCatalog,
		colors: KPIConstants.detail.DaysOrdertoDelivery.colors,
		backgroundColor: cdfBackgroundWhite,
		is3d: "true",
		intervals: KPIConstants.target.DaysOrdertoDelivery.interval,
		query: function(){
			return queryO2DDial();
		},
	}
};

var o2dDialC = 
	{
		name: "o2dDialC",
		type: "dialComponent",
		chartDefinition: o2dDialMeta.dialChartDefinition,
  		listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass",
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion", 
  			"Dashboards.storage.productCode"], 
  		parameters: [],
		htmlObject: "o2dDialC",
		executeAtStart: true
	};

var topCustomersL = new topList12Periods(cubeO,
								kpiO, 
								"Customer",
								timedimO,
								"[last12]",
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
									"yearPeriod"],
								"SOPivotsorderForDim",  
								"topCustomersL",
								10);
								
var topProfitL = new topList12Periods(cubeD,
								kpiD, 
								"Customer",
								timedimD,
								"[last12]",
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
									"yearPeriod"],
								"SOPivotsdeliveryForDim",  
								"topProfitL",
								10);
								
var topUnfulfilledL = new topList12Periods(cubeF,
								kpiF, 
								"Customer",
								timedimF,
								"[period]",
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
									"yearPeriod"],
								"SOPivotsoutOrdersForDim",  
								"topUnfulfilledL",
								10);

var components = 
[
	yearPeriodSelector,
	custSelector,
	prodClassSelector,
	prodCategorySelector,
	prodCodeSelector,
	accountRepSelector,
	shipRegionSelector,
	ordersC,
	deliveriesC,
	unfulfilledC,
	orderChangeDialC,
	profitDialC,
	o2dDialC,
	topCustomersL.widget,
	topProfitL.widget,
	topUnfulfilledL.widget,
	extractDateXAction,
	dashTitle
];

loadTree();
loadDash();
document.close();

