<template lang="pug">
</template>

<script>
	export default {
		name: 'FooterPage'
	};
</script>

<style lang="scss" scoped>
	.footer-page {
		@include reset;

		margin-top: auto;
		padding: 30px 45px;

		@media (width < env(--vw-xl)) {
			padding-left: 15px;
			padding-right: 15px;
		}
	}

	.row {
		margin: -15px;
		display: flex;
		flex-wrap: wrap;
	}

	.col {
		padding: 15px;

		@media (width < env(--vw-sm)) {
			text-align: center;
		}

		&.left,
		&.right {
			width: calc((100% - 1074px) / 2);

			@media (width < env(--vw-xl)) {
				width: percentage(1/4);
			}

			@media (width < env(--vw-sm)) {
				width: 100%;
			}
		}

		&.center {
			width: 1074px;

			@media (width < env(--vw-xl)) {
				width: percentage(1/2);
			}

			@media (width < env(--vw-sm)) {
				width: 100%;
			}
		}
	}

	.logo {
		vertical-align: top;
		max-width: 100%;
	}

	.content {
		color: rgba(#000000, 0.4);
		font-size: 13px;
		line-height: 1.25;

		p {
			margin: 0;
		}

		a {
			color: inherit;
			text-decoration: underline;
			transition: color 0.15s;

			&:hover {
				color: var(--base-content-link_-_color);
				text-decoration: none;
			}
		}

		&.text-right {
			text-align: right;

			@media (width < env(--vw-sm)) {
				text-align: center;
			}
		}
	}
</style>
