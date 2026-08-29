import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
  <footer className="border-t border-gray-400 bg-gray-500">
    <div className="mx-auto max-w-7xl px-6 py-10">

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo & Copyright */}
        <div>
          <Logo width="100px" />

          <p className="mt-4 text-sm text-gray-200">
            A simple blogging platform built with React.
          </p>

          <p className="mt-4 text-sm text-gray-300">
            © 2026 All Rights Reserved.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-100 text-base">
            Company
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Press Kit
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-gray-100">
            Support
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Account
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Help
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-gray-100">
            Legal
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-white duration-200"
              >
                Licensing
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-400 pt-6 text-center">
        <p className="text-sm text-gray-300">
          Built with React & Tailwind CSS
        </p>
      </div>

    </div>
  </footer>
)
}

export default Footer