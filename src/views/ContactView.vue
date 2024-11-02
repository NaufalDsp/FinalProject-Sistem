<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <section class="bg-white py-12">
      <div class="container mx-auto max-w-2xl">
        <h1 class="text-sm font-semibold text-center text-gray-500 uppercase">Contact Us</h1>
        <h2 class="text-3xl font-bold text-center text-gray-800">Let's Start a Conversation</h2>
        <p class="text-center text-gray-500 mt-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>

        <!-- Contact Information Section -->
        <div class="bg-[#FFD050] p-8 rounded-lg mb-8">
        <div class="flex flex-col md:flex-row justify-start text-left gap-12"> 
          <div>
            <p class="text-gray-500 text-sm">Working Hours</p>
            <hr class="h-px my-4 bg-gray-400 border-0 w-[300px]" />
            <p class="text-gray-800">Monday To Friday</p>
            <p class="text-gray-800">9:00 AM to 8:00 PM</p>
            <p class="text-gray-500 text-sm">Our Support Team is available 24/7</p>
          </div>
          <div>
            <p class="text-gray-500 text-sm">Contact Us</p>
            <hr class="h-px my-4 bg-gray-400 border-0" /> 
            <p class="text-gray-800">020 7993 2905</p>
            <p class="text-gray-500">hello@finsweet.com</p>
          </div>
        </div>
      </div>

       <!-- Contact Form Section -->
       <section class="bg-white rounded-lg mb-8">
          <form>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
              <div class="flex-1">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  class="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
              <div class="flex-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  class="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
              <div class="flex-1">
                <select
                  required
                  class="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled selected>Province</option>
                  <option>Province 1</option>
                  <option>Province 2</option>
                  <option>Province 3</option>
                </select>
              </div>
              <div class="flex-1">
                <select
                  required
                  class="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled selected>City</option>
                  <option>City 1</option>
                  <option>City 2</option>
                  <option>City 3</option>
                </select>
              </div>
            </div>

            <div class="mb-4">
              <textarea
                placeholder="Message"
                rows="4"
                required
                class="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </section>
  </MainLayout>
</template>
