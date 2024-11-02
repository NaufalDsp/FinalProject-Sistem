<script setup lang="ts">
import { ref } from 'vue';

interface Post {
  date: string;
  author: string;
  title: string;
}

interface FeaturedPost extends Post {
  image: string;
  description: string;
}

const featuredPost = ref<FeaturedPost>({
  image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg',
  date: 'May 23, 2022',
  author: 'John Doe',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
});

const allPosts = ref<Post[]>([
  {
    date: 'Aug 23, 2021',
    author: 'John Doe',
    title: '8 Figma design systems that you can download for free today.'
  },
  {
    date: 'Aug 23, 2021',
    author: 'John Doe',
    title: '8 Figma design systems that you can download for free today.'
  },
  {
    date: 'Aug 23, 2021',
    author: 'John Doe',
    title: '8 Figma design systems that you can download for free today.'
  },
  {
    date: 'Aug 23, 2021',
    author: 'John Doe',
    title: '8 Figma design systems that you can download for free today.'
  }
]);
</script>

<style scoped>
.max-w-screen-xl {
  max-width: 1280px;
}

.md\:w-1\/3 {
  width: 35%;
}
</style>
<template>
  <div class="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
  <div class="flex flex-col md:flex-row gap-8 justify-between">
    
    <!-- Featured Post Section -->
    <div class="md:w-2/3 space-y-4">
      <h2 class="text-3xl font-bold mb-6">Featured Post</h2>
      <div class="border border-gray-100 rounded-lg p-10">
        <img 
          :src="featuredPost.image"
          alt="Featured Post Image" 
          class="w-full h-80 object-cover rounded-t-lg"
        />
        <div class="px-8 py-6 space-y-4 bg-white rounded-b-lg">
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <span lass="text-base">By </span><span class="text-base text-yellow-500">{{ featuredPost.author }}</span>
            <span>|</span>
            <span  class="text-base">{{ featuredPost.date }}</span>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800">{{ featuredPost.title }}</h3>
          <p class="text-gray-600 pb-3">{{ featuredPost.description }}</p>
          <button class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200 ">
            Read More »
          </button>
        </div>
      </div>
    </div>
      <!-- All Posts Section -->
      <div class="md:w-1/3 space-y-4 self-stretch flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-3xl font-bold">All Posts</h2>
            <a href="#" class="text-yellow-500 text-sm hover:underline">View All</a>
          </div>
          <div class="space-y-4">
            <article 
              v-for="(post, index) in allPosts" 
              :key="index" 
              class="p-4 bg-gray-50 rounded-lg hover:bg-[#FBF6EA] transition-colors duration-200"
            >
              <div class="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>By</span><span class="text-yellow-500">{{ post.author }}</span>
                <span class="text-gray-600">|</span>
                <span>{{ post.date }}</span>
              </div>
              <h3 class="text-2xl font-semibold text-gray-800">{{ post.title }}</h3>
            </article>
          </div>
        </div>
        <!-- Space to ensure alignment with the "Read More" button -->
        <div class="hidden md:block mt-auto"></div>
      </div>
    </div>
  </div>
</template>


