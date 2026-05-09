import Link from "next/link";
import { products } from "@/data/products";

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#020814] px-6 py-10 text-white">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10">
          <Link href="/" className="text-sm text-blue-400 hover:text-blue-300">
            ← На главную
          </Link>

          <h1 className="mt-6 text-5xl font-bold tracking-[-0.04em]">
            Каталог
          </h1>

          <p className="mt-3 text-white/55">
            Выберите модель — конфигурацию подберёте на странице товара.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/35 hover:bg-blue-500/[0.04]"
            >
              <div className="flex h-[250px] items-center justify-center rounded-2xl bg-white/[0.045] text-white/25">
                Фото товара
              </div>

              <div className="px-1 pb-1 pt-4">
                <div className="text-sm text-white/40">{product.brand}</div>

                <h2 className="mt-1 text-lg font-bold leading-tight">
                  {product.name}
                </h2>

                <p className="mt-1 text-sm text-white/55">{product.price}</p>

                <div className="mt-4 flex gap-3">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="h-5 w-5 rounded-full border border-white/15"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <div className="mt-5 flex w-full items-center justify-center rounded-xl bg-blue-600 py-3.5 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-blue-500">
                  Перейти →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}