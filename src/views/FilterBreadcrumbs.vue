<template>
  <div>
    <q-breadcrumbs  class="q-px-md q-py-sm">
      <q-breadcrumbs-el
        v-for="(crumb, index) in breadcrumbTrail"
        :key="index"
        :label="crumb.label"
        class="cursor-pointer"
      />
    </q-breadcrumbs>
  </div>
</template>
<script>

export default {
  name: "FilterBreadcrumbs",
  props: {
    filterParams: {
      type: Array,
      required: true,
    },
  },
  computed: {




    breadcrumbTrail() {
      const trail = [];

      for (let i = 0; i < this.filterParams.length; i += 3) {
        const key = this.filterParams[i];
        const id = this.filterParams[i + 1];
        const name = this.filterParams[i + 2];

        // Create separate breadcrumb objects for key and value
        trail.push(
          { label: key }, // Filter key as a separate breadcrumb
          { label: name } // Merged value (only the name) as a separate breadcrumb
        );
      }

      return trail;
    },
  },
  methods: {

  },
};
</script>
