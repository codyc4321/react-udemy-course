console.clear();

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amountCollected) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountCollected: amountCollected
    }
  }
}

// reducers
const claimsHistory = (oldListOfClaims=[], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...oldListOfClaims, action.payload]
  }

  return oldListOfClaims;
};

const accounting = (bagOfMoney=100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountCollected;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
}

const policies = (listOfPolicies=[], action) {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
  return listOfPolicies;
}

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})

const store = createStore(ourDepartments);

store.dispatch();
