import Image from "next/image"
import Link from "next/link"

const NAVLINKS = [
  {
    title: "About",
    link: "/#about" 
  },
  {
    title: "Services",
    link: "/#services"
  },
  {
    title: "Gallery",
    link: "/#projects"
  },
  {
    title: "Testimonials",
    link: "/#testimonials"
  },
  {
    title: "Contact",
    link: "/#contact"
  }
]

export default function Navbar() {

  return (
    <nav className="flex justify-between h-24 items-center px-6">
      <Image src='/top_logo.png' alt="Aljoy digital home logo" width={598} height={171} className="w-32" />
      <ul className="flex gap-8 text-lg font-semibold pr-12">
        {
          NAVLINKS.map((nav, i) => {
            return (
              <li key={nav.title + i}>
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
