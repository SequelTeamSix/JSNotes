// Node?
// Node is a way for us to run JS outside of the browser, as a web server
// Node comes with NPM, node package manager,
// and NPX, node package executer

// (btw, babel is just used to convert (transpile) between different version of JS)
// installing some package create a few things:
// notably, node_modules, which contains these dependencies like Maven's m2 folder

// for react:
// npx create-react-app

// React?
// React is a way for us to modularize our application through a single-page, component-based
// structure, in such a way that it abstracts the manual DOM manipulation which we've had to do before

// React - there's a couple essential elements
// Components - there are function-based components and class-based
//   I prefer class based personally
// A class based component must contain a 'render' method which returns the JSX (our configurable
// version of HTML that allows us to insert our custom components)
// Components always have 'props' and 'state', which are the only things that can be configurable in
// the presentation of the component: properties, which the component recieves at start,
// and state, which the component can configure itself

// Props: an object passed in from the parent component containing data typically related to the setup
// of the component
// State: an object that contains data that the developer decides can theoretically change what should
// be displayed on the component
// An update to state is scheduled either by UseState() or .setState(), which will rerender the component
// with the new information that is in the state
// State: object containing the values that ultimately should be displayed on the webpage
// Props can also be displayed, but they don't change, realistically

// With function components, state should be modified with useState, with class, we should have
// a state object, and modify it using setState()
// What this will do, in either case, is trigger the component to rerender its portion of the DOM
// It's worth noting that React maintains its own internalm logic of what the DOM should be,
// Called the virtual DOM

// Hooks: functions that are called at certain points of the components lifecycle
// For class based components: we have componentDidMount(), componentDidUpdate, componentDidUnmount
// For function: useEffect() (on update), useState() (setting the state), useContext() (rerenders on
// context change)
// context is for passing variables between components

// (outdated because fetch just got added to node)
// Axios:
// we can install a new dependency to make promise-based
// calls to web servers
// Axios works effectively in the same way as the fetch API:
// Meaning, we make a call, it returns a promise
// So, we can either use async/await, or we can append .then(function) to the axios call being made
/*eg:

1: axios.get(url);
axios.post("url", 
    data: {
        request body JSON here
    },
    header: {
        "Content-Type" : "application/json"
    }

})
or:
axios({
    method: "post",
    url: "url",
    data: {
        request body JSON here
    },
    header: {
        "Content-Type" : "application/json"
    }

})
*/

// Data flow:
// One way data flow
// We can bind the state or props to parts of the react render using { }
// We can also bind events from child components to functions of the parent component (this
// is good for passing information upstream - IE this is lifting state)
// Is there 2 way data flow?
// What 2 way would be, basically, is if you had a text box that was 1:1 updated between
// the text the user writes and a JS variable
// React does *not* have this, but it can approximate it

// Routing
// Likewise, we also need to install a package for routing,
// which allows us to switch between "pages" on our SPA on the fly
// SPA?
// Single page application : means that our entire webpage is loaded on startup, and the views
// change without actually navigating to a new site

