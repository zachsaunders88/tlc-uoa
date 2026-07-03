import { HERO, LINKS } from "@/lib/content";
import { Download } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top">
      {/* Title banner */}
      <div className="bg-navy-wash text-white">
        <div className="container-page pb-24 pt-16 sm:pb-28 sm:pt-24">
          <div className="animate-rise-in">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-uoa-slate">
              {HERO.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-6xl">
              {HERO.title.replace("\n", " ")}
            </h1>
            <p className="mt-4 text-base font-medium uppercase tracking-[0.16em] text-uoa-slate">
              {HERO.tagline}
            </p>
          </div>
          <div className="animate-rise-in" style={{ animationDelay: "180ms" }}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {HERO.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={LINKS.registerUrl} className="btn-white">
                Register your interest
              </a>
              <a href={LINKS.resourcePackHref} className="btn-outline-white">
                <Download className="h-4 w-4" />
                Download the resource pack
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* At-a-glance facts card, overlapping the banner edge */}
      <div className="container-page">
        <dl className="card -mt-12 grid grid-cols-1 divide-y divide-uoa-blue/10 px-7 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-0 sm:py-0">
          <Fact label="Your circle" value="4 colleagues" />
          <Fact label="Time commitment" value={`${HERO.commitmentValue} ${HERO.commitmentUnit}`} />
          <Fact label="TeachWell@UoA" value="Reflect & Contribute domains" />
        </dl>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-4 sm:px-7 sm:py-6">
      <dt className="text-xs font-semibold uppercase tracking-wider text-uoa-steel">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-uoa-navy">{value}</dd>
    </div>
  );
}
