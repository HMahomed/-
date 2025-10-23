"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ScanLine, TrendingUp, Building } from "lucide-react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as LabelPrimitive from "@radix-ui/react-label";

// lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// components/ui/label.tsx
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

// components/ui/input.tsx
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// components/ui/textarea.tsx
const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

// components/ui/badge.tsx
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

// components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// components/ui/card.tsx
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// lib/placeholder-images.json (Data)
const placeholderImageData = {
  "placeholderImages": [
    {
      "id": "contact-illustration",
      "description": "An abstract illustration for the contact section.",
      "imageUrl": "https://images.unsplash.com/photo-1581161461543-e249191d3e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGFic3RyYWN0fGVufDB8fHx8MTc2MTA5OTIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "security abstract"
    }
  ]
};


// Page components
function Secure360Logo({ className }: { className?: string }) {
  return (
    <div className={cn(`flex items-center gap-2 font-headline`, className)}>
      <ShieldCheck className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold text-foreground">
        Secure<span className="text-primary">360</span>
      </span>
    </div>
  );
}

function SedgeEnterpriseLogo() {
  return (
    <svg
      width="130"
      height="38"
      viewBox="0 0 130 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-muted-foreground"
    >
      <g clipPath="url(#clip0_105_2_updated)">
        <path
          d="M26.132 0.400391L13.066 11.0184L0 0.400391H13.066H26.132Z"
          fill="#3E9B4F"
        />
        <path
          d="M26.132 37.5996L13.066 26.9816L0 37.5996H13.066H26.132Z"
          fill="#3E9B4F"
        />
        <path
          d="M31.2 18.9996C31.2 24.3856 28.164 28.9336 22.86 28.9336C19.188 28.9336 16.908 26.6536 15.636 23.4736L19.428 22.1296C19.836 23.2216 20.928 24.3136 22.86 24.3136C25.056 24.3136 26.4 23.1496 26.4 21.1816V20.7376C25.308 21.8296 23.832 22.4296 22.044 22.4296C17.964 22.4296 14.508 19.3936 14.508 14.9656C14.508 10.5376 17.964 7.50159 22.044 7.50159C23.832 7.50159 25.308 8.10159 26.4 9.19359V8.89359H30.636V18.9976L31.2 18.9996ZM22.536 11.2216C20.004 11.2216 18.564 13.0216 18.564 14.9656C18.564 16.9096 20.004 18.7096 22.536 18.7096C25.068 18.7096 26.544 16.9096 26.544 14.9656C26.544 13.0216 25.068 11.2216 22.536 11.2216Z"
          fill="currentColor"
        />
        <path
          d="M49.653 14.9652C49.653 19.3932 46.197 22.4292 42.117 22.4292C38.037 22.4292 34.581 19.3932 34.581 14.9652C34.581 10.5372 38.037 7.50122 42.117 7.50122C46.197 7.50122 49.653 10.5372 49.653 14.9652ZM45.561 14.9652C45.561 12.9852 44.085 11.2212 42.117 11.2212C40.149 11.2212 38.673 12.9852 38.673 14.9652C38.673 16.9452 40.149 18.7092 42.117 18.7092C44.085 18.7092 45.561 16.9452 45.561 14.9652Z"
          fill="currentColor"
        />
        <path
          d="M54.0086 28.5376V8.89359H58.3166V28.5376H54.0086Z"
          fill="currentColor"
        />
        <path
          d="M74.0743 14.9652C74.0743 19.3932 70.6183 22.4292 66.5383 22.4292C62.4583 22.4292 59.0023 19.3932 59.0023 14.9652C59.0023 10.5372 62.4583 7.50122 66.5383 7.50122C70.6183 7.50122 74.0743 10.5372 74.0743 14.9652ZM69.9823 14.9652C69.9823 12.9852 68.5063 11.2212 66.5383 11.2212C64.5703 11.2212 63.0943 12.9852 63.0943 14.9652C63.0943 16.9452 64.5703 18.7092 66.5383 18.7092C68.5063 18.7092 69.9823 16.9452 69.9823 14.9652Z"
          fill="currentColor"
        />
        <path
          d="M89.7029 15.6016L85.6229 21.6016H80.8229L86.0549 14.3656L81.2549 8.89359H86.0549L89.5109 13.5976L92.9669 8.89359H97.7669L92.9669 14.3656L98.1989 21.6016H93.3989L89.7029 15.6016Z"
          fill="currentColor"
        />
        <path
          d="M109.846 17.5816L108.01 21.6016H103.21L108.586 8.89359H114.13L111.43 15.4216L114.73 21.6016H109.93L107.518 17.0416L109.846 17.5816Z"

          fill="currentColor"
        />
        <path
          d="M41.791 0.399902H57.215L53.423 7.5039H45.575L41.791 0.399902Z"
          fill="currentColor"
        />
        <path
          d="M60.1389 0.399902H64.2309V21.6039H60.1389V0.399902Z"
          fill="currentColor"
        />
        <path
          d="M84.7709 21.6039V12.1839L81.1829 7.5039H74.8709L67.7229 21.6039H72.2429L73.6589 17.7039H79.8029L80.6669 21.6039H84.7709ZM78.3389 14.7279H75.0629L76.5149 10.9959L78.3389 14.7279Z"
          fill="currentColor"
        />
        <path
          d="M97.9018 21.6039V0.399902H102.018V13.1199L108.302 0.399902H113.882L106.338 12.6399L114.422 21.6039H109.022L104.286 14.7879L102.018 17.3919V21.6039H97.9018Z"
          fill="currentColor"
        />
        <path
          d="M34.773 0.399902H38.865V21.6039H34.773V0.399902Z"
          fill="currentColor"
        />
        <path
          d="M128.096 11.2239H118.256V7.5039H130V10.7439C130 17.1399 125.024 21.6039 118.328 21.6039C111.632 21.6039 106.808 16.7439 106.808 10.9599C106.808 5.1759 111.632 0.399902 118.328 0.399902C122.96 0.399902 126.752 2.7639 128.588 6.4839H124.28C123.188 4.6839 120.98 3.3879 118.328 3.3879C113.528 3.3879 110.828 7.5039 110.828 10.9599C110.828 14.4159 113.528 18.6159 118.328 18.6159C121.568 18.6159 124.064 16.7199 124.928 14.1399H118.256V11.2239H128.096Z"
          fill="currentColor"
        />
        <path
          d="M93.3149 21.6039V0.399902H88.8389V8.0199L86.4269 0.399902H82.2269L84.6389 7.9119L82.2269 14.2479L78.1109 0.399902H73.9109L79.8029 21.6039H83.8949L88.2029 9.8799L89.4749 12.8559V21.6039H93.3149Z"
          fill="currentColor"
        />
        <path
          d="M26.132 0.400391L13.066 11.0184L0 0.400391H13.066H26.132Z"
          fill="#80B84D"
        />
        <path
          d="M26.132 37.5996L13.066 26.9816L0 37.5996H13.066H26.132Z"
          fill="#80B84D"
        />
      </g>
      <defs>
        <clipPath id="clip0_105_2_updated">
          <rect
            width="130"
            height="37.2"
            fill="white"
            transform="translate(0 0.400391)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Secure360Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="#features"
            className="transition-colors hover:text-foreground/80"
          >
            Features
          </Link>
          <Link
            href="#about-us"
            className="transition-colors hover:text-foreground/80"
          >
            About Us
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
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      <div className="container max-w-7xl">
        <div className="relative z-10 text-center">
          <Badge
            variant="outline"
            className="mb-4 animate-fade-in-up border-primary/50 text-primary"
          >
            Cybersecurity, Simplified.
          </Badge>
          <h1 className="animate-fade-in-up font-headline text-4xl font-bold tracking-tight text-foreground [animation-delay:200ms] sm:text-5xl md:text-6xl">
            Complete Protection for Your
            <br />
            <span className="text-primary">Digital World</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-lg text-muted-foreground [animation-delay:400ms]">
            Secure360 offers a unified platform to monitor threats, manage
            vulnerabilities, and respond to incidents—all in real-time.
          </p>
          <div className="mt-8 flex animate-fade-in-up flex-wrap justify-center gap-4 [animation-delay:600ms]">
            <Button asChild size="lg">
              <Link href="#contact">
                Request a Demo <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mt-12 h-80 animate-fade-in-up [animation-delay:800ms]">
          <div className="absolute inset-x-0 top-0 z-10 h-full bg-gradient-to-t from-background to-transparent" />
          <Image
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5JTIwZGFzaGJvYXJkfGVufDB8fHx8MTc2MTEwMzgzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cybersecurity matrix"
            fill
            className="rounded-lg object-cover object-top shadow-2xl shadow-primary/20"
            data-ai-hint="cybersecurity matrix"
          />
           <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary/20"></div>
        </div>
      </div>
    </section>
  );
}

