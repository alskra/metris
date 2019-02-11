<template lang="pug">
</template>

<script>
	export default {
		name: 'HeaderPage'
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
			background: url("../img/header-bg.jpg") no-repeat 50% 0 / cover;
			clip-path: polygon(
					0 0,
					100% 0,
					100% 100%,
					0 calc(100% - #{vh(200, 768)})
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
		//justify-content: center;
		margin: 0 -9px;
	}

	.menu-item {
		position: relative;
		margin: 0 9px;
		padding: 30px 15px 65px;
		width: calc(100% / 3 - 18px);
		//min-width: calc(290px - 18px);
		//max-width: calc(100% - 18px);
		min-height: vh(275 + 39, 768);
		background-color: #ffffff;
		border-radius: 10px 10px 0 0;

		@media (width >= 768px) {
			&:nth-child(2),
			&:nth-child(3) {
				&::before {
					content: '';
					position: absolute;
					bottom: vh(140, 768);
					left: -28px;
					margin-bottom: -10px;
					border: 10px solid #ffffff;
					border-top-color: transparent;
					border-right-color: transparent;
					border-radius: 50%;
					width: 38px;
					height: 38px;
					transform: rotate(-45deg);
				}

				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					left: -18px;
					width: 18px;
					height: vh(140, 768);
					background-color: #ffffff;
				}
			}

			&:nth-child(3) {
				&::before {
					bottom: vh(100, 768);
				}

				&::after {
					height: vh(100, 768);
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
</style>
