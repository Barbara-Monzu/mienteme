# Miénteme

#### App demo: http://mienteme.herokuapp.com/

### Description

**Miénteme** (SPA) is an online dating application. The profiles propose ideal romantic dates. Users can "swipe left" to reject a candidate or selects a date and  to play to guess a truth and a lie proposed by the profile. In order to talk to that person, the lie must be guess.

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
- MONGODB_URI
- CLOUDINARY_NAME = Your Cloudinary user name
- CLOUDINARY_KEY = Key to your Cloudinary account
- CLOUDINARY_SECRET = Secret key of your Cloudinary account


### On client:

- REACT_APP_BASE_URL=http://localhost:5005/api
- REACT_APP_SOCKET_URL=http://localhost:3000
- REACT_APP_SOCKET_IO=http://localhost:5005


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
|	POST	|	/api/auth/isloggedin	|	Verifies if a user is logged in.	|
|	GET	|	/api/people/allUsers	|	Brings all users but the logged in one, and filter by gender, age and city.	|
|	GET	|	/api/people/profile/:id	|	Brings the user logged	|
|	POST	|	/api/people/profile/:id/edit-profile	|	Edit user	profile |
|	GET	|	/api/dates/	|		Brings all appointments and populate the creator |
|	GET	|	/api/mydates/:id	|		Brings appointments of user logged |
|	GET	|	/api/its-dates/:idOtherUser	|		Brings appointments of user match |
|	GET	|	/api/categoria/:category	|		Brings appointments by category: GASTRONOMY, CULTURE, NATURE, RANDOM, ALL |
|	POST	|	/api/dates/new/:id	|	Create and save an appointment in the DB |
|	POST	|	/api/dates/edit-date/:idDate	|	Edit an appointment|
|	DELETE	|	/api/dates/delete/:idDate	|	Delete an appointment.	|
|	GET	|	/api/conversation/	|		Brings all conversations of user logged |
|	GET	|	/api/conversation/private/:idDate	|		Brings a private conversation |
|	POST	|	/api/conversation/create/:idDate	|	Create a conversation between two users |
|	DELETE	|	/api/conversation/:idConver	|	Delete a conversation.	|
|	GET	|	/api/messages/allMessages/:idConver	|		Brings all messages of a conversation |
|	GET	|	/api/messages/lastMessage/:idConver	|		Brings the last message of a conversation |
|	POST	|	/api/messages/:idConver	|	Creates a new message between two users.	|
|	DELETE	|	/api/messages/:idMessage	|	Delete a message.	|
|	GET	|	/api/request/allRequestPending	|	Brings request pendings where receiver it's me.	|
|	GET	|	/api/request/myRequestsCreated	|	Brings request pendings where creator it's me.	|
|	GET	|	/api/request/allSecondsOpportunities	|	Brings my seconds opportunities, users that answered "YES" to my request.	|
|	POST	|	/api/request/create/:date/	|	Create a request to seccond opportunitie, save the appointment selected.	|
|	PUT	|	/api/request/:idRequest	|	Modify the request when the user answer "YES" or "NO"	|
|	DELETE	|	/api/request/:idRequest	|	Delete a request when user said "NO" .	|


### Front-end Endpoints

| Routes file | Path                       | Action                                            | 
| ----------- | -------------------------- |-------------------------------------------------- |
| Base 
|             | /                          | Render home page                                  |
|             | /signup                    | Render user register page                         |
|             | /login                     | Render user login page                            |
| User 
|             | /                 | Redirect to click-me                                 |
|             | /click-me                  | Render all filtered users                   |
|             | /formulario                    | Firt form to edit profile |
|             | /perfil           | Render the user profile                             |
|             | /editar-perfil | Edit the user profile                      |
|             | /match/:id       |     Render match user profile                      |
|             | /segundas-oportunidades                | Render your secconds opportunities  |
|             | /peticiones              | Render request to answer                   |
|             | /buscar               | Render a page to search by category appointments (GASTRONOMY, CULTURE, NATURE, RANDOM, ALL) |
|             | /todas               | Render all dates belonging to filtered users   |
|             | /categoria/:category|  Render dates by category belonging to filtered users   |
|             | /chat        | Render all conversations of user logged               |
|             | /chat/:idConver/:match           | Render a private conversation        |



### Technologies

- React - Hooks
- MongoDB
- Express
- Node
- Javascript (ES6)
- HTML & CSS


### Additional info

This project has been developed by Guido Crespo and Bárbara Monzú as the final project of Ironhack's Web Development Bootcamp and it has been created in two weeks.
