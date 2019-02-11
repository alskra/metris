<template lang="pug">
	base-button.button-primary(:tag="tag")
		slot
</template>

<script>
	import BaseButton from './BaseButton';

	export default {
		name: 'ButtonPrimary',
		props: {
			...BaseButton.props
		}
	};
</script>

<style lang="scss" scoped>
	.button-primary {
		border-radius: 4px;
		padding: 0 40px;
		height: 53px;
		color: #ffffff;
		font-size: rem(14);
		background-color: var(--color-primary);

		&:not(:disabled) {
			&:hover {
				background-color: #964182;
			}
		}
	}
</style>
