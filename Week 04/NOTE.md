# Trie

## why trie
- easy to find strings with same prefix
- easy to list out stored strings in order

## common operations
- insert (time: `O(M)`)
    - find node matching current char
    - if node exists, go to the next node
    - if link doesn't exists, create a new node and attach it to parent
    - repeat the steps above, til reaching the end of string, mark it as end of string

- find[]
    - traverse the tree
    - each end symbol indicates a word is found


# KMP

## why KMP
- substring matching

## principle
- use repetition in the source string to save some matching effor  

## steps
- generate prefix table (next table)
- use the table to optimize where to continue searching in case of mismatch
