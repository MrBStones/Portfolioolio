import TransitionLink from "./utils/transitionLink";

const ContactButton = () => (
  <TransitionLink href="/contact" className="w-full text-right">
    <h1
      data-cursor="outline2xl"
      className="bg-to rounded-2xl bg-gradient-to-r from-dark-hero to-hero p-12 text-4xl text-background"
    >
      Feel free to contact me →
    </h1>
  </TransitionLink>
);

export default ContactButton;
