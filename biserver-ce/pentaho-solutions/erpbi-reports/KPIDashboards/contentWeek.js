var dashTitle =  
{
	name: "dashTitle",
	type: "textComponent",
  	listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass", 
  			"Dashboards.storage.productCode", 
  			"Dashboards.storage.kpi"
  			],
	expression: function(){return "<i>" + Dashboards.storage.kpi + kpiTitle + Dashboards.storage.yearPeriod + "</i><br>" +
								"Customer: <i>" + Dashboards.storage.customer + "</i>,  Product Class: <i>" + Dashboards.storage.productClass + "</i>,  Product Code: <i>" + Dashboards.storage.productCode + "</i>";
						  },
	htmlObject: "dashTitle",
	executeAtStart: true
};

var KPILineC = 
{
  name: "KPILineC",
  type: "xaction",
  solution: "erpbi-reports",
  path: "KPIDashboards",
  action: "KPILineChartWeek.xaction",
  listeners:["Dashboards.storage.yearPeriod", 
  			"Dashboards.storage.customer", 
  			"Dashboards.storage.productClass", 
  			"Dashboards.storage.productCode", 
  			"Dashboards.storage.productCategory",
  			"Dashboards.storage.accountRep",
  			"Dashboards.storage.shipRegion", 
  			"Dashboards.storage.kpi"
  			],
  parameters: [
  			["YEAR", "Dashboards.storage.yearPeriod.slice(0,4)"],
  			["PERIOD","Dashboards.storage.yearPeriod.substr(6)"],
  			["CUSTOMER","Dashboards.storage.customer"], 
  			["PRODUCTCLASS","Dashboards.storage.productClass"],
    		["PRODUCTCODE","Dashboards.storage.productCode"],
    		["PRODUCTCATEGORY","Dashboards.storage.productCategory"],
    		["ACCOUNTREP","Dashboards.storage.accountRep"],
    		["SHIPREGION","Dashboards.storage.shipRegion"],
    		["KPI","Dashboards.storage.kpi"],
    		["CUBE", "cube"],
    		["TIMEDIM", "timedim"]
   			],
  htmlObject: "KPILineC",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){}
}




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
	extractDateXAction,
	dashTitle
];

Dashboards.init(components);
loadTree();
loadDash();
document.close();


