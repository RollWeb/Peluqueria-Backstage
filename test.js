	$(document).ready(function() {
 var mapOptions = {
  var myCenter=new google.maps.LatLng(39.57558,2.653644);
									var marker;
									
									function initialize()
									{
									var mapProp = {
									  center:myCenter,
									  zoom:12,
									  mapTypeId:google.maps.MapTypeId.ROADMAP
									  };
									
									var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
									
									var marker=new google.maps.Marker({
									  position:myCenter,
									  animation:google.maps.Animation.DROP
									  });
									
									marker.setMap(map);
									}
									
									google.maps.event.addDomListener(window, 'load', initialize);
									
}

