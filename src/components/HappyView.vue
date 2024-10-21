<template>
  <div class="container-fluid  xl:px-[189px] lg:px-[50px] md:px-[20px] sm:px-[20px] mt-10"> <!-- Use container-fluid for full width and remove padding -->
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Use grid for responsive layout -->
      
      <div class="bg-white"> <!-- Each card -->
        <div class="pic-hover">
          <img src="https://www.thenews.com.pk/assets/uploads/magazine/2024-09-15/l_1230644_062026_updates.jpg"
               class="lazyloaded w-full h-auto rounded">
        </div>
        <h3 class="my-2 text-[16px] leading-[23px] min-h-[69px] font-domine font-bold">
          <a class="font-domine font-extrabold font-serif" href="">What caught our eye this week</a>
        </h3>
        <div class="my-2 text-[13px] font-serif font-domine leading-[23px] min-h-[42px] font-domine font-bold border-b border-gray-200">
          By <a class="text-[13px] font-serif font-domine font-extrabold" style="color: #337AB7;" href="https://www.thenews.com.pk/writer/maheen-sabeeh">Web Desk</a>
        </div>
      </div>

      <!-- Repeat the card structure for additional columns -->
      <div class="bg-white">
        <div class="pic-hover">
          <img src="https://www.thenews.com.pk/assets/uploads/magazine/2024-09-08/l_1228200_050311_updates.jpg"
               class="lazyloaded w-full h-auto rounded">
        </div>
        <h3 class="my-2 text-[16px] leading-[23px] min-h-[69px] font-domine font-bold">
          <a class="font-domine font-extrabold font-serif" href="">Short Take</a>
        </h3>
        <div class="my-2 text-[13px] font-serif font-domine leading-[23px] min-h-[42px] font-domine font-bold border-b border-gray-200">
          By <a class="text-[13px] font-serif font-domine font-extrabold" style="color: #337AB7;" href="https://www.thenews.com.pk/writer/maheen-sabeeh">Maheen Sabeeh</a>
        </div>
      </div>

      <div class="bg-white">
        <div class="pic-hover">
          <img src="https://www.thenews.com.pk/assets/uploads/magazine/2024-09-01/l_1226022_054818_updates.jpg"
               class="lazyloaded w-full h-auto rounded">
        </div>
        <h3 class="my-2 text-[16px] leading-[23px] min-h-[69px] font-domine font-bold">
          <a class="font-domine font-extrabold font-serif" href="">What caught our eye this week</a>
        </h3>
        <div class="my-2 text-[13px] font-serif font-domine leading-[23px] min-h-[42px] font-domine font-bold border-b border-gray-200">
          By <a class="text-[13px] font-serif font-domine font-extrabold" style="color: #337AB7;" href="https://www.thenews.com.pk/writer/maheen-sabeeh">Maheen Sabeeh</a>
        </div>
      </div>

      <div class="bg-white rounded">
        <div class="pic-hover">
          <img src="https://www.thenews.com.pk/assets/uploads/magazine/2024-08-25/l_1223599_043912_updates.jpg"
               class="lazyloaded w-full h-auto rounded">
        </div>
        <h3 class="my-2 text-[16px] leading-[23px] min-h-[69px] font-domine font-bold">
          <a class="font-domine font-extrabold font-serif" href="">What caught our eye this week</a>
        </h3>
        <div class="my-2 text-[13px] font-serif font-domine leading-[23px] min-h-[42px] font-domine font-bold border-b border-gray-200">
          By <a class="text-[13px] font-serif font-domine font-extrabold" style="color: #337AB7;" href="https://www.thenews.com.pk/writer/maheen-sabeeh">Maheen Sabeeh</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pic-hover {
  transition: transform 0.3s ease; /* Smooth transition */
}

.pic-hover:hover {
  transform: rotate(-2deg); /* Rotate the image on hover */
}
</style>
