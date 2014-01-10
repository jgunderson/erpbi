yearPeriodSelector = 
{
  name: "yearPeriodSelector",
  type: "select",
  solution: "erpbi-reports",
  path: "SODashboards",
  action: "yearPeriodSelect.xaction",
  listeners:[],
  parameters:[],
  parameter:"Dashboards.storage.yearPeriod",
  htmlObject: "yearPeriodSelector",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){},
  postChange: function(){Dashboards.saveStorage();}
}

custSelector = 
{
  name: "custSelector",
  type: "select",
  solution: "erpbi-reports",
  path: "SODashboards",
  action: "custSelect.xaction",
  parameters:[],
  parameter:"Dashboards.storage.customer",
  htmlObject: "custSelector",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){},
  postChange: function(){Dashboards.saveStorage();}

}

prodClassSelector = 
{
  name: "prodClassSelector",
  type: "select",
  solution: "erpbi-reports",
  path: "SODashboards",
  action: "prodClassSelect.xaction",
  parameters:[],
  parameter:"Dashboards.storage.productClass",
  htmlObject: "prodClassSelector",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){},
  postChange: function(){Dashboards.saveStorage();}

}

prodCategorySelector = 
{
  name: "prodCategorySelector",
  type: "select",
  solution: "erpbi-reports",
  path: "SODashboards",
  action: "prodCategorySelect.xaction",
  parameters:[],
  parameter:"Dashboards.storage.productCategory",
  htmlObject: "prodCategorySelector",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){},
  postChange: function(){Dashboards.saveStorage();}
}


prodCodeSelector = 
{
  name: "prodCodeSelector",
  type: "select",
  solution: "erpbi-reports",
  path: "SODashboards",
  action: "prodCodeSelect.xaction",
  parameters:[],
  parameter:"Dashboards.storage.productCode",
  htmlObject: "prodCodeSelector",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){},
  postChange: function(){Dashboards.saveStorage();}
}

accountRepSelector = 
{
  name: "accountRepSelector",
  type: "select",
  solution: "erpbi-reports",
  path: "SODashboards",
  action: "accountRepSelect.xaction",
  parameters:[],
  parameter:"Dashboards.storage.accountRep",
  htmlObject: "accountRepSelector",
  executeAtStart: true,
  preExecution:function(){},
  postExecution:function(){},
  postChange: function(){Dashboards.saveStorage();}
}
