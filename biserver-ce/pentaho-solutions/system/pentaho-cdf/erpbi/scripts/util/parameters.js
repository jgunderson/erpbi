//
// Set from URL parameters or if null, set default.  Then save Dashboard storage.
//

if (urlParm("accountRep") != "" && urlParm("accountRep") != null)
	{Dashboards.storage.accountRep = urlParm("accountRep");}
	else {if(Dashboards.storage.accountRep == "" || Dashboards.storage.accountRep == null )
		 {Dashboards.storage.accountRep = "All Account Reps by Code";}}

if (urlParm("customer") != "" && urlParm("customer") != null)
	{Dashboards.storage.customer = urlParm("customer");}
	else {if(Dashboards.storage.customer == "" || Dashboards.storage.customer == null )
		 {Dashboards.storage.customer = "All Customers by Code";}}

if (urlParm("productClass") != "" && urlParm("productClass") != null)
	{Dashboards.storage.productClass = urlParm("productClass");}
	else {if(Dashboards.storage.productClass == "" || Dashboards.storage.productClass == null )
		 {Dashboards.storage.productClass = "All Products by Class";}}

if (urlParm("productCode") != "" && urlParm("productCode") != null)
	{Dashboards.storage.productCode = urlParm("productCode");}
	else {if(Dashboards.storage.productCode == "" || Dashboards.storage.productCode == null )
		 {Dashboards.storage.productCode = "All Products by Code";}}
		 
if (urlParm("productType") != "" && urlParm("productType") != null)
	{Dashboards.storage.productType = urlParm("productType");}
	else {if(Dashboards.storage.productType == "" || Dashboards.storage.productType == null )
		 {Dashboards.storage.productType = "All Products by Type";}}
		 
if (urlParm("productCategory") != "" && urlParm("productCategory") != null)
	{Dashboards.storage.productCategory = urlParm("productCategory");}
	else {if(Dashboards.storage.productCategory == "" || Dashboards.storage.productCategory == null )
		 {Dashboards.storage.productCategory = "All Products by Category";}}
		 
if (urlParm("company") != "" && urlParm("company") != null)
	{Dashboards.storage.company = urlParm("company");}
	else {if(Dashboards.storage.company == "" || Dashboards.storage.company == null )
		 {Dashboards.storage.company = "All Companies";}}
		 
if (urlParm("profitCenter") != "" && urlParm("profitCenter") != null)
	{Dashboards.storage.profitCenter = urlParm("profitCenter");}
	else {if(Dashboards.storage.profitCenter == "" || Dashboards.storage.profitCenter == null )
		 {Dashboards.storage.profitCenter = "All Profit Centers";}}

if (urlParm("cityType") != "" && urlParm("cityType") != null)
	{Dashboards.storage.cityType = urlParm("cityType");}
	else {if(Dashboards.storage.cityType == "" || Dashboards.storage.cityType == null )
		 {Dashboards.storage.cityType = "Bill City";}}
		 
if (urlParm("dimOne") != "" && urlParm("dimOne") != null)
	{Dashboards.storage.dimOne = urlParm("dimOne");}
	else {if(Dashboards.storage.dimOne == "" || Dashboards.storage.dimOne == null )
		 {Dashboards.storage.dimOne = "Account Rep";}}

if (urlParm("dimTwo") != "" && urlParm("dimTwo") != null)
	{Dashboards.storage.dimTwo = urlParm("dimTwo");}
	else {if(Dashboards.storage.dimTwo == "" || Dashboards.storage.dimTwo == null )
		 {Dashboards.storage.dimTwo = "Product.Product by Class";}}

if (urlParm("yearPeriod") != "" && urlParm("yearPeriod") != null)
	{Dashboards.storage.yearPeriod = urlParm("yearPeriod");}
	else {if(Dashboards.storage.yearPeriod == "" || Dashboards.storage.yearPeriod == null )
		 {Dashboards.storage.yearPeriod = "2010, 12";}}
		 
if (urlParm("shipRegion") != "" && urlParm("shipRegion") != null)
	{Dashboards.storage.shipRegion = urlParm("shipRegion");}
	else {if(Dashboards.storage.shipRegion == "" || Dashboards.storage.shipRegion == null )
		 {Dashboards.storage.shipRegion = "All Ship Regions";}}
		 
if (urlParm("billRegion") != "" && urlParm("billRegion") != null)
	{Dashboards.storage.billRegion = urlParm("billRegion");}
	else {if(Dashboards.storage.billRegion == "" || Dashboards.storage.billRegion == null )
		 {Dashboards.storage.billRegion = "All Bill Regions";}}
Dashboards.saveStorage();	
	
	