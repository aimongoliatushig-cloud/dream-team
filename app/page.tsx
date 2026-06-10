import {
  ArrowRight,
  BadgeCheck,
  Bath,
  BedDouble,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Home,
  KeyRound,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  SquareStack,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';

const featuredProperties = [
  {
    title: 'River Garden Residence',
    location: 'Хан-Уул, River Garden',
    price: '₮680 сая',
    beds: '4 өрөө',
    baths: '2 ариун цэврийн өрөө',
    size: '126м²',
    tag: 'Үнэ цэнэтэй бүс',
    accent: 'from-[#173b28] via-[#376348] to-[#d8b566]',
  },
  {
    title: 'Central Park View',
    location: 'Сүхбаатар, Downtown',
    price: '₮1.2 тэрбум',
    beds: '5 өрөө',
    baths: '3 ариун цэврийн өрөө',
    size: '188м²',
    tag: 'City view',
    accent: 'from-[#17211b] via-[#2c4936] to-[#b98c41]',
  },
  {
    title: 'Family Townhouse',
    location: 'Зайсан, Богд уулын ам',
    price: '₮920 сая',
    beds: 'Таунхаус',
    baths: 'Private yard',
    size: '210м²',
    tag: 'Гэр бүлд',
    accent: 'from-[#ead7aa] via-[#8aa077] to-[#1f5136]',
  },
];

const stats = [
  ['₮42B+', 'Идэвхтэй борлуулалтын үнэ цэнэ'],
  ['180+', 'Хаагдсан хэлцэл'],
  ['24ц', 'Үнэлгээний эхний хариу'],
  ['4.9/5', 'Харилцагчийн үнэлгээ'],
];

const services = [
  { icon: Home, title: 'Борлуулах стратеги', text: 'Зах зээлийн үнэ, байршуулалт, контент, худалдан авагчийн funnel-ийг нэг системд оруулна.' },
  { icon: Building2, title: 'Хөрөнгө оруулалтын сонголт', text: 'Байршил, түрээсийн өгөөж, үнэ өсөх potential-оор объектуудыг эрэмбэлж өгнө.' },
  { icon: ShieldCheck, title: 'Эрсдэлийн шалгалт', text: 'Баримт бичиг, өмчлөл, үнэ цэнийн эрсдэлийг хэлцлээс өмнө тодорхой болгоно.' },
];

const agents = [
  { name: 'Б. Тэмүүлэн', role: 'Luxury property advisor', deals: '₮12.8B хэлцэл', area: 'Зайсан · Хан-Уул' },
  { name: 'Э. Номин', role: 'Investment broker', deals: '46 объект', area: 'Downtown · Office' },
  { name: 'Д. Ананд', role: 'Family home specialist', deals: '98% хаалтын rate', area: 'River Garden · Яармаг' },
];

const process = [
  { icon: Search, title: '1. Үнэлгээ', text: 'Байршил, м², засвар, ойролцоо хэлцэл дээр суурилж үнэ цэнийг тодорхойлно.' },
  { icon: Sparkles, title: '2. Premium танилцуулга', text: 'Зураг, headline, объектын давуу тал, худалдан авагчийн angle-ийг бэлдэнэ.' },
  { icon: CalendarCheck, title: '3. Үзлэг ба хэлцэл', text: 'Зөв худалдан авагчийг сонгож, үзлэг, санал, гэрээний процессыг удирдана.' },
  { icon: KeyRound, title: '4. Хаалт', text: 'Баримт бичиг, төлбөр, шилжилт, after-sale follow-up хүртэл хамт явна.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f2ea]">
      <section className="hero-grid relative px-4 py-4 sm:px-6 lg:px-12">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#c79b4b]/30 blur-3xl" />
        <div className="absolute left-[-160px] top-40 h-80 w-80 rounded-full bg-[#1f5136]/15 blur-3xl" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#d8c49d] bg-[#fff8eb]/88 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1f5136] text-[#f7e4b2] shadow-lg shadow-[#1f5136]/20">
              <Sparkles size={19} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1f5136]">Dream Team</p>
              <p className="hidden text-xs text-[#756d63] sm:block">Real Estate Brokerage</p>
            </div>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#425044] lg:flex">
            <a href="#properties">Объектууд</a>
            <a href="#agents">Брокерууд</a>
            <a href="#process">Процесс</a>
            <a href="#valuation">Үнэлгээ</a>
          </div>
          <a className="inline-flex items-center gap-2 rounded-full bg-[#1f5136] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#1f5136]/20 sm:px-5" href="tel:+97699000000">
            <Phone size={16} />
            <span className="hidden sm:inline">Зөвлөхтэй холбогдох</span>
            <span className="sm:hidden">Залгах</span>
          </a>
        </nav>

        <div id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-12 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c79b4b]/35 bg-white/65 px-4 py-2 text-sm font-bold text-[#1f5136] shadow-sm">
              <BadgeCheck size={17} /> Premium brokerage for serious property deals
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.065em] text-[#17211b] sm:text-6xl md:text-7xl">
              Зөв үнээр. Зөв худалдан авагчид. Зөв хаалт.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f665f]">
              Dream Team бол үл хөдлөх зарын сайт биш. Бид объектын үнэ цэнийг зөв байршуулж, чанартай lead авч, хэлцлийг мэргэжлийн түвшинд хаадаг broker систем.
            </p>

            <div className="mt-8 rounded-[1.7rem] border border-[#d8c49d] bg-[#fff8eb]/90 p-3 shadow-2xl shadow-[#17211b]/10 backdrop-blur-xl">
              <div className="grid gap-3 md:grid-cols-[1.2fr_0.9fr_0.9fr_auto]">
                <label className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 text-[#756d63]">
                  <Search size={19} className="text-[#1f5136]" />
                  <input className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-[#756d63]" placeholder="Байршил, хотхон, дүүрэг" />
                </label>
                <select className="rounded-2xl border border-[#ead8b3] bg-white px-4 py-4 text-sm font-bold text-[#425044] outline-none">
                  <option>Бүх төрөл</option>
                  <option>Орон сууц</option>
                  <option>Таунхаус</option>
                  <option>Оффис</option>
                </select>
                <select className="rounded-2xl border border-[#ead8b3] bg-white px-4 py-4 text-sm font-bold text-[#425044] outline-none">
                  <option>Үнэ</option>
                  <option>₮300–600 сая</option>
                  <option>₮600 сая–1 тэрбум</option>
                  <option>₮1 тэрбумаас дээш</option>
                </select>
                <a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1f5136] px-6 py-4 text-sm font-black text-white" href="#properties">
                  Хайх <ArrowRight size={17} />
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f5136] px-7 py-4 font-black text-white shadow-2xl shadow-[#1f5136]/25" href="#valuation">
                Үнэгүй үнэлгээ авах <ArrowRight size={19} />
              </a>
              <a className="inline-flex items-center justify-center rounded-full border border-[#c79b4b]/40 bg-white/70 px-7 py-4 font-black text-[#1f5136]" href="#properties">
                Онцлох объект харах
              </a>
            </div>
          </div>

          <div className="glass-card relative rounded-[2rem] p-4 lg:p-5">
            <div className="absolute -left-5 top-10 z-10 hidden rounded-3xl bg-white p-4 shadow-2xl md:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c79b4b]">Verified</p>
              <div className="mt-2 flex items-center gap-2 text-[#1f5136]"><Star size={17} fill="currentColor" /> <b>4.9 broker rating</b></div>
            </div>
            <div className="rounded-[1.5rem] bg-[#17211b] p-4 text-white">
              <div className="relative h-[470px] overflow-hidden rounded-[1.1rem] bg-[radial-gradient(circle_at_35%_20%,#e6c06f,transparent_26%),linear-gradient(135deg,#375f46,#122419)] p-6">
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#17211b] to-transparent" />
                <div className="relative flex justify-between">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold backdrop-blur">Featured listing</span>
                  <span className="rounded-full bg-[#c79b4b] px-4 py-2 text-xs font-black text-[#17211b]">New</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-[#e6d2a6]">Зайсан · Luxury Apartment</p>
                  <h2 className="mt-2 text-4xl font-black tracking-[-0.04em]">Skyline Residence</h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-[#e9dfc8]">
                    <span className="rounded-full bg-white/10 px-3 py-2">168м²</span>
                    <span className="rounded-full bg-white/10 px-3 py-2">4 өрөө</span>
                    <span className="rounded-full bg-white/10 px-3 py-2">Panoramic view</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 p-2 pt-4 text-center text-xs text-[#e9dfc8]">
                <div className="rounded-2xl bg-white/10 p-3"><BedDouble className="mx-auto mb-1" size={17} />4 өрөө</div>
                <div className="rounded-2xl bg-white/10 p-3"><Bath className="mx-auto mb-1" size={17} />3 WC</div>
                <div className="rounded-2xl bg-white/10 p-3"><SquareStack className="mx-auto mb-1" size={17} />168м²</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-3 pb-10 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div className="rounded-3xl border border-[#d8c49d] bg-white/60 p-5 shadow-sm" key={value}>
              <p className="text-3xl font-black text-[#1f5136]">{value}</p>
              <p className="mt-1 text-sm leading-5 text-[#756d63]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="properties" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#c79b4b]">Featured properties</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">Зах зээл дээрх онцлох объектууд</h2>
          </div>
          <a href="#valuation" className="inline-flex items-center gap-2 font-black text-[#1f5136]">Объект нэмүүлэх <ChevronRight size={18} /></a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProperties.map((property) => (
            <article className="property-card overflow-hidden rounded-[1.7rem] border border-[#decaa3] bg-white shadow-sm" key={property.title}>
              <div className={`relative h-64 bg-gradient-to-br ${property.accent} p-5`}>
                <span className="rounded-full bg-white/85 px-4 py-2 text-xs font-black text-[#1f5136] shadow-sm">{property.tag}</span>
                <div className="absolute bottom-5 left-5 rounded-2xl bg-[#17211b]/75 px-4 py-3 text-white backdrop-blur">
                  <p className="text-xs text-[#e6d2a6]">Үнэ</p>
                  <p className="text-xl font-black">{property.price}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#756d63]"><MapPin size={16} />{property.location}</div>
                <h3 className="mt-4 text-2xl font-black text-[#17211b]">{property.title}</h3>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs font-bold text-[#5f665f]">
                  <span className="rounded-xl bg-[#f7f2ea] px-3 py-2">{property.beds}</span>
                  <span className="rounded-xl bg-[#f7f2ea] px-3 py-2">{property.baths}</span>
                  <span className="rounded-xl bg-[#f7f2ea] px-3 py-2">{property.size}</span>
                </div>
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f2e3c2] px-4 py-3 text-sm font-black text-[#1f5136]">
                  Дэлгэрэнгүй үзэх <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#17211b] px-4 py-20 text-white sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.2em] text-[#c79b4b]">Why Dream Team</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">Зүгээр зар тавих биш. Борлуулалтын систем.</h2>
            </div>
            <p className="leading-8 text-[#d6cfbf]">Ихэнх үл хөдлөх сайт зөвхөн зар харуулдаг. Dream Team UX нь харин итгэл төрүүлж, зөв асуулт асууж, lead-ийг брокерт шууд action болгохоор бүтээгдсэн.</p>
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

      <section id="agents" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#c79b4b]">Broker team</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">Танд тохирох мэргэшсэн зөвлөх</h2>
          </div>
          <p className="max-w-md text-[#67635c]">Broker profile нь худалдан авагч, худалдагчидтай илүү хурдан итгэл үүсгэдэг. Энэ хэсэг lead conversion-д хүчтэй.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {agents.map((agent) => (
            <article className="rounded-[1.7rem] border border-[#decaa3] bg-[#fff8eb] p-5 shadow-sm" key={agent.name}>
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#1f5136] text-xl font-black text-[#f7e4b2]">{agent.name.slice(0, 2)}</div>
                <div>
                  <h3 className="text-xl font-black text-[#17211b]">{agent.name}</h3>
                  <p className="text-sm font-semibold text-[#756d63]">{agent.role}</p>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm font-semibold text-[#425044]">
                <p className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#1f5136]" />{agent.deals}</p>
                <p className="flex items-center gap-2"><MapPin size={17} className="text-[#1f5136]" />{agent.area}</p>
              </div>
              <button className="mt-6 w-full rounded-2xl border border-[#c79b4b]/35 bg-white px-4 py-3 font-black text-[#1f5136]">Профайл харах</button>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="bg-[#fff8eb] px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.2em] text-[#c79b4b]">Sales process</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">Хэлцэл хаах 4 алхам</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map((step) => (
              <div className="rounded-[1.5rem] border border-[#decaa3] bg-white p-6" key={step.title}>
                <step.icon className="text-[#1f5136]" size={30} />
                <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#756d63]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="valuation" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12">
        <div className="grid gap-8 rounded-[2rem] bg-[#1f5136] p-6 text-white shadow-2xl shadow-[#1f5136]/20 md:grid-cols-[1fr_0.8fr] md:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold"><TrendingUp size={16} /> Property valuation</div>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Объектын үнэ цэнийг 24 цагт урьдчилан тооцъё.</h2>
            <p className="mt-5 max-w-xl leading-8 text-[#e9dfc8]">Байршил, м², барилгын нас, засвар, ойролцоо хэлцлийн дата дээр тулгуурлан борлуулах стратегийн эхний зураглал гаргана.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <p className="flex items-center gap-2 rounded-2xl bg-white/10 p-4 text-sm font-bold"><Users size={17} /> Мэргэшсэн broker хариуцна</p>
              <p className="flex items-center gap-2 rounded-2xl bg-white/10 p-4 text-sm font-bold"><MessageCircle size={17} /> Утас/чат follow-up</p>
            </div>
          </div>
          <form className="rounded-[1.5rem] bg-white p-5 text-[#17211b] shadow-2xl">
            <p className="mb-4 text-xl font-black">Үнэлгээ авах хүсэлт</p>
            <input className="mb-3 w-full rounded-2xl border border-[#ded4c3] px-4 py-4 outline-none focus:border-[#1f5136]" placeholder="Таны нэр" />
            <input className="mb-3 w-full rounded-2xl border border-[#ded4c3] px-4 py-4 outline-none focus:border-[#1f5136]" placeholder="Утасны дугаар" />
            <input className="mb-3 w-full rounded-2xl border border-[#ded4c3] px-4 py-4 outline-none focus:border-[#1f5136]" placeholder="Байршил / объектын төрөл" />
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#17211b] px-5 py-4 font-black text-white" type="button">
              Үнэлгээ хүсэх <Phone size={17} />
            </button>
            <p className="mt-3 text-center text-xs leading-5 text-[#756d63]">Бид таны мэдээллийг зөвхөн зөвлөх үйлчилгээний зорилгоор ашиглана.</p>
          </form>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-30 rounded-3xl border border-[#d8c49d] bg-[#fff8eb]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a className="flex items-center justify-center gap-2 rounded-2xl bg-[#1f5136] px-4 py-3 text-sm font-black text-white" href="tel:+97699000000"><Phone size={16} /> Залгах</a>
          <a className="flex items-center justify-center gap-2 rounded-2xl bg-[#f2e3c2] px-4 py-3 text-sm font-black text-[#1f5136]" href="#valuation"><TrendingUp size={16} /> Үнэлгээ</a>
        </div>
      </div>
    </main>
  );
}
