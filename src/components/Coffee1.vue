<script>
import { ref } from 'vue';

const cafelist = ref([
  {
    name: 'ท่าช้าง',
    price: 80,
    size: { s: 80, m: 150, l: 200 },
    img: 'https://p-u.popcdn.net/event_details/posters/000/008/856/original/cfe1b94d03c5137faf1500f98117421e9f2ac9db.jpg?1590662796',
  }
]);

export default {
  name: 'CoffeeShop-1',
  data() {
    return {
      cafelist: cafelist,
    };
  },
};
</script>
<template>
  <div>
    <h1 class="head">🍻 ร้าน ท่าช้าง 🍻</h1>
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

