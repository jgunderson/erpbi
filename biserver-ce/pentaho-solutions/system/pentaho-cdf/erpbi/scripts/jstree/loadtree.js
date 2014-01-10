	function loadTree() 
	{
          /*
	    *#######################
	    *     West Tree
	    *#######################
	    */
        conf = {
            ui: {
                theme_name: "classic"
            },
            rules: {
                draggable: "none",
                drag_copy: false
            },
            callback: 
            {        
            	onselect: function(NODE,TREEOBJ)
            	//  Callback for opening a new tab for a tree item href 
            	{ 
            		//alert(NODE.id); 
            		var href = $(NODE).children("a:eq(0)").attr("href"); 
            		window.open(href);            		
            	 	return true; 
            	}
            }
        };
        tree1 = $.tree_create();
        tree1.init($("#explorer"), $.extend({}, conf));
	}
