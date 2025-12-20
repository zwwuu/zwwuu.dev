export default function Footer() {
  return (
    <footer className={"py-8"}>
      <div className={"container mx-auto px-4"}>
        <p className={"text-right fl-text-xs/sm"}>
          {`© ${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_APP_TITLE} All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
