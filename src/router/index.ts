import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue';
import BlogView from '../views/BlogView.vue';
import BlogPostView from '../views/BlogPostView.vue';
import CategoryView from '../views/CategoryView.vue';
import AuthorView from '../views/AuthorView.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPolicyView,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView,
  },
  {
    path: '/blogpost',
    name: 'BlogPost',
    component: BlogPostView,
  },
  {
    path: '/category',
    name: 'Category',
    component: CategoryView,
  },
  {
    path: '/author',
    name: 'Author',
    component: AuthorView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
