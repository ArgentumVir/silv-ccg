<template>
	<div>
		<img class="settings-icon" @click="toggleSettings" :src="settingsIcon">
		<SettingsModal v-if="this.showSettings" />
	</div>
</template>

<script>
	import SettingsModal from './../SettingsModal/SettingsModal.vue';
	import grayIcon from './../assets/settings-icon.png';
	import whiteIcon from './../assets/settings-icon-white.png';

	export default {
		components: {
			SettingsModal
		},
		data () {
			return {
				showSettings: false,
				settingsIcon: grayIcon
			};
		},
		methods: {
			toggleSettings () {
				this.showSettings = !this.showSettings;
				if (!this.showSettings) {
					this.settingsIcon = grayIcon;
				} else {
					this.settingsIcon = whiteIcon;
				}
			}
		}
	};
</script>

<style scoped>
	.settings-icon {
		z-index: 3999;
		position: absolute;
		top: 1.5vw;
		right: 2.5vw;
		width: 3vw;
		opacity: .8;
	}

	.settings-icon:hover {
		opacity: 1.0;
	}

</style>
