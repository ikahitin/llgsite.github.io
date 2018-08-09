$(document).ready(function(){
	$("#showHideContent").click(function () {
		if ($("#navmenu").is(":hidden")) {
			$("#navmenu").slideDown(300);
		} else {
			$("#navmenu").slideUp(300);
		}
		return false;
	});
});

          


var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	map = new google.maps.Map(document.getElementById('map'), {
		// При создании объекта карты необходимо указать его свойства
		// center - определяем точку на которой карта будет центрироваться
		center: {lat: 49.832112, lng: 24.031519},
		// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
		zoom: 16,

		// Добавляем свои стили для отображения карты
		styles: [ { "featureType": "all", "elementType": "labels.text.fill", "stylers": [ { "color": "#477268" } ] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "color": "#f5f5f5" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#659b5e" } ] }, { "featureType": "poi.school", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#dd6f47" }, { "lightness": "0" }, { "weight": "1.00" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#477268" } ] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#ffffff" } ] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [ { "color": "#ff0000" }, { "visibility": "off" } ] } ]
	});

	// Создаем маркер на карте
	var marker = new google.maps.Marker({

		// Определяем позицию маркера
	    position: {lat: 49.832112, lng: 24.031519},

	    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
	    map: map,

	    // Пишем название маркера - появится если навести на него курсор и немного подождать
	    title: 'Львівська Лінгвістична Гімназія',

	    // Укажем свою иконку для маркера
	    icon: 'img/www.png',
});

	// Создаем наполнение для информационного окна
	var contentString = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h3 id="firstHeading" class="firstHeading">Львівська Лінгвістична Гімназія</h3>'+
	      '<div id="bodyContent">'+
	      '<p>Україна, 79005, м. Львів вул. Кирила і Мефодія, 17а' +
	      '<p><b>Email:</b> lingua_gymn@ukr.net'+
	      '</p>'+
	      '</div>'+
	      '</div>';

	// Создаем информационное окно
	var infowindow = new google.maps.InfoWindow({
	   content: contentString,
	   maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

}