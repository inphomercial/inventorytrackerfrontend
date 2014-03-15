What you need to run this thing:

ruby (I think 2.x)
npm
bower

Install dependencies:
npm install - node modules (grunt)
bower install - js modules (angular, foundation, etc)
bundle install - ruby modeuls (sass, scss-lint)

Compile sass:
grunt sass

Watch sass files for changes, then compile on save:
grunt watch

Installing a new js library:
bower install <package> --save-dev

Installing a new node library:
npm install <package> --save-dev