import { Product } from "./product";

let mockProducts: Product[] = [{
      "id": 1,
      "name": "KFA2 GeForce 3070",
      "price": 549,
      "currency": "€",
      "rating": 4,
      "description": "Tarjeta Gráfica KFA2 GeForce RTX 3070 LHR (1-Click OC Feature) 8GB GDDR6. Para la serie OC, contamos con un diseño innovador de ventiladores que marca una nueva tendencia en la refrigeración de GPU con dos ventiladores gemelos de 102 mm junto con nuestras exclusivas aspas de ventilador, llamadas WINGS.",
      "favorite": false,
      "similarProducts": [
        {
          "id": 2,
          "name": "Gigabyte GeForce 4070 Ti AERO",
          "price": 729,
          "currency": "$",
          "rating": 4.8,
          "description": "La tarjeta gráfica Gigabyte GeForce RTX 4070 Ti AERO OC V2 12GB GDDR6X DLSS3 ofrece un rendimiento excepcional para juegos con tecnología de punta. Equipada con NVIDIA DLSS 3 y arquitectura Ada Lovelace, ofrece un trazado de rayos completo para una experiencia visual impresionante. Sus Tensor Cores de 4ta generación proporcionan hasta 4 veces más rendimiento con DLSS 3.",
          "favorite": false
        },
        {
          "id": 4,
          "name": "MSI GeForce RTX 4090 3X",
          "price": 1798,
          "currency": "€",
          "rating": 5,
          "description": "Tarjeta Gráfica MSI GeForce RTX 4090 VENTUS 3X E OC 24GB GDDR6X DLSS3. Combina un diseño elegante y actualizado con la potencia de la GPU NVIDIA® GeForce RTX™ 4090. Con ventiladores TORX FAN 4.0 y control de flujo de aire, la VENTUS ofrece una refrigeración eficiente para un rendimiento sostenido.",
          "favorite": false,
        },
        {
          "id": 3,
          "name": "Sapphire Nitro+ RX 7900",
          "price": 619,
          "currency": "€",
          "rating": 4,
          "description": "Tarjeta Gráfica Sapphire Nitro+ AMD Radeon RX 7900 GRE Gaming OC 16GB GDDR6. La tarjeta gráfica Sapphire Nitro+ AMD Radeon RX 7900 GRE Gaming OC ofrece un BIOS OC para un rendimiento óptimo, con la capacidad de cambiar entre configuraciones primarias y secundarias. Su diseño de potencia digital y protección de fusibles garantizan un overclocking estable. Incorpora un PCB de cobre de alta TG y control inteligente de ventiladores para mantener temperaturas bajas.",
          "favorite": false,
        }
      ],
      "reviews": [
        {
          "image": "",
          "name": "Homer J. Simpson",
          "rating": 5,
          "opinion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
          "date": "Ayer por la tarde, 2023"
        },
        {
          "image": "",
          "name": "Marge Simpson",
          "rating": 4,
          "opinion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
          "date": "La semana pasada, 2023"
        }
      ]
    },
    {
      "id": 2,
      "name": "Gigabyte GeForce 4070 Ti AERO",
      "price": 729,
      "currency": "$",
      "rating": 4.8,
      "description": "La tarjeta gráfica Gigabyte GeForce RTX 4070 Ti AERO OC V2 12GB GDDR6X DLSS3 ofrece un rendimiento excepcional para juegos con tecnología de punta. Equipada con NVIDIA DLSS 3 y arquitectura Ada Lovelace, ofrece un trazado de rayos completo para una experiencia visual impresionante. Sus Tensor Cores de 4ta generación proporcionan hasta 4 veces más rendimiento con DLSS 3.",
      "favorite": false,
      "similarProducts": [
        {
          "id": 4,
          "name": "MSI GeForce RTX 4090 3X",
          "price": 1798,
          "currency": "€",
          "rating": 5,
          "description": "Tarjeta Gráfica MSI GeForce RTX 4090 VENTUS 3X E OC 24GB GDDR6X DLSS3. Combina un diseño elegante y actualizado con la potencia de la GPU NVIDIA® GeForce RTX™ 4090. Con ventiladores TORX FAN 4.0 y control de flujo de aire, la VENTUS ofrece una refrigeración eficiente para un rendimiento sostenido.",
          "favorite": false,
        },
        {
          "id": 3,
          "name": "Sapphire Nitro+ RX 7900",
          "price": 619,
          "currency": "€",
          "rating": 4,
          "description": "Tarjeta Gráfica Sapphire Nitro+ AMD Radeon RX 7900 GRE Gaming OC 16GB GDDR6. La tarjeta gráfica Sapphire Nitro+ AMD Radeon RX 7900 GRE Gaming OC ofrece un BIOS OC para un rendimiento óptimo, con la capacidad de cambiar entre configuraciones primarias y secundarias. Su diseño de potencia digital y protección de fusibles garantizan un overclocking estable. Incorpora un PCB de cobre de alta TG y control inteligente de ventiladores para mantener temperaturas bajas.",
          "favorite": false,
        },
        {
          "id": 1,
          "name": "KFA2 GeForce 3070",
          "price": 549,
          "currency": "€",
          "rating": 4,
          "description": "Tarjeta Gráfica KFA2 GeForce RTX 3070 LHR (1-Click OC Feature) 8GB GDDR6. Para la serie OC, contamos con un diseño innovador de ventiladores que marca una nueva tendencia en la refrigeración de GPU con dos ventiladores gemelos de 102 mm junto con nuestras exclusivas aspas de ventilador, llamadas WINGS.",
          "favorite": false,
        }
      ],
      "reviews": [
        {
          "image": "",
          "name": "P. Escobar",
          "rating": 5,
          "opinion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
          "date": "Ayer por la tarde, 2023"
        },
        {
          "image": "",
          "name": "M.A. Nestle",
          "rating": 2,
          "opinion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
          "date": "La semana pasada, 2023"
        }
      ]
    },
    {
      "id": 3,
      "name": "Sapphire Nitro+ RX 7900",
      "price": 619,
      "currency": "€",
      "rating": 4,
      "description": "Tarjeta Gráfica Sapphire Nitro+ AMD Radeon RX 7900 GRE Gaming OC 16GB GDDR6. La tarjeta gráfica Sapphire Nitro+ AMD Radeon RX 7900 GRE Gaming OC ofrece un BIOS OC para un rendimiento óptimo, con la capacidad de cambiar entre configuraciones primarias y secundarias. Su diseño de potencia digital y protección de fusibles garantizan un overclocking estable. Incorpora un PCB de cobre de alta TG y control inteligente de ventiladores para mantener temperaturas bajas.",
      "favorite": false,
      "similarProducts": [
        {
          "id": 4,
          "name": "MSI GeForce RTX 4090 3X",
          "price": 1798,
          "currency": "€",
          "rating": 5,
          "description": "Tarjeta Gráfica MSI GeForce RTX 4090 VENTUS 3X E OC 24GB GDDR6X DLSS3. Combina un diseño elegante y actualizado con la potencia de la GPU NVIDIA® GeForce RTX™ 4090. Con ventiladores TORX FAN 4.0 y control de flujo de aire, la VENTUS ofrece una refrigeración eficiente para un rendimiento sostenido.",
          "favorite": false,
        },
        {
          "id": 1,
          "name": "KFA2 GeForce 3070",
          "price": 549,
          "currency": "€",
          "rating": 4,
          "description": "Tarjeta Gráfica KFA2 GeForce RTX 3070 LHR (1-Click OC Feature) 8GB GDDR6. Para la serie OC, contamos con un diseño innovador de ventiladores que marca una nueva tendencia en la refrigeración de GPU con dos ventiladores gemelos de 102 mm junto con nuestras exclusivas aspas de ventilador, llamadas WINGS.",
          "favorite": false,
        }
      ],
      "reviews": [
        {
          "image": "",
          "name": "Stan Marsh",
          "rating": 1,
          "opinion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
          "date": "Ayer por la tarde, 2023"
        },
        {
          "image": "",
          "name": "Randy Marsh",
          "rating": 5,
          "opinion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
          "date": "primer día, 2023"
        }
      ]
    },
    {
      "id": 4,
      "name": "MSI GeForce RTX 4090 3X",
      "price": 1798,
      "currency": "€",
      "rating": 5,
      "description": "Tarjeta Gráfica MSI GeForce RTX 4090 VENTUS 3X E OC 24GB GDDR6X DLSS3. Combina un diseño elegante y actualizado con la potencia de la GPU NVIDIA® GeForce RTX™ 4090. Con ventiladores TORX FAN 4.0 y control de flujo de aire, la VENTUS ofrece una refrigeración eficiente para un rendimiento sostenido.",
      "favorite": false,
      "similarProducts": [],
      "reviews": null
}];

export default mockProducts;