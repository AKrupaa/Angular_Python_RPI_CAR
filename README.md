# Angular_Python_RPI_CAR
Making a simple web site to manage a car movement

Before you begin, make sure your development environment includes Node.js® and an npm package manager.

To check your version, run node -v in a terminal/console window.
To get Node.js, go to nodejs.org.


Step 1: Install the Angular CLI
        npm install -g @angular/cli

Step 2: Run the application
    1. Go to the workspace folder
    2. Launch the server by using the CLI command ng serve, with the --open option.
        cd Angular
        cd AngularApplication
        ng serve --open


If your project is done:
    ng build
    npm install http-server -g
    http-server dist\AngularApplication

If your project is done and you want to make it out of prod mode type:
    ng build --prod
    There is no need to >npm install http-server -g< if you have one
    http-server dist\AngularApplication