import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import APILogin from "../../services/login"; // APILogin import qilingan

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("HEMIS ID majburiy"),
      password: Yup.string().required("Parol majburiy"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await APILogin.login({
          username: values.username,
          password: values.password,
        });

        if (response.data.access) {
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);
          window.location.href = "/user"; // Muvaffaqiyatli login qilinganidan keyin bosh sahifaga yo'naltirish
        }
      } catch (err) {
        // Check if the error is from the server or some other issue
        if (err.response && err.response.status === 401) {
          setErrors({ password: "Login yoki parol noto'g'ri!" });
        } else {
          setErrors({ password: "Xatolik yuz berdi. Qayta urinib ko'ring!" });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Shartnomaga hos rasm"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">
            Qo'qon Davlat Pedagogika instituti talabalarining o'quv amaliyoti
            uchun shartnoma olish axborot tizimi
          </h2>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            -
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            name="username"
            placeholder="HEMIS ID"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            aria-describedby="username-error"
          />
          {formik.touched.username && formik.errors.username ? (
            <div id="username-error" className="text-red-500 text-xs mt-2">
              {formik.errors.username}
            </div>
          ) : null}

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            name="password"
            placeholder="Parol"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            aria-describedby="password-error"
          />
          {formik.touched.password && formik.errors.password ? (
            <div id="password-error" className="text-red-500 text-xs mt-2">
              {formik.errors.password}
            </div>
          ) : null}

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
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Loading..." : "KIRISH"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
