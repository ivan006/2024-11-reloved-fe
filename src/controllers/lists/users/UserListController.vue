<template>
    <div>
      <BreadcrumbsComp />
      <!--<q-card class="q-pa-md q-mt-md">-->
      <!--</q-card>-->

      <userList
        :parentKeyValuePair="parentKeyValuePair"
        :fetchFlags="fetchFlags"
      />
    </div>
</template>

<script>
import userList from 'src/views/lists/users/UserList.vue'
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
    name: 'User-list-controller',
    components: {
      BreadcrumbsComp,
        userList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
