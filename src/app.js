import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
      {name: "Make lunch", priority: "High"},
      {name: "Clean dog", priority: "Low"},
      {name: "Vacuum", priority: "Low"}
    ],
      newItem: "",
      newItemPriority: ""
    },
  
    methods: {
      saveNewItem: function (newItem, newItemPriority) {
        this.items.push({
          name: this.newItem,
          priority: this.newItemPriority
        });
      },
      
    }

  });
})
