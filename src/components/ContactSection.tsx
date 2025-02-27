import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section id='contact'>
      <div className="flex border-2 border-green-400 pt-20 justify-center gap-4">
        <header className="border-2 border-red-200 w-[27rem] pr-12">
          <h2 className="text-5xl mb-6 font-notoSerifDisplay">Get In Touch</h2>
          <p className="text-pretty">If you wish to inquire about a service, please fill out the form and I will contact you as soon as possible.</p>
        </header>
        <ContactForm />
      </div>
    </section>
  )
}
