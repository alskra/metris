<template lang="pug">
</template>

<script>
	import ButtonPrimary from './ButtonPrimary';
	import ButtonLink from './ButtonLink';
	import LocationList from './LocationList';

	export default {
		name: 'SectionPage',
		components: {
			ButtonPrimary,
			ButtonLink,
			LocationList
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

		margin: 0 0 0.75em;
		color: #81306e;
		font-size: xl-to-xs(50, 35);
		font-weight: 800;
		line-height: 1.25;
		hyphens: none;

		@media (width < env(--vw-sm)) {
			hyphens: manual;
		}
	}

	.tab-bar {
		position: relative;
		z-index: 3;
		//height: calc(#{xl-to-xs(20, 14)} * 1.25 + #{xl-to-xs(25, 13)} + 5px);
		//overflow: hidden;
	}

	.tab-bar-scroll {
		display: flex;
		//margin-bottom: -30px;
		//padding-bottom: 30px;
		//overflow-x: scroll;
	}

	.tab-bar-item {
		@include reset;

		border-bottom: 6px solid transparent;
		padding-bottom: xl-to-xs(25, 13);
		//flex-shrink: 0;
		min-width: 40px;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: xl-to-xs(20, 14);
		font-weight: 600;
		line-height: 1.25;
		cursor: pointer;
		transition: color 0.15s, border-bottom-color 0.15s;

		& + & {
			margin-left: xl-to-xs(60, 5);
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
		background: linear-gradient(-24deg, #5a3081 0%, #81306e 100%);

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

		&.number-1 {
			right: xl-to-xs(84, 22);
			bottom: xl-to-xs(-33, -17);
			width: xl-to-xs(495, 277);
			min-width: 277px;
			max-width: 495px;
		}

		&.number-2 {
			right: xl-to-xs(92, 18);
			bottom: 0;
			width: xl-to-xs(553, 310);
			min-width: 310px;
			max-width: 553px;
		}

		&.number-3 {
			right: xl-to-xs(94, 25);
			bottom: 0;
			width: xl-to-xs(466, 263);
			min-width: 263px;
			max-width: 466px;
		}
	}

	.tab-content {
		position: relative;
		z-index: 1;
		margin-right: 30%;
		padding: xl-to-xs(80, 30) 0;

		@media (width <= env(--vw-xl)) {
			padding-bottom: xl-to-xs(80, 315);
		}

		@media (width < env(--vw-sm)) {
			margin-right: 0;
		}
	}

	.tab-content-body {
		margin-bottom: xl-to-xs(50, 30);
		color: white;
		//text-shadow: 0 0 1px rgba(#000000, 1),
		//0 0 1px rgba(#000000, 1);

		dl {
			margin: 0;
			padding-left: xl-to-xs(30, 24);

			dt {
				font-size: xl-to-xs(30, 24);
				font-weight: 700;
				line-height: 1.25;

				&::before {
					content: '';
					display: inline-block;
					vertical-align: middle;
					margin-right: -8px;
					width: 8px;
					height: 8px;
					background-color: var(--color-primary);
					transform: translateX(xl-to-xs(-30, -24));
				}

				&:not(:first-child) {
					margin-top: 1em;
				}
			}

			dd {
				margin: 0.5em 0 0;
				font-size: xl-to-xs(20, 16);
				line-height: 1.5;
			}
		}
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
