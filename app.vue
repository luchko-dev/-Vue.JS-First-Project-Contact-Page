<script setup lang="ts">
import type { Container } from 'tsparticles-engine';
import particleOptions from './particle.ts';
import { ref, onMounted } from 'vue';
import autoAnimate from "@formkit/auto-animate"


// Define your contacts as a reactive reference
const Contacts = ref([
{ title: 'Gmail', needRobotCheck: true, ClickToCall: false, link: 'mailto:mrgrape1337@gmail.com', isWaiting: false, robot_solved: false, emergency: false },
{ title: 'Telegram', needRobotCheck: true, ClickToCall: false, link: 'https://t.me/eblan4ik123', isWaiting: false, robot_solved: false, emergency: false },
{ title: 'Call me', needRobotCheck: true, ClickToCall: true, link: '799999999', isWaiting: false, robot_solved: false, emergency: false }
]);

// Method that could be called when particles are loaded
function onLoaded(container: Container) {
  console.log('Particles loaded', container);
}

function goTo(idx: number, step: number = 0){
  const contact = Contacts.value[idx]

  Contacts.value[idx]['isWaiting'] = true
  setTimeout(() => {
    Contacts.value[idx]['isWaiting'] = false;
    window.open((contact.ClickToCall ? 'tel:' : '') + contact.link)
  }, 300)
}
</script>

<template>
  <div 
  class="flex z-20 sticky w-screen h-screen anim-shows flex justify-center items-center">
    <div>
      <div class="px-6 py-5 text-white bg-[#2c2f33] rounded-lg flex justify-center items-center flex-col">

        <img src="./assets/image.svg" class="w-20" />

        <h1 class="text-xl mt-3 text-center">Hello world!</h1>
        <p class="text-xs w-72 mt-1 text-center">
          This link may will be filled by you as contact information landing and get this for free use.
        </p>

        <div class="mt-6 flex flex-col w-full">

          <p class="text-lg text-center text-aqua-900">Choose a link.</p>

          <div v-auto-animate v-for="(contact, index) in Contacts" :key="index" class="flex space-x-2 flex-col w-full">

            <a-button 
            type="primary" 
            class="mt-2" 
            :class="{ 'bg-yellow-500': contact.emergency }"  
            :loading="contact.isWaiting" 
            @click="goTo(index)">
              {{ contact.title }}
            </a-button>

          </div>
      </div>
      </div>
    </div>
  </div>

  <NuxtParticles
    id="tsparticles"
    :options="particleOptions"
    @loaded="onLoaded"
    class="flex z-10 h-screen w-screen absolute top-0 left-0"
  />
</template>




<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

  * {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    letter-spacing: 0.8px;
  }

  body {
    background-color: #23272a;
  }

  .anim-shows {
    animation: shows 0.8s ease-in-out;
  }

  .pisun {
    -webkit-box-shadow: 0px 3px 19px 5px rgba(114,136,218,0.60);
    -moz-box-shadow: 0px 3px 19px 5px rgba(114,136,218,0.60);
    box-shadow: 0px 3px 19px 5px rgba(114,136,218,0.60);
  }

@keyframes shows {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
</style>