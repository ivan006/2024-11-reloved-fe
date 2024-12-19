<template>
  <div>
    <q-btn
      v-for="main in menuList"
      :key="main.name"
      flat
      color="grey-1"
      class="header-toolbar-title q-mx-xs"
      :label="main.name"
      @mouseover="handleMouseOver(main)"
      @mouseleave="handleMouseLeave(main)"
    >
      <q-menu
        v-if="main.children?.length > 0"
        content-class="bg-grey-4 text-brown-7 header-nav-title"
        transition-show="jump-down"
        transition-hide="jump-up"
      >
        <q-list>
          <template v-for="child in main.children" :key="child.name">
            <RecursiveMenuItem :node="child" />
          </template>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import RecursiveMenuItem from "./RecursiveMenuItem.vue";

export default {
  name: "RecursiveMenu",
  components: {
    RecursiveMenuItem,
  },
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleMouseOver(node) {
      // Add any logic for mouse-over events if necessary
    },
    handleMouseLeave(node) {
      // Add any logic for mouse-leave events if necessary
    },
  },
};
</script>

<style scoped>
.header-toolbar-title {
  cursor: pointer;
}
</style>
