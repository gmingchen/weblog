<template>
  <UApp>
    <div :class="n.b()">
      <NuxtLink to="/">首页</NuxtLink>
      <NuxtLink to="/console">控制台</NuxtLink>
      <NuxtLayout name="default">
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<script setup>
import { useSettingStore } from '~/store'
import { settingInfosApi } from '~/apis'
const n = useNamespace('app');

const { state, setState } = useSettingStore()

const getSetting = async () => {
  const r = await useAsyncData('settingInfosApi', settingInfosApi)
  const { data } = r.data.value
  setState(data)
};
await getSetting();

const { websiteSetting } = state.value
useHead({
  title: websiteSetting?.title,
  meta: [
    { name: 'description', content: websiteSetting?.description },
    { name: 'keywords', content: websiteSetting?.keywords },
  ],
})
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(app) {
  background: var(--background);
}
</style>
