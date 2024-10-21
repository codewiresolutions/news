
<template>

  <div class="flex items-center justify-center mb-4">
    <div class="absolute  mx-auto w-[47px]
            h-[6px] bg-gray-200 border border-gray-300 rounded-full mb-4"></div>
    <h2 class="text-pink-500 text-center relative pt-[17px]
    sm:mt-[2.9em] mt-[0.75em] sm:mb-[1.35em] mb-[0.75em] text-[30px] font-light leading-[1]">
      Parties <b>Include</b>
    </h2>

  </div>
  <div class="flex flex-wrap my-2 sm:mx-24 md:mx-24 mx-2">
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered,
        'bg-pink-500': isHovered,
        'bg-transparent': !isHovered
      }"
              @mouseover="isHovered = true"
              @mouseleave="isHovered = false"
            >
              <font-awesome-icon
                icon="puzzle-piece"
                size="2x"
                :class="{
          'text-pink-500': !isHovered,
          'text-white': isHovered
        }"
              />
            </div>
          </div>
          <h3 class="text-xl font-semibold text-center text-gray-600 sm:mb-6">Personalized Games</h3>
          <p class="text-gray-600 text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et rhoncus posuere augue eu.</p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered1,
        'bg-pink-500': isHovered1,
        'bg-transparent': !isHovered1
      }"
              @mouseover="isHovered1 = true"
              @mouseleave="isHovered1 = false"
            >
              <font-awesome-icon
                icon="clock"
                size="2x"
                :class="{
          'text-pink-500': !isHovered1,
          'text-white': isHovered1
        }"

              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Crazy Relay Races</h3>
          <p class="text-gray-600 text-center mt-2">Phasellus cursus, nulla sit amet pretium iaculis,
            nisi diam ultricies mauris crescendam nunc.</p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered2,
        'bg-pink-500': isHovered2,
        'bg-transparent': !isHovered2
      }"
              @mouseover="isHovered2 = true"
              @mouseleave="isHovered2 = false"
            >
              <font-awesome-icon
                icon="heart"
                size="2x"
                :class="{
          'text-pink-500': !isHovered2,
          'text-white': isHovered2
        }"
              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Parachute Games</h3>
          <p class="text-gray-600 text-center mt-2">Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered3,
        'bg-pink-500': isHovered3,
        'bg-transparent': !isHovered3
      }"
              @mouseover="isHovered3 = true"
              @mouseleave="isHovered3 = false"
            >
              <font-awesome-icon
                icon="pen"
                size="2x"
                :class="{
          'text-pink-500': !isHovered3,
          'text-white': isHovered3
        }"
              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Wacky Sports Games</h3>
          <p class="text-gray-600 text-center mt-2">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum et rhoncus posuere augue eu.</p>
        </div>
      </a>
    </div>
   
  </div>
  <div class="flex justify-center mb-4"> <!-- Flex container to center the button -->
    <button
      v-if="!showRows"
      @click="toggleRows"
      class="bg-pink-500 text-white px-10 py-2 rounded-full transition
      duration-200 ease-in-out hover:bg-pink-600 mb-16 text-base"
    >
      See All
    </button>
  </div>
  <div v-if="showRows">
  <div class="flex flex-wrap my-2 sm:mx-24 md:mx-24 mx-2">
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered4,
        'bg-pink-500': isHovered4,
        'bg-transparent': !isHovered4
      }"
              @mouseover="isHovered4 = true"
              @mouseleave="isHovered4 = false"
            >
              <font-awesome-icon
                icon="draw-polygon"
                size="2x"
                :class="{
          'text-pink-500': !isHovered4,
          'text-white': isHovered4
        }"
              />
            </div>
          </div>
          <h3 class="text-xl font-semibold text-center text-gray-600 sm:mb-6">Drawing Parties</h3>
          <p class="text-gray-600 text-center mt-2">Lorem ipsum dolor sit amet,
            consec tetur adipiscing elit. Vestibulum eti rhoncus posti uere augue eu.
          </p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered5,
        'bg-pink-500': isHovered5,
        'bg-transparent': !isHovered5
      }"
              @mouseover="isHovered5 = true"
              @mouseleave="isHovered5 = false"
            >
              <font-awesome-icon
                icon="palette"
                size="2x"
                :class="{
          'text-pink-500': !isHovered5,
          'text-white': isHovered5
        }"

              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Art-Painting Parties</h3>
          <p class="text-gray-600 text-center mt-2">Phasellus cursus, nulla sit amet prei tium iegestaus, nisii diam ultiricies mauris cresciam nunc.
          </p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered6,
        'bg-pink-500': isHovered6,
        'bg-transparent': !isHovered6
      }"
              @mouseover="isHovered6 = true"
              @mouseleave="isHovered6 = false"
            >
              <font-awesome-icon
                icon="star"
                size="2x"
                :class="{
          'text-pink-500': !isHovered6,
          'text-white': isHovered6
        }"
              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Anniversary Celebrations</h3>
          <p class="text-gray-600 text-center mt-2">Class aptent taciti sociosqu ad litora torquent per conubia nostra, peru inceptos himenaeos.
          </p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered7,
        'bg-pink-500': isHovered7,
        'bg-transparent': !isHovered7
      }"
              @mouseover="isHovered7 = true"
              @mouseleave="isHovered7 = false"
            >
              <font-awesome-icon
                icon="utensils"
                size="2x"
                :class="{
          'text-pink-500': !isHovered7,
          'text-white': isHovered7
        }"
              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Birthday Parties</h3>
          <p class="text-gray-600 text-center mt-2">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Vestibulum eti rhoncus posti uere augue eu.
          </p>
        </div>
      </a>
    </div>

  </div>
  <div class="flex flex-wrap my-2 sm:mx-24 md:mx-24 mx-2">
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered11,
        'bg-pink-500': isHovered11,
        'bg-transparent': !isHovered11
      }"
              @mouseover="isHovered11 = true"
              @mouseleave="isHovered11 = false"
            >
              <font-awesome-icon
                icon="lemon"
                size="2x"
                :class="{
          'text-pink-500': !isHovered11,
          'text-white': isHovered11
        }"
              />
            </div>
          </div>
          <h3 class="text-xl font-semibold text-center text-gray-600 sm:mb-6">Cocktail Parties</h3>
          <p class="text-gray-600 text-center mt-2">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Vestibulum eti rhoncus posti uere augue eu.

          </p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered12,
        'bg-pink-500': isHovered12,
        'bg-transparent': !isHovered12
      }"
              @mouseover="isHovered12 = true"
              @mouseleave="isHovered12 = false"
            >
              <font-awesome-icon
                icon="pen-ruler"
                size="2x"
                :class="{
          'text-pink-500': !isHovered12,
          'text-white': isHovered12
        }"

              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Valentine Events</h3>
          <p class="text-gray-600 text-center mt-2">Phasellus cursus, nulla sit amet prei tium iegestaus, nisii diam ultiricies mauris cresciam nunc.

          </p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered13,
        'bg-pink-500': isHovered13,
        'bg-transparent': !isHovered13
      }"
              @mouseover="isHovered13 = true"
              @mouseleave="isHovered13 = false"
            >
              <font-awesome-icon
                icon="book"
                size="2x"
                :class="{
          'text-pink-500': !isHovered13,
          'text-white': isHovered13
        }"
              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Writing Skills Parties</h3>
          <p class="text-gray-600 text-center mt-2">Class aptent taciti sociosqu ad litora torquent per conubia nostra, peru inceptos himenaeos.

          </p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered14,
        'bg-pink-500': isHovered14,
        'bg-transparent': !isHovered14
      }"
              @mouseover="isHovered14 = true"
              @mouseleave="isHovered14 = false"
            >
              <font-awesome-icon
                icon="arrow-rotate-left"
                size="2x"
                :class="{
          'text-pink-500': !isHovered14,
          'text-white': isHovered14
        }"
              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Corporate Events</h3>
          <p class="text-gray-600 text-center mt-2">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Vestibulum eti rhoncus posti uere augue eu.

          </p>
        </div>
      </a>
    </div>

  </div>
  <div class="flex flex-wrap my-2 sm:mx-24 md:mx-24 mx-2">
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered21,
        'bg-pink-500': isHovered21,
        'bg-transparent': !isHovered21
      }"
              @mouseover="isHovered21 = true"
              @mouseleave="isHovered21 = false"
            >
              <font-awesome-icon
                icon="coffee"
                size="2x"
                :class="{
          'text-pink-500': !isHovered21,
          'text-white': isHovered21
        }"
              />
            </div>
          </div>
          <h3 class="text-xl font-semibold text-center text-gray-600 sm:mb-6">Everyday Parties</h3>
          <p class="text-gray-600 text-center mt-2">Phasellus cursus, nulla sit amet prei tium iegestaus, nisii diam ultiricies mauris cresciam nunc.


          </p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered22,
        'bg-pink-500': isHovered22,
        'bg-transparent': !isHovered22
      }"
              @mouseover="isHovered22 = true"
              @mouseleave="isHovered22 = false"
            >
              <font-awesome-icon
                icon="map-marker"
                size="2x"
                :class="{
          'text-pink-500': !isHovered22,
          'text-white': isHovered22
        }"

              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">Holiday Events</h3>
          <p class="text-gray-600 text-center mt-2">Class aptent taciti sociosqu ad litora torquent per conubia nostra, peru inceptos himenaeos.


          </p>
        </div>
      </a>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/4 p-4">
      <a href="#" class="block  ">
        <div class="p-2 sm:p-4">
          <div class="flex items-center justify-center mb-4">
            <div
              class="icon-circle p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
              :class="{
        'border-2 border-pink-500': !isHovered23,
        'bg-pink-500': isHovered23,
        'bg-transparent': !isHovered23
      }"
              @mouseover="isHovered23 = true"
              @mouseleave="isHovered23 = false"
            >
              <font-awesome-icon
                icon="fan"
                size="2x"
                :class="{
          'text-pink-500': !isHovered23,
          'text-white': isHovered23
        }"
              />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center text-gray-600 sm:mb-6">World Guiding Parties</h3>
          <p class="text-gray-600 text-center mt-2">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Vestibulum eti rhoncus posti uere augue eu.


          </p>
        </div>
      </a>
    </div>


  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRows: false,
      isHovered: false,
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
      isHovered5: false,
      isHovered6: false,
      isHovered7: false,
      isHovered11: false,
      isHovered12: false,
      isHovered13: false,
      isHovered14: false,
      isHovered21: false,
      isHovered22: false,
      isHovered23: false,
    };

  },
  methods: {
    toggleRows() {
      this.showRows = !this.showRows; // Toggle the boolean value
    },
  },
};
</script>
<style scoped>
.icon-circle{
  width: 90px; /* Adjust the width */
  height: 90px; /* Adjust the height */
  border-radius: 9999px;
}
</style>