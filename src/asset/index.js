import memorycard from './memorycard.png';
import shoppingcart from './shoppingcart.png';
import admindashboard from './admindashboard.png';
import weatherapp from './weatherapp.png';
import inventoryApp from './inventoryApp.png';
import signup from './signup.png';
import crawler from './pttcrawler.png';

const projects = [
  {
    name: 'Project: Shopping Cart',
    description: `Family's Pineapple is on sale! (in someday)`,
    img: shoppingcart,
    github: 'https://github.com/YoYuTW/shopping-cart',
    live: 'https://yoyutw.github.io/shopping-cart/',
  },
  {
    name: 'Project: Dashboard',
    description: 'CSS grid practice.',
    img: admindashboard,
    github: 'https://github.com/YoYuTW/admin-dashboard',
    live: 'https://yoyutw.github.io/admin-dashboard/',
  },
  {
    name: 'Project: Memory card',
    description: 'Remember every card you have clicked!',
    img: memorycard,
    github: 'https://github.com/YoYuTW/memory-card',
    live: 'https://yoyutw.github.io/memory-card/',
  },
  {
    name: 'Project: Weather app',
    description: `Check my current city's temperture and humidity.`,
    img: weatherapp,
    github: 'https://github.com/YoYuTW/weather-app',
    live: 'https://yoyutw.github.io/weather-app/',
  },
  {
    name: 'Project: Inventory Managing System',
    description: `Inventory managing system for I-KE-A, definite not a Sweden company.`,
    img: inventoryApp,
    github: 'https://github.com/YoYuTW/inventory-app',
    live: 'https://obscure-retreat-56413.herokuapp.com/branch',
  },
  {
    name: 'Project: Sign Up',
    description: `A responsive sign-up page.`,
    img: signup,
    github: 'https://github.com/YoYuTW/sign-up-form',
    live: 'https://yoyutw.github.io/sign-up-form/',
  },
  {
    name: 'PTT Crawler',
    description: `I can't buy new XBOX series X, so I have to get second-hand one.`,
    img: crawler,
    github: 'https://github.com/YoYuTW/ptt-crawler',
    live: 'https://github.com/YoYuTW/ptt-crawler',
  },
];

export default projects;