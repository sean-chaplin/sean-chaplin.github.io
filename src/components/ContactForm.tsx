import { toast } from 'react-toastify';
import { emailApiKey, emailApiEndpoint } from '../config';

function ContactForm() {
  const onSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", emailApiKey);

    const response = await fetch(emailApiEndpoint, {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Message sent!');
      return;
    }

    toast.error('Message failed to send.');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-center">
        <div className="flex flex-col w-[800px] fit-h-content py-24 gap-24">
          <h1 id="contact" className="text-center text-4xl mb-[-50px] font-bold">
            {'./get-in-touch'}
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p>Name:</p>
              <input required name="name" className="bg-gray-dark rounded-md p-2 placeholder-gray-light" type="text" placeholder="Your name..."/>
            </div>

            <div className="flex flex-col gap-2">
              <p>Email:</p>
              <input required name="email" className="bg-gray-dark rounded-md p-2 placeholder-gray-light" type="email" placeholder="e.g. johndoe@gmail.com"/>
            </div>

            <div className="flex flex-col gap-2">
              <p>Message:</p>
              <textarea required name="message" className="bg-gray-dark resize-none rounded-md p-2 placeholder-gray-light" rows={6} placeholder="e.g. Hey! What's up?"/>
            </div>
          </div>

          <button type="submit" className="bg-superblue text-center py-6 rounded-lg w-[300px] self-center text-xl font-bold">
            Let's Talk!
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
