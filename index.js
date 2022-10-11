import sensors from "./src/sensors";
export { setUpdateInterval as setUpdateIntervalForType, setLogLevelForType } from "./src/rnsensors";

export const SensorTypes = {
  accelerometer: "accelerometer",
  gyroscope: "gyroscope",
  magnetometer: "magnetometer",
  barometer: "barometer",
  orientation: "orientation",
  gravity: "gravity",
  light: "light",
  proximity:"proximity"
};

export const { accelerometer, gyroscope, magnetometer, barometer, orientation, gravity ,light, proximity} = sensors;
export default sensors;
