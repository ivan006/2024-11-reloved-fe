<template>
  <div>
    <!--<pre>{{ filterParams }}</pre>-->
    <!--<pre>{{ filters }}</pre>-->
    <!--<pre>{{ filterLookupNames }}</pre>-->
    <FilterBreadcrumbs
      :filterParams="filterParams"
    />
    <productList
      :parentKeyValuePair="parentKeyValuePair"
      :fetchFlags="fetchFlags"
      v-model:filters="filters"
      v-model:filterLookupNames="filterLookupNames"
    />
  </div>
</template>

<script>
import productList from "src/views/lists/products/ProductList.vue";
import FilterBreadcrumbs from "src/views/FilterBreadcrumbs.vue";

export default {
  name: "Product-list-controller",
  components: {
    FilterBreadcrumbs,
    productList,
  },
  data() {
    return {
      parentKeyValuePair: {},
      fetchFlags: {},
      filters: {}, // Stores filter IDs
      filterLookupNames: {}, // Stores filter names
      filterParams: [], // Array format used for route parameter
    };
  },
  methods: {
    // Decode filterParams (array) to populate filters and filterLookupNames
    filterParamsDecode(filterParams) {
      const newFilters = {};
      const newFilterLookupNames = {};

      for (let i = 0; i < filterParams.length; i += 3) {
        const key = filterParams[i];
        newFilters[key] = parseInt(filterParams[i + 1], 10) || 0;
        newFilterLookupNames[key] = filterParams[i + 2] || "All";
      }

      this.filters = newFilters;
      this.filterLookupNames = newFilterLookupNames;
    },
    // Encode filters and filterLookupNames into filterParams (array)
    filterParamsEncode() {
      const params = [];
      let lastNonDefaultIndex = -1;

      // Build params and track the last non-default filter set
      Object.keys(this.filterLookupNames).forEach((key, index) => {
        const id = this.filters[key] !== null ? this.filters[key] : 0;
        const name = this.filterLookupNames[key] !== null ? this.filterLookupNames[key] : "All";

        params.push(key, id, name);

        // Check if this is a non-default filter
        if (id !== 0 || name !== "All") {
          lastNonDefaultIndex = index;
        }
      });

      // If all are default, return an empty array
      if (lastNonDefaultIndex === -1) {
        return [];
      }

      // Trim trailing default filter sets
      return params.slice(0, (lastNonDefaultIndex + 1) * 3); // Multiply by 3 to include full sets
    },

    // Update filterParams and route
    updateRoute() {
      this.filterParams = this.filterParamsEncode();
      this.$router.push({
        name: "/lists/products/filter/:filterParams*",
        params: { filterParams: this.filterParams },
      });
    },
  },
  watch: {
    // Watch filters and filterLookupNames for changes
    filters: {
      deep: true,
      handler() {
        this.updateRoute();
      },
    },
    filterLookupNames: {
      deep: true,
      handler() {
        this.updateRoute();
      },
    },
  },
  created() {
    // On page load, decode filterParams from route
    const initialFilterParams = this.$route.params.filterParams || [];
    if (initialFilterParams.length) {
      this.filterParamsDecode(initialFilterParams);
    }
  },
};
</script>

