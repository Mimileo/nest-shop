import ContactForm from "../../components/ContactForm";
import BlogCard from "../../components/BlogCard";

const ContactPage = () => {
  return (
    <>
      <section className=" pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            
                <ContactForm />
          
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
           
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
