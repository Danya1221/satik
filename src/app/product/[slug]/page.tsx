import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#020814] px-6 py-10 text-white">
      <div className="mx-auto max-w-[1440px]">
        <Link href="/catalog" className="text-sm text-blue-400 hover:text-blue-300">
          ← Вернуться в каталог
        </Link>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-5">
            <div className="flex min-h-[520px] items-center justify-center rounded-[24px] bg-white/[0.045] text-white/25">
              Фото товара
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8">
            <div className="text-sm text-white/45">{product.brand}</div>

            <h1 className="mt-3 text-5xl font-bold tracking-[-0.04em]">
              {product.name}
            </h1>

            <p className="mt-4 text-2xl font-semibold text-white">
              {product.price}
            </p>

            <p className="mt-5 max-w-[560px] text-white/60">
              {product.description}
            </p>

            <div className="mt-8">
              <div className="mb-3 text-sm font-medium text-white/60">
                Доступные цвета
              </div>

              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="h-8 w-8 rounded-full border border-white/20"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="font-semibold">Конфигурация</div>
              <p className="mt-2 text-sm text-white/50">
                Позже здесь будет выбор памяти, цвета, SIM и наличия.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-500">
                Добавить в корзину
              </button>

              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 font-medium transition-colors hover:border-blue-500/40 hover:bg-blue-500/10">
                Получить консультацию
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}