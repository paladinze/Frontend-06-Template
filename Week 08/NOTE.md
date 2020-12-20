
# Finite state machine

## what
- every state is a machine
- all machines are independent (decoupled from other machines)
- each machine corresponds to a pure function
    - no state
    - no side effect
- two types of FSM
    - **Moore** type: each machine has a pre-defined next state (regardless what input is)
    - **Mealy** type: next state depends on input 
      
## FSM in JS
- each state is a pure function
 ```js
function state(input) { // params is the input
    return next; // return another func as the next state
}
```
- FSM driven by a while loop
```js
while(input) {
    state = state(input)
}
```

# HTTP

## what
- text-based protocol
- request structure
    - request line
    - headers
    - body
- response structure
    - status line
