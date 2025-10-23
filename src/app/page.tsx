"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ScanLine,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import placeholderImageData from "@/lib/placeholder-images.json";
import { Label } from "@/components/ui/label";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold">Secure 360</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="#features"
            className="transition-colors hover:text-foreground/80"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background py-20 md:py-32"
    >
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Proactive Security,
              <br />
              <span className="text-primary">Intelligently Prioritized.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Secure 360 uses cutting-edge AI to analyze and prioritize
              security threats, so you can focus on what matters most. Stop
              drowning in alerts and start taking decisive action.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Request a Demo <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="group relative flex h-[400px] items-center justify-center [perspective:1000px]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-30 blur-2xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-3xl"></div>
            <Card className="relative h-full w-full transform-gpu transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)_rotateX(5deg)]">
              <CardContent className="relative flex h-full w-full flex-col justify-between p-4 [transform-style:preserve-3d] [transform:translateZ(40px)]">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary">Live Dashboard</Badge>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-md bg-card-foreground/5 p-2 transition-all duration-300 group-hover:bg-card-foreground/10">
                    <p className="text-sm font-medium">
                      Critical Alert: API Gateway
                    </p>
                    <Badge variant="destructive">High Priority</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-card-foreground/5 p-2 transition-all duration-300 delay-100 group-hover:bg-card-foreground/10">
                    <p className="text-sm">Unauthorized DB Access</p>
                    <Badge variant="secondary">Medium</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-card-foreground/5 p-2 transition-all duration-300 delay-200 group-hover:bg-card-foreground/10">
                    <p className="text-sm text-muted-foreground">
                      Suspicious Login Pattern
                    </p>
                    <Badge variant="outline">Low</Badge>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  AI analysis complete. 3 new prioritized alerts.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const featuresList = [
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

function Features() {
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
          {featuresList.map((feature, index) => (
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

function Contact() {
  const contactImage = placeholderImageData.placeholderImages.find(
    (p) => p.id === "contact-illustration"
  );

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to revolutionize your security operations? Fill out the form
            to request a personalized demo or ask any questions you might have.
          </p>
          {contactImage && (
            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={contactImage.imageUrl}
                alt={contactImage.description}
                fill
                className="object-cover"
                data-ai-hint={contactImage.imageHint}
              />
            </div>
          )}
        </div>
        <div className="flex items-center">
          <form className="w-full space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                className="min-h-[120px]"
              />
            </div>
            <Button
              type="button"
              className="w-full"
              size="lg"
              onClick={() => alert("This is a demo and doesn't submit.")}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Secure 360. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}