import { Button } from "@/src/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/shared/components/ui/card";
import { Badge } from "@/src/shared/components/ui/badge";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/shared/components/ui/alert";
import { StyleGuideHeader } from "@/src/modules/style-guide/components/style-guide-header";
import { RadioGroupComponent } from "@/src/modules/style-guide/components/radio-group-component";

const PRIMARY_SCALE = [
  { step: "50", hex: "#f5f5ff", textDark: true },
  { step: "100", hex: "#ebebfe", textDark: true },
  { step: "200", hex: "#c3c4ff", textDark: true },
  { step: "300", hex: "#9b9cff", textDark: true },
  { step: "400", hex: "#4848fc", textDark: false },
  { step: "500", hex: "#4848fc", textDark: false },
  { step: "600", hex: "#4122fb", textDark: false },
  { step: "700", hex: "#4040e7", textDark: false },
  { step: "800", hex: "#2009a5", textDark: false },
  { step: "900", hex: "#0020d9", textDark: false },
];

const NEUTRAL_SCALE = [
  { step: "50", hex: "#f9fafb", textDark: true },
  { step: "100", hex: "#f3f4f6", textDark: true },
  { step: "200", hex: "#e5e7eb", textDark: true },
  { step: "300", hex: "#d1d5db", textDark: true },
  { step: "400", hex: "#9ca3af", textDark: true },
  { step: "500", hex: "#6b7280", textDark: false },
  { step: "600", hex: "#4b5563", textDark: false },
  { step: "700", hex: "#374151", textDark: false },
  { step: "800", hex: "#1f2937", textDark: false },
  { step: "900", hex: "#111827", textDark: false },
];

const SUCCESS_SCALE = [
  { step: "50", hex: "#f0fdf4", textDark: true },
  { step: "100", hex: "#dcfce7", textDark: true },
  { step: "200", hex: "#bbf7d0", textDark: true },
  { step: "300", hex: "#86efac", textDark: true },
  { step: "400", hex: "#4ade80", textDark: true },
  { step: "500", hex: "#22c55e", textDark: false },
  { step: "600", hex: "#16a34a", textDark: false },
  { step: "700", hex: "#15803d", textDark: false },
  { step: "800", hex: "#166534", textDark: false },
  { step: "900", hex: "#14532d", textDark: false },
];

const WARNING_SCALE = [
  { step: "50", hex: "#fffbeb", textDark: true },
  { step: "100", hex: "#fef3c7", textDark: true },
  { step: "200", hex: "#fde68a", textDark: true },
  { step: "300", hex: "#fcd34d", textDark: true },
  { step: "400", hex: "#fbbf24", textDark: true },
  { step: "500", hex: "#f59e07", textDark: true },
  { step: "600", hex: "#d97706", textDark: false },
  { step: "700", hex: "#b45309", textDark: false },
  { step: "800", hex: "#92400e", textDark: false },
  { step: "900", hex: "#78350f", textDark: false },
];

const DESTRUCTIVE_SCALE = [
  { step: "50", hex: "#fef2f2", textDark: true },
  { step: "100", hex: "#fee2e2", textDark: true },
  { step: "200", hex: "#fecaca", textDark: true },
  { step: "300", hex: "#f5a3a3", textDark: true },
  { step: "400", hex: "#f07171", textDark: false },
  { step: "500", hex: "#ef4343", textDark: false },
  { step: "600", hex: "#dc2626", textDark: false },
  { step: "700", hex: "#b91c1c", textDark: false },
  { step: "800", hex: "#991b1b", textDark: false },
  { step: "900", hex: "#7f1d1d", textDark: false },
];

const SEMANTIC_COLORS = [
  { name: "Primary", var: "--primary", hex: "#4848fc", textDark: false },
  { name: "Secondary", var: "--secondary", hex: "#f4f4f8", textDark: true },
  { name: "Muted", var: "--muted", hex: "#f4f4f8", textDark: true },
  { name: "Accent", var: "--accent", hex: "#f4f4f8", textDark: true },
  {
    name: "Destructive",
    var: "--destructive",
    hex: "#ef4343",
    textDark: false,
  },
  { name: "Success", var: "--success", hex: "#22c55e", textDark: false },
  { name: "Warning", var: "--warning", hex: "#f59e07", textDark: true },
  { name: "Info", var: "--info", hex: "#3b82f6", textDark: false },
];

const RADIUS_SAMPLES = [
  { name: "sm", value: "0.25rem (4px)", cls: "rounded-sm" },
  { name: "md", value: "0.5rem (8px)", cls: "rounded-md" },
  { name: "lg", value: "0.75rem (12px)", cls: "rounded-lg" },
  { name: "xl", value: "1rem (16px)", cls: "rounded-xl" },
  { name: "2xl", value: "1.5rem (24px)", cls: "rounded-2xl" },
  { name: "full", value: "9999px", cls: "rounded-full" },
];

const SHADOW_SAMPLES = [
  { name: "sm", cls: "shadow-sm" },
  { name: "base", cls: "shadow" },
  { name: "md", cls: "shadow-md" },
  { name: "lg", cls: "shadow-lg" },
  { name: "xl", cls: "shadow-xl" },
];

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Divider() {
  return <hr className="border-border my-10" />;
}

function ColorScale({
  label,
  description,
  scale,
}: {
  label: string;
  description?: string;
  scale: typeof PRIMARY_SCALE;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground mb-1">{label}</p>
      {description && (
        <p className="text-xs text-muted-foreground mb-3">{description}</p>
      )}
      <div className="flex rounded-lg overflow-hidden border border-border">
        {scale.map((s) => (
          <div
            key={s.step}
            className="flex-1 flex flex-col items-center py-3 gap-1"
            style={{ background: s.hex }}
          >
            <span
              className="text-[10px] font-semibold"
              style={{ color: s.textDark ? "#374151" : "#ffffff" }}
            >
              {s.step}
            </span>
            <span
              className="text-[9px] font-mono hidden lg:block"
              style={{
                color: s.textDark ? "#6b7280" : "rgba(255,255,255,0.7)",
              }}
            >
              {s.hex}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-background">
      <StyleGuideHeader />
      <div className="px-8 py-10 max-w-5xl mx-auto space-y-0">
        <SectionHeader
          title="Semantic Colors"
          description="Semantic roles mapped to CSS variables. These are used throughout all components."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {SEMANTIC_COLORS.map((c) => (
            <div
              key={c.name}
              className="rounded-lg overflow-hidden border border-border"
            >
              <div
                className="h-16 flex items-end px-3 pb-2"
                style={{ background: c.hex }}
              >
                <span
                  className="text-xs font-mono font-semibold"
                  style={{ color: c.textDark ? "#374151" : "#ffffff" }}
                >
                  {c.hex}
                </span>
              </div>
              <div className="px-3 py-2 bg-card">
                <p className="text-xs font-semibold text-foreground">
                  {c.name}
                </p>
                <p className="text-[10px] font-mono text-muted-foreground">
                  {c.var}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        <SectionHeader
          title="Color Scales"
          description="Full 50–900 scales for each color family."
        />
        <div className="space-y-6">
          <ColorScale
            label="Primary — Indigo/Blue"
            description="Main brand color. Used for CTAs, links, inputs, active states."
            scale={PRIMARY_SCALE}
          />
          <ColorScale
            label="Neutral — Cool Gray"
            description="Backgrounds, borders, text. Foundation of every layout."
            scale={NEUTRAL_SCALE}
          />
          <ColorScale
            label="Success — Green"
            description="Positive outcomes, confirmations, completed states."
            scale={SUCCESS_SCALE}
          />
          <ColorScale
            label="Warning — Amber"
            description="Caution states, pending actions, warnings."
            scale={WARNING_SCALE}
          />
          <ColorScale
            label="Destructive — Red"
            description="Errors, delete actions, critical alerts."
            scale={DESTRUCTIVE_SCALE}
          />
        </div>

        <Divider />

        <SectionHeader
          title="Typography"
          description="Type scale using fluid sizing. Font: Geist / Inter."
        />
        <div className="space-y-4 p-6 rounded-xl bg-card border border-border">
          <div>
            <p className="text-[10px] font-mono text-muted-foreground mb-1">
              text-4xl · font-bold
            </p>
            <p className="text-4xl font-bold text-foreground">
              Heading One — Display
            </p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted-foreground mb-1">
              text-3xl · font-bold
            </p>
            <p className="text-3xl font-bold text-foreground">
              Heading Two — Section
            </p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted-foreground mb-1">
              text-2xl · font-semibold
            </p>
            <p className="text-2xl font-semibold text-foreground">
              Heading Three — Subsection
            </p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted-foreground mb-1">
              text-xl · font-semibold
            </p>
            <p className="text-xl font-semibold text-foreground">
              Heading Four — Card Title
            </p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted-foreground mb-1">
              text-base · font-normal
            </p>
            <p className="text-base text-foreground">
              Body text — regular. The quick brown fox jumps over the lazy dog.
              Used for paragraphs, descriptions, and general content throughout
              the interface.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted-foreground mb-1">
              text-sm · font-normal
            </p>
            <p className="text-sm text-muted-foreground">
              Small text — muted. Supporting labels, captions, metadata,
              secondary descriptions.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted-foreground mb-1">
              text-xs · font-mono
            </p>
            <p className="text-xs font-mono text-muted-foreground">
              Monospace — code, IDs, hex values, technical strings.
            </p>
          </div>
        </div>

        <Divider />

        <SectionHeader
          title="Border Radius"
          description="Consistent rounding across surfaces."
        />
        <div className="flex flex-wrap gap-4">
          {RADIUS_SAMPLES.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className={`w-16 h-16 bg-primary/15 border-2 border-primary ${r.cls}`}
              />
              <div className="text-center">
                <p className="text-xs font-semibold text-foreground">
                  {r.name}
                </p>
                <p className="text-[10px] text-muted-foreground">{r.value}</p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        <SectionHeader
          title="Shadows"
          description="Elevation levels for cards, popovers, and modals."
        />
        <div className="flex flex-wrap gap-6">
          {SHADOW_SAMPLES.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-3">
              <div
                className={`w-24 h-16 rounded-lg bg-card border border-border/50 ${s.cls}`}
              />
              <p className="text-xs font-semibold text-foreground">{s.name}</p>
            </div>
          ))}
        </div>

        <Divider />

        <SectionHeader
          title="Components"
          description="shadcn/ui components using the extracted tokens."
        />

        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-4">Button</p>
          <div className="flex flex-wrap gap-3 p-6 rounded-xl bg-card border border-border">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button variant="default" size="sm">
              Small
            </Button>
            <Button variant="default" size="lg">
              Large
            </Button>
            <Button variant="default" disabled>
              Disabled
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-4">Badge</p>
          <div className="flex flex-wrap gap-3 p-6 rounded-xl bg-card border border-border">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge
              style={{
                background: "var(--success)",
                color: "var(--success-foreground)",
              }}
            >
              Success
            </Badge>
            <Badge
              style={{
                background: "var(--warning)",
                color: "var(--warning-foreground)",
              }}
            >
              Warning
            </Badge>
            <Badge
              style={{
                background: "var(--info)",
                color: "var(--info-foreground)",
              }}
            >
              Info
            </Badge>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-4">Alert</p>
          <div className="space-y-3 p-6 rounded-xl bg-card border border-border">
            <Alert>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default informational alert message.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
            <Alert
              style={{
                borderColor: "var(--success)",
                background: "var(--success-50)",
                color: "var(--success-900)",
              }}
            >
              <AlertTitle style={{ color: "var(--success-700)" }}>
                Success
              </AlertTitle>
              <AlertDescription style={{ color: "var(--success-600)" }}>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
            <Alert
              style={{
                borderColor: "var(--warning)",
                background: "var(--warning-50)",
                color: "var(--warning-900)",
              }}
            >
              <AlertTitle style={{ color: "var(--warning-700)" }}>
                Warning
              </AlertTitle>
              <AlertDescription style={{ color: "var(--warning-600)" }}>
                This action may have unintended side effects.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-4">Card</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Basic Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A default card with a title and body content.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-base text-primary">
                  Primary Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A card with a primary accent border.
                </p>
                <Button size="sm" className="mt-4">
                  Action
                </Button>
              </CardContent>
            </Card>
            <Card
              style={{
                background: "var(--primary-50)",
                borderColor: "var(--primary-200)",
              }}
            >
              <CardHeader>
                <CardTitle
                  className="text-base"
                  style={{ color: "var(--primary-700)" }}
                >
                  Tinted Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm" style={{ color: "var(--primary-600)" }}>
                  Card using primary-50 as background tint.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-4">
            Radio Group
          </p>
          <div className="p-6 rounded-xl bg-card border border-border">
            <RadioGroupComponent />
          </div>
        </div>

        <Divider />

        <SectionHeader
          title="Chart Colors"
          description="Five visually distinct colors for data visualization."
        />
        <div className="flex gap-3 flex-wrap">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 rounded-xl border border-border"
                style={{ background: `var(--chart-${n})` }}
              />
              <p className="text-xs font-mono text-muted-foreground">
                chart-{n}
              </p>
            </div>
          ))}
        </div>

        <div className="h-16" />
      </div>
    </div>
  );
}
