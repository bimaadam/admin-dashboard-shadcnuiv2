import { kolum, Payment } from "./kolum"
import { DataTabel } from "./data-tabel"

async function getData(): Promise<Payment[]> {
    // Buat Fetch dari API
    return [
        {
            id: "1111",
            amount: 100,
            status: "pending",
            email: "ririntobrut@gmail.com",
            created_at: "2025-02-20",
        },
    ]
}

export default async function TambahProduk() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10 text-white">
            <DataTabel columns={kolum} data={data} />
        </div>
    )
}
