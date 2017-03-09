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

	import MenuButton from './../../views/shared/MenuButton.vue';
	import PageOverlay from './../../views/shared/PageOverlay.vue';

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
