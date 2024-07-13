<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>


<script lang="ts" setup>
const result = await useFetch('/api/test')
console.log(result.data);

</script>