import { useState } from "react";
import { nestApi } from "../config/axios";
const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await nestApi.post('contact', formData);

            if (response.status === 200) {
                setSuccess(true);
            } else {
                console.error("Form submission failed." + error);
                setError("An error occurred while submitting the form.");
            }
        } catch (error) {
            setError("An error occurred while submitting the form: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form p-8 rounded-2xl shadow-2xl border bg-white border-emerald-100 ">
            <h2 className="text-2xl font-bold mb-4 text-emerald-500">Contact Us</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input 
                        disabled={loading || success}
                        value={formData.name}
                        onChange={handleChange} 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-3 py-2 rounded border border-gray-300" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input 
                        disabled={loading || success}
                        value={formData.email} 
                        onChange={handleChange} 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full px-3 py-2 rounded border border-gray-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                        Message
                    </label>
                    <textarea 
                        disabled={loading || success}
                        value={formData.message} 
                        onChange={handleChange}
                        id="message" 
                        name="message" 
                        rows="4" 
                        className="w-full px-3 py-2 rounded border border-gray-300"
                        required
                        ></textarea>
                </div>

                {error && (
                    <p className="text-red-500">{error}</p>
                )}

                {success && (
                    <p className="text-green-500">Your message has been submitted!</p>
                )}

                <button 
                    disabled={loading || success} 
                    type="submit" 
                    className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;