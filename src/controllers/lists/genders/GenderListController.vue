<template>

    <div>
      <BreadcrumbsComp />
        <genderList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import genderList from 'src/views/lists/genders/GenderList.vue'
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
    name: 'Gender-list-controller',
    components: {
      BreadcrumbsComp,
        genderList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
