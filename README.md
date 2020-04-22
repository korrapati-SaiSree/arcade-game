# Classic Arcade Game Clone Project
When player reaches sea level from the ground level without encountering the bugs then game is completed.
## Table of Contents
- Downloading Stater code
- How to run the game locally
- [Instructions](#instructions)
- [Contributing](#contributing)
## Downloading starter code
Starter code is downloaded from github link provided by udacity
"https://github.com/udacity/frontend-nanodegree-arcade-game"
## How to run the game locally
When the game is opened in browser url should contain "https://" .Initially index.html is opened when the file is opened in browser
## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


Player is at the ground level when the game is started and player moves up,down,left,right accordingly.Game is completed once when player reaches the sea level,but there are obsatcles while reaching the sealevel.player have to reach the sea-level without touching the bugs,when the player touches the bugs,he will return to ground-level.Initially score is hundered,and when each time player collides the bugs,score will be reduced by 10 and score will not reduce beyond ten even though player collides many times with bug.


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
