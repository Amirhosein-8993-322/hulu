import React from 'react'
import data from "../json/data.json";
import { Fade, Slide } from "react-awesome-reveal";
import { FaImdb } from "react-icons/fa";
const animation = data.animation
const action = data.action
const comedy = data.comedy
const horror = data.horror
const family = data.family
const iranian = data.iranian
const foreign = data.foreign

const Home = () => {
    return (
        <>
            <h1 dir="rtl" className="text-white font-bold text-2xl sm:mr-10 mr-6 sm:mt-20 mt-28">انیمیشن</h1>
            <div className="w-full flex items-center justify-center">
                <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 px-3 mt-4">
                    {animation.map((x) => {
                        return (
                            <section className="w-52 h-72">
                                <a href={`/animation/${x.id}`}>
                                    <div key={x.id} className="w-52 h-64 mt-2 relative group">
                                        <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                                        <span className="text-white text-sm line-clamp-1 mt-1 ">{x.name_fa}</span>
                                        <div className="absolute left-0 top-[-10%] opacity-0 rounded-lg group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                            <div className="flex items-center w-full justify-between p-2">
                                                <Slide cascade>
                                                    <h1 className="text-black bg-yellow-400 px-5 rounded-lg py-3 text-sm w-0 h-0 flex items-center justify-center">{x.year}</h1>
                                                    <Fade cascade damping={0.05}>
                                                        <div className="flex items-center text-sm">
                                                            <p className="text-white ml-1">{x.rate}</p>
                                                            <FaImdb size={30} color='yellow' />
                                                        </div>
                                                    </Fade>
                                                </Slide>
                                            </div>
                                            <div dir='ltr'>
                                            <p className="text-white text-sm mt-3 px-4 line-clamp-1">{x.name}</p>
                                            <p className="text-white bg-emerald-400 w-12 ml-3 rounded-full h-5 text-sm mt-2 flex items-center justify-center line-clamp-1">{x.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </section>
                        )
                    })}
                </div>
            </div>

            <h1 dir="rtl" className="text-white font-bold text-2xl sm:mr-10 mr-6 sm:mt-10 mt-1">اکشن</h1>
            <div className="w-full flex items-center justify-center">
                <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 px-3 mt-4">
                    {action.map((x) => {
                        return (
                            <section className="w-52 h-72">
                                <a href={`/action/${x.id}`}>
                                <div key={x.id} className="w-52 h-64 mt-2 relative group">
                                        <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                                        <span className="text-white text-sm line-clamp-1 mt-1 ">{x.name_fa}</span>
                                        <div className="absolute left-0 top-[-10%] opacity-0 rounded-lg group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                            <div className="flex items-center w-full justify-between p-2">
                                                <Slide cascade>
                                                    <h1 className="text-black bg-yellow-400 px-5 rounded-lg py-3 text-sm w-0 h-0 flex items-center justify-center">{x.year}</h1>
                                                    <Fade cascade damping={0.05}>
                                                        <div className="flex items-center text-sm">
                                                            <p className="text-white ml-1">{x.rate}</p>
                                                            <FaImdb size={30} color='yellow' />
                                                        </div>
                                                    </Fade>
                                                </Slide>
                                            </div>
                                            <div dir='ltr'>
                                            <p className="text-white text-sm mt-3 px-4 line-clamp-1">{x.name}</p>
                                            <p className="text-white bg-emerald-400 w-12 ml-3 rounded-full h-5 text-sm mt-2 flex items-center justify-center line-clamp-1">{x.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </section>
                        )
                    })}
                </div>
            </div>

            <h1 dir="rtl" className="text-white font-bold text-2xl sm:mr-10 mr-6 sm:mt-10 mt-1">کمدی</h1>
            <div className="w-full flex items-center justify-center">
                <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 px-3 mt-4">
                    {comedy.map((x) => {
                        return (
                            <section className="w-52 h-72">
                                <a href={`/comedy/${x.id}`}>
                                     <div key={x.id} className="w-52 h-64 mt-2 relative group">
                                        <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                                        <span className="text-white text-sm line-clamp-1 mt-1 ">{x.name_fa}</span>
                                        <div className="absolute left-0 top-[-10%] opacity-0 rounded-lg group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                            <div className="flex items-center w-full justify-between p-2">
                                                <Slide cascade>
                                                    <h1 className="text-black bg-yellow-400 px-5 rounded-lg py-3 text-sm w-0 h-0 flex items-center justify-center">{x.year}</h1>
                                                    <Fade cascade damping={0.05}>
                                                        <div className="flex items-center text-sm">
                                                            <p className="text-white ml-1">{x.rate}</p>
                                                            <FaImdb size={30} color='yellow' />
                                                        </div>
                                                    </Fade>
                                                </Slide>
                                            </div>
                                            <div dir='ltr'>
                                            <p className="text-white text-sm mt-3 px-4 line-clamp-1">{x.name}</p>
                                            <p className="text-white bg-emerald-400 w-12 ml-3 rounded-full h-5 text-sm mt-2 flex items-center justify-center line-clamp-1">{x.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </section>
                        )
                    })}
                </div>
            </div>

            <h1 dir="rtl" className="text-white font-bold text-2xl sm:mr-10 mr-6 sm:mt-10 mt-1">ترسناک</h1>
            <div className="w-full flex items-center justify-center">
                <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 px-3 mt-4">
                    {horror.map((x) => {
                        return (
                            <section className="w-52 h-72">
                                <a href={`/horror/${x.id}`}>
                                <div key={x.id} className="w-52 h-64 mt-2 relative group">
                                        <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                                        <span className="text-white text-sm line-clamp-1 mt-1 ">{x.name_fa}</span>
                                        <div className="absolute left-0 top-[-10%] opacity-0 rounded-lg group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                            <div className="flex items-center w-full justify-between p-2">
                                                <Slide cascade>
                                                    <h1 className="text-black bg-yellow-400 px-5 rounded-lg py-3 text-sm w-0 h-0 flex items-center justify-center">{x.year}</h1>
                                                    <Fade cascade damping={0.05}>
                                                        <div className="flex items-center text-sm">
                                                            <p className="text-white ml-1">{x.rate}</p>
                                                            <FaImdb size={30} color='yellow' />
                                                        </div>
                                                    </Fade>
                                                </Slide>
                                            </div>
                                            <div dir='ltr'>
                                            <p className="text-white text-sm mt-3 px-4 line-clamp-1">{x.name}</p>
                                            <p className="text-white bg-emerald-400 w-12 ml-3 rounded-full h-5 text-sm mt-2 flex items-center justify-center line-clamp-1">{x.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </section>
                        )
                    })}
                </div>
            </div>

            <h1 dir="rtl" className="text-white font-bold text-2xl sm:mr-10 mr-6 sm:mt-10 mt-1">خانوادگی</h1>
            <div className="w-full flex items-center justify-center">
                <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 px-3 mt-4">
                    {family.map((x) => {
                        return (
                            <section className="w-52 h-72">
                                <a href={`/family/${x.id}`}>
                                <div key={x.id} className="w-52 h-64 mt-2 relative group">
                                        <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                                        <span className="text-white text-sm line-clamp-1 mt-1 ">{x.name_fa}</span>
                                        <div className="absolute left-0 top-[-10%] opacity-0 rounded-lg group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                            <div className="flex items-center w-full justify-between p-2">
                                                <Slide cascade>
                                                    <h1 className="text-black bg-yellow-400 px-5 rounded-lg py-3 text-sm w-0 h-0 flex items-center justify-center">{x.year}</h1>
                                                    <Fade cascade damping={0.05}>
                                                        <div className="flex items-center text-sm">
                                                            <p className="text-white ml-1">{x.rate}</p>
                                                            <FaImdb size={30} color='yellow' />
                                                        </div>
                                                    </Fade>
                                                </Slide>
                                            </div>
                                            <div dir='ltr'>
                                            <p className="text-white text-sm mt-3 px-4 line-clamp-1">{x.name}</p>
                                            <p className="text-white bg-emerald-400 w-12 ml-3 rounded-full h-5 text-sm mt-2 flex items-center justify-center line-clamp-1">{x.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </section>
                        )
                    })}
                </div>
            </div>

            <h1 dir="rtl" className="text-white font-bold text-2xl sm:mr-10 mr-6 sm:mt-10 mt-1">ایرانی</h1>
            <div className="w-full flex items-center justify-center">
                <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 px-3 mt-4">
                    {iranian.map((x) => {
                        return (
                            <section className="w-52 h-72">
                                <a href={`/iranian/${x.id}`}>
                                <div key={x.id} className="w-52 h-64 mt-2 relative group">
                                        <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                                        <span className="text-white text-sm line-clamp-1 mt-1 ">{x.name_fa}</span>
                                        <div className="absolute left-0 top-[-10%] opacity-0 rounded-lg group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                            <div className="flex items-center w-full justify-between p-2">
                                                <Slide cascade>
                                                    <h1 className="text-black bg-yellow-400 px-5 rounded-lg py-3 text-sm w-0 h-0 flex items-center justify-center">{x.year}</h1>
                                                    <Fade cascade damping={0.05}>
                                                        <div className="flex items-center text-sm">
                                                            <p className="text-white ml-1">{x.rate}</p>
                                                            <FaImdb size={30} color='yellow' />
                                                        </div>
                                                    </Fade>
                                                </Slide>
                                            </div>
                                            <div dir='ltr'>
                                            <p className="text-white text-sm mt-3 px-4 line-clamp-1">{x.name}</p>
                                            <p className="text-white bg-emerald-400 w-12 ml-3 rounded-full h-5 text-sm mt-2 flex items-center justify-center line-clamp-1">{x.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </section>
                        )
                    })}
                </div>
            </div>

            <h1 dir="rtl" className="text-white font-bold text-2xl sm:mr-10 mr-6 sm:mt-10 mt-1">خارجی</h1>
            <div className="w-full flex items-center justify-center">
                <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 px-3 mt-4">
                    {foreign.map((x) => {
                        return (
                            <section className="w-52 h-72">
                                <a href={`/foreign/${x.id}`}>
                                <div key={x.id} className="w-52 h-64 mt-2 relative group">
                                        <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                                        <span className="text-white text-sm line-clamp-1 mt-1 ">{x.name_fa}</span>
                                        <div className="absolute left-0 top-[-10%] opacity-0 rounded-lg group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                            <div className="flex items-center w-full justify-between p-2">
                                                <Slide cascade>
                                                    <h1 className="text-black bg-yellow-400 px-5 rounded-lg py-3 text-sm w-0 h-0 flex items-center justify-center">{x.year}</h1>
                                                    <Fade cascade damping={0.05}>
                                                        <div className="flex items-center text-sm">
                                                            <p className="text-white ml-1">{x.rate}</p>
                                                            <FaImdb size={30} color='yellow' />
                                                        </div>
                                                    </Fade>
                                                </Slide>
                                            </div>
                                            <div dir='ltr'>
                                            <p className="text-white text-sm mt-3 px-4 line-clamp-1">{x.name}</p>
                                            <p className="text-white bg-emerald-400 w-12 ml-3 rounded-full h-5 text-sm mt-2 flex items-center justify-center line-clamp-1">{x.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </section>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home