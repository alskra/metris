<template lang="pug">
</template>

<script>
	import AgencyIcon from './AgencyIcon';
	import ButtonPrimary from './ButtonPrimary';

	export default {
		name: 'HeaderPage',
		components: {
			AgencyIcon,
			ButtonPrimary
		}
	};
</script>

<style lang="scss" scoped>
	.header-page {
		@include reset;

		display: flex;
		flex-flow: column;
		position: relative;
		min-height: 100vh;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: url("../img/header-bg.jpg") no-repeat 50% 0 / cover,
			linear-gradient(-24deg, #5a3081 0%, #81306e 100%);
			clip-path: polygon(
					0 0,
					100% 0,
					100% 100%,
					0 calc(100% - #{vw(200, env(--vw-xl))})
			);
		}

		.base-container {
			position: relative;

			&.top {
				display: flex;
				align-items: center;
				padding: 20px xl-to-xs(45, 15);
				max-width: none;

				@media (width < env(--vw-md)) {
					justify-content: center;
				}
			}

			&.middle {
				display: flex;
				flex-flow: column;
				justify-content: center;
				flex-grow: 1;
			}

			&.bottom {
			}
		}
	}

	.logo {
		@include reset;

		max-width: 100%;
		cursor: pointer;
	}

	.logo-img {
		display: block;
		width: 100%;
	}

	.title {
		@include reset;

		margin-bottom: 1em;
		color: #ffffff;
		font-size: xl-to-xs(50, 36);
		font-weight: 800;
		line-height: 1.25;
		hyphens: none;

		@media (width < env(--vw-sm)) {
			hyphens: manual;
		}
	}

	.menu {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		margin: 0 -9px;
	}

	.menu-item {
		display: flex;
		flex-flow: column;
		position: relative;
		margin: 0 9px;
		padding: 30px 15px 65px;
		width: calc(100% / 3 - 18px);
		background-color: #ffffff;
		border-radius: 10px 10px 0 0;

		@media (width >= 768px) {
			&:nth-child(1) {
				min-height: 275px + 39px + 34px;
			}

			&:nth-child(2) {
				min-height: 275px + 39px;
			}

			&:nth-child(2),
			&:nth-child(3) {
				.menu-item-gutter {
					position: absolute;
					bottom: 0;
					left: -18px;
					width: 18px;
					height: vw(140, env(--vw-xl));
					max-height: calc(275px + 39px - 10px - 9px);
					background-color: #ffffff;

					&::before {
						content: '';
						position: absolute;
						top: -28px;
						left: -10px;
						border: 10px solid #ffffff;
						border-top-color: transparent;
						border-right-color: transparent;
						border-radius: 50%;
						width: 38px;
						height: 38px;
						transform: rotate(-45deg);
					}
				}
			}

			&:nth-child(3) {
				min-height: 275px + 39px + 78px;

				.menu-item-gutter {
					height: vw(100, env(--vw-xl));
				}
			}
		}

		@media (width < 768px) {
			width: calc(100% - 18px);

			& + & {
				border-radius: 0;
			}
		}
	}

	.menu-item-title {
		@include reset;

		margin-bottom: 20px;
		font-size: rem(20);
		font-weight: 800;
		line-height: 1.25;
		text-align: center;
	}

	.menu-item-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		flex-grow: 1;
	}

	.menu-item-footer {
		display: flex;
		flex-flow: column;
		align-items: center;

		.base-button {
			margin-bottom: 20px;
		}
	}

	.menu-item-link {
		@include reset;

		max-width: 100%;
		color: var(--base-content-link_-_color);
		font-size: rem(13);
		line-height: 1.25;
		text-decoration: underline;
		cursor: pointer;
		transition: color 0.15s;

		&:hover {
			text-decoration: none;
		}
	}
</style>
