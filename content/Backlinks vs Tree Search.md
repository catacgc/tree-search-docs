Backlinks are what everyone is familiar with in Obsidian. If I add a note here to [[another note]], then you would expect for [[another note]] to be related to this document.

But there are other natural relations you can create between notes. What if we add an outline like the following:

```

- [[Skills]]
	- [[Learn]]
		- [[Articles]]
```

By default Obsidian doesn't give any special treatment to all these backlinks. But there is an inferred relation here in this structure: [[Skills]] / [[Learn]] / [[Articles]].

This structure is maintained by Tree Search and made available in a number of views: a very fast quick switcher, a supercharged backlinks view or an in-file context.

Where it shines though is in the organic nature of building this structure as you go, with zero thought going into special formatting (besides the standard obsidian outline ). 

Suppose that now we find a new article that you want to bookmark, an article about connected thinking. You can simply note:

```
- [[Connected Thinking]] http://article in [[Articles]]
```


This note can exist wherever it feels more natural: a daily note, an inbox note or in the [[Articles]] note itself. Tree search will index it and made it available.

What's the value you ask ? Retrieval. When you want to search for that article, you can now start from various anchor points. You can search for [[Connected Thinking]]. Or [[Articles]]. Or [[Skills]]. And you will get back a tree of information where relations are an integral part of the search.

Explore and search your virtual folders of thoughts, ideas and bookmarks.

![[Pasted image 20241212091635.png]]