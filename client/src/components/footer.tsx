import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="w-full py-6 mt-12 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
