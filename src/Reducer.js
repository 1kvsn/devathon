
const initialState = [{
	id: 1,
	productTitle: 'first-prod',
	images: ["w1.jpg"],
	price: "400",
	offerPrice:  "",
	shippingCost: "",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 2,
	productTitle: 'second-prod',
	images: ["w2.jpg"],
	price: "500",
	offerPrice:  "",
	shippingCost: "",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 3,
	productTitle: 'third-prod',
	images: ["w3.jpg"],
	price: "600",
	offerPrice:  "",
	shippingCost: "",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 4,
	productTitle: 'fourth-prod',
	images: ["w4.jpg"],
	price: "700",
	offerPrice:  "",
	shippingCost: "",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 5,
	productTitle: 'fifth-prod',
	images: ["w5.jpg"],
	price: "800",
	offerPrice:  "",
	shippingCost: "",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id:6,
	productTitle: 'sixth-prod',
	images: ["w6.jpg"],
	price: "900",
	offerPrice:  "",
	shippingCost: "",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 7,
	productTitle: 'seventh-prod',
	images: ["w7.jpg"],
	price: "1000",
	offerPrice:  "",
	shippingCost: "",
	inventory: "",
	description: "",
	size: [],
	color: [],
},
{
	id: 8,
	productTitle: 'eighth-prod',
	images: ["w8.jpg"],
	price: "1100",
	offerPrice:  "",
	shippingCost: "",
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
