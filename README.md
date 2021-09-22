# Spacestagram 🚀

Spacestagram is my entry for the Shopify Winter 2022 Front End Internship. I built Spacestagram 🚀 using Typescript, React and Redux Toolkit.

- [Gallery](#gallery)
- [Features](#features)
- [Design Notes](#design-notes)
- [Technology Used](#technology-used)
- [Available Scripts](#available-scripts)
  - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
    - [`yarn build`](#yarn-build)
    - [`yarn eject`](#yarn-eject)

## Gallery
<img width="400" src="https://user-images.githubusercontent.com/78933339/134271852-536382fb-9c1a-438d-8198-2584c7cd4ac0.png" />
<img width="400" src="https://user-images.githubusercontent.com/78933339/134271856-09766b47-4f48-4bb6-8483-3050057e5f1f.png" />
<img width="400" src="https://user-images.githubusercontent.com/78933339/134271859-4b151e12-8ac7-4814-843e-50d17773b5a1.png" />

## Features

Users are able to see the last month's worth of Apod Pictures via the homepage. Users can view posts form previous months using the search page and date picker. User's have the option of loading images in either Standard or High Definition, as well as a darker theme.

## Design Notes

I decided to use Instagram as an inspiration when creating my wireframes. The wireframes and components used for this project can be viewed [here on Figma](https://www.figma.com/file/j3GYMw236yOwVpjwpZOyrt/Spacestagram?node-id=1%3A6). Due to issues with the NASA APOD Api concerning search and image rankings the final product varied a bit from my original wireframes.

## Plans for Future Updates

- Add stronger type annotations for better type safety. 
- Address accessibility concerns surrounding screenreaders. 
- Update and enhance animations. 

## Technology Used

This Project Made use of the following:

- React
- @Redux/ToolkitJS
- Typescript
- SCSS
- Redux Persist

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
