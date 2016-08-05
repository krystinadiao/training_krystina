$(function() {

	// call the function as many times as you need to load charts. Passing the 3 necessary fields that we created in test_functions.js
    buildChartSmall("#analytics1", "pie", "/data/analytics1.json");
    buildChartSmall("#analytics2", "pie", "/data/analytics2.json");
    buildChartSmall("#analytics3", "pie", "/data/analytics3.json");
    buildChartSmall("#analytics4", "area-spline", "/data/areaChartSample.json");

    buildChartCategories("#barchart", "bar", "/data/barChartCats.json");


    buildChartSmall("#chart5", "area-spline", "/data/areaChartSample.json");


    buildChartYear("#datedchart");



    buildChartSmallFrontDoor("#frontdoor2");
    buildChartSmallEngineering("#engineering2");
    buildChartSmallOther("#other2");
    buildChartSmallBV("#bv2");

    buildChartCases("#casesPerMonth", "line", "/data/casesPerMonth.json")
    buildChartUniqueUsers("#uniqueUsers")

});
