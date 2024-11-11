The full schema for the markdown processor:

	```tree-context
	file: "[[Root]]" # default=current file and heading; always use double quotes for valid yaml
	depth: 5             # default=1; depth at which the results will be shown
	```

It will show all children for the `[[Root]]` file with a default display of `depth=5`. Visual below:

![[Pasted image 20241111105202.png|400]]

## Search mode
You can always click on the header line ( Root Children above ) and show the search bar that allows for further narrow down of the children or expand / minimize the number of children displayed. 
## Default file and header mode

If you leave out the file context and drop just:

	```tree-context
	```

in a file, there two simple rules that will take effect:
- if the file is under a heading, then it will show the children of that `[[file#heading]]` onwards
- otherwise it will show all children of the current `[[file]]`