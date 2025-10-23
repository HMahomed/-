import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScanLine, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <ScanLine className="h-10 w-10 text-primary" />,
    title: "Comprehensive Data Ingestion",
    description:
      "Secure 360 seamlessly integrates with all your existing security tools and logs, collecting data in real-time to build a complete picture of your environment.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "AI-Powered Threat Analysis",
    description:
      "Our proprietary AI model analyzes incoming data, identifying patterns and correlating events to distinguish real threats from noise with unparalleled accuracy.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Actionable, Prioritized Alerts",
    description:
      "Forget alert fatigue. You receive a curated list of high-priority security incidents, complete with context and actionable recommendations for swift remediation.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-background py-20 md:py-32">
      <div className="container max-w-7xl space-y-16">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            How Our AI Scoring Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We transform a flood of security data into a clear, prioritized
            action plan in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transform-gpu bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
                <CardDescription className="pt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
