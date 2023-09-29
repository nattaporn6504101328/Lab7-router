<script setup>
import NewsCard from '../components/NewsCard.vue';
</script>

<script>

export default {
  name: 'MainPage',
  
}
</script>

<template>
   
    <div class="headone">🍻 CoffeeShop 🍻</div>
<NewsCard> </NewsCard>


</template>

<style scoped>
@media (min-width: 1024px) {
.headone{
  background-color: rgb(126, 0, 11);
  color: rgb(255, 255, 255); 
  text-shadow: #2f1919f1;
  padding: 10px 0;
  margin-top: 3%;
  text-align: center;
  /*border-radius: 50%;*/
  font-size:2cqmax;
  font-weight:bolder;
  font-family: 'Mali', sans-serif;
  border: 7px solid #e8bd4b ;
}
}
</style>