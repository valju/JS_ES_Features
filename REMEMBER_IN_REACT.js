// STUFF TO REMEMBER IN React Development

// 1. Your component names must start with Caps, small letters reserved for HTML
// class PlayerListItem extends React.Component { .......

// 2. While returning JSX "XML" markup from render method, either wrap the 
// "XML" in parentheses (  ), or start it from the same line as the keyword "return" 

// 3. How to read this:   <SomeElement attribute={a:foo} />  ...
// The outer {   } take us from the JSX "XML-like" mode to JavaScript mode. Then {a:foo}
// would just mean creating an ad-hoc object with property called 'a' with its
// value copied from variable foo.

// 3.b Like above, also in  <SomeElement attribute={{a}} /> we would create
// a JavaScript object, this time with {a} = object with one property 'a'
// with value copied from a variable called 'a' in the current context.

// 4. In many places you'll need to use the arrow function in call-back function definition.
// A normal function would not bind the "this" to the outer context = component, like we want to happen.

// 5. The create-react-app sets up the development environment, with another Node.js
// server, possibly trying to listen to port 3000. 
// (To avoid probs, we could use port 8686 for the development time front end Node.js "server". 
// Back-end Node.js server could use 8787)

// 6. The final front-end we get when we run 'npm build' and copy the contents of the 
// /build folder and publish it on some real web server as static .js  .html  and .css files
// E.g. on Myy, Heroku, or AWS   Then we won't have/need front-end Node.js server at all 
// anymore! Just static web server is enough. Most likely with ports 80,8080,443 used.

// Back-end REST API will continue to run Node.js., e.g. with that 8787 port