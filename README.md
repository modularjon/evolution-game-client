# evolution-game-client

## Cladistics Evolution Game

## Concept

  My goal for this game was to provide a basis for educating the public about
how science now goes about classifying the tree of life. Although labelled as a
game, I intended this project to be an educational tool that could be used in
natural history museums; an interactive toy that can demonstrate how all of life
is related, yet differentiated.

  Cladistic analysis works on the premise that except possibly in extremely rare
circumstances, speciation always results in only two new groups of interbreeding
organisms. Using this premise, and by analysizing anatomical and genetic data,
scientists can determine how, and even sometimes when, two branches of life
diverged.

  Using the premise of dual branching, I constructed a simple tree where users
can place organisms provided by the game, and then check their answer against
a database which I have provided.

## Wireframes

https://www.dropbox.com/s/7xf21erxykrf66h/2016-06-16%2016.34.19.jpg?dl=0
https://www.dropbox.com/s/7ist3aapg7torzb/2016-06-16%2016.34.31.jpg?dl=0
https://www.dropbox.com/s/e19b7qee5ebxnts/2016-06-16%2016.34.40.jpg?dl=0
https://www.dropbox.com/s/ilvr9jfvojoei16/2016-06-28%2022.22.40.jpg?dl=0

## Techs used

• HTML
• CSS
• JQuery
• AJAX
• Node
• Ruby
• Rails
• PostgreSQL

## Link to API

https://github.com/modularjon/evolution-game-api

## User Stories

  A user would like to:
    • Sign up by using any name they like and providing a password
    • Get confirmation of a successful sign up
    • Sign in using a previously registed name and password
    • Hide sign up/ sign in forms on sign in and show sign out/change password
    • Clear sign up, sign in and change password fields after use for security
    • Start a new game
      - Populate the parent animal and game tray to enable play
      - Show a submit answer button
    • Click on a game tray option
      - Receive confimation of selection
      - Recieve direction to place in the game tree
    • Click in the tree to place a decendant
    • Receive a message to submit an answer when tree is full
    • Submit an answer
      - Receive a message encouraging the user to try again if incorrect
      - Visual confirmation of a correct answer
      - Add to games solved tally
    • Click a button to receive their total games solved score

## Future Development

  Clearly the UI is rudimentary, so I'd like to incorporate both Bootstrap and
Handlebars to clean up the presentation, although I think maintaining the tree
structure will be a challenge.

  I'd also like to incorporate modals on a page load that descibe to the user
what evolution and cladistics are, and how they can properly figure out how to
solve a tree. This probably includes adding derived characters as an attribute
to both the child and parent models. A nice option would be to display the
derived character for each branch along that branch's trunk.

  Finally, what got me started on this project was looking at
https://tree.opentreeoflife.org/ It's an open source web application that
displays real scientific data about evolutionary relationships, and they've got
an API for interacting with their data. Using their data as a source for my games
would be a challenging project but very worth it.
