<template>
  <q-page class="bg-grey-1">
    <div class="row q-pt-sm">
      <div class="col-12 text-center">
        <img
          alt="Quasar logo"
          src="~assets/undraw_personalization_triu.svg"
          width="280px"
        >
      </div>
    </div>
    <div class="row justify-center q-gutter-x-md text-center">
      <div class="col-10 text-body2 text-center q-pb-xs">
        Este é um projeto sem fins lucrativos.
      </div>
      <div class="col-10 text-h6 text-center q-pb-md">
        Desenvolvido e Mantido por:
        <q-separator />
      </div>
      <div class="col-xs-4 col-md-3 text-subtitle1">
        <p>
          <q-avatar size="100px">
            <img src="about/patrick.jpg">
          </q-avatar>
        </p>
        <p class="q-gutter-y-md">
          Patrick Monteiro
          <q-btn
            type="a"
            href="https://github.com/patrickmonteiro"
            target="_blank"
            icon="mdi-github"
            color="primary"
            class="full-width"
          />
          <q-btn
            type="a"
            href="https://www.linkedin.com/in/engpatrickmonteiro/"
            target="_blank"
            icon="mdi-linkedin"
            color="primary"
            class="full-width"
          />
          <q-btn
            type="a"
            href="https://www.youtube.com/c/PatrickMonteiroEng"
            target="_blank"
            icon="mdi-youtube"
            color="primary"
            class="full-width"
          />
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'InfoPage'
}
</script>
