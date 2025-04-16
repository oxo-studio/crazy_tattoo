// src/components/Seo.jsx
import { Helmet } from "react-helmet";

export default function Seo() {
  return (
    <Helmet>
      <html lang="it" />
      <title>Crazy n'Tina Tattoo | Studio Tattoo La Spezia & Cinque Terre</title>

      <meta
        name="description"
        content="Crazy n'Tina Tattoo è uno studio professionale tra La Spezia e le Cinque Terre. Tattoo personalizzati, cover-up e piercing in un ambiente sicuro e creativo."
      />
      <meta
        name="keywords"
        content="tattoo la spezia, studio tatuaggi cinque terre, crazyntinatattoo, tatuaggi liguria, tatuaggi personalizzati, cover up, piercing la spezia"
      />
      <meta name="author" content="Crazy n'Tina Tattoo" />

      {/* Open Graph (per social preview) */}
      <meta property="og:title" content="Crazy n'Tina Tattoo | Studio Tattoo La Spezia & Cinque Terre" />
      <meta
        property="og:description"
        content="Tatuaggi artistici e professionali in Liguria. Crazy n'Tina Tattoo è lo studio di riferimento per chi cerca qualità e passione nel mondo del tattoo."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.crazyntinatattoo.it" />
      <meta property="og:image" content="https://www.crazyntinatattoo.it/assets/og-image.jpg" />

      {/* SEO tecnica */}
      <link rel="canonical" href="https://www.crazyntinatattoo.it" />
    </Helmet>
  );
}
