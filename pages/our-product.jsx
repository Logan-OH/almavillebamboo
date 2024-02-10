import Head from "next/head";
import Link from "next/link";
// layouts
import Main from "../Layouts/Main";
// components
import Hero from "../components/Hero";
import OrderRequest from "../components/OrderRequest";
import Vials from "../components/Vials";
import { Text } from "../components/UILib";
import FluroTec from "../components/FluroTec";

export default function OurProduct() {
  return (
    <>
      <Head>
        <title>
          ALK Life Science Solutions Sterile Empty Vials| Our Products
        </title>
        <meta
          name="description"
          content="Browse the wide range of available ALK Life Science Solutions Sterile Empty Vials."
        />
        <link
          rel="canonical"
          href="https://www.sterilevialsolutions.com/our-product/"
        />
      </Head>

      <Hero
        h1="The proof is in the product"
        text="ALK Life Science Solutions&trade; Sterile Empty Vials: Made for purity in every last detail"
        className="product__hero"
      />

      <section className="product__vials">
        <div className="container">
          <div className="product__vials-wrapper">
            <Vials />

            <div className="product__report">
              <Link
                href="/download/sterile-summary-paper.pdf"
                className="product__report-a"
                target="_blank"
              >
                <div className="product__imgwrapper">
                  <img
                    className="product__imgpdf"
                    src="/Images/pages/our-product/USP-standards-report@2x.jpg"
                    alt=""
                  />
                </div>

                <Text type="p2" color="white" className="product__downloads">
                  <img
                    src="/Images/pages/our-product/download.svg"
                    alt="download pdf"
                  />
                  <span>DOWNLOAD OUR USP STANDARDS REPORT</span>
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FluroTec />

      <OrderRequest />
    </>
  );
}

OurProduct.getLayout = function getlayout(page) {
  return <Main>{page}</Main>;
};
