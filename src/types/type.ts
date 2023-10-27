interface User {
    username: string; // User's username or display name
    email: string; // User's email address
    password: string; // Encrypted/hashed password
  }
  
  
  interface CartItem {
    product: Product;
    quantity: number;
  }
  
  interface Product {
    id: string;
    name: string;
    price: number;
    // Other product properties
  }
  
  type UserRole = 'admin' | 'customer';
  
  export default User;
  
  
  
  
  
  