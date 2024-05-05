import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const ProductStore = defineStore("productStore", () => {
  const loading = ref(false);
  const ProductList = ref([]) as any;
  const NewProductList = ref([]) as any;
  const Mobilephones = ref<any[]>([]);
  const Telivision = ref<any[]>([]);
  const fragrances = ref<any[]>([]);
  const categories = ref<any[]>([
    {
      title: "Smartphones",
      route: "smartphones",
    },
    {
      title: "Laptops",
      route: "laptops",
    },
    {
      title: "Fragrances",
      route: "fragrances",
    },
    {
      title: "Skincare",
      route: "skincare",
    },
    {
      title: "Groceries",
      route: "groceries",
    },
    {
      title: "Home-decoration",
      route: "home-decoration",
    },
    {
      title: "Motorcycle",
      route: "motorcycle",
    },
    {
      title: "Sunglasses",
      route: "sunglasses",
    },
  ]);
  const singleProduct = ref<any>({});
  const singleProductLoading = ref(true);
  const categoriesList = ref<any[]>([]);

  function handleProduct() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        Mobilephones.value = res.data.products.filter((item: any) => {
          return item.category == "smartphones";
        });
        fragrances.value = res.data.products.filter((item: any) => {
          return item.category == "fragrances";
        });
        Telivision.value = res.data.products.filter((item: any) => {
          return item.category == "smartphones";
        });
        NewProductList.value = res.data.products.filter(
          (item: any) => item.category == "laptops"
        );
        ProductList.value = res.data.products.splice(0, 8);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getProductByCategory(category: any) {
    loading.value = true;
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        categoriesList.value = res.data.products;
        loading.value = false;
      });
  }

  function handleSingleProduct(id: any) {
    singleProductLoading.value = true;
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      singleProduct.value = res.data;
      singleProductLoading.value = false;
    });
  }

  return {
    ProductList,
    handleProduct,
    NewProductList,
    Mobilephones,
    fragrances,
    categories,
    getProductByCategory,
    categoriesList,
    loading,
    handleSingleProduct,
    singleProduct,
    singleProductLoading,
  };
});
