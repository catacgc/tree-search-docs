
```
How this works. Any file named identical with an existing folder name. For example "Project1" will be tagged as a folder file. 

Then you have a command called "Move files to folders" and all descendants of that file in the graph will be moved in that folder. The algorithm is greedy and moves all files. 

It maintains a folder "gravity" score for folder nodes and moves a child with two parents to the folder with the bigger "gravity".

An example: 

Say you have a tree structure in place already (not mandatory to start with, it can evolve at any time). 

Work
- Projects
- - Project1
Daily
- Sep
- - Today
Archive

Let's imagine a few edits of the vault. Create a new not Child note and add the parent property to both Project1 and Today notes: in Today's note you do

- [[Project1]]
	- [[Child]]

When you run the "Move files to folders" the algoritm looks at the parents and their gravity scores. The most nested folders will have the higer gravity by default, so Child can be moved both to Today and Project1. So it cannot make a decision. 

In order to break a tie, it runs the following algo: 
- if a "folder node" has a gravity frontmatter property, then it ads that to the gravity score
- if a "folder node" is a child of another folder node, it ads the gravity score of that folder to its score
- a "folder node" adds to the gravity, the number of children

```