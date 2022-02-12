const products = [{
    "id": 1,
    "product_name": "Elatine chilensis A. Gray",
    "price": "$7.26",
    "category": "beauty",
    "image_url": "http://dummyimage.com/101x100.png/dddddd/000000"
},
    {
        "id": 2,
        "product_name": "Carex tincta (Fernald) Fernald",
        "price": "$5.25",
        "category": "electronics",
        "image_url": "http://dummyimage.com/242x100.png/ff4444/ffffff"
    },
    {
        "id": 3,
        "product_name": "Quercus palmeri Engelm.",
        "price": "$1.52",
        "category": "electronics",
        "image_url": "http://dummyimage.com/173x100.png/dddddd/000000"
    },
    {
        "id": 4,
        "product_name": "Ivesia aperta (J.T. Howell) Munz var. canina Ertter",
        "price": "$9.97",
        "category": "beauty",
        "image_url": "http://dummyimage.com/130x100.png/ff4444/ffffff"
    },
    {
        "id": 5,
        "product_name": "Collinsia sparsiflora Fisch. & C.A. Mey. var. sparsiflora",
        "price": "$2.58",
        "category": "books",
        "image_url": "http://dummyimage.com/177x100.png/ff4444/ffffff"
    },
    {
        "id": 6,
        "product_name": "Abronia villosa S. Watson",
        "price": "$6.87",
        "category": "beauty",
        "image_url": "http://dummyimage.com/158x100.png/5fa2dd/ffffff"
    },
    {
        "id": 7,
        "product_name": "Agave sisalana Perrine",
        "price": "$1.81",
        "category": "electronics",
        "image_url": "http://dummyimage.com/138x100.png/ff4444/ffffff"
    },
    {
        "id": 8,
        "product_name": "Caloplaca approximata (Lynge) H. Magn.",
        "price": "$5.66",
        "category": "beauty",
        "image_url": "http://dummyimage.com/186x100.png/dddddd/000000"
    },
    {
        "id": 9,
        "product_name": "Cavernularia Degel.",
        "price": "$1.96",
        "category": "beauty",
        "image_url": "http://dummyimage.com/115x100.png/dddddd/000000"
    },
    {
        "id": 10,
        "product_name": "Enchylaena R. Br.",
        "price": "$0.74",
        "category": "electronics",
        "image_url": "http://dummyimage.com/238x100.png/cc0000/ffffff"
    },
    {
        "id": 11,
        "product_name": "Elaphoglossum serpens Maxon & Morton ex Maxon",
        "price": "$1.42",
        "category": "books",
        "image_url": "http://dummyimage.com/142x100.png/5fa2dd/ffffff"
    },
    {
        "id": 12,
        "product_name": "Hyophila involuta (Hook.) A. Jaeger",
        "price": "$8.02",
        "category": "electronics",
        "image_url": "http://dummyimage.com/164x100.png/cc0000/ffffff"
    },
    {
        "id": 13,
        "product_name": "Liatris scariosa (L.) Willd. var. scariosa",
        "price": "$9.65",
        "category": "beauty",
        "image_url": "http://dummyimage.com/214x100.png/ff4444/ffffff"
    },
    {
        "id": 14,
        "product_name": "Hemerocallis lilioasphodelus L.",
        "price": "$7.12",
        "category": "beauty",
        "image_url": "http://dummyimage.com/157x100.png/cc0000/ffffff"
    },
    {
        "id": 15,
        "product_name": "Layia leucopappa D.D. Keck",
        "price": "$8.01",
        "category": "electronics",
        "image_url": "http://dummyimage.com/169x100.png/cc0000/ffffff"
    },
    {
        "id": 16,
        "product_name": "Rhynchospora rugosa (Vahl) Gale ssp. rugosa",
        "price": "$0.08",
        "category": "beauty",
        "image_url": "http://dummyimage.com/137x100.png/dddddd/000000"
    },
    {
        "id": 17,
        "product_name": "Liparis elata Lindl.",
        "price": "$7.98",
        "category": "books",
        "image_url": "http://dummyimage.com/216x100.png/ff4444/ffffff"
    },
    {
        "id": 18,
        "product_name": "Ipomopsis longiflora (Torr.) V.E. Grant",
        "price": "$7.00",
        "category": "beauty",
        "image_url": "http://dummyimage.com/108x100.png/5fa2dd/ffffff"
    },
    {
        "id": 19,
        "product_name": "Schlegelia brachyantha Griseb.",
        "price": "$6.12",
        "category": "books",
        "image_url": "http://dummyimage.com/103x100.png/dddddd/000000"
    },
    {
        "id": 20,
        "product_name": "Persea borbonia (L.) Spreng.",
        "price": "$6.85",
        "category": "electronics",
        "image_url": "http://dummyimage.com/159x100.png/ff4444/ffffff"
    }];

export default {
    get() {
        return Promise.resolve(products);
    },
    getById(id) {
        const product = products.find(p => `${p.id}` === id);

        if (product) {
            return Promise.resolve(product);
        } else {
            return Promise.reject();
        }
    }
}
