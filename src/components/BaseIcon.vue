<template lang="pug">
	svg.base-icon(
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:viewBox="viewBox"
		:aria-labelledby="iconName"
		role="presentation"
		:fill="iconColor"
	)
		slot
</template>

<script>
	export default {
		name: 'BaseIcon',
		props: {
			iconName: {
				type: String,
				default: null
			},
			width: {
				type: [Number, String],
				default: 24
			},
			height: {
				type: [Number, String],
				default: 24
			},
			viewBox: {
				type: String,
				default: '0 0 24 24'
			},
			iconColor: {
				type: String,
				default: 'currentColor'
			}
		}
	}
</script>

<style lang="scss">
	.base-icon {
		> * {
			pointer-events: none;
		}
	}
</style>
