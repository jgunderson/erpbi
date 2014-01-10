var KPIindustries =  {
	manufacturing : {
		title: "Manufacturing",
		PercentageGrossMargin : {
				interval : [20, 35, 100],
				midpoint : 35
				},
		PercentageNetMargin : {
				interval : [3,5,50],
				midpoint : 5
				},
		DaysSalesOutstanding : {
				interval : [35,41,90],
				midpoint : 41
				},
		DaysPayableOutstanding : {
				interval : [30,34,90],
				midpoint : 34
				},
		DaysInInventory : {
				interval : [40,49,90],
				midpoint : 49
				},
		DaysCashConversionCycle : {
				interval : [50,56,90],
				midpoint : 30
				},
		RatioDebtToEquity : {
				interval : [1.5,2.2,5],
				midpoint : 2.2
				},
		RatioQuick : {
				interval : [1,1.4,2],
				midpoint : 1.4
				},
		RatioReturnOnAssets : {
				interval : [4,8,50],
				midpoint : 8
				}
		},
	tradingWholesale : {
		title: "Wholesale Trade",
		PercentageGrossMargin : {
				interval : [20, 29, 100],
				midpoint : 29
				},
		PercentageNetMargin : {
				interval : [3,3.4,50],
				midpoint : 3.4
				},
		DaysSalesOutstanding : {
				interval : [35,41,90],
				midpoint : 41
				},
		DaysPayableOutstanding : {
				interval : [30,34,90],
				midpoint : 34
				},
		DaysInInventory : {
				interval : [40,51,90],
				midpoint : 51
				},
		DaysCashConversionCycle : {
				interval : [50,52,90],
				midpoint : 52
				},
		RatioDebtToEquity : {
				interval : [1.5,2.6,5],
				midpoint : 2.6
				},
		RatioQuick : {
				interval : [1,1.2,2],
				midpoint : 1.2
				},
		RatioReturnOnAssets : {
				interval : [4,7.6,50],
				midpoint : 7.6
				}
		}
};

var KPItarget = {
		PercentageGrossMargin : {
				interval : [20, 35, 100],
				midpoint : 35
				},
		PercentageNetMargin : {
				interval : [3,5,50],
				midpoint : 5
				},
		DaysSalesOutstanding : {
				interval : [35,41,90],
				midpoint : 41
				},
		DaysPayableOutstanding : {
				interval : [30,34,90],
				midpoint : 34
				},
		DaysInInventory : {
				interval : [40,49,90],
				midpoint : 49
				},
		DaysCashConversionCycle : {
				interval : [50,56,90],
				midpoint : 30
				},
		RatioDebtToEquity : {
				interval : [1.5,2.2,5],
				midpoint : 2.2
				},
		RatioQuick : {
				interval : [1,1.4,2],
				midpoint : 1.4
				},
		RatioReturnOnAssets : {
				interval : [4,8,50],
				midpoint : 8
				}
};

var KPIdetail = {
		PercentageGrossMargin : {
				title : "Percentage, Gross Margin",
				calc : "Gross Margin  =  Gross Income / Revenue * 100",
				colors: ["#F16C3A", "#FFFF00", "#B0D837"]
				},
		PercentageNetMargin : {
				title : "Percentage, Net Margin",
				calc : "Net Margin  =  Net Income / Revenue * 100",
				colors: ["#F16C3A", "#FFFF00", "#B0D837"]
				},
		DaysSalesOutstanding : {
				title : "Days, Sales Outstanding",
				calc : "DSO = Receivables / Revenue * (30 or 360 days)",
				colors: ["#B0D837","#FFFF00","#F16C3A"],
				},
		DaysPayableOutstanding : {
				title : "Days, Payable Outstanding",
				calc : "DPO = Accounts Payable / COGS * (30 or 360 days)",
				colors: ["#F16C3A", "#FFFF00", "#B0D837"]				
				},
		DaysInInventory : {
				title : "Days, In Inventory",
				calc : "DII = Inventory / COGS * (30 or 360 days)",
				colors: ["#B0D837","#FFFF00","#F16C3A"],
				},
		DaysCashConversionCycle : {
				title : "Days, Cash Conversion Cycle",
				calc : "CCC = DII + DSO - DPO",
				colors: ["#B0D837","#FFFF00","#F16C3A"],
				},
		RatioDebtToEquity : {
				title : "Ratio, Debt to Equity",
				calc : "Debt to Equity Ratio = Liabilities / Owner's Equity",
				colors: ["#B0D837","#FFFF00","#F16C3A"],
				},
		RatioQuick : {
				title : "Ratio, Quick",
				calc : "Quick Ratio = (Current Assets - Inventory) / Current Liability",
				colors: ["#F16C3A", "#FFFF00", "#B0D837"]
				},
		RatioReturnOnAssets : {
				title : "Ratio, Return on Assets",
				calc : "Return on Assets Ratio = Net Income / Assets",
				colors: ["#F16C3A", "#FFFF00", "#B0D837"]
				}			
};	
var KPIConstants = {};
KPIConstants.industry = KPIindustries.manufacturing;
KPIConstants.target = KPItarget;
KPIConstants.detail = KPIdetail;