const App = {
    data() {
        return {
          counter: 23,
          title: "COUNTER",
        };
    }
}
Vue.createApp(App).mount(`#app`)
