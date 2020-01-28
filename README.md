# BickDejtaApp

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Project structure

Components are located inside `components` directory. To generate new component use `ng g c components/<name>`

Services are located inside `services` folder. To generate new component use `ng g s services/<name>`

## Links

[Angular Material](https://material.angular.io/components/categories)

[Angular Docs](https://angular.io/docs)

[Trello Tasks](https://trello.com/b/z7iMum9w/bick-dejta-app)

## Adding Material Module

If module of a Material Component is not added, add it to `material.module.ts` inside `shared` directory.

You can find import path in *API* section of [component's](https://material.angular.io/components/form-field/overview) page.

### Importing:

`import {MatFormFieldModule} from '@angular/material/form-field';` at the to of the `material.module.ts`

Add `MatFormFieldModule` to `imports` and `exports` of the `material.module.ts`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
