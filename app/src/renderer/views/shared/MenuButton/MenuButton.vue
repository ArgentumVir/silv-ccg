<template>
	<router-link :class="['default-style', className]" :to="{ name: page }">{{text}}</router-link>
</template>

<script>
	export default {
		props: [
			'text',
			'page',
			'className'
		]
	};

</script>

<style>
	.default-style {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		width: 20vw;
		font-size: 3vw;
		padding: 2vw;
		border-style: groove;
		border: light-gray 1vw;
		background-color: transparent;
		outline: none;
		display: block;
		color: black;
		text-decoration: none;
		font-family: Arial;
		margin-top: 6vw;
	}

	.default-style:hover {
		color: gray;
	}

	.default-style:active {
		color: #696969;
	}
</style>

<style>
	.back-button {
		color: black;
		width: 7vw;
		position: absolute;
		bottom: 1.5vw;
		font-size: 2vw;
		left: 2.5vw;
		height: 1.225vw;
		line-height: 1.225vw;
	}
</style>
