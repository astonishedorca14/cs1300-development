# Development

### Link to Deployed Website
If you used the stencil code, this is `https://astonishedorca14.github.io/cs1300-development/`

### Goal and Value of the Application

The goal of the Flights From Providence website is to provide users with information about flights departing from Providence, Rhode Island. 
This includes the flight destination, price, duration, and other relevant details. 
The website aims to make it easy for users to find and compare flights from Providence, and to book the flights that best suit their needs.

For instance, the Flights From Providence website might be particularly useful for users who are planning a trip for spring break. It also offers useful features, such as the ability to filter and sort flights by different criteria, and to save and compare favorite flights. Overall, the Flights From Providence website offers a valuable service to users who are planning to travel from Providence.

### Usability Principles Considered

The Flights From Providence website is designed to be user-friendly and easy to use. To achieve this, the website considers several usability principles in its design and development.

One of the key usability principles considered for the website is simplicity. The website has a clean, uncluttered design, with clear and concise labels and instructions. This makes it easy for users to navigate the website and find the information they are looking for.

Another usability principle considered for the website is consistency. The website uses consistent design elements, such as color schemes, fonts, and layout, throughout the site. This helps users to easily recognize and understand the different features and functions of the website, and to navigate the site with confidence.

### Organization of Components

I used four components: FilterBar, SortBar, FlightItem, and Aggregator.

FilterBar and SortBar, as the name imply, are used to filter and sort the flights. They house the html for the various dropdown, checkboxes, and buttons. These two component's props 
are primarily helper functions that update the use state variables of the filter type and sort type.

FlightItem represents each "card" that is displayed in the flight store. It houses the html for the flight information, and the buttons that allow the user to save flights.

Aggregator is the "Watch Cart", which accumlates the flights that the user has saved. It houses the html for dispalying the total duration of flights and cost for the user's the saved flights.

### How Data is Passed Down Through Components
Data is passed down through components in React through props, which stands for properties. Props are a way for components to receive data from their parent component. The parent component passes the data down to its child component as props, and the child component receives and uses the data.

In my website, for each component, I pass data through App.js through each component. For instance, for the component FilterBar, I pass the data through App.js to FilterBar.js. Then, in FilterBar.js, I pass in the functions that update use states such as setStops and setDuration so that we can reflect the options
in the flights that are displayed. 

### How the User Triggers State Changes

Users trigger state changes by updating the useState variables. Each of the useState variables is updated by a function that is passed down from App.js to FilterBar.js. For instance, the useState variable stops is updated by the function setStops. The function setStops is passed down from App.js.
For this website, there's useState variables for cost, duration, items to be displayed, sort type, and destinations. For most of the useState varibales, they are 
updated through events (either onClick or onChange) on the components FilterBar.js and SortBar.js.

