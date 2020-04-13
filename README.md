This project is made with React and Redux unit tested with with Enzyme Tests and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Components are structured into atoms, molecules and organisms, answers to all questions are kept in redux store and question structure comes from a json file (which can be moved to api side to be served as json)

## Task: 
Write a simple React component that can render a series of questions and responses
from text inputs, number inputs and dropdowns depending on the props provided, as well as a
“Done” button once all questions are complete.
● This should be a custom component that doesn’t use an HTML <form>
● Don’t use any external form library.
● Please use web React to render your component, rather than React Native.
You should make clear the structure of the props your component expects. In particular, we
would expect to be able to configure via props:
● The questions asked, the data type / validation of any answers
● The existing user data at the start of the conversation
● The conditions under which to ask a particular question
You can use the following as your test case:
● What is your first name?
○ Expects a string
● How old are you?
○ Expects a number
○ Should be >= 18 and < 65 years old
● Do you have a significant other?
○ Expects True / False
● What is your significant other’s name?
○ Expects a string
○ Only asked if the answer to the previous question is true

Questions should appear one by one, in sequence. A question should appear once the answer to
the previous question is complete and valid, triggered by onBlur. Once a field has been touched,
it should be highlighted if it is invalid - how you show this is up to you.
The “Done” button should appear when the conversation is otherwise complete, and on press
should show a simple success message.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
