(function($){
    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    

})(jQuery);

// Google map
function initMap() {
    var u_garden = {lat: 44.971542, lng: -93.219650};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: u_garden,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: u_garden,
        map: map
    });
};