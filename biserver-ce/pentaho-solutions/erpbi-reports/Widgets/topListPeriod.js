/******************************************************************************************************************************  
	Constructor for tableComponent objects to list top 50 members of a dimension by kpi for the period.
		cube 		- Cube for select
		kpi			- kpi to use or null if using Dashboards.storage.kpi
		dimension	- Dimension code and name to be listed
		timedim		- Time dimension	
		filters		- List of dimensions to filter in where clause and to listen for changes in selectors
		listeners	- List of listeners for changes to selectors
		hyperlink	- Choose hyperlink function.  As this is a template in a clickable it has no access to "this" so we must code
					separate functions.  See http://www.quirksmode.org/js/this.html
		htmlID		- htmlID of elemment to render table
		count		- number to show in list
********************************************************************************************************************************/

function topListPeriod(cube, kpi, dimension, timedim, filters, listeners, hyperlink, htmlID, count) {

	//
	//  Separate function must be supplied for each link.
	//
	topListPeriodhyperlinkSOPivotsorderForDim = function(parm){
		window.open("RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=orderForDim.xcdf&template=mantle" + parm );
		};
	topListPeriodhyperlinkSOPivotsdeliveryForDim = function(parm){
		window.open("RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=deliveryForDim.xcdf&template=mantle" + parm );
		};
	topListPeriodhyperlinkSOPivotsoutOrdersForDim = function(parm){
		window.open("RenderXCDF?solution=erpbi-reports&path=%2FSOPivots&action=outOrdersForDim.xcdf&template=mantle" + parm );
		};
	this.urlLink = "";
	if (hyperlink == "SOPivotsorderForDim")
		{ this.urlLink = "javascript: topListPeriodhyperlinkSOPivotsorderForDim(\x22&" + getDimInfo(dimension).URLParm + "=" + "{key}" + "\x22)"; }
	if (hyperlink == "SOPivotsdeliveryForDim")
		{ this.urlLink = "javascript: topListPeriodhyperlinkSOPivotsdeliveryForDim(\x22&" + getDimInfo(dimension).URLParm + "=" + "{key}" + "\x22)"; }
	if (hyperlink == "SOPivotsoutOrdersForDim")
		{ this.urlLink = "javascript: topListPeriodhyperlinkSOPivotsoutOrdersForDim(\x22&" + getDimInfo(dimension).URLParm + "=" + "{key}" + "\x22)"; }


	//
	//  Save where causes in array usign htmlID as the unique ID.  The query : function does not have access to unique
	//  "this" members.  "Year, Period" is not really a dimension so we have to construct the correct time dimension
	//
	var whereClause = Array();
	whereClause[htmlID] = function() {
		var clause = "";
		for ( i = 0; i < filters.length; i++)
			{	if(filters[i] == "Year, Period")
					{clause = clause + ' [' + timedim + '].[' + Dashboards.storage.yearPeriod.slice(0,4) + '].[' + Dashboards.storage.yearPeriod.substr(6) + ']';}
				else
					{clause = clause + getDimInfo(filters[i]).CodeHierAll + ".[" + Dashboards.storage[getDimInfo(filters[i]).URLParm] + "]";}
				if ( i + 1 < filters.length)
					{ clause = clause + ", ";}
			};
		return clause;
		};
	
	
	this.metadata =  { 
	def : {
	    colHeaders: ["Code", "KPI", "Name"],
        colTypes: ['string','numeric', 'string'],
		colFormats: [null,'%.0f', null],
        colWidths: ['40px',null,'200px'],
        tableStyle: 'themeroller',
        displayLength: count,
		queryType: 'mdx',
		jndi: cdfJNDI,
		catalog: cdfCatalog,
		parameterName : "key",
        urlTemplate: this.urlLink,
		query: function(){
			var theKPI = kpi;
			if (theKPI == null)
				{theKPI = Dashboards.storage.kpi;}
			var query =  
					'WITH MEMBER [Measures].[thekpi]  AS [Measures].[' + theKPI + '] '
					+ ' MEMBER [Measures].[Name] AS ' + getDimInfo(dimension).CodeHier + '.CurrentMember.Properties("' + getDimInfo(dimension).NameProp + '")'
					+ ' select NON EMPTY {[Measures].[thekpi], [Measures].[Name]} ON COLUMNS,'
					+ ' NON EMPTY{filter(TopCount(' + getDimInfo(dimension).CodeHier + '.Members, 50, [Measures].[thekpi]),[Measures].[thekpi]>0) } ON ROWS'
					+ ' FROM [' + cube + '] '
					+ ' WHERE '
					+ ' (' + whereClause[htmlID]() + ')';
			return query;
		}
	}
	}
	
	//
	//  Construct list of listeners
	//
	this.listenList = new Array();
	for ( i = 0; i < listeners.length; i++)
	{
		this.listenList.push( "Dashboards.storage." + listeners[i] );
	};

	this.widget =
	{
		name: "table",
		type: "tableComponent",
		chartDefinition: this.metadata.def,
		listeners: this.listenList,
  		htmlObject: htmlID,
		executeAtStart: true
	};
};
