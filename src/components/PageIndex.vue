<script>
	import HeaderPage from './HeaderPage';
	import FooterPage from './FooterPage';

	export default {
		name: 'PageIndex',
		components: {
			HeaderPage,
			FooterPage
		}
	};
</script>

<style lang="scss" scoped>
	.section-page {
		margin-bottom: xl-to-xs(100, 30);
	}
</style>
