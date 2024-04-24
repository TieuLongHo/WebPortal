<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js/lib/core';
	import cpp from 'highlight.js/lib/languages/cpp';
	import 'highlight.js/styles/github-dark.css';

	hljs.registerLanguage('c++', cpp);

	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	export let code_solution = '';
</script>

<CodeBlock language="c++" code={code_solution}></CodeBlock>
