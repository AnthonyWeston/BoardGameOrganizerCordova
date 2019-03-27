# Board Game Organizer

This is a simple app designed to catalog and organize your collection of board games. The app is written using Cordova and Angular with Angular Material components. Currently this app only supports Android and web devices.

# Building and Running the App

To run the app in a browser window:
 - Navigate to the angular directory inside the project.
 - Run `ng serve`

To build the app and run in the Android emulator:
 - Navigate to the angular directory inside the project.
 - Run `ng build --prod --base-href . --output-path ../cordova/www`
 - Navigate to the cordova directory inside the project.
 - Run `cordova emulate android`



# Credits

I found the following articles helpful while developing this app:

 - [How to wrap an Angular app with Apache Cordova](https://medium.com/@EliaPalme/how-to-wrap-an-angular-app-with-apache-cordova-909024a25d79)
 - [Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)