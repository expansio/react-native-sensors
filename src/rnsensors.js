import { NativeModules } from "react-native";
const {
  RNSensorsGyroscope: GyroNative,
  RNSensorsAccelerometer: AccNative,
  RNSensorsMagnetometer: MagnNative,
  RNSensorsBarometer: BarNative,
  RNSensorsOrientation: OrientNative,
  RNSensorsGravity: GravNative,
  RNSensorsLight:LightNative,
  RNSensorProximity:ProximityNative
} = NativeModules;

if (!GyroNative && !AccNative && !MagnNative && !BarNative && !OrientNative && !GravNative &&!LightNative && !ProximityNative) {
  throw new Error("Native modules for sensors not available. Did react-native link run successfully?");
}

const nativeApis = new Map([
  ["accelerometer", AccNative],
  ["gyroscope", GyroNative],
  ["magnetometer", MagnNative],
  ["barometer", BarNative],
  ["orientation", OrientNative],
  ["gravity", GravNative],
  ['light',LightNative],
  ["proximity",ProximityNative]
]);

// Cache the availability of sensors
const availableSensors = {};

export function start(type) {
  const api = nativeApis.get(type);
  api.startUpdates();
}

export function isAvailable(type) {
  if (availableSensors[type]) {
    return availableSensors[type];
  }

  const api = nativeApis.get(type);
  const promise = api.isAvailable();
  availableSensors[type] = promise;

  return promise;
}

export function stop(type) {
  const api = nativeApis.get(type);
  api.stopUpdates();
}

export function setUpdateInterval(type, updateInterval) {
  const api = nativeApis.get(type);
  api.setUpdateInterval(updateInterval);
}

export function setLogLevelForType(type, level) {
  const api = nativeApis.get(type);
  api.setLogLevel(level);
}
