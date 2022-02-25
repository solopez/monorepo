

# Angular & NestJS web app with NX

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

## Server Side Rendering - Angular Universal
npm run build:ssr

npm run prerender