<template>
  <div>
    <h2>Weather Widget</h2>

    <div class="input-container">
      <input type="text" id="city" v-model="city" placeholder="Enter country/city name" class="input-field"/>
      <button @click="getWeather" class="get-weather-btn">Get Weather</button>
    </div>

    <div v-if="weather" class="weather-info">
      <h3>{{ weather.name }}</h3>
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Weather: {{ weather.weather[0].description }}</p>
    </div>

    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      weather: null,
      error: '',
    };
  },
  methods: {
    async getWeather() {
      if (this.city === '') {
        this.error = 'Harap masukkan nama kota atau negara.';
        this.weather = null;
        return;
      }

      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=b7bfca7b27a3485144fea086c50d09dc&units=metric`);
        this.weather = response.data;
        this.error = '';
      } catch (error) {
        console.error(error);
        this.weather = null;
        this.error = 'Lokasi tidak ditemukan.';
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Quicksand&family=Ubuntu+Condensed&display=swap');

.widget-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input-field {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.get-weather-btn {
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #a87979;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.get-weather-btn:hover {
  background-color: #7f8a96;
}

.weather-info {
  margin-top: 20px;
  margin-bottom: 160px;
  padding: 20px;
  background-color: #998282;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.location {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.temperature,
.weather-description {
  margin-bottom: 5px;
  color: #666;
}

.error-message {
  color: rgb(255, 255, 255);
  margin-top: 10px;
}
</style>
