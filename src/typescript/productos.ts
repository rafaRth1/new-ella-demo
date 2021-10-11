interface TotalItems {
	products: Productos[];
}

interface Productos {
	name: string;
	price: number;
	img: string;
	stock: number;
}

const productos: TotalItems[] = [
	{
		products: [
			{
				name: "Giother Laptop Nodels Coped Permi Unde Ona",
				price: 49,
				img: "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f.jpg?v=1616831599",
				stock: 15,
			},
			{
				name: "Giother Laptop Nodels Coped Permi Unde Ona",
				price: 49,
				img: "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f.jpg?v=1616831599",
				stock: 15,
			},
			{
				name: "Giother Laptop Nodels Coped Permi Unde Ona",
				price: 49,
				img: "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f.jpg?v=1616831599",
				stock: 15,
			},
			{
				name: "Giother Laptop Nodels Coped Permi Unde Ona",
				price: 49,
				img: "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f.jpg?v=1616831599",
				stock: 15,
			},
		],
	},
];

export default productos;
