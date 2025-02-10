Search is the must powerful feature of this plugin. 

You [[Plugin Settings|can open a Search modal]] (Tree Search: Search) to find and open notes, headers, links and tagged lines that are nested under it.

This makes retrieval of [[Indexed Information|atoms of information]] (notes, tasks, tags, headers, and web links) very fast and contextual.

![[Pasted image 20241110123532.png]]
## Shortcuts and Navigation
- ***Up, Down*** -> Up and down arrows move the selection 
- ***Enter*** -> Open the selected file
- ***Shift + Enter*** -> Highlight the source of a relation

## Hierarchical Search

For large vault, efficient information retrieval typically needs a lot of structure. This is one of the main points that this plugin tries to address. It easy for to humans to narrow patterns of retrieval. Instead of **"what is the name of that documentation generator library"** it is much faster to ask yourself **"maybe documentation under software development ?"** and then narrow down further. 

A somewhat synthetic example from this example vault:

![[Pasted image 20241110124805.png]]

### Mind the dot (search separator)

This syntax (terms split by the [[Plugin Settings|search separator]] ".") tells the search engine that it should find all graph nodes that contain `root` that have a directed path towards nodes that contain `doc` 

The [[Indexed Information#Directed Edges ( Relations )|hierarchy]] can be built organically. No need to rush or refactor your entire vault. You simply by adding some outline to existing notes and relations or using the [[Plugin Settings#Settings|parent frontmatter]] property to hint towards a parent. 

## Search Operators

Besides [[Plugin Settings#Settings|separator]] (`.`) that is the most important search operator, there are a few useful search modifiers:

### `:task` - matches any task node in the tree

![[Pasted image 20250206075239.png]]

### `:emoji` - matches any node that contains an emoji

![[Pasted image 20250206083326.png]]

### `:page` - matches pages only
![[Pasted image 20250210061745.png]]

### `:headers` - matches headers only
![[Pasted image 20250210061812.png]]


## Search Operators and Examples

| Expression      | Definition                                  |
| --------------- | ------------------------------------------- |
| `value`         | `contains(value)`                           |
| `"page"`        | `equals(page)`                              |
| `"page`         | `startsWith(page)`                          |
| `-value`        | `not(contains(value))`                      |
| `-value test`   | `and(not(contains(value)), contains(test))` |
| `value test`    | `and(contains(value), contains(test))`      |
| value \| test   | `or(contains(value), contains(test))`       |
| `value :task`   | `and(contains(value), modifier(:task))`     |
| `value :emoji`  | `and(contains(value), modifier(:emoji))`    |
| `value :page`   | `and(contains(value), modifier(:page))`     |
| `value :header` | `and(contains(value), modifier(:header))`   |
| `:header :page` | `and(modifier(:header), modifier(:page))`   |

## Smart Search

The intent is for this search to be much faster than the other search methods in Obsidian. This plugin achieves speed by
- pre-indexing most of the graph at refresh time and edit time
- optimistically searching and dynamically adjusting number of results (most of the perceived search speed comes from optimizing the rendering, not the search itself)
- no fuzzy-matching capabilities
- no casing support (lowercase same as CamelCase - this is a feature as the intent is to think less about the information was structured, what casing was used, etc)