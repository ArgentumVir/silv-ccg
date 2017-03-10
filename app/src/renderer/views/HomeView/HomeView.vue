<template>
	<div>
		<PageOverlay />
		<h1>Silv-CCG.</h1>

		<MenuButton text="Matchmaking" page="matchmaking"></MenuButton>
		<MenuButton text="Decks" page="decks"></MenuButton>
		<MenuButton text="Profile" page="profile"></MenuButton>
	</div>
</template>

<script>

	import PageOverlay from './../../views/shared/PageOverlay/PageOverlay.vue';
	import MenuButton from './../../views/shared/MenuButton/MenuButton.vue';

	export default {
		components: {
			MenuButton,
			PageOverlay
		}
	};
</script>

<style>
	h1 {
		margin-top: 0;
		margin-bottom: -2vw;
	}

</style>
