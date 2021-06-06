<template>
  <q-page padding>
    <q-form
      @submit="addNotes"
      class="q-gutter-y-md"
    >
      <q-input
        outlined
        v-model="form.title"
        label="Título"
        :rules="[ val => val && val.length > 0 || 'Título obrigatório']"
      />

      <q-editor
        v-model="form.note"
      />

      <q-btn
        label="Salvar"
        color="primary"
        class="full-width"
        type="submit"
      />
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'FormPage',
  data () {
    return {
      form: {
        title: '',
        note: ''
      },
      collection: 'notes'
    }
  },
  methods: {
    async addNotes () {
      try {
        await this.$db.collection(this.collection).add(this.form)
        this.$q.notify({
          message: 'Anotação salva com sucesso!',
          color: 'positive',
          icon: 'check'
        })
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
      // this.$q.notify({
      //   message: 'Anotação salva com sucesso!',
      //   color: 'positive',
      //   icon: 'check'
      // })
    }
  }
}
</script>
