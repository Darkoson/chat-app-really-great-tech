export enum Device{
  Mobile="mobile",
  Tablet="tablet",
  Desktop="desktop",
}

export const UpdateDeviceType = "USER_DEVICE_UPDATE";
export interface DevicePayload {
  isMobile: boolean;
}
export interface UserDeviceAction {
  type: string;
  payload: DevicePayload | null;
}
