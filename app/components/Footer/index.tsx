import Logo from "../Logo";
import FooterHeader from "./FooterHeader";
import FooterLink from "./FooterLink";

const navigation = {
  general: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/docs/reference/command-line-reference" },
    { name: "Blog", href: "/blog" },
    { name: "Releases", href: "https://github.com/vercel/turborepo/releases" },
    { name: "FAQ", href: "/docs/faq" },
  ],
  support: [
    {
      name: "GitHub",
      href: "https://github.com/vercel/turborepo",
    },
  ],
  company: [
    {
      name: "Open Source Software",
      href: "https://vercel.com/oss?utm_source=turborepo.org&utm_medium=referral&utm_campaign=footer-ossLink",
    },
    { name: "GitHub", href: "https://github.com/vercel" },
    { name: "Twitter", href: "https://twitter.com/vercel" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="py-8 mx-auto max-w-7xl">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeader>Solutions</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeader>Support</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeader>Company</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeader>Legal</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <FooterHeader>Subscribe to our newsletter</FooterHeader>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-500">
              Join the Turborepo newsletter and stay updated on new releases and
              features, guides, and case studies.
            </p>
          </div>
        </div>

        <div className="pt-8 mt-8 md:flex md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-xs text-gray-500 ">
              &copy; {new Date().getFullYear()} Vercel, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
