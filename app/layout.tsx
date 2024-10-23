

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-orange-300	"
      >
        {children}
      </body>
    </html>
  );
}
