# RickMorty

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Instructions:
1. Setup Angular CLI in your local repository using npm install -g @angular/cli
2. Create your workspace and angular application through CLI using ng new RickMorty
3. Add Dependencies like bootstrap in index.html file head.
4. Install additional dependencies using npm install @types/lodash
5. Run the application using ng-serve (use ng-serve --prod to run in prod mode).

- Added component named as dashboard component to display data
- added service as dashboard service to call web API
- Added pipe in common folder for sorting data

- Used tslint.json and LESS beautify as tools 'Standard Linting processes should be set as part of local dev environment which should run with build process.'
- Used Angular CLI (which includes webpack) for 'Some bundling package should be used to deliver the static assets for the web page, preferably Webpack.'

Have features like:
- Visually interactive responsive design listing all the characters.
- Mobile should be of 2 column design while desktop and Tablet should have 4 columns.
- Make sure the standard Web development NFRs are taken care.
- Implement Sort feature (to filter through ‘id’ in ascending and descending order).
- Implement Filters to filter out data based on Species and Gender.

Stack Used:
- HTML 5
- LESS
- Angular 8
- Bootstrap 4

**Screenshots available in Screenshots folder of git
