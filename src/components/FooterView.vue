<template>
  <footer class="h-auto bg-customPink">
    <div class="sm:w-10/12 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:py-0 py-4">

      <div class="lg:col-span-3  lg:py-16 py-2">
        <h2 class=" text-lg font-semibold sm:mb-4 mb-0">
 <span class="text-white text-2xl leading-tight font-normal">
    <small class="text-white text-sm">.Stay Tuned</small><br>
    Sign up <b>now to our newsletter</b>
</span>

        </h2>

      </div>
      <div class="lg:col-span-5  lg:py-16 py-2">
        <p class="text-white lg:pt-8 pt-2 mt-1">
          Sign up now and get news about updates, contests, events and so on without being spammed...
        </p>
      </div>
      <div class="lg:col-span-4  lg:py-16 py-2">
        <form class="ct-newsletter__form">
          <label for="newsletter-input" class=" block mb-1 text-sm font-medium text-white  sm:mt-10 mt-2">E-mail Address</label>
          <div class="relative">
            <input type="email" id="newsletter-input" placeholder="Enter your E-mail"
                   required class="ct-newsletter__input block w-full p-2 pr-20 border
           border-pink-500 rounded-l-none rounded-r-full bg-pink-300 text-white">
            <button type="submit" class="absolute right-0 top-0 h-full bg-white
            text-pink-500 px-6 rounded-full hover:bg-gray-300">
              <span class="ct-newsletter__submit">Subscribe</span>
              <span class="ct-newsletter__wait hidden"><i class="fa fa-spinner"></i></span>
            </button>
          </div>
          <span class="ct-newsletter__subscribed text-green-600 hidden">Thank you for subscribing</span>
        </form>


      </div>

    </div>
    <div class="flex justify-center">
      <div class="w-10/12 border h-[1px] border-white opacity-60"></div>
    </div>


    <div class="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      <div class="  text-white   md:my-16 my-4">
        <div class="">
          <h4 class="text font-bold mb-2">More About Us</h4>
          <div class="border-2 w-3/12 text-white mb-8"></div>
          <img src="/Images/logo.png" alt="logo" class="ct-footer__logo mb-5">
          <p class="mb-12">
            As it so contrasted oh estimating instrument. Size like body some one had. Conduct viewing boy minutes warrant expense.
          </p>
          <address class="ct-address">
            <a href="https://goo.gl/maps/obRcgtwGH5K2" class="media ct-address__box flex items-center my-6" target="_blank">
              <div class="media-left mr-2">
                <font-awesome-icon icon="location-dot" />
              </div>
              <div class="media-body">
                <span class="media-heading">9870 St Vincent Place, Glasgow, DC 45 Fr 45.</span>
              </div>
            </a>
            <a href="mailto:contact@myconfetti.com" class="media ct-address__box flex items-center mb-6">
              <div class="media-left mr-2">
                <font-awesome-icon icon="envelope" />
              </div>
              <div class="media-body">
                <span class="media-heading">contact@myconfetti.com</span>
              </div>
            </a>
            <a href="tel:0123456789" class="media ct-address__box flex items-center">
              <div class="media-left mr-2">
                <font-awesome-icon icon="phone" />
              </div>
              <div class="media-body">
                <span class="media-heading">(012) 345-6789</span>
              </div>
            </a>
          </address>
        </div>
      </div>

      <div class="md:my-16 my-4 text-white">
        <div class="widget-inner">
          <h4 class="text font-bold mb-2 text-white">Recent Posts</h4>
          <div class="border-2 w-3/12 text-white mb-8"></div>
          <ul class="space-y-4">
            <li class="flex items-start space-x-4">
              <div class="widget-li-image w-16 h-16 flex-shrink-0">
                <img src="/Images/recent-01.jpg" alt="" class="w-full h-full object-cover rounded">
              </div>
              <div class="widget-li-content flex-1">
                <h5 class="text-md font-semibold">Title Comes Here</h5>
                <span class="text-sm">
                  By an outlived insisted procured improved am. Paid hill fine ten now love even leaf.</span><br>
                <a href="#" class="text-sm hover:underline">August 21, 2015</a>
              </div>
            </li>
            <li class="border w-full text-white mb-8 opacity-60"></li>
            <li class="flex items-start space-x-4">
              <div class="widget-li-image w-16 h-16 flex-shrink-0">
                <img src="/Images/recent-02.jpg" alt="" class="w-full h-full object-cover rounded">
              </div>
              <div class="flex-1">
                <h5 class="text-md font-semibold">Title Comes Here</h5>
                <span class="text-sm">To make this treat, you will need to lorem ipsum</span><br>
                <a href="#" class="text-sm hover:underline">August 21, 2015</a>
              </div>

            </li>
            <div class="border w-full text-white mb-8 opacity-60"></div>
            <li class="flex items-start space-x-4">
              <div class="widget-li-image w-16 h-16 flex-shrink-0">
                <img src="/Images/recent-03.jpg" alt="" class="w-full h-full object-cover rounded">
              </div>
              <div class="flex-1">
                <h5 class="text-md font-semibold">Title Comes Here</h5>
                <span class="text-sm text-white">To make this treat, you will need to lorem ipsum</span><br>
                <a href="#" class="text-sm  hover:underline">August 21, 2015</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="md:my-16 my-4 text-white">

          <h4 class="text font-bold mb-2 text-white">Flickr Gallery</h4>
          <div class="border-2 w-3/12 text-white mb-8"></div>
      </div>
    </div>
    <div class="bg-white text-gray-400 text-center py-8">
      <span>© My Confetti Event Planning 2015</span>
    </div>

  </footer>
</template>
<script setup lang="ts">
</script>
