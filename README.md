# BoffTime
This repo is for basic command line tools to express new ideas related to UPT so that they can be explored quickly and without undue hassle. In the past, I've spent long amounts of time making an app for any idea I think of. I'd like to do things other than making odd time apps, but I'd still like to explore these ideas when I get them. Enter this repo.

It'll just be JavaScript functions. Yep that's all I need so I can work on it from literally anywhere with a browser.

# Environment

- A browser with Console
- A text editor

# Working Tools
| Function  | Description | Args |
| -------------- | -------------- | -------------- |
| getTime   | current time of day in ms | |
| getBoffTimeFactor | conversion factor from standard time ms to any bofftime | base, digits  |
| bofftime  | current time of day using bofftime | time, base, digits |
| timeToWords | turn any time of day ms into a list of words | time |

# A Brief History of UPT
A while ago, I decided I wanted to see what a clock would look like in hexadecimal. I also wanted it in base 12, but needless to say I wanted to experiment with clocks. I quickly learned that our typical time-keeping methods (hours, minutes, and seconds) can not be turned into hexadecimal without becoming terribly hard to read. This is because our system of hours, minutes, and seconds is a [mixed radix](https://en.wikipedia.org/wiki/Mixed_radix) system. 

That being said, departing the mixed radix system for a true place-value system only solves half the problem. Even simply showing the number of seconds in base 10 leaves you with 86,400 seconds in a day, from which get no sense of scale. The way to solve this problem is by finding the ratio of 86400 to the number of seconds you'd like there to be in a day, then that ratio becomes the ratio of new seconds to standard. I've chosen to call this the duration of a tick in seconds. 

A while after I came up with this solution as a means to make a base 16 clock, I realized that this method could be used with any combination of radix and power, so I created things like the tools in this repo, as well as a few iOS apps, so demonstrate the idea. 

It may not be the most practical thing in the world, but it sure is cool. 
