# Fiona's Flora :seedling:
Hi i'm Fiona, a junior web developer who put down all web development for a few weeks and now needs to ease myself back into it! This is my progress making a plant care app, which is created with a very special user in mind - my sister the plant killer supreme, 

## The plan(t)
This repo is for my efforts in making a full stack plant care app. I will be using a PERN stack, and trying to focus more on the user experince and design of the app (as it's not my strong suit). I also want to make sure this app is fully tested, and will be using jest, supertest and hopefully cypress if it plays nice.

### The backend
The backend - also known as the fun bit, will be made with express, cors and postgreSQL. As i feel very confident in the backend this project will be populated at first with dummy data. 

### The frontend 
The front end- i will be designing (actually wireframing for once even though it's painful). I'd like a bit of pizzaz so while it should be clean, clear and mobile friendly, i have to figure out how to get a bit of funk into there. I'll have drop down options, and a custom add field. When all items are selected there will be an add plant button, which will assemble the object and send to the database. I'd like to make plant alerts for watering which will mean that i have to acess user timestamp, add that with a last watered section and a how often it need to be watered in order to send the alert. 

### Things i need to watch out for
- My last project was in Next.js and i haven't played around with react router yet 
- I really struggle with design, so i'm just going to chill out and play around with it 


### The wireframes - i am not a designer
I've designed this for mobile, and have made it with the end user in mind, however the end user is my sister so the app is a touch firm with the user. She benefits from the stick not the carrot, and this app truly pritotises the health and wellbeing of your plants over you!
![Fiona-flora wire frames](![image](https://user-images.githubusercontent.com/100845392/203579373-afb7cc1e-094c-486d-913a-58378ffc80e1.png)


#### The stretch 
I want to use auth0 so i can have individual accounts - I *think* this will be done by having an ID token which performs as a refernce on the table on the backend. I haven't used auth0 before but it's always a good time to learn 

#### Updates-4.10
i kept good to my word and wireframed first, i hated it. I've created an app, created a rough version of my landing page, deployed and got authetication working on the landing page. Next i'm going to make my navbar and make sure to wrap it in an isAutheticated, so then people can't just type the url and reach through to that page. 

#### Updates-4.10
got navbar functionally done - it's currently very ugly but thats okay! next i'm going to write the add a plant functionallity (i know before the backend :sweat_smile:). This will help me figure out what information i want to pass back and also figure out how i'm going to send the IDToken. I also just need to change the auth) login page as it's ugly and annoying me!
