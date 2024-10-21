<template>
  <div class="container-fluid xl:px-[189px] lg:px-[50px] md:px-[20px] sm:px-[20px]">
    <div class="row"> <!-- Use a row to contain the columns -->
      <div class="col-lg-6 col-md-6 col-sm-12"> <!-- First half -->
        <div class="d-flex justify-start"> <!-- Change justify-between to justify-start -->
          <div class="update-ribon bg-[#0C9F51] text-white font-bold py-2 px-4 h-[52px] w-[123px] d-flex align-items-center">
            <a href="#_" class="text-white font-domine text-[30px]">Instep</a>
          </div>
          <span class="ribon-right w-0 h-0 border-t-[52px] border-b-0 border-l-[11px] border-l-[#0C9F51] border-transparent"></span>
        </div>
      </div> <!-- End of col-6 -->

      <div class="col-lg-6 col-md-6 col-sm-12"> <!-- Second half -->
        <div class="d-flex justify-end">
          <button class="bg-[#0C9F51] text-white h-[33px] w-full sm:w-[177px] rounded mt-3 text-[14px] font-domine">Back issues</button>
        </div>
      </div> <!-- End of col-6 -->

    </div>
    <div class="w-full h-[2px] bg-[#0C9F51] hidden md:block"></div> <!-- Bottom line -->
  </div>

<div class="row">
  <div class="col-4">
    
  </div>
</div>


</template>

<script>
export default {
  name: 'RibbonComponent',
};
</script>

<style scoped>
/* Additional styles if needed */
.pic-hover {
  transition: transform 0.3s ease; /* Smooth transition */
}

.pic-hover:hover {
  transform: rotate(-2deg); /* Rotate the image by 2 degrees on hover */
}
</style>
