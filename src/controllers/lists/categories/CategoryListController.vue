<template>

    <div>
      <BreadcrumbsComp />
        <categoryList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import categoryList from 'src/views/lists/categories/CategoryList.vue'
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
    name: 'Category-list-controller',
    components: {
      BreadcrumbsComp,
        categoryList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
