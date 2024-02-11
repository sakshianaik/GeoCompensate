## src/assets:
    1) fonts:
    - Contains all the different font styels which will be used while making the app
    2) images:
    - all images used inside the app goes here

## src/components:
    - it contains the resuable components like button
    1) Atoms: 
    - the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts.
    2) Molecules: 
    - are the composition of one or more components of atoms.
    3) Organisms: 
    - the combination of molecules that work together or even with atoms that compose more elaborate interfaces.

## src/naviagatios:
    - helps to navigate around different screens using routing

## src/services:
    -> api.js :  Module for making API requests
    -> auth.js : Module for handling authentication
    -> storage.js : Module for handling local storage

## src/utils:
    -> helpers.js : We add all our utility/helper methods that can be shared across our entire project. Whenever you come across situations where you get caught repeating code is a good situation to create a util/helper.

## Structure of the src folder:-

src/
│
├── assets/           # Static assets such as images, fonts, etc  
│   ├── images/         
│   └── fonts/   
        ├── colors.js
        ├── index.js
        ├── spacing.js
        └── typography.js     
│
├── components/         # Reusable UI components
│   ├── atoms       
│   ├── molecules
|   └── organisms
│
├── navigation/         # Navigation configuration and setup
│   ├── AppNavigator.js    # Root navigator component
|
|
├── screens/            # Screen components representing different screens of the app
│   ├── HomeScreen.js
│   ├── Profile.js  
│   └── Login.js
|
│
├── services/           # Services such as API clients, analytics, etc.
│   ├── api.js          
│   ├── auth.js
│   └── services.js 
│
|
├── utils/              # Utility functions
│   └── helpers.js      
│
|
└── App.js              # Entry point of your application