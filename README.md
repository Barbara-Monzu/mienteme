# Click-me

### Description

**Click-me** (SPA) is an online dating application. The profiles propose ideal romantic dates. Users can "swipe left" to reject a candidate or selects a date and  to play to guess a truth and a lie proposed by the profile. In order to talk to that person, the lie must be guess.

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
- SESS_SECRET


### Client Install

```sh
npm install
```

### Client Usage

```sh
npm run start
```


### Endpoints

|	Method	|	Path	|	Description	|
|	-	|	-	|	-	|
|	POST	|	/api/auth/signup	|	Create and save the user in the database	|
|	POST	|	/api/auth/login	|	Check if the data entered with those of the database are correct and log in the user
|	GET	|	/api/auth/logout	|	Ends the current session.	|
|	POST	|	/api/auth/refresh-session	|	Refresh user session by bringing updated user info from database.	|
|	POST	|	/api/auth/isloggedin	|	Verifies if a user is logged in.	|
|	GET	|	/api/people/?filter=	|	Brings all users but the logged in one, and filter by default by proximity. The user can filter by city, category and date of the date.	|
|	GET	|	/api/people/:id	|	Brings data from a specific user.	|
|	POST	|	/api/people/new-date	|	Create and save an date in the DB and in the User who creates it	|
|	GET	|	/api/conversations/	|	Brings all conversations where the logged user is a participant.	|
|	POST	|	/api/conversations/	|	Creates a new conversation between two users.	|
|	PUT	|	/api/conversations/	|	Creates new messages and updates the chat where they were sent.	|
|	PUT	|	/api/people/edit-profile/:id/:iddate	|	Modifies the user by adding or changing dates	|
|	DELETE	|	/api/people/:id	|	Deletes user.	|
|	DELETE	|	/api/people/edit-profile/:iddate/	|	Delete date.	|
|	PUT	|	/api/people/edit-profile/:id	|	Updates user info and dates.	|


### Technologies

- React
- MongoDB
- Express
- Node
- Javascript (ES6)
- HTML & CSS


### FrontEnd -

* ./
* ./signup
* ./login
* ./
* ./allUsers
* ./user/:id
* ./user/?user=&date=

### Additional info

This project has been developed by Guido Crespo and Bárbara Monzú as the final project of Ironhack's Web Development Bootcamp and it has been created in two weeks.
