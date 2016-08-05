$(function() {

	// call the function as many times as you need to load charts. Passing the 3 necessary fields that we created in test_functions.js
    buildChartSmall("#analytics1", "pie", "/training/data/analytics1.json");
    buildChartSmall("#analytics2", "pie", "/training/data/analytics2.json");
    buildChartSmall("#analytics3", "pie", "/training/data/analytics3.json");
    buildChartSmall("#analytics4", "area-spline", "/training/data/areaChartSample.json");

    buildChartCategories("#barchart", "bar", "/training/data/barChartCats.json");


    buildChartSmall("#chart5", "area-spline", "/training/data/areaChartSample.json");


    buildChartYear("#datedchart");



    buildChartSmallFrontDoor("#frontdoor2");
    buildChartSmallEngineering("#engineering2");
    buildChartSmallOther("#other2");
    buildChartSmallBV("#bv2");

    buildChartCases("#casesPerMonth", "line", "/training/data/casesPerMonth.json")
    buildChartUniqueUsers("#uniqueUsers")

});
