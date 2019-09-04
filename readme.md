# Git Commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to the staging area
git commit - Creates a new commit with files from staging area. You must add a message for the commit, so the command would be `git commit -m "Add message here"
git log - View recent commits

# Expensify_React_Tutorial
udemy The Complete React Developer Course w/ Hooks and Redux Tutorial Project

# install
run npm install

# view Expensify app
run npm run dev-server

# for testing 
run npm test -- --watch

#Production
To set up the app in a production enviroment with Heroku.
- You'll need a Heruko account (if you don't already have one). You cna set up a free account here - https://www.heroku.com
- Install the Heroku Cli - https://devcenter.heroku.com/articles/heroku-cli
- run `heroku --version`
- run `heroku login` login with your account credentials (you may via prompted to do this via the browser)
- once in, run `heroku create` you'll be given a random name OR run `heroku create <NAME-YOU-WANT-FOR-PROJECT>`
- you can run `git remote` or `git remote -v` to check if set up was created
- run `git status` to check your changed files
- run `git add .` to add new files to be committed
- run `git commit -m "a message"` to commit new files
- run `git push` to update your git repository
- run `git push heroku master` to build the app
- run `heroku open` this will open up the app in the browser.


