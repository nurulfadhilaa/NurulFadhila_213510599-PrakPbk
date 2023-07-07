import { createRouter, createWebHistory } from 'vue-router';

import LocationWidget from '../components/LocationWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import TicTacToeWidget from '../components/TicTacToeWidget.vue';
import WeatherWidget from '../components/WeatherWidget.vue';

const routes = [
  { path: '/location', component: LocationWidget },
  { path: '/photo', component: PhotoWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/tictactoe', component: TicTacToeWidget },
  { path: '/weather', component: WeatherWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;