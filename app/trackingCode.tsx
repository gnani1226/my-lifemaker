import Script from "next/script";

function TrackingCode() {
  return (
   <>
  {/* Global site tag (gtag.js) - Google Analytics */}
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-TEVE9RSR1R" />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GOOGLEID');
  `}
  </Script>
  <Script>
{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1017319839697198');
fbq('track', 'PageView');`}
</Script>
<noscript><img height="1" width="1" style={{display:'none'}}
src="https://www.facebook.com/tr?id=1017319839697198&ev=PageView&noscript=1"
/></noscript>
</>
 );
}

export default TrackingCode;