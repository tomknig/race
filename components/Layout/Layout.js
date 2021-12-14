import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../../components/Footer";

export default function Layout({ title = "Hyperscale", children }) {
  const pageTitle = title !== "Hyperscale" ? `Hyperscale - ${title}` : title;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        style={{
          backgroundImage: "url('/img/navigation-background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center">
          <div className="w-screen max-w-7xl px-4 xl:px-0">
            <Header />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-screen max-w-7xl px-4 xl:px-0">{children}</div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
}
