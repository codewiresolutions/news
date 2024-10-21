<template>

  <div class="bg-customGray container-fluid mx-auto font-domine">
    <div class="max-w-[945px] mx-[70px] px-0 md:px-4 sett pt-2 pb-5"> <!-- Added padding for small screens -->

      <h2 class="text-[#2b74f1] text-2xl font-bold font-domine  mb-2">
        Health
      </h2>
      <div class="border-t-3 border-blue-500 w-[85px] h-[3px] my-3 "></div>

      <div class="flex flex-col md:flex-row bg-white items-start p-[1%] mb-[20px]">
        <div class="mb-[10px] md:mb-0 md:mr-[20px]">
          <img src="https://www.thenews.com.pk/assets/uploads/updates/2024-10-15/s_1240309_104236_updates.jpg" alt=""
               class="h-[60px] w-[100px] md:h-[120px] md:w-[200px] imgi">
        </div>
        <div class="flex-1 text-left">
          <h2
            class=" sm:mb-[10px] md:mb-[opx] check check2  md:text-[20px] text-[14px] text-black font-sans font-domine font-normal md:font-bold px-2 md:px-0  leading-none ">
            Pak vs Eng: Pakistan opt to bat first against England in second Test
          </h2>

          <p class="text-[14px] leading-[20px] font-domine  hidden md:block ">
            Green Caps eye victory against visitors after defeat in first Test
          </p>
          <span class=" check text-[12px] leading-[16px] font-domine  mb-[5px] px-2 md:px-0" style="color: #2B74F1;">
            October 15, 2024
          </span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row bg-white items-start p-[1%] mb-[20px]">
        <div class="mb-[10px] md:mb-0 md:mr-[20px]">
          <img src="https://www.thenews.com.pk/assets/uploads/updates/2024-10-15/s_1240304_031946_updates.jpg"
               alt="Image description"
               class="h-[60px] w-[100px] md:h-[120px] md:w-[200px]">
        </div>
        <div class="flex-1 text-left">
          <h2
            class=" sm:mb-[10px] md:mb-[opx] check check2  md:text-[20px] text-[14px] text-black
             font-domine font-normal md:font-bold px-2  md:px-0 md:leading-relaxed  sm:leading-none  ">
            Sania Mirza shares glimpses of family time in latest Instagram photo dump

          </h2>

          <p class="text-[14px] leading-[20px] font-domine  hidden md:block ">
            Ex-Indian tennis legend also indulges in self-care as she spends quality time with loved ones in Dubai
          </p>
          <span class=" check text-[12px] leading-[16px] font-domine  mb-[5px] px-2 md:px-0" style="color: #2B74F1;">
            October 15, 2024
          </span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row bg-white items-start p-[1%] mb-[20px]">
        <div class="mb-[10px] md:mb-0 md:mr-[20px]">
          <img src="https://www.thenews.com.pk/assets/uploads/updates/2024-10-15/s_1240309_055622_updates.jpg" alt=""
               class="h-[60px] w-[100px] md:h-[120px] md:w-[200px] imgi">
        </div>
        <div class="flex-1 text-left">
          <h2
            class=" sm:mb-[10px] md:mb-[opx] check check2  md:text-[20px] text-[14px]
            text-black font-domine font-normal md:font-bold px-2 md:px-0 md:leading-relaxed  sm:leading-none ">
            PAK vs ENG: Debutant Kamran's century powers Pakistan to 259/5 on day 1

          </h2>

          <p class="text-[14px] leading-[20px] font-domine  hidden md:block ">
            Kamran becomes 13th Pakistani batter who scored a ton on debut match
          </p>
          <span class=" check text-[12px] leading-[16px] font-domine  mb-[5px] px-2 md:px-0" style="color: #2B74F1;">
            October 15, 2024
          </span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row bg-white items-start p-[1%] ">
        <div class="mb-[10px] md:mb-0 md:mr-[20px]">
          <img src="https://www.thenews.com.pk/assets/uploads/updates/2024-10-15/s_1240309_104236_updates.jpg" alt=""
               class="h-[60px] w-[100px] md:h-[120px] md:w-[200px] imgi">
        </div>
        <div class="flex-1 text-left ">
          <h2
            class=" sm:mb-[10px] md:mb-[opx] check check2  md:text-[20px] text-[14px]
            text-black  font-domine font-normal md:font-bold px-2   leading-none
            md:px-0  md:leading-relaxed  sm:leading-none  ">
            Pak vs Eng: Pakistan opt to bat first against England in second Test
          </h2>

          <p class="text-[14px] leading-[20px] font-domine  hidden md:block ">
            Green Caps eye victory against visitors after defeat in first Test
          </p>
          <span class=" check text-[12px] leading-[16px] font-domine
          mb-[5px] px-2 md:px-0" style="color: #2B74F1;">
            October 15, 2024
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400&display=swap');



@media (max-width: 1025px) {
  .sett {
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    /* Optional: add padding if needed */
    padding-right: 10px;
    /* Optional: add padding if needed */
  }

  /* Adjust flex direction to maintain row alignment on small screens */
  .flex-col {
    flex-direction: row;
    /* Keep items in a row on small screens */
  }

  /* Change image size on small screens */
  img {
    width: 100px;
    /* Set width to 100px */
    height: 60px;
    /* Set height to 60px */
  }
}


@media (min-width:768px) {
  .check{
    padding-left: 0px!important;

  }



}


</style>
