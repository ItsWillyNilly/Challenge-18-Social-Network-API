# Challenge-18-Social-Network-API

## Description
This is an application is a Social Network API. It utilizes a NoSQL database and Express.js. It allows the user to add, update or delete users, thoughts, friends, and reactions. 

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Technologies Used
**Node.js** <br>
**Express.js**<br>
**Insomnia**<br>
**MongoDB**<br>

## Installation Instructions
**Clone the repository**
```bash
git clone git@github.com:ItsWillyNilly/Challenge-18-Social-Network-API.git
```

**Navigate to the project directory**
<br>EXAMPLE:
```
cd /Users/williamlee/bootcamp/challenge-18/Challenge-18-Social-Network-API
```
**Install the Node package**
```bash
npm init -y
```

**Install dependencies**
```bash
npm install
```

**Run the program**
```bash
npm run start
```

**Utilize Insomnia**
After you can use Insomnia to test the functionality of the Social Network API

## Program Demonstration
<img src="assets/videos/Untitled Video September 16, 2024 3_39 PM.gif">
Video Link:<br> https://drive.google.com/file/d/1_EQ99gXxG_KrNAWlfqXhSQ4IkKTMG7IQ/view?usp=sharing

## GitHub Repo Link
https://github.com/ItsWillyNilly/Challenge-18-Social-Network-API