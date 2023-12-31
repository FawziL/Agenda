
# API de AgendaTelefónica
> API de AgendaTelefónica, busca agendar, filtrar, borrar, actualizar y mostrar los contactos de una base de datos en MongoDB. 

## Link: https://agendatelefonica-mji1.onrender.com

## URL: /contacts
```sh
Método HTTP: GET
Trae todos los contactos ubicados en la DB.
```

## URL: /createContact

```sh
Método HTTP: POST
Crea un contacto y lo ingresa en la DB.
Parámetros en el Body

|    Campo      |   Tipo        |      Descripción       |
| ------------- | ------------- | -------------------    |
|   name        |   String      | Nombre del contacto    |
|   lastName    |   String      | Apellido del contacto  |
| phoneNumber   |   String      | Telefóno del contacto  |
(Ningun dato es requerido)
```


## URL: /deleteContact
```sh
Método HTTP: DELETE
Busca un contacto y lo elimina de la DB.
Parámetros en el Body.

|    Campo      |   Tipo        |      Descripción       |
| ------------- | ------------- | -------------------    |
|   name        |   String      | Nombre del contacto    |
|   lastName    |   String      | Apellido del contacto  |
| phoneNumber   |   String      | Telefóno del contacto  |
(Solo se eliminará el contacto sí coincide (name y lastName) ó el (phoneNumber))
```

## URL: /updateContact
```sh
Método HTTP: PUT
Busca un contacto y lo actualiza en la DB.
Parámetros en el Body.

|    Campo      |   Tipo        |      Descripción       |
| ------------- | ------------- | -------------------    |
|   name        |   String      | Nombre del contacto    |
|   lastName    |   String      | Apellido del contacto  |
| phoneNumber   |   String      | Telefóno del contacto  |
|    find       |   String      | Comparación de busqueda de contacto  | 
(Colocar el parametro find con la clave que deseas encontrar, a su vez, colocar los paramtros que desea cambiar (name, lastName o phoneNumber))
```

## URL: /find
```sh
Método HTTP: GET
Busca un contacto en la DB, a partir de cualquier key del model.
Parámetros en el Body.

|    Campo      |   Tipo        |      Descripción       |
| ------------- | ------------- | -------------------    |
|    find       |   String      | Comparación de busqueda de contacto  | 
(Colocar el parametro find con la clave que deseas encontrar, sin importar que key sea.)
```