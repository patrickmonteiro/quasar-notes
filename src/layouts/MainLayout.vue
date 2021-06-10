<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar Notes
        </q-toolbar-title>

        <div v-if="!!$route.meta.backButton" >
          <q-btn
            icon="arrow_back"
            flat
            v-go-back="'/'"
          />
        </div>
        <div v-else >
          <q-btn
            icon="info"
            flat
            dense
            @click="goToInfo"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  methods: {
    goToInfo () {
      this.$router.push({ name: 'info' })
    }
  }
}
</script>
