
## closure
- every function is a closure
- determined at definition time
- has two parts
	- function code
	- environement record: a list of variables referenced
- execution context is chainable

## realm
- a collection of 
	- intrinsic objects
	- global environment
	- code that is loaded within the scope
- each frame and window has its own realm