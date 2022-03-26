export const Footer = () => {
  const YEAR = new Date().getFullYear();
  const COMPANY = " © JANIMO SOLUTIONS";

  return (
    <footer className="flex self-center pb-4">
      {YEAR} {COMPANY}
    </footer>
  );
};
