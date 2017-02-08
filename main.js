$(document).ready(function(){

	$('#moviesNetflix').click(function(e){
			var sourcetype = "netflix";
		doMoviesAjaxCall(sourcetype);
	});
	$('#moviesHulu').click(function(e){
			var sourcetype = "hulu_plus";
		doMoviesAjaxCall(sourcetype);
	});
	$('#moviesAmazon').click(function(e){
			var sourcetype = "amazon_prime";
		doMoviesAjaxCall(sourcetype);
	});
	$('#showsNetflix').click(function(e){
			var sourcetype = "netflix";
		doShowsAjaxCall(sourcetype);
	});
	$('#showsHulu').click(function(e){
			var sourcetype = "hulu_plus";
		doShowsAjaxCall(sourcetype);
	});
	$('#showsAmazon').click(function(e){
			var sourcetype = "amazon_prime";
		doShowsAjaxCall(sourcetype);
	});

	function doMoviesAjaxCall(sourcetype){
		var moviesurl = "http://api-public.guidebox.com/v2/movies?api_key=ead8417de637c91ca06ec44bf2aeefb5a842f359&limit=150&sources=";
		var myurl = moviesurl + sourcetype; 
			console.log(myurl);
			var everything = " ";
			$.ajax({
				url : myurl,
				dataType: "json",
				success : function(parsed_json){
					var items = parsed_json['results'];
					$.each(items, function(i, val){
						var title = val['title'];
						var year = val['release_year'];
						var image = val["poster_240x342"];
					everything += "<li>";
					everything += "<img src='" + image +"' >";
					everything += "<h4>" + title + "</h4>";
					everything += "<h5>" + year + "</h5>";
					everything += "</li>";
					});
			$("#searchResults").html(everything);
				}

			});
	}

	function doShowsAjaxCall(sourcetype){
		var showsurl= "http://api-public.guidebox.com/v2/shows?api_key=ead8417de637c91ca06ec44bf2aeefb5a842f359&limit=150&sources=";
		var myurl = showsurl + sourcetype; 
			console.log(myurl);
			var everything = " ";
			$.ajax({
				url : myurl,
				dataType: "json",
				success : function(parsed_json){
					var items = parsed_json['results'];
					$.each(items, function(i, val){
						var title = val['title'];
						var year = val['release_year'];
						var image = val["artwork_304x171"];
					everything += "<li>";
					everything += "<img src='" + image +"' >";
					everything += "<h4>" + title + "</h4>";
					everything += "<h5>" + year + "</h5>";
					everything += "</li>";
					});
			$("#searchResults").html(everything);
				}

			});
	}
});