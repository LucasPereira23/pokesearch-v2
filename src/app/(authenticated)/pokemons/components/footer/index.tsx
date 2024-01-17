export default function Footer() {
  return (
    <>
      <footer className="mt-4 bg-[#000029] shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-center">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-400 sm:text-center">
            Made by{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Lucas Pereira
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}
