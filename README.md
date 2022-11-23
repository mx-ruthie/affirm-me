# I Affirm Me MVP
I Affirm Me simply returns meaningful, true affirmations to the client from an external Affirmations API with the click of a button. Upon login, users gain access to additional original affirmations by category. Ideally it's used as a tool to help people remember to be gentle with themselves.

![affirmme](https://user-images.githubusercontent.com/102179075/203648499-4060965f-dd93-49a6-9dce-2089f396317d.jpg)

## Details for iaffirmme.app
A final project for Techtonica 2022H2 cohort. The required template (written by Cristina from Techtonica - https://github.com/Yosolita1978) provided the foundation for an app that ran CRUD operations. You can see a copy of the starting point of my app with Auth0 integration included here: https://github.com/mx-ruthie/final-project-template. 

According to other requirements, I also connected my own database containing at least 2 tables, utilized an external API (https://github.com/annthurium/affirmations), and implented Auth0 for login. 

I utilized render.com to deploy the app, and a domain hosted through GoDaddy for the direct link.

Procreate on an iPad is the medium used for the background image creation.

Using PostgreSQL + Postico I transferred the affirmations I had previously written in a homemade oracle deck to a database.

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
  -Custom URL (GoDaddy + render.com)- https://www.iaffirmme.app	
  -iPad Pro + Apple Pencil + Procreate

#### Version 2.0:
  - Favoriting affirmations to then serve up as an additional category 
  - Favorites page to manage favorites
  
#### Version 3.0:
  - Custom affirmations page with form to create/edit/delete user-created affirmations to then serve as an additional category
  - Category containing images of affirmation memes with alt text and image descriptions    

#### Version 4.0+:  
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
If not using concurrently, start the local host client:

```bash
npm start
```

Your browser should automatically open at http://localhost:3000.

Note:
Server runs on http://localhost:8080 and client on http://localhost:3000. See the client package.json for the proxy.

Additional note: The tests written for this app required finding the latest compatible versions of the testing library because the create-react-app version was a bit outdated.

## Acknowledgements

 So many incredible people deserve to be in this section of the README. Integral to material creation of this app are:

 - Cristina Rodriguez, inspirational teacher and template builder.
 - Sarah Cawley, MVP streamlining extraordinaire.
 - Natalia Margolis, my mentor throughout Techtonica and my technical mentor.
 - The Office Hours mentors that devoted time and patient energy helping me, especially in no particular order Julie Watzko, Scott Gilroy, Stephen Furlani, Vlad Jiminez, and Mandy Chen.
 - Also, my cohort-mates with direct influence in the production of this app are: Alma Benitez, Angel Sanchez, Diana Olivas, Kimberly Dang, Presh Worthy, and Supriya Venkatachala. Without these gentle souls I would not have finished this in time. 
 
 
Additionally, my spouse Zach has done everything in his power to secure the time and space needed to dive fully into Techtonica, including assuming primary responsibility for our two children while teaching 10th and 11th grade English full time as I worked and co-cared for my mother across town. My sister Erin gave me an iPad and pencil for my birthday which enhanced my work and creativity beyond measure, and my brother Andrew inspired me to be a software engineer in March of this year then gifted me my external monitor for the pursuit. Without these 3 people, I would not have access to this level of success. 

Special thanks to my mother, Sharon, for surviving the stroke August 19th of this year. Working on this program while helping you fight to live and thrive has been the most affirming experience of all. And thanks to my father, Charles, for reminding me to stay grateful and walk in integrity every single step of the way. 

https://user-images.githubusercontent.com/102179075/203637350-7f93ac08-7a84-4add-9d17-ab19e0435d27.mp4



