function ymd() 
{
theDate = new Date();
theMonth = theDate.getMonth()+ 1;
return theDate.getFullYear() + '-' + theMonth + '-' + theDate.getDate();
}
