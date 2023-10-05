function initialBar(entry){
    return entry.Country == "Argentina";
}

// Display the default plot
function init() {
  let pieChartData = [{
    values:  Object.values(pieData["Argentina"]),
    labels: Object.keys(pieData["Argentina"]),
    type: "pie"
  }];

  let pieChartLayout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", pieChartData, pieChartLayout);

    let initialBarData = barData.filter(initialBar);
    let barChartData = [{
      x:initialBarData.map(row=>row.Youtuber),
      y: initialBarData.map(row=>row.Subscribers),
      type: "bar"
    }];
  
    let barChartLayout = {
      height: 600,
      width: 800
    }
  
    Plotly.newPlot("bar", barChartData, barChartLayout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");

  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");

  // Initialize an empty array for the country's data
 console.log(dataset)
  let updatedPieData =  Object.values(pieData[dataset]);
  let updatedPieLabels =  Object.keys(pieData[dataset]);
  
  function updateBar(entry){
    return entry.Country == dataset;
}
  let updatedBarData = barData.filter(updateBar);
  let updatedBarChartData = [{
    x:updatedBarData.map(row=>row.Youtuber),
    y: updatedBarData.map(row=>row.Subscribers),
    type: "bar"
  }];

  let layout2 = {
    height: 600,
    width: 800
  }

  Plotly.newPlot("bar", updatedBarChartData, layout2);

// Call function to update the chart
  updatePiePlotly(updatedPieData,updatedPieLabels);
}

// Update the restyled plot's values
function updatePiePlotly(updatedPieData,updatedPieLabels) {
var update = {
    values: [updatedPieData],
    labels: [updatedPieLabels]
    };
    Plotly.update("pie",update);
}

init();
