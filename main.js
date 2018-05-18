export default function renderReactSerialized(tree, options) {
	return processNode(tree, options);
}

function processNode(node, options) {
	if(!Array.isArray(node)) {
		return node;
	}
	const children = node.slice(2).map((child) => processNode(child, options));
	return options.createElement(node[0], node[1], ...children);
}
