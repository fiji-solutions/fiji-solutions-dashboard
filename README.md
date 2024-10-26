# Fiji Solutions Dashboard

This project is the frontend SPA for the **Fiji Solutions Dashboard**, designed to provide an interactive and visually appealing user interface for tracking various crypto data, including coin performance and liquidity cycles.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and follows enterprise software standards, including a clean and scalable folder structure, robust linting, and code formatting setups.

## Project Structure

The project has been set up with a modular folder structure to facilitate scalability and maintainability:
```
src/
├── assets/        # Static assets like images, fonts
├── components/    # Reusable UI components
├── context/       # React Context providers
├── hooks/         # Custom React hooks
├── pages/         # Application pages
├── services/      # API service calls
├── styles/        # Global and component-specific styles
├── types/         # TypeScript types and interfaces
└── utils/         # Utility functions
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs ESLint across the codebase to identify and fix any linting issues.  
This helps maintain code quality and adherence to project style guidelines.

### `npm run format`

Formats code according to Prettier rules, ensuring consistent code style across the project.

## Code Quality and Standards

The project includes robust linting and formatting setups:

- **ESLint**: To catch code issues and enforce coding standards.
- **Prettier**: To automatically format code for consistent style.
- **Husky and Lint-Staged**: To run linting and formatting checks on code before each commit.

These tools help ensure clean, maintainable, and consistent code across the project.

## Learn More

You can learn more about Create React App in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Future Plans

The Fiji Solutions Dashboard will include:
- Integration with ECharts for advanced data visualizations.
- Interaction with a Python-based REST API backend.
- Enhanced interactivity and data-driven insights for crypto asset tracking.
