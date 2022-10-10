import sensors from "./src/sensors";
export { setUpdateInterval as setUpdateIntervalForType, setLogLevelForType } from "./src/rnsensors";

export const SensorTypes = {
  accelerometer: "accelerometer",
  gyroscope: "gyroscope",
  magnetometer: "magnetometer",
  barometer: "barometer",
  orientation: "orientation",
  gravity: "gravity",
  light: "light"
};

export const { accelerometer, gyroscope, magnetometer, barometer, orientation, gravity ,light} = sensors;
export default sensors;
