<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinSection from '@/components/JoinSection.vue'
</script>

<template>
  <MainLayout>
    <section class="flex justify-center items-center flex-col pt-20">
    <div class="px-20 max-w-4xl flex flex-col space-y-6">
        <div class="flex flex-row justify-start">
            <div class="relative w-12 h-12 overflow-hidden rounded-full mr-4">
                <img
                    class="absolute inset-0 w-auto h-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/63bf/0ebe/baf975398b74732b52898a2562dfa9a6?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IqcqsEU5SkrpRuyzarU2E4oCNwLloFz0RFqVuAyylKP17YUOvO-koea0D~gj4YOmKDjjJXDNFmnDibJD1zS4bnRz4N4Fm5G4FOlT54eCbulEzvLXCK1tT6onhwXoSJxrW8vFlIE~SQsKVReycIGeJ3nu0J9Nw7mxFYnbbllOntN~zPd1BtAjx2dQjQkNwD1WBEs1Fbv49UCvvfXPIO~8w4CeG0Tm8VMrBnNnnzRKnKfRP2h8cLKgvJqwjgmdHA4f8hApTWTxv-E7T0g2WQkuffsviW2ZQSfxFoiDBzlgkBCcTJNHMtOOadxgNhouAqfjNLj6qJAdyVPsZfTFJn2wiQ__"
                    alt="Zoomed-in head"
                    style="transform: scale(1.5); transform-origin: left;"
                />
            </div>
        <div class="flex flex-col">
          <RouterLink to="/author">
            <p class="text-2xl font-semibold text-black hover:text-[#EDC14A]">
              Andrew Johnson
            </p>
          </RouterLink>
          <p class="text-gray-500">Posted on 27th January 2022</p>
        </div>
      </div>
      <h1 class="text-5xl font-semibold mb-8 leading-normal">
        Step-by-step guide to choosing great font pairs
      </h1>
      <div class="flex flex-row justify-start items-center">
        <svg
          class="justify-center items-center"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_533_2348)" transform="translate(12, 12)">
            <path
              d="M5.85054 6.21143L3.85792 6.36537C3.30345 6.40823 2.80963 6.69882 2.50299 7.16264L0.204943 10.6383C-0.0276155 10.99 -0.0645859 11.4302 0.105981 11.8158C0.276593 12.2014 0.627205 12.4702 1.04385 12.5347L2.86834 12.8173C3.29514 10.5523 4.31683 8.29295 5.85054 6.21143Z"
              fill="#075EFD"
            />
            <path
              d="M10.1836 20.1316L10.4662 21.9561C10.5307 22.3728 10.7995 22.7234 11.185 22.8939C11.3454 22.9649 11.5152 22.9999 11.6842 22.9999C11.9215 22.9999 12.1572 22.9308 12.3626 22.795L15.8384 20.497C16.3022 20.1903 16.5928 19.6964 16.6355 19.142L16.7895 17.1494C14.7079 18.6832 12.4486 19.7049 10.1836 20.1316Z"
              fill="#075EFD"
            />
            <path
              d="M9.49658 18.8665C9.55992 18.8665 9.62362 18.8613 9.68718 18.8507C10.6361 18.6921 11.5507 18.4248 12.4232 18.0749L4.92442 10.5762C4.57457 11.4486 4.30729 12.3632 4.14863 13.3122C4.0861 13.6862 4.21156 14.0673 4.4797 14.3355L8.66387 18.5196C8.8865 18.7422 9.18698 18.8665 9.49658 18.8665Z"
              fill="#075EFD"
            />
            <path
              d="M21.1661 10.1973C23.0011 6.64969 23.069 2.90072 22.9731 1.14249C22.9403 0.540047 22.46 0.0597456 21.8575 0.026908C21.5712 0.0112753 21.2319 0 20.8495 0C18.8835 0 15.7726 0.297785 12.8027 1.83397C10.4424 3.0548 7.34745 5.74295 5.52148 9.27567C5.54305 9.29251 5.56411 9.31039 5.58397 9.33025L13.6698 17.4161C13.6897 17.436 13.7075 17.457 13.7244 17.4786C17.2571 15.6525 19.9453 12.5576 21.1661 10.1973ZM13.3731 4.86231C14.6866 3.54876 16.8241 3.54862 18.1377 4.86231C18.7741 5.49862 19.1245 6.34472 19.1245 7.24463C19.1245 8.14454 18.7741 8.99064 18.1377 9.62695C17.481 10.2837 16.618 10.6121 15.7554 10.6122C14.8925 10.6122 14.03 10.2838 13.3731 9.62695C12.7367 8.99064 12.3863 8.14454 12.3863 7.24463C12.3863 6.34472 12.7367 5.49862 13.3731 4.86231Z"
              fill="#232536"
            />
            <path
              d="M14.3264 8.67403C15.1146 9.46218 16.3971 9.46223 17.1853 8.67403C17.5671 8.29219 17.7773 7.78458 17.7773 7.24462C17.7773 6.70466 17.5671 6.19704 17.1853 5.81525C16.7912 5.42115 16.2735 5.22412 15.7559 5.22412C15.2382 5.22412 14.7205 5.42115 14.3265 5.81525C13.9447 6.19704 13.7344 6.70466 13.7344 7.24462C13.7344 7.78458 13.9447 8.29224 14.3264 8.67403Z"
              fill="#232536"
            />
            <path
              d="M0.687523 18.9539C0.859978 18.9539 1.03243 18.8881 1.16396 18.7565L3.36392 16.5565C3.62708 16.2934 3.62708 15.8668 3.36392 15.6036C3.10082 15.3405 2.67415 15.3405 2.411 15.6036L0.211036 17.8036C-0.0521162 18.0667 -0.0521162 18.4934 0.211036 18.7565C0.342612 18.8881 0.515068 18.9539 0.687523 18.9539Z"
              fill="#075EFD"
            />
            <path
              d="M5.37991 17.6202C5.1168 17.3571 4.69014 17.3571 4.42698 17.6202L0.197364 21.8498C-0.0657881 22.113 -0.0657881 22.5396 0.197364 22.8028C0.32894 22.9343 0.501396 23.0001 0.673851 23.0001C0.846306 23.0001 1.01876 22.9343 1.15029 22.8027L5.37987 18.5731C5.64306 18.31 5.64306 17.8834 5.37991 17.6202Z"
              fill="#075EFD"
            />
            <path
              d="M6.4422 19.6358L4.24229 21.8358C3.97913 22.099 3.97913 22.5256 4.24229 22.7887C4.37386 22.9203 4.54632 22.9861 4.71873 22.9861C4.89114 22.9861 5.06364 22.9203 5.19517 22.7887L7.39513 20.5888C7.65828 20.3256 7.65828 19.899 7.39513 19.6358C7.13202 19.3727 6.70535 19.3727 6.4422 19.6358Z"
              fill="#075EFD"
            />
          </g>
          <defs>
            <clipPath id="clip0_533_2348">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 class="text-2xl font-bold">Startup</h1>
      </div>
    </div>
    <div class="py-20">
      <img
        class="w-[1280px] h-[582px] object-cover"
        src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
    <div class="px-20 max-w-4xl flex flex-col">
      <h1 class="text-4xl font-semibold mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h1>
      <p class="text-black mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>
      <ul class="list-disc pl-5 mb-8 text-2xl">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Non blandit massa enim nec scelerisque</li>
        <li>Neque egestas congue quisque egestas</li>
      </ul>
      <p class="text-black mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>
      <p class="text-black mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>
      <h1 class="text-4xl font-semibold mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h1>
      <p class="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>
    </div>
  </section>
  <section>
    <div class="grid grid-cols-3 p-20 gap-10">
      <h1 class="col-span-3 font-bold text-4xl mb-6">What to Read Next</h1>
      <div class="hover:bg-[#FBF6EA] space-y-6 p-2">
        <img
          class="h-[318px] object-cover"
          src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p class="mb-4 text-sm text-black">
          By <a href="#"><span class="text-[#FFD050]">John Doe</span></a> | Aug
          21, 2021
        </p>
        <h2 style="font-size: 28px" class="font-bold mb-4">
          A UX Case Study Creating a Studious Environment for Students:
        </h2>
        <p class="text-gray-500 mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
      <div class="hover:bg-[#FBF6EA] space-y-6 p-2">
        <img
          class="h-[318px] object-cover"
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p class="mb-4 text-sm text-black">
          By <a href="#"><span class="text-[#FFD050]">John Doe</span></a> | Aug
          21, 2021
        </p>
        <h2 style="font-size: 28px" class="font-bold mb-4">
          A UX Case Study Creating a Studious Environment for Students:
        </h2>
        <p class="text-gray-500 mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
      <div class="hover:bg-[#FBF6EA] space-y-6 p-2">
        <img
          class="h-[318px] object-cover"
          src="https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""  
        />
        <p class="mb-4 text-sm text-black">
          By <a href="#"><span class="text-[#FFD050]">John Doe</span></a> | Aug
          21, 2021
        </p>
        <h2 style="font-size: 28px" class="font-bold mb-4">
          A UX Case Study Creating a Studious Environment for Students:
        </h2>
        <p class="text-gray-500 mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
    </div>
  </section>

      <!-- Join Section -->
<JoinSection/>
  </MainLayout>
</template>
