## What's Up
This repo allows you to quickly spin up a local version of Ghost for quick theme development.

## Getting Started
1. Get Docker on your local machine, https://docs.docker.com/install/
2. Clone this repo `git clone git@github.com:kylefdoherty/local-ghost.git`
3. Run `yarn install` to install dependencies
4. Run 'yarn add global gulp'
5. Run `docker-compose up` to spin up the ghost instance
6. Navigate to the local ghost instance at `http://localhost:3000/`
to make sure its up and running and setup the admin by navigating to `http://localhost:3000/ghost/`
7. Test working on a new theme i.e. not casper by cloning the Attila theme into
your src folder, making changes to it, and running the gulp task `gulp watch`.

    * `cd src`
    * `rm .gitkeep`
    * `git clone https://github.com/zutrinken/attila.git .`
    * `gulp watch` to copy your custom theme code into `content/themes/custom-theme`
    * In `src/index.hbs` add `<h2>BOOM</h2>` or whatever you want above the header tag
    * `docker restart ghost-theme-dev` to make the change showup (TODO - figure out how to make docker pickup these changes without restart)
    * Go to ghost admin, click on design, and under themes "activate" the Attila theme
    * Navigate back to the ghost homepage and you should see BOOM at the top of the page


## Todo
1. Get nodemon on something similar working so node server restarts when changes are made. Otherwise we need to restart the docker container every time we make a change which isn't effecient, https://docs.ghost.org/docs/install-local#section-developing-themes
