//
// CodeHier can be used only with particular codes - not the All member as it has
// a name property.  Use the CodeHierAll if you want to also use the All member.
//
var DimInfo = {
		"Account Rep" : {
  			CodeHier : "[Account Rep.Account Reps by Code].[Account Rep Code]",
  			CodeHierAll : "[Account Rep.Account Reps by Code]",
  		 	NameHier : "[Account Rep].[Account Rep Name]",
  		 	NameProp : "Account Rep Name",
  		 	KeyProp : "Account Rep Code",
  		 	URLParm : "accountRep"
  		 },
  	 "Company" :	{ 
  			CodeHier : "[Company.Company Code].[Company Code]",
  			CodeHierAll : "[Company.Company Code]",
  			NameHier : "[Company].[Company Name]",
  			NameProp : "Company Name",
  			KeyProp : "Company Code",
  		 	URLParm : "company"
  		},
  	 "Customer"	:	{ 
  			CodeHier : "[Customer.Customer Code].[Customer Code]",
  			CodeHierAll : "[Customer.Customer Code]",
  			NameHier : "[Customer].[Customer Name]",
  			NameProp : "Customer Name",
  			KeyProp : "Customer Code",
  			URLParm : "customer"
  		},
   	 "Product"	:	{ 
  			CodeHier : "[Product.Product Code].[Product Code]",
  			CodeHierAll : "[Product.Product Code]",
  			NameHier : "[Product].[Product]",
  			NameProp : "Product Name",
  			KeyProp : "Product Code",
  			URLParm : "productCode"
  		},
   	 "Product.Product by Category"	: 	{ 
  			CodeHier : "[Product.Product by Category].[Category]",
  			CodeHierAll : "[Product.Product by Category]",
  			NameHier : "[Product.Product by Category].[Category]",
  			NameProp : "Category Name",
  			KeyProp : "Category Name",
  			URLParm : "productCategory"
  			},
   	 "Product.Product by Class"	:	{ 
  			CodeHier : "[Product.Product by Class].[Class]",
  			CodeHierAll : "[Product.Product by Class]",
  			NameHier : "[Product.Product by Class].[Class]",
  			NameProp : "Class Name",
  			KeyProp : "Class Name",
  			URLParm : "productClass"
  			},
   	 "Product.Product by Type"	: { 
  			CodeHier : "[Product.Product by Type].[Type]",
  			CodeHierAll : "[Product.Product by Type]",
  			NameHier : "[Product.Product by Type].[Type]",
  			NameProp : "Type Name",
  			KeyProp : "Type Name",
  			URLParm : "productType"
  			},
   	 "Ship City.Ship Region"	: { 
  			CodeHier : "[Ship City.Ship Region].[Region Code]",
  			CodeHierAll : "[Ship City.Ship Region]",
  			NameHier : "[Ship City.Ship Region]",
  			NameProp : "Region Name",
  			KeyProp : "Region Name",
  			URLParm : "shipRegion"
  			},
   	 "Bill City.Bill Region"	: { 
  			CodeHier : "[Bill City.Bill Region].[Region Code]",
  			CodeHierAll : "[Bill City.Bill Region]",
  			NameHier : "[Bill City.Bill Region]",
  			NameProp : "Region Name",
  			KeyProp : "Region Name",
  			URLParm : "billRegion"
  			}  			
};

function getDimInfo(Dim) {
	return DimInfo[Dim];
};