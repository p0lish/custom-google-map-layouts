// Color scheme: Midnight
// author: p0lish

black = '#000000';
lightblue = '#7890A8';
blue = '#304878';
darkblue = '#181848';
yellow = '#F0A818';


// General color definitions
geometry = darkblue;
labels_text_stroke = yellow;
labels_text_fill = yellow;

// Poi definitions
poi = yellow;
poi_text_fill = yellow;
poi_park = blue;
poi_park_text_fill = yellow;

// Road definitions
road = lightblue;
road_geometry_stroke = lightblue;
road_text_fill = yellow;
road_highway = lightblue;
road_highway_stroke = lightblue;
road_highway_text_fill = yellow;

// Transit definitions
transit = lightblue;
transit_text_fill = yellow;

//water definitions
water = black;
water_labels_text_fill = yellow;
water_labels_text_stroke = yellow;

style = [
    {elementType: 'geometry', stylers: [{color: geometry}]},
    {elementType: 'labels.text.stroke', stylers: [{color: geometry}]},
    {elementType: 'labels.text.fill', stylers: [{color: labels_text_fill}]},
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: poi}]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: poi}]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: poi_park}]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: poi_park_text_fill}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: road}]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: road_geometry_stroke}]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: road_text_fill}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: road_highway}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: road_highway_stroke}]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: road_highway_text_fill}]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: transit}]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: transit_text_fill}]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: water}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: water_labels_text_fill}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: water_labels_text_stroke}]
    }
];