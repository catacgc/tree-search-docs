
The extension mirrors the exact same [[Searching|search]] functionality as the Plugin itself. 
## Installing
> [!WARN] Raycast Extension Unreleased
> For now you need to build the extension from source

## Configuring

The extension needs to be configured with the plugin socket path from [[Plugin Settings#Socket Path|the plugin settings]]

![[Pasted image 20241124153627.png]]

Invoking for the first time the extension in Raycast, will ask for the socket path to communicate with the plugin. Copy the socket path from Obsidian as instructed above.

![[Pasted image 20241124154141.png|400]]

## Using the extension

Take this sample file in my vault:

![[Pasted image 20241124155153.png|400]]

Invoking the following example search in Raycast (a node that contains "play" and has a children "raycast"): 

![[Pasted image 20241124155626.png|400]]

Invoking ⌘ + K opens up the command menu. The default one will be contextually selected from the [[Indexed Information|indexed node contents]]. A few examples from the file above:


| Type                                             | Screenshot                                |
| ------------------------------------------------ | ----------------------------------------- |
| Obsidian Page - Open Referenced in that line     | ![[Pasted image 20241124160150.png\|400]] |
| Text Line or Headers - Open the line in Obsidian | ![[Pasted image 20241124160341.png\|400]] |
| URL - Open with default Browser                  | ![[Pasted image 20241124160624.png\|400]] |
| Snippet - Copy Snippet                           | ![[Pasted image 20241124160647.png\|400]] |



## Building From Source

To build raycast from source:
- Clone the repo https://github.com/catacgc/obsidian-tree-search
- `npm install`
- `npm run dev`