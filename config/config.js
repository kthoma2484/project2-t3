module.exports = {
  "development": {
<<<<<<< HEAD:config/config.json
    "username": "root",
<<<<<<< HEAD:config/config.json
    "password": "",
    "database": "datababydb",
=======
    "password": "sqlpassword",
    "database": "namesdb",
=======
    "username": "process.env.DEV_DB_USER",
    "password": "process.env.DEV_DB_PASSWORD",
    "database": "testdb",
>>>>>>> 45370f02e204805049d5a254bb5326c24147f812:config/config.js
>>>>>>> master:config/config.js
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
