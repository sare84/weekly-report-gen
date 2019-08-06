# Weekly report template generator

Project is used to generate a template for a weekly report
Contains:

- Written with markdown language
- Date and week number
- Days for this week
- Special additional topics

## Usage

node -r esm index.js

## .env

CONFIG_FILE="./src/config/config.json"

## Config

```json
{
  "locale": "de",               // Localisation
  "dateformat": "DD.MM.YYYY",   // Output dateformat
  "path": "./reports/",         // Output path
  "days": [1,2,3,4,5],          // Configurable days 1 = monday 7 = sunday  
  "additionalTopics": [         // Additional Topics
    {
      "name": "Days",
      "parent": null,
      "level": 2,
      "order": 0,
      "function": "writeDays"
    },
  ]
}
```

## Todo

- Add recursive functions and parent or childnodes
- Possibility to localize the app
- Add CLI methods for picking the week / weeks

## Versions

### 0.0.6

- Added functions for subfolder (i.e. days)
  - There is a class with prepared functions and these could be could via their name
- Refactoring: Moved PreparedFunctions into own file

### 0.0.5

- Config additional topics in config file
- Added order to topics

### 0.0.4

- Config the days

### 0.0.3

- Check the path to the new file -> create it if not there!
- Outputpath can be changed in the config.json

### 0.0.2

- Creating a config file
- Added dotenv and .env files
- Created app.js and moved content from index.js
- index.js calls now app.js

### 0.0.1

- New project structure
- Added logger (log4js)
- Switched from '\r\n' for new line to the EOL from the os package
