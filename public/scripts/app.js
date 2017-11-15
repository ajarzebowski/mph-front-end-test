// Your javascript goes here

var propertiesDiv = document.getElementById('properties-list');

$.ajax({
    type: "GET",
    url: "http://localhost:3000/api/properties",
    success: function(data){
        for (var i = 0; i < data.length; i++) {
            // Create each slide
            var carouselItemsHTML = '';
            for (var j = 0; j < data[i].property_images.length; j++) {
                var active = '';
                if (j === 0) {
                    active = 'active';
                }
                carouselItemsHTML += '<div class="item '+ active +'">';
                carouselItemsHTML +=    '<img src="'+ data[i].property_images[j].url +'" alt="'+ data[i].property_images[j].name +'">'
                carouselItemsHTML += '</div>'
            }

            // Create each extra
            var extraItemsHTML = '';
            for (var j = 0; j < data[i].property_extras.length; j++) {
                extraItemsHTML += '<p><span class="glyphicon glyphicon-ok"></span>'+ data[i].property_extras[j].name +'</p>';
            }

            // Create stars
            var starsHTML = '';
            for (var j = 0; j < data[i].property_stars; j++) {
                starsHTML += '<span class="glyphicon glyphicon-star"></span>';
            }

            var html = '';
            html += '<div class="col-xs-12 col-sm-6 col-md-4">';
            html += '<div class="property-box">';
            html +=     '<div id="carousel-'+ i +'" class="carousel slide" data-ride="carousel">';
            html +=         '<div class="carousel-inner" role="listbox">';
            html +=             carouselItemsHTML
            html +=         '</div>';
            html +=         '<a class="left carousel-control" href="#carousel-'+ i +'" role="button" data-slide="prev">';
            html +=             '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>';
            html +=             '<span class="sr-only">Previous</span>';
            html +=         '</a>';
            html +=         '<a class="right carousel-control" href="#carousel-'+ i +'" role="button" data-slide="next">';
            html +=             '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>';
            html +=             '<span class="sr-only">Next</span>';
            html +=         '</a>';
            html +=     '</div>';
            html +=     '<div class="bottom">';
            html +=         '<h4 class="text-center property-name">'+ data[i].property_name +'</h4>';
            html +=         '<p>'+ starsHTML +'</p>'
            html +=         '<div class="row">';
            html +=             '<div class="col-xs-6">';
            html +=                 '<p>'+ data[i].property_address +'</p>';
            html +=                 '<p>Bedrooms: '+ data[i].property_bedrooms +'</p>';
            html +=                 '<p>Sleeps: '+ data[i].property_sleeps +'</p>';
            html +=             '</div>';
            html +=             '<div class="col-xs-6">';
            html +=                 extraItemsHTML;
            html +=             '</div>';
            html +=         '</div>';
            html +=     '</div>';
            html += '</div>';
            html += '</div>';

            propertiesDiv.innerHTML += html;
        }
    }
});