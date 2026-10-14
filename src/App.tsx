import { useState } from "react";

const sections = [
  {
    id: "intro",
    icon: "📜",
    title: "مقدمه",
    content: `فروشگاه اینترنتی مارلو شاپ (marloo.shop) با هدف ارائه بهترین محصولات با کیفیت عالی و قیمت‌های واقعی فعالیت می‌کند. با استفاده از خدمات این فروشگاه، شما به‌عنوان کاربر می‌پذیرید که شرایط و قوانین زیر را مطالعه کرده و با آن‌ها موافقت نموده‌اید. مارلو شاپ حق دارد این قوانین را در هر زمان بدون اطلاع قبلی به‌روزرسانی کند. استفاده مستمر از سایت به‌منزله پذیرش تغییرات جدید خواهد بود.`,
  },
  {
    id: "membership",
    icon: "👤",
    title: "شرایط عضویت",
    items: [
      "ثبت‌نام در سایت برای تمامی افراد حقیقی و حقوقی آزاد است.",
      "کاربر موظف است اطلاعات صحیح، کامل و به‌روز را در هنگام ثبت‌نام وارد نماید.",
      "هر شخص مجاز به داشتن تنها یک حساب کاربری فعال می‌باشد.",
      "مسئولیت حفاظت از نام کاربری و رمز عبور به عهده کاربر است.",
      "مارلو شاپ این حق را دارد که در صورت نقض قوانین، حساب کاربری را تعلیق یا حذف نماید.",
      "افراد زیر ۱۸ سال باید با اجازه و نظارت والدین از سایت استفاده نمایند.",
    ],
  },
  {
    id: "ordering",
    icon: "🛒",
    title: "فرآیند ثبت سفارش",
    items: [
      "کلیه سفارش‌ها پس از پرداخت موفق، نهایی تلقی می‌شوند.",
      "مارلو شاپ حق دارد در صورت موجود نبودن کالا، سفارش را کنسل و مبلغ را عودت دهد.",
      "قیمت‌های درج‌شده به تومان بوده و شامل مالیات بر ارزش افزوده می‌باشد.",
      "کالاهای موجود در سبد خرید تا زمان تکمیل پرداخت، رزرو نمی‌شوند.",
      "تغییر یا کنسلی سفارش پس از تأیید پرداخت، تابع قوانین بازگشت کالا خواهد بود.",
      "مارلو شاپ پس از ثبت سفارش، پیامک تأییدیه به شماره موبایل ثبت‌شده ارسال می‌کند.",
    ],
  },
  {
    id: "payment",
    icon: "💳",
    title: "روش‌های پرداخت",
    content: `مارلو شاپ از درگاه‌های پرداخت معتبر و امن استفاده می‌کند. تمامی تراکنش‌ها از طریق درگاه بانکی رمزگذاری‌شده انجام می‌شوند. در صورت ناموفق بودن پرداخت، مبلغ کسر‌شده ظرف ۷۲ ساعت کاری به حساب شما بازگردانده می‌شود.`,
    items: [
      "پرداخت آنلاین از طریق درگاه بانکی (تمام کارت‌های شتاب)",
      "کارت به کارت (با هماهنگی قبلی)",
      "پرداخت در محل (برای مناطق مشمول)",
      "کیف پول مارلو شاپ",
    ],
  },
  {
    id: "shipping",
    icon: "🚚",
    title: "ارسال و تحویل",
    items: [
      "ارسال به سراسر ایران از طریق پست پیشتاز، اکسپرس و تیپاکس انجام می‌شود.",
      "هزینه ارسال بر اساس وزن، حجم و مقصد محاسبه می‌شود.",
      "سفارش‌ها معمولاً ظرف ۱ تا ۳ روز کاری پس از تأیید سفارش ارسال می‌شوند.",
      "در ایام تعطیل و مناسبت‌های خاص، زمان ارسال ممکن است طولانی‌تر شود.",
      "مارلو شاپ مسئولیت خسارت ناشی از تأخیر شرکت‌های پستی را نمی‌پذیرد.",
      "کد رهگیری مرسوله از طریق پیامک یا ایمیل اطلاع‌رسانی می‌شود.",
    ],
  },
  {
    id: "returns",
    icon: "🔄",
    title: "بازگشت و مرجوعی کالا",
    content: `مارلو شاپ طبق قوانین تجارت الکترونیک ایران، امکان مرجوع کردن کالا را در شرایط خاص فراهم می‌کند:`,
    items: [
      "مشتری تا ۷ روز پس از دریافت کالا حق مرجوعی دارد (در صورت عدم استفاده).",
      "کالا باید در بسته‌بندی اصلی و بدون آسیب‌دیدگی بازگردانده شود.",
      "هزینه ارسال مرجوعی بر عهده مشتری است، مگر در موارد ارسال اشتباه.",
      "پس از تأیید مرجوعی، مبلغ ظرف ۵ روز کاری به حساب مشتری واریز می‌شود.",
      "کالاهای مصرفی، بهداشتی و دیجیتال (پس از باز شدن بسته) قابل مرجوع نیستند.",
      "در صورت معیوب بودن کالا، هزینه ارسال برعکس توسط مارلو شاپ پرداخت می‌شود.",
    ],
  },
  {
    id: "warranty",
    icon: "🛡️",
    title: "ضمانت و گارانتی",
    items: [
      "کالاهای دارای گارانتی، طبق شرایط گارانتی سازنده پشتیبانی می‌شوند.",
      "گارانتی مارلو شاپ شامل نقص‌های ذاتی محصول است نه خرابی ناشی از سوءاستفاده.",
      "شماره سریال و مدارک خرید برای استفاده از گارانتی ضروری است.",
      "محصولات بدون گارانتی تحت پوشش خدمات پس از فروش سازنده هستند.",
    ],
  },
  {
    id: "privacy",
    icon: "🔒",
    title: "حریم خصوصی و امنیت",
    content: `مارلو شاپ به حریم خصوصی کاربران احترام می‌گذارد و اطلاعات شخصی شما را محرمانه نگه می‌دارد:`,
    items: [
      "اطلاعات شخصی شما تنها برای پردازش سفارش و بهبود خدمات استفاده می‌شود.",
      "اطلاعات شما بدون رضایت به اشخاص ثالث فروخته یا واگذار نمی‌شود.",
      "مارلو شاپ از پروتکل SSL برای رمزگذاری اطلاعات استفاده می‌کند.",
      "کاربر حق دارد در هر زمان درخواست حذف اطلاعات خود را ارائه دهد.",
      "تبلیغات و ایمیل‌های بازاریابی با رضایت کاربر ارسال می‌شوند.",
    ],
  },
  {
    id: "intellectual",
    icon: "©️",
    title: "مالکیت معنوی",
    items: [
      "تمامی محتوا، تصاویر، لوگو و برند مارلو شاپ متعلق به این فروشگاه است.",
      "هرگونه کپی‌برداری، توزیع یا استفاده تجاری بدون مجوز ممنوع است.",
      "نظرات و بررسی‌های کاربران پس از ثبت، متعلق به مارلو شاپ محسوب می‌شوند.",
      "استفاده از لوگو و نام تجاری مارلو شاپ برای اهداف تبلیغاتی نیاز به مجوز کتبی دارد.",
    ],
  },
  {
    id: "prohibited",
    icon: "🚫",
    title: "فعالیت‌های ممنوع",
    items: [
      "استفاده از سایت برای فعالیت‌های غیرقانونی یا تقلب‌آمیز",
      "ایجاد حساب‌های جعلی یا ارائه اطلاعات نادرست",
      "تلاش برای دسترسی غیرمجاز به سیستم‌ها یا داده‌های سایت",
      "ارسال اسپم، محتوای مضر یا اخلال در کار سایت",
      "سوءاستفاده از کدهای تخفیف یا برنامه‌های تشویقی",
      "فروش مجدد محصولات بدون مجوز فروشگاه",
    ],
  },
  {
    id: "dispute",
    icon: "⚖️",
    title: "حل اختلاف",
    content: `در صورت بروز هرگونه اختلاف بین کاربر و مارلو شاپ، طرفین ابتدا از طریق مذاکره مستقیم اقدام به رفع اختلاف می‌نمایند. در صورت عدم حل اختلاف، موضوع از طریق سازمان حمایت از مصرف‌کنندگان و یا مراجع قانونی ذی‌صلاح در جمهوری اسلامی ایران پیگیری خواهد شد. قوانین حاکم بر این توافقنامه، قوانین جمهوری اسلامی ایران می‌باشد.`,
  },
  {
    id: "contact",
    icon: "📞",
    title: "تماس با ما",
    content: `در صورت داشتن هرگونه سؤال یا ابهام در مورد قوانین و مقررات، با تیم پشتیبانی مارلو شاپ تماس بگیرید:`,
    items: [
      "ایمیل: support@marloo.shop",
      "وب‌سایت: marloo.shop",
      "ساعات پشتیبانی: شنبه تا پنج‌شنبه، ۹ الی ۱۸",
    ],
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Vazirmatn', sans-serif",
        direction: "rtl",
        background: "linear-gradient(135deg, #fafafa 0%, #f0f4ff 100%)",
      }}
    >
      {/* Toast */}
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #10b981, #059669)",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "1rem",
            boxShadow: "0 8px 32px rgba(16,185,129,0.4)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "0.95rem",
            fontWeight: "600",
            animation: "slideUp 0.4s ease",
          }}
        >
          <span style={{ fontSize: "1.3rem" }}>✅</span>
          موافقت شما با قوانین ثبت شد. از خرید در مارلو شاپ لذت ببرید!
        </div>
      )}

      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
          padding: "0",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 4px 20px rgba(30,27,75,0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                boxShadow: "0 4px 12px rgba(124,58,237,0.4)",
              }}
            >
              🛍️
            </div>
            <div>
              <h1 style={{ color: "white", fontSize: "1.25rem", fontWeight: "700", margin: 0 }}>
                مارلو شاپ
              </h1>
              <p style={{ color: "#c4b5fd", fontSize: "0.75rem", margin: 0 }}>
                فروشگاه اینترنتی
              </p>
            </div>
          </div>
          <a
            href="https://marloo.shop"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "white",
              padding: "0.5rem 1.25rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: "500",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.2s",
              backdropFilter: "blur(4px)",
            }}
          >
            بازگشت به فروشگاه
          </a>
        </div>
      </header>

      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #5b21b6 100%)",
          padding: "4rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(139,92,246,0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "rgba(167,139,250,0.1)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(167,139,250,0.2)",
              border: "1px solid rgba(167,139,250,0.4)",
              borderRadius: "100px",
              padding: "0.4rem 1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ color: "#c4b5fd", fontSize: "0.85rem", fontWeight: "500" }}>
              📋 آخرین بروزرسانی: فروردین ۱۴۰۴
            </span>
          </div>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "800",
              margin: "0 0 1rem",
              lineHeight: "1.3",
            }}
          >
            قوانین و مقررات مارلو شاپ
          </h1>
          <p
            style={{
              color: "#c4b5fd",
              fontSize: "1.05rem",
              lineHeight: "1.8",
              margin: "0 auto",
              maxWidth: "560px",
            }}
          >
            لطفاً پیش از استفاده از خدمات فروشگاه مارلو شاپ، این قوانین را با دقت مطالعه فرمایید.
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
        className="terms-layout"
      >
        {/* Sidebar TOC */}
        <aside
          style={{
            background: "white",
            borderRadius: "1.25rem",
            padding: "1.5rem",
            boxShadow: "0 4px 24px rgba(30,27,75,0.08)",
            position: "sticky",
            top: "80px",
            border: "1px solid #ede9fe",
          }}
        >
          <h3
            style={{
              fontSize: "0.85rem",
              fontWeight: "700",
              color: "#7c3aed",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              margin: "0 0 1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: "2px solid #ede9fe",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            📑 فهرست مطالب
          </h3>
          <nav>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  width: "100%",
                  padding: "0.6rem 0.75rem",
                  marginBottom: "0.25rem",
                  background: activeSection === section.id ? "#ede9fe" : "transparent",
                  color: activeSection === section.id ? "#7c3aed" : "#4b5563",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: activeSection === section.id ? "600" : "400",
                  textAlign: "right",
                  transition: "all 0.2s",
                  fontFamily: "'Vazirmatn', sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section.id) {
                    (e.target as HTMLButtonElement).style.background = "#f5f3ff";
                    (e.target as HTMLButtonElement).style.color = "#7c3aed";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    (e.target as HTMLButtonElement).style.background = "transparent";
                    (e.target as HTMLButtonElement).style.color = "#4b5563";
                  }
                }}
              >
                <span style={{ fontSize: "1rem" }}>{section.icon}</span>
                {section.title}
              </button>
            ))}
          </nav>

          {/* Summary box */}
          <div
            style={{
              marginTop: "1.5rem",
              background: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
              border: "1px solid #ddd6fe",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <p style={{ fontSize: "0.8rem", color: "#6d28d9", margin: 0, lineHeight: "1.7" }}>
              🔐 اطلاعات شما نزد ما <strong>محرمانه</strong> و <strong>امن</strong> است.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          {/* Quick Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              { icon: "🚚", label: "ارسال سریع", value: "سراسر کشور" },
              { icon: "🔄", label: "بازگشت کالا", value: "۷ روز ضمانت" },
              { icon: "🛡️", label: "خرید امن", value: "SSL رمزگذاری" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(30,27,75,0.06)",
                  border: "1px solid #ede9fe",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: "0 0 0.2rem" }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: "0.875rem", color: "#1e1b4b", fontWeight: "700", margin: 0 }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              style={{
                background: "white",
                borderRadius: "1.25rem",
                padding: "2rem",
                marginBottom: "1.5rem",
                boxShadow: "0 4px 24px rgba(30,27,75,0.06)",
                border: "1px solid #ede9fe",
                scrollMarginTop: "90px",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(124,58,237,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 24px rgba(30,27,75,0.06)";
              }}
            >
              {/* Section Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "2px solid #f3f0ff",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {section.icon}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        background: "linear-gradient(135deg, #7c3aed, #4c1d95)",
                        color: "white",
                        width: "24px",
                        height: "24px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </span>
                    <h2
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: "#1e1b4b",
                        margin: 0,
                      }}
                    >
                      {section.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              {section.content && (
                <p
                  style={{
                    color: "#4b5563",
                    lineHeight: "2",
                    fontSize: "0.95rem",
                    marginBottom: section.items ? "1.25rem" : 0,
                    background: "#faf9ff",
                    padding: "1rem 1.25rem",
                    borderRadius: "10px",
                    borderRight: "4px solid #7c3aed",
                  }}
                >
                  {section.content}
                </p>
              )}

              {/* Items */}
              {section.items && (
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        padding: "0.7rem 0",
                        borderBottom:
                          i < section.items!.length - 1 ? "1px solid #f3f4f6" : "none",
                        color: "#374151",
                        fontSize: "0.92rem",
                        lineHeight: "1.7",
                      }}
                    >
                      <span
                        style={{
                          width: "22px",
                          height: "22px",
                          background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M2 5l2.5 2.5L8 3"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Agreement Card */}
          <div
            style={{
              background: agreed
                ? "linear-gradient(135deg, #d1fae5, #a7f3d0)"
                : "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              textAlign: "center",
              boxShadow: agreed
                ? "0 8px 32px rgba(16,185,129,0.2)"
                : "0 8px 32px rgba(30,27,75,0.25)",
              border: agreed ? "2px solid #6ee7b7" : "none",
              transition: "all 0.5s ease",
              marginBottom: "2rem",
            }}
          >
            {agreed ? (
              <>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                <h3
                  style={{
                    color: "#065f46",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    margin: "0 0 0.75rem",
                  }}
                >
                  موافقت شما ثبت شد!
                </h3>
                <p style={{ color: "#047857", margin: "0 0 1.5rem", lineHeight: "1.8" }}>
                  از اینکه قوانین مارلو شاپ را مطالعه کردید سپاسگزاریم. اکنون می‌توانید با خیال
                  آسوده خرید کنید.
                </p>
                <a
                  href="https://marloo.shop/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, #059669, #047857)",
                    color: "white",
                    padding: "0.875rem 2rem",
                    borderRadius: "10px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(5,150,105,0.3)",
                  }}
                >
                  🛒 شروع خرید
                </a>
              </>
            ) : (
              <>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📋</div>
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    margin: "0 0 0.75rem",
                  }}
                >
                  موافقت با قوانین
                </h3>
                <p
                  style={{
                    color: "#c4b5fd",
                    margin: "0 0 1.75rem",
                    lineHeight: "1.8",
                    fontSize: "0.95rem",
                  }}
                >
                  با کلیک روی دکمه زیر، تأیید می‌کنید که قوانین و مقررات مارلو شاپ را مطالعه کرده
                  و با آن‌ها موافقت می‌نمایید.
                </p>
                <button
                  onClick={handleAgree}
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                    color: "white",
                    border: "none",
                    padding: "0.875rem 2.5rem",
                    borderRadius: "10px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
                    fontFamily: "'Vazirmatn', sans-serif",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                    (e.target as HTMLButtonElement).style.boxShadow =
                      "0 8px 24px rgba(124,58,237,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.target as HTMLButtonElement).style.boxShadow =
                      "0 4px 16px rgba(124,58,237,0.4)";
                  }}
                >
                  ✅ قوانین را مطالعه کردم و موافقم
                </button>
              </>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
          padding: "2.5rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🛍️</span>
            <span style={{ color: "white", fontSize: "1.1rem", fontWeight: "700" }}>
              مارلو شاپ
            </span>
          </div>
          <p style={{ color: "#a78bfa", fontSize: "0.875rem", margin: "0 0 1rem" }}>
            خرید آسان، سریع و مطمئن
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            {["قوانین و مقررات", "حریم خصوصی", "تماس با ما", "راهنمای خرید"].map((link) => (
              <a
                key={link}
                href="https://marloo.shop"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#c4b5fd",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link}
              </a>
            ))}
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "1.25rem",
            }}
          >
            <p style={{ color: "#6d6a9e", fontSize: "0.8rem", margin: 0 }}>
              © ۱۴۰۴ مارلو شاپ — تمامی حقوق محفوظ است
            </p>
          </div>
        </div>
      </footer>

      {/* Responsive CSS */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 900px) {
          .terms-layout {
            grid-template-columns: 1fr !important;
          }
          aside {
            position: static !important;
          }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 3px; }
      `}</style>
    </div>
  );
}
