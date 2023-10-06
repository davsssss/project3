## Content Culture of Each Country's Top Youtube Creators

### Description:
Our project is an analysis of YouTube channel popularity and success of categories of YouTube content based on country. We sorted through the top 1000 YouTube channels based on subscriber amount,country, and content channel category to analyze popularity of different YouTube content.  
  
Alex: Through pandas dataframe editing, I pulled our cleaned data from the csv, split it into various dictionaries, and exported the dictionaries into js files for easy use for charting through plotly. Through the use of d3.js, I created a deopdown menu allowing users to select any country included in our data and would then display a pie chart displaying the distribution of the various categories of content that the top channels for that country fell into, and a bar chart that displayed the channel names, subscriber counts and respective categories for each channel that operates in that country.

Will: Through Charts.js, I created a visualization of our Youtubers and their subscriber counts by country. While similar to Plotly, it functions a bit more like Leaflet because I needed to reference the download link in my HTML file to make it work. I started by creating the chart object and referencing the portion in the html file that held our object. Then I set up how the chart would appear on the page once all our information in. I chose a bar chart, and utilized our Subscriber counts as the labels. ONce that function was completed, I went about adding a function to filter through our data by country so we could easily identify the top Youtubers per country in this list. After creating those functions, we needed to finally parse through our CSV file and fetch the data to populate our chart and give it life. Most of this ways simply following our in class activities of using filterData, getElementByID, and createChart. But I also was required to utilize a parsing function called Papa.parse which has a license referenced in our HTML to make it work. Once our chart was complete, the only thing left was creating the dropdown to help us filter. By utilizing the same functions as creating our chart, we were able to slightly alter what we were calling to create a dropdown to help us see each countries Youtubers individually. 

### How to Install and Run the Project
(How to open the project: ____ )  
Once on the webpage, users can utilize drop down menus to view charts displaying youtube channel info for the respective country

### Credits:
David:  
Will: Bar chart using Charts.js
Alex: Pie & Bar graph using plotly
