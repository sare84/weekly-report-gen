# Weekly report template generator

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
  "days": [1,2,3,4,5]           // Configurable days 1 = monday 7 = sunday
}
```

## Todo

- Possibility to localize the app
- Config additional topics in config file
- Add CLI methods for picking the week / weeks

## Versions

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
