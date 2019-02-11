<template lang="pug">
	.base-container
		slot
</template>

<script>
	export default {
		name: 'BaseContainer'
	};
</script>

<style lang="scss" scoped>
	.base-container {
		@include reset;

		margin: 0 auto;
		padding: 0 15px;
		width: 100%;
		max-width: 1074px;
	}
</style>
