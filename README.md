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

- [ ] Must have a title
- [ ] Must have a search page
  - [ ] The search page must have a search bar
    - [ ] When the search value is updated it should also update the results
  - [ ] The search page must have a grid to show the search results
    - [ ] The search results must render a component with photo, name, username and about
    - [ ] When clicked, must navigate to user profile page
  - [ ] The search page must have a 404 status if have any search
  - [ ] The empty state of the search page must
    - [ ] Show the first 10 users from github api 
    - [ ] or be empty
- [ ] Must have a user profile page
  - [ ] The user profile must have a component with photo, name, username and about
  - [ ] The user profile must have a grid list all the user repositories
    - [ ] The user repository item must be a component with
      - [ ] Title
        - [ ] When clicked must redirect to github repo page
      - [ ] Languages
      - [ ] Description
      - [ ] Stars
  - [ ] The user profile must have a go back button 


## Technical requirements

- Application
    - [ ] Server-side rendering
    - [ ] All the requests must be performed by native fetch
    - [ ] Reusable user card component
        - [ ] Click listener
        
- Search page
    - [ ] Debounce at search
    - [ ] The search query must be encoded
    - [ ] A grid of user cards
        - [ ] When clicked, navigate to profile page
    - [ ] Handle errors

- Profile page
    - [ ] Handle errors
    - [ ] Reusable repository card component
        - [ ] Open new tab when clicked


## Testing

- [ ] Unit tests
    - [ ] BFF
    - [ ] Webapp
        - [ ] Services
        - [ ] Components
- [ ] Snapshot tests
