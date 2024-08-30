import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Product.css'

export default function Product() {
    const [products, setProducts] = useState([
        { id: 1, Name: "Hot Coffee", price: 70, img: "https://shantikitchens.com/wp-content/uploads/2024/03/Coffee.jpg", para:"Hot coffee is a beverage made from roasted coffee beans that have been ground up and mixed with hot water." },
        { id: 2, Name: "Espresso", price: 170, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjyHlkViXf1t9FlpAnmlozT9DZSvPbFi-Lg&s", para:"Espresso is a concentrated form of coffee produced by forcing hot water under high pressure through finely-ground coffee beans. Originating in Italy, espresso has become one of the most popular coffee-brewing methods worldwide." },
        { id: 3, Name: "Black Coffee", price: 150, img: "https://cdn.shopify.com/s/files/1/0366/8780/6508/files/black-coffee.jpg?v=1681127906" , para:"Black coffee is coffee that's prepared without additives or modifications, like milk, cream, or sugar. It's usually made by brewing coffee in hot water and enjoyed plain. Black coffee is sometimes called plain coffee. It has a strong, bold flavor and is a good way to evaluate the quality of the coffee beans."},
        { id: 4, Name: "Cappuccino", price: 240, img: "https://www.thespruceeats.com/thmb/oUxhx54zsjVWfPlrgedJU0MZ-y0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-cappuccinos-766116-hero-01-a754d567739b4ee0b209305138ecb996.jpg", para:"Cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cocoa powder or cinnamon." },
        { id: 5, Name: "Americano", price: 250, img: "https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg", para:"It is a type of coffee drink prepared by diluting an espresso shot with hot water at a 1:3 to 1:4 ratio, resulting in a drink that retains the complex flavors of espresso, but in a lighter way." },
        { id: 6, Name: "Mocha", price: 260, img: "https://www.mommyhatescooking.com/wp-content/uploads/2023/10/mocha-4-scaled.jpg", para:"A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug. Other commonly used spellings are mochaccino and also mochachino." },
        { id: 7, Name: "Iced Coffee", price: 150, img: "https://www.thedinnerbite.com/wp-content/uploads/2020/06/Iced-instant-coffee-recipe-img-6-1-of-1-1.jpg", para:"Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it over ice or in cold milk or by brewing the coffee cold. In hot brewing, sweeteners and flavoring may be added before cooling, as they dissolve faster." },
        { id: 8, Name: "Tea", price: 50, img: "https://cdn2.foodviva.com/static-content/food-images/tea-recipes/milk-tea-recipe/milk-tea-recipe.jpg", para:"Masala chai is a popular beverage throughout South Asia, originating in India. It is made by brewing black tea in milk and water, and then by sweetening with sugar. Adding aromatic herbs and spices creates masala chai, although chai is often prepared unspiced." },
        { id: 9, Name: "Lemon Iced Tea", price: 90, img: "https://shwetainthekitchen.com/wp-content/uploads/2023/07/lemon-iced-tea.jpg", para:"Lemon iced tea is a refreshing drink that's made with black tea, lemon juice, and sometimes lemon peels. The lemon's citrusy flavor and natural acidity complements the tea's coolness and adds a zing that balances out any sweetness. Lemon iced tea is a great drink for hot summer days and can pair well with many dishes." },
        { id: 10, Name: "Green Tea", price: 60, img: "https://www.india.com/wp-content/uploads/2022/06/Green-Tea.jpg", para:"Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas. Green tea originated in China, and since then its production and manufacture has spread to other countries in East Asia." },
        { id: 11, Name: "Herbal Tea", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KahhBr4-8sd1KO7IldTYpqFk0gEYX8rQEQ&s", para:"Herbal teas, also known as herbal infusions and less commonly called tisanes, are beverages made from the infusion or decoction of herbs, spices, or other plant material in hot water; they do not usually contain any true tea. Often herb tea, or the plain term tea, is used as a reference to all sorts of herbal teas." },
        { id: 12, Name: "Black Tea", price: 50, img: "https://images.healthshots.com/healthshots/en/uploads/2023/10/06090411/black-tea.jpg", para:"Black tea is a type of tea that is more oxidized than oolong, yellow, white, and green teas. Black tea is generally stronger in flavour than other teas. All five types are made from leaves of the shrub Camellia sinensis, though Camellia taliensis is also, rarely, used." },
        { id: 13, Name: "Tiramisu", price: 350, img: "https://loperaindia.com/wp-content/uploads/2019/07/Tiramisu-Individual-.jpg", para:"Tiramisu is an Italian dessert made of ladyfinger pastries dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone and flavoured with cocoa. The recipe has been adapted into many varieties of cakes and other desserts." },
        { id: 14, Name: "Croissant", price: 270, img: "https://en.julskitchen.com/wp-content/uploads/sites/2/2013/05/Italian-croissants-15-500x500.jpg", para:"A croissant is a French pastry made from puff pastry in a crescent shape. It is a buttery, flaky, viennoiserie pastry inspired by the shape of the Austrian kipferl, but using the French yeast-leavened laminated dough. Croissants are named for their historical crescent shape." },
        { id: 15, Name: "Apple Pie", price: 150, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGvV_1zfnQCiMnjXk7by4zrlZKJQw1yvBIg&s", para:"An apple pie is a pie in which the principal filling is apples. Apple pie is often served with whipped cream, ice cream, custard or cheddar cheese. It is generally double-crusted, with pastry both above and below the filling; the upper crust may be solid or latticed." },
        { id: 16, Name: "Chocolate Cake", price: 170, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAY8Rm0T8X1Gsf9mdAHajQ-cx_DVDKrFtTA&s", para:"Chocolate cake or chocolate gâteau is a cake flavored with melted chocolate, cocoa powder, or both. It can also have other ingredients such as fudge, vanilla creme, and other sweeteners." },
    ]);

    const navigate = useNavigate()

    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addToCart = (Product) => {
        const updatedCart = [...cart, Product];
        setCart(updatedCart);
        navigate('/Cart', { state: { cart: updatedCart } })
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="title">
                <h1 className="title-name">OUR PRODUCTS</h1>
                <div className="search-container">
                    <p><input
                        type="text"
                        placeholder="🔍 Search here"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    /></p>
                </div>
                <div className="productpage">
                    <div className="product-list">
                        {filteredProducts.map((Product) => (
                            <div key={Product.id} className="product-item">
                                <img src={Product.img} alt={Product.Name} />
                        
                                <h2>
                                <Link
                                to={`/product/${Product.id}`}
                                state={{
                                    name: Product.Name,
                                    price: Product.price,
                                    img: Product.img,
                                    para: Product.para
                                }}
                                className="topic">
                                {Product.Name}
                            </Link></h2>
                                <h4>Rs-{Product.price}</h4>
                                <button onClick={() => addToCart(Product)} className="cart-btn">🛒 Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
