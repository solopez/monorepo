

# Angular & NestJS web app with NX

## Demo
https://gamer-app-api.herokuapp.com/

## Local serving
npm run serve-all (will serve api + web app both)

### Serve individually:

Front: nx serve gamer 

Back: nx serve api

## Testing
npm run test (will run all)
### Jasmine
nx test product-detail

nx test product-list

nx test search

### Jest

nx test api

## Angular Universal - Server Side Rendering
npm run build:ssr

npm run prerender