<template>
    <div class="review">
      <h1 class="review-heading">📌 This is an Review page 📌</h1>
      <h3 class="review-link"><a href="https://www.kinnaii.com/thachangcafe-chiangmai/"> ⚫ รีวิว ท่าช้าง เชียงใหม่ร้านคาเฟ่สตรีทวัยรุ่น</a></h3>
      <h3 class="review-link"><a href="https://www.wongnai.com/restaurants/785Cx-the-good-view-bar-and-restaurant-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/reviews?ref=ct"> ⚫ รีวิว The Good View Bar And Restaurant เชียงใหม่</a></h3>
      <h3 class="review-link"><a href="https://www.wongnai.com/reviews/69d10448f2494543867be8d56f93b61e"> ⚫ รีวิว ร้านอาหารริเวอร์ไซด์ บาร์ แอนด์ เรสเตอร์รอง</a></h3>
      <h3 class="review-link"><a href="https://www.wongnai.com/reviews/7167195ce089468093a05b6990cf4b39"> ⚫ รีวิว Warm Up Cafe</a></h3>
      <h3 class="review-link"><a href="https://www.wongnai.com/restaurants/176454Xo-myst-maya-maya-chiang-mai"> ⚫ รีวิว Myst MAYA Chiang Mai</a></h3>
    </div>
  </template>
  <script>
  export default {
    name: 'ReView',
  }
  </script>
  <style>
  @media (min-width: 1024px) {
    .review {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgb(249, 237, 213);
    }
    .review-heading {
      text-transform: uppercase;
      font-size: 36px; 
      color: rgb(0, 23, 84); 
      margin-bottom: 20px; 
    }
    .review-link {
      text-decoration: none;
      color: rgb(2, 80, 5); 
      font-size: 24px; 
      margin-bottom: 10px; 
      transition: color 0.3s; 
    }
    .review-link:hover {
      color: rgb(92, 2, 2); 
    }
  }
  </style>
  