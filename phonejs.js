/**
 * ========================================
 * 📱 تك ستور - ملف الجافاسكريبت
 * ========================================
 * الوظائف: عرض المنتجات، السلة، الفلترة، المودال
 */

// ===== بيانات المنتجات =====
const products = [
    {
        id: 1,
        name: 'آيفون 15 برو ماكس',
        brand: 'apple',
        brandName: 'آبل',
        price: 4499,
        oldPrice: 5999,
        image: 'https://placehold.co/180x360/1a73e8/white?text=iPhone15Pro',
        badge: 'sale',
        badgeText: 'خصم 25%',
        specs: ['256GB', '6.7"', 'A17 Pro', '48MP'],
        rating: 4.9,
        reviews: 342,
        description: 'أقوى هاتف من آبل بشريحة A17 Pro وكاميرا 48 ميجابكسل وشاشة Super Retina XDR.',
        color: 'أبيض'
    },
    {
        id: 2,
        name: 'سامسونج جالكسي S24 ألترا',
        brand: 'samsung',
        brandName: 'سامسونج',
        price: 4299,
        oldPrice: 5199,
        image: 'https://placehold.co/180x360/ff6b35/white?text=S24Ultra',
        badge: 'hot',
        badgeText: 'الأكثر مبيعاً',
        specs: ['512GB', '6.8"', 'Snapdragon 8 Gen 3', '200MP'],
        rating: 4.8,
        reviews: 289,
        description: 'هاتف سامسونج الرائد مع قلم S Pen وكاميرا 200 ميجابكسل وذكاء اصطناعي متقدم.',
        color: 'أسود'
    },
    {
        id: 3,
        name: 'آيفون 15',
        brand: 'apple',
        brandName: 'آبل',
        price: 3299,
        oldPrice: 3799,
        image: 'https://placehold.co/180x360/1a73e8/white?text=iPhone15',
        badge: 'new',
        badgeText: 'جديد',
        specs: ['128GB', '6.1"', 'A16 Bionic', '48MP'],
        rating: 4.7,
        reviews: 521,
        description: 'تصميم جديد مع منفذ USB-C وكاميرا محسّنة وشاشة Super Retina XDR.',
        color: 'أزرق'
    },
    {
        id: 4,
        name: 'شاومي 14 برو',
        brand: 'xiaomi',
        brandName: 'شاومي',
        price: 2899,
        oldPrice: 3499,
        image: 'https://placehold.co/180x360/2ecc71/white?text=Xiaomi14',
        badge: 'sale',
        badgeText: 'خصم 17%',
        specs: ['256GB', '6.73"', 'Snapdragon 8 Gen 3', '50MP'],
        rating: 4.6,
        reviews: 178,
        description: 'هاتف شاومي الرائد بكاميرا Leica وشحن سريع 120 واط وشاشة AMOLED رائعة.',
        color: 'أسود'
    },
    {
        id: 5,
        name: 'سماعات AirPods Pro 2',
        brand: 'accessories',
        brandName: 'آبل',
        price: 899,
        oldPrice: 1099,
        image: 'https://placehold.co/180x180/1a73e8/white?text=AirPods',
        badge: 'hot',
        badgeText: 'الأكثر مبيعاً',
        specs: ['بلوتوث 5.3', 'عزل ضوضاء', 'USB-C', '6 ساعات'],
        rating: 4.8,
        reviews: 892,
        description: 'سماعات لاسلكية بعزل ضوضاء نشط وصوت مكاني مع مقاومة للماء والعرق.',
        color: 'أبيض'
    },
    {
        id: 6,
        name: 'سامسونج جالكسي S24',
        brand: 'samsung',
        brandName: 'سامسونج',
        price: 3199,
        oldPrice: 3699,
        image: 'https://placehold.co/180x360/ff6b35/white?text=S24',
        badge: 'new',
        badgeText: 'جديد',
        specs: ['256GB', '6.2"', 'Exynos 2400', '50MP'],
        rating: 4.7,
        reviews: 205,
        description: 'هاتف سامسونج المدمج مع ميزات Galaxy AI وشاشة Dynamic AMOLED 2X.',
        color: 'أزرق'
    },
    {
        id: 7,
        name: 'شاحن سريع 65 واط',
        brand: 'accessories',
        brandName: 'أوجرين',
        price: 149,
        oldPrice: 199,
        image: 'https://placehold.co/180x180/9b59b6/white?text=Charger',
        badge: 'sale',
        badgeText: 'خصم 25%',
        specs: ['65 واط', 'USB-C', 'GaN', 'متوافق عالمي'],
        rating: 4.5,
        reviews: 456,
        description: 'شاحن سريع بتقنية GaN يدعم جميع الهواتف والأجهزة المحمولة.',
        color: 'أبيض'
    },
    {
        id: 8,
        name: 'شاومي ريدمي نوت 13 برو',
        brand: 'xiaomi',
        brandName: 'شاومي',
        price: 1299,
        oldPrice: 1599,
        image: 'https://placehold.co/180x360/2ecc71/white?text=Redmi13',
        badge: 'new',
        badgeText: 'جديد',
        specs: ['256GB', '6.67"', 'Snapdragon 7s Gen 2', '200MP'],
        rating: 4.5,
        reviews: 334,
        description: 'هاتف شاومي المتوسط بكاميرا 200 ميجابكسل وبطارية 5100 مللي أمبير.',
        color: 'أبيض'
    }
];

// ===== حالة السلة =====
let cart = [];

