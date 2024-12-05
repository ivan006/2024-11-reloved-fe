<template>

    <div>
      <BreadcrumbsComp />
        <q-card class="q-mb-md">
            <genderRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import genderRead from 'src/views/lists/genders/GenderRead.vue'
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
    name: 'Gender-read-controller',
    components: {
      BreadcrumbsComp,
        genderRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
