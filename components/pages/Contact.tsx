import { useState } from "react";
import Back from "../tools/Back";
import Title from "../tools/Title";
import { baseUrl } from "@/utils/baseUrl";
import { toast } from "react-toastify";
import { ok } from "assert";

const Contact = ({ setChoose }: { setChoose: (value: string) => void }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const items = {
    first_name: name,
    last_name: lastName,
    desc,
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(items),
      });

      if (res.ok) {
        setLoading(true);
      }

      if (res.status === 422) {
        toast.warning("Please fill in the required fields.");
        setLoading(false);
      } else if (res.status === 201) {
        toast.success("Your message has been created.");
        setName("");
        setLastName("");
        setDesc("");
        setChoose("");
      }
    } catch (error) {
      toast.error("Your request has failed.");
      console.error("Error =>", error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setName("");
    setLastName("");
    setDesc("");
  };

  return (
    <div className="container_">
      <div className="container__">
        <Back setChoose={setChoose} />
        <Title title="CONTACT" />

        <form onSubmit={handleForm} className="w-full flex flex-col gap-8 mt-4">
          <section className="w-full flex flex-col gap-8 ">
            <div className="w-full flex gap-5 justify-center flex-col md:flex-row">
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="tracking-widest text-sm text-white/80"
                >
                  NAME
                </label>
                <input
                  className="w-full border-2 border-white p-2 rounded-md"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="tracking-widest text-sm text-white/80"
                >
                  EMAIL
                </label>
                <input
                  className="w-full border-2 border-white p-2 rounded-md"
                  name="email"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="message"
                className="tracking-widest text-sm text-white/80"
              >
                MESSAGE
              </label>
              <textarea
                rows={4}
                className="w-full border-2 border-white p-2 rounded-md"
                name="message"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </section>

          <section className="w-full flex flex-col gap-6 justify-start md:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="bg-white font-bold tracking-widest py-3 px-6 cursor-pointer rounded-lg text-black/90 text-sm"
            >
              {loading ? "MESSAGE IS SENDING..." : "SEND MESSAGE"}
            </button>
            <button
              onClick={resetForm}
              className="bg-red-500 font-bold tracking-widest py-3 px-6 cursor-pointer rounded-lg text-white text-sm"
            >
              RESET FORM
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Contact;
