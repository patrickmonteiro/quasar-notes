<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
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
        :toolbar="[
          ['bold', 'italic', 'strike', 'underline', 'link'],
          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
          ['undo', 'redo']
        ]"
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
  props: {
    note: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      form: {
        title: '',
        note: ''
      },
      collection: 'notes'
    }
  },
  mounted () {
    if (this.note) {
      this.form = this.note
    }
  },
  methods: {
    onSubmit () {
      if (this.form.key) {
        this.updateNotes()
      } else {
        this.addNotes()
      }
    },
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
    },
    async updateNotes () {
      try {
        await this.$db.collection(this.collection).doc(this.form.key).update(this.form)
        this.$q.notify({
          message: 'Anotação atualizada com sucesso!',
          color: 'positive',
          icon: 'check'
        })
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
