// Display the default plot
function init() {
  let pieChartData = [{
    values:  Object.values(allCatData),
    labels: Object.keys(allCatData),
    type: "pie",
    textinfo: 'label+value'
  }];
  Plotly.purge("bar")
  Plotly.newPlot("pie", pieChartData, pieAllChartLayout);
}
 

// On change to the menu, call getData()
d3.selectAll("#selDataset").on("change", getData);


function getData() {
  //Set variable to dropdown menu item
  let dropdownMenu = d3.select("#selDataset");
  let dataset = dropdownMenu.property("value");

  //Setting pie chart for individual countries
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

  //Setting bar chart for individual countries
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
  //Setting pie chart for all countries
  else if (dataset == "All Data"){
    init();
  }
}

//Setting layout for initial pie chart
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

//Setting pie chart for individual countries
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

//Setting bar chart for individual countries
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

