import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, Search, User, Heart, Menu, X, Star, 
  Truck, Shield, RotateCcw, BadgeCheck, ChevronRight, 
  ChevronLeft, Plus, Minus, Trash2, Edit3, Check, 
  Upload, LogOut, Package, TrendingUp, Users, DollarSign,
  Eye, Filter, ArrowUpDown, Save, AlertCircle
} from 'lucide-react';

// --- DATA & INITIAL STATE ---

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Embroidered Soft Silk Saree",
    category: "Sarees",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    stock: 15,
    sizes: ["Free Size"],
    isNew: true,
    isBestSeller: true,
    description: "Premium silk saree with intricate gold embroidery and rich maroon pallu."
  },
  {
    id: 2,
    name: "Floral Printed A-Line Kurti",
    category: "Kurtis",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: "https://images.unsplash.com/photo-1583391733951-4b7640d36f8f?w=600&q=80",
    stock: 8,
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: false,
    description: "Elegant floral print kurti in soft cotton, perfect for daily wear."
  },
  {
    id: 3,
    name: "Cotton 2-Piece Co-ord Set",
    category: "2-Piece Sets",
    price: 1599,
    originalPrice: 2199,
    discount: 27,
    image: "https://images.unsplash.com/photo-1595777457583-95ce05f37963?w=600&q=80",
    stock: 12,
    sizes: ["S", "M", "L"],
    isNew: true,
    isBestSeller: true,
    description: "Stylish coordinated set featuring a crop top and palazzo pants."
  },
  {
    id: 4,
    name: "Embroidered 3-Piece Set",
    category: "3-Piece Sets",
    price: 2899,
    originalPrice: 3999,
    discount: 28,
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=600&q=80",
    stock: 5,
    sizes: ["M", "L", "XL"],
    isNew: false,
    isBestSeller: true,
    description: "Luxury 3-piece ethnic set with heavy embroidery and dupatta."
  },
  {
    id: 5,
    name: "Premium Cotton T-Shirt",
    category: "T-Shirts",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    stock: 25,
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: false,
    isBestSeller: false,
    description: "Comfortable premium cotton tee with minimalist design."
  },
  {
    id: 6,
    name: "High-Waist Skinny Jeans",
    category: "Jeans",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    stock: 18,
    sizes: ["26", "28", "30", "32", "34"],
    isNew: false,
    isBestSeller: true,
    description: "Classic high-waist skinny jeans in dark wash denim."
  },
  {
    id: 7,
    name: "Banarasi Silk Saree",
    category: "Sarees",
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    image: "https://images.unsplash.com/photo-1598966739650-9e876cca6e5e?w=600&q=80",
    stock: 3,
    sizes: ["Free Size"],
    isNew: false,
    isBestSeller: true,
    description: "Authentic Banarasi silk with traditional gold zari work."
  },
  {
    id: 8,
    name: "Anarkali Kurti with Dupatta",
    category: "Kurtis",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=600&q=80",
    stock: 7,
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: false,
    description: "Flared Anarkali style kurti with matching dupatta."
  }
];

