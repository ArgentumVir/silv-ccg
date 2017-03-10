<template>
	<div>
		<PageOverlay />
		<CardPicker />
		<div>
			<DeckList />
			<DeckSettings />
		</div>
		<ManaPicker />
		<MenuButton className="back-button" text="Back" page="home" />
	</div>
</template>

<script>
	import PageOverlay from './../../views/shared/PageOverlay/PageOverlay.vue';
	import MenuButton from './../../views/shared/MenuButton/MenuButton.vue';
	import DeckList from './components/DeckList.vue';
	import CardPicker from './components/CardPicker.vue';
	import ManaPicker from './components/ManaPicker.vue';
	import DeckSettings from './components/DeckSettings.vue';

	export default {
		components: {
			PageOverlay,
			MenuButton,
			DeckList,
			CardPicker,
			ManaPicker,
			DeckSettings
		}
	};
</script>

<style>

</style>
