import { useState } from "react";
import Back from "../tools/Back";
import Title from "../tools/Title";
import { baseUrl } from "@/utils/baseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faInstagramSquare,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import Link from "next/link";

const Contact = ({ setChoose }: { setChoose: (value: string) => void }) => {
  const [name, setName] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [desc, setDesc] = useState("");

  const items = {
    first_name: name,
    last_name,
    desc,
  };

  const handleForm = async (e: any) => {
    e.preventDefault();
    try {
       const res = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    });
    if (res.status == 422) {
      toast.warning("Please fill in the required fields.");
    }
   else if (res.status == 201) {
      toast.success("Your message has been created.");
      setName("");
      setLast_Name("");
      setDesc("");
      setChoose("");
    }
    } catch (error : any) {
      toast.warning(error);
    console.log("Error =>", error );
    }
   
  };

  const resetForm = (e: any) => {
    e.preventDefault();
    setName("");
    setLast_Name("");
    setDesc("");
  };
  return (
    <div className="container_">
      <div className="container__">
        <Back setChoose={setChoose} />

        <Title title="CONTACT" />

        <form className="w-full flex flex-col gap-8 mt-4">
          <section className="w-full flex flex-col gap-8 ">
            <div className="w-full flex gap-5 justify-center  flex-col md:flex-row">
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
                  value={last_name}
                  onChange={(e) => setLast_Name(e.target.value)}
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
              onClick={handleForm}
              className="bg-white font-bold tracking-widest py-3 px-6 cursor-pointer rounded-lg text-black/90 text-sm"
            >
              SEND MESSAGE
            </button>

            <button
              onClick={resetForm}
              className="border font-bold tracking-widest border-white py-3 px-6 cursor-pointer rounded-lg text-white text-sm"
            >
              RESET
            </button>
          </section>
        </form>

        <section className="w-full flex flex-row justify-start gap-3">
          <Link
            target="_blank"
            className="font_div"
            href="https://t.me/eco_token2025"
          >
            <FontAwesomeIcon icon={faTelegram} className="font_p" />
          </Link>
          <Link
            target="_blank"
            className="font_div"
            href="https://www.facebook.com/profile.php?id=61577995047656"
          >
            <FontAwesomeIcon icon={faFacebook} className="font_p" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/eco.token/?utm_source=qr&r=nametag"
            className="font_div"
          >
            <FontAwesomeIcon icon={faInstagramSquare} className="font_p" />
          </Link>
          <Link
            target="_blank"
            className="font_div"
            href="https://www.reddit.com/user/EC0_TOKEN/"
          >
            <FontAwesomeIcon icon={faReddit} className="font_p" />
          </Link>
        </section>
      </div>
    </div>
  );
};
export default Contact;
