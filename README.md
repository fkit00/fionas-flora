# Fiona's Flora :seedling:
Hi i'm fiona, a junior web developer who put down all web development for a few weeks and now needs to ease myself back into it!

## The plan(t)
This repo is for my efforts in making a full stack plant care app. I will be using a PERN stack, and trying to focus more on the user experince and design of the app (as it's not my strong suit). I also want to make sure this app is fully tested, and will be using jest, supertest and hopefully cypress if it plays nice.

### The backend
The backend - also known as the fun bit, will be made with express, cors and postgreSQL. My data shape is really important to the in shaping the apps purpose and is the first thing i need to figure out when making the table. 

### The frontend 
The front end- i will be designing (actually wireframing for once even though it's painful). I'd like a bit of pizzaz so while it should be clean, clear and mobile friendly, i have to figure out how to get a bit of funk into there. I'll have drop down options, and a custom add field. When all items are selected there will be an add plant button, which will assemble the object and send to the database. I'd like to make plant alerts for watering which will mean that i have to acess user timestamp, add that with a last watered section and a how often it need to be watered in order to send the alert. 

### Things i need to watch out for
My last project was in Next.js and i haven't played around with react router yet 
I really struggle with design, so i'm just going to chill out and play around with it 
I'm very comfortable with being able to set weekly alerts - this would be a get timestamp from user and search by day- not sure how i would do this for plants that might get watered only once every few weeks? I'll figure it out 

### The wireframes - i am not a designer
I've designed this for mobile, and have made it with the end user, however the end user is me so the app is a touch firm with the user
![Fiona-flora wire frames](https://user-images.githubusercontent.com/100845392/197201112-2612a121-d87e-4bb8-ae3f-de881a979f0d.png)


#### The stretch 
I want to use auth0 so i can have individual accounts - I *think* this will be done by having an ID token which performs as a refernce on the table on the backend. I haven't used auth0 before but it's always a good time to learn 

#### Updates-4.10
i kept good to my word and wireframed first, i hated it. I've created an app, created a rough version of my landing page, deployed and got authetication working on the landing page. Next i'm going to make my navbar and make sure to wrap it in an isAutheticated, so then people can't just type the url and reach through to that page. 

#### Updates-4.10 (lunchtime)
got navbar functionally done - it's currently very ugly but thats okay! next i'm going to write the add a plant functionallity (i know before the backend :sweat_smile:). This will help me figure out what information i want to pass back and also figure out how i'm going to send the IDToken. I also just need to change the auth) login page as it's ugly and annoying me!
