import TransitionLink from "./utils/transitionLink";

const ContactButton = () => (
  <TransitionLink href="/contact" className="w-full text-right">
    <h1 className="bg-to rounded-2xl bg-gradient-to-r from-light-dark to-hero p-12 text-4xl text-background dark:from-light dark:to-hero">
      Feel free to contact me →
    </h1>
  </TransitionLink>
);

export default ContactButton;