// ===== عرض المنتجات في الصفحة =====
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.brand === filter);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-brand="${product.brand}">
            <span class="product-badge badge-${product.badge}">${product.badgeText}</span>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onclick="openModal(${product.id})">
                <div class="product-actions">
                    <button class="action-btn" onclick="toggleLike(this)" title="المفضلة">♡</button>
                    <button class="action-btn" onclick="openModal(${product.id})" title="عرض سريع">👁</button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brandName}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-specs">
                    ${product.specs.map(s => `<span class="spec-tag">${s}</span>`).join('')}
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-current">${product.price.toLocaleString()} ر.س</span>
                        <span class="price-old">${product.oldPrice.toLocaleString()} ر.س</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}, this)">
                        🛒 أضف
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== فلترة المنتجات حسب الفئة =====
function filterProducts(category) {
    document.querySelectorAll('.category-card').forEach(card => 
        card.classList.remove('active')
    );
    event.currentTarget.classList.add('active');
    renderProducts(category);
}

function filterByTab(btn, category) {
    document.querySelectorAll('.filter-tab').forEach(tab => 
        tab.classList.remove('active')
    );
    btn.classList.add('active');
    renderProducts(category);
}

// ===== وظائف السلة =====
function addToCart(productId, btnElement) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast('تمت إضافة المنتج للسلة ✓');

    // تأثير زر الإضافة
    if (btnElement) {
        btnElement.classList.add('added');
        btnElement.innerHTML = '✓ تمت الإضافة';
        setTimeout(() => {
            btnElement.classList.remove('added');
            btnElement.innerHTML = '🛒 أضف';
        }, 1500);
    }
}
        function checkout() {
            if (cart.length === 0) return;
            showToast('تم إرسال طلبك بنجاح! شكراً لك 🎉');
            cart = [];
            updateCartUI();
            setTimeout(() => toggleCart(), 1000);
        }


function addToCartById(productId) {
    addToCart(productId, null);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('تم حذف المنتج من السلة');
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('totalPrice');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // تأثير العداد
    cartCount.classList.add('bump');
    setTimeout(() => cartCount.classList.remove('bump'), 300);

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="empty-icon">🛒</div>
                <h4>السلة فارغة</h4>
                <p>أضف بعض المنتجات لتبدأ التسوق</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="item-price">${item.price.toLocaleString()} ر.س</div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `).join('');
        cartFooter.style.display = 'block';

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 500 ? 0 : 30;
        const total = subtotal + shipping;

        subtotalEl.textContent = subtotal.toLocaleString() + ' ر.س';
        shippingEl.textContent = shipping === 0 ? 'مجاني' : shipping + ' ر.س';
        totalEl.textContent = total.toLocaleString() + ' ر.س';
    }
}

function toggleCart() {
    document.getElementById('cartOverlay').classList.toggle('open');
    document.getElementById('cartSidebar').classList.toggle('open');
    document.body.style.overflow = 
        document.getElementById('cartSidebar').classList.contains('open') ? 'hidden' : '';
}

function checkout() {
    if (cart.length === 0) return;
    showToast('تم إرسال طلبك بنجاح! شكراً لك 🎉');
    cart = [];
    updateCartUI();
    setTimeout(() => toggleCart(), 1000);
}

// ===== المودال (نافذة المنتج) =====
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-info">
            <div class="product-brand">${product.brandName}</div>
            <h2>${product.name}</h2>
            <div class="rating">
                <div class="stars">${'⭐'.repeat(Math.floor(product.rating))}</div>
                <span>${product.rating} (${product.reviews} تقييم)</span>
            </div>
            <p class="description">${product.description}</p>
            <div class="modal-specs">
                <div class="modal-spec">
                    <div class="spec-label">التخزين</div>
                    <div class="spec-value">${product.specs[0]}</div>
                </div>
                <div class="modal-spec">
                    <div class="spec-label">الشاشة</div>
                    <div class="spec-value">${product.specs[1]}</div>
                </div>
                <div class="modal-spec">
                    <div class="spec-label">المعالج</div>
                    <div class="spec-value">${product.specs[2]}</div>
                </div>
                <div class="modal-spec">
                    <div class="spec-label">الكاميرا</div>
                    <div class="spec-value">${product.specs[3]}</div>
                </div>
            </div>
            <div class="modal-price">
                <span class="current">${product.price.toLocaleString()} ر.س</span>
                <span class="old">${product.oldPrice.toLocaleString()} ر.س</span>
            </div>
            <button class="modal-add-btn" onclick="addToCart(${product.id}); closeModal();">
                🛒 أضف إلى السلة
            </button>
        </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('productModal').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// ===== المفضلة =====
function toggleLike(btn) {
    btn.classList.toggle('liked');
    btn.innerHTML = btn.classList.contains('liked') ? '♥' : '♡';
    if (btn.classList.contains('liked')) {
        showToast('تمت الإضافة للمفضلة ♥');
    }
}

// ===== الإشعارات (Toast) =====
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast toast-success';
    toast.innerHTML = `
        <div class="toast-icon">✓</div>
        <div class="toast-message">${message}</div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== القائمة للموبايل =====
function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

// ===== تأثير النافبار عند السكرول =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== السكرول السلس للروابط =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('navLinks').classList.remove('open');
        }
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// ===== عداد التنازلي للعروض =====
function updateCountdown() {
    const now = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    endDate.setHours(23, 59, 59);

    const diff = endDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== نموذج التواصل =====
function handleContactForm(e) {
    e.preventDefault();
    showToast('تم إرسال رسالتك بنجاح! سنرد عليك قريباً 📨');
    e.target.reset();
}

// ===== اختصارات الكيبورد =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        if (document.getElementById('cartSidebar').classList.contains('open')) {
            toggleCart();
        }
    }
});

// ===== التشغيل عند تحميل الصفحة =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});