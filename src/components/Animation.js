// import React, { useState } from 'react'
// import axios from 'axios';

// function Animation() {
//     const [animation, setAnimation] = useState([])
//     const [animation1, setAnimation1] = useState([])
//     const [animation2, setAnimation2] = useState([])
//     const [animation3, setAnimation3] = useState([])
//     const [animation4, setAnimation4] = useState([])
//     const [animation5, setAnimation5] = useState([])

//     var config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://seeko.film/api/v1/ghost/get/movies/sort?trending=1&genre=animation&free=1&country=0&persian=0&query=&affiliate=1&imdb=&page=1',
//         headers: {}
//     };
//     var config1 = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://seeko.film/api/v1/ghost/get/movies/sort?trending=1&genre=animation&free=1&country=0&persian=0&query=&affiliate=1&imdb=&page=2',
//         headers: {}
//     };
//     var config2 = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://seeko.film/api/v1/ghost/get/movies/sort?trending=1&genre=animation&free=1&country=0&persian=0&query=&affiliate=1&imdb=&page=3',
//         headers: {}
//     };
//     var config3 = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://seeko.film/api/v1/ghost/get/movies/sort?trending=1&genre=animation&free=1&country=0&persian=0&query=&affiliate=1&imdb=&page=4',
//         headers: {}
//     };
//     var config4 = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://seeko.film/api/v1/ghost/get/movies/sort?trending=1&genre=animation&free=1&country=0&persian=0&query=&affiliate=1&imdb=&page=5',
//         headers: {}
//     };
//     var config5 = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://seeko.film/api/v1/ghost/get/movies/sort?trending=1&genre=animation&free=1&country=0&persian=0&query=&affiliate=1&imdb=&page=6',
//         headers: {}
//     };


//       setInterval(() => {
//         axios(config)
//             .then(function (response) {
//                 console.log('1', response.data.data.movies)
//                 setAnimation(response.data.data.movies)
//             })
//             .catch(function (error) {
//                 console.log('err', error);
//             })
//     }, 100);

//     axios(config1)
//         .then(function (response) {
//             console.log('2', response.data.data.movies);
//             setAnimation1(response.data.data.movies)
//         })
//         .catch(function (error) {
//             console.log('a', error);
//         })
//     axios(config2)
//         .then(function (response) {
//             setAnimation2(response.data.data.movies)
//         })
//         .catch(function (error) {
//             console.log('a', error);
//         })
//     axios(config3)
//         .then(function (response) {
//             setAnimation3(response.data.data.movies)
//         })
//         .catch(function (error) {
//             console.log('a', error);
//         })
//     axios(config4)
//         .then(function (response) {
//             setAnimation4(response.data.data.movies)
//         })
//         .catch(function (error) {
//             console.log('a', error);
//         })
//     axios(config5)
//         .then(function (response) {
//             setAnimation5(response.data.data.movies)
//         })
//         .catch(function (error) {
//             console.log('a', error);
//         })

//     return (
//         <>
//             <div dir="rtl" className="grid grid-cols-4 px-4 gap-4 justify-center mr-5 mt-24">
//                 {animation.map((x) => {
//                     return (
//                         <section className="w-52 h-72">
//                             <a href={`/animation/${x.id}`}>
//                                 <div key={x.id} className="w-52 h-64 mt-2">
//                                     <img className="rounded-lg object-cover object-center" alt={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=207&h=257&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
//                                     <span className="text-white text-sm truncate">{x.name_fa}</span>
//                                 </div>
//                             </a>
//                         </section>
//                     )
//                 })}
//                 {animation1.map((x) => {
//                     return (
//                         <section className="w-52 h-72">
//                             <a href={`/animation/${x.id}`}>
//                                 <div key={x.id} className="w-52 h-64 mt-2">
//                                     <img className="rounded-lg object-cover object-center" alt={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=207&h=257&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
//                                     <span className="text-white text-sm truncate">{x.name_fa}</span>
//                                 </div>
//                             </a>
//                         </section>
//                     )
//                 })}
//                 {animation2.map((x) => {
//                     return (
//                         <section className="w-52 h-72">
//                             <a href={`/animation/${x.id}`}>
//                                 <div key={x.id} className="w-52 h-64 mt-2">
//                                     <img className="rounded-lg object-cover object-center" alt={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=207&h=257&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
//                                     <span className="text-white text-sm truncate">{x.name_fa}</span>
//                                 </div>
//                             </a>
//                         </section>
//                     )
//                 })}
//                 {animation3.map((x) => {
//                     return (
//                         <section className="w-52 h-72">
//                             <a href={`/animation/${x.id}`}>
//                                 <div key={x.id} className="w-52 h-64 mt-2">
//                                     <img className="rounded-lg object-cover object-center" alt={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=207&h=257&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
//                                     <span className="text-white text-sm truncate">{x.name_fa}</span>
//                                 </div>
//                             </a>
//                         </section>
//                     )
//                 })}
//                 {animation4.map((x) => {
//                     return (
//                         <section className="w-52 h-72">
//                             <a href={`/animation/${x.id}`}>

//                                 <div key={x.id} className="w-52 h-64 mt-2">
//                                     <img className="rounded-lg object-cover object-center" alt={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=207&h=257&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
//                                     <span className="text-white text-sm truncate">{x.name_fa}</span>
//                                 </div>
//                             </a>
//                         </section>
//                     )
//                 })}
//                 {animation5.map((x) => {
//                     return (
//                         <section className="w-52 h-72">
//                             <a href={`/animation/${x.id}`}>
//                                 <div key={x.id} className="w-52 h-64 mt-2">
//                                     <img className="rounded-lg object-cover object-center" alt={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=207&h=257&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
//                                     <span className="text-white text-sm truncate">{x.name_fa}</span>
//                                 </div>
//                             </a>
//                         </section>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default Animation