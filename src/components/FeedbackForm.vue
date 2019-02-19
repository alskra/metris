<template lang="pug">
</template>

<script>
	import InputMask from 'inputmask/dist/inputmask/inputmask';
	import ButtonPrimary from './ButtonPrimary';

	export default {
		name: 'FeedbackForm',
		components: {
			ButtonPrimary
		},
		mounted() {
			InputMask('+7 (9{3}) 9{3}-9{4}').mask(this.$refs.tel);
		}
	};
</script>

<style lang="scss" scoped>
	.feedback-form {
		@include reset;

		margin-bottom: xl-to-xs(80, 40);
		padding: xl-to-xs(80, 40) 0;
		background-color: #f9f9f9;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -10px -20px;

		& + & {
			margin-top: 20px;
		}

		&.actions {
			margin-top: 40px;
		}
	}

	.col {
		margin: 0 10px 20px;
		flex-shrink: 0;
		width: calc(100% - 20px);

		&.size-50 {
			width: calc(50% - 20px);

			@media (width < env(--vw-sm)) {
				width: calc(100% - 20px);
			}
		}

		&.justify-content-right {
			display: flex;
			justify-content: flex-end;

			@media (width < env(--vw-sm)) {
				justify-content: center;
			}
		}
	}

	.label {
		@include reset;

		display: block;
		margin-bottom: 10px;
		font-size: rem(15);
		line-height: 1.25;
		cursor: default;
	}

	.field,
	.select,
	.textarea {
		@include reset;

		display: block;
		border: 1px solid #b7b7b7;
		border-radius: 4px;
		padding: calc((43px - #{rem(14) * 1.25} - 2px) / 2) 15px;
		width: 100%;
		font-size: rem(14);
		line-height: 1.25;
		background-color: #ffffff;
		transition-property: var(--base-button_-_transition-property);
		transition-duration: var(--base-button_-_transition-duration);
		transition-timing-function: var(--base-button_-_transition-timing-function);

		&:focus {
			border-color: var(--color-primary);
		}

		&:invalid {
			/*border-color: red;*/
		}

		&:focus-visible {
			outline: none;
		}
	}

	.select {
		appearance: none;

		&:-moz-focusring {
			color: transparent;
			text-shadow: 0 0 0 #000;
		}

		&::-ms-expand {
			display: none;
		}
	}

	.textarea {
		resize: vertical;
		overflow-y: auto;
		min-height: 134px;
	}
</style>
