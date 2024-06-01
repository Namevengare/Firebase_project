# User CRUD Application with React and Firebase

This application is an example of how to use React together with Firebase to implement CRUD (Create, Read, Update, Delete) functionality for a collection of users.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A Google platform for web and mobile app development, providing services such as Firestore (NoSQL database) and Authentication (user authentication).

## Features

- Form to enter new users with name, age, and profession.
- List of existing users retrieved from Firebase Firestore.
- Option to delete users from the list.
- Button to sign out the authenticated user.

## Installation and Setup

1. Clone this repository to your local machine.
2. Set up a project in Firebase and enable the Firestore and Authentication services.
3. Create a `credenciales.js` file in the `src` folder and add your Firebase credentials.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the application in development mode.

## Usage

1. Sign in with your Firebase credentials.
2. Enter the data for a new user in the form and click "Guardar" (Save).
3. You'll see the list of users update with the newly added user.
4. You can delete users from the list by clicking the corresponding "Eliminar" (Delete) button.
5. Click "Cerrar Sesión" (Sign Out) to sign out the authenticated user.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork this repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`.
3. Make the necessary changes and commit your changes: `git commit -am 'Add my new feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request to the main branch of this repository.

## License

This project is licensed under the [MIT License](LICENSE).
