export default [
	{
		path: '/',
		name: 'home',
		component: require('./views/HomeView/HomeView.vue')
	},
	{
		path: '/matchmaking',
		name: 'matchmaking',
		component: require('./views/MatchMakingView/MatchMakingView.vue')
	},
	{
		path: '/decks',
		name: 'decks',
		component: require('./views/DecksView/DecksView.vue')
	},
	{
		path: '/profile',
		name: 'profile',
		component: require('./views/ProfileView/ProfileView.vue')
	},
	{
		path: '*',
		redirect: '/'
	}
];
