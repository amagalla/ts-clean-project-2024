# Docker React Node Boilerplate

Welcome to the Docker React Node Boilerplate! This boilerplate helps you set up a development environment for your React and Node.js application using Docker. Follow these steps to get started:

## Table of Contents
- [1. Update MySQL Settings](#1-update-mysql-settings)
- [2. Create .env File](#2-create-env-file)
- [3. Initialize Tables](#3-initialize-tables)
- [4. Start the Application](#4-start-the-application)
- [5. Access the Application](#5-access-the-application)
- [6. Connect to MySQL](#6-connect-to-mysql)
- [7. Create .env](#6-create-env)
- [8. Run Server Locally](#8-run-server-locally)
- [9. Connect to Local MySQL](#9-connect-to-local-mysql)
- [10. Build React for Prod](#10-build-react-for-prod)

---

### 1. Update MySQL Settings

In the `docker-compose.yml` file, make sure to update the MySQL settings to match your requirements.
In `knexfile.js` config file, make sure to update connections to match Mysql settings.

---

### 2. Create .env File

Create a `.env` file in the root directory of your project. Create server/database environment variables you want to use for production or local testing.

---

### 3. Initialize Tables

Use knex command and migrations will be setup at `/app/lib/knex/migrations`

---

### 4. Start the Application

To start the application, run the following command:

```shell
npm run serve
```
### 5. Access the Application

You can access the application in your web browser:

- **Client:** [http://localhost:8080](http://localhost:8080)
- **Server:** [http://localhost:3000](http://localhost:3000)
- **Swagger:** [http://localhost:3000/admin/swagger](http://localhost:3000/admin/swagger)

### 6. Connect to MySQL

To connect to MySQL, use the following command:

```shell
npm run mysql
```

Enter your password from docker-compose when prompted

### 7. Create env

To connect to MySQL locally

Create a .env file on root directory
Include the below configs and update values
(Make sure you have mysql installed locally <SEE STEP 8>)

```shell
DB_HOST = localhost
DB_PORT = 3306 <local-db-port>
DB_USER = <your-local-non-root-user>
DB_PASSWORD = <local-user-password>
DB_NAME = <give-db-a-name>
```

### 7. Run Server Locally

Make sure to create local MySQL database prior accounting to .env config

```shell
npm run dev
```

### 8. Connect to Local MySQL

To connect to local, make sure you download MySQL globally (Linux).

```shell
sudo apt install mysql-server
sudo systemctl enable mysql

sudo mysql -u root
```
### 9. Build React for Prod

Run this command to build React to run on node server

```shell
npm run build
```

Enjoy using this as your base for Dockerized node projects!

Happy coding! 👨‍💻👩‍💻