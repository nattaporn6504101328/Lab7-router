<template>
  <div class="mainpage">

    <div class="container">
      <div class="row">
        <div v-for="(coffeeShop, index) in coffeeShops" :key="index" class="col-md-4">
          <div class="card mb-3 h-tang"> 
            <div class="coffee-image-container">
              <img :src="coffeeShop.image" :alt="coffeeShop.name" class="coffee-image">
            </div>  
            <div class="container">
              <!-- เพิ่ม <router-link> เพื่อนำทางไปยัง Coffee1, Coffee2, Coffee3, ... -->
              <router-link :to="`/CoffeeShop-${index + 1}`">{{ coffeeShop.name }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </template>
  
    
    
    <script setup>
    //import { useRoute } from 'vue-router'
    
    //const route = useRoute()
    //const id = parseInt(route.params.id)
    
    const coffeeShops = [
        {
            name: 'ท่าช้าง',
            image: 'https://p-u.popcdn.net/event_details/posters/000/008/856/original/cfe1b94d03c5137faf1500f98117421e9f2ac9db.jpg?1590662796',
        },
        {
            name: 'GoodView',
            image: 'https://th.bing.com/th/id/OIP.R9A5Gpn-DpOChTHyuic_sAHaFj?pid=ImgDet&rs=1',
        },
        {
            name: 'RiverSide',
            image: 'https://th.bing.com/th/id/R.ab9802205edc889cdc62f84af245316c?rik=EUFmNFFfO91eJA&riu=http%3a%2f%2fwww.dooasia.com%2fwp-content%2fuploads%2f2018%2f05%2fThe-RiverSide-%e0%b9%80%e0%b8%8a%e0%b8%b5%e0%b8%a2%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-7-696x464.jpg&ehk=IfTrEAF8BEuE9hJhtMKHQNYZmV%2boSJEesY%2fzQmFNYoo%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            name: 'WarmUp',
            image: 'https://d136usn7jnoe61.cloudfront.net/pictures/21526/s2n_0002_p1d06tc4oou8jlkvr0l1mag1grj6.jpg',
        },
        {
            name: 'ตะวันแดง',
            image: 'https://th.bing.com/th/id/R.6fd3de7109e6a325c0d72efb53de2050?rik=Aa1zQxZXAWtxSg&riu=http%3a%2f%2ftawandang.com%2fwp-content%2fuploads%2f2017%2f08%2fTWDjang-Chaeng-Wattana.jpg&ehk=WHcn32JlAx8ZTvDdAHwMb81EWoU%2fiVLDtNNd6K%2bP6Ao%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            name: 'Myst MAYA Chiang Mai',
            image: 'https://th.bing.com/th/id/R.162827035fd18ce93c1ab9c2740cec70?rik=NG8ic1wP5clY8A&riu=http%3a%2f%2fbk.asia-city.com%2fsites%2fdefault%2ffiles%2fu121472%2fmyst-6.jpg&ehk=47CQ48iSt28vR68Ra6kMI1kb0G8BhK7k%2bxINiZZv2JU%3d&risl=&pid=ImgRaw&r=0',
        },
    ]
    </script>
    
    <style scoped>
.mainpage {
  margin-top: 50px;
    background-color: rgb(126, 0, 11);
    
}
  
.coffee-card {
  background-color: burgundy;
  border: 2px solid rgb(255, 230, 0); 
  border-radius: 10px;
  font-family: 'Mali', sans-serif;
  margin-bottom: 20px;
  padding: 10px; 
}

.coffee-image-container {
  border-radius: 10px;
  overflow: hidden;
  border: 5px solid rgb(255, 196, 0);
}

.coffee-image {
  width: 100%; 
  height: auto;
  transition: transform 0.3s ease;
}

.coffee-name-container {
  text-align: center; 
}

.coffee-name {
  color: ivory; 
  text-decoration: none; 
  font-weight: bold; 
  font-size: 1.2rem;
  transition: color 0.3s ease; 
}

.coffee-name:hover {
  color: gold; 
}
    </style>
    