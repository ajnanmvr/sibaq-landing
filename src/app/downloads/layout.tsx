import Header from "@/components/Header";

export default function Downloads({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header
        pageTitle="Downloads"
        keywords={["Festival", "Downloads", "Files", "Forms", "Criteria"]}
      />
      <main>{children}</main>
    </>
  );
}
