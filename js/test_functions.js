
// This is the function that allows you to dynamically build as many carts as you want using one script.
function buildChart(target, type, dataurl) {
    // target   = the id of the element you want the chart to show in. Ex: #chart
    // type     = has to match one of the chart types in the c3js.org documentation
    // dataurl  = the url of the data feed that powers the chart. right now, its json and a local file. You can call remote apis. You should look to see how you can 'use external data in c3js', hint.

    var dataObject = {
        url: dataurl,
        // what format is the data in. This will change if you load from a remote source.
        mimeType: 'json',
        type: type


    };

    var chart = c3.generate({
        // binds the data to the target specified.
        bindto: target,
        // the data object that defines what is loaded.
        data: dataObject,
        // the details of what you want to the chart to look like. See the reference section for all possible values.
        axis: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        },
        // legend info.
        legend: {
            show: true
        },

        padding: {
    right: 20
},

        color: {
          pattern: ['#26a98d', '#e49b8a', '#4a7c8c' ]
        },

    });

};







function buildChartYear(target, truefalse) {
  var linesArray = [
      {value: '2016-06-21', text: 'Knowledgebase Implemented', position: 'end'},
      {value: '2016-07-10', text: 'Portal update', position: 'end'}
  ];

var chart = c3.generate({
    bindto:target,

    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x','2016-01-14', '2016-02-14', '2016-03-14', '2016-04-14', '2016-05-14', '2016-06-14', '2016-07-14'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Client Services (Front Door)', 49.23, 43.53, 37.89, 44.18, 17.95, 20.24, 13.53],
            ['Engineering', 29.64, 35.19, 31.12, 28.98, 32.05, 29.23, 28.12],
            ['Other Departments', 57.79, 70.02, 39.18, 38.89, 43.55, 43.53, 41.72],
            ['Bazaarvoice Overall', 60.81, 72.97, 47.72, 42.28, 51.39, 45.83, 40.60],
        ],
        type: 'line',
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%b'
                  // %b shows abbreviated month
            }
          },

        y:{
          min: 0
        }


    },



    padding: {
    right: 20
},

    color: {
      pattern: [ '#e49b8a', '#C0CA55','#888B8D', '#26a98d']
    },

    grid: {
    x: {

        lines: linesArray

    }}
  });

  };



  // This is the function that allows you to dynamically build as many carts as you want using one script.
  function buildChartCategories(target, type, dataurl) {
      // target   = the id of the element you want the chart to show in. Ex: #chart
      // type     = has to match one of the chart types in the c3js.org documentation
      // dataurl  = the url of the data feed that powers the chart. right now, its json and a local file. You can call remote apis. You should look to see how you can 'use external data in c3js', hint.

      var chart = c3.generate({
          // binds the data to the target specified.
          bindto: target,
          // the data object that defines what is loaded.
          data: {
              url: dataurl,
              // what format is the data in. This will change if you load from a remote source.
              mimeType: 'json',
              type: type,
              labels:true,
          },


          labels: {

//            format: function (v, id, i, j) { return "Default Format"; },
           format: {
               data1: d3.format('hours'),
//                data1: function (v, id, i, j) { return "Format for data1"; },
           }
       },

          // the details of what you want to the chart to look like. See the reference section for all possible values.
          axis: {
              x: {
                  show: true,
                  type:'category',
                  categories: ['Client Services (Front Door)','Engineering','Other Departments','Bazaarvoice Overall']
              },
              y: {
                  show: true
              }
          },
          // legend info.
          legend: {
              show: true
          },

          padding: {
      right: 20
  },

          color: {
            pattern: ['#26a98d', '#e7bcad', '#4a7c8c' ]
          },

      });

  };





