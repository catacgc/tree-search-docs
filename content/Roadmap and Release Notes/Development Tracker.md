## Demos
- [Reddit Link](https://www.reddit.com/r/ObsidianMD/comments/1frcsuq/tree_search_a_new_obsidian_plugin/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) 
- [Reddit Link 2](https://www.reddit.com/r/ObsidianMD/comments/1fxi9fj/obsidian_tree_search_050/) 2024-10-06

[[ReleaseNotes]]
# Backlog

- [ ] feature: empty page - show 2 of the biggest trees in the vault
- [ ] feature: search for the smallest connected components in the vault (organizing mode)
- [ ] feature: open mode new tab only if the same tab is not opened already
- [ ] feature: snippet mode - copy the snippet
- [ ] bug: empty parent in the relation links a shadow empty node
- [ ] bug: cmd + click or enter opens a new tab
- [ ] feature: expand search results to the leafs that match
- [ ] feature: related notes that are backlinks 
- [ ] feature: copy link to line
- [ ] feature: [[folders support]]
	- [ ] feature: reorder in various folders via [drag and drop](https://react-dnd.github.io/react-dnd/about) 
- [ ] feature: [[discovery callout]]
	- [ ] feature: files with no parent discovery [[organise view]]
- [ ] feature: add default sorting capability
	- [ ] improvement: in the Context page, show (10?) open tasks as a first class citizen; sort children by headers, files and leafs
- [ ] feature: show preview of image embeds in search results
- [ ] bug: add test for removing an entire page
- [ ] bug: disambiguate between full links and references (e.g Work/Project vs Project)
- [ ] add query modifiers :task, :page
- [ ] click trough: add headers and aliases automatically for pages when they don't exist
- [ ] add support to show archived items when there is no result
- [ ] add support for tags and tags hierarchy

- [x] bug: obsidian excluded files support
- [x] add changelog and docs link in settings
- [x] docs: interface docs
- [x] add keyboard info bottom at the search bar

## How to Build and Release
#### Dev
```
# build
npm run dev
```

You will need the excellent [hot reload plugin](https://github.com/pjeby/hot-reload) installed if you want your changes to reflect automatically
#### Docs

```
# build and preview
deno task quartz build --serve

# publish latest version
deno task quartz sync 
```
