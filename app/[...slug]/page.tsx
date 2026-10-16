import InnerPage from "../../components/inner-page";

export function generateStaticParams() {
  return [
    { slug: ["o-kompanii"] },
    { slug: ["o-kompanii", "obrashchenie-osnovatelya"] },
    { slug: ["o-kompanii", "missiya-i-cennosti"] },
    { slug: ["filosofiya-kofe"] },
    { slug: ["katalog"] },
    { slug: ["katalog", "rastvorimyj-kofe"] },
    { slug: ["katalog", "molotyj-kofe"] },
    { slug: ["katalog", "kofe-v-zernah"] },
    { slug: ["novosti"] },
    { slug: ["dlya-partnerov"] },
    { slug: ["partneram"] },
    { slug: ["kontakty"] },
  ];
}

export default function Page() {
  return <InnerPage />;
}
