This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For a live demo, please visit [my surge site](http://react-weather-stephen.surge.sh/)!

**HOW TO RUN**
-To run this program, simply have **Node.js** installed on your computer and clone the repository. 
-Install all dependencies by running **npm install** from the root directory of the cloned repository in your CLI.
-Run **npm start** in your CLI to launch the app!

This is a basic weather application built with React utilizing Yahoo's weather API. You can see the current conditions for a city of your choosing as well as a 3 day forecast and other additional whether information such as: wind conditions, atmosphere and sunset and sunrise times. Click see additional info to toggle between the forecast panel and the additional information panel.

To add a new location simply enter a city and state in the following format... **City, State**. For example.. **Atlanta, GA**. If you type nonsense it likely will not return any results. This input is not case sensitive and doesn't necessarily require a state, but I would recommend using one for higher accuracy on the Yahoo API query. You can also submit a ZIP code or just a state/region for results.

The application utilizes local storage to keep your select locations if you refresh the page or exit out of it. Simply click the X to delete a location.

