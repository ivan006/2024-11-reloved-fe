<template>
  <div>
    <q-btn
      v-for="(main, index) in menuList"
      :key="main.uuid"
      flat
      color="grey-1"
      class="header-toolbar-title q-mx-xs"
      :label="main.func"
      @mouseover="mouseOverMenuEvt(main)"
      @mouseleave="mouseLeaveMenuEvt(main)"
    >
      <q-menu
        :ref="main.uuid"
        content-class="bg-grey-4 text-brown-7 header-nav-title"
        transition-show="jump-down"
        transition-hide="jump-up"
      >
        <q-list>
          <template v-for="(child, idx) in main.children" :key="child.uuid">
            <RecursiveMenuItem :node="child" @mouse-over="mouseOverMenuEvt" @mouse-leave="mouseLeaveMenuEvt" />
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
    mouseOverMenuEvt(node) {
      this.$emit("mouse-over", node);
    },
    mouseLeaveMenuEvt(node) {
      this.$emit("mouse-leave", node);
    },
  },
};
</script>

<style scoped>
.header-toolbar-title {
  cursor: pointer;
}
</style>
