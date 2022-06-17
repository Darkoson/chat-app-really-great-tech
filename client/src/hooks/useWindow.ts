import { useEffect, useState } from "react";
import { Device } from "../store/actions/device-actions";

export interface WindowDimension {
  height: number;
  width: number;
  device: Device;
}

const useWindow = (): WindowDimension => {
  const [dimension, setDimension] = useState<WindowDimension>({
    height: 0,
    width: 0,
    device: Device.Mobile,
  });

  const handleResize = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let device =
      width < 400
        ? Device.Mobile
        : width < 769
        ? Device.Tablet
        : Device.Desktop;

    setDimension({ height, width, device });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimension;
};
export default useWindow;
