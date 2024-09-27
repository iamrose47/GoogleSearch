# Google Search Clone

A simple Google Search-like application built with React that utilizes the Google Custom Search API to fetch and display search results. The app features a responsive design with dark mode and light mode options, and includes components for search input, results display, a footer, and a navigation bar.

## Features

- **Search Functionality**: Users can input search queries and retrieve results from the Google Custom Search API.
- **Responsive Design**: The application is designed to work on various devices and screen sizes.
- **Dark Mode / Light Mode**: Users can toggle between dark and light themes.
- **Loading State**: Displays a loading message while fetching results.
- **Error Handling**: Graceful handling of API errors and displaying appropriate messages.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Context API**: For state management across the application.
- **CSS**: For styling the components.
- **Google Custom Search API**: To fetch search results.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/google-search-clone.git
2. Navigate to the project directory:
   cd google-search-clone
3. Install the dependencies:
   npm install
4. Create a .env file in the root directory and add your Google API key and Custom Search Engine ID:
   REACT_APP_GOOGLE_API_KEY=YOUR_API_KEY
   REACT_APP_GOOGLE_CSE_ID=YOUR_CSE_ID
5. Start the development server:
   npm start


## Usage
Open your browser and go to http://localhost:3000.
Enter a search query in the input field and hit enter or click the search button.
View the search results displayed below the input field.

## API Usage
The application utilizes the Google Custom Search API. Make sure to keep track of your API usage to avoid exceeding the daily quota limits. 

## Acknowledgments
Google Custom Search API for providing the search functionality.
React for the framework used in this project.

   



