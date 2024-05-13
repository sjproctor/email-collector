import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import sdRuby from "./assets/sdruby.png"
import Footer from "./components/Footer"

const App = () => {
  const [submissionAlert, setSubmissionAlert] = useState({
    visibility: "hidden",
    header: "",
    body: ""
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    let { name, email } = data
    try {
      const templateParams = {
        name,
        email
      }
      await emailjs.send("service...", "template...", templateParams, "id...")
      setSubmissionAlert({
        visibility: "",
        header: "Success!",
        body: "Thank you for your submission."
      })
    } catch (e) {
      setSubmissionAlert({
        visibility: "",
        header: "Oops!",
        body: "Something went wrong."
      })
    } finally {
      reset()
    }
  }

  return (
    <>
      <main className="h-[calc(100vh-70px)] overflow-hidden">
        <div className="flex justify-center">
          <img src={sdRuby} alt="SD Ruby" className="h-64" />
        </div>
        <div className="text-center">
          <h1>SD Ruby Email List</h1>
          <p>
            Enter your email to receive emails from the organizers of SD Ruby.
          </p>
        </div>
        <br />
        <div>
          <div className={submissionAlert.visibility}>
            <div
              className="bg-lightGold relative m-1 border bg-opacity-50 p-4 md:mx-auto md:w-1/3"
              role="alert"
            >
              <strong className="font-bold">{submissionAlert.header}</strong>
              <span className="block">{submissionAlert.body}</span>
              <span className="absolute bottom-0 right-0 top-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  onClick={() =>
                    setSubmissionAlert({
                      visibility: "hidden",
                      header: "",
                      body: ""
                    })
                  }
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          </div>
          <form
            className="md:mx-auto md:w-1/3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="name">Your name *</label>
              <br />
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                className="w-full border p-2"
                {...register("name", {
                  required: true
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className=" text-sm text-rubyLightRed">Name is required.</p>
              )}
            </div>
            <div className="my-2">
              <label htmlFor="email">Your email *</label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                className="w-full border p-2"
                {...register("email", {
                  required: true
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="px-2 text-sm text-rubyLightRed">
                  Email is required.
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                className="m-2 border bg-lightGray px-4 py-2 shadow-2xl hover:bg-rubyLightRed hover:text-white active:translate-y-0.5"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
