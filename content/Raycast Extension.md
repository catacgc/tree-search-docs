
The extension mirrors the exact same [[Searching|search]] and quick launching functionality as the [[index|Tree Search]] plugin and requires the plugin to be installed into Obsidian. 

## Installing
> [!WARN] Raycast Extension Unreleased
> For now you need to build the extension from source, which is very easy: run `npm install` and `npm run build`
      
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

## Multiple Elements 
A single indexed line can have multiple elements: multiple vault pages, multiple links, multiple snippets. In that case, the extension will add multiple Quick Commands for each element. You can access the Quick Command menu using Cmd + K

![[Pasted image 20241210102012.png|500]]

### Default Shortcuts

For each results from the result, besides the dynamic actions above there are two default shortcuts:

- **Cmd + C** - copies the entire row
- **Shift + Enter** - open the line where that nodes was recorded in the vault

### Multiple Vault Support

You can support multiple vaults by adding a comma separated list of vault sockets. Example: `/tmp/raycast-Primary Vault.sock,/tmp/raycast-Secondary Vault.sock`. Currently, the results are going to be show in the order of the vault socket paths. In this example, matches from the `Primary Vault` followed by results from the `Secondary Vault`

The vault results are going to be colored differently as shown below. 

![[Pasted image 20241208180914.png]]
## Building From Source

To build raycast from source:
- Clone the repo https://github.com/catacgc/obsidian-tree-search
- `cd raycast`
- `npm install`
- `npm run dev`