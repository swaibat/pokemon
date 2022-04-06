# Pokemon



## Table of Contents
- [Solution](#Solution)
- [Installation](#Installation)
- [Stacks](#Stacks)
- [Author details](#Author)

### List All Pokemon

- As soon as the application renders i fetch the first 16
- since they don't have required details i fetch individual pokemon details by id
- finally i store the fetched 16 items with their details in redux store

### Show Details of a Pokemon

When a user clicks on a Pokemon i send a request with pokemon id to fetch the details of pokemon
 which returns details and among the details i get:
- Species
- Stats
- Types
- Weight
- Moves
- and the image

### Pagination

the all pokemon api has limit and offset
I created a multiple button pagination and each button had an offset length and whenever each of the button would be pressed it would switch the offset length by plus 16 of which the same process amd steps applies as mentioned in ** List All Pokemon ** 

### Text Search

steps
- When the user initially clicks on the search input I get all the list of pokemons `this isn't expensive since all pokemon data is light weight with two properties only (the total data size for the json object [70.8KB])`;
- after the data is available i wait for the user to type in at-least 3 characters there after i search through the data in my store to find the match;
- by the time the characters are three the data will be less and there  after i make the api call to fetch the matched items details and render them

## Installation
*in order to install this project make sure you have nodejs installed on your local machine*
- clone the repository
 to install the dependencies. run
```sh
 $ npm install
 ```
 start the application by running
```sh
 $ npm run dev
 ```
the app will be accessible on `localhost:3000`


## Stacks
i have used:
- nextJs
- redux
- @reduxjs/toolkit
- babel



## todo
- write test
- make app responsive

## Author
Rumbiiha Swaibu