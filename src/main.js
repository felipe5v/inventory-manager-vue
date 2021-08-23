import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient,
});

createApp(App)
  .use(router)
  .use(apolloProvider)
  .mount("#app");
