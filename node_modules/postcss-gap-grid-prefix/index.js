// tooling
import postcss from 'postcss';

// plugin
export default postcss.plugin('postcss-gap-grid-prefix', () => {
	return root => {
		// update grid-* declaration to polyfill gap usage
		root.walkDecls(/gap|row-gap|column-gap/i, decl => {
			decl.cloneBefore({
				prop: `grid-${decl.prop}`,
				value: decl.value
			});
		});
	};
});
