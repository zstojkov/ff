	$(function() {
	
		var yallery_switch = 1;		
		var yallery_index = 0;
		var yallery_length = $(".yallery").length;

		yallery_create();
		
		function yallery_create() {
			$('<div></div>').appendTo('body').attr('id', 'yallery');
			$('<div></div>').appendTo('#yallery').attr('id', 'yallery_area');
		
			$('<div></div>').appendTo('#yallery_area').attr({'id':'yallery_center1','class':'yallery_center'});
			$('<div></div>').appendTo('#yallery_area').attr({'id':'yallery_center2','class':'yallery_center'});
			
			$('<button></button>').appendTo('#yallery_area').attr('id', 'yallery_next');
			$('<button></button>').appendTo('#yallery_area').attr('id', 'yallery_prev');

			var t,r,c;
			t = $('<table></table>').appendTo('#yallery_center1').attr('class', 'yallery_content');
			r = $('<tr></tr>').appendTo(t);
			c = $('<td></td>').appendTo(r);
			$('<img></img>').appendTo(c).attr({'id':'yallery_image1','class':'yallery_image'});
			r = $('<tr></tr>').appendTo(t);
			c = $('<td></td>').appendTo(r);
			t = $('<table></table>').appendTo(c).attr('class', 'yallery_footer');
			r = $('<tr></tr>').appendTo(t);
			c = $('<td></td>').appendTo(r).attr({'id':'yallery_description1','class':'yallery_description'});
			c = $('<td></td>').appendTo(r);
			$('<button></button>').appendTo(c).attr('class', 'yallery_exit');

			t = $('<table></table>').appendTo('#yallery_center2').attr('class', 'yallery_content');
			r = $('<tr></tr>').appendTo(t);
			c = $('<td></td>').appendTo(r);
			$('<img></img>').appendTo(c).attr({'id':'yallery_image2','class':'yallery_image'});
			r = $('<tr></tr>').appendTo(t);
			c = $('<td></td>').appendTo(r);
			t = $('<table></table>').appendTo(c).attr('class', 'yallery_footer');
			r = $('<tr></tr>').appendTo(t);
			c = $('<td></td>').appendTo(r).attr({'id':'yallery_description2','class':'yallery_description'});
			c = $('<td></td>').appendTo(r);
			$('<button></button>').appendTo(c).attr('class', 'yallery_exit');
		}		
		$("#yallery_show").click(function() {$("#yallery").fadeIn(1000);	});

		$("#yallery_next").click(function() {yallery_next();});
		$("#yallery_prev").click(function() {yallery_prev();});
		$(".yallery_exit").click(function() { yallery_close();});

		
		$(".yallery img").click(function() { 
			var href = $(this).parent().attr("href");
			var i = $(".yallery").index($(this).parent());
			yallery_open(i);
			return false;
		});
		
		function yallery_next() {
			var i = yallery_index+1;
			if (i>=yallery_length)
				i=0;
			yallery_show(i);
		}
		
		function yallery_prev() {
			var i = yallery_index-1;
			if (i<0)
				i=yallery_length-1;
			yallery_show(i);
		}
		
		function yallery_show(i) {
			yallery_index=i;
			yallery_switch = -yallery_switch;
			var h = $(".yallery");
			var hr = $(".yallery").get(yallery_index);
			var href = hr.href;
			var title = hr.title;
			var yallery_description = "";
			if (title!=null)
				yallery_description=title+"<br>";
			yallery_description+=yallery_index+"/"+yallery_length;
			if (yallery_switch > 0) {
				$("#yallery_image1").attr('src',href); 
				$("#yallery_description1").html(yallery_description); 
				$("#yallery_center2").fadeOut(1000);
				$("#yallery_center1").fadeIn(1000);

			} else {
				$("#yallery_image2").attr('src',href); 
				$("#yallery_description2").html(yallery_description); 
				$("#yallery_center1").fadeOut(1000);
				$("#yallery_center2").fadeIn(1000);
			}
		}

		function yallery_open(i) {
			yallery_show(i);
			$("#yallery").fadeIn(1000);
			$(document).keyup(function(e) {
				if (e.keyCode == 27) { yallery_close(); }
			});
		}
		function yallery_close() {
			$("#yallery").fadeOut(1000);
		}
	});
