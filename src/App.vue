<template>
  <router-view></router-view>
  <!-- <div id="cursor">
    <div id="center"></div>
  </div> -->
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue"

// document.addEventListener('click', () => {
//   var cursor = document.getElementById('cursor');
//   cursor.classList.add("cursor-style")
// })

// document.addEventListener('mousemove', function (e) {
//   var cursor = document.getElementById('cursor');
//   var x = e.clientX;
//   var y = e.clientY;

//   console.log(e)
//   cursor.style.left = x + "px"
//   cursor.style.top = y + "px"
// })
export default {
  components: {
    Footer,
  }
}
</script>


<style >
body {
  cursor: none;
}

/* #cursor {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  box-sizing: border-box;
  transition: all 0.1s ease;
  transition-property: transform;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  animation: animate 5s linear infinite;
  border: 2px dashed #000;
  z-index: 2
}

#center {

  position: absolute;

  width: 10px;
  height: 10px;
  z-index: 2;
  box-sizing: border-box;
  transition: 0.1s;
  border-radius: 50%;
  pointer-events: none;
  background-color: orange;
  animation: centers 5s linear infinite;

}




@keyframes centers {
  0% {
    transform: scale(0.5);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(0.5);
  }
}

@keyframes animate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
} */
</style>
