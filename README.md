# Weekly report template generator

## Usage

node -r esm index.js

## .env

CONFIG_FILE="./src/config/config.json"

## Todo

- Check the path to the new file -> create it if not there!
- Possibility to localize the app
- Config the days
- Setup path for the templates

## Versions

### 0.0.2

- Creating a config file
- Added dotenv and .env files
- Created app.js and moved content from index.js
- index.js calls now app.js

### 0.0.1

- New project structure
- Added logger (log4js)
- Switched from '\r\n' for new line to the EOL from the os package
