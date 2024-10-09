import {
  Home,
  Package,
  ShoppingCart,
  Users2,
  PiggyBank,
  Landmark
} from "lucide-react";

export const settings = {
  app_id: 'digitalbanking',
  app_name: 'Member Analytics',
  app_logo: '/img/themes/superstore/superstore.png',
  base_path: '',
  auth_hero: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ai_chat: true,
  ai_avatar: '/img/themes/superstore/superstore.png',
  sections: [
    {
      name: 'Home',
      icon: <PiggyBank className="h-5 w-5"/>,
      path: '/',
      min_role: 1,
      description: 'your Member homepage'
    },
    {
      name: 'Business Account',
      icon: <Landmark className="h-5 w-5"/>,
      path: '/business',
      min_role: 1,
      description: 'view Business Account analytics and insights'
    }
  ],
}