const CATEGORIES = [
  { name: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80" },
  { name: "Kurtis", image: "https://images.unsplash.com/photo-1583391733951-4b7640d36f8f?w=600&q=80" },
  { name: "2-Piece Sets", image: "https://images.unsplash.com/photo-1595777457583-95ce05f37963?w=600&q=80" },
  { name: "3-Piece Sets", image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=600&q=80" },
  { name: "T-Shirts", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80" },
  { name: "Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80" }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "The quality of the saree exceeded my expectations. The embroidery is exquisite and the fabric feels so luxurious. Definitely my go-to store for ethnic wear!"
  },
  {
    id: 2,
    name: "Ananya Reddy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
    text: "I ordered the 3-piece set for a wedding and received so many compliments. The fit was perfect and the delivery was super fast. Highly recommend!"
  },
  {
    id: 3,
    name: "Meera Patel",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 4,
    text: "Beautiful collection and great prices. The kurtis are so comfortable for daily wear. Love the maroon and gold aesthetic of the brand!"
  }
];

const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

// --- UTILITY COMPONENTS ---

const Logo = ({ className = "", size = "large" }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <h1 className={`font-serif font-bold text-[#7B1E2B] tracking-wide leading-none ${size === 'large' ? 'text-5xl md:text-6xl' : 'text-2xl md:text-3xl'}`}>
      यशस्वी
    </h1>
    <span className={`font-serif text-[#C9A227] tracking-[0.2em] mt-1 ${size === 'large' ? 'text-sm md:text-base' : 'text-xs'}`}>
      कलेक्शन्स
    </span>
  </div>
);

const Button = ({ children, variant = "primary", className = "", onClick, disabled = false, type = "button" }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-[#7B1E2B] text-white hover:bg-[#5C0F1B] shadow-lg hover:shadow-xl",
    secondary: "bg-[#C9A227] text-white hover:bg-[#b08d1f] shadow-lg hover:shadow-xl",
    outline: "border-2 border-[#7B1E2B] text-[#7B1E2B] hover:bg-[#7B1E2B] hover:text-white",
    ghost: "text-[#7B1E2B] hover:bg-[#7B1E2B]/10",
    white: "bg-white text-[#7B1E2B] hover:bg-gray-100 shadow-lg"
  };
  
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Badge = ({ children, variant = "new" }) => {
  const styles = {
    new: "bg-[#C9A227] text-white",
    discount: "bg-[#7B1E2B] text-white",
    sale: "bg-[#5C0F1B] text-white"
  };
  return (
    <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${styles[variant]} z-10`}>
      {children}
    </span>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState("home"); // home, shop, product, cart, admin, adminLogin
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('yashasvi_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('yashasvi_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product, size = null) => {
    const existing = cart.find(item => item.id === product.id && item.size === size);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id && item.size === size 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1, selectedSize: size }]);
    }
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, delta) => {
    setCart(cart.map(item => {
      if (item.id === id && item.size === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- ADMIN FUNCTIONS ---
  const handleAdminLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.username.value === ADMIN_CREDENTIALS.username && form.password.value === ADMIN_CREDENTIALS.password) {
      setIsAdmin(true);
      setView("admin");
    } else {
      alert("Invalid credentials");
    }
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const addProduct = (newProduct) => {
    const id = Math.max(...products.map(p => p.id), 0) + 1;
    setProducts([...products, { ...newProduct, id }]);
  };

  // --- RENDER VIEWS ---

  if (view === "adminLogin") {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-[#F5EBDD]">
          <div className="flex justify-center mb-8">
            <Logo size="small" />
          </div>
          <h2 className="text-2xl font-serif text-[#2D2D2D] text-center mb-6">Admin Portal</h2>
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Username</label>
              <input name="username" type="text" className="w-full px-4 py-3 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] focus:ring-1 focus:ring-[#7B1E2B] outline-none transition-all" placeholder="admin" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Password</label>
              <input name="password" type="password" className="w-full px-4 py-3 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] focus:ring-1 focus:ring-[#7B1E2B] outline-none transition-all" placeholder="••••••" />
            </div>
            <Button type="submit" variant="primary" className="w-full">Sign In</Button>
          </form>
          <button onClick={() => setView("home")} className="w-full text-center mt-4 text-[#7B1E2B] hover:underline text-sm">
            Return to Store
          </button>
        </div>
      </div>
    );
  }

  if (view === "admin" && isAdmin) {
    return (
      <AdminPanel 
        products={products} 
        onUpdate={updateProduct} 
        onDelete={deleteProduct} 
        onAdd={addProduct}
        onLogout={() => { setIsAdmin(false); setView("home"); }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#2D2D2D]">
      {/* Announcement Bar */}
      <div className="bg-[#7B1E2B] text-white text-xs md:text-sm py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><Truck size={14} /> Free Shipping on Orders Above ₹999</span>
            <span className="hidden md:flex items-center gap-1.5"><Shield size={14} /> Cash on Delivery Available</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button className="hover:text-[#C9A227] transition-colors">Track Order</button>
            <button className="hover:text-[#C9A227] transition-colors">Help & Support</button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="cursor-pointer" onClick={() => { setView("home"); setSelectedCategory(null); }}>
              <Logo size="small" />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {['Home', 'Shop', 'Sarees', 'Kurtis', 'Sets', 'T-Shirts', 'Jeans', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => {
                    if (item === 'Home') setView("home");
                    else if (item === 'Shop') setView("shop");
                    else if (item === 'Sets') setSelectedCategory('2-Piece Sets');
                    else if (item === 'Contact') alert('Contact us at: support@yashasvi.com');
                    else setSelectedCategory(item);
                    setView(item === 'Home' || item === 'Shop' || item === 'Contact' ? (item === 'Home' ? 'home' : item.toLowerCase()) : 'shop');
                  }}
                  className="text-sm font-medium text-[#2D2D2D] hover:text-[#7B1E2B] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B1E2B] transition-all group-hover:w-full" />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-5">
              <button onClick={() => setShowSearch(!showSearch)} className="p-2 hover:bg-[#F5EBDD] rounded-full transition-colors">
                <Search size={20} />
              </button>
              <button onClick={() => setView("adminLogin")} className="hidden md:block p-2 hover:bg-[#F5EBDD] rounded-full transition-colors">
                <User size={20} />
              </button>
              <button onClick={() => setView("wishlist")} className="hidden md:block p-2 hover:bg-[#F5EBDD] rounded-full transition-colors relative">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#7B1E2B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button onClick={() => setView("cart")} className="p-2 hover:bg-[#F5EBDD] rounded-full transition-colors relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#7B1E2B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="mt-4 pb-2 animate-in slide-in-from-top-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for sarees, kurtis, sets..." 
                  className="w-full px-4 py-3 pl-12 bg-[#F5EBDD]/30 rounded-xl border border-[#F5EBDD] focus:border-[#7B1E2B] focus:ring-1 focus:ring-[#7B1E2B] outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#F5EBDD] px-4 py-6 space-y-4">
            {['Home', 'Shop', 'Sarees', 'Kurtis', 'Sets', 'T-Shirts', 'Jeans', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item === 'Home') setView("home");
                  else if (item === 'Shop') setView("shop");
                  else if (item === 'Sets') setSelectedCategory('2-Piece Sets');
                  else if (item === 'Contact') alert('support@yashasvi.com');
                  else setSelectedCategory(item);
                  setView(item === 'Home' || item === 'Shop' ? (item === 'Home' ? 'home' : 'shop') : 'shop');
                }}
                className="block w-full text-left py-2 text-lg font-medium text-[#2D2D2D] hover:text-[#7B1E2B]"
              >
                {item}
              </button>
            ))}
            <div className="pt-4 border-t border-[#F5EBDD] flex gap-4">
              <button onClick={() => { setMobileMenuOpen(false); setView("wishlist"); }} className="flex items-center gap-2 text-[#2D2D2D]">
                <Heart size={20} /> Wishlist ({wishlist.length})
              </button>
              <button onClick={() => { setMobileMenuOpen(false); setView("adminLogin"); }} className="flex items-center gap-2 text-[#2D2D2D]">
                <User size={20} /> Admin
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {view === "home" && !selectedCategory && (
          <HomeView 
            products={products} 
            onProductClick={(p) => { setSelectedProduct(p); setView("product"); }}
            onCategorySelect={(cat) => { setSelectedCategory(cat); setView("shop"); }}
            onAddToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {(view === "shop" || selectedCategory) && (
          <ShopView 
            products={products} 
            category={selectedCategory}
            searchQuery={searchQuery}
            onProductClick={(p) => { setSelectedProduct(p); setView("product"); }}
            onAddToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {view === "product" && selectedProduct && (
          <ProductView 
            product={selectedProduct} 
            onAddToCart={addToCart}
            toggleWishlist={toggleWishlist}
            isWishlisted={wishlist.some(w => w.id === selectedProduct.id)}
            relatedProducts={products.filter(p => p.category === selectedProduct.category && p.id !== selectedProduct.id).slice(0, 4)}
            onProductClick={(p) => setSelectedProduct(p)}
          />
        )}

        {view === "cart" && (
          <CartView 
            cart={cart} 
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            total={cartTotal}
            onCheckout={() => alert("Proceeding to checkout...")}
            onContinueShopping={() => setView("shop")}
          />
        )}

        {view === "wishlist" && (
          <WishlistView 
            wishlist={wishlist}
            onRemove={toggleWishlist}
            onProductClick={(p) => { setSelectedProduct(p); setView("product"); }}
            onAddToCart={addToCart}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-serif text-white">यशस्वी</h3>
                <span className="text-[#C9A227] text-sm tracking-widest">कलेक्शन्स</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium Indian fashion for the modern woman. Timeless elegance meets contemporary style in every piece we create.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Pinterest'].map(social => (
                  <button key={social} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7B1E2B] transition-colors">
                    <span className="text-xs">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-6 text-[#C9A227]">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {['About Us', 'Contact Us', 'Shipping Policy', 'Return Policy', 'Privacy Policy', 'Terms of Service'].map(link => (
                  <li key={link}><button className="hover:text-white transition-colors">{link}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6 text-[#C9A227]">Customer Care</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {['Track Order', 'FAQs', 'Size Guide', 'Fabric Care', 'Gift Cards', 'Loyalty Program'].map(link => (
                  <li key={link}><button className="hover:text-white transition-colors">{link}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6 text-[#C9A227]">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and new arrivals.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227]"
                />
                <Button variant="secondary" className="px-4">
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 यशस्वी कलेक्शन्स. All rights reserved.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <span>Made with ❤️ in India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB-VIEWS ---

function HomeView({ products, onProductClick, onCategorySelect, onAddToCart, toggleWishlist, wishlist }) {
  const newArrivals = products.filter(p => p.isNew);
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-[#F5EBDD]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1598966739650-9e876cca6e5e?w=1600&q=80" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white space-y-6">
            <span className="inline-block px-4 py-1.5 bg-[#C9A227]/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              New Collection 2026
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Timeless Style,<br />
              <span className="text-[#C9A227]">Made for You</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Explore our exclusive collection of sarees, kurtis, co-ord sets, jeans and more, crafted for every occasion.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="white" onClick={() => onCategorySelect('Sarees')}>
                Shop Now <ChevronRight size={18} />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#7B1E2B]" onClick={() => document.getElementById('new-arrivals').scrollIntoView({ behavior: 'smooth' })}>
                New Arrivals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2D2D2D] mb-3">Shop by Category</h3>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.name} 
                onClick={() => onCategorySelect(cat.name)}
                className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h4 className="text-white font-medium text-lg">{cat.name}</h4>
                  <span className="text-[#C9A227] text-xs opacity-0 group-hover:opacity-100 transition-opacity">Explore →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section id="new-arrivals" className="py-16 md:py-24 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#7B1E2B] text-sm font-medium tracking-wider uppercase">Just In</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2D2D2D] mt-2">New Arrivals</h3>
            </div>
            <button onClick={() => onCategorySelect(null)} className="hidden md:flex items-center gap-2 text-[#7B1E2B] hover:text-[#5C0F1B] font-medium">
              View All <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => onProductClick(product)}
                onAddToCart={() => onAddToCart(product)}
                toggleWishlist={() => toggleWishlist(product)}
                isWishlisted={wishlist.some(w => w.id === product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: BadgeCheck, title: "Premium Quality", desc: "Handpicked fabrics" },
              { icon: DollarSign, title: "Affordable Prices", desc: "Luxury for less" },
              { icon: Shield, title: "Secure Payments", desc: "100% secure checkout" },
              { icon: Truck, title: "Fast Delivery", desc: "2-5 business days" },
              { icon: RotateCcw, title: "Easy Returns", desc: "7-day return policy" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-[#FFF8F2] hover:bg-[#F5EBDD] transition-colors">
                <feature.icon className="w-8 h-8 text-[#7B1E2B] mx-auto mb-3" />
                <h4 className="font-medium text-[#2D2D2D]">{feature.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 md:py-24 bg-[#7B1E2B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A227] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative text-center">
          <span className="text-[#C9A227] text-sm font-medium tracking-wider uppercase">Limited Time Offer</span>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">
            Get 10% OFF<br />on your first order
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
            Use code <span className="font-bold text-[#C9A227]">YASHASVI10</span> at checkout
          </p>
          <Button variant="secondary" onClick={() => onCategorySelect(null)}>
            Shop Now
          </Button>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#7B1E2B] text-sm font-medium tracking-wider uppercase">Trending</span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2D2D2D] mt-2">Best Sellers</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => onProductClick(product)}
                onAddToCart={() => onAddToCart(product)}
                toggleWishlist={() => toggleWishlist(product)}
                isWishlisted={wishlist.some(w => w.id === product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2D2D2D]">Customer Love</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-medium text-[#2D2D2D]">{t.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < t.rating ? "text-[#C9A227] fill-[#C9A227]" : "text-gray-300"} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ShopView({ products, category, searchQuery, onProductClick, onAddToCart, toggleWishlist, wishlist }) {
  const filtered = products.filter(p => {
    const matchesCategory = category ? p.category === category : true;
    const matchesSearch = searchQuery ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-[#2D2D2D]">
          {category || (searchQuery ? `Search: "${searchQuery}"` : "All Products")}
        </h2>
        <p className="text-gray-500 mt-2">{filtered.length} products found</p>
      </div>
      
      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <Package size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductClick(product)}
              onAddToCart={() => onAddToCart(product)}
              toggleWishlist={() => toggleWishlist(product)}
              isWishlisted={wishlist.some(w => w.id === product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductView({ product, onAddToCart, toggleWishlist, isWishlisted, relatedProducts, onProductClick }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Generate additional images for the gallery (simulated)
  const images = [product.image, product.image, product.image];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5EBDD]">
            <img src={images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-4">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-[#7B1E2B]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-[#7B1E2B] text-sm font-medium">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2D2D2D] mt-2">{product.name}</h1>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-[#7B1E2B]">₹{product.price}</span>
            <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
            <span className="text-sm font-medium text-[#C9A227] bg-[#C9A227]/10 px-2 py-1 rounded">{product.discount}% OFF</span>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="space-y-3">
            <label className="text-sm font-medium text-[#2D2D2D]">Size: <span className="text-[#7B1E2B]">{selectedSize}</span></label>
            <div className="flex gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border-2 font-medium transition-all ${
                    selectedSize === size 
                      ? 'border-[#7B1E2B] bg-[#7B1E2B] text-white' 
                      : 'border-[#F5EBDD] hover:border-[#7B1E2B]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-[#2D2D2D]">Quantity</label>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-[#F5EBDD] flex items-center justify-center hover:border-[#7B1E2B]"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-[#F5EBDD] flex items-center justify-center hover:border-[#7B1E2B]"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              variant="primary" 
              className="flex-1 py-4"
              onClick={() => { onAddToCart(product, selectedSize); alert(`Added ${quantity} item(s) to cart!`); }}
            >
              <ShoppingBag size={20} /> Add to Cart
            </Button>
            <Button 
              variant="outline" 
              className="px-6"
              onClick={() => toggleWishlist(product)}
            >
              <Heart size={20} className={isWishlisted ? "fill-[#7B1E2B]" : ""} />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#F5EBDD]">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck size={18} className="text-[#7B1E2B]" />
              <span>Free shipping over ₹999</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <RotateCcw size={18} className="text-[#7B1E2B]" />
              <span>7-day easy returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h3 className="text-2xl font-serif font-bold text-[#2D2D2D] mb-6">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onClick={() => onProductClick(p)}
                onAddToCart={() => onAddToCart(p)}
                toggleWishlist={() => toggleWishlist(p)}
                isWishlisted={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, onClick, onAddToCart, toggleWishlist, isWishlisted }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F5EBDD]">
      <div className="relative aspect-[3/4] overflow-hidden cursor-pointer" onClick={onClick}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        
        {product.isNew && <Badge variant="new">NEW</Badge>}
        {product.discount > 0 && <Badge variant="discount">-{product.discount}%</Badge>}
        
        <button 
          onClick={(e) => { e.stopPropagation(); toggleWishlist(); }}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart size={16} className={isWishlisted ? "fill-[#7B1E2B] text-[#7B1E2B]" : "text-gray-600"} />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(); }}
          className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-3 text-[#7B1E2B] font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={16} /> Quick Add
        </button>
      </div>
      
      <div className="p-4">
        <h4 className="font-medium text-[#2D2D2D] line-clamp-1 mb-1">{product.name}</h4>
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-[#7B1E2B]">₹{product.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
      </div>
    </div>
  );
}

function CartView({ cart, onUpdateQuantity, onRemove, total, onCheckout, onContinueShopping }) {
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center animate-in fade-in">
        <ShoppingBag size={64} className="mx-auto text-[#F5EBDD] mb-6" />
        <h2 className="text-2xl font-serif font-bold text-[#2D2D2D] mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">Discover our beautiful collection and add something special</p>
        <Button onClick={onContinueShopping}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in">
      <h2 className="text-3xl font-serif font-bold text-[#2D2D2D] mb-8">Shopping Cart ({cart.length})</h2>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item, idx) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 p-4 bg-white rounded-2xl border border-[#F5EBDD] shadow-sm">
              <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded-xl" />
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-[#2D2D2D]">{item.name}</h4>
                    <button onClick={() => onRemove(item.id, item.selectedSize)} className="text-gray-400 hover:text-[#7B1E2B]">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Size: {item.selectedSize || 'Free Size'}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                      className="w-8 h-8 rounded-lg border border-[#F5EBDD] flex items-center justify-center hover:border-[#7B1E2B]"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                      className="w-8 h-8 rounded-lg border border-[#F5EBDD] flex items-center justify-center hover:border-[#7B1E2B]"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-bold text-[#7B1E2B]">₹{item.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FFF8F2] p-8 rounded-2xl h-fit">
          <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Order Summary</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>{total > 999 ? 'Free' : '₹99'}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span className="text-[#7B1E2B]">-₹0</span>
            </div>
          </div>
          
          <div className="border-t border-[#F5EBDD] pt-4 mb-6">
            <div className="flex justify-between text-lg font-bold text-[#2D2D2D]">
              <span>Total</span>
              <span>₹{total > 999 ? total : total + 99}</span>
            </div>
          </div>
          
          <Button variant="primary" className="w-full py-4" onClick={onCheckout}>
            Proceed to Checkout
          </Button>
          
          <button onClick={onContinueShopping} className="w-full text-center mt-4 text-[#7B1E2B] hover:underline text-sm">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

function WishlistView({ wishlist, onRemove, onProductClick, onAddToCart }) {
  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center animate-in fade-in">
        <Heart size={64} className="mx-auto text-[#F5EBDD] mb-6" />
        <h2 className="text-2xl font-serif font-bold text-[#2D2D2D] mb-2">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mb-8">Save your favorite items here</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in">
      <h2 className="text-3xl font-serif font-bold text-[#2D2D2D] mb-8">My Wishlist ({wishlist.length})</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {wishlist.map(product => (
          <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#F5EBDD]">
            <div className="relative aspect-[3/4] overflow-hidden cursor-pointer" onClick={() => onProductClick(product)}>
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <button 
                onClick={(e) => { e.stopPropagation(); onRemove(product); }}
                className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-[#7B1E2B] hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-[#2D2D2D] line-clamp-1 mb-1">{product.name}</h4>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-bold text-[#7B1E2B]">₹{product.price}</span>
                <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
              </div>
              <Button variant="primary" className="w-full py-2 text-sm" onClick={() => onAddToCart(product)}>
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- ADMIN PANEL ---

function AdminPanel({ products, onUpdate, onDelete, onAdd, onLogout }) {
  const [activeTab, setActiveTab] = useState("products");
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const stats = {
    totalProducts: products.length,
    totalStock: products.reduce((sum, p) => sum + p.stock, 0),
    lowStock: products.filter(p => p.stock < 5).length,
    categories: [...new Set(products.map(p => p.category))].length
  };

  const handleSave = (product) => {
    if (product.id) {
      onUpdate(product);
    } else {
      onAdd(product);
    }
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#F5EBDD]">
      {/* Admin Header */}
      <header className="bg-[#2D2D2D] text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-[#7B1E2B] p-2 rounded-lg">
            <Logo size="small" className="text-white" />
          </div>
          <span className="text-lg font-medium">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => window.open('/', '_blank')} className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
            <Eye size={16} /> View Store
          </button>
          <button onClick={onLogout} className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white min-h-screen shadow-lg hidden md:block">
          <nav className="p-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'products', label: 'Products', icon: Package },
              { id: 'orders', label: 'Orders', icon: ShoppingBag },
              { id: 'customers', label: 'Customers', icon: Users }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id ? 'bg-[#7B1E2B] text-white' : 'text-gray-600 hover:bg-[#F5EBDD]'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-in fade-in">
              <h2 className="text-2xl font-bold text-[#2D2D2D]">Dashboard Overview</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: 'Total Products', value: stats.totalProducts, icon: Package, color: 'bg-[#7B1E2B]' },
                  { label: 'Total Stock', value: stats.totalStock, icon: Package, color: 'bg-[#C9A227]' },
                  { label: 'Low Stock Items', value: stats.lowStock, icon: AlertCircle, color: 'bg-[#5C0F1B]' },
                  { label: 'Categories', value: stats.categories, icon: Filter, color: 'bg-[#2D2D2D]' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[#F5EBDD]">
                    <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      <stat.icon size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2D2D2D]">{stat.value}</h3>
                    <p className="text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[#F5EBDD] p-6">
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-4">Low Stock Alert</h3>
                <div className="space-y-3">
                  {products.filter(p => p.stock < 5).map(product => (
                    <div key={product.id} className="flex items-center justify-between p-3 bg-[#FFF8F2] rounded-lg">
                      <div className="flex items-center gap-4">
                        <img src={product.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <p className="font-medium text-[#2D2D2D]">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                      </div>
                      <span className="text-[#7B1E2B] font-bold">{product.stock} left</span>
                    </div>
                  ))}
                  {products.filter(p => p.stock < 5).length === 0 && (
                    <p className="text-gray-500 text-center py-4">All items are well stocked!</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#2D2D2D]">Product Management</h2>
                <Button onClick={() => { setEditingProduct(null); setShowForm(true); }}>
                  <Plus size={18} /> Add Product
                </Button>
              </div>

              {showForm && (
                <ProductForm 
                  product={editingProduct} 
                  onSave={handleSave} 
                  onCancel={() => setShowForm(false)} 
                />
              )}

              <div className="bg-white rounded-2xl shadow-sm border border-[#F5EBDD] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#FFF8F2] border-b border-[#F5EBDD]">
                      <tr>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Product</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Category</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Price</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Stock</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Status</th>
                        <th className="text-right px-6 py-4 text-sm font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F5EBDD]">
                      {products.map(product => (
                        <tr key={product.id} className="hover:bg-[#FFF8F2]/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                              <img src={product.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                              <div>
                                <p className="font-medium text-[#2D2D2D]">{product.name}</p>
                                <p className="text-xs text-gray-500">ID: {product.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                          <td className="px-6 py-4">
                            <span className="font-medium text-[#7B1E2B]">₹{product.price}</span>
                            <span className="text-xs text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              product.stock < 5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {product.stock} units
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              {product.isNew && <span className="text-xs bg-[#C9A227]/10 text-[#C9A227] px-2 py-1 rounded">New</span>}
                              {product.isBestSeller && <span className="text-xs bg-[#7B1E2B]/10 text-[#7B1E2B] px-2 py-1 rounded">Best</span>}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button 
                                onClick={() => { setEditingProduct(product); setShowForm(true); }}
                                className="p-2 text-[#7B1E2B] hover:bg-[#7B1E2B]/10 rounded-lg transition-colors"
                              >
                                <Edit3 size={16} />
                              </button>
                              <button 
                                onClick={() => onDelete(product.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'orders' || activeTab === 'customers') && (
            <div className="bg-white rounded-2xl shadow-sm border border-[#F5EBDD] p-12 text-center animate-in fade-in">
              <div className="w-16 h-16 bg-[#F5EBDD] rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={32} className="text-[#7B1E2B]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">Coming Soon</h3>
              <p className="text-gray-500">This feature is under development.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState(product || {
    name: '',
    category: 'Sarees',
    price: '',
    originalPrice: '',
    stock: '',
    sizes: ['Free Size'],
    isNew: true,
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
    description: ''
  });

  const [sizeInput, setSizeInput] = useState('');
  const categories = ['Sarees', 'Kurtis', '2-Piece Sets', '3-Piece Sets', 'T-Shirts', 'Jeans'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: Number(formData.price),
      originalPrice: Number(formData.originalPrice),
      stock: Number(formData.stock),
      discount: Math.round(((Number(formData.originalPrice) - Number(formData.price)) / Number(formData.originalPrice)) * 100)
    });
  };

  const addSize = () => {
    if (sizeInput && !formData.sizes.includes(sizeInput)) {
      setFormData({ ...formData, sizes: [...formData.sizes, sizeInput] });
      setSizeInput('');
    }
  };

  const removeSize = (size) => {
    setFormData({ ...formData, sizes: formData.sizes.filter(s => s !== size) });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#F5EBDD] p-6 mb-8 animate-in slide-in-from-top-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#2D2D2D]">{product ? 'Edit Product' : 'Add New Product'}</h3>
        <button onClick={onCancel} className="p-2 hover:bg-gray-100 rounded-lg">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Product Name</label>
            <input 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] outline-none"
              placeholder="e.g., Embroidered Silk Saree"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Category</label>
            <select 
              value={formData.category}
              onChange={e => setFormData({...formData, category: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] outline-none"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Price (₹)</label>
              <input 
                required
                type="number"
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Original Price (₹)</label>
              <input 
                required
                type="number"
                value={formData.originalPrice}
                onChange={e => setFormData({...formData, originalPrice: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Stock Quantity</label>
            <input 
              required
              type="number"
              value={formData.stock}
              onChange={e => setFormData({...formData, stock: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] outline-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Image URL</label>
            <input 
              value={formData.image}
              onChange={e => setFormData({...formData, image: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] outline-none"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Sizes</label>
            <div className="flex gap-2 mb-2">
              <input 
                value={sizeInput}
                onChange={e => setSizeInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addSize())}
                className="flex-1 px-4 py-2 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] outline-none"
                placeholder="Add size (e.g., M, Free Size)"
              />
              <button type="button" onClick={addSize} className="px-4 py-2 bg-[#F5EBDD] rounded-lg hover:bg-[#7B1E2B] hover:text-white transition-colors">
                <Plus size={18} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.sizes.map(size => (
                <span key={size} className="inline-flex items-center gap-1 px-3 py-1 bg-[#FFF8F2] rounded-full text-sm">
                  {size}
                  <button type="button" onClick={() => removeSize(size)} className="text-gray-400 hover:text-[#7B1E2B]">
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Description</label>
            <textarea 
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-[#F5EBDD] focus:border-[#7B1E2B] outline-none resize-none"
            />
          </div>

          <div className="flex gap-4 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={formData.isNew}
                onChange={e => setFormData({...formData, isNew: e.target.checked})}
                className="w-4 h-4 text-[#7B1E2B] rounded border-[#F5EBDD]"
              />
              <span className="text-sm">Mark as New</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={formData.isBestSeller}
                onChange={e => setFormData({...formData, isBestSeller: e.target.checked})}
                className="w-4 h-4 text-[#7B1E2B] rounded border-[#F5EBDD]"
              />
              <span className="text-sm">Best Seller</span>
            </label>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-end gap-4 pt-4 border-t border-[#F5EBDD]">
          <Button variant="ghost" onClick={onCancel}>Cancel</Button>
          <Button type="submit" variant="primary">
            <Save size={18} /> {product ? 'Update Product' : 'Add Product'}
          </Button>
        </div>
      </form>
    </div>
  );
}