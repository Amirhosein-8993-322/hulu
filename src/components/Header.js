import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mobile, setMobile] = useState(false)
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 250) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const mobiles = () => {
        setMobile((mobile) => !mobile)
    }
    return (
        <>
            <nav dir='rtl' className="bg-zinc-900 fixed top-0 right-0 w-full z-50">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button onClick={mobiles} type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>
                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <h1 dir='ltr' className="text-3xl flex items-center font-bold text-emerald-400">hulu</h1>
                            </div>
                            <div class="hidden sm:mr-6 sm:block">
                                <div class="flex space-x-4">
                                    <a href="/" class="rounded-md px-3 ml-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white" aria-current="page">خانه</a>
                                    <a href="/animation" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white">انیمیشن</a>
                                    <a href="/iranian" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white">ایرانی</a>
                                    <a href="/foreign" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white">خارجی</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <a href='/search'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 text-white cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {mobile &&
                    <div class="sm:hidden" id="mobile-menu">
                        <div class="space-y-1 px-2 pb-3 pt-2">
                            <a href="/" class="block rounded-md px-3 ml-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white" aria-current="page">خانه</a>
                            <a href="/animation" class="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white">انیمیشن</a>
                            <a href="/iranian" class="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white">ایرانی</a>
                            <a href="/foreign" class="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white">خارجی</a>
                        </div>
                    </div>
                }
            </nav>
            {isVisible && (
                <button onClick={ScrollToTop} className="fixed bg-white sm:px-3 z-50 sm:py-3 px-4 py-4 rounded-full bottom-5 left-5 border-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                </button>
            )}
        </>
    )
}

export default Header