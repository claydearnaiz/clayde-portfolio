# React Portfolio Website

This is a simple portfolio website built with React.js and Tailwind CSS.

## Setup and Run

1.  **Clone the repository (or ensure you have the files).**

2.  **Install dependencies:**
    Open your terminal in the project root directory and run:
    ```bash
    npm install
    ```

3.  **Initialize Tailwind CSS (if not already done by `npm install` scripts, typically handled by CRA):**
    In some setups, you might need to ensure Tailwind is processed. `react-scripts` usually handles this.
    If you encounter issues with Tailwind styles not applying, you might need to create a `postcss.config.js` file:
    ```javascript
    // postcss.config.js
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    };
    ```
    And ensure your `tailwind.config.js` and `src/index.css` are correctly set up (as provided in the generated code).

4.  **Start the development server:**
    ```bash
    npm start
    ```
    This will open the app in your default web browser, usually at `http://localhost:3000`.

## Customization

*   **Personal Information**: Update your name, tagline, contact details, education, skills, and project information in `src/App.js`.
*   **Styling**: Modify Tailwind CSS classes in the respective component files (`src/components/*.js`) to change the appearance.
*   **Images/Assets**: Place any images in the `public/images` folder (create it if it doesn't exist) and reference them like `/images/your-image.jpg`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it. 