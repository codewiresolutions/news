<script setup>
import FirstView from '@/components/FirstView.vue'
import SocialView from '@/components/SocialView.vue'
import VideoView from '@/components/VideoView.vue'
import MoreView from '@/components/MoreView.vue'
import MagazinesView from '@/components/MagazinesView.vue'
import NewView from '@/components/NewView.vue'
</script>

<template>
  <slot>
    <div class="bg-customGray">
    <FirstView></FirstView>
    <SocialView></SocialView>
    <video-view></video-view>
      <MagazinesView></MagazinesView>
      <MoreView></MoreView>
<new-view></new-view>

    </div>
  </slot>
</template>
