<template>
    <div class="header">
        <h1 class="text-center my-4">🍻 รายชื่อร้านกาแฟ 🍻</h1>
      </div>
      <br>
    <div class="container">
      <div class="mx-auto">
  
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4" v-for="(cafe, index) in cafelist" :key="index">
              <div class="card mb-3 h-tang">
                <img v-if="cafe.img" :src="cafe.img" class="card-img-top" :alt="cafe.name" />
                <div class="card-body">
                  <h5 class="card-title">{{ cafe.name }}</h5>
                  <p class="card-text">ราคา: {{ cafe.price }} บาท</p>
                  <p class="card-text">เลือกร้านที่จอง  <input type="checkbox" v-model="cafe.bookingCount" /></p>
                  <button class="btn btn-primary" @click="bookTable(cafe)">จองโต๊ะ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="col-md-4">
          <h2 class="mb-3">รายชื่อร้านที่จอง</h2>
          <table class="table table-sm table-white table-center  table-lg" v-if="bookedCafes.length > 0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ชื่อร้านที่จอง</th>
                <th scope="col">ชื่อคนจอง</th>
                <th scope="col">เบอร์โทร</th>
                <th scope="col">วันที่</th>
                <th scope="col">เวลา</th>
                <th scope="col">จำนวนโต๊ะ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(reservation, index) in bookedCafes" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ reservation.cafeName }}</td>
                <td>{{ reservation.customerName }}</td>
                <td>{{ reservation.phoneNumber }}</td>
                <td>{{ reservation.reservationDate }}</td>
                <td>{{ reservation.reservationTime }}</td>
                <td>{{ reservation.tableCount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <div class="row mt-4">
        <div class="col-md-6">
          <h2>กรุณากรอกข้อมูลจอง</h2>
          <br>
          <form>
            <div class="mb-3">
              <label for="customerName" class="form-label">ชื่อ</label>
              <input type="text" class="form-control" id="customerName" v-model="customerName" />
            </div>
            <div class="mb-3">
              <label for="phoneNumber" class="form-label">เบอร์โทร</label>
              <input type="text" class="form-control" id="phoneNumber" v-model="phoneNumber" />
            </div>
            <div class="mb-3">
              <label for="reservationDate" class="form-label">วันที่</label>
              <input type="date" class="form-control" id="reservationDate" v-model="reservationDate" />
            </div>
            <div class="mb-3">
              <label for="reservationTime" class="form-label">เวลา</label>
              <input type="time" class="form-control" id="reservationTime" v-model="reservationTime" />
            </div>
            <div class="mb-3">
              <label for="tableCount" class="form-label">จำนวนโต๊ะ</label>
              <input type="number" class="form-control" id="tableCount" v-model="tableCount"  />
            </div>
            <!--button type="button" class="btn btn-success" @click="makeReservation">ยืนยันการจอง</!--button-->
          </form>
        </div>
      </div>
      </div>
    </div>
    <button type="button" class="btn btn-success" @click="makeReservation">ยืนยันการจอง</button>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cafelist = ref([
    {
      name: 'ท่าช้าง',
      price: 80,
      size:{s: 80,m: 150, l: 200},
      img: 'https://p-u.popcdn.net/event_details/posters/000/008/856/original/cfe1b94d03c5137faf1500f98117421e9f2ac9db.jpg?1590662796',
      bookingCount: 0,
    },
    {
      name: 'GoodView',
      price: 120,
      size:{s: 120,m: 180, l: 250},
      img: 'https://th.bing.com/th/id/OIP.R9A5Gpn-DpOChTHyuic_sAHaFj?pid=ImgDet&rs=1',
      bookingCount: 0,
    },
    {
      name: 'RiverSide',
      price: 150,
      size:{s: 150,m: 190, l: 300},
      img: 'https://www.chiangmaiexpert.com/wp-content/uploads/2016/09/11102693_700570846718421_1794584535469640991_n.jpg',
      bookingCount: 0,
    },
    {
      name: 'WarmUp',
      price: 100,
      size:{s: 100,m: 200, l: 500},
      img: 'https://tidroam.com/wp-content/uploads/2022/09/2-2.jpg',
      bookingCount: 0,
    },
    {
      name: 'ตะวันแดง',
      price: 90,
      size:{s: 90,m: 250, l: 700},
      img: 'https://sls-prod.api-onscene.com/partner_files/trueidintrend/21246/CC697BDB-184E-48B4-9CD1-A85019FE3B35.jpeg',
      bookingCount: 0,
    },
    {
      name: 'Myst MAYA Chiang Mai',
      price: 1000,
      size:{s: 699,m: 999, l: 1099},
      img: 'https://th.bing.com/th/id/R.162827035fd18ce93c1ab9c2740cec70?rik=NG8ic1wP5clY8A&riu=http%3a%2f%2fbk.asia-city.com%2fsites%2fdefault%2ffiles%2fu121472%2fmyst-6.jpg&ehk=47CQ48iSt28vR68Ra6kMI1kb0G8BhK7k%2bxINiZZv2JU%3d&risl=&pid=ImgRaw&r=0',
      bookingCount: 0,
    },
  ]);
  
  const bookedCafes = ref([]);
  
  let customerName = '';
  let phoneNumber = '';
  let reservationDate = '';
  let reservationTime = '';
  let tableCount = 0;
  
  const makeReservation = () => {
  if (customerName && phoneNumber && reservationDate && reservationTime && tableCount > 0) {
    // สร้างข้อมูลการจอง
    const reservation = {
      cafeName: cafelist.value.find(cafe => cafe.bookingCount > 0)?.name || '',
      customerName: customerName,
      phoneNumber: phoneNumber,
      reservationDate: reservationDate,
      reservationTime: reservationTime,
      tableCount: tableCount,
    };

    // เพิ่มข้อมูลการจองลงใน bookedCafes
    bookedCafes.value.push(reservation);

    // รีเซ็ตค่า
    customerName = '';
    phoneNumber = '';
    reservationDate = '';
    reservationTime = '';
    tableCount = 0;
  }
};

const bookTable = (cafe) => {
  if (cafe.bookingCount > 0) {
    // ลดจำนวนโต๊ะที่สามารถจองได้
    cafe.bookingCount--;

    // สร้างข้อมูลการจอง
    const reservation = {
      cafeName: cafe.name,
      customerName: customerName,
      phoneNumber: phoneNumber,
      reservationDate: reservationDate,
      reservationTime: reservationTime,
      tableCount: tableCount,
    };

    // เพิ่มข้อมูลการจองลงใน bookedCafes
    bookedCafes.value.push(reservation);
  }
};

  </script >

<style>


@import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;500;600;700&display=swap');

.header {
  background-color: #4d2e29; 
  color: white; 
  text-shadow: #674f4f90;
  padding: 10px 0;
  margin-top: 5%;
  text-align: center;
  border-radius: 50%;
  font-family: 'Mali', sans-serif;
}

body {
 /* background-image: url('https://i.pinimg.com/564x/88/b1/bd/88b1bd136d049858ad0c98ab91b85099.jpg');
  background-color: rgba(77, 46, 41, 0.7); */
  background-image: url('https://i.pinimg.com/564x/8e/6e/73/8e6e73f3fe95b5bddf45fa6821a9970f.jpg');
  background-color: #af8375ba;
  padding: 100px 0;
  font-family: 'Mali', sans-serif;
}

.container {
 /* background-color: #ffffff90; */
  margin: 0%;
  padding: 20px 20px ;
  font-family: 'Mali', sans-serif;
}

.mb-3 {
  background-color:rgb(250, 240, 227);
  font-family: 'Mali', sans-serif;
  border-radius: 5%;
}

.col-md-6{
  background-color:rgb(188, 159, 135);
  font-family: 'Mali', sans-serif;
}
.btn {
 position:relative;
 background: #044714;
 border-color: black;
}
.table-lg {
  font-size: 1.25rem; 
  font-family: 'Mali', sans-serif;


  th,
  td {
    padding: 1rem; 
  }
}
.h-tang{
  padding: auto;
  margin: 5px;
  transform: scale(1); /* ปรับขนาดใหญ่ขึ้น 1.2 เท่า */
  transition: transform 0.3s ease; /* เพิ่มอนิเมชันเมื่อขนาดเปลี่ยน */
}
.h-tang:hover{
  transform: scale(1.3);
}
.h1{
  margin-top: 10;
}

</style>
  