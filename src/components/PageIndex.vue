<script>
	import HeaderPage from './HeaderPage';
	import FooterPage from './FooterPage';
	import SectionPage from './SectionPage';
	import FeedbackForm from './FeedbackForm';

	export default {
		name: 'PageIndex',
		components: {
			HeaderPage,
			FooterPage,
			SectionPage,
			FeedbackForm
		}
	};
</script>

<style lang="scss" scoped>
	.page-index-section {
		margin-bottom: xl-to-xs(50, 30);
	}

	.page-index-section-title {
		@include reset;

		color: #81306e;
		font-size: xl-to-xs(50, 30);
		font-weight: 800;
		line-height: 1.25;
	}
</style>
