<template>
  <RecursiveMenu :menuList="menuList" />
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
      genders: [
        { id: 1, name: "Men" },
        { id: 2, name: "Women" },
      ],
      categories: [
        { id: 1, name: "Shirts" },
        { id: 2, name: "Pants" },
      ],
      brands: [
        { id: 1, name: "Brand 1" },
        { id: 2, name: "Brand 2" },
      ],
    };
  },
  computed: {
    menuList() {
      // Generate the menu items dynamically
      return this.genders.map((gender) => ({
        name: gender.name,
        children: [
          {
            name: "All",
            handler: () => this.navigateToFilters({ gender }),
          },
          ...this.categories.map((category) => ({
            name: category.name,
            children: [
              {
                name: "All",
                handler: () =>
                  this.navigateToFilters({ gender, category }),
              },
              ...this.brands.map((brand) => ({
                name: brand.name,
                handler: () =>
                  this.navigateToFilters({ gender, category, brand }),
              })),
            ],
          })),
        ],
      }));
    },
  },
  methods: {
    navigateToFilters({ gender, category, brand }) {
      const params = [];

      if (gender) {
        params.push("gender_id", gender.id, gender.name);
      }
      if (category) {
        params.push("category_id", category.id, category.name);
      }
      if (brand) {
        params.push("brand_id", brand.id, brand.name);
      }

      const path = `/lists/products/filter/${params.join("/")}`;
      this.$router.push(path);
    },
  },
};
</script>
