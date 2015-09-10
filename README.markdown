##NativeStarter
> A simple React Native starter project that uses the Walmart API to return and display product data from a barcode scan

###Getting Started

- Install React Native following the instructions detailed here [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)

- Clone this repo and then run `npm install`

- Open XCode and open the following file:

`/iOS/NativeStarter.xcodeproj`

- Inside of XCode, run the project.

- Run `npm run webpack` in the root project directory to watch for changes

> Note: Barcode scanner doesn't work on the simulator. In order to run from your device follow the instructions inside `/iOS/NativeStarter/AppDelegate.m`

> Note: This app hits the API directly as opposed to using the `walmart` module because of a conflict with the internal implementation of fetch in `react-native`. This is subject to change pending an update to the `walmart` module to remove the conflict.
