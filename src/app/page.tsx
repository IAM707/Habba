export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="التنقل الرئيسي">
        <a className="brand" href="#top" aria-label="Habba، الصفحة الرئيسية">
          Habba<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="روابط العرض">
          <a href="#direction">التوجّه</a>
          <a href="#tokens">النظام البصري</a>
          <a href="#states">الحالات</a>
        </nav>
        <span className="location">جدة <span aria-hidden="true">●</span></span>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="eyebrow">استكشاف بصري · Sprint 0</div>
        <h1 id="hero-title">وش يناسب<br />مزاجك الليلة؟</h1>
        <p>مو أفضل مطعم في جدة — أفضل مطعم لليلتك.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#direction">اختَر لي الآن</a>
          <a className="button button-secondary" href="#states">نقرّر سوا</a>
        </div>
        <dl className="signal-row" aria-label="مبادئ التجربة">
          <div><dt>3</dt><dd>خيارات واضحة</dd></div>
          <div><dt>0</dt><dd>تسجيل إجباري</dd></div>
          <div><dt>100%</dt><dd>حقائق موثّقة</dd></div>
        </dl>
      </section>

      <section className="showcase" id="direction" aria-labelledby="direction-title">
        <div className="section-heading">
          <span>01 — الاتجاه</span>
          <h2 id="direction-title">دليل جدّاوي هادئ،<br />مو لوحة تحكّم.</h2>
          <p>مساحات دافئة، عناوين عربية واثقة، وألوان بحرية تساعد القرار بدون ضوضاء.</p>
        </div>
        <article className="restaurant-card" aria-label="مثال بطاقة مطعم غير حقيقية">
          <div className="image-placeholder" role="img" aria-label="مكان مخصص لصورة فرع مرخّصة">
            <span>صورة فرع<br />موثّقة</span>
          </div>
          <div className="card-content">
            <div className="card-kicker"><span>أفضل اختيار</span><span>العزيزية</span></div>
            <h3>اسم مطعم تجريبي</h3>
            <p lang="en" dir="ltr">Sample Restaurant · Jeddah 24</p>
            <ul>
              <li>يناسب جلسة هادئة</li>
              <li>رابط الاتجاهات متاح</li>
            </ul>
            <div className="caveat"><strong>قبل لا تروح</strong><span>ساعات العمل غير متوفرة — تحقّق قبل الزيارة.</span></div>
            <div className="card-actions">
              <button type="button">التفاصيل</button>
              <button type="button" aria-label="احفظ المطعم التجريبي">♡ احفظ</button>
            </div>
          </div>
        </article>
      </section>

      <section className="tokens" id="tokens" aria-labelledby="tokens-title">
        <div className="section-heading compact">
          <span>02 — النظام البصري</span>
          <h2 id="tokens-title">دفء الساحل، بوضوح.</h2>
        </div>
        <div className="swatches" aria-label="ألوان الواجهة المختبرة">
          <div className="swatch sand"><span>Sand 50</span><code>#F5F0E7</code></div>
          <div className="swatch ink"><span>Ink 900</span><code>#18322F</code></div>
          <div className="swatch coral"><span>Coral 600</span><code>#C9472F</code></div>
          <div className="swatch sea"><span>Sea 600</span><code>#176B6B</code></div>
        </div>
        <div className="type-samples">
          <p className="arabic-sample">ليلتك تبدأ من هنا <span>١٢٣</span></p>
          <p className="english-sample" lang="en" dir="ltr">A calm Jeddah evening <span>123</span></p>
        </div>
      </section>

      <section className="states" id="states" aria-labelledby="states-title">
        <div className="section-heading compact">
          <span>03 — الحالات</span>
          <h2 id="states-title">الحقيقة تظهر حتى لما البيانات ناقصة.</h2>
        </div>
        <div className="state-grid">
          <article><span className="status known">موثّق</span><h3>الاتجاهات جاهزة</h3><p>رابط الفرع راجعه شخص، مع تاريخ ومصدر.</p></article>
          <article><span className="status unknown">غير متوفر</span><h3>ساعات العمل</h3><p>ما نقول «مفتوح الآن» بدون ساعات كاملة وحديثة.</p></article>
          <article><span className="status focus-demo">تركيز لوحة المفاتيح</span><h3>كل إجراء واضح</h3><p>حلقة تركيز ظاهرة، وهدف لمس لا يقل عن 44 بكسل.</p></article>
        </div>
      </section>

      <footer><span className="brand">Habba<span aria-hidden="true">.</span></span><p>استكشاف بصري فقط — لا توجد بيانات مطاعم منشورة في Sprint 0.</p></footer>
    </main>
  );
}
