import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { Globe } from "../ui/globe";
import { Textarea } from "../ui/textarea";

const ContactMe = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;
  // const resend = new Resend(resendApiKey);

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    // const { data, err } = await resend.emails.send({
    //   from: `${email}`,
    //   to: ["mugisharegis72@gmail.com"],
    //   subject: "Hello World",
    // });
    // if (err) {
    //   return console.error(err);
    // }
    // console.log({ data });
  };
  return (
    <section
      id="contact"
      className="min-h-screen py-16 flex flex-col items-center"
    >
      <h2 className="font-semibold text-4xl mb-12">ContactMe</h2>
      <div className="flex justify-between items-center">
        <Globe />
        <div>
          <h3 className="text-2xl">Get in touch</h3>
          <p className="text-gray-400 mb-3">
            My inbox is always open. Whether you have a question or just want to
            say hello, I will try my best to get back to you!
          </p>

          <div className="w-full max-w-[400px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name*"
                required
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                type="email"
                required
              />
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message*"
                required
              />
              <Button type="submit">Say Hello👏</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
