// STUFF TO REMEMBER IN React Development

// 1. Your component names must start with Caps, small letters reserved for HTML
// class PlayerListItem extends React.Component { .......

// 2. While returning JSX "XML" markup from render method, either wrap the 
// "XML" in parentheses (  ), or start it from the same line as the keyword "return" 

// 3. In some places you'll need to use the arrow function, normal function
// would not bind the "this" to the outer context = component, like we want to happen.

// 4. The create-react-app sets up the development environment, with another Node.js
// server, possibly trying to listen to port 3000. 
// (To avoid probs, we could use port 8686 for the development time front end Node.js "server". 
// Back-end Node.js server could use 8787)

// 5. The final front-end we get when we copy the contents of the /build folder and
// publish it on some real web server as static .js  .html  and .css files
// E.g. on Proto, Myy, or AWS   Then we won't have front-end Node.js server at all 
// anymore!!! Just static web server is enough. Most likely with port 80

// Back-end REST API will continue to run Node.js., e.g. with that 8787 port


