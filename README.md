# Smashing Boxes Front-End Test (React)

In order to help us better understand whether we can be a great fit for you, we would like you to take this coding challenge.
We respect your time, so we have scoped the challenge to the minimum we could to gauge your abilities.
We don't ask you to do anything here that you wouldn't need to do on an average day at Smashing Boxes.
There's no tricky math or gotchas.

In this boilerplate, you will find many of the tools we use every day.
This code challenge uses React and Redux.
These libraries are our preferred way to handle the logic for apps these days.
Also included is PostCSS, one of our preferred CSS processors.

You might be new to React. In that case -- don't worry! Our recruiting team is viewing this test as a measure of how quickly you can pick up and work in this new library (and of course, follow instructions). We're not necessarily looking to make a strict measure of the quality of your code or your knowledge of this library itself.

Some handy links to documentation:
- https://reactjs.org/docs/hello-world.html
- https://redux.js.org/

Setting up a front-end project can easily take more time than this task itself.
Recognizing that, we've set everything up for you.
After all, you're not expected to be standing up brand new projects every day.
Follow the instructions below to get this up and running.

**Also of note**: This app was setup using Typescript, which is why you'll see `.ts` and `.tsx`files.
If you're not familiar with Typescript, feel free to peruse the docs [here](https://www.typescriptlang.org/docs/home.html).
Also, while we are big fans of TS, it's not required, and this app will work just fine with vanilla JS.

And of course, if you experience any problems, feel free to open issues on this repo.

## Setup

Required software:
- Node.js
- NPM
- Git

To get started, clone down this repo. Run this command from your terminal / command line:

```
git clone git@github.com:smashingboxes/*YOUR REPO NAME*
```

Move into the directory and install the dependencies.

```
cd *YOUR REPO NAME*
npm install
```

At this point, your app is ready to go!
To start the server, just run

```
npm start
```

You can access it at `localhost:8080`.

## Exercise

In this exercise, you will build a list of wines for us.
It's similar to what you might see in a typical e-commerce app.
Oh, and we're big fans of the stuff.
So classy!

You should start with a two item wine list like below.

![The wine list design](provided.png)

We would like you to complete these things:

1. Instead of using the wine list on the client, fetch the list of wines from `/api/v1/wines` (NOT `localhost:8080/api/v1/wines`). This will hit our little node server we've set up for you.
***PLEASE NOTE:*** **You should not need to install any packages or otherwise modify the API call specifically due to CORS issues. We've set up a proxy, which handles getting around CORS in order to make requests to the node server. Making a GET request to the above endpoint with the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or with [axios](https://github.com/axios/axios) (already installed) will be sufficient.** 
2. Style the wine list to match this spec:

  ![The wine list design](spec.png)

3. Implement features for each wine
  - It should have an average star rating indicator with a count of all ratings
  - It should have a placeholder image
4. Implement the years select box
  - It should contain an item with the words "Select Year" that when selected shows all wines
  - It should contain an ascending ordered list of all years (vintages) of all the wines
  - Whenever the selection changes, the list of wines is updated to only those wines from that vintage
  - For the list of wines displayed, when a wine (or wines) has the most units sold, it should have a badge reading "BEST SELLER"
  - **The year select box does not need to be styled like the spec —- that's literally the toughest task in front-end development**

## What we look for

One of our core values at Smashing Boxes is being open, and for the sake of transparency we're telling you exactly what we look for.

- Your code should be simple, well-written, and modular
- Your code should have no obvious performance problems or bugs
- Your styles should be reasonably close to spec
- Your styles should look good across a variety of device form factors
- Your page should work on Chrome and Firefox
- Your changes should all be captured in a single branch that is based off of master

Bonus points

- Making your application responsive
- Creating tests to go along with your code
- Committing often so we can get a feel for how you've worked through the problem
- Ensuring your code will work across the latest browsers besides just Chrome and Firefox
- Using Typescript! It's used on almost all of our front-end projects, but if it's not in your wheelhouse yet, don't sweat it

## Wrap up

Good luck on this test!
We're excited to see what you come up with and feel free to install other packages as needed.

We want to see that you can adhere to the specifications outlined above and work as if this is a task you would receive here at Smashing Boxes.

In order to submit your test, please make a pull request against master that captures all your changes.
Then notify the recruiter you are working with that you have completed the test.

If you have any questions, please reach out to our recruiter and that person should be able to get you in contact with someone who can help.

## APPENDIX

### Wine data structure

```
{
  "id": UUID (String),
  "name": String,
  "vintage": String,
  "vineyard": String,
  "type": String,
  "region": String,
  "unitsSold": Number,
  "ratings": [Rating]
}
```

### Rating data structure

```
{
  "stars": Number
}
```
