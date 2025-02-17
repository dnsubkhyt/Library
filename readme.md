# My Library API System

Welcome to the My Library API System! This is a Node.js-based application that manages a library of books and integrates weather data from an external API.

## Table of Contents

*   Technologies Used
    
*   Project Structure
    
*   Setup and Installation
    
*   Running the Application Locally
    
*   Deploying the Application to Heroku
    
*   Testing the API
    
*   Endpoints
    
*   Error Handling
  
## Technologies Used

*   **Node.js**: JavaScript runtime for building the backend.

*   **Express**: Web framework for building the API.

*   **MongoDB**: NoSQL database for storing book data.
    
*   **Axios**: HTTP client for making requests to the weather API.
    
*   **Joi**: Data validation library.

*   **dotenv**: Loads environment variables from a .env file.
    
## Project Structure

```bash
├── app.js                    # Main entry point of theapp

├── config

│   ├── mongoose.js           #MongoDB configuration

│   ├── joi.js                #Joi validation schema

├── controllers

│   ├── bookController.js     #Book CRUD logic

│   └──weatherController.js  # Weather API logic

├── models

│   └──bookModel.js          # Mongoose schemafor Book

├── routes

│   ├── bookRoutes.js         #Routes for book API

│   └──weatherRoutes.js      # Routes forweather API

├── .env                      # Environment variables

├── package.json              # Project dependencies andscripts

└── package-lock.json        # Dependency lock file
```


## Setup and Installation

### Prerequisites

To run this project, you need the following:

*   **Node.js** (Recommended: version 18.x.x or later)
    

*   **MongoDB Atlas account** (for a remote database)
    

*   **Heroku account** (for deployment)


### Installation

1.  Navigate to your project folder:

```bash
cd path/to/your/project-folder
```
2.  Initialize a new Git repository:

```bash
git init
```
3.  Add your remote repository:
```bash
git remote add origin https://github.com/your-username/my-library-api.git
```
4.  Add all files to the staging area:
```bash
git add .
```
5.  Commit the files:

```bash
git commit -m "Initial commit"
```
6. Push to the remote repository:
```bash
git push -u origin main
```
7.  Install the required dependencies: 
```bash
npm install _package-name
```
8.  Create a `.env` file in the root of the project to store your environment variables (e.g., MongoDB connection string, weather API key). Here’s an example of what it might look like:
```env
MONGO\_URI=your-mongodb-atlas-connection-string

API\_KEY=your-openweathermap-api-key
```

### Setting Up MongoDB Atlas

Heroku doesn’t have access to local MongoDB instances, so you need to use **MongoDB Atlas** to create a remote database.

1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account or log in.   
2.  Follow the instructions to create a new cluster (you can select the free tier).   
3.  Once your cluster is created, set the IP address to "0.0.0.0/0" to allow connections from anywhere.
4.  Create a new database and a user for it.   
5.  Copy the **MongoDB connection string** from the Atlas dashboard and replace the password placeholder with the password you set for the database user.



### Setting Environment Variables

Create a `.env` file in the root directory of your project,and add the following values:

```env
MONGODB_URI="your-mongodbAtlas-string-connection-key"

API_KEY=your-weather-api-key
```
*   Replace `your-weather-api-key` with your OpenWeatherMap API key [https://openweathermap.org/api].    


### Running the Application Locally

1.  Start the application locally:   
```bash
node app.js
```
2.  Your app will now be available at `http://localhost:8080`
*   Replace the port if needed.


### Deploying the Application to Heroku

#### Step 1: Install Heroku CLI

1.  Download and install the Heroku CLI.
2.  After installation, log in to your Heroku account:
```bash
heroku login
```


#### Step 2: Create a New Heroku App

1.  In your terminal, navigate to your project directory:
```bash
cd path/to/your/project
```
2.  Create a new Heroku app with a custom name:
```bash
heroku create your-custom-app-name
```

#### Step 3: Set Environment Variables on Heroku

Set your MongoDB connection string and weather API key asenvironment variables on Heroku:

```bash
heroku config:set MONGODB_URI=your-mongodb-atlas-connection-string –app app\_name

heroku config:set API_KEY=your-openweathermap-api-key –app app\_name
```

#### Step 4: Push Your Code to Heroku

1.  Add the Heroku remote repository:  
```bash
git remote add heroku https://git.heroku.com/your-custom-app-name.git
```
2.  Push your code to Heroku: 

```bash
git push heroku main
```


#### Step 5: Open Your App

After deployment, open your app using the following command:
```bash
heroku open
```
You can also visit it directly at https://your-custom-app-name.herokuapp.com.


## Testing the API

### Book Endpoints

*   **GET /library/book** Fetch all books from the library.

*   **POST /library/book/add** Add a new book to the library (body must contain title, author, year, and genre).

*   **PUT /library/book/update/:id** Update the details of a specific book by its ID.
    
*   **DELETE /library/book/delete/:id** Delete a book by its ID.


### Weather Endpoints

*   **GET /my-library-api-system/weather/:city** Get the weather details of a specific city. For example, GET /my-library-api-system/weather/New York will return the weather for New York.
*  **Fill the space with %20 (new%20york)**

## Error Handling

If there are any errors, such as invalid book IDs or failedweather API calls, the application will return an appropriate error messagewith an HTTP status code.

Example error for weather:

```error
{
    "Error fetching the weather data"
}
```


## Conclusion

This application allows you to manage a book collection andget weather data for any city. The app is fully deployed on Heroku, and data isstored in MongoDB Atlas. To test it, follow the provided API endpoints and usetools like Postman or Insomnia for interacting with the API.

Feel free to make any changes or enhancements to the app,and don't hesitate to reach out if you have any questions or need help settingit up.
