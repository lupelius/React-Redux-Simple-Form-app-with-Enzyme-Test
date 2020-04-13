import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import { middlewares } from '../createStore';

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
export const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`);

/* 
*  obj = {'name': 'Patrick', 'age': 8 },
*  usage: filter(obj,"age",">",10)
*/
export const filterValidation = (obj,filterName,filterCondition,filterParameter) => {
  try{
    const comparisonOperatorsHash = {
        '<': (a, b) => a < b,
        '>': (a, b) => a > b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
        '===': (a, b) => a === b,
    };
    const comparisonOperator = comparisonOperatorsHash[filterCondition];

    if (comparisonOperator === undefined) {
        // throw error here
        throw new Error("Invalid operator");
    }
    
    return comparisonOperator(parseInt(filterParameter),obj[filterName]);
  } catch (e) {
    console.log(e);
  }
};

export const filterRegexp = (regexpString, filterParameter) => {
  var re = new RegExp(regexpString);
  return re.test(filterParameter);
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};