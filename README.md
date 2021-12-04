# click-me

BackEnd - Servidor 

1.	post /signup --------- Crea y guarda en la BBDD al usuario
2.	post /login --------- Guarda el UserLogged (req.current.session)
3.  get/?filter=—— Get AllUsers to DDBB, muestra las sugerencias de gente por cercanía y permite hacer el filtro (city, category, fecha)
4.	post /new-date ———— Muestra Formulario para crear la nueva cita y guardarlo en la BBDD
5.	post /edit-profile ———— Formulario para editar perfil
6. post /edit-profile/:id-date ———— Form para editar cita en la BBDD 
7. post /edit-profile/:id-date/delete ———— Elimina de la BBDD una cita.


FrontEnd -

Route - React

1./
2./signup
3./login
4./
5./allUsers
6./user/:id
7./user/?user=&date=
