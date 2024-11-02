<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinSection from '@/components/JoinSection.vue'
</script>

<template>
  <MainLayout>
    <section class="mt-52">
    <div class="pt-20 px-20">
      <div class="flex absolute bottom-[240px] grid grid-cols-2 z-10">
        <!-- Kolom kiri - About Us -->
        <div class="px-10 py-16 ml-28 bg-white">
          <h1 class="tracking-widest">ABOUT US</h1>
          <h1 class="text-5xl font-semibold leading-normal">
            We are a team of content writers who share their learnings
          </h1>
        </div>
        <!-- Kolom kanan - Deskripsi -->
        <div class="flex items-center justify-center p-10 mr-36">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div class="flex absolute top-[1001px] w-[720px] z-10">
        <div class="p-10 ml-28 text-white bg-[#075EFD] w-full">
          <ul
            style="font-size: 56px"
            class="flex items-center justify-between font-bold"
          >
            <li>12+</li>
            <li>18K</li>
            <li>30K</li>
          </ul>
          <ul class="flex items-center justify-between">
            <li>Blogs Published</li>
            <li>Views on Finsweet</li>
            <li>Total Active Users</li>
          </ul>
        </div>
      </div>
      <div class="flex absolute top-[1187px] left-[192px] w-[720px] z-10">
        <svg
          width="862"
          height="23"
          viewBox="0 0 862 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 23H311.477L311.142 0H0.334811L0 23Z" fill="#FFD050" />
          <rect x="311.906" width="550" height="23" fill="#FFD050" />
        </svg>
      </div>
      <!-- Image section -->
      <img
        class="flex relative pt-20"
        src="https://s3-alpha-sig.figma.com/img/9b1a/e821/ce4666853a588ecefa1d1add86d0a4da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QqIuCmBgKhfcOeh94HIPoDJrbEXX-XHKP3nSi7ZrU5i-mTaqF1v108I4E7EFxh7wTX6H3okz4wa~pwmjWHPKVlR2~itKXqmW2p8As3zSXXUwdVyTrq9bGf1JW7ie4Na5~R7mZdZryPL4tZ3muOOgMuc5QZ-f~hMCab5rv1U6Cy6EFuFgfG1Ykf5AkEviGUuYUbBXxijsA7qwH5BvhW8NyGlSbphyO8lnfdXudyDPchAvLW6W8kmYIh1WUOXYpMW583HCJIlnqPjPbpbnFo5mPfUduEW9dFYufIVR371N-XPlXaRLyFogMtZsMZZaSMUkS4ggn8Dx0w3~oP8RSIKGPg__"
        alt=""
      />
    </div>
    </section>
