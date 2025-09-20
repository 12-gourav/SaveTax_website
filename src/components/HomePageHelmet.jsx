import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePageHelmet = () => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          SaveTax India - Expert Tax Consulting Services | ITR, GST & Financial
          Planning
        </title>
        <meta
          name="description"
          content="SaveTax India offers professional tax consulting services including income tax filing, GST registration, TDS returns, and financial planning for individuals & businesses. Maximize deductions, stay compliant, and save tax!"
        />
        <meta
          name="keywords"
          content="tax consultant India, income tax filing, GST registration, TDS returns, tax planning India, financial planning, tax advisory, corporate tax services, online tax filing"
        />
        <meta name="author" content="SaveTax India" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="SaveTax India - Professional Tax Consulting Services"
        />
        <meta
          property="og:description"
          content="Get expert help with income tax filing, GST registration, TDS returns & financial planning. SaveTax India ensures compliance, maximizes deductions, and helps you save tax."
        />
        <meta
          property="og:image"
          content="https://savetaxindia.com/assets/b2-CxrNZV6L.jpg"
        />
        <meta property="og:url" content="https://savetaxindia.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SaveTax India - Expert Tax Consulting Services"
        />
        <meta
          name="twitter:description"
          content="Professional tax consulting services including ITR filing, GST registration, TDS returns & financial planning. SaveTax India helps individuals & businesses save tax and stay compliant."
        />
        <meta
          name="twitter:image"
          content="https://savetaxindia.com/assets/b2-CxrNZV6L.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://savetaxindia.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    </HelmetProvider>
  );
};

export default HomePageHelmet;
