<template>
	<div id="profile">
		<profile-nav-bar/>
		<!-- <profile-user-info/> -->
	</div>
</template>

<script>
	import ProfileNavBar from './children/ProfileNavBar'
	import ProfileUserInfo from './children/ProfileUserInfo'
	
  export default {
    name: 'Profile',
    components: {
			ProfileNavBar,
			ProfileUserInfo
    }
  }
</script>

<style>
</style>
