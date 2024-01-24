# Browserstack Demo project

This project is developed to demonstrate basic features of Browserstack 'Automate' platform

## Prerequisites
You should be a registered Browserstack user (Automate platform).
You should get a username and an accesskey from browserstack portal

To work with the project you should have `NodeJS` and `npm` installed.
It's tested with `NodeJS v19.5.0` and `npm 9.3.1`

## Building the project

* Run `npm install` from the project root folder
* run `npx playwright install` to install browser engines

## Configuring

Please provide a phone number value as an Environment Variable
`PHONE_NUMBER=05xxxxxxxx`

Fill the username and the access key in `./browserstack.yml` 

## Running the project

Please use:
* `npm run govil-browserstack` to run remotely
* `npm run govil-local-debug` for local debugging session
* `npm run govil-local` for local execution
