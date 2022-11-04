# A2 Description of features



## Frontend
**A dashboard with components you can drag and drop, and each component is a graph that answers a specific question about the chosen dataset.**

We decided to present our project in a dashboard format, with each question visualized as a chart component. This means our project can be extended or condensed by adding or removing questions, without making the project feel incomplete.

The dashboard is implemented with the library React Grid Layout so we can easily define the dimensions and location of the components. This simplifies the process of making changes to the dashboard.

Each component will be promptly added upon the completion of a new route in the backend. Cynthia is in charge of adding these components.

We prioritized chart visualization in order to show that we are able to demonstrate our applications full-stack behavior in a user-friendly way.

Our acceptance criteria is having a user-friendly chart to display data on (with server connection).

Cynthia completed the deliverable by October 27 for this part based on the tasks in our acceptance criteria and above.

## Server

For A2, we decided to implement parsing the data from SQLite database engine, formating output in array / chart.js friendly format, and mutating data to answer our first question.

We decided to prioritize our completion of question 1 because the output is a very simple parsing of the dataset and can allow us to prioritize the data formatting and delivery to our front-end.

Our acceptance criteria is the API route-based parsing and delivering of our data with respect to our question.

The deliverable for this section was completed by Tevan on October 26 for this part based on the tasks in our acceptance criteria and above, delayed a couple days due to Midterms.

## Test

We used jest, mocha, and supertest to test backend features. The acceptance criteria for the test were determined by test coverage and tests had to cover over 70% of our code.

We tried to implement tests to cover most backend features and our prioritization was such that we wanted to maximize test coverage with a very user-friendly testing library that provided test-coverage analysis of our code.

The implementations are done by Sung Hyun Cho on November 2. Originally, the task was due until October 24, but was delayed becacause of assignments and midterms.
