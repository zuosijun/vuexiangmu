<template>
	<main>
		<router-view></router-view>
		<v-footer></v-footer>
	</main>
</template>

<script>
	import vfooter from './component/footer.vue'


	export default{
		components:{
			'v-footer':vfooter
		}
	}
</script>

