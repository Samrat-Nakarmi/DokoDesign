import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
        <section className=" pt-40 footer-make border-t border-[#fffffe]">
            <div>
                <img src="/DokoLogo.png" alt="" />
                <div className="text-white font-semibold mt-3 px-2">
                    <h2>Sifal, Kathmandu</h2>
                    <p>Telephone: +977 123 456</p>
                </div>
                <div className="pt-20 text-white uppercase text-sm">
                    <div>
                        <Link href={"/"}>Contact Us</Link>
                    </div>
                    <div className="my-5">
                        <Link href={"/"}>Maps</Link>
                    </div>
                    <div>
                        <Link href={"/"}>Parking</Link>
                    </div>

                </div>
            </div>
            <div>
                <h2 className="text-white text-xl font-bold">Navigate</h2>
                <div className="text-white mt-8">
                    <div className="mb-5">
                        About
                    </div>
                    <div className="mb-5">
                        BSc.CSIT
                    </div>
                    <div className="mb-5">
                        BCA
                    </div>
                    <div className="mb-5">
                        Clubs
                    </div>
                    <div className="mb-5 capitalize">
                        Dwit exam papers
                    </div>
                    <div className="mb-5 capitalize">
                        TU exam papers
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-white">Our Heritage</h2>
                <div>
                    <p className="text-white">Deerwalk Institute of Technology,</p>
                    <p className="text-white">established in 2000, is a beacon of academic excellence</p>
                </div>
            </div>
        </section>
        <section className="pt-36">
            <div className="footer-make">
                <div>
                    <h2 className="text-white text-xl">Go back to top</h2>
                </div>
                <div className="text-white">
                    <p>Disclaimer | Emergency services | No Discrimination | Privacy Policy</p>
                </div>
            </div>
        </section>
    </footer>
  )
}
