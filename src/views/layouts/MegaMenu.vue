<template>
  <RecursiveMenu :menuList="menuList" />
</template>

<script>
import RecursiveMenu from "./RecursiveMenu.vue";
import Gender from "src/models/orm-api/Gender";
import Category from "src/models/orm-api/Category";
import Brand from "src/models/orm-api/Brand";

export default {
  name: "MegaMenu",
  components: {
    RecursiveMenu,
  },
  data() {
    return {
      genders: [
        // { id: 1, name: "Men" },
        // { id: 2, name: "Women" },
      ],
      categories: [
        // { id: 1, name: "Shirts" },
        // { id: 2, name: "Pants" },
      ],
      brands: [
        // { id: 1, name: "Brand 1" },
        // { id: 2, name: "Brand 2" },
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
    async fetchData() {
      try {
        // Fetch genders
        const gendersResponse = await Gender.FetchAll([], {}, {});
        this.genders = gendersResponse.response.data.data;

        // Fetch categories
        const categoriesResponse = await Category.FetchAll([], {}, {});
        this.categories = categoriesResponse.response.data.data;

        // Fetch brands
        const brandsResponse = await Brand.FetchAll([], {}, {});
        this.brands = brandsResponse.response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  async mounted() {
    await this.fetchData(); // Fetch data when the component is mounted
  },
};
</script>
