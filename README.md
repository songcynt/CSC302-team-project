# CSC302-team-project

**All assignment deliverables (including meeting notes) can be found in the documents folder.**

The setup scripts below contain different options depending on the user's hardware and preference.
Although we only have a one-command install and setup script for Linux users, other OS users will only need to follow few simple steps to install the required application(s) before they can run the application with a single command.

We ultimately decided against having installation commands for every OS, and only providing it for Linux for the TA/ professor for grading purposes as the setup is straightforward for everyone on the team, and once everything is installed, we're able to install dependencies and start the application with a single command.

## (Linux) Startup Script 

Our one-command startup script for Linux environment is `sh startup.sh`

## (Mac and Windows) Setup via Docker

Note: you only need to run step 2 if Docker is installed.

1. Install Docker Desktop via https://www.docker.com/products/docker-desktop/

2. Run `docker-compose up -d --build`

## (All OS) Setup without Docker

Note: you only need to run step 3 if Node and Yarn are both installed.

1. Install Node.js and npm via https://nodejs.org/en/download/

2. Run `npm install --global yarn`
To install our preferred package manager.

3. Run `yarn start`
To install all dependencies and start both backend and frontend application.


## Testing

Run `yarn test` to run all tests.
