// This function (our reducer) will be called when an 
// action is dipatched. 
const koalaList = (state = [], action) => {
  switch (action.type) {
      case 'PUT_KOALAS':
          return action.payload;
      default:
          return state;
  }
}

export default koalaList;