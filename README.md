# RNWS

## Prerequisites
You will need to have the following installed:

- [node & npm](https://www.npmjs.com/get-npm/)
- [expo-cli](https://docs.expo.io/get-started/installation/)
- [Set up emulators for both android and iOS](https://facebook.github.io/react-native/docs/getting-started)

## Setup
To run the app locally, simply pull down the repository, cd into /rnws and run:

`npm install` 

to install the project dependencies.

Next, run: 

`expo start` 

to launch the Metro Bundler which will open in your browser and in the terminal. From here select to open the project in the Android (Android Studio is needed) and/or the iOS (XCode is needed) simulator. You will need to setup an Expo account in order to run the project on the simulator or on your physical device (https://expo.io/signup).

### Localization
The app is setup with localiztion in mind. It will use the device's set language and will fallback to english (US) if the language isn't available. To add different languages, add the json file for the language of your choice to `/constants/languages`.

```
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: { welcome: 'Hello' },
  ja: { welcome: 'こんにちは' },
};
```

[Refer to this link for more detailed information](https://docs.expo.io/versions/latest/sdk/localization/)
