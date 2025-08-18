import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Estado para mostrar la animación

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");


    try {
      await emailjs.send( 
        "service_46wb12n",
        "template_l0yyfma", 
        {
          ...formData
        },
        "zRGhPkyljgFDU-Rxj" );
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000); // Oculta la animación después de 3s
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return { formData, handleChange, handleSubmit, status};
};

