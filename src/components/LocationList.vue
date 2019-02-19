<template lang="pug">
</template>

<script>
	import IconPin from './IconPin';
	import IconFly from './IconFly';
	import IconMail from './IconMail';
	import IconPhone from './IconPhone';

	export default {
		name: 'LocationList',
		components: {
			IconPin,
			IconFly,
			IconMail,
			IconPhone
		}
	};
</script>

<style lang="scss" scoped>
	.location-list {
		@include reset;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: url("../img/mother-russia.svg") no-repeat 50% 50% / contain;
			opacity: 0.075;
		}
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		margin: 0 -10px xl-to-xs(-50, -30);
	}

	.location {
		margin: 0 10px xl-to-xs(50, 30);
		flex-shrink: 0;
		width: calc(20% - 20px);
		min-width: 190px;

		&-title {
			@include reset;

			display: -webkit-box;

			/* autoprefixer: ignore next */
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: normal;
			-webkit-line-clamp: 2;

			margin-bottom: 0.75em;
			height: rem(17) * 1.25 * 2;
			font-size: rem(17);
			font-weight: 600;
			line-height: 1.25;
			text-transform: uppercase;
		}

		&-info {
			@include reset;

			&-item {
				@include reset;

				position: relative;
				padding-left: 23px;
				color: #4e4e4e;
				font-size: rem(14);
				line-height: 1.25;
				overflow: hidden;
				text-overflow: ellipsis;

				& + & {
					margin-top: 0.65em;
				}

				a {
					color: var(--base-content-link_-_color);
					text-decoration: none;

					&:hover {
						color: var(--base-content-link-hover_-_color);
						text-decoration: underline;
					}
				}

				&.no-wrap {
					white-space: nowrap;
				}

				&-icon {
					position: absolute;
					top: rem(14) * 1.25 / 2;
					left: 6.5px;
					transform: translate(-50%, -50%) translateY(1px);
					max-width: 13px;
					max-height: 13px;
					color: #b2b2b2;
				}
			}
		}
	}
</style>
