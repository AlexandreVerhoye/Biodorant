import Link from 'next/link'

export const Header = () => {
    return (
        <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
            <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-200">
                                NOUVEAU
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Alpha ULTIM <span className={"bg-black font-extrabold text-white px-2 rounded"}>LIMITED EDITION</span>
                            <br className="hidden md:block" />

                            <span className="mt-2 inline-block text-green-400">
                                24h de fraicheur, a l'épreuve de tout les hommes.
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Le Biodorant <span className={"font-bold"}>ultime</span> pour les hommes.
                            <br className="hidden md:block" />
                        </p>
                        <ul className="mb-4 mt-4 -ml-1 space-y-2">
                            <li className="flex items-start">
              <span className="mr-1">
                <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                 <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
                </svg>
              </span>
                                24h de fraicheur
                            </li>
                            <li className="flex items-start">
              <span className="mr-1">
                <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                 <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
                </svg>
              </span>
                                Issus du commerce équitable
                            </li>
                            <li className="flex items-start">
              <span className="mr-1">
                <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                 <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
                </svg>
              </span>
                                Fabriqué en France
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link href="/alpha-ultim">
                        <a
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            <svg className={"fill-current text-black w-6 h-6 mx-2"} viewBox="0 0 24 24"><path d="M19.5 3c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.5 7v-2h-2v-1h2v-2l3 2.5-3 2.5zm-3.5 8c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5zm-15.5-15l.743 2h1.929l3.474 12h13.239l1.307-3.114c-.387.072-.785.114-1.192.114-3.59 0-6.5-2.91-6.5-6.5 0-.517.067-1.018.181-1.5h-5.993l2.542 9h-2.103l-3.431-12h-4.196zm9 16.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5z"/></svg>
                            Acheter (-15%)
                        </a>
                        </Link>
                        <Link href="/alpha-ultim">
                        <a
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            En savoir plus
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
                <img
                    src="/accueil-alpha.jpg"
                    className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>
        </div>
    );
};