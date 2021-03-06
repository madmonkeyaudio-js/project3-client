
## Table of Contents
* [Overview](#overview)
* [Features](#features)
* [Routes](#routes)
* [Futere Updates](#future-updates)
* [Bugs](#bugs)

### Overview 

Holindary was created with the purpose of planning and saving your holiday experiences. You may currently signup/login to see the holidays recognized nationally in the US, as well as international holidays. You may save these holidays to your profile, add what you'd like to do for each holiday, or create your own custom experience. To learn the site's mechanics, see the information below. 


### Features

Holindary is built as a MERN stack app and styling is provided with Reactstrap. 

### Routes 

/GET /profile - calls the database to display the user's information as well as the associated chosen holidays. 

/GET /holidaySearch - calls the calendary api for holiday information (currently US only in 2019)

/GET /holidayPlanner - calls the database to display the user's holidays as well as todos associated with each holiday.

/POST /auth/signup - signs up and authorizes user. 

/POST /auth/login - authenticates and authorizes user. 

/POST /holidaySearch - passes the selected holiday to the database and stores it. 

/POST /holidayPlanner - passes the input field information to a todo list for a particular holiday. 

/DELETE /profile - deletes a selected holiday from the user's profile. 


### Future Updates

- would include a weather api in the planner, and expand the holiday search to not just the US, but globally. 


### Bugs

Currently the api call within /holidaySearch has duplicate information which should be filtered out. 

The notification when a user has saved a holiday to the database is not obvious, and can be confusing when scrolling through a large search. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

