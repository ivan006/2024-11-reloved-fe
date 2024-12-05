<template>

    <div>
      <BreadcrumbsComp />
        <q-card class="q-mb-md">
            <brandRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import brandRead from 'src/views/lists/brands/BrandRead.vue'
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
    name: 'Brand-read-controller',
    components: {
      BreadcrumbsComp,
        brandRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
