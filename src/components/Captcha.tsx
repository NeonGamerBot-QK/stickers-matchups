import HCaptcha from "@hcaptcha/react-hcaptcha";
export default function Captcha({
  onVerify,
}: {
  onVerify: (token: string) => void;
}) {
  return (
    <HCaptcha
      sitekey={process.env.REACT_APP_HCAPTCHA_SITE_KEY!}
      onVerify={onVerify}
    />
  );
}
