# Click-me

### Description

**Click-me** (SPA) is an online dating application. The profiles propose ideal romantic dates. If the user selects a date, they must play to find out a truth and a lie proposed by the profile. In order to talk to that person, the lie must be right. 

### Server Install

```sh
npm install
```

### Server Usage

```sh
npm run dev
```


### Server .env variables needed

- PORT=5005
- ORIGIN=http://localhost:3000
- DB_REMOTE
- SESS_SECRET
- CLOUDINARY_NAME
- CLOUDINARY_KEY
- CLOUDINARY_SECRET

### Client Install

```sh
npm install
```

### Client Usage

```sh
npm run start
```

### Client .env variables needed

- REACT_APP_API_URL=http://localhost:5005/api

### Endpoints

|	Method	|	Path	|	Description	|
|	-	|	-	|	-	|
|	POST	|	/api/auth/signup	|	Create and save the user in the database	|
|	POST	|	/api/auth/login	|	Check if the data entered with those of the database are correct and log in the user
|	GET	|	/api/auth/logout	|	Ends the current session.	|
|	POST	|	/api/auth/refresh-session	|	Refresh user session by bringing updated user info from database.	|
|	POST	|	/api/auth/isloggedin	|	Verifies if a user is logged in.	|
|	GET	|	/api/people/?filter=	|	Brings all users but the logged in one, and filter by default by proximity. The user can filter by city, category and date of the date.	|
|	GET	|	/api/people/new-date	|	Create and save an date in the DB and in the User who creates it	|
|	GET	|	/api/chats/	|	Brings all chats where the logged user is a participant.	|
|	POST	|	/api/chats/	|	Creates a new chat conversation between two users.	|
|	PUT	|	/api/chats/	|	Creates new messages and updates the chat where they were sent.	|
|	GET	|	/api/requests/	|	Brings current user's PENDING requests.	|
|	GET	|	/api/requests/:type	|	Check if a request exists between two users. Currently using for friendship requests.	|
|	POST	|	/api/requests/	|	Create new request with PENDING status by default.	|
|	PUT	|	/api/requests/	|	Update request status to ACCEPTED or REJECTED and manages the logic depending on the request type (add friends and delete request if ACCEPTED and type FRIENDSHIP | Updates the status of the request to ACCEPTED or REJECTED and manages the logic: if it is ACCEPTED, add the chat to the match and allow the profile to be viewed.	|
|	DELETE	|	/api/requests/	|	Deletes request.	|
|	PUT	|	/api/people/edit-profile/:id/:iddate	|	Modifies the user by adding or changing dates	|
|	DELETE	|	/api/people/:id	|	Deletes user.	|
|	DELETE	|	/api/people/edit-profile/:iddate/	|	Delete date.	|
|	PUT	|	/api/people/edit-profile/:id	|	Updates user info and dates.	|
|	GET	|	/api/users/:id	|	Brings data from a specific user.	|

### Technologies

- React
- MongoDB
- Express
- Node
- Javascript (ES6)
- HTML & CSS


FrontEnd -

Route - React

* ./
* ./signup
* ./login
* ./
* ./allUsers
* ./user/:id
* ./user/?user=&date=

### Additional info

This project has been developed by Guido Crespo, and Bárbara Monzú as the final project of Ironhack's Web Development Bootcamp and it has been created in two weeks.
