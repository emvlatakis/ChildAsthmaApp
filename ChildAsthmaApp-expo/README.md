# Child Asthma App

A mobile application built with [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/) to help manage and monitor child asthma. The project integrates Firebase Authentication for secure login and account management along with navigation powered by [expo-router](https://docs.expo.dev/routing/).

## Features

- **User Authentication:**  
  - Sign up and login powered by Firebase Authentication.
  - Secure routing based on user state.

- **Routing and Navigation:**  
  - Uses `expo-router` for navigating between authentication and main app screens.
  - Automatic redirection based on authentication status.

- **iOS & Android Support:**  
  - Built with Expo for cross-platform compatibility.
  - iOS build integration uses CocoaPods with Firebase libraries and swift modules.

## Project Structure

- **app/**  
  Contains Expo screens and routing components.
  - `_layout.tsx`: Main layout file that checks authentication, handles navigation, and defines app routes.
  - `index.tsx`: Login screen where users can sign in or create an account.

- **ios/**  
  iOS native configuration files.
  - `Podfile`: Configures CocoaPods, linking Firebase and other native modules.  
    *Note: You may see errors related to `FirebaseAuth/FirebaseAuth-Swift.h` not being found. This is the bug needs to fix
