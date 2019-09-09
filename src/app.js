import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: ["Make lunch!", "Wash dog!", "Clean room!"],
      newItem: ""
    },
    methods: {
      saveNewItem: function (newItem) {
        this.items.push(newItem);
      }

    }

  });
})