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
		margin: -10px -15px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.col {
		padding: 10px 15px;

		@media (width < env(--vw-sm)) {
			text-align: center;
		}

		&.left,
		&.right {
			width: calc((100% - 1074px) / 2);

			@media (width < env(--vw-xl)) {
				width: percentage(1/3);
			}

			@media (width < env(--vw-sm)) {
				width: 100%;
			}
		}

		&.center {
			margin: 0 auto;
			width: 1074px;

			@media (width < env(--vw-xl)) {
				width: percentage(1/3);
			}

			@media (width < env(--vw-sm)) {
				width: 100%;
			}
		}
	}

	.logo {
		display: inline-block;
		vertical-align: top;
		max-width: 100%;

		&-img {
			display: block;
			width: 100%;
		}
	}

	.content {
		color: rgba(#000000, 0.4);
		font-size: rem(13);
		line-height: 1.5;

		p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1em;
			}
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

	.developer {
		white-space: nowrap;

		&::before {
			content: '';
			display: inline-block;
			margin: 0 0.4em -4px 0;
			width: 17px;
			height: 17px;
			background: url("../img/icons/png/dev-gvate.png") no-repeat 50% 50% / 100% 100%;
		}
	}
</style>