const featuresList = [
  {
    icon: <ScanLine className="h-8 w-8" />,
    title: "Real-Time Threat Monitoring",
    description:
      "Our advanced system continuously scans your network for threats, providing instant alerts and actionable insights to keep you ahead of attackers.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Vulnerability Management",
    description:
      "Automatically identify, prioritize, and remediate vulnerabilities across your assets, from cloud infrastructure to endpoint devices.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Incident Response",
    description:
      "Streamline your incident response with automated workflows and a centralized command center, reducing response time and minimizing impact.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-muted/50 py-20 md:py-32">
      <div className="container max-w-7xl space-y-16">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Stay Secure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Secure360 combines cutting-edge technology with an intuitive
            interface, making robust cybersecurity accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuresList.map((feature, index) => (
            <Card
              key={index}
              className="transform-gpu bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">
                  {feature.title}
                </CardTitle>
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

function AboutUs() {
  return (
    <section id="about-us" className="py-20 md:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Badge
            variant="outline"
            className="mb-4 w-fit border-primary/50 text-primary"
          >
            The Team Behind The Tech
          </Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Powered by Sedge Enterprise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Secure360 is proudly developed and maintained by Sedge Enterprise, a
            forward-thinking technology firm dedicated to creating innovative
            and reliable software solutions. Our mission is to empower
            businesses with the tools they need to thrive in a digital-first world.
          </p>
          <div className="mt-8 flex items-center gap-4">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-foreground">
                <Building className="h-8 w-8"/>
            </div>
            <div>
                 <h3 className="font-bold text-foreground">Our Vision</h3>
                 <p className="text-muted-foreground">To build a secure and efficient digital future for everyone.</p>
            </div>
          </div>
           <Button asChild className="mt-8 w-fit">
              <Link href="https://sedgent.co.za/" target="_blank" rel="noopener noreferrer">
                Visit Sedge Enterprise
                <ArrowRight />
              </Link>
            </Button>
        </div>
        <div className="relative flex items-center justify-center rounded-lg bg-muted/50 p-8">
            <Image
                src="https://picsum.photos/seed/sedge/600/400"
                alt="Sedge Enterprise Team"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="corporate team"
            />
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
    <section id="contact" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Secure Your Business?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team is here to answer your questions and help you get started
            with Secure360.
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
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="w-full space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your security needs..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="button" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Secure360Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Secure360. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center md:items-end">
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-end">
            <p className="text-xs">Designed by Hamzah Mahomed</p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
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
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
