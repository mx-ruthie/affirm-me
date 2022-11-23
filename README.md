# The MVP of iaffirmme.app
I Affirm Me simply returns meaningful, true affirmations to the client from an external Affirmations API with the click of a button. Upon login, users gain access to additional original affirmations by category. Ideally it's used as a tool to help people remember to be gentle with themselves.

## Details for Project
A final project for Techtonica 2022H2 cohort. The required template (written by Cristina from Techtonica - https://github.com/Yosolita1978) provided the foundation for an app that ran CRUD operations. You can see a copy of the starting point of my app with Auth0 integration included here: https://github.com/mx-ruthie/final-project-template. According to other requirements, I also connected my own database containing at least 2 tables, utilized an external API (https://github.com/annthurium/affirmations), and implented Auth0 for login. I used render.com to deploy the app, and a domain hosted through GoDaddy for the direct link.
#### Stack/Technology info
  -PERN stack
  -JavaScript
  -PostgreSQL
  -Node
  -Express
  -Cors
  -React
  -Postico
  -NPM
  -VS Code
  -Command Line
  -Git and GitHub
  -CSS
  -Custom URL (GoDaddy + render.com)
    - https://www.iaffirmme.app

### Trimmed from the MVP for presentations but in the works for the future:
  - Favoriting affirmations to then serve up as an additional category 
  - Favorites page to remove items from favorites
  
### Version 2.0 to include:
  - Custom affirmations page with form to create/edit/delete user-created affirmations to then serve as an additional category
  - Category containing images of affirmation memes with alt text and image descriptions    

### Version 3.0 to include:
  - Custom affirmations page with form to create/edit/delete user-created affirmations to then serve as an additional category
  - Category containing images of affirmation memes with alt text and image descriptions    

### Version 4+ to include:
  - More in-depth profile + social components
  - Ability to journal in response to prompts and store in the app
  - Instagram page sharing affirmations
  - TikTok sharing affirmations
  - Potentially small shop as well

## Installation
- These instructions have been adapted from a colleague's readme found here: https://github.com/priyaraj7/guruprasad/blob/readme/README.md


First you need to get an [Auth0 API](https://auth0.com/). The Affirmations API requires no key.

Clone the affirm-me repository:

```bash
git clone https://github.com/mx-ruthie/affirm-me.git
```

Switch directories into the repo:

```bash
cd affirm-me
```

Switch directories to the server and install dependencies
(if you install and use concurrently, hold off until everything is installed and then run from the server directory "npm run dev" for all to launch at once. The script is in the server's package.json file.)

```bash
cd server
npm install
npm start 
```

Create a `.env` file and enter your api-key. You can refer `.env.example` file.

Next restore the Postgres Database:

```bash
psql postgres -f db.sql
```

Open another terminal then cd into the client, install dependencies

```bash
cd client
npm install
```

Create a `.env` file and enter your Auth0 credentials. You can refer `.env.example` file.
If not using cconcurrently, start the local host client:

```bash
npm start
```

Your browser should automatically open at http://localhost:3000.

Note:
Server runs on http://localhost:8080 and client on http://localhost:3000. See the client package.json for the proxy.

Additional note: The tests written for this app required finding the latest compatible versions of the testing library because the create-react-app version was a bit outdated.

