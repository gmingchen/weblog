<template>
  <UApp>
    <div :class="n.b()" @click="settingInfosApi">
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

const { setState } = useSettingStore()

const getSetting = async () => {
  const r = await useAsyncData('settingInfosApi', settingInfosApi)
  const { data } = r.data.value
  setState(data.qqSetting)
};
getSetting();
</script>

<style lang="scss" scoped>
@use '~/assets/sass/bem.scss' as *;
@include b(app) {
  background: var(--background);
}
</style>
