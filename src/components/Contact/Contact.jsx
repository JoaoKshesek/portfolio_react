import './Contact.css';


export const Contact = () => {
  return (
    <section id="contact">
        <h2>Get in Touch</h2>
        <form action="">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        </form>

    </section>
  )
}