// SMALL GRAPHS!!!


  // This is the function that allows you to dynamically build as many carts as you want using one script.
  function buildChartSmall(target, type, dataurl) {
      // target   = the id of the element you want the chart to show in. Ex: #chart
      // type     = has to match one of the chart types in the c3js.org documentation
      // dataurl  = the url of the data feed that powers the chart. right now, its json and a local file. You can call remote apis. You should look to see how you can 'use external data in c3js', hint.

      var dataObject = {
          url: dataurl,
          // what format is the data in. This will change if you load from a remote source.
          mimeType: 'json',
          type: type
      };

      var chart = c3.generate({
          // binds the data to the target specified.
          bindto: target,
          // the data object that defines what is loaded.
          data: dataObject,
          // the details of what you want to the chart to look like. See the reference section for all possible values.
          axis: {
              x: {
                  show: false
              },
              y: {
                  show: false
              }
          },
          // legend info.
          legend: {
              show: true
          },



            size: {
              height: 150
            },

          color: {
            pattern: ['#26a98d', '#e49b8a', '#4a7c8c' ]
          },

      });

  };


  // This is the function that allows you to dynamically build as many carts as you want using one script.
  function buildChartSmallFrontDoor(target) {
      // target   = the id of the element you want the chart to show in. Ex: #chart
      // type     = has to match one of the chart types in the c3js.org documentation
      // dataurl  = the url of the data feed that powers the chart. right now, its json and a local file. You can call remote apis. You should look to see how you can 'use external data in c3js', hint.



      var chart = c3.generate({
          // binds the data to the target specified.
          bindto: target,
          // the data object that defines what is loaded.
          data: {
              x: 'x',
        //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
              columns: [
                  ['x','2016-01-14', '2016-02-14', '2016-03-14', '2016-04-14', '2016-05-14', '2016-06-14', '2016-07-14'],
        //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                  ['Hours', 49.23, 43.53, 37.89, 44.18, 17.95, 20.24, 13.53],
                  ['Cases', 10,35,98,42,26,19,53]
              ],

              type: 'line',
              types:{
                Cases:'bar',
              },
              axes: {
                Cases:'y2'
              },
          },

          // the details of what you want to the chart to look like. See the reference section for all possible values.
          axis: {
              x: {
                  show: true,
                      type: 'timeseries',
                      tick: {
                          format: '%b'
                            // %b shows abbreviated month
                      }
              },
              y: {
                  show: false
              },
              y2: {
                  show: false

              }
          },


          // legend info.
          legend: {
              show: true
          },



            size: {
              height: 150
            },

          color: {
            pattern: ['#26a98d', '#e7bcad', '#C0CA55','#888B8D' ]
          },

      });

  };


  // This is the function that allows you to dynamically build as many carts as you want using one script.
  function buildChartSmallEngineering(target) {
      // target   = the id of the element you want the chart to show in. Ex: #chart
      // type     = has to match one of the chart types in the c3js.org documentation
      // dataurl  = the url of the data feed that powers the chart. right now, its json and a local file. You can call remote apis. You should look to see how you can 'use external data in c3js', hint.



      var chart = c3.generate({
          // binds the data to the target specified.
          bindto: target,
          // the data object that defines what is loaded.
          data: {
              x: 'x',
        //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
              columns: [
                  ['x','2016-01-14', '2016-02-14', '2016-03-14', '2016-04-14', '2016-05-14', '2016-06-14', '2016-07-14'],
        //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                  ['Hours', 29.64, 35.19, 31.12, 28.98, 32.05, 29.23, 28.12],
                  ['Cases', 17,23,17,4,102,20,9]
              ],

              type: 'line',
              types:{
                Cases:'bar',
              },
              axes: {
                Cases:'y2'
              },
          },

          // the details of what you want to the chart to look like. See the reference section for all possible values.
          axis: {
              x: {
                  show: true,
                      type: 'timeseries',
                      tick: {
                          format: '%b'
                            // %b shows abbreviated month
                      }
              },
              y: {
                  show: false
              },
              y2: {
                  show: false

              }
          },


          // legend info.
          legend: {
              show: true
          },



            size: {
              height: 150
            },

          color: {
            pattern: ['#26a98d', '#e7bcad', '#C0CA55','#888B8D' ]
          },

      });

  };



  // This is the function that allows you to dynamically build as many carts as you want using one script.
  function buildChartSmallOther(target) {
      // target   = the id of the element you want the chart to show in. Ex: #chart
      // type     = has to match one of the chart types in the c3js.org documentation
      // dataurl  = the url of the data feed that powers the chart. right now, its json and a local file. You can call remote apis. You should look to see how you can 'use external data in c3js', hint.



      var chart = c3.generate({
          // binds the data to the target specified.
          bindto: target,
          // the data object that defines what is loaded.
          data: {
              x: 'x',
        //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
              columns: [
                  ['x','2016-01-14', '2016-02-14', '2016-03-14', '2016-04-14', '2016-05-14', '2016-06-14', '2016-07-14'],
        //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                  ['Hours', 57.79, 70.02, 39.18, 38.89, 43.55, 43.53, 41.72],
                  ['Cases', 339,350,310,322,463,472,344]
              ],

              type: 'line',
              types:{
                Cases:'bar',
              },
              axes: {
                Cases:'y2'
              },
          },

          // the details of what you want to the chart to look like. See the reference section for all possible values.
          axis: {
              x: {
                  show: true,
                      type: 'timeseries',
                      tick: {
                          format: '%b'
                            // %b shows abbreviated month
                      }
              },
              y: {
                  show: false
              },
              y2: {
                  show: false

              }
          },


          // legend info.
          legend: {
              show: true
          },



            size: {
              height: 150
            },

          color: {
            pattern: ['#26a98d', '#e7bcad', '#C0CA55','#888B8D' ]
          },

      });

  };



  // This is the function that allows you to dynamically build as many carts as you want using one script.
  function buildChartSmallBV(target) {
      // target   = the id of the element you want the chart to show in. Ex: #chart
      // type     = has to match one of the chart types in the c3js.org documentation
      // dataurl  = the url of the data feed that powers the chart. right now, its json and a local file. You can call remote apis. You should look to see how you can 'use external data in c3js', hint.



      var chart = c3.generate({
          // binds the data to the target specified.
          bindto: target,
          // the data object that defines what is loaded.
          data: {
              x: 'x',
        //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
              columns: [
                  ['x','2016-01-14', '2016-02-14', '2016-03-14', '2016-04-14', '2016-05-14', '2016-06-14', '2016-07-14'],
        //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                  ['Hours', 60.81, 72.97, 47.72, 42.28, 51.39, 45.83, 40.60],
                  ['Cases', 340,368,341,343,466,474,378]
              ],

              type: 'line',
              types:{
                Cases:'bar',
              },
              axes: {
                Cases:'y2'
              },
          },

          // the details of what you want to the chart to look like. See the reference section for all possible values.
          axis: {
              x: {
                  show: true,
                      type: 'timeseries',
                      tick: {
                          format: '%b'
                            // %b shows abbreviated month
                      }
              },
              y: {
                  show: false
              },
              y2: {
                  show: false

              }
          },


          // legend info.
          legend: {
              show: true
          },



            size: {
              height: 150
            },

          color: {
            pattern: ['#26a98d', '#e7bcad', '#C0CA55','#888B8D' ]
          },

      });

  };



  // This is the function that allows you to dynamically build as many carts as you want using one script.
  // function buildChartRightLegend(target, type, dataurl) {
  //     // target   = the id of the element you want the chart to show in. Ex: #chart
  //     // type     = has to match one of the chart types in the c3js.org documentation
  //     // dataurl  = the url of the data feed that powers the chart. right now, its json and a local file. You can call remote apis. You should look to see how you can 'use external data in c3js', hint.
  //
  //     var dataObject = {
  //         url: dataurl,
  //         // what format is the data in. This will change if you load from a remote source.
  //         mimeType: 'json',
  //         type: type
  //     };
  //
  //     var chart = c3.generate({
  //         // binds the data to the target specified.
  //         bindto: target,
  //         // the data object that defines what is loaded.
  //         data: dataObject,
  //
  //         donut: {
  //           title: "Before KB"
  //         },
  //         // the details of what you want to the chart to look like. See the reference section for all possible values.
  //
  //
  //         axis: {
  //             x: {
  //                 show: true
  //             },
  //             y: {
  //                 show: true
  //             }
  //         },
  //         // legend info.
  //         legend: {
  //             show: true,
  //             position:'right'
  //         },
  //
  //         padding: {
  //           right: 20
  //         },
  //
  //         color: {
  //           pattern: ['#26a98d', '#076f59', '#9f5559', '#c85d5d', '#f89b7b', '#f8bb7b', '#f8d97b', '#fffb8d', '#e7bcad', '#fedbd3', '#72f0ff', '#587fff' ]
  //         },
  //
  //     });
  //
  // };

////////////////////



function buildChartCases(target, truefalse) {
  var linesArray = [
      {value: '2016-06-21', text: 'Knowledgebase Implemented', position: 'end'},
      {value: '2016-07-10', text: 'Portal update', position: 'end'}
  ];

var chart = c3.generate({
    bindto:target,

    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x','2016-01-14', '2016-02-14', '2016-03-14', '2016-04-14', '2016-05-14', '2016-06-14', '2016-07-14'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Cases Per Month', 344,369,342,344,466,475,384],
        ],
        type: 'line',
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%b'
                  // %b shows abbreviated month
            }
          },

        y:{
          min: 200
        }


    },



    padding: {
    right: 20
},

    color: {
      pattern: [ '#e49b8a', '#C0CA55','#888B8D', '#26a98d']
    },

    grid: {
    x: {

        lines: linesArray

    }}
  });

  };



  function buildChartUniqueUsers(target) {
    var linesArray = [
        {value: '2016-06-21', text: 'Knowledgebase Implemented', position: 'end'},
        {value: '2016-07-10', text: 'Portal update', position: 'end'}
    ];

  var chart = c3.generate({
      bindto:target,

      data: {
          x: 'x',
  //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
          columns: [
              ['x','2016-07-03', '2016-07-04', '2016-07-05', '2016-07-06', '2016-07-07', '2016-07-08', '2016-07-09',
            '2016-07-10', '2016-07-11', '2016-07-12', '2016-07-13', '2016-07-14', '2016-07-15', '2016-07-16',
          '2016-07-17', '2016-07-18', '2016-07-19', '2016-07-20', '2016-07-21', '2016-07-22', '2016-07-23',
        '2016-07-24', '2016-07-25', '2016-07-26', '2016-07-27', '2016-07-28', '2016-07-29', '2016-07-30',
      '2016-07-31', '2016-08-01', '2016-08-02', '2016-08-03'],
  //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
              ['Unique Users', 1,0,1,7,8,2,0,2,9,4,6,9,4,0,0,8,12,15,8,4,1,0,5,3,4,5,12,2,0,17,14],
          ],
          type: 'line',
      },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%b %e'
                    // %b shows abbreviated month
              }
            },

          y:{
            min:0
          }


      },



      padding: {
      right: 20
  },

      color: {
        pattern: [ '#e49b8a', '#C0CA55','#888B8D', '#26a98d']
      },

      grid: {
      x: {

          lines: linesArray

      }}
    });

    };
