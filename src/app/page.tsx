import { RestaurantCard } from "@/components/restaurant-card";
import { placeholderRestaurants } from "@/data/placeholder-restaurants";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Habba هبّة، الصفحة الرئيسية">
          <span lang="en" dir="ltr">Habba</span>
          <span aria-hidden="true">هبّة</span>
        </a>
        <nav aria-label="التنقل الرئيسي">
          <a href="#matches">اختيارات الليلة</a>
          <a href="#group-room">قرار القروب</a>
        </nav>
        <span className="location">جدة</span>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">اختيارات محلية، مرتبة لك</p>
        <h1>وش يناسب<br />مزاجكم الليلة؟</h1>
        <p className="hero-copy">ثلاث معلومات واضحة تساعدكم تقررون بسرعة، بدون قوائم طويلة.</p>
        <a className="primary-button" href="#matches">شوف الاختيارات</a>
      </section>

      <section className="matches" id="matches" aria-labelledby="matches-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">25 مكانًا تجريبيًا</p>
            <h2 id="matches-title">هل يناسبنا الليلة؟</h2>
          </div>
          <p>هذه بيانات واجهة تجريبية وليست حقائق مطاعم منشورة. التقييم والساعات ووقت الوصول تظهر كغير متوفرة حتى يتم توثيقها.</p>
        </div>
        <div className="restaurant-grid">
          {placeholderRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>

      <section className="group-room" id="group-room" aria-labelledby="group-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">مثال غرفة مشتركة</p>
            <h2 id="group-title">الأقرب لذوق المجموعة</h2>
          </div>
          <p>إشارة القروب تظهر فقط داخل غرفة قرار مشتركة، ولا تزاحم البطاقة العادية.</p>
        </div>
        <RestaurantCard restaurant={placeholderRestaurants[0]} groupSignal="3 من 4 وافقوا · 👍 3  🤔 1" />
      </section>

      <footer>
        <a className="brand" href="#top"><span lang="en" dir="ltr">Habba</span><span>هبّة</span></a>
        <p>استكشاف بصري وبيانات تجريبية فقط.</p>
      </footer>
    </main>
  );
}
