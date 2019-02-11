<template lang="pug">
	.base-page
		slot
</template>

<script>
	export default {
		name: 'BasePage',
	}
</script>

<style lang="scss">
	:root {
		--base-page_-_background-color: #ffffff;
	}
</style>

<style lang="scss" scoped>
	.base-page {
		@include reset;

		display: flex;
		flex-flow: column;
		min-width: env(--vw-xs);
		min-height: 100vh;
		overflow: hidden;
		background-color: var(--base-page_-_background-color);
	}
</style>
