WebGL GlobeStats is an experiment showcasing WebGL and Socket.IO 

Forked from http://data-arts.appspot.com/globe and http://mrdoob.github.com/three.js/examples/webgl_flycamera_earth.html
 
### Usage ###

WebGL GlobeStats uses the wonderful Socket.IO and Express libraries.

```
cd server
npm install socket.io
npm install express
```

Then start the server with

```
node server/server.js
```

And finally point your browser to http://localhost:8000/ . The server
will start sending randomly generated lat/lng data. Hook it up to your
analytics systems to get it plot real data.

<a href="http://globestats.cloudno.de/"><img src="http://zsolt.github.com/globestats.jpg" width="366"
height="349" border="0"/></a>

Live demo at http://globestats.cloudno.de/
