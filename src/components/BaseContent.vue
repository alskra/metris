<template lang="pug">
	.base-content
		slot
</template>

<script>
	export default {
		name: 'BaseContent',
	};
</script>

<style lang="scss">
	:root {
		--base-content_-_color: #000000;
		--base-content_-_font-family: 'Open Sans', sans-serif;
		--base-content_-_font-size: #{rem(16)};
		--base-content_-_font-weight: 400;
		--base-content_-_line-height: 1.5;
		--base-content_-_margin: 1em;

		--base-content-link_-_color: #81306e;
		--base-content-link-hover_-_color: #{darken(#81306e, 15%)};

		--base-content-headings_-_color: var(--base-content_-_color);
		--base-content-headings_-_font-family: var(--base-content_-_font-family);
		--base-content-headings_-_font-weight: 800;
		--base-content-headings_-_line-height: 1.25;

		--base-content-heading-1_-_font-size: #{rem(50)};
		--base-content-heading-2_-_font-size: #{rem(46)};
		--base-content-heading-3_-_font-size: #{rem(40)};
		--base-content-heading-4_-_font-size: #{rem(32)};
		--base-content-heading-5_-_font-size: #{rem(24)};
		--base-content-heading-6_-_font-size: #{rem(16)};
	}

	@custom-selector :--headings
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	.h1,
	.h2,
	.h3,
	.h4,
	.h5,
	.h6;

	.base-content {
		@include reset;

		color: var(--base-content_-_color);
		font-family: var(--base-content_-_font-family);
		font-size: var(--base-content_-_font-size);
		font-weight: var(--base-content_-_font-weight);
		line-height: var(--base-content_-_line-height);
		word-wrap: break-word;

		a {
			color: var(--base-content-link_-_color);
			text-decoration: none;

			&:hover {
				color: var(--base-content-link-hover_-_color);
				text-decoration: underline;
			}
		}

		p,
		blockquote {
			// page-break-inside: avoid;
		}

		p,
		blockquote,
		ul,
		ol,
		dl,
		table,
		pre {
			margin-top: 0;
			margin-bottom: var(--base-content_-_margin);
		}

		:--headings {
			margin-top: calc(var(--base-content_-_margin) * 1.5);
			margin-bottom: var(--base-content_-_margin);
			color: var(--base-content-headings_-_color);
			font-weight: var(--base-content-headings_-_font-weight);
			line-height: var(--base-content-headings_-_line-height);
		}

		h1,
		.h1 {
			font-size: var(--base-content-heading-1_-_font-size);
		}

		h2,
		.h2 {
			font-size: var(--base-content-heading-2_-_font-size);
		}

		h3,
		.h3 {
			font-size: var(--base-content-heading-3_-_font-size);
		}

		h4,
		.h4 {
			font-size: var(--base-content-heading-4_-_font-size);
		}

		h5,
		.h5 {
			font-size: var(--base-content-heading-5_-_font-size);
		}

		h6,
		.h6 {
			font-size: var(--base-content-heading-6_-_font-size);
		}

		ul,
		ol {
			padding-left: 40px;
		}

		li + li {
			margin-top: calc(var(--base-content_-_margin) * 0.25);
		}

		ul ul,
		ul ol,
		ol ul,
		ol ol {
			margin-top: 0;
			margin-bottom: 0;
		}

		ul {
			overflow: hidden;

			> li {
				position: relative;
				list-style: none;

				&::before {
					content: '';
					display: inline-block;
					vertical-align: middle;
					margin-left: -20px;
					margin-right: 12px;
					width: 8px;
					height: 8px;
					background-color: var(--base-content-link_-_color);
				}
			}
		}

		dl {
			padding: 0;
		}

		dt {
			margin-top: var(--base-content_-_margin);
			padding: 0;
			font-size: 1em;
			font-weight: 700;
			font-style: italic;
		}

		dd {
			margin-bottom: var(--base-content_-_margin);
			margin-left: 0;
			padding: 0 1em;
		}

		pre {
			overflow: auto;
			padding: 1em;
			font-size: 85%;
			line-height: 1.45;
			word-wrap: normal;
		}

		code {
			margin: 0;
			padding: 0.2em 0.4em;
			font-size: 85%;
		}

		img {
			vertical-align: middle;
			max-width: 100%;
		}

		b,
		strong {
			color: var(--base-content-headings_-_color);
		}

		blockquote {
			position: relative;
			margin: calc(var(--base-content_-_margin) * 2.5) 40px;
			border-left: 4px solid var(--base-content-headings_-_color);
			padding: 16px 0 16px 20px;
		}

		> :first-child {
			margin-top: 0;
		}

		> :last-child {
			margin-bottom: 0;
		}

		&.theme-invert {
			color: var(--base-page_-_background-color);

			:--headings {
				color: var(--base-page_-_background-color);
			}
		}
	}
</style>
