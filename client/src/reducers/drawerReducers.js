import {DRAWER_OPEN, DRAWER_CLOSE} from "../constants/drawerConstants";

const drawerReducer = (state = {}, action) => {
  if(action.type.match(DRAWER_OPEN)) {
    return {drawerOpen: true};
  } else if(action.type.match(DRAWER_CLOSE)) {
    return {drawerOpen: false};
  } else {
    return state;
  }
}

export {drawerReducer}
