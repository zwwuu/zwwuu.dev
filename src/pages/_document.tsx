import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className={"overflow-x-clip"}>
        <Head>
          <link href={"/apple-touch-icon.png"} rel={"apple-touch-icon"} sizes={"180x180"} />
          <link href={"/favicon-32x32.png"} rel={"icon"} sizes={"32x32"} type={"image/png"} />
          <link href={"/favicon-16x16.png"} rel={"icon"} sizes={"16x16"} type={"image/png"} />
          <link href={"/manifest.json"} rel={"manifest"} />
          <link color={"#040404"} href={"/safari-pinned-tab.svg"} rel={"mask-icon"} />
          <meta content={"#040404"} name={"msapplication-TileColor"} />
          <meta content={"#040404"} name={"theme-color"} />
        </Head>
        <body className={"overflow-x-clip text-base"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
