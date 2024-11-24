## Graph Nodes

The underlying data structure for the plugin is a directed graph.

Nodes tracked by this plugin are:
- All vault notes
- List items that
    - Have links to other notes
    - Have links to web pages
    - Have tags
- All virtual pages (notes that are not in the vault but are linked to from other notes)
- All headers of all levels

| Node                                           | Type         | Description                                                                  |
| ---------------------------------------------- | ------------ | ---------------------------------------------------------------------------- |
| `MyCompany.md`                                 | Page         | Any note in the vault                                                        |
| `[[Projects]]`                                 | Virtual Page | Whenever the page does not exist in the vault, but there's still a reference |
| [Quartz is amazing](https://quartz.jzhao.xyz/) | List Item    | All vault lines that contain a URL                                           |
| A tagged line #note                            | List Item    | All vault lines that contain a tag                                           |
| - `[[Joe]] meeting notes`                      | List Item    | All vault lines that contain a Obsidian Reference                            |
| `## Header`                                    | Header       | A header in a note, if it has List Item children                             |
| `- [ ] Task`                                   | Task         | A task in a note                                                             |

## Directed Edges ( Relations )

The plugin track relations between nodes. The relation have the direction implied by the outline:
- If a Page is under another Page, the first is a child of the second
- if a Page has `parent` property ( property name configurable in [[Plugin Settings|settings]] )
- If a List Item is under another List Item, the first is a child of the second
- If a List Item is under a Header, the first is a child of the Header
- If a List Item is under a Page, the first is a child of the Page
- If a List Item contains multiple references to other Pages, all Pages are parents of the List Item
- Tasks are treated identical to List Items
