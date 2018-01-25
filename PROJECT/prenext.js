	var c=["bal.html","bhagat.html","chandra.html","lal.html","MAHATMA GANDHI.html","PANDIT.html","RANI.html","SUBHASH.html","TATYA.html","VALLABH.html","maulana.html","naidu.html","indira.html","mangal.html","udham.html"];
	var count=-1;
	var link;
	var l;
	var nol="next";
	var nop="previous";
	function next()
	{		
		count=count+1;
		link=c[count];			
		document.getElementById("link2").href=link;		
	}
	function previous()
	{
		count=count-1;
	        link=c[count];
		document.getElementById("link1").href=link;
	}