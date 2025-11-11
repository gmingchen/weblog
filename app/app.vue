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
import { useSetting } from '@/store'
import { settingInfosApi } from '@/apis'
const n = useNamespace("app");

const { setSetting } = useSetting()

const getSetting = async () => {
  const r = await useAsyncData('settingInfosApi', settingInfosApi)
  const { data } = r.data.value
  setSetting(data.qqSetting)
};
getSetting();
</script>

<style lang="scss" scoped>
@use '@/assets/sass/bem.scss' as *;
@include b(app) {
  background: var(--background);
}
</style>
