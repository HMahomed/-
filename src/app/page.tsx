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
  Briefcase,
  BarChart,
  Code,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import placeholderImageData from "@/lib/placeholder-images.json";
import { Label } from "@/components/ui/label";

function SedgentLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="43"
      viewBox="0 0 222 53"
      className="text-foreground"
    >
      <g transform="translate(-86 -54)">
        <text
          transform="translate(86 89)"
          fill="currentColor"
          fontSize="34"
          fontFamily="Poppins-Bold, Poppins"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            SEDGENT
          </tspan>
        </text>
        <text
          transform="translate(87 104)"
          fill="currentColor"
          fontSize="14"
          fontFamily="Poppins-Regular, Poppins"
          letterSpacing="0.01em"
        >
          <tspan x="0" y="0">
            ENTERPRISE
          </tspan>
        </text>
      </g>
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <SedgentLogo />
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
            <Link href="https://sedgent.co.za/" target="_blank">
              Get Started
            </Link>
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
              Your Vision,
              <br />
              <span className="text-primary">Engineered.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Sedgent Enterprise delivers bespoke software solutions that drive
              growth and efficiency. From innovative startups to established
              enterprises, we turn your complex challenges into powerful,
              scalable technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="https://sedgent.co.za/" target="_blank">
                  Explore Our Services <ArrowRight className="ml-2" />
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
                  <Badge variant="secondary">Project Dashboard</Badge>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-md bg-card-foreground/5 p-2 transition-all duration-300 group-hover:bg-card-foreground/10">
                    <p className="text-sm font-medium">
                      E-commerce Platform Migration
                    </p>
                    <Badge variant="destructive">In Progress</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-card-foreground/5 p-2 transition-all duration-300 delay-100 group-hover:bg-card-foreground/10">
                    <p className="text-sm">Mobile App UX/UI Redesign</p>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-card-foreground/5 p-2 transition-all duration-300 delay-200 group-hover:bg-card-foreground/10">
                    <p className="text-sm text-muted-foreground">
                      API Integration Scoping
                    </p>
                    <Badge variant="outline">Planning</Badge>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  3 active projects.
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
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Enterprise Solutions",
    description:
      "We build robust, scalable, and secure applications tailored to your business processes, ensuring seamless operation and future growth.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "BI & Analytics",
    description:
      "Unlock the power of your data. We create intelligent dashboards and analytics platforms to provide actionable insights and drive data-driven decisions.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom Development",
    description:
      "From unique mobile apps to complex system integrations, our custom development services bring your most ambitious ideas to life with precision and quality.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-background py-20 md:py-32">
      <div className="container max-w-7xl space-y-16">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Core Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We transform complex business requirements into elegant, high-performance software solutions.
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
            Let's Build Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to learn more about our services? We'd love to hear from you.
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
                placeholder="Tell us about your project..."
                className="min-h-[120px]"
              />
            </div>
            <Button
              type="button"
              className="w-full"
              size="lg"
              onClick={() => alert("This is a demo and doesn't submit.")}
            >
              Send Message
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
          <div className="w-24">
            <SedgentLogo />
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sedgent Enterprise. All rights reserved.
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
