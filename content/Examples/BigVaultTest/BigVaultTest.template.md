
<%* 
function gen(n, depth, limit) {
	if (depth == limit) return;
	
	for (let i = 0; i < n; i++) {	
		const rep = "    ".repeat(depth);

		tR += `${rep}- [[page${depth}page${i}]]
`;
		gen(n, depth + 1, limit);
	}
}

gen(3, 0, 7);
%>