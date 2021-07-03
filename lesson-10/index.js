const data = [
	{
		name: 'Hotel Leopold',
		city: 'Saint Petersburg',
		country: 'Russia',
		imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
	},
	{
		name: 'Apartment Sunshine',
		city: 'Santa  Cruz de Tenerife',
		country: 'Spain',
		imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
	},
	{
		name: 'Villa Kunerad',
		city: 'Vysokie Tatry',
		country: 'Slowakia',
		imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
	},
	{
		name: 'Hostel Friendship',
		city: 'Berlin',
		country: 'Germany',
		imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
	},
	{
		name: 'Radisson Blu Hotel',
		city: 'Kyiv',
		country: 'Ukraine',
		imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
	},
	{
		name: 'Paradise Hotel',
		city: 'Guadalupe',
		country: 'Mexico',
		imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
	},
	{
		name: 'Hotel Grindewald',
		city: 'Interlaken',
		country: 'Switzerland',
		imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
	},
	{
		name: 'The Andaman Resort',
		city: 'Port Dickson',
		country: 'Malaysia',
		imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
	},
];

const ulEl = document.querySelector('ul.content_item_container');

const dataExtract = function (arrEl, domEl) {
	let img = document.createElement('img');
	let name = document.createElement('p');
	let location = document.createElement('p');

	 	img.className = 'content_image';
		img.src = arrEl.imageUrl;

		name.innerHTML = `${arrEl.name}`;
		name.classList.add('content_name_text');

		location.innerHTML = `${arrEl.city} ${arrEl.country}`;
		location.classList.add('content_location_text');

		domEl.prepend(img)
		img.after(name);
		name.after(location);
	return domEl;
}

const outputAllEl = function () {
	let i = 0;
	dataExtract(data[i], ulEl);
	const cloneEl = function () {

		const cloner = (x) => x.cloneNode();
		if (i < data.length) {
			i++;
			return ulEl.after(dataExtract(data[i], cloner(ulEl)));
		} else {
			i = 0;
		}
	}
	if (i < 4) {
		cloneEl();
		cloneEl();
		cloneEl();
	}
}

outputAllEl();
