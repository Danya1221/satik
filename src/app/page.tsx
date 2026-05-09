"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { footerData } from "@/data/footer";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";

const categories = [
  "Смартфоны",
  "Ноутбуки",
  "Умные часы",
  "Наушники",
  "Планшеты",
  "Аксессуары",
  "Для дома",
  "Пылесосы",
  "Фены и стайлеры",
  "Мониторы",
  "Игровая техника",
  "ТВ и мультимедиа",
];

const popularProducts = [
  {
    name: "iPhone 17 Pro",
    price: "от 109 990 ₽",
    colors: ["#1f2937", "#d1d5db", "#0f3b66", "#f97316"],
  },
  {
    name: "MacBook Pro 14",
    price: "от 189 990 ₽",
    colors: ["#4b5563", "#e5e7eb", "#111827"],
  },
  {
    name: "AirPods Pro",
    price: "от 24 990 ₽",
    colors: ["#ffffff", "#000000"],
  },
  {
    name: "Apple Watch Ultra",
    price: "от 79 990 ₽",
    colors: ["#27272a", "#d6d3d1", "#fb923c"],
  },
];

const faqItems = [
  {
    id: 1,
    question: "Можно ли выбрать конфигурацию?",
    answer:
      "Да. На странице товара можно выбрать нужный объём памяти, цвет и доступные параметры модели.",
  },
  {
    id: 2,
    question: "Есть ли техника в наличии?",
    answer:
      "Да, большинство популярных моделей есть в наличии. Актуальный статус наличия показывается прямо в карточке товара.",
  },
  {
    id: 3,
    question: "Как оформить заказ?",
    answer:
      "Добавьте товар в корзину, перейдите к оформлению, укажите контакты и способ доставки — после этого менеджер подтвердит заказ.",
  },
  {
    id: 4,
    question: "Можно ли заказать товар под запрос?",
    answer:
      "Да. Если нужной конфигурации нет в наличии, мы можем привезти её под заказ. Сроки и условия уточняются индивидуально.",
  },
];

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main
      className={
        dark
          ? "min-h-screen bg-[#020814] text-white transition-colors duration-700 ease-in-out"
          : "min-h-screen bg-[#f6f8fb] text-[#0b1220] transition-colors duration-700 ease-in-out"
      }
    >
      <div className="mx-auto max-w-[1440px] px-6 py-6">
        <Header dark={dark} setDark={setDark} />
        <Hero dark={dark} />
        <Benefits dark={dark} />
        <Categories dark={dark} />
        <PopularProducts dark={dark} />
        <NewArrivals dark={dark} />
        <SupportBlock dark={dark} />
        <Footer dark={dark} />
      </div>
    </main>
  );
}

function panelClass(dark: boolean) {
  return dark
    ? "border-white/10 bg-white/[0.035] shadow-[0_20px_80px_rgba(0,60,255,0.08)]"
    : "border-black/10 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]";
}

function mutedTextClass(dark: boolean) {
  return dark ? "text-white/55" : "text-black/55";
}

