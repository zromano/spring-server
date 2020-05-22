# Spring Server With React and Facebook Auth

Go to any page besides "/" and you will be prompted to login with Facebook. 
Once you are authenticated via Facebook, you should see the homepage say "hello"

The front-end of this app is made with Create-React-App, and could easily scale with reusable components.

### Build
To build the code, run:  
 `./gradlew clean build`  
 
This will:
* Install depenencies from npm and maven
* Make a production build of the React app
* Compile the Java code

### Run Locally:
Set the following environment variables, or use profile `test` to revert to basic auth.
* FACEBOOK_APP_ID
* FACEBOOK_APP_SECRET

Start the React app by running `npm run start` in the `/frontend` directory.  
Start the Spring app by running `./gradlew bootRun`.


[Zach Romano](https://zromano.com) - 2020
 