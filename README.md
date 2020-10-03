### Intro to CI/CD Workshop

## Getting started
We will be using Travis-CI and Coveralls in order to create a continuous integration pipeline. Travis-CI will run our tests immediately after a branch is updated. Coveralls will also run during this process as well, giving us an updated code coverage report.

[Setting up Travis-CI with Node](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)

[Setting up Coveralls with Express](https://github.com/istanbuljs/nyc/blob/master/docs/setup-coveralls.md)

Let's first start by setting up our .travis.yml file, and updating our package.json to use coveralls

## Tasks
The first task for this workshop will be to add a route that will multiply two numbers. We will start by only creating the test for this route.

Make sure to checkout a new branch for this feature.

Once this feature has been added, create a pull request to merge the feature into master.

Our next task will be to implement the route that we have created a test for. Once we implement the route, let's see if the PR will let us merge.

Finally, let's "accidentaly" break a part of our code. Let's see if we are still allowed to merge our code.
