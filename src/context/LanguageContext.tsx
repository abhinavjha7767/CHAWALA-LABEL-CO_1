import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

type Language = "en" | "ja";

interface Translations {
  // Navbar
  nav: {
    gallery: string;
    about: string;
    blog: string;
    faqs: string;
    contact: string;
  };
  // Hero
  hero: {
    badge: string;
    heading: string;
    typeLabels: string[];
    subtext: string;
    getQuote: string;
    viewGallery: string;
    bulkOrders: string;
    customDesigns: string;
    fastShipping: string;
  };
  // About
  about: {
    heading: string;
    brand: string;
    desc1: string;
    desc2: string;
    yearsExperience: string;
    happyClients: string;
    labelsDelivered: string;
  };
  // Features
  features: {
    items: {
      title: string;
      description: string;
    }[];
  };
  // Products
  products: {
    heading: string;
    subtext: string;
    clickPreview: string;
  };
  // Blog
  blog: {
    heading: string;
    highlight: string;
    subtext: string;
    readArticle: string;
    dates: string[];
    authors: string[];
    posts: {
      title: string;
      excerpt: string;
      category: string;
    }[];
  };
  // FAQ
  faq: {
    support: string;
    heading: string;
    highlight: string;
    subtext: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  // Contact
  contact: {
    heading: string;
    highlight: string;
    subtext: string;
    sendMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    company: string;
    companyPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sendButton: string;
    contactInfo: string;
    businessHours: string;
    monFri: string;
    saturday: string;
    sunday: string;
    closed: string;
    phone: string;
    email: string;
    address: string;
    addressLines: string[];
    name: string;
  };
  // Footer
  footer: {
    tagline: string;
    products: string;
    company: string;
    support: string;
    certifiedBy: string;
    companyName: string;
    copyright: string;
    by: string;
    links: {
      products: { label: string }[];
      company: { label: string }[];
      support: { label: string }[];
    };
  };
}

const en: Translations = {
  nav: {
    gallery: "Gallery",
    about: "About Us",
    blog: "Blog",
    faqs: "FAQS",
    contact: "Contact Us",
  },
  hero: {
    badge: "Premium Quality Printing Since 1974",
    heading: "Elevate Your Brand with",
    typeLabels: ["Labels", "Stickers", "Tags"],
    subtext:
      "From high-quality clothing tags to bespoke labels. We craft the professional finish your products deserve. Fast turnaround, premium materials.",
    getQuote: "Get a Quote",
    viewGallery: "View Gallery",
    bulkOrders: "Bulk Orders",
    customDesigns: "Custom Designs",
    fastShipping: "Fast Shipping",
  },
  about: {
    heading: "All About the",
    brand: "Brand",
    desc1:
      "is a leading name in the garment and textile industry, specializing in high-quality tags and labels. For years, we have served businesses across various sectors, providing custom solutions that meet their unique branding needs.",
    desc2:
      "Our commitment to excellence, state-of-the-art technology, and a dedicated team of professionals ensures that every product we deliver is of the highest standard. We believe in building lasting partnerships with our clients by offering reliable, efficient, and creative printing services.",
    yearsExperience: "Years Experience",
    happyClients: "Happy Clients",
    labelsDelivered: "Labels Delivered",
  },
  features: {
    items: [
      {
        title: "Best Service",
        description:
          "We provide one-on-one professional service and inform via Email or WhatsApp. also we have professional presales and aftersales services.",
      },
      {
        title: "Competitive Price",
        description:
          "We are a manufacturer and supplier from China, so we are able to give the advantage.",
      },
      {
        title: "High Efficiency",
        description:
          "With ten years experience, we can quickly provide you best customized solutions, saving your time. Production time of the most products is 10-15 business days.",
      },
      {
        title: "Quality Guarantee",
        description:
          "No matter material or process, we can produce based on your requirements. We will manually check each order to ensure products quality.",
      },
      {
        title: "Low MOQ",
        description:
          "A few? Or tens of thousands? We at the same time meet the customization needs of large and small businesses.",
      },
      {
        title: "Free Design",
        description:
          "Need a new design? Our professional designers have rich experience in tags, logo design, etc., and can provide free design and 3D draft.",
      },
    ],
  },
  products: {
    heading: "Our Gallery",
    subtext:
      "High quality tags and labels include hang tags, hang tag strings, buttons, woven labels, printed labels, metal tags, leather labels, stickers, embroidered patches, woven patches, TPU labels, PVC labels, zipper puller, webbing, etc.",
    clickPreview: "Click to preview",
  },
  blog: {
    heading: "Latest",
    highlight: "Insights",
    subtext: "Updates, trends, and guides from the world of premium branding.",
    readArticle: "Read Article",
    dates: ["Feb 15, 2024", "Feb 5, 2024", "Jan 28, 2024"],
    authors: ["Design Team", "Production Manager", "Lead Weaver"],
    posts: [
      {
        title: "The Importance of Custom Branding for Apparel",
        excerpt:
          "Discover why high-quality labels and tags are crucial for establishing your clothing brand's identity in a competitive market.",
        category: "Branding",
      },
      {
        title: "Choosing the Right Label Material",
        excerpt:
          "A comprehensive guide to selecting the perfect material for your woven and printed labels based on fabric type and durability.",
        category: "Guide",
      },
      {
        title: "The Art of Woven Labels",
        excerpt:
          "Dive into the intricate world of woven labels. Learn about the craftsmanship and detail that goes into creating premium brand identifiers.",
        category: "Craftsmanship",
      },
    ],
  },
  faq: {
    support: "Support",
    heading: "Frequently Asked",
    highlight: "Questions",
    subtext:
      "Everything you need to know about our products, production process, and shipping. Can't find the answer you're looking for? Feel free to contact our support team.",
    items: [
      {
        question: "What is your minimum order quantity (MOQ)?",
        answer:
          "Our MOQ typically starts at 100 pieces for most labels and tags. However, for specialized items, the MOQ might vary. Please contact us with your specific requirements for a precise quote.",
      },
      {
        question: "What is your standard turnaround time?",
        answer:
          "Standard production time is generally 7-10 business days after artwork approval. Shipping times vary based on your location. We also offer expedited options if you have a tight deadline.",
      },
      {
        question: "Can I get a sample before placing a full order?",
        answer:
          "Yes! We can provide digital proofs for approval before production begins. Physical samples of your specific design can also be produced for a nominal sampling fee, which is often credited towards the bulk order.",
      },
      {
        question: "Do you offer design services?",
        answer:
          "Absolutely. Our in-house design team can help bring your vision to life. Whether you need minor adjustments to an existing logo or a complete brand identity design from scratch, we're here to help.",
      },
      {
        question: "What file formats do you accept for artwork?",
        answer:
          "We prefer vector files (AI, EPS, PDF, or SVG) to ensure the highest print quality. High-resolution raster images (PNG, JPG) at 300 DPI or higher are also acceptable for certain products.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship worldwide! We work with reliable logistics partners to ensure your products reach you safely and on time, no matter where you are located.",
      },
    ],
  },
  contact: {
    heading: "Let's Work",
    highlight: "Together",
    subtext: "Ready to elevate your brand? Get in touch with us today.",
    sendMessage: "Send us a message",
    name: "Name",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    company: "Company",
    companyPlaceholder: "Your company name",
    message: "Message",
    messagePlaceholder: "Tell us about your project...",
    sendButton: "Send Message",
    contactInfo: "Contact Information",
    businessHours: "Business Hours",
    monFri: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    phone: "Phone",
    email: "Email",
    address: "Address",
    addressLines: ["9986, SARAI ROHILLA", "NEW ROHTAK ROAD, NEW DELHI-110005"],
  },
  footer: {
    tagline:
      "Premium branding solutions for the fashion industry. Elevate your brand with custom labels, tags, and stickers.",
    products: "Products",
    company: "Company",
    support: "Support",
    certifiedBy: "Certified By",
    companyName: "AS PRINTERS",
    copyright: "AS PRINTERS. All rights reserved. By",
    by: "WeGrow Consultancy and Solution",
    links: {
      products: [
        { label: "Hang Tags" },
        { label: "Woven Labels" },
        { label: "Printed Labels" },
      ],
      company: [
        { label: "About Us" },
        { label: "Why Choose Us" },
        { label: "Blog" },
      ],
      support: [{ label: "FAQs" }, { label: "Contact" }],
    },
  },
};

const ja: Translations = {
  nav: {
    gallery: "ギャラリー",
    about: "会社概要",
    blog: "ブログ",
    faqs: "よくある質問",
    contact: "お問い合わせ",
  },
  hero: {
    badge: "1974年以来のプレミアム品質印刷",
    heading: "ブランドを高める",
    typeLabels: ["ラベル", "ステッカー", "タグ"],
    subtext:
      "高品質の衣料品タグからオーダーメイドラベルまで。製品にふさわしいプロの仕上がりをお届けします。迅速な対応、プレミアム素材。",
    getQuote: "見積もりを取得",
    viewGallery: "ギャラリーを見る",
    bulkOrders: "大量注文",
    customDesigns: "カスタムデザイン",
    fastShipping: "迅速な配送",
  },
  about: {
    heading: "ブランドについて",
    brand: "",
    desc1:
      "は衣料品・繊維業界をリードする企業であり、高品質のタグおよびラベルを専門としています。長年にわたり、様々な分野の企業にカスタムソリューションを提供してきました。",
    desc2:
      "卓越性へのこだわり、最先端技術、そして専門家チームにより、お届けするすべての製品で最高水準を維持しています。信頼性が高く、効率的で創造的な印刷サービスを通じて、お客様との長期的なパートナーシップを築くことを大切にしています。",
    yearsExperience: "年の経験",
    happyClients: "満足のお客様",
    labelsDelivered: "納品済みラベル",
  },
  features: {
    items: [
      {
        title: "最高のサービス",
        description:
          "メールやWhatsAppで個別に対応します。また、プロの販売前・販売後サポートも提供しています。",
      },
      {
        title: "競争力のある価格",
        description:
          "メーカー兼サプライヤーとして、お客様に有利な価格を提供できます。",
      },
      {
        title: "高い効率性",
        description:
          "10年以上の経験により、最適なカスタムソリューションを迅速に提案します。多くの製品の製造期間は10〜15営業日です。",
      },
      {
        title: "品質保証",
        description:
          "素材や加工を問わず、ご要望に応じた生産が可能です。すべての注文を手作業でチェックし、品質を確保します。",
      },
      {
        title: "低最低注文数量",
        description:
          "少量から数万個まで、大小問わずあらゆるビジネスのカスタマイズニーズに対応します。",
      },
      {
        title: "無料デザイン",
        description:
          "新しいデザインが必要ですか？タグやロゴデザインに豊富な経験を持つプロのデザイナーが無料でデザインと3Dドラフトを提供します。",
      },
    ],
  },
  products: {
    heading: "ギャラリー",
    subtext:
      "高品質のタグとラベルには、ハングタグ、ハングタグストリング、ボタン、織りラベル、プリントラベル、金属タグ、レザーラベル、ステッカー、刺繍パッチ、TPUラベル、PVCラベル、ジッパープラー、ウェビングなどが含まれます。",
    clickPreview: "クリックしてプレビュー",
  },
  blog: {
    heading: "最新の",
    highlight: "インサイト",
    subtext: "プレミアムブランディングの世界からの最新情報、トレンド、ガイド。",
    readArticle: "記事を読む",
    dates: ["2024年2月15日", "2024年2月5日", "2024年1月28日"],
    authors: ["デザインチーム", "製造マネージャー", "ウィービング主任"],
    posts: [
      {
        title: "アパレルにおけるカスタムブランディングの重要性",
        excerpt:
          "競争の激しい市場において、高品質のラベルとタグがブランドアイデンティティの確立にいかに重要かを探ります。",
        category: "ブランディング",
      },
      {
        title: "適切なラベル素材の選び方",
        excerpt:
          "生地の種類と耐久性に基づいて、織りラベルおよびプリントラベルに最適な素材を選ぶための総合ガイド。",
        category: "ガイド",
      },
      {
        title: "織りラベルのアート",
        excerpt:
          "織りラベルの複雑な世界に飛び込みましょう。プレミアムブランド識別子を作るための職人技と細部へのこだわりを学びます。",
        category: "職人技",
      },
    ],
  },
  faq: {
    support: "サポート",
    heading: "よくある",
    highlight: "質問",
    subtext:
      "製品、製造プロセス、配送についてのあらゆる情報。お探しの回答が見つからない場合は、サポートチームまでお気軽にお問い合わせください。",
    items: [
      {
        question: "最小注文数量（MOQ）はいくつですか？",
        answer:
          "ほとんどのラベルやタグのMOQは通常100個からです。ただし、特殊なアイテムの場合はMOQが異なる場合があります。正確な見積もりのために、具体的なご要望をお知らせください。",
      },
      {
        question: "標準的な納期はどのくらいですか？",
        answer:
          "アートワーク承認後の標準製造期間は通常7〜10営業日です。配送時間はお客様の場所によって異なります。締め切りが迫っている場合は、特急オプションも提供しています。",
      },
      {
        question: "全量注文前にサンプルを取得できますか？",
        answer:
          "はい！製造開始前にデジタル校正をご提供します。お客様固有のデザインの実物サンプルも、少額のサンプリング料金で製造できます。この料金は多くの場合、大量注文に充当されます。",
      },
      {
        question: "デザインサービスを提供していますか？",
        answer:
          "もちろんです。社内のデザインチームがビジョンの実現をサポートします。既存ロゴの微調整から、ゼロからの完全なブランドアイデンティティデザインまで、お手伝いします。",
      },
      {
        question: "アートワークはどのようなファイル形式を受け付けていますか？",
        answer:
          "最高の印刷品質を確保するためにベクターファイル（AI、EPS、PDF、SVG）を推奨します。300DPI以上の高解像度ラスター画像（PNG、JPG）も一部製品に対して受け付けています。",
      },
      {
        question: "国際配送はできますか？",
        answer:
          "はい、世界中に配送します！信頼できる物流パートナーと協力して、お客様がどこにいても安全かつ時間通りに製品をお届けします。",
      },
    ],
  },
  contact: {
    heading: "一緒に",
    highlight: "働きましょう",
    subtext:
      "ブランドを高める準備はできていますか？今すぐお問い合わせください。",
    sendMessage: "メッセージを送る",
    name: "お名前",
    namePlaceholder: "お名前を入力",
    emailPlaceholder: "メールアドレス",
    company: "会社名",
    companyPlaceholder: "会社名を入力",
    message: "メッセージ",
    messagePlaceholder: "プロジェクトについてお聞かせください...",
    sendButton: "送信する",
    contactInfo: "連絡先情報",
    businessHours: "営業時間",
    monFri: "月曜日〜金曜日",
    saturday: "土曜日",
    sunday: "日曜日",
    closed: "休業",
    phone: "電話",
    email: "メール",
    address: "住所",
    addressLines: [
      "9986番、サライ・ロヒッラ",
      "ニュー・ロータック・ロード、ニューデリー-110005",
    ],
  },
  footer: {
    tagline:
      "ファッション業界向けのプレミアムブランディングソリューション。カスタムラベル、タグ、ステッカーでブランドを高めましょう。",
    products: "製品",
    company: "会社情報",
    support: "サポート",
    certifiedBy: "認定機関",
    companyName: "ASプリンターズ",
    copyright: "ASプリンターズ. 全著作権所有. By",
    by: "WeGrow コンサルタンシー・アンド・ソリューション",
    links: {
      products: [
        { label: "衣料品タグ" },
        { label: "バーコードラベル" },
        { label: "カスタムステッカー" },
      ],
      company: [
        { label: "会社概要" },
        { label: "選ばれる理由" },
        { label: "ブログ" },
      ],
      support: [{ label: "よくある質問" }, { label: "お問い合わせ" }],
    },
  },
};

export const translations = { en, ja };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => setLang(lang), []);
  const t = useMemo(() => translations[language], [language]);
  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
