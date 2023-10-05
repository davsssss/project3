function initialBar(entry){
    return entry.Country == "Argentina";
}

// Display the default plot
function init() {
  let pieChartData = [{
    values:  Object.values(pieData["Argentina"]),
    labels: Object.keys(pieData["Argentina"]),
    type: "pie",
    textinfo: 'label+value'
  }];
  Plotly.newPlot("pie", pieChartData, pieChartLayout);
    
  let initialBarData = barData.filter(initialBar);
  let barChartData = [{
    x:initialBarData.map(row=>row.Youtuber),
    y: initialBarData.map(row=>row.Subscribers),
    type: "bar",
    text: initialBarData.map(row => `Youtuber: ${row.Youtuber}<br>Category: ${row.Category}<br>Subscribers: ${row.Subscribers}`), // Customize hover text
  
  }];
  Plotly.newPlot("bar", barChartData, barChartLayout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");

  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  console.log(dataset)

  // Initialize an empty array for the country's data
if (dataset != "All Data"){
  let updatedPieData =  Object.values(pieData[dataset]);
  let updatedPieLabels =  Object.keys(pieData[dataset]);
  updatePiePlotly(updatedPieData,updatedPieLabels);

function updatePiePlotly(updatedPieData,updatedPieLabels) {
var update = {
    values: [updatedPieData],
    labels: [updatedPieLabels],
    textinfo: 'label+value'
    };
    Plotly.update("pie",update, pieChartLayout);
}

  function updateBar(entry){
    return entry.Country == dataset;
}
  let updatedBarData = barData.filter(updateBar);
  let updatedBarChartData = [{
    x:updatedBarData.map(row=>row.Youtuber),
    y: updatedBarData.map(row=>row.Subscribers),
    type: "bar",
    width:.7,
    text: updatedBarData.map(row => `Youtuber: ${row.Youtuber}<br>Category: ${row.Category}<br>Subscribers: ${row.Subscribers}`), // Customize hover text
  }];
  Plotly.newPlot("bar", updatedBarChartData, barChartLayout);
}
else if (dataset == "All Data"){
  let pieChartData2 = [{
    values:  Object.values(allCatData),
    labels: Object.keys(allCatData),
    type: "pie",
    textinfo: 'label+value'
  }];
  Plotly.purge("bar");
  Plotly.newPlot("pie", pieChartData2, pieAllChartLayout);
}
}

let pieChartLayout = {
  height: 500,
  width: 1500,
  margin: {
    l: 550,
    },
  title: {
    text:"<b>Channel Content Distribution<b>",
    x:.72
  }
};

let pieAllChartLayout = {
  height: 800,
  width: 1500,
  margin: {
    l: 550,
    },
  title: {
    text:"<b>Channel Content Distribution<b>",
    x:.72
  }
};

let barChartLayout = {
  height: 1000,
  width: 1920,
  xaxis: {
    tickfont: {
      size: 15, 
      tickangle: 90,
    },
  },
yaxis: {
title: "<b>Subscriber Count<b>",
titlefont: {
  size: 15,
  tickangle: 90,

},
tickfont: {
  size: 15, 
},
},
margin: {
l: 150,
b: 500
},
title: {
  text:"<b>Channel Popularity<b>",
  x:.5
}

}
init();

