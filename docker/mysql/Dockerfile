#Dockerfile
FROM mysql:8.0.12

COPY mysql.cnf /etc/mysql/conf.d/mysql.cnf

CMD ["--default-authentication-plugin=mysql_native_password", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"];
