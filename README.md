# Github React Dashboard
> This is a Github dashboard made with Nextjs 

## How to run
```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Functional requirements

- [x] Must have a title
- [x] Must have a search page
  - [x] The search page must have a search bar
    - [x] When the search value is updated it should also update the results
  - [x] The search page must have a grid to show the search results
    - [x] The search results must render a component with photo, name, username and about
    - [x] When clicked, must navigate to user profile page
  - [ ] The search page must have a 404 status if have any search
  - [x] The empty state of the search page must be empty
- [x] Must have a user profile page
  - [x] The user profile must have a component with photo, name, username and about
  - [x] The user profile must have a list with all the user repositories
    - [ ] The user repository item must be a component with:
      - [x] Title
        - [x] When clicked must redirect to github repo page
      - [x] Languages*
      - [x] Description
      - [x] Stars
  - [ ] The user profile must have a go back button 

*TODO: remove badge if repo doesnt have language

## Technical requirements

- Application
    - [x] Server-side rendering
    - [x] All the requests must be performed by native fetch
    - [x] Reusable user card component
        - [x] Click listener
        
- Search page
    - [x] Debounce at search
    - [ ] The search query must be encoded (?)
    - [x] A grid of user cards
        - [x] When clicked, navigate to profile page
    - [ ] Handle errors

- Profile page
    - [ ] Handle errors
    - [x] Reusable repository card component
        - [x] Open new tab when clicked


## Testing

- [ ] Unit tests
    - [ ] BFF
    - [ ] Webapp
        - [ ] Services
        - [ ] Components
- [ ] Snapshot tests
