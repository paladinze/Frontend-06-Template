# Chomsky hierarchy

## Four types of grammar
- type0: recursively enumerable (turing machine) <== most general form
- type1: context sensitive
- type2: context insensitive
- type3: regular (finite state machine) <== most specific

## BNF (Backus–Naur form)

### what
- a bunch of symbols for describing **context-free** grammar

### syntax
- the expression: `- <symbol> ::= __expression__`
    - symbols never appear on the left are **terminal symbol**
    - symbols appear on the left are **non-terminal**
- two types of symbols
    - terminal symbol (syntax `"abc"`)
    - non-terminal symbol (consists of other symbols)
- other symbols
    - `::=`: defined as
    - `*`: repeat multiple times
    - `|`: or
    - `+`: at least once
     
- example: elementary arithmetic
    ```
     Rules for generative expressions
     <Expression> ::=
         <AddMinus><EOF>
    
     <AddMinus> ::=
         <MULDIV>
             |<AddMinus><+><MULDIV>
             |<AddMinus><-><MULDIV>
     <MULDIV> ::=
         <Number>
             |<MULDIV><*><Number>
             |<MULDIV></><Number>
    ```
  
  
 ## programming language categories
 
 ### declarative
 - Prolog
 - SQL
 - Wolfram Language
 - JavaScript (the functional part)
 
 ### imperative
 - JavaScript (the Java-like part)
 - Java
 - C/C++
 - MATLAB
 - LUA
 - RUBY
 - Python
 
## Objects in JS

data property
- [[value]]
- writable
- enumerable
- configurable

accessor property
- get
- set
- enumerable
- configurable
 
 
 ## class based OOP syntax
 - new
 - class
 - extends
 
 ## prototype based OOP syntax
 - Object.create()
 - Object.setPrototypeOf()
 - Object.getPrototypeOf()
 