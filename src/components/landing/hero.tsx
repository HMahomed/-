"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Hero() {
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
