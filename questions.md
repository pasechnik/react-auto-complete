1. What is the difference between Component and PureComponent? give an
example where it might break my app.

    PureComponent uses shallow method to compare props and state instead of shouldComponentUpdate() method. 

2. Context + ShouldComponentUpdate might be dangerous. Can think of
why is that?
    ShouldComponentUpdate doesn't check changes in context.
     
3. Describe 3 ways to pass information from a component to its PARENT.
    1. through context
    2. passing setters callbacks from a parent to children components 
    3. global services 
    
4. Give 2 ways to prevent components from re-rendering.
    1. ShouldComponentUpdate method that returns false or PureComponent 
    2. React.Memo or selectors
    
5. What is a fragment and why do we need it? Give an example where it
might break my app.
    JSX should return only one root element in order to avoid using wasting div react introduced Fragments. it's a container for react components.
     
     
6. Give 3 examples of the HOC pattern.
    1. React redux connect
    2. styled components 
    3. recompose library 
    
7. what's the difference in handling exceptions in promises, callbacks and
async...await.
    1. in promise add method .catch()
    2. in callback return error first
    3. in async use try { ... app logic } catch (e) { ... exception handling } 

8. How many arguments does setState take and why is it async.
    2 arguments:  
        1. new state part or function that accepts old state and returns new one 
        2. callback that will be executed after state update.
    it's async because of renders logic. we need to initiate new life cycle update and leave the method. 
       
9. List the steps needed to migrate a Class to Function Component.
    1. render is FC return
    2. props is function argument 
    3. change state, lifecycle method to hooks  

10. List a few ways styles can be used with components.
    1. styled components 
    2. material UI - useStyles and ThemeProvider
    3. css classes with css loader for webpack 
    
11. How to render an HTML string coming from the server.
    use  dangerouslySetInnerHTML attribute of a component with object with __html key  
