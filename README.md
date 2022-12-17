# Kaleidoscope-p5.js
Created a cool little Kaleidoscope in p5.js

[Untitled_ Dec 17, 2022 3_51 PM.webm](https://user-images.githubusercontent.com/51367569/208265617-b95d424d-48c8-49cb-9997-914421726d5f.webm)

My approach to the final product was dividing the canvas into divisions using lines. 
I then created a function called branch which allows users to change the 'magnitude" and "fracture" of the branch.
This gives the Kaleidoscope the symmetrical look and the user can control the motion of it much like a real Kaleidoscope
by dragging your mouse horizontally. The branch function contains the width and the amount of "fractures" each line gives off.
The draw function controls the color of the backround and the color of the lines, the length of the lines, as well as the width.

Initially, I tried to overlay triangles on eachother in order to make it look like a Kaleidoscope, then my next step would have
been to rotate in each in different directions to give off the simulation of a Kaleidoscope. However, I ended up having trouble
overlaying multiple shapes on eachother, much less rotating them individually. Afterwards, I tried an overlaying line method where
I tried to cross-overlay lines on eachother. This method ended up costing a lot of lines of code and space which is when I 
discovered the branch method. Using the branch method, I only needed to divide the canvas and create a singular function
to create the effect.

Overall, the code given in this folder is the base and can be changed to your liking. For example, you can change the color
of the background as well as the lines. If you have a good GPU, then you can run more fractures which gives more detail to the Kaleidoscope.
Beware, changing the magnitude of the fractures can cause the web page to crash simply because of the overloading. 
I had a really good time creating this project and collaborating with my awesome professor!


