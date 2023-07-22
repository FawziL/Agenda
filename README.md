
# API de AgendaTelefónica
Link: https://agendatelefonica-mji1.onrender.com

URL: /contacts
Método HTTP: GET
Trae todos los contactos ubicados en la DB.


URL: /createContact
Método HTTP: POST
Crea un contacto y lo ingresa en la DB.
Parámetros en el Body

Campo	          Tipo	      Descripción
name	          string	    Nombre del contacto
lastName	      string	    Apellido del contacto
phoneNumber	    string	    Telefóno del contacto
(Ningun dato es requerido)


URL: /deleteContact
Método HTTP: DELETE
Busca un contacto y lo elimina de la DB.
Parámetros en el Body.

Campo	          Tipo	      Descripción
name	          string	    Nombre del contacto
lastName	      string	    Apellido del contacto
phoneNumber	    string	    Telefóno del contacto
(Solo se eliminará el contacto sí coincide (name y lastName) ó el (phoneNumber))


URL: /updateContact
Método HTTP: PUT
Busca un contacto y lo actualiza en la DB.
Parámetros en el Body.

Campo	          Tipo	      Descripción
name	          string	    Nombre del contacto
lastName	      string	    Apellido del contacto
phoneNumber	    string	    Telefóno del contacto
find      	    string	    Comparación de busqueda de contacto
(Colocar el parametro find con la clave que deseas encontrar, a su vez, colocar los paramtros que desea cambiar (name, lastName o phoneNumber))


URL: /find
Método HTTP: GET
Busca un contacto en la DB, a partir de cualquier key del model.
Parámetros en el Body.

Campo	          Tipo	      Descripción
find      	    string	    Comparación de busqueda de contacto
(Colocar el parametro find con la clave que deseas encontrar, sin importar que key sea.)
