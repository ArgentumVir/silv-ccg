<template>
	<div>
		<PageOverlay />
		<MenuButton className="back-button" text="Back" page="home" />
	</div>
</template>

<script>
import PageOverlay from './../../views/shared/PageOverlay/PageOverlay.vue';
import MenuButton from './../../views/shared/MenuButton/MenuButton.vue';

export default {
	components: { PageOverlay, MenuButton }
};
</script>

<style>

</style>