function Header({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (value: boolean) => void;
}) {
  const navItems = [
    { label: "Каталог", href: "/catalog" },
    { label: "Новинки", href: "/new" },
    { label: "Бренды", href: "/brands" },
    { label: "Акции", href: "/sales" },
    { label: "Поддержка", href: "/help" },
  ];

  return (
    <header
      className={`flex h-[76px] items-center justify-between rounded-2xl border px-8 transition-all duration-700 ${panelClass(
        dark
      )}`}
    >
      <Link
        href="/"
        className="relative flex h-12 w-[150px] items-center justify-start overflow-hidden"
      >
        <Image
          src={dark ? "/logo-light.png" : "/logo-dark.png"}
          alt="Нетизен"
          width={150}
          height={48}
          priority
          className="h-auto max-h-9 w-auto object-contain transition-opacity duration-700"
        />
      </Link>

      <nav className="hidden items-center gap-3 text-sm font-medium lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group relative overflow-hidden rounded-xl px-5 py-3 transition-colors duration-300 hover:text-white"
          >
            <span className="relative z-10">{item.label}</span>

            <span className="absolute inset-0 translate-y-full rounded-xl bg-blue-600/90 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100" />

            <span className="absolute inset-x-3 bottom-0 h-px bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div
          className={`hidden h-11 w-[300px] items-center rounded-xl border px-4 text-sm transition-all duration-700 md:flex ${
            dark
              ? "border-white/10 bg-black/20 text-white/50"
              : "border-black/10 bg-white text-black/50"
          }`}
        >
          Поиск по каталогу
        </div>

        <button
          onClick={() => setDark(!dark)}
          aria-label="Переключить тему"
          className={`relative h-11 w-16 rounded-xl border transition-all duration-700 ${
            dark
              ? "border-white/10 bg-blue-600/15"
              : "border-black/10 bg-blue-50"
          }`}
        >
          <span
            className={`absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-blue-600 text-sm text-white transition-all duration-500 ease-in-out ${
              dark ? "left-7" : "left-1"
            }`}
          >
            {dark ? "☾" : "☀"}
          </span>
        </button>

        <button
          className={`h-11 w-11 rounded-xl border transition-all duration-700 ${
            dark
              ? "border-white/10 bg-white/[0.03]"
              : "border-black/10 bg-white"
          }`}
        >
          🛒
        </button>

        <button
          className={`rounded-xl border px-5 py-3 text-sm transition-all duration-700 ${
            dark
              ? "border-white/10 bg-white/[0.03]"
              : "border-black/10 bg-white"
          }`}
        >
          Войти
        </button>
      </div>
    </header>
  );
}

function Hero({ dark }: { dark: boolean }) {
  return (
    <section className="relative grid min-h-[560px] grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:py-12">
      <div className="relative z-10 max-w-[640px]">
        <div className="mb-7 inline-flex rounded-full border border-blue-500/50 px-4 py-2 text-sm text-blue-500">
          Оригинальная техника. Премиальный сервис.
        </div>

        <h1 className="text-[42px] font-bold leading-[1.14] tracking-[-0.045em] sm:text-[52px] lg:text-[60px] xl:text-[64px]">
          Техника премиум-класса для тех, кто создаёт будущее.
        </h1>

        <p
          className={`mt-5 max-w-[455px] text-base leading-relaxed lg:text-lg ${mutedTextClass(
            dark
          )}`}
        >
          Лучшие устройства от мировых брендов. Официальная гарантия, быстрая
          доставка и поддержка 24/7.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
          href="/catalog"
          className="rounded-xl bg-blue-600 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
>
          Перейти в каталог →
        </Link>

          <Link
          href="/new"
          className={`rounded-xl border px-7 py-4 text-sm font-medium transition-all duration-700 hover:-translate-y-0.5 ${
          dark
          ? "border-white/10 bg-white/[0.03]"
          : "border-black/10 bg-white"
}`}
>
          Новинки →
</Link>
        </div>
      </div>

      <div className="relative flex min-h-[430px] items-end justify-center lg:min-h-[500px]">
        <div
          className={`absolute bottom-10 left-1/2 h-16 w-[82%] -translate-x-1/2 rounded-[100%] border transition-all duration-700 ${
            dark
              ? "border-blue-500/45 bg-blue-500/10 shadow-[0_0_45px_rgba(0,102,255,0.35)]"
              : "border-blue-500/30 bg-blue-500/10 shadow-[0_0_35px_rgba(0,102,255,0.18)]"
          }`}
        />

        <div
          className={`absolute bottom-[76px] left-1/2 flex h-[330px] w-[92%] -translate-x-1/2 items-center justify-center rounded-[28px] transition-all duration-700 lg:h-[410px] ${
            dark ? "bg-white/[0.015] text-white/25" : "bg-white/40 text-black/25"
          }`}
        >
          Hero-слайдер
        </div>
      </div>
    </section>
  );
}

function Benefits({ dark }: { dark: boolean }) {
  const items = [
    "Только оригинал",
    "Гарантия и сервис",
    "Быстрая доставка",
    "Безопасная оплата",
    "Поддержка 24/7",
  ];

  return (
    <section
      className={`grid grid-cols-1 gap-4 rounded-2xl border p-6 transition-all duration-700 md:grid-cols-5 ${panelClass(
        dark
      )}`}
    >
      {items.map((item) => (
        <div key={item} className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/30 text-blue-500">
            ✓
          </div>

          <div>
            <div className="font-semibold">{item}</div>
            <div className={`mt-1 text-sm ${mutedTextClass(dark)}`}>
              Короткое описание преимущества.
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Categories({ dark }: { dark: boolean }) {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold">Выберите категорию</h2>

      <p className={`mt-3 ${mutedTextClass(dark)}`}>
        Выберите направление и найдите свой идеальный гаджет
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category}
            className={`h-[180px] rounded-2xl border p-6 transition-all duration-700 hover:-translate-y-1 ${panelClass(
              dark
            )}`}
          >
            <h3 className="text-xl font-bold">{category}</h3>

            <p className={`mt-2 text-sm ${mutedTextClass(dark)}`}>
              Популярные модели и бренды
            </p>

            <button
  className={`mt-10 flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
    dark
      ? "border-blue-500/30 bg-blue-500/5 text-blue-500 hover:bg-blue-500/10"
      : "border-blue-500/25 bg-blue-50 text-blue-600 hover:bg-blue-100"
  }`}
>
  →
</button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className={`rounded-xl border px-10 py-4 transition-all duration-700 hover:-translate-y-0.5 ${panelClass(
            dark
          )}`}
        >
          Смотреть все категории →
        </button>
      </div>
    </section>
  );
}

function PopularProducts({ dark }: { dark: boolean }) {
  return (
    <section className="pb-20">
      <div>
        <h2 className="text-[42px] font-bold leading-none tracking-[-0.04em] lg:text-[52px]">
          Популярные товары
        </h2>

        <p className={`mt-3 text-base ${mutedTextClass(dark)}`}>
          Выберите модель — конфигурацию подберёте на странице товара.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.slug} product={product} dark={dark} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/catalog"
          className={`min-w-[320px] rounded-xl border px-10 py-4 text-center text-sm font-medium transition-all duration-500 hover:-translate-y-0.5 ${
            dark
              ? "border-white/10 bg-white/[0.035] text-white hover:border-blue-500/40 hover:bg-blue-500/10"
              : "border-black/10 bg-white text-black shadow-sm hover:border-blue-500/40 hover:bg-blue-50"
          }`}
        >
          Смотреть все товары →
        </Link>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  dark,
}: {
  product: {
    slug: string;
    name: string;
    price: string;
    colors: string[];
  };
  dark: boolean;
}) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={`group rounded-3xl border p-4 transition-all duration-700 hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/[0.035] shadow-[0_20px_80px_rgba(0,60,255,0.08)] hover:border-blue-500/35 hover:bg-blue-500/[0.04]"
          : "border-black/10 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] hover:border-blue-500/35"
      }`}
    >
      <div
        className={`flex h-[250px] items-center justify-center rounded-2xl transition-colors duration-700 ${
          dark ? "bg-white/[0.045] text-white/25" : "bg-slate-100 text-black/25"
        }`}
      >
        Фото товара
      </div>

      <div className="px-1 pb-1 pt-4">
        <h3 className="text-lg font-bold leading-tight">{product.name}</h3>

        <p className={`mt-1 text-sm ${mutedTextClass(dark)}`}>
          {product.price}
        </p>

        <div className="mt-4 flex gap-3">
          {product.colors.map((color) => (
            <span
              key={color}
              className={`h-5 w-5 rounded-full border ${
                dark ? "border-white/15" : "border-black/10"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="mt-5 w-full rounded-xl bg-blue-600 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 group-hover:bg-blue-500">
          Перейти →
        </div>
      </div>
    </Link>
  );
}

function NewArrivals({ dark }: { dark: boolean }) {
  return (
    <section className="pb-20">
      <h2 className="text-5xl font-bold">Новинки</h2>

      <p className={`mt-3 ${mutedTextClass(dark)}`}>
        Техника, которая только появилась
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div
          className={`min-h-[360px] rounded-3xl border p-10 transition-all duration-700 ${panelClass(
            dark
          )}`}
        >
          <div className="text-sm font-bold uppercase text-blue-500">
            Новинка
          </div>

          <h3 className="mt-6 text-5xl font-bold">iPhone 17e</h3>

          <p className={`mt-4 text-xl ${mutedTextClass(dark)}`}>
            Мощь. Красота. Доступнее.
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-blue-500">
            Подробнее →
          </button>
        </div>

        <div className="grid gap-5">
          {["AirPods Max", "Samsung Galaxy S25 Ultra"].map((item) => (
            <div
              key={item}
              className={`rounded-3xl border p-8 transition-all duration-700 ${panelClass(
                dark
              )}`}
            >
              <div className="text-sm font-bold uppercase text-blue-500">
                Новинка
              </div>

              <h3 className="mt-4 text-3xl font-bold">{item}</h3>

              <p className={`mt-3 ${mutedTextClass(dark)}`}>от 59 990 ₽</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportBlock({ dark }: { dark: boolean }) {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(1);

  const supportCards = [
    {
      title: "Только оригинал",
      text: "Работаем напрямую с официальными поставщиками.",
    },
    {
      title: "Официальная гарантия",
      text: "Гарантия производителя и собственная поддержка.",
    },
    {
      title: "Быстрая доставка",
      text: "По Москве — 1 день, по России — от 2 дней.",
    },
    {
      title: "Безопасная оплата",
      text: "Защищённые платежи и удобные способы оплаты.",
    },
  ];

  const questions = [
    {
      id: 1,
      question: "Можно ли выбрать конфигурацию?",
      answer:
        "Да. На странице товара можно выбрать нужный объём памяти, цвет и доступные параметры модели.",
    },
    {
      id: 2,
      question: "Есть ли техника в наличии?",
      answer:
        "Да, большинство популярных моделей есть в наличии. Актуальный статус наличия показывается в карточке товара.",
    },
    {
      id: 3,
      question: "Как оформить заказ?",
      answer:
        "Добавьте товар в корзину, укажите контакты и способ доставки — после этого менеджер подтвердит заказ.",
    },
    {
      id: 4,
      question: "Можно ли заказать товар под запрос?",
      answer:
        "Да. Если нужной конфигурации нет в наличии, мы можем привезти её под заказ. Сроки и условия уточняются индивидуально.",
    },
  ];

  const orderedQuestions =
    activeFaqId === null
      ? questions
      : [
          ...questions.filter((item) => item.id === activeFaqId),
          ...questions.filter((item) => item.id !== activeFaqId),
        ];

  return (
    <section
      className={`mb-20 rounded-[32px] border p-8 transition-all duration-700 md:p-10 ${panelClass(
        dark
      )}`}
    >
      <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-5xl">
        Сервис и поддержка Нетизен
      </h2>

      <p className={`mt-4 text-lg md:text-xl ${mutedTextClass(dark)}`}>
        Подскажем, чем отличаются модели и как оформить заказ.
      </p>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-5 self-start sm:grid-cols-2">
          {supportCards.map((item) => (
            <div
              key={item.title}
              className={`flex h-[170px] flex-col justify-start rounded-2xl border p-6 transition-colors duration-300 ${
  dark
    ? "border-white/10 bg-white/[0.025] hover:border-blue-500/25 hover:bg-blue-500/[0.03]"
    : "border-black/10 bg-white/80 hover:border-blue-500/25 hover:bg-blue-50/40"
}`}
            >
              <div className="text-lg leading-none text-blue-500">✓</div>

<h3 className="mt-6 text-base font-bold leading-tight">{item.title}</h3>

<p className={`mt-3 text-sm leading-relaxed ${mutedTextClass(dark)}`}>
  {item.text}
</p>
            </div>
          ))}
        </div>

        <div className="relative min-h-[330px] self-start">
          <div className="grid gap-4">
            {orderedQuestions.map((item) => {
              const isOpen = activeFaqId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-2xl border transition-colors duration-300 ${
                    isOpen ? "z-20" : "z-0"
                  } ${
                    dark
                      ? "border-white/10 bg-[#08111f] hover:border-blue-500/30"
                      : "border-black/10 bg-white hover:border-blue-500/30"
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveFaqId((prev) => (prev === item.id ? null : item.id))
                    }
                    className="group relative w-full px-6 py-5 text-left"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold">{item.question}</span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-blue-500 transition-all duration-300 group-hover:translate-x-1 ${
                          dark
                            ? "border-white/10 bg-white/[0.03] group-hover:border-blue-500/40 group-hover:bg-blue-500/10"
                            : "border-black/10 bg-white group-hover:border-blue-500/40 group-hover:bg-blue-50"
                        } ${isOpen ? "rotate-45" : "rotate-0"}`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className={`absolute left-0 right-0 top-[62px] z-30 rounded-b-2xl border-x border-b px-6 pb-6 pt-1 shadow-2xl ${
                          dark
                            ? "border-white/10 bg-[#08111f]"
                            : "border-black/10 bg-white"
                        }`}
                      >
                        <p
                          className={`pr-10 text-sm leading-relaxed ${mutedTextClass(
                            dark
                          )}`}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ dark }: { dark: boolean }) {
  return (
    <footer
      className={`rounded-[32px] border p-10 transition-all duration-700 ${panelClass(
        dark
      )}`}
    >
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="relative flex h-12 w-[170px] items-center justify-start overflow-hidden"
          >
            <Image
              src={dark ? "/logo-light.png" : "/logo-dark.png"}
              alt="Нетизен"
              width={170}
              height={48}
              className="h-auto max-h-10 w-auto object-contain transition-opacity duration-700"
            />
          </Link>

          <div className="mt-8 space-y-6">
            <FooterContact
              icon="☎"
              title={footerData.contacts.phone}
              text={footerData.contacts.phoneText}
              dark={dark}
            />

            <FooterContact
              icon="✈"
              title={footerData.contacts.telegram}
              text={footerData.contacts.telegramText}
              dark={dark}
            />

            <FooterContact
              icon="✉"
              title={footerData.contacts.email}
              text={footerData.contacts.emailText}
              dark={dark}
            />
          </div>

          <div
            className={`mt-8 border-t pt-7 ${
              dark ? "border-white/10" : "border-black/10"
            }`}
          >
            <h3 className="text-xl font-bold">Будьте в курсе новинок</h3>

            <p
              className={`mt-3 max-w-[360px] text-sm leading-relaxed ${mutedTextClass(
                dark
              )}`}
            >
              Подпишитесь и узнавайте первыми о новых поступлениях и акциях.
            </p>

            <div
              className={`mt-5 flex h-14 overflow-hidden rounded-xl border transition-all duration-700 ${
                dark ? "border-white/10 bg-black/20" : "border-black/10 bg-white"
              }`}
            >
              <input
                placeholder="Ваш e-mail"
                className={`min-w-0 flex-1 bg-transparent px-5 outline-none ${
                  dark
                    ? "text-white placeholder:text-white/35"
                    : "text-black placeholder:text-black/35"
                }`}
              />

              <button className="w-16 bg-blue-600 text-2xl text-white transition-colors hover:bg-blue-500">
                →
              </button>
            </div>
          </div>
        </div>

        {footerData.columns.map((column) => (
          <FooterColumn
            key={column.title}
            title={column.title}
            items={column.links}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {footerData.socials.map((item) => (
          <button
            key={item}
            className={`rounded-xl border px-10 py-4 text-blue-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-500/10 ${
              dark
                ? "border-blue-500/30 bg-white/[0.02]"
                : "border-blue-500/30 bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className={`mt-10 flex flex-col gap-6 border-t pt-8 text-sm transition-colors duration-700 lg:flex-row lg:items-center lg:justify-between ${
          dark ? "border-white/10 text-white/45" : "border-black/10 text-black/45"
        }`}
      >
        <div>© 2024 Netizen. Все права защищены.</div>

        <div className="flex flex-wrap gap-6">
          {footerData.legal.map((item) => (
            <a key={item} className="transition-colors hover:text-blue-500">
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-5 text-lg font-bold opacity-70">
          {footerData.payments.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterContact({
  icon,
  title,
  text,
  dark,
}: {
  icon: string;
  title: string;
  text: string;
  dark: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-blue-500 transition-all duration-700 ${
          dark ? "bg-blue-500/10" : "bg-blue-50"
        }`}
      >
        {icon}
      </div>

      <div>
        <div className="font-semibold">{title}</div>
        <div className={`mt-1 text-sm ${mutedTextClass(dark)}`}>{text}</div>
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[] | { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>

      <div className="mt-6 flex flex-col gap-4 opacity-60">
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const href = typeof item === "string" ? "#" : item.href;

          return (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-blue-500"
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}