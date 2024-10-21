<template>


  <div class="flex w-full">
  <div class="grid w-full lg:mx-10 mx-2 mb-4"> <!-- Container for the grid system -->
  <div class="lg:w-3/4 w-full "> <!-- 75% Column with right margin -->
    <h2 class="text-[#2b74f1] text-2xl font-bold font-domine relative mb-2">
      Videos
    </h2>
    <div class="border-t-3 border-blue-500 w-[85px] h-[3px] mt-4"></div>
     <div class="mr-5">
       <div class="flex flex-wrap w-full mt-5">
         <div class="w-full md:w-7/12">
           <a href="#">
             <img
               alt="Prince William celebrates as King Charles makes delightful announcement"
               title="Prince William celebrates as King Charles makes delightful announcement"
               data-src="https://www.thenews.com.pk/assets/uploads/updates/2024-10-16/l_1240671_013812_updates.jpg"
               src="https://www.thenews.com.pk/assets/uploads/updates/2024-10-16/l_1240671_013812_updates.jpg"
               class="lazyloaded w-full h-auto object-cover"
               width="700"
               height="390">
           </a>
         </div>





         <div class="w-full md:w-5/12 border overflow-y-auto max-h-[304px]">
           <ul id="style-4" class="md:space-y-4 space-y-0">
             <li v-for="(item, index) in items" :key="index">
               <a :href="item.link" class="flex transition">
                 <img :src="item.image" class="p-2 pb-2 " alt="News Thumbnail">
                 <div class=" flex flex-col justify-center">
                   <h2 class="text font-semibold font-domine text-gray-800  mt-2 md:m-0 p-0">{{ item.title }}</h2>
                 </div>


               </a>
               <div class="w-full">
                 <div class="mx-2 " style="border: 0.25px solid rgba(156, 163, 175, 1);"></div>
               </div>
             </li>
           </ul>
         </div>
       </div>


     </div>



</div>
</div>
  </div>


</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'Taylor Swift, Travis Kelce silence breakup rumours with power move',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'Prince William celebrates as King Charles makes delightful announcement',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'New study reveals health benefits of coffee',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'NASA announces new mission to Mars',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'Breaking: Major earthquake strikes California',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'Local team wins championship in dramatic fashion',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'Innovations in renewable energy for a sustainable future',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'New fashion trends to watch this season',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'Celebrity couple announces pregnancy in heartwarming post',
        },
        {
          link: 'https://www.thenews.com.pk/',
          image: '/Images/video-one.webp',
          title: 'Tech giant unveils new product that will change the industry',
        },
      ],
    };
  }

};
</script>


<style scoped>
.news-pic {
  background-image: url(''); /* Set a default image */
  background-size: cover;
  background-position: center;
}
</style>
