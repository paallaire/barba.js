export default () => ({
	modalOpen: false,
	init() {
		this.$watch('modalOpen', (value) => {
			this.handleToggle(value);
		});
	},
	handleToggle(value) {
		if (value) {
			document.querySelector('body').classList.add('overflow-hidden');
		} else {
			document.querySelector('body').classList.remove('overflow-hidden');
		}
	}
});
