
# COFFEE SHOP BIO
## Description

This is a website for a organic coffee shop. 


## Technology :  

Back-end : EXPRESS and MYSQL

Front-end : ANGULAR 15, BOOTSTRAP 5


  
  
## Fonctionnality :  

User management :
An administrator has all the rights. Only an administrator has the ability to create another administrator. They can create, modify, or delete a user.

Product management :
An administrator has all the rights (create, modify, and delete). They can even delete products of other users if they do not conform to the website's policies, for example. An image and description can be added to a product.


  
  
## Installation. 

To start you need to create an .env file from the .env.example file. 

By running `docker compose up`, the API and the database will be executed automatically.  
Lauch `npm install`, you just have to launch the front-end with the `npm start` command in /Front.    
You create a user profile, and you can add products for sale.
If you want to change a user to administrator, run this command : `docker exec -it $(docker ps --format "{{.ID}}" --filter "name=coffeeshopbio-mysql"|grep $) bash` or `docker exec -it coffeeshopbio-mysql-1 mysql -u <MYSQL_USER> -b <MYSQL_DATABASE> -p`
Change <MYSQL_USER> and <MYSQL_DATABASE> with the ones in .env file.
then : `UPDATE users SET role='admin' WHERE username='<username>';`



