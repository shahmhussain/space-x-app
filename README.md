# Space X Project

## Running the application

npm i
npm start

## Running tests

npm run test

## Running test with code coverage

npm run test-coverage

## Approach:

- React, TypeScript, Create React App
- Jest and React Testing Library, I tested the component behaviours and demostrate how to test the Redux store for Redux Toolkit.
  I have 100% coverage on everything except store.ts and LaunchApi.ts

- Accessibility, the web page can be navigated through via the tab button. I used aria tags and used HTML 5 tags as this has out of the box functionality. Ag Grid also provides hotkey support for improved accessiblity support.

Optional Extras

- Redux (Redux Toolkit) : For handling API state requests, I deliberately overengineered this, I could have made the API call in app.tsx but I wanted to use Redux Toolkit in this project and show how to test the Redux Store
- Material-UI
- Ag-grid : Used for table sorting, filtering and pagination functionality, this also has good accessiblity support out of the box

Fun Additional Extras

- SCSS: Demonstrating basic BEM principles
- CSS transitions for pages
