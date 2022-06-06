# basic-api-server

## Herkua deployed URL 
[Herkua](https://shams-basic-api-server.herokuapp.com/)

## Action 
[Action](https://github.com/shamssar/basic-api-server/actions/workflows/node.js.yml)

## PullRequist
[PullRequist](https://github.com/shamssar/basic-api-server/pull/1)

## Route:
- get all 

foodRouter.get('/food', getFoods));

- Get One 

foodRouter.get('/food/:id', getOneFood);

- Add 

foodRouter.post('/food', addFood));



- updating 

foodRouter.put('/food/:id', updateFood);

- deleting 

foodRouter.delete('/food/:id', deleteFood);



## Testing: 
### server.test.js tests:
- invalid route
- invalid method
- test if can add a food 
- test if can get all foods 
- test if can get one food
- test if can update a food
- test if can delete a food 
- after all the tests are done

## Deploy:
* ACP
* All Checked done
* Deploy on Herkuo.
