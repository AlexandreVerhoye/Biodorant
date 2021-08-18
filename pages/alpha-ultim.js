import {GlobalLayout} from "../components/Layout";

export default function alphaUltim() {

    return(
    <GlobalLayout>
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
            <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 w-2/4">
                <div className="w-full pt-1 pb-5">
                    <div
                        className="bg-green-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                        <svg className={"w-7 h-7 fill-current text-white"} viewBox="0 0 24 24"><path d="M10.81 11.885h-1.098l.066-.739h1.069l-.037.739zm.613 1.099h1.14l-.007-.739h-1.111l-.022.739zm.085-2.971l-.021.739h1.054l-.007-.739h-1.026zm-1.894 2.971h1.14l.038-.739h-1.112l-.066.739zm1.291-2.971h-1.026l-.066.739h1.054l.038-.739zm6.308 0l.137.739h1.054l-.165-.739h-1.026zm-4.115 0l.023.739h1.054l-.051-.739h-1.026zm1.155 1.872l-.051-.739h-1.069l.022.739h1.098zm3.309-4.885h-7.406l-.204 2h8.058l-.448-2zm-6.107 4.885h1.097l-.007-.739h-1.069l-.021.739zm2.874 1.099l-.051-.739h-1.111l.023.739h1.139zm-5.888-2.971h-1.025l-.134.739h1.054l.105-.739zm10.215 1.872l-.165-.739h-1.069l.136.739h1.098zm-12.074-.739h-1.069l-.179.739h1.097l.151-.739zm.231-1.133h-1.026l-.179.739h1.054l.151-.739zm17.187 4.987v7h-24v-7h24zm-2 2h-20v3h20v-3zm-9 1h-2v1h2v-1zm-7.932-5.016h1.14l.15-.739h-1.111l-.179.739zm11.702-2.233l-.121-.739h-1.026l.093.739h1.054zm.185 1.134l-.121-.739h-1.069l.093.739h1.097zm1.946 1.099l-.165-.739h-2.833l.093.739h2.905zm-10.622-1.838h-1.069l-.134.739h1.098l.105-.739zm-1.402 1.838h1.139l.105-.739h-1.11l-.134.739zm-5.595.016l2.621-9h1.921c.112-.622.322-1.371.668-2h3.427c-.26.57-.499 1.259-.627 2h10.805l2.592 9h-2.221l-1.804-7h-9.42c.071.836.178 1.511-.107 2h-3.456c.292-.431.166-1.111.086-2h-.481l-1.739 7h-2.265zm5.101-6.631h2.298c-.157-1.076-.092-2.782.404-3.786h-2.249c-.553 1.006-.624 2.64-.453 3.786z"/></svg>
                    </div>
                </div>
                <div className="mb-10">
                    <h1 className="text-center font-bold text-xl uppercase">Acheter Alpha ULTIM (Limited Edition)</h1>
                </div>
                <div className="mb-3 flex -mx-2">
                    <div className="px-2">
                        <label htmlFor="type1" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1"
                                   checked/>
                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                     className="h-8 ml-3"/>
                        </label>
                    </div>
                    <div className="px-2">
                        <label htmlFor="type2" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                                     className="h-8 ml-3"/>
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                    <div>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="John Smith" type="text"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                    <div>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="0000 0000 0000 0000" type="text"/>
                    </div>
                </div>
                <div className="mb-3 -mx-2 flex items-end">
                    <div className="px-2 w-1/2">
                        <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                        <div>
                            <select
                                className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <select
                            className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                        </select>
                    </div>
                </div>
                <div className="mb-10">
                    <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                    <div>
                        <input
                            className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="000" type="text"/>
                    </div>
                </div>
                <div>
                    <button
                        className="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                        <i className="mdi mdi-lock-outline mr-1"></i> Payer
                    </button>
                </div>
            </div>
        </div>
    </GlobalLayout>
    )}