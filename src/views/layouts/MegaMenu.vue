<template>

  <q-toolbar-title class="row items-end">
    <RecursiveMenu :menuList="menuList" />
  </q-toolbar-title>
</template>

<script>
import RecursiveMenu from "./RecursiveMenu.vue";

export default {
  name: "MegaMenu",
  components: {
    RecursiveMenu,
  },
  data() {
    return {
      menuList: [
        {
          func: "Main-Apple",
          uuid: "uuid-1",
          children: [
            {
              func: "Second",
              uuid: "uuid-2",
              children: [
                {func: "Third", uuid: "uuid-3"},
                {func: "Third", uuid: "uuid-4", children: [{func: "Fourth", uuid: "uuid-5"}]},
              ],
            },
          ],
        },
        {
          func: "Main-Bird",
          uuid: "uuid-6",
        },
      ],
    };
  },
};
</script>

<style>
.header-backgroud-color {
  background-color: #1e88e5;
}
</style>
