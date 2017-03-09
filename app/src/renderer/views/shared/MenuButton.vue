<template>
	<div>
		<router-link :to="{ name: page }">{{text}}</router-link>
	</div>
</template>

<script>
	export default {
		props: [
			'text',
			'page'
		]
	};

</script>

<style scoped>
	a {
		margin-left: auto;
		margin-right: auto;
		margin-top: 7vw;
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
	}


	a:hover {
		color: gray;
	}

	a:active {
		color: #696969;
	}


</style>
