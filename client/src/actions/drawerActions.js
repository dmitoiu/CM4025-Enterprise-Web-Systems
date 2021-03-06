import {DRAWER_OPEN, DRAWER_CLOSE} from "../constants/drawerConstants";

const selectDrawerOpen = (value) => async (dispatch) => {
  try{
    dispatch({
      type: DRAWER_OPEN,
      value
    })
  } catch (error) {
    console.log(error);
  }
}

const selectDrawerClose = (value) => async (dispatch) => {
  try{
    dispatch({
      type: DRAWER_CLOSE,
      value
    })
  } catch (error) {
    console.log(error);
  }
}

export {selectDrawerOpen, selectDrawerClose};