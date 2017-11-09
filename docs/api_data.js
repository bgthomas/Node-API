define({ "api": [
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forename",
            "description": "<p>forename of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Date/time the User was created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"Ben@ben.com\",\n  \"forename\": \"Ben\",\n  \"surname\": \"Thomas\",\n  \"created\": \"2017-11-05T13:18:02\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Ben/Documents/Node-API/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Request All Users",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forename",
            "description": "<p>forename of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>surname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Date/time the User was created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"Ben@ben.com\",\n  \"forename\": \"Ben\",\n  \"surname\": \"Thomas\",\n  \"created\": \"2017-11-05T13:18:02\"\n}\n{\n  \"email\": \"pippa@pippa.com\",\n  \"forename\": \"Pippa\",\n  \"surname\": \"Thomas\",\n  \"created\": \"2017-11-05T13:18:02\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Ben/Documents/Node-API/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Add new User",
    "name": "addUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "forename",
            "description": "<p>Users forename.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Users surname.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\":\"User created!\",\n  \"user\": {\n      \"email\": \"Ben@ben.com\",\n      \"forename\": \"Ben\",\n      \"surname\": \"Thomas\",\n      \"created\": \"2017-11-05T13:18:02\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Ben/Documents/Node-API/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "name": "deleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: 'User deleted'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Ben/Documents/Node-API/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/:id",
    "title": "Update User",
    "name": "updateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Users email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "forename",
            "description": "<p>Users forename.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "surname",
            "description": "<p>Users surname.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: 'User updated!',\n  \"user\": {\n      \"email\": \"Ben@ben.com\",\n      \"forename\": \"Ben\",\n      \"surname\": \"Thomas\",\n      \"created\": \"2017-11-05T13:18:02\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Ben/Documents/Node-API/controllers/user.js",
    "groupTitle": "User"
  }
] });
