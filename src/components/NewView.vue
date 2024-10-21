<template>

  <div class="bg-gray-100  flex justify-center   py-12">
    <div class="container  ">
      <div class="grid md:grid-cols-3 m-0 p-0 ">

        <!-- Column 1 -->
        <div class="bg-white max-w-full mx-auto border border-gray-200 shadow-md">
          <ul>
            <li v-for="item in faqs1" :key="item.id" class="relative border-b border-gray-200">
              <button type="button" class="w-full px-6 py-6 text-left" @click="toggleItem(item.id)">
                <div class="flex items-center justify-between">
                  <span>{{ item.question }}</span>
                  <svg :class="{'transform rotate-180' : selected === item.id}" class="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div
                class="relative overflow-hidden transition-all duration-700"
                :style="{ maxHeight: selected === item.id ? item.contentHeight + 'px' : '0' }"
              >
                <div class="px-6 pb-6">
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Column 2 -->


      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const selected = ref(null);

    const faqs1 = [
      {
        id: 1,
        question: 'Is there a refund policy?',
        answer: 'DreamSeat Enterprise Xperience Partners shall issue a full refund to any member who wishes to cancel their enrolment within 45 days prior to the start of the season...',
        contentHeight: 100, // Set to a fixed height or calculate dynamically
      },
      {
        id: 2,
        question: 'Why can\'t I log in?',
        answer: 'If you are unable to log in, please make sure you have created a new account first...',
        contentHeight: 100,
      },
      {
        id: 3,
        question: 'Why can\'t I log in?',
        answer: 'If you are unable to log in, please make sure you have created a new account first...',
        contentHeight: 100,
      },
    ];

    const toggleItem = (id) => {
      selected.value = selected.value === id ? null : id;
    };

    return {
      selected,
      faqs1,
      toggleItem,
    };
  },
};
</script>

<style scoped>
/* You can add scoped styles here if needed */
</style>
