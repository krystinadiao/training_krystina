var drilldata1 = {
  'Covered by KB': [
      ['Add Brand', 78],
      ['Duplicate Account', 90],
      ['Sign-Up Issues', 158],
      ['Login Related', 176],
      ['Training Requests', 183],
      ['Misrouted Content', 231],
      ['Add Retailer', 401],
      ['Other', 357]
  ],

  'Not Covered by KB': [
      ['Vendor ID', 90],
      ['Premium Upgrade', 157],
      ['Other', 357]
  ]
};

var chart = c3.generate({
  bindto: '#donutChart1',
  data: {
      columns: [
          ['Covered by KB', 1674],
          ['Not Covered by KB', 618]
      ],

      type : 'donut',



      onclick: function (d, element) {
        chart.load({
          unload: ['Covered by KB', 'Not Covered by KB'],
          columns: drilldata1[d.id],
        });
      },
  },

  legend: {
      show: true,
      position:'right'
  },

  donut: {
    title: "Before KB"
  },

  padding: {
    right:20
  },

  color: {
    pattern: ['#26a98d', '#e49b8a', '#123754', '#0d4b5f', '#24718a', '#0a6162', '#279495', '#129281', '#26a98d', '#71c7b5', '#d48f78','#f89b7b', '#e7bcad', '#fedbd3']
  },


});

d3.select('#A')
.on('click', function(d, element) {
  chart.load({
    unload: true,
    columns: [
      ['Covered by KB', 1674],
      ['Not Covered by KB', 613]
    ],
  });
});












var drilldata2 = {
  'Covered by KB': [
      ['Sign-Up Issues', 11],
      ['Misrouted Content', 34],
      ['Add Brand', 41],
      ['Login Related', 44],
      ['Duplicate Account', 46],
      ['Training Requests', 67],
      ['Add Retailer', 94],
      ['Other', 92]
  ],

  'Not Covered by KB': [
      ['Vendor ID', 3],
      ['Brand Not Found',13],
      ['Premium Upgrade', 50],
      ['Provisioning',51],
      ['Other', 92]

  ]
};

var chart2 = c3.generate({
  bindto: '#donutChart2',
  data: {
      columns: [
          ['Covered by KB', 429],
          ['Not Covered by KB', 209]
      ],

      type : 'donut',



      onclick: function (d, element) {
        chart2.load({
          unload: ['Covered by KB', 'Not Covered by KB'],
          columns: drilldata2[d.id],
        });
      },
  },

  legend: {
      show: true,
      position:'right'
  },

  donut: {
    title: "After KB"
  },

  padding: {
    right:20
  },

  color: {
    pattern: ['#26a98d', '#e49b8a', '#123754', '#0d4b5f', '#24718a', '#0a6162', '#279495', '#129281', '#26a98d', '#71c7b5', '#d48f78','#f89b7b', '#e7bcad', '#fedbd3']
    },


});

d3.select('#B')
.on('click', function(d, element) {
  chart2.load({
    unload: true,
    columns: [
      ['Covered by KB', 429],
      ['Not Covered by KB', 209]
    ],
  });
});
