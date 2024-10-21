<template>
  <div class="bg-white rounded-lg shadow-lg p-4 w-80">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold">Options</h2>
      <button @click="toggleContent" class="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
        <span class="material-icons">{{ isAdditionalVisible ? 'remove' : 'add' }}</span>
      </button>
    </div>
    <div class="overflow-y-auto max-h-48 border border-gray-300 rounded-lg p-2">
      <ul v-if="!isAdditionalVisible" id="options-list">
        <li class="py-2 border-b" v-for="option in options" :key="option">{{ option }}</li>
      </ul>
      <ul v-if="isAdditionalVisible" id="additional-content">
        <li class="py-2 border-b" v-for="option in additionalOptions" :key="option">{{ option }}</li>
      </ul>
    </div>
    <button @click="addOption" class="mt-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 w-full flex items-center justify-center">
      <span class="material-icons">add</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdditionalVisible: false,
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
      additionalOptions: ['Option 6', 'Option 7', 'Option 8'],
    };
  },
  methods: {
    toggleContent() {
      this.isAdditionalVisible = !this.isAdditionalVisible;
    },
    addOption() {
      const newOption = `Option ${this.isAdditionalVisible ? this.additionalOptions.length + 9 : this.options.length + 1}`;
      if (this.isAdditionalVisible) {
        this.additionalOptions.push(newOption);
      } else {
        this.options.push(newOption);
      }
    },
  },
};
</script>

<style>
/* Ensure to include Material Icons if needed */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
