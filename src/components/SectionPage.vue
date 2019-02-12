<template lang="pug">
</template>

<script>
	import ButtonPrimary from './ButtonPrimary';
	import ButtonLink from './ButtonLink';

	export default {
		name: 'SectionPage',
		components: {
			ButtonPrimary,
			ButtonLink
		},
		data() {
			return {
				currentTab: 1
			};
		}
	};
</script>

<style lang="scss" scoped>
	.section-page {
		@include reset;

		margin-bottom: xl-to-xs(100, 50);
	}

	.title {
		@include reset;

		margin: 0 0 0.5em;
		color: #81306e;
		font-size: xl-to-xs(50, 35);
		font-weight: 800;
		line-height: 1.25;
	}

	.tab-bar {
		display: flex;
		position: relative;
		z-index: 3;
		overflow-x: auto;
	}

	.tab-bar-item {
		@include reset;

		border-bottom: 6px solid transparent;
		padding-right: 20px;
		padding-bottom: xl-to-xs(25, 13);
		flex-shrink: 0;
		max-width: calc(50% - #{xl-to-xs(60 / 2, 20 / 2)});
		font-size: xl-to-xs(20, 14);
		font-weight: 600;
		line-height: 1.25;
		cursor: pointer;
		transition: color 0.15s, border-bottom-color 0.15s;

		& + & {
			margin-left: xl-to-xs(60, 20);
		}

		&:hover {
			border-bottom-color: rgba(#ffffff, 0.5);
			color: #984284;
		}

		&.current {
			border-bottom-color: #9f438a;
			color: #60b646;
		}
	}

	.tab-frame {
		position: relative;
		margin-top: -6px;
		background-color: #000000;

		&:before {
			content: '';
			position: absolute;
			z-index: 2;
			top: 0;
			right: 0;
			left: 0;
			height: 6px;
			background-color: #ffffff;
			opacity: 0.5;
		}
	}

	.tab-frame-item {
		position: relative;
		min-height: 600px;
		background: none no-repeat 50% 0 / cover;
	}

	.tab-frame-item-img {
		position: absolute;
		right: xl-to-xs(84, 42);
		bottom: xl-to-xs(-33, -17);
		width: xl-to-xs(495, 277);
		min-width: 277px;
		max-width: 495px;
		//height: 582px;
	}

	.tab-content {
		position: relative;
		z-index: 1;
		margin-right: 30%;
		padding: xl-to-xs(120, 30) 0;

		@media (width < env(--vw-sm)) {
			margin-right: 0;
		}
	}

	.tab-content-body {
		margin-bottom: xl-to-xs(50, 30);
	}

	.tab-content-title {
		@include reset;

		color: #ffffff;
		font-size: xl-to-xs(50, 36);
		font-weight: 700;
		line-height: 1.25;
	}

	.tab-content-desc {
		@include reset;

		color: #ffffff;
		font-size: rem(20);
		line-height: 1.25;
	}

	.tab-content-actions {
		display: flex;

		@media (width < env(--vw-sm)) {
			flex-flow: column;

			.base-button {
				margin: 0 auto;
			}
		}
	}
</style>
