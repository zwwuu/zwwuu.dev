export default function Footer() {
  return (
    <footer className={"py-4"}>
      <div className={"container mx-auto px-4"}>
        <p className={"text-right text-sm"}>{`© ${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_APP_TITLE}`}</p>
      </div>
    </footer>
  );
}
