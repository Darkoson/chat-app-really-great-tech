import * as actions from "../actions/device-actions";

export const DeviceReducer = (
  state: actions.DevicePayload = {isMobile:true},
  action: actions.UserDeviceAction
): actions.DevicePayload | null => {
  switch (action.type) {
    case actions.UpdateDeviceType:
      return action.payload;
    default:
      return state;
  }
};
