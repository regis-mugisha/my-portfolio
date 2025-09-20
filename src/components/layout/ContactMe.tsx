import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import GlobeLazy from "../lazy/GlobeLazy";
import { Textarea } from "../ui/textarea";

const ContactMe = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult("");

    try {
      const formData = {
        fullName,
        email,
        message,
        access_key: "c1e62916-8c24-4909-8ec4-4ff039efe284",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        setResult("❌ Error: " + (data.message || "Failed to send message"));
      }
    } catch (error) {
      setResult("❌ Error: Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="flex flex-col justify-center items-center">
      <h2 className="font-semibold text-4xl mb-6">Contact Me</h2>
      <div className="flex justify-between items-center">
        <GlobeLazy className="hidden md:block" />
        <div className="flex flex-col items-center px-6 md:px-16">
          <h3 className="text-2xl md:self-start">Get in touch</h3>
          <p className="text-gray-500 mb-3 text-center md:text-start">
            My inbox is always open. Whether you have a question or just want to
            say hello, I will try my best to get back to you!
          </p>

          <div className="w-full md:flex-1 max-w-lg">
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
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Say Hello👏"}
              </Button>
            </form>
            {result && (
              <div className={`mt-3 p-3 rounded-md ${
                result.includes("✅") 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" 
                  : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              }`}>
                {result}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
