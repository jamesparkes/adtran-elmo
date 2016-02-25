$(document).ready(function() {
	
	/**
	 *
	 * Page Specific Functions
	 * These functions are used on every page of the ELMO WebGui
	 *
	 **/
    
    // Highlight Active Tab
    $(function () {
        var url = window.location.pathname; 
        var localhost = "/Users/James/Sites/ELMO/";
        
        $("li").each(function () {
            var templink = localhost.concat($(this).find("a").attr("href"));
        
            if(templink == url) {
                $(this).find("a").css("background-color", "#efa935");
            }
        });
    });
	
	// Extends the Border of Page Content if Taller than Sidebar
	
	if($("#pagecontent").height() > $("#sidebar").height()) {
		$("#pagecontent").css("border-right", "solid 1px #c8c8c8");
		$("#sidebar").css("border-left", "none");
	}
	
	// Sidebar Accordian
    
    $(function() {
    	$("h3.moduletitle").click(function() {
    		$(this).next("div.helpinformation").slideToggle(300);
    		$(this).toggleClass("expanded");
    	});
		
		if($("#pagecontent").height() < $("#sidebar").height()) {
			$("#pagecontent").css("border-right", "none");
			$("#sidebar").css("border-left", "solid 1px #c8c8c8");
		}
    });
    
    // Hides Empty Divisions (empty means no space between opening div and closing div tag)
    
    $("div").filter(function() {
        return this.childNodes.length === 0;
    }).hide();
	
	/**
	 *
	 * Selection Bar/Cell Functions
	 * These functions are used on interactions between cells and the selection bar buttons of the ELMO WebGui
	 *
	 **/
	
	// Check All
	
	$(function () {
 		$("#selectioncheckbox").click(function () {
  			$("#content .cellcheckbox").attr('checked', this.checked);
			$("#content .listrowa, .listrowb").css("background-color", this.checked ? "#ffe4b6" : "");
		});
	});
	
	// Check Cell
	
	$(function() {
		$("tr .cellcheckbox").live("click", function() {
    		$(this).closest("tr").css("background-color", this.checked ? "#ffe4b6" : "");
		});
	});
	
	// Hyperlink Cell
	
	$(function() {
		$(".celltable .port, .porttype, .id, .status, .streams, .flows, .type, .destmacaddress, .srcmacaddress").click(function() {
        	var href = $(this).parent().find("a").attr("href");
        	if(href) {
           		window.location = href;
        	}
	    });
    });
	
	/**
	 *
	 * Special Functions
	 * These functions are used for special effects
	 *
	 **/
	
	// Applies Correct Colored Column Bar to Form Modules during Stream Configuraion/Creation
	
	$(".formmodule").each(function() {
		var modulename = $(this).find("legend").text().toLowerCase().replace(" ", "");
		$(this).css("background-image", "url(css/images/formmodule-bar-" + modulename + ".png)");
	});
	
	// Selection Bar Buttons with class="back" link Return to Previous Page
	
	$('.button').click(function() {
		if($(this).find("a").attr("class") == "back") {
        	history.back();
        	return false;
		}
	});
    
});