### Template for a Express and React App Project
Create full stack apps with React and Express. Run your client, server and do a restart of your dump db to have a full-stack project working in minutes

### Step by Step instructions - To use this project as your start point
You can follow this instructions and code along with the video - [setup instructions working](https://www.dropbox.com/s/tthmdat3n3vp3be/SettingUpTemplate.mov?dl=0)

## Details for the I Affirm Me app
This project utilizes a template written by Cristina from Techtonica - https://github.com/Yosolita1978

I was required to use a template that provided the foundation for an app that ran CRUD operations both with my own database containing at least 2 tables and that utilized an external API. 

I was also required to implent Auth0 for login.

The MVP of the I Affirm Me app:

The very first database item in the affirmations table of the affirm-me database is the default in the display div, then randomly generates another affirmation in its place with the click of a button. 

Logged in users will be able to add affirmations to their favorites list - this favorites list will populate a category of the drop down list. (A later version of the app may include a separate favorites page where the favorites are editable, but that is not part of the MVP due November 23, 2022).

As of November 11, 2022, these features have been successfully implemented:
  
  -The full-stack app, client and server sides, are set up at a basic functional level.
    
    -route hits external api for random affirmation
     
     -route hits my api for internal affirmations
     
     -route posts user data to my database 
     
     -first steps for deployment that sets up proxy functioning correctly
      
      -Auth0 login and logout works and correctly calls the JSON data for a user on the profile page
     
     -some extremely basic functionality holding the place of react components that will come in the next phase of building the project
      
      -some detailed comments explaining what different parts of the code are doing and what's been removed from the template
      
  -Still needed:
      -remove last residual template data that isn't relevant to the project
      -fully explicated pseudo-code notes describing what each piece of the code is doing
      -almost all react components need to get built out, splash page, about page, and onClick handling
      -Users and Affirmations table need to JOIN for a junction table that displays favorites by associating primary keys from User and   
       Affirmations tables if favorited (plus all associated React functionality)
      -CSS design
      -testing
