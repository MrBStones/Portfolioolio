import TransitionLink from "./utils/transitionLink";

const ContactButton = () => (
  <TransitionLink href="/contact">
    <h1 className="rounded-full bg-hero p-12 text-4xl text-background">
      Feel free to contact me →
    </h1>
  </TransitionLink>
);

export default ContactButton;
