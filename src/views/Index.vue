<script setup lang="ts">
	import { useCounterStore } from '../stores/counter';

	const store = useCounterStore();
</script>

<template>
	<h1>Hello world</h1>
	<p>Count: {{ store.count }}</p>
	<p>Double: {{ store.doubleCount }}</p>
	<button
		class="btn btn-primary btn-sm"
		@click="store.increment"
	>
		Add
	</button>
</template>

<style scoped>

</style>
