<template>
  <UApp>
    <div :class="n.b()">
      <NuxtLayout name="default">
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<script setup>
import { useSettingStore, useAuthStore } from '~/store'
import { settingInfosApi } from '~/apis'
const n = useNamespace('app');

const { state: settingState, setState: setSettingState } = useSettingStore()
const getSetting = async () => {
  const r = await useAsyncData('settingInfosApi', settingInfosApi)
  const { data } = r.data.value
  setSettingState(data)
};
await getSetting();

const { websiteSetting } = settingState.value
useHead({
  title: websiteSetting?.title,
  meta: [
    { name: 'description', content: websiteSetting?.description },
    { name: 'keywords', content: websiteSetting?.keywords },
  ],
})

const { getUser, validateToken } = useAuthStore()
onMounted(() => {
  if (validateToken()) {
    getUser()
  }
})
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(app) {
  background: var(--background);
}
</style>
