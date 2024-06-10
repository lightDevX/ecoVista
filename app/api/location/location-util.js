const data = [

    {
        "location": "Brazil",
        "latitude": -14.2350,
        "longitude": -51.9253
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
        "location": "Pakistan",
        "latitude": 30.3753,
        "longitude": 69.3451
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
    }
];


function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const found = data.find(
        (item) => item.location.toLowerCase() === location.toLowerCase()
    );

    return found || {};
}

export { getLocationByName, getLocations };

