
const initialState = [{
	id: 1,
	productTitle: 'Product Title',
	images: ["w1.jpg"],
	price: "--",
	offerPrice:  "",
	shippingCost: "0",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 2,
	productTitle: 'Product Title',
	images: ["w2.jpg"],
	price: "--",
	offerPrice:  "",
	shippingCost: "0",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 3,
	productTitle: 'Product Title',
	images: ["w3.jpg"],
	price: "--",
	offerPrice:  "",
	shippingCost: "0",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 4,
	productTitle: 'Product Title',
	images: ["w4.jpg"],
	price: "--",
	offerPrice:  "",
	shippingCost: "0",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 5,
	productTitle: 'Product Title',
	images: ["w5.jpg"],
	price: "--",
	offerPrice:  "",
	shippingCost: "0",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id:6,
	productTitle: 'Product Title',
	images: ["w6.jpg"],
	price: "--",
	offerPrice:  "",
	shippingCost: "0",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 7,
	productTitle: 'Product Title',
	images: ["w7.jpg"],
	price: "--",
	offerPrice:  "",
	shippingCost: "0",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 8,
	productTitle: 'Product Title',
	images: ["w8.jpg"],
	price: "--",
	offerPrice:  "",
	shippingCost: "0",
	inventory: "",
	description: "",
	size: [],
	color: [],
},]



export function products(state=initialState, action) {
	switch(action.type) {
		case "UPDATE_PRODUCT":
			return state.map(elm => {
				if (elm.id === action.payload.id) {
					// console.log(action.payload)
					return {
						...elm,
						...action.payload
					}
				}
				return elm
			})

		default:
		return state;
	}
}
