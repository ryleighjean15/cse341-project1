# Web Services Project
This project is a RESTful web service built with Java that enables the management of user IDs and contacts. The service integrates with MongoDB for database storage, deploys on Render, and provides interactive API documentation using API Docs. It supports the following core functionalities:

## Features

Add Users and Contacts: Create and store user IDs and associated contact details in a MongoDB database.

CRUD Operations:
POST: Add new data such as users and contacts to the database.
PUT: Update existing user or contact data.
DELETE: Remove existing data from the database.

Interactive Documentation: Utilize API Docs to interact with the endpoints, test requests, and explore the API structure in a user-friendly interface.

Database Integration: All data is persistently stored in a MongoDB database, ensuring scalability and reliability.

Deployment:
The service is deployed on Render, ensuring seamless hosting and access.

## Technologies Used

Java: Core programming language for building the service.

MongoDB: NoSQL database for managing user and contact data.

API Docs: Interactive documentation to streamline API exploration and testing.

Render: Cloud platform for hosting and deploying the service.

How to Use
Start the Service: Clone the repository, set up your environment, and run the Java application to start the web service.

## API Endpoints:

### POST:

POST /users: Add a new user to the database.

POST /contacts: Add a new contact for an existing user.

### PUT:

PUT /users/:id: Update details of an existing user by their unique ID.

PUT /contacts/:id: Update details of an existing contact by its unique ID.

### DELETE:

DELETE /users/:id: Delete a user by their unique ID.

DELETE /contacts/:id: Delete a contact by its unique ID.

Access API Docs: Open the /api-docs endpoint to view and test the API interactively.
