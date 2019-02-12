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
	.section-page-1 {
		margin-bottom: xl-to-xs(50, 30);
	}
</style>
