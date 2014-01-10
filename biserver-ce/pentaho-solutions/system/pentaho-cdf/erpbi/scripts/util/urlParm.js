function urlParm( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
  	{
  		results[1] = unescape(results[1]);
		// replace all "//g" of escaped +
		results[1] = results[1].replace(/\+/g, " ");
    	return results[1];
    }
}
