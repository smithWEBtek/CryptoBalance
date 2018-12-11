// FETCH "POST" REQUEST FOR  creating portfolio
export const postPortfolio = (url, data)=>{
  console.log("postPorfolio data:", data)
  return fetch(url,{
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
}

// NEED TO RE WRITE THIS.
export const postHolding = (url, data)=>{
  console.log("postHolding data:", data)
  return fetch(url,{
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
}

// Need to add reducer and also POST data to back end
export const addPortfolio = (portfolio) => {
  console.log("Action addportfolio:", portfolio)
  return dispatch => {
    postPortfolio("http://localhost:3001/portfolios", portfolio)
    .then(response => dispatch(  {
        type: 'ADD_PORTFOLIO',
        payload: response
      }))
  }
}

export const addHolding = (holding) => {
  console.log("holding in Acton to add:", holding)
  const url = "http://localhost:3001/portfolios/" + holding.portfolio_id + "/holdings"
  return dispatch => {
    postHolding(url, holding)
    .then(response => dispatch(  {
        type: 'ADD_HOLDING',
        payload: response
      }))
  }
}

export const getPortfolios = () =>{
  return dispatch => {fetch('http://localhost:3001/portfolios')
  .then(response => response.json())
  .then(portfolios => dispatch({
    type: "GET_PORTFOLIOS",
    payload: portfolios
  }))
}
}


export const getHoldings = (portfolio_id) =>{
  const url = "http://localhost:3001/portfolios/" + portfolio_id 
  return dispatch => {fetch(url)
  .then(response => response.json())
  .then(portfolios => dispatch({
    type: "GET_HOLDINGS",
    payload: portfolios
  }))
}
}
