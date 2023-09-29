    <script>
  import { ref } from 'vue';
  
  const cafelist = ref([
  {
    name: 'RiverSide',
    price: 150,
    size:{s: 150,m: 190, l: 300},
    img: 'https://www.chiangmaiexpert.com/wp-content/uploads/2016/09/11102693_700570846718421_1794584535469640991_n.jpg',

  }
  ]);
  
  export default {
    name: 'CoffeeShop-3',
    data() {
      return {
        cafelist: cafelist,
      };
    },
  };
  </script>
<template>
  <div>
    <h1 class="head">🍻 ร้าน RiverSide 🍻</h1>
  </div>
    
  <div class="col-md-4 kayay" v-for="(cafe, index) in cafelist" :key="index">
    <div class="card mb-3 h-tang mx-auto">
      <img v-if="cafe.img" :src="cafe.img" class="card-img-top" :alt="cafe.name" />
      <div class="card-body text-center">
        <h5 class="card-title">{{ cafe.name }}</h5>
        <p class="card-text">ราคา: {{ cafe.price }} บาท</p>
        <p class="card-text">ขนาด: {{ cafe.size.s }} กรัม (S) / {{ cafe.size.m }} กรัม (M) / {{ cafe.size.l }} กรัม (L)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head {
  background-color: #f7e47a; 
  color: rgb(116, 0, 0); 
  /*background-color: #4d2e29; 
  color: white; */
  text-shadow: #674f4f90;
  padding: 10px 0;
  margin-top: 5%;
  text-align: center;
  border-radius: 50%;
  font-family: 'Mali', sans-serif;
}

.kayay {
  background: rgb(127, 9, 9);
  padding: 5%;
  width: 100%; /* กำหนดความกว้างเท่ากับหน้าจอ */
  height: auto; /* ความสูงจะปรับตามข้อมูลของร้าน */
  display: flex;
  justify-content: center; /* จัดเนื้อหาแสดงตรงกลาง */
  align-items: center; /* จัดเนื้อหาแนวแนวดิ่งตรงกลาง */
}
</style>
  