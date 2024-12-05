<template>

    <div>
      <BreadcrumbsComp />
        <q-card class="q-mb-md">
            <categoryRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import categoryRead from 'src/views/lists/categories/CategoryRead.vue'
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
    name: 'Category-read-controller',
    components: {
      BreadcrumbsComp,
        categoryRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
