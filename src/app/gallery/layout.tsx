import Header from "@/components/Header";


export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header
        pageTitle="Gallery"
        keywords={["Festival", "Downloads", "Files", "Forms", "Criteria"]}
      />
      <main>{children}</main>
    </>
  );
}
