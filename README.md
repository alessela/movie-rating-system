# Movie Rating System

## Development environment setup

### Step 1 Install necessary tools
Tools to be installed: Visual Studio Code, Git, NodeJS (latest versions recommended)

### Step 2 Clone Git Repository
Open any location, then right click -> More options -> Git Bash here, it opens the Git Bash
Clone the repository by typing: https://github.com/alessela/movie-rating-system.git
and then press Enter.
It will extract the project into a directory named movie-rating-system.

### Step 3 Open the extracted folder
Open Visual Studio Code, and then click File -> Open Folder and select the extracted folder and this will open the project.

### Step 4 `npm install`
In the terminal from the bottom of the IDE, type npm install for installing all libraries and dependencies necessary for running the project

![image](https://github.com/user-attachments/assets/fd1a257b-bcca-4fc2-bfa8-a8458ae246f8)

### Step 5 Login to TMDb
You can login in the application using you TMDb account, so you need to sign up on TMDb (https://www.themoviedb.org/) if you haven't done yet.

### Step 6 Obtaining API Read token access
For loggin in into the application, you will need to open an API Read Token Access.
For this, click on your profile on the top-right, and then Settings -> API -> Create tab -> Developer.
Then you need to scroll down to accept the terms of use, and later you will need to complete a form and click "Submit".

And now, the API configuration page will look like this:

![image](https://github.com/user-attachments/assets/626ca557-f29e-4dcb-89e4-07f86ec30507)

You can see both an API key and an API Read Access Token necessary for using the application.

### Step 7 Set access token for the project

Copy the read access token generated earlier, then go back to the project in VS Code and paste the token in the .env file just like this:

![image](https://github.com/user-attachments/assets/8298836b-dc91-415e-9eb0-1e83ae9cabbf)

### Step 8 `npm start`
Now go back to the terminal and run the app in the development mode using the command above.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

![image](https://github.com/user-attachments/assets/0a170b55-7963-45fb-b0f1-2a21c4e6654e)

The page will reload when you make changes.
You may see some infos, warnings and errors in the console.

### Step 9 Login in the application.
You have just to click on the login button from the middle of the screen and you'll be redirected to the TMDb website, where you need to approve the 3rd Party Authentication Request.

![image](https://github.com/user-attachments/assets/74b3e45b-458b-4752-b041-c49702e36362)
After the approval, you will be redirected to the main page of the app.

## Testing scenarios

### Movie grid display

![image](https://github.com/user-attachments/assets/5e5be8ad-fe08-4c31-aff6-fb74cae365b2)

### Filtering by genre functionality

![image](https://github.com/user-attachments/assets/4d025dd0-5e70-4acf-9c73-089ba85cb794)
![image](https://github.com/user-attachments/assets/7004306a-ff44-405c-82d7-49aa72a2c343)

### Adding movies or TV series as favorites
![image](https://github.com/user-attachments/assets/e944f3a2-1fd3-4185-a7ef-de40d3935989)
![image](https://github.com/user-attachments/assets/53d6f265-b51d-40cc-b836-99721f8e4be1)
![image](https://github.com/user-attachments/assets/a75db45e-3798-44bf-8911-1771c456342b)

### Rating a movie or TV series
![image](https://github.com/user-attachments/assets/b25f9e2a-8fa2-412e-a0db-fe4cdcfd9ac1)
![image](https://github.com/user-attachments/assets/386a0108-06a7-4ef9-9ae9-8bbbb0d499d4)

### Viewing comments for movies or TV shows
![image](https://github.com/user-attachments/assets/645ebe2e-b4ce-40f2-ab41-41a0dcd37a4c)

I couldn't the leaving comments functionality because TMDb API doesn't provide endpoints for leaving comments and reviews, but at least it provides endpoints for retrieving the comments of a movie or TV show
