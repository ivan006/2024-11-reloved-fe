<template>

    <div>
      <BreadcrumbsComp />
        <brandList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import brandList from 'src/views/lists/brands/BrandList.vue'
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
    name: 'Brand-list-controller',
    components: {
      BreadcrumbsComp,
        brandList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
