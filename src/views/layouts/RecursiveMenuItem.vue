<template>
  <q-item
    :class="{ 'q-item-active': node.children?.length > 0 }"
    clickable
    @click="handleClick"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <q-item-section>{{ node.func }}</q-item-section>
    <q-item-section v-if="node.children?.length > 0" side>
      <q-icon name="keyboard_arrow_right" />
    </q-item-section>
    <q-menu
      v-if="node.children?.length > 0"
      :ref="node.uuid"
      anchor="top end"
      self="top start"
      content-class="bg-grey-4 text-brown-7 header-nav-title"
      transition-show="scale"
      transition-hide="scale"
    >
      <q-list>
        <template v-for="child in node.children" :key="child.uuid">
          <RecursiveMenuItem :node="child" @mouse-over="handleMouseOver" @mouse-leave="handleMouseLeave" />
        </template>
      </q-list>
    </q-menu>
  </q-item>
</template>

<script>
export default {
  name: "RecursiveMenuItem",
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleMouseOver() {
      this.$emit("mouse-over", this.node);
    },
    handleMouseLeave() {
      this.$emit("mouse-leave", this.node);
    },
    handleClick() {
      if (!this.node.children?.length && this.node.handler) {
        this.node.handler(); // Call the handler for leaf nodes
      }
    },
  },
};
</script>

<style scoped>
.q-item-active {
  background-color: var(--q-color-grey-2);
}
</style>
