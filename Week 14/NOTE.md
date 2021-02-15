# JSX

## configuration
```
# jsx transpilation
npm i -D webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/plugin-transform-react-jsx
```

## syntax
- jsx is just syntactical sugar for calling `React.createElement`
    - 1st arg: element type
    - 2nd arg: props
    - remaining args: child nodes
- has nothing to do with VDOM, so can be used to create the actual DOM if so desired
