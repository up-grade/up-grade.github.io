$(document).ready(function() {
	// Custom JS
console.log("Work))");

$('selector').selectbox();



$('.btn_yellow').magnificPopup();


$('.popap_c').click(function(){
$('.popap_c').magnificPopup();
return false;
})

$('.popap_f').click(function(){
$('.popap_f').magnificPopup();
return false;
})

$('.slider-re').owlCarousel({
		items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: "true",
    loop:true,
    smartSpeed:450,
    autoplayTimeout: 5000,
		navText : ""
});

$("#navigation a").mouseenter(function () {
	$("#home").removeClass('active')
})


$("#ToTop").click(function(){

$("html,body").animate({scrollTop:0},1500)
})

$("#ToTop").click(function(){
$('#home').addClass('active');
})


function mixItUp(){
	//mixItUp
$('#works_category').mixItUp();

setTimeout(function() {
var maxHeight = 0;
var contHeight = 0;

    $('.works__item_img').each(function(){
  if(maxHeight<$(this).height()){
     maxHeight=$(this).height()
     }
})

$('.works__item_titel').each(function(){
  if(contHeight<$(this).height()){
     contHeight=$(this).height()
     }
})
console.log(maxHeight);
$('.works__item').height(maxHeight+contHeight+180);
}, 1000)

};
mixItUp();


//Плавний скрол

$("#navigation, #btn").on("click","a", function (event) {

		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});

});




  // Definition of caller element
  var getTriggerElement = function(el) {
    var isCollapse = el.getAttribute('data-collapse');
    if (isCollapse !== null) {
      return el;
    } else {
      var isParentCollapse = el.parentNode.getAttribute('data-collapse');
      return (isParentCollapse !== null) ? el.parentNode : undefined;
    }
  };

  // A handler for click on toggle button
  var collapseClickHandler = function(event) {
    var triggerEl = getTriggerElement(event.target);
    // If trigger element does not exist
    if (triggerEl === undefined) {
      event.preventDefault();
      return false;
    }

    // If the target element exists
    var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
    if (targetEl) {
      triggerEl.classList.toggle('-active');
      targetEl.classList.toggle('-on');
    }
  };

  // Delegated event
  document.addEventListener('click', collapseClickHandler, false);





// Google Map Style

//Кординати
var latitude = 50.418672,
		longitude = 30.492802,
		map_zoom = 17;

	//Адрес до іконки з маркером
	var marker_url = '../img/icon-location.png';

	var	main_color = '#04a2e8', //основной 
		saturation_value= -1, //насиченість
		brightness_value= 1; //Яскравісить


	//Стилі для элеменів на карті
	var style= [ 
		{
			//Насиченість позначень на карті
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},  
	    {	//Приховуємо позначення станцій метро, вокзалів, аеропортів та інших транспортних вузлів на карті
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//Приховуємо позначення доріг на карті
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{ 	
			//Приховуємо позначення локальних доріг
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 
			//Приховуємо позначення магістралі на мапі
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{
			//Приховуємо дорожні позначення на карті
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 
		//Стилі для різних елементів на карті
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}
	];

	//Створення точки на карті
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style
    }
    //ініціалізація карти
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	//Додаємо свій маркер місцезнаходження на карту (свою іконку)
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, longitude),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});



