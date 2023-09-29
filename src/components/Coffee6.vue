<script>
  import { ref } from 'vue';
  
  const cafelist = ref([
  {
    name: 'Myst MAYA Chiang Mai',
    price: 1000,
    size:{s: 699,m: 999, l: 1099},
    img: 'https://th.bing.com/th/id/R.162827035fd18ce93c1ab9c2740cec70?rik=NG8ic1wP5clY8A&riu=http%3a%2f%2fbk.asia-city.com%2fsites%2fdefault%2ffiles%2fu121472%2fmyst-6.jpg&ehk=47CQ48iSt28vR68Ra6kMI1kb0G8BhK7k%2bxINiZZv2JU%3d&risl=&pid=ImgRaw&r=0',
  }
  ]);
  
  export default {
    name: 'CoffeeShop-6',
    data() {
      return {
        cafelist: cafelist,
      };
    },
  };
  </script>
 
 <template>
  <div>
    <h1 class="head">🍻 ร้าน Myst MAYA Chiang Mai 🍻</h1>
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
  width: 100%; 
  height: auto; 
  display: flex;
  justify-content: center; 
  align-items: center; 
}
</style>