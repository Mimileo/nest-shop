const ContactForm = () => {
    return (
        <div className="contact-form p-8 rounded-2xl shadow-2xl border bg-white border-emerald-100 ">
            <h2 className="text-2xl font-bold mb-4 text-emerald-500">Contact Us</h2>
            <form className="space-y-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded border border-gray-300" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded border border-gray-300" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                        Message
                    </label>
                    <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 rounded border border-gray-300"></textarea>
                </div>
                <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;