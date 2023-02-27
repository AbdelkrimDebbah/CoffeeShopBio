FROM mysql:latest


ENV MYSQL_ROOT_PASSWORD=root
ADD bd_tables_api_rest.sql /docker-entrypoint-initdb.d

EXPOSE 3306