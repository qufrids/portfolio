import { siteConfig } from "@/data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Name and copyright */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono text-foreground-subtle">
            © {currentYear} {siteConfig.name}
          </span>
        </div>

        {/* Right - Status and location */}
        <div className="flex items-center gap-6 text-sm font-mono text-foreground-subtle">
          <span>{siteConfig.location}</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-active rounded-full" />
            <span>{siteConfig.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
