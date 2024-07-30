import React from 'react';

const Login = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Shartnomaga hos rasm"
                />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="text-center md:text-left">
                    <h2 className="mr-1 text-center">Qo'qon Davlat Pedagogika instituti talabalarining o'quv amaliyoti uchun shartnoma olish axborot tizimi</h2>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                        -
                    </p>
                </div>
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    type="text"
                    placeholder="HEMIS ID"
                />
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="password"
                    placeholder="Parol"
                />
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Eslab qol.!</span>
                    </label>
                    <a
                        className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                        href="/"
                    >
                        Forgot Password?
                    </a>
                </div>
                <div className="text-center md:text-left">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        KIRISH
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;