<div align="left">
  <h1><strong>Cypress express mark</strong></h1>
</div>

## Index

- [About](#about)
- [How to execute the project](#how-to-execute-the-project)
- [QAx Directories](#qax-directories)
- [Preparing the test environment](#preparing-the-test-environment)
- [Run tests with command line](#run-tests-with-command-line)
- [Used Technologies](#tecnologias-utilizadas)
- [How to contribute](#como-contribuir)

## About

### Importance of automated testing:

- Reduces the workload of regression testing.
Many companies still perform tests manually.

### Cypress:

- Automated JavaScript testing framework for web applications.
- Tests anything that runs in the browser.
- Popular among developers and QAs on frontend teams.

### Supported technologies:

- Node.js, React, Vue, Backbone, Redux, Express, Angular.


[Return to Index](#index)

## How to execute the project

1. Clone the project from GitHub ````https://github.com/felipeam10/QAx````
2. In your preference IDE, open the project from the directory it was cloned to. I sugest that you use VS Code.
3. In your PC needs to node.js version 18.20.4 (stable and recommended version).
4. Install Yarn too (in CMD open how administrator: type "corepack enable". After return to terminal and type "yarn --version"). If return the version, it's worked. 
5. You need too Windows Terminal. Windows Terminal opens with PowerShell by default.
6. Too install Git for Windows + Bash.

[Return to Index](#index)

## QAx Directories

1. Creating the main folder:

- Create a folder called QAx in the ````C:```` directory with the command: ````mkdir QAx````

2. Creating subfolders:

- Create two subfolders inside QAx:
   - ````mkdir apps```` --> "apps": To store the software targeted for training.
   - ````mkdir projects```` --> "projects": To store automation projects and others.

3. Create a Directory for the Project:
   - In the terminal, create a directory for the project and navigate to it.
   - Example: ````mkdir Cypress-Express-Mark```` && ````cd Cypress-Express-Mark````.

4. Initialize the Node.js Project:
   - Initialize the Node.js project with the ````yarn init```` command.
   - Answer the questions to configure package.json, if applicabe.

5. Install Cypress as a Development Dependency:
   - Install Cypress with the ````yarn add cypress -D command````.

6. Open Cypress:
   - After installation, open Cypress with ````yarn cypress open````.

[Return to Index](#index)

## Preparing the test environment

1. Download and Extraction:
   - Download the ````mark-dev-build.zip```` file that is already in the ````ressources```` folder of this project that you cloned.
   - Unzip the file and rename the folder to MarkL (capital L, representing 50 in Roman numerals).


2. Moving Folders:
   - Move the MarkL folder to the ````C:\QAx\Apps```` directory.
   - Delete the .zip file for your organization, if you find it necessary.


3. Accessing the Terminal:
   - Open the terminal and navigate to the MarkL folder using the command ````cd /c/X/Apps/MarkL````.
   - Check the API and web subfolders.


4. Installing API Dependencies:
   - Navigate to the API folder with cd API.
   - Install Node.js dependencies with ````npm install````.
 
  
5. Initializing the Database:
   - Run ````npm run db:init```` to initialize the SQLite database.


6. Running the API:
   - Put the API online with ````npm run dev````.


7. Configuring the Web Application:
   - Open a new terminal window and navigate to the web folder with ````cd /c/QAx/Apps/MarkL/web```` .
   - Install web application dependencies with ````npm install````.
   - Put the web application online with ````npm run dev````.


8. Accessing the Application:
   - Access the application in the browser at ````localhost:3000````.

[Return to Index](#index)

## Run tests with command line

- For run the regressive tests ````yarn cypress run ````.
- For run in other navigator ````yarn cypress run --browser chrome````.

## Run tests with command line for generate Allure report

- Before, in file cypress-express-mark/package.json add:

```.json
  "@shelex/cypress-allure-plugin": "^2.40.2",
  "allure-commandline": "^2.32.0",
```

- And in file ‎cypress-express-mark/cypress.config.js add:

```.javascript
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
        apiUrl: 'http://localhost:3333'
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
};
```
- For run the regressive tests ````yarn cypress run --env allure=true````.
- For build report ````yarn allure serve````.

## Technologies Used

Before starting, make sure you have the Java environment correctly configured on your machine. Below you have a list of the technologies that were used in the project development process.

| Technology           | Version        |
|----------------------|----------------|
| Operating System     | Windows 10     |
| Programming Language | Javascript     |                 
| Database             | SQLite         |
| IDE                  | VS Code 1.96   |

[Return to Index](#index)

## Contributions

If you have a contribution that could improve this project, please open an issue or pull request by following the steps below.

1. Fork the project
2. Create a branch for your modification (`git checkout -b feature/yourFeatureName`)
3. Commit your changes (`git commit -m 'Add some yourFeatureName'`)
4. Push to the branch (`git push origin feature/yourFeatureName`)
5. Open a pull request

[Return to Index](#index)

