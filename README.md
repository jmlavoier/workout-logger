# Workout Logger Challenge

**Demo:** [https://jmlavoier.github.io/workout-logger/](https://jmlavoier.github.io/workout-logger/)

## Desafio
Você deve desenvolver o front-end de um registro de atividades físicas.

### O projeto deverá deve ter as seguintes features:
- Criação de itens de workout
- Listagem dos itens de workout
- Remoção de item de workout
- Um total de horas exercitadas

### Abaixo segue uma sugestão de mock:
[https://www.evernote.com/shard/s6/sh/6db363ef-f8c1-4d8f-b619-b87889953cdc/ea1c6f7ebbc930e95f8012687fea9be6](https://www.evernote.com/shard/s6/sh/6db363ef-f8c1-4d8f-b619-b87889953cdc/ea1c6f7ebbc930e95f8012687fea9be6)

### Orientações:
- O mock é apenas uma sugestão, novas ideias são bem vindas, mas não se esqueça das 4 principais funcionalidades!
- Use HTML5, CSS3 (preferencialmente usando SASS) e Javascript (bem estruturado e modularizado) com algum framework moderno como Angular, React ou Vue
- Você pode usar Coffeescript ou ES6 transpilers
- Crie seus próprios componentes e estilos, evite usar alguma biblioteca de UI, nos mostre seus conhecimentos
- Apesar de uma interface bonita ser importante, lembre-se da usabilidade (validações, navegação, posicionamento dos elementos, etc)
- Você não precisa de um backend, podendo implementar no browser usando `localStorage`
- Apesar da aplicação não ser muito complexa, utilize algum recurso para gerenciamento do estado da aplicação. Ex: `Redux`
- Use o Git e crie um repositório privado no Bitbucket ou no Github
- Testes são bem vindos (fazem a diferença)

## The project
It's a component based applictation made in React with its ecosystem to log workouts.

### Stack used
- JavaScript - ES6+ (Babel);
- UI components - React 16;
- Component documentation - Storybook;
- State management - Redux, React Redux;
- CSS preprocessor - Sass;
- Modules - Webpack, CSS Modules;
- Unit tests - Jest, Enzyme;

### Knowledge applied 
- React Patterns and Best Practices
- My Own UI (no Material UI or any other lib)
- TDD

### Architecture

```
|- src/
   |- components
   |- containers
   |- store
   |- css
```
### Components
I have started to think in components and create this doc to figure them out [https://docs.google.com/document/d/1TUoup_G8vRHrL5ss8LMCy4Q5m8LPNifeQ5MC9Nc3ooI/edit?usp=sharing](https://docs.google.com/document/d/1TUoup_G8vRHrL5ss8LMCy4Q5m8LPNifeQ5MC9Nc3ooI/edit?usp=sharing)

### Presentational components
First of all I created the components module containing all presentational components. Only these components can be styled. These components are leaned on their css and test files.

```
|- components
    |- Input
        |- index.js
        |- Input.js
        |- Input.css.js
        |- Input.test.js
```

### Containers components
The containers folder has to organize only the containers components to map the redux states and dispatch to props. Here you should create the actions, reducers, constants, sagas. And the most important, the component that will receive the props.

```
|- containers
    |- Form
        |- Form.js
        |- container.js
        |- index.js
        |- redux
            |- actions.js
            |- actions.test.js
            |- constants.js
            |- reducer.js
            |- reducer.test.js
```

### Store
The store folder was created to combine the "thousands and thousands" reducers of the applications and apply any middleware.

### Reducers

```
form: {
  timeSpent: {
    value: <String>,
    isValid: <Boolean>
  },
  workoutType: {
    value: <String>,
    isValid: <Boolean>
  },
  date: {
    value: <String>,
    isValid: <Boolean>
  },
}

workoutList: {
  orderBy: {
    field: <String>,
    asc: <Boolean>
  },
  items: [
    {
      id: <String>
      timeSpent: <String>,
      workoutType: <String>,
      date: <String>,
    },
    ...
  ]
}
```

### Css
And finally css is where the general styles are introduced to reset the application, and some root configurations for sass like _variables and _mixins.

## Get started 
- `yarn start` - *run the project in development mode*
- `yarn watch` - *watch the project to build the project in development mode*
- `yarn test` - *run tests*
- `yarn test:watch` - *watch the tests*
- `yarn test:cov` - *see the coverage*
- `yarn storybook` - *run storybook server to see the styled components*
- `yarn lint` - *run lint*
- `yarn lint:fix` - *run and fix some lint issues*


