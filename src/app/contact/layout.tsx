import Header from "@/components/Header";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header
        pageTitle="Contact"
        keywords={["Festival", "Downloads", "Files", "Forms", "Criteria"]}
      />
      <main>{children}</main>
    </>
  );
}
