This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.##Technical questions and answers

1. **How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

I spent roughly 5 hours setting up, fixing various errors, perfecting the api call, and setting up ther heroku server and polishing various parts of the site. With more time, I would have liked to add a google maps area to each address card to add context to the address, that way a user could have a better idea of surounding intersections.

2. **What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

One feature recently added to angular 8 is the ability to make draggable elements througgh angulars built in material css functionality. Due to NDA constraints, I'm unsure that I'm able to submit any code from it, though it looks roughly like this:

```javascript
<div class="draggable-dialog-component draggable-boundary" [style.height.px]="boundaryHeight">
  <div class="draggable-box" cdkDrag fxLayout="column" #draggableContainer
       cdkDragBoundary=".draggable-boundary"
       [ngClass]="{
        'full-width': activityWindowConfig.isFullScreen,
        'min-width': !activityWindowConfig.isFullScreen
       }"
      [@zoomInRightOnEnter] [@zoomOutRight]="isLeaving"
    >


    <div class="draggable-header w100p" cdkDragHandle #draggableContent
	 cdkDragRootElement=".draggable-box"
         fxLayout="row" [style.background]="compConfig.headerColor">
      <div fxLayout="column" class="ml-md" fxLayoutAlign="center start" fxFlex="60%">
        <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGapC="md">
          <div>
            <svg fill="currentColor" viewBox="0 0 24 24" class="move-around-button">
              <path
                d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </div>
          <div>title</div>
        </div>

      </div>
      <div fxLayout="column " fxLayoutAlign="center end" fxFlex="40%" class="mr-md">
        <div fxLayout="row" fxLayoutAlign="end center" fxLayoutGapC="md">
        
...
          
```

3. **How would you track down a performance issue in production? Have you ever had to do this?**

At my current job, we use site 24/7 to track various performance and server issues, and post them in a slack channel visible to the team andd client. This allows on-call members to handle and delegate tthe issues as needed.

4. **How would you improve the API that you just used?**

I would have also included a review rating. as it is now, the cards lack context without a rating to help decide which restaurant is best

5.	**Please describe yourself using JSON.**

```json
{
   "name":"Kyle Roberts",
   "Occupation": "Web Developer",
   "skills":
   [
       "Git",
       "CSS"
       "Sass/Less"
       "HTML5",
       "javascript/Typescript"
       "AngularJS",
       "Angular",
       "Ruby/Rails",
       "Wordpress",
       "Python",
       "Agile",
       "Design"
   ],
   "qualities":
   [
       "Fast Learning",
       "Analytical Thinker",
       "Loves to solve puzzles"
   ],
   "fun_fact":
   [
       "Once built a go kart in auto shop, but never added the brakes",
   ]
}

```