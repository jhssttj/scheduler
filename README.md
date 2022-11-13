# Interview Scheduler
Interview Scheduler is an application that allows users (students) to book an appointment with their desired interviewer, day and time. Once an appointment is booked, students are able to edit or delete to make revisions.

The application was created by using React, Javascript, AXIOS, HTML, Express, Node and PostgresSQL.

> This project is intended to be a proof of concept, and therefore should not be hosted or used as a stand-alone website.

# Screenshots
![A screenshot of inputting student name and interviewer choice at a selected timeslot](https://github.com/jhssttj/scheduler/blob/master/public/images/images-README/Scheduler-Pic-1.PNG?raw=true)
Image 1: A screen shot of inputting student name and interviewer of choice in a given timeslot.

![A screenshot of the process of saving an appointment](https://github.com/jhssttj/scheduler/blob/master/public/images/images-README/Scheduler-Pic-2.PNG?raw=true)
Image 2: Once a user saves their appointment, a saving state will show that their appointment is being booked.

![A screenshot to confirm delete of appointment](https://github.com/jhssttj/scheduler/blob/master/public/images/images-README/Scheduler-Pic-3.PNG?raw=true)
Image 3: If a user decides to delete their appointment, a confirmation box will show.

![A screenshot of the process of deleting an appointment](https://github.com/jhssttj/scheduler/blob/master/public/images/images-README/Scheduler-Pic-4.PNG?raw=true)
Image 4: Once a user deletes their appointment, a deleting state will show that their appointment is being deleted.

# Features
1. Located to the left is the navigation panel where users can click on the days they want to book an appointment (Note: Each days show how many spots are available for that day).
2. Once a user clicks on the desired day, the webpage will render the main appointment form where users can see which time slot has been already booked and which ones are available. Clicking on the "Plus" sign for any empty time slot will open up the interview form.
3. Once in the interview form, users can enter their name and click which interviewer they would like to book with. Once both information is filled out, user can click "Save" to finalize the booking or "Cancel" if they change their mind.
4. If a user needs to update or delete their appointments, they can click on the edit or delete icon located on bottom left of each appointment form.

## Setup
1. Clone this repository onto your local device.
2. Install dependencies with `npm install`.
3. Create a PostgresSQL database by following the instruction to set up the api server from [here](https://github.com/lighthouse-labs/scheduler-api).
4. Start the api data base server as per instructions [above](https://github.com/lighthouse-labs/scheduler-api).
5. Start the application by running `npm start` in the root directory (The application will automatically open up a web browser to http://localhost:8000/).

## Miscellaneous Setup
The application also used Cypress, jest, storybook programs to test the functionality of the application.
- To run Jest Test Framework: `npm test`.
- To run Storybook Framework: `npm run storybook`.
- To run Cypress Test Framework: `npm run cypress`.

## Dependencies
- Axios
- Classnames
- Normalize.css
- React 
- Babel/Core
- Storybook
- Testing-library
- React-test-renderer (V16.9.0 is required)
- Sass
- Eslint (Optional)
- xvfb (Optional)



