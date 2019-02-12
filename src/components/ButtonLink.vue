<template lang="pug">
	base-button.button-link(:tag="tag")
		slot
</template>

<script>
	import BaseButton from './BaseButton';

	export default {
		name: 'ButtonLink',
		props: {
			...BaseButton.props
		}
	};
</script>

<style lang="scss" scoped>
	.button-link {
		padding: 0 40px;
		height: 53px;
		color: #ffffff;
		font-size: rem(15);
		text-decoration: underline;

		&:not(:disabled) {
			&:hover {
				text-decoration: none;
			}
		}
	}
</style>
