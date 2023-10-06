document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('youtubeChart').getContext('2d');
    var myChart;

    var originalData; // Store the original data from SQLite

    function createChart(labels, data) {
        if (myChart) {
            myChart.destroy(); // Destroy existing chart if it exists
        }

        // Create new chart
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Subscribers',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Create filter and dropdown based on Country of Youtuber
    function filterData(country) {
        if (country === 'All') {
            return originalData; // Return the original data if 'All' is selected
        } else {
            return originalData.filter(function(item) {
                return item.Country === country;
            });
        }
    }

    function fetchData() {
        // Fetch data from SQLite database using a backend API
        fetch('/json_youtube') // Update with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                originalData = data;

                var labels = originalData.map(function(item) {
                    return item.Youtuber;
                });

                var subscribers = originalData.map(function(item) {
                    return item.Subscribers;
                });

                createChart(labels, subscribers);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Call the function to fetch data
    fetchData();

    // Add event listener for the country dropdown
    document.getElementById('countrySelect').addEventListener('change', function() {
        var selectedCountry = this.value;
        var filteredData = filterData(selectedCountry);

        var labels = filteredData.map(function(item) {
            return item.Youtuber;
        });

        var subscribers = filteredData.map(function(item) {
            return item.Subscribers;
        });

        createChart(labels, subscribers);
    });
});