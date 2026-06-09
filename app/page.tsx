import { ArrowRight, BadgeCheck, Building2, Home, MapPin, Phone, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

const featuredProperties = [
  {
    title: 'River Garden Residence',
    location: 'Хан-Уул, River Garden',
    price: '₮680 сая',
    meta: '4 өрөө · 126м² · 2 зогсоол',
    image: 'linear-gradient(135deg, #31583f 0%, #d4b06b 100%)',
  },
  {
    title: 'Central Park View',
    location: 'Сүхбаатар, Downtown',
    price: '₮1.2 тэрбум',
    meta: '5 өрөө · 188м² · city view',
    image: 'linear-gradient(135deg, #17211b 0%, #b38a43 100%)',
  },
  {
    title: 'Family Townhouse',
    location: 'Зайсан, Богд уулын ам',
    price: '₮920 сая',
    meta: 'Таунхаус · 210м² · private yard',
    image: 'linear-gradient(135deg, #e6d2a6 0%, #1f5136 100%)',
  },
];

const stats = [
  ['₮42B+', 'Идэвхтэй борлуулалтын үнэ цэнэ'],
  ['180+', 'Хаагдсан хэлцэл'],
  ['24ц', 'Үнэлгээний эхний хариу'],
];

const services = [
  { icon: Home, title: 'Орон сууц борлуулах', text: 'Зах зээлийн үнэ, зураг авалт, зар байршуулалт, хэлцлийн хаалт.' },
  { icon: Building2, title: 'Хөрөнгө оруулалт', text: 'Өгөөж, байршил, түрээсийн potential дээр суурилсан сонголт.' },
  { icon: ShieldCheck, title: 'Эрсдэлийн шалгалт', text: 'Баримт бичиг, өмчлөл, үнэ цэнийн эрсдэлийг урьдчилан шүүнэ.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="hero-grid relative px-6 py-6 lg:px-12">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#c79b4b]/30 blur-3xl" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#d8c49d] bg-[#fff8eb]/80 px-5 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1f5136] text-[#f7e4b2]">
              <Sparkles size={19} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1f5136]">Dream Team</p>
              <p className="text-xs text-[#756d63]">Real Estate Brokerage</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#425044] md:flex">
            <a href="#properties">Үл хөдлөх</a>
            <a href="#services">Үйлчилгээ</a>
            <a href="#valuation">Үнэлгээ</a>
          </div>
          <a className="rounded-full bg-[#1f5136] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#1f5136]/20" href="tel:+97699000000">
            Зөвлөхтэй холбогдох
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c79b4b]/35 bg-white/60 px-4 py-2 text-sm font-bold text-[#1f5136]">
              <BadgeCheck size={17} /> Premium brokerage for serious buyers
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-[#17211b] md:text-7xl">
              Үл хөдлөхөө хурдан, өндөр үнэ цэнээр борлуул.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f665f]">
              Dream Team нь худалдан авагч, худалдагч, хөрөнгө оруулагчдыг premium property experience-ээр холбож, үнэ цэнэд суурилсан хэлцэл хаадаг.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f5136] px-7 py-4 font-black text-white shadow-2xl shadow-[#1f5136]/25" href="#valuation">
                Үнэгүй үнэлгээ авах <ArrowRight size={19} />
              </a>
              <a className="inline-flex items-center justify-center rounded-full border border-[#c79b4b]/40 bg-white/70 px-7 py-4 font-black text-[#1f5136]" href="#properties">
                Онцлох объект харах
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div className="rounded-3xl border border-[#d8c49d] bg-white/55 p-4" key={value}>
                  <p className="text-2xl font-black text-[#1f5136]">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#756d63]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card relative rounded-[2rem] p-4 lg:p-5">
            <div className="rounded-[1.5rem] bg-[#17211b] p-4 text-white">
              <div className="h-[420px] rounded-[1.1rem] bg-[radial-gradient(circle_at_35%_20%,#e6c06f,transparent_26%),linear-gradient(135deg,#375f46,#122419)] p-6">
                <div className="flex justify-between">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold backdrop-blur">Featured listing</span>
                  <span className="rounded-full bg-[#c79b4b] px-4 py-2 text-xs font-black text-[#17211b]">New</span>
                </div>
              </div>
              <div className="p-2 pt-5">
                <p className="text-sm text-[#cdbd98]">Зайсан · Luxury Apartment</p>
                <h2 className="mt-2 text-3xl font-black">Skyline Residence</h2>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-[#e9dfc8]">
                  <span className="rounded-full bg-white/10 px-3 py-2">168м²</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">4 өрөө</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Panoramic view</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#c79b4b]">Featured properties</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">Зах зээл дээрх онцлох объектууд</h2>
          </div>
          <p className="max-w-md text-[#67635c]">Худалдан авагчийн анхаарал татахуйц зураглал, үнэ, байршил, давуу талыг эхний дэлгэц дээр шууд харуулна.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProperties.map((property) => (
            <article className="property-card overflow-hidden rounded-[1.7rem] border border-[#decaa3] bg-white shadow-sm" key={property.title}>
              <div className="h-56" style={{ background: property.image }} />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#756d63]"><MapPin size={16} />{property.location}</div>
                <h3 className="mt-4 text-2xl font-black text-[#17211b]">{property.title}</h3>
                <p className="mt-2 text-[#756d63]">{property.meta}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xl font-black text-[#1f5136]">{property.price}</p>
                  <button className="rounded-full bg-[#f2e3c2] px-4 py-2 text-sm font-black text-[#1f5136]">Дэлгэрэнгүй</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#17211b] px-6 py-20 text-white lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-black uppercase tracking-[0.2em] text-[#c79b4b]">Why Dream Team</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">Зүгээр зар тавих биш. Борлуулалтын систем.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7" key={service.title}>
                <service.icon className="text-[#c79b4b]" size={32} />
                <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#d6cfbf]">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="valuation" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-8 rounded-[2rem] bg-[#1f5136] p-8 text-white md:grid-cols-[1fr_0.8fr] md:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold"><TrendingUp size={16} /> Property valuation</div>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Объектын үнэ цэнийг 24 цагт урьдчилан тооцъё.</h2>
            <p className="mt-5 max-w-xl leading-8 text-[#e9dfc8]">Байршил, м², барилгын нас, засвар, ойролцоо хэлцлийн дата дээр тулгуурлан борлуулах стратегийн эхний зураглал гаргана.</p>
          </div>
          <form className="rounded-[1.5rem] bg-white p-5 text-[#17211b] shadow-2xl">
            <input className="mb-3 w-full rounded-2xl border border-[#ded4c3] px-4 py-4 outline-none" placeholder="Таны нэр" />
            <input className="mb-3 w-full rounded-2xl border border-[#ded4c3] px-4 py-4 outline-none" placeholder="Утасны дугаар" />
            <input className="mb-3 w-full rounded-2xl border border-[#ded4c3] px-4 py-4 outline-none" placeholder="Байршил / объектын төрөл" />
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#17211b] px-5 py-4 font-black text-white" type="button">
              Үнэлгээ хүсэх <Phone size={17} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
