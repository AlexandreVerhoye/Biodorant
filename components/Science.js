export const Science = () => {
    return (
        <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="/accueil-science.jpg"
                        alt=""
                    />
                </div>
                <div className="flex ml-8 flex-col justify-center">
                    <div className="max-w-xl mb-6 ">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Les autres deodorants donne le cancer, Biodorant respecte votre corps.
                            <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
              </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Après des années de recherche dans notre laboratoire Lyonnais, nos chercheurs ont trouvé la formules la plus respectueuse de votre corps et de l'environnement.
                        </p>
                    </div>
                    <div className="flex flex-col">
                            <div className={"px-4 py-3 bg-green-400 text-white font-bold w-full text-center rounded cursor-pointer"}>
                               Ne pas cliquer pour obtenir un echantillon <span className={"font-extrabold"}>gratuit</span>.
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
};