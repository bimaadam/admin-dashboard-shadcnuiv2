export default function TambahProdukLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="p-5">
            <h1 className="text-white text-3xl font-bold">Tambah Produk</h1>
            {children}
        </div>
    )
}