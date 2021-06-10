<template>
  <q-page class="">
    <q-table
      class="q-mb-xl"
      title="Anotações"
      :data="notes"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-x-md">
          <q-btn
            icon="edit"
            color="primary"
            dense
            @click="editNote(props.row)"
          />
          <q-btn
            icon="delete"
            color="negative"
            dense
            @click="confirmationDeleteNote(props.row.key)"
          />
        </q-td>
      </template>
    </q-table>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="goToForm" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'title',
          field: 'title',
          required: true,
          label: 'Título',
          align: 'left',
          sortable: true
        },
        {
          name: 'actions',
          field: 'actions',
          align: 'right'
        }
      ],
      notes: [],
      collection: 'notes'
    }
  },
  mounted () {
    this.getNotes()
  },
  methods: {
    goToForm () {
      this.$router.push('/form')
    },
    async getNotes () {
      try {
        const notesDb = await this.$db.collection(this.collection).get({ keys: true })
        this.notes = notesDb.map((note) => {
          return {
            ...note.data,
            key: note.key
          }
        })
      } catch (error) {
        console.error(error)
      }
    },
    editNote (note) {
      this.$router.push({ name: 'formNote', params: { note } })
    },
    confirmationDeleteNote (keyNote) {
      this.$q.dialog({
        title: 'Deletar Anotação',
        message: 'Tem certeza que deseja deletar essa anotação ?',
        persistent: false,
        ok: 'Deletar',
        cancel: 'Cancelar'
      }).onOk(() => {
        this.deleteNote(keyNote)
      })
    },
    async deleteNote (keyNote) {
      try {
        await this.$db.collection(this.collection).doc(keyNote).delete()
        this.$q.notify({
          message: 'Anotação excluida com sucesso!',
          color: 'positive',
          icon: 'delete'
        })
        this.getNotes()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