<!-- Mission and Vision section -->
<div class="px-20">
    <div class="grid grid-cols-2 text-gray-500 gap-12 bg-[#F4F0F8] px-28 pt-24 pb-10">
      <div class="">
        <h1 class="tracking-widest font-semibold text-black mb-4">OUR MISSION</h1>
        <h1 style="font-size: 28px" class="font-semibold text-black mb-4">
          Creating valuable content for creatives all around the world
        </h1>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
          enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus.
        </p>
      </div>
      <div class="">
        <h1 class="tracking-widest font-semibold text-black mb-4">OUR VISION</h1>
        <h1 style="font-size: 28px" class="font-semibold text-black mb-4">
          A platform that empowers individuals to improve
        </h1>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </div>
  </div>

  <!-- Content Section -->
  <section>
    <div class="grid grid-cols-2 p-20 space-y-10">
      <div class="col-span-1 flex flex-col justify-center">
        <div class="space-y-4">
          <h1 class="text-5xl font-bold">Our team of creatives</h1>
          <h2 class="text-2xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h2>
          <p class="text-sm md:text-base text-gray-600 leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
      <div class="relative col-span-1 flex justify-end items-center">
          <div class="absolute left-0 -translate-y-1/2 -translate-x-1/6">
            <svg
              width="103"
              height="116"
              viewBox="0 0 103 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 42.8469C0 19.1832 19.4417 0 43.4242 0H103V116H0V42.8469Z"
                fill="#075EFD"
              />
            </svg>
          </div>
          <img
            class="w-[624px] h-[480px] object-cover"
            src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team of creatives"
          />
        </div>
      <!-- Atas -->

      <div class="col-span-2 h-10" id="pemisah"></div>

      <!-- Bawah -->
      <div class="relative col-span-1 flex justify-start items-center">
        <div class="absolute -bottom-8 translate-x-24 z-10">
          <svg
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="37" cy="37" r="37" fill="#FFD050" />
          </svg>
        </div>
        <img
          class="w-[624px] h-[480px] object-cover"
          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Team of creatives"
        />
      </div>
      <div class="col-span-1 flex flex-col justify-center">
        <div class="space-y-4">
          <h1 class="text-5xl font-bold">Why we started this Blog</h1>
          <h2 class="text-2xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h2>
          <p class="text-sm md:text-base text-gray-600 leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
    </div>
  </section>

      <!-- List Of Author Section  -->
  <section class="py-16 mx-auto max-w-screen-2xl px-20">
    <h1 class="text-center text-4xl font-bold mb-14">List of Authors</h1>
    
    <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 lg:grid-cols-4">
      <!-- Author Card 1 -->
      <div class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col">
        <div class="w-16 h-16 mx-auto mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/b18c/46a4/5b103af032f344457c097e10aa7ebd86?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ylq-FuaDTV-Xqs-g6GyymF15yFO8N9Nt1hINUp3Ogl6AbGFQd5ZbBvBQfsxUL3dMtQLRPq4vS2w3pSEMpVGFJURBzXOYtfkookWAam01tuRCMbL7z-NDsmmiBueaOCBoRB75TKYl36MFCkP0JiVh-MGFV7jQMz8HWD93y62ezRI2CWN90n~HfjFjwF9wpiv7DeODs7Dplmy-8u9QDz9stfN5hOhxvNpS1FKvbQ31TVosFLMs85eemzyZMZqy-eJo04j0L9NfkVLyVDARHjh04TP3cLx3obMrX2VOSCMxFbLAab2rNjbzP7L6m~6x3MsVvfI35lx5bSTpSQq6WdVc6w__"
            alt="Floyd Miles"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">Floyd Miles</h3>
        <p class="text-gray-600 text-sm mb-4">Content Writer @Company</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Author Card 2 -->
      <div class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col">
        <div class="w-24 h-24 mx-auto mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/254e/3308/94c1db47acb8141c7502d8724bd28fbd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sph9YAgyk3fwt7A9LlpZusuiIHRkPzOa4Zvjtaoqy93QRcny2W2kEn5mDJ6mdrTRkl43A6ycBLY8iIn6vLKjmhQ686s4Z5FgPapJ8ePM0dBUNjVW2wcevL8lYSVz9ZMv0QLfKphTWOdLlbYmcLFQdL6V9A3wpGsedQrA-B-MYHwgIIPcxCj9EaBz3a0-628VsI-iVeoboKsiDHzlOAfx-DHuQkwHLcisPH8sGPdYyGFlgq5ApzfUEPVTPz2ttYeaQA535fYAa1TbknrhJJxWRm3aVDw1oKTZ6FisatIIA8Wpsj~1IAYYDlTKsckcdz8tZH7az634wbFEb4zL7qIYKA__"
            alt="Dianne Russell"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">Dianne Russell</h3>
        <p class="text-gray-600 text-sm mb-4">Content Writer @Company</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Author Card 3 -->
      <div class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col">
        <div class="w-24 h-24 mx-auto mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/e6f4/9511/e2521d1f9982ee7c506948d0020e937f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdX1cB68zOmDhdLlaSa1xwZZHqxcVH~7jeoc8NYRt-43btOQifDVURVIm~q~YqDlIfb21T6an0aJwLlGCesJ7ZDkAJAej9~FdqyC2MWeOWmN77h8uJkhrTxrBXrBvveb4a2iZgAS6Jf84-U-0nX4eQUP-RQi-depBpBKep5J5hH8jwBc-jdeUFnPREyVJiBtIAjWkZM2D9lWWcjMBuQaZFb46PLrtdwpf2UGyZchrbQhdhkmH9n7G2W9I5qJVN5A70z4xNoELA8VJAflVgfBc3KiYFvFs~r1wstnzlPFiV1i32EWIOGcFFzt-6FKP0MPNbkAFhYqOwraaYnonOqxug__"
            alt="Jenny Wilson"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">Jenny Wilson</h3>
        <p class="text-gray-600 text-sm mb-4">Content Writer @Company</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Author Card 4 -->
      <div class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col">
        <div class="w-24 h-24 mx-auto mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/452f/5cc4/f310490df993fe9cb9b6b77f5e1512cb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N4s1RxmiGd8f3nZ-E3eVjdzR8yfQD4T9FwXsFMfM6q7KdvD7L~3H1SQG1XLQMTJ1JgPw1jREi5hWQS18Xiq~fKWLG~wM4h1THzf8jIWwkfqMNRpNG~Dy~-x1U8wPAfvDsF5vx~f77QEkPPyUDkzXestFQhqinGC78aiYOlYSXaUQ4rms63k86-c2aKiHFFpCPfUN1cTp8DMrExDoDUVTeyV734HAFXpxpYVrJ2Z7l4Q-gm5l9BvRhdBv9y6Q2vUm4CpsUd05FULYpcEnC94ajlmghvbL-v8rkrAwAtsTCvovrCIwtl4FFe8pJk5xdVJ99JuCtCIuA0pTMYJf4J0LfA__"
            alt="Leslie Alexander"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">Leslie Alexander</h3>
        <p class="text-gray-600 text-sm mb-4">Content Writer @Company</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Author Card 5 -->
      <div class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col">
        <div class="w-24 h-24 mx-auto mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/4385/782a/8f3821cbdb774f4fd93dd85915717102?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PHWHs~5oqvurOtCRqbraQT5wtoHs~bvBiPLbNsSr-D75ovMKsU5H6oStmYUHSRZTF4eATJNMnGj910cPM61ClzoRDhxao5kZXkNdL8iDO0a~4D5kynunNZsnQMrWVHryyaJJ4wyeUo0lSptY7tBHKT4jtvBZUJ0AAhxjqe9W31vVjLt7ingVWjlLbBZIfrAiqLrLcu-mnd~1-qIXnweoqGoGTrFeBL3pPiwtGFqgypRQVKe-rUi-vy6NIq6wfmvngn5uTnbc~A60P5R2bjMbpJsEKLwtl6e5Ns9hwH0z-MQF208basoCLpEqKVBLvq00UBi~49gK9eG6pB9LLQkkSw__"
            alt="Guy Hawkins"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">Guy Hawkins</h3>
        <p class="text-gray-600 text-sm mb-4">Content Writer @Company</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Author Card 6 -->
      <div class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col">
        <div class="w-24 h-24 mx-auto mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/f035/9bcd/7f137256ea8ef973360ddcaafc87e212?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OBG5uZVBdOYZp5oyHssg-27AUNCXjTnobIdzl2NM-nMCsBMm2MzR5Gg2TaK9ChwzmE9CI~E6Fi5~M5xEb7RuohfNM~v-PP4hWPOVqvXtaXpRw~QsueJoESD~1b~017qXg26cEo1JLswmntUelETwGGa7bw1gYpwYxDX3jUmYj3xZAmwBaTs9XImWi6FKaHfa18npD6B5KEM3XMRJtSBF4Jpvlvs2Y1hrsI82jdblxE9xTvg9KE0rg1c1IQew37uRc3qvjFExbfRjlNbc4nFijGLWD6rc2kMHoX3OK58J163ZInx7x4LcSJMRdBCgluY~WYzh6QaC9~QqKEisQd1nfQ__"
            alt="Eleanor Pena"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">Eleanor Pena</h3>
        <p class="text-gray-600 text-sm mb-4">Content Writer @Company</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Author Card 7 -->
      <div class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col">
        <div class="w-24 h-24 mx-auto mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/680e/a601/f844a12b65a14e3c5b9fc782901f21f2?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BWIyZBg5JbIcgVEd4gHT8yXnLCa5A2kySR9i2bcP2ZRwxRN2nqHiFXstZ6mg1g~KTwXK6zOhhGgh9yJDKrPDEZO6u9wUkKRqvsgG9A4Vn0ql9g3zRbnR7go7ghdW0fyK~1ZPPPmyePKFiRs5LBYSgqOxPY1~IwmZ43cAh3PplriYDut-ckFHRaygsa6CNYUnLFFsTGtnNGNxjHuyZkmULgww1DcieotpQz7RjVJ1y5iAjj9j-rfXGIUOoMNU3WG99zJ06MXEEigtOOXsbX5EdN-6wBOtKkTjbPVdvAHtHVTjIVP6GldEDXEG0XX8EdaaMMAjLTlDAtgaKyXtwnW~MA__"
            alt="Robert Fox"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">Robert Fox</h3>
        <p class="text-gray-600 text-sm mb-4">Content Writer @Company</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Author Card 8 -->
      <div class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col">
        <div class="w-24 h-24 mx-auto mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/dc35/5164/e44f951d1c21b4f13ef7b17753bf3e73?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WiZMWzhHwLgwxytzzGXYP5UtsZ5m1NFQclI2zbF7Mil7if9wQSwQKNXfWMS7QurABar90UOUX2A6JH7IxTdgCcSYIekCcrNw1xKdRcM~4TSFGg6i8iHsh8lh4l~BOxA9oiBoUyvYPzLWWLr45D86C8NahZre21PRN5Zn0SJThiDQsx34MY9tc7~1U~d~aEXP8Vhk8dZigDSKWUEi~PY8OyZN7IfG4~CkuKdlyJYfbbQY8ABmsNWTeEsWZBNea8HEZvM9GS472A8JSAcKQHsft-iyLBXNKwxewj74VSfh5PBpudFbARF9EjoLJ~vbNFekec~Yyu6ZQt~NZsX~FCIJxw__"
            alt="Jacob Jones"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">Jacob Jones</h3>
        <p class="text-gray-600 text-sm mb-4">Content Writer @Company</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

        <!-- Join Section -->
<JoinSection/>
  </MainLayout>
</template>
