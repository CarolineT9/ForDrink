# Drink Recipes App

This project is a drink recipe application using Vue.js and Pinia for state management. The app allows users to search for recipes, view their favorites, and receive notifications for errors or success.

## Features
### 1. Drink Search
On the home page (Home.vue), the user can search for drinks by entering an ingredient name and selecting a category. The form sends the search data to the drinks store, which makes a request to the API and returns the corresponding recipes.
### 2. Favorites
The Favorites.vue component allows the user to view their favorite drinks. Favorites are managed through the favorites.js store, which uses Pinia to handle the state. Users can add or remove drinks from their favorites list.
### 3. Drink Modal
When a user clicks on a drink, a modal is displayed with the selected drink's details. The modal also offers the option to add or remove the drink from the favorites, depending on its current state.
### 4. Notifications
The notification system (Notifications.vue) is used to display success or error messages to the user. For example, if a required field in the search form is left empty, an error notification is shown.

## Setup and Installation

### 1.Clone the repository:
```
git clone https://github.com/CarolineT9/ForDrink.git

```

### 2.Navigate to the project directory:
```
cd ForDrink

```

### 3.Install the dependencies:
```
npm install

```
### 4.Run the project:
```
npm run dev

```

The app will be available at http://localhost:3000.

## How It Works
### Data Flow
- Search Form: The form in Header.vue captures the search data and calls the getRecipes function in the drinks.js store. If the data is valid, it makes a request to the API and returns matching drink recipes.

- Favorites Page: The Favorites.vue page displays all the drinks the user has marked as favorites. These drinks are managed in the favorites.js store.
- Drink Modal: When a user clicks on a drink, the modal.js store controls the modal's visibility and manages the button text for adding/removing favorites.

### Notifications

The notifications.js store manages the success or error messages and displays them through the Notifications.vue component. For example, if the user tries to submit the search form with empty fields, an error notification is shown.

### Technologies Used

- Vue.js: JavaScript framework for building user interfaces.
- Pinia: State management library for Vue.js based on stores.
- Tailwind CSS: Utility-first CSS framework for building fast, responsive designs.
- Heroicons: A set of SVG icons used in the interface.

### Contributing
1. Fork this repository.
2. Create a branch for your feature (git checkout -b feature/new-feature).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to your branch (git push origin feature/new-feature).
5. Open a Pull Request.

### License
This project is licensed under the MIT License - see the LICENSE file for details.