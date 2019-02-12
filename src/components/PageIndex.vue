<script>
	import HeaderPage from './HeaderPage';
	import FooterPage from './FooterPage';
	import SectionPage from './SectionPage';

	export default {
		name: 'PageIndex',
		components: {
			HeaderPage,
			FooterPage,
			SectionPage
		}
	};
</script>

<style lang="scss" scoped>
	.page-index-section {
		margin-bottom: xl-to-xs(50, 30);
	}
</style>
