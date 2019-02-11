<template lang="pug">
	.base-button(
		:is="tag"
		:type="tag === 'button' ? 'button' : null"
	)
		slot(name="icon")

		span.label
			slot.trata
</template>

<script>
	export default {
		name: 'BaseButton',
		props: {
			tag: {
				type: String,
				default: 'button'
			}
		}
	}
</script>

<style lang="scss">
	:root {
		--base-button_-_transition-property: color,
		border-color,
		background-color,
		box-shadow;
		--base-button_-_transition-duration: 0.15s;
		--base-button_-_transition-timing-function: ease-in-out;
	}
</style>

<style lang="scss" scoped>
	.base-button {
		@include reset;

		display: inline-flex;
		vertical-align: top;
		justify-content: center;
		align-items: center;
		min-width: 0;
		max-width: 100%;
		line-height: 1.25;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		transition-property: var(--base-button_-_transition-property);
		transition-duration: var(--base-button_-_transition-duration);
		transition-timing-function: var(--base-button_-_transition-timing-function);

		&:not(:disabled) {
			cursor: pointer;
		}
	}

	.label {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
