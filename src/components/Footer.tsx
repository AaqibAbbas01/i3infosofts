const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          © {currentYear} i3infosoft. All rights reserved. |{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
