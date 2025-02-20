export default function ProdukDetail({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1 className="text-white">Produk detail : {params.id}</h1>
        </div>
    )
}