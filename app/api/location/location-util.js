const data = [
    {
        "location": "United States",
        "latitude": 37.0902,
        "longitude": -95.7129
    },
    {
        "location": "Canada",
        "latitude": 56.1304,
        "longitude": -106.3468
    },
    {
        "location": "Mexico",
        "latitude": 23.6345,
        "longitude": -102.5528
    },
    {
        "location": "Brazil",
        "latitude": -14.2350,
        "longitude": -51.9253
    },
    {
        "location": "Argentina",
        "latitude": -38.4161,
        "longitude": -63.6167
    },
    {
        "location": "United Kingdom",
        "latitude": 55.3781,
        "longitude": -3.4360
    },
    {
        "location": "France",
        "latitude": 46.6034,
        "longitude": 1.8883
    },
    {
        "location": "Germany",
        "latitude": 51.1657,
        "longitude": 10.4515
    },
    {
        "location": "Italy",
        "latitude": 41.8719,
        "longitude": 12.5674
    },
    {
        "location": "Spain",
        "latitude": 40.4637,
        "longitude": -3.7492
    },
    {
        "location": "Russia",
        "latitude": 61.5240,
        "longitude": 105.3188
    },
    {
        "location": "China",
        "latitude": 35.8617,
        "longitude": 104.1954
    },
    {
        "location": "India",
        "latitude": 20.5937,
        "longitude": 78.9629
    },
    {
        "location": "Japan",
        "latitude": 36.2048,
        "longitude": 138.2529
    },
    {
        "location": "South Korea",
        "latitude": 35.9078,
        "longitude": 127.7669
    },
    {
        "location": "Australia",
        "latitude": -25.2744,
        "longitude": 133.7751
    },
    {
        "location": "New Zealand",
        "latitude": -40.9006,
        "longitude": 174.8860
    },
    {
        "location": "South Africa",
        "latitude": -30.5595,
        "longitude": 22.9375
    },
    {
        "location": "Nigeria",
        "latitude": 9.0820,
        "longitude": 8.6753
    },
    {
        "location": "Egypt",
        "latitude": 26.8206,
        "longitude": 30.8025
    },
    {
        "location": "Turkey",
        "latitude": 38.9637,
        "longitude": 35.2433
    },
    {
        "location": "Saudi Arabia",
        "latitude": 23.8859,
        "longitude": 45.0792
    },
    {
        "location": "United Arab Emirates",
        "latitude": 23.4241,
        "longitude": 53.8478
    },
    {
        "location": "Israel",
        "latitude": 31.0461,
        "longitude": 34.8516
    },
    {
        "location": "Iran",
        "latitude": 32.4279,
        "longitude": 53.6880
    },
    {
        "location": "Pakistan",
        "latitude": 30.3753,
        "longitude": 69.3451
    },
    {
        "location": "Indonesia",
        "latitude": -0.7893,
        "longitude": 113.9213
    },
    {
        "location": "Vietnam",
        "latitude": 14.0583,
        "longitude": 108.2772
    },
    {
        "location": "Thailand",
        "latitude": 15.8700,
        "longitude": 100.9925
    },
    {
        "location": "Malaysia",
        "latitude": 4.2105,
        "longitude": 101.9758
    },
    {
        "location": "Philippines",
        "latitude": 12.8797,
        "longitude": 121.7740
    },
    {
        "location": "Singapore",
        "latitude": 1.3521,
        "longitude": 103.8198
    },
    {
        "location": "Bangladesh",
        "latitude": 23.6850,
        "longitude": 90.3563
    },
    {
        "location": "Sri Lanka",
        "latitude": 7.8731,
        "longitude": 80.7718
    },
    {
        "location": "Nepal",
        "latitude": 28.3949,
        "longitude": 84.1240
    },
    {
        "location": "Afghanistan",
        "latitude": 33.9391,
        "longitude": 67.7100
    },
    {
        "location": "Kazakhstan",
        "latitude": 48.0196,
        "longitude": 66.9237
    },
    {
        "location": "Ukraine",
        "latitude": 48.3794,
        "longitude": 31.1656
    },
    {
        "location": "Poland",
        "latitude": 51.9194,
        "longitude": 19.1451
    },
    {
        "location": "Greece",
        "latitude": 39.0742,
        "longitude": 21.8243
    }
];


function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const found = data.find((item) => item.location.toLowerCase() === location.toLowerCase());

    return found || {};

    //we do not provide undefined data in the api routes thats why we provide a empty object
}

export { getLocationByName, getLocations };

