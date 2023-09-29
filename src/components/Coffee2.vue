  <script>
  import { ref } from 'vue';
  
  const cafelist = ref([
    {
        name: 'GoodView',
    price: 120,
    size:{s: 120,m: 180, l: 250},
    img: 'https://th.bing.com/th/id/OIP.R9A5Gpn-DpOChTHyuic_sAHaFj?pid=ImgDet&rs=1',
    }
  ]);
  
  export default {
    name: 'CoffeeShop-2',
    data() {
      return {
        cafelist: cafelist,
      };
    },
  };
  </script>
  
  <template>
    <div>
      <h1 class="head">🍻 ร้าน GoodView 🍻</h1>
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
    background-color: #ffe048; 
    color: white; 
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
  