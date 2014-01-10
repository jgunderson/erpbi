var KPIindustries =  {
	manufacturing : {
		title: "Manufacturing",
		PercentageGrossMargin : {
				interval : [10 , 35, 100],
				midpoint : 35
				},
		PercentageOrderChange : {
				interval : [100 , 106, 120],
				midpoint : 106
				},
		DaysOrdertoDelivery : {
				interval : [0,30,90],
				midpoint : 30
				}
		},
	tradingWholesale : {
		title: "Wholesale Trade",
		PercentageGrossMargin : {
				interval : [10 , 29, 100],
				midpoint : 29
				},
		PercentageOrderChange : {
				interval : [100 , 106, 120],
				midpoint : 106
				},
		DaysOrdertoDelivery : {
				interval : [0,30,90],
				midpoint : 30
				}
		}
};

var KPItarget = {
		PercentageGrossMargin : {
				interval : [10 , 35, 100],
				midpoint : 35
				},
		PercentageOrderChange : {
				interval : [100 , 106, 120],
				midpoint : 106
				},
		DaysOrdertoDelivery : {
				interval : [0,30,90],
				midpoint : 30
				}
};

var KPIdetail = {
		PercentageGrossMargin : {
				title : "Percentage, Gross Margin",
				calc : "Gross Margin  =  Gross Profit / Gross Deliveries * 100",
				colors: ["#F16C3A", "#FFFF00", "#B0D837"]
				},
		PercentageOrderChange : {
				title : "Percentage, Order Change",
				calc : "Order Change =  Order Gross / Order Gross (parallel period) * 100",
				colors: ["#F16C3A", "#FFFF00", "#B0D837"]
				},
		DaysOrdertoDelivery : {
				title : "Days, Order to Delivery",
				calc : "O2D = Delivery Date (or selected Date) - Order Date",
				colors: ["#B0D837","#FFFF00","#F16C3A"],
				}

};	
var KPIConstants = {};
KPIConstants.industry = KPIindustries.manufacturing;
KPIConstants.target = KPItarget;
KPIConstants.detail = KPIdetail;